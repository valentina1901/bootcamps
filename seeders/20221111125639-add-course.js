'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     
     await queryInterface.bulkInsert('cursos', [{
      title: 'javascript',
      descripcion: 'la vida es una boleta',
      weeks: '2022-08-17',
      enroll_cost: '21200000',
      minimum_skill: 'principiante'
     },
     {
      title: 'javascript2',
      descripcion: 'la vida es una fea',
      weeks: '2022-08-18',
      enroll_cost: '21500000',
      minimum_skill: 'master'
    }
    
    ], {});
    
},
    async down (queryInterface, Sequelize) {
      //bulkDelete: eliminar todos los registros de una base de datos 
       await queryInterface.bulkDelete('cursos', null, {});
    
    }
  };
