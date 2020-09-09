exports.up = async function (knex) {
  await knex.schema.createTable("cars", (table) => {
    table.increments("id");
    table.text("VIN").notNull().unique();
    table.text("make").notNull();
    table.text("model").notNull();
    table.integer("mileage").notNull();
    table.text("transmissionType");
    table.text("titleStatus");
  });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("cars")
};

// The critical information for each car is the VIN, make, model, and mileage.
// They also track transmission type and status of the title (clean, salvage, etc.),
//  but this information is not always immediately known.
