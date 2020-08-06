import Knex from 'knex'

// sbrescrevendo metodos do knex
export async function up(knex: Knex) {
  // criando novo schema, e criando tabela com seus elementos
  return knex.schema.createTable('users', table => {
    // criando elementos da tabela
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('avatar').notNullable()
    table.string('whatsapp').notNullable()
    table.string('bio').notNullable()
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users')
}