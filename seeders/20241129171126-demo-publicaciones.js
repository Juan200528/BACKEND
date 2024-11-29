'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('blogs',[
      {
        titulo: "Express",
        contenido:"JavaScript es un lenguaje de programación",
        autor:"Juanito",
        fecha:new Date(),
        createdAT: new Date(),
        updatedAt: new Date()
      },

      {
        titulo: "Sequelize",
        contenido:"lenguaje estándar utilizado para crear y estructurar contenido en la web",
        autor:"Pepe",
        fecha:new Date(),
        createdAT: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('blogs',null,{})
  
  }
};
