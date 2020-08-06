import Knex from 'knex'

// sbrescrevendo metodos do knex
export async function up(knex: Knex) {
  // criando novo schema, e criando tabela com seus elementos
  return knex.schema.createTable('classes', table => {
    // criando elementos da tabela
    table.increments('id').primary()
    table.string('subject').notNullable()
    table.decimal('cost').notNullable()

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('classes')
}