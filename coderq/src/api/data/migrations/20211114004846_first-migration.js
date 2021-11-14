exports.up = async (knex) => {
    await knex.schema
      .createTable('questions', (table) => {
        table.increments('question_id')
        table.string('question', 200).notNullable()
        table.integer('answer_id')
             .unsigned()
             .notNullable()
             .references('answer_id').inTable('answers')
             .onDelete("RESTRICT")
             .onUpdate("RESTRICT");
      })
      .createTable('answers', (table) => {
        table.increments('answer_id')
        table.string('answer', 512).notNullable()
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('questions')
  }
  