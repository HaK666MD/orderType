export function up(knex) {
  return knex.schema
    .createTable("orderName", (t) => {
      t.increments("id").unsigned().primary();
      t.string("title").notNull();
    })
    .createTable("orderType", (t) => {
      t.increments("id").unsigned().primary();
      t.string("title").notNull();
    })
    .createTable("property", (t) => {
      t.increments("id").unsigned().primary();
      t.string("title").notNull();
      //t.string("position").notNull();
      //t.decimal("salary", 14, 2).notNull();
    })
    .createTable("orderType_property", (t) => {
      t.increments("id").unsigned().primary();
      t.integer("orderType_id").unsigned().notNull().references("orderType.id");
      t.integer("property_id").unsigned().notNull().references("property.id");
    })
    .createTable("order", (t) => {
      t.increments("id").unsigned().primary();
      t.integer("orderName_id").unsigned().notNull().references("orderName.id");
      t.integer("orderType_id").unsigned().notNull().references("orderType.id");
      t.string("employee").notNull();
    });
}

export function down(knex) {
  return knex.schema
    .dropTable("orderName")
    .dropTable("orderType")
    .dropTable("property")
    .dropTable("orderType_property")
    .dropTable("order");
}
