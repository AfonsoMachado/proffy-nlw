import Knex from 'knex'

// sbrescrevendo metodos do knex
export async function up(knex: Knex) {
  // criando novo schema, e criando tabela com seus elementos
  return knex.schema.createTable('connections', table => {
    // criando elementos da tabela
    table.increments('id').primary()

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    table.timestamp('created_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable()
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('connections')
}