import Knex from 'knex'

// sbrescrevendo metodos do knex
export async function up(knex: Knex) {
  // criando novo schema, e criando tabela com seus elementos
  return knex.schema.createTable('class_schedule', table => {
    // criando elementos da tabela
    table.increments('id').primary()
    table.integer('week_day').notNullable()
    table.integer('from').notNullable()
    table.integer('to').notNullable()

    table.integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('class_schedule')
}