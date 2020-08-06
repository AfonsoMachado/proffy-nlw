import { Request, Response } from 'express'

import db from '../database/connection'
import convertHourToMinutes from '../utils/convertHourToMinutes'

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string
}

export default class ClassesController {

  // Listagem
  async index(request: Request, response: Response) {
    const filters = request.query

    const subject = filters.subject as string
    const week_day = filters.week_day as string
    const time = filters.time as string


    // verifica se todos os elementos existem
    if (!filters.week_day || !filters.subject || !filters.time) {
      return response.status(400).json({
        error: "Missing filters to search classes"
      })
    }

    // Realiza a conversão da hora inserida em minutos
    const timeInMinutes = convertHourToMinutes(time)

    // verificação da materia
    const classes = await db('classes')
      .whereExists(function () {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ?? ', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject) //ATÉ AQUI FUNCIONA
      .join('users', 'classes.user_id', '=', 'users.id') // inner join
      .select(['classes.*', 'users.*'])

    // console.log(classes);

    return response.json(classes)
  }

  async create(request: Request, response: Response) {
    // dados para criaação da aula
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = request.body

    const transaction = await db.transaction()

    try {
      // Inserindo usuario dentro do db
      const insertedUsersId = await transaction('users').insert({
        name,
        avatar,
        whatsapp,
        bio
      })

      // primeiro inserido
      const user_id = insertedUsersId[0]

      const insertedClassesId = await transaction('classes').insert({
        subject,
        cost,
        user_id
      })

      // primeiro inserido
      const class_id = insertedClassesId[0]

      // Formatando o class schedule
      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to)
        }
      })

      // Inserindo o class shchedule no banco de dados
      await transaction('class_schedule').insert(classSchedule)

      await transaction.commit()

      return response.status(201).send()
    } catch (error) {
      // desfaz alterações no banco em casos de erro
      await transaction.rollback()

      return response.status(400).json({
        error: 'Unexpected error while creating new class'
      })
    }
  }
}