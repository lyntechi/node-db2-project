exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert([
    {
      vin: "3D7UT2CL0BG625027",
      make: "FORD",
      model: "E-150 CLUB WAGON",
      mileage: 13000,
      transmissonType: "Manual",
      titleStatus: "Clean",
    },
    {
      vin: "1G3NF52E3XC403652",
      make: "KTM",
      model: "250 XC-W",
      mileage: 22000,
      transmissonType: "Automatic",
      titleStatus: "Clean",
    },
    {
      vin: "LM4AC113061105688",
      make: "MERCEDES-BENZ",
      model: "S350",
      mileage: 67000,
      transmissonType: "Semi-auto",
      titleStatus: "Salvaged",
    },
    {
      vin: "JH4KA4571LC033593",
      make: "INTERNATIONAL",
      model: " CXT",
      mileage: 55041,
      transmissonType: "dual-clutch",
      titleStatus: "Clean",
    },
    {
      vin: "WAULFAFR3DA006959",
      make: "HARLEY DAVIDSON",
      model: "XL1200X FORTY-EIGHT",
      mileage: 120000,
      transmissonType: "automatic",
      titleStatus: " Salvaged",
    },
  ]);
};
