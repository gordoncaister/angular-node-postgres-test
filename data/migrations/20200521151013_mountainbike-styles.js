exports.up = function (knex) {
    return knex.schema.createTable("disciplines", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
      tbl.text("description");
      tbl.string("img-url");
    });
  };
  
  exports.down = function (knex) {
    // undo the operation in up
    return knex.schema.dropTableIfExists("disciplines");
  };