'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [{
      title: 'javascript',
      text: 'a mí también me chimba conocerte',
      rating: '8'
     },
     {
      title: 'javascript',
      text: 'a mí también me chimba mirarte',
      rating: '5'
    }
    
    ], {});
    
},
    async down (queryInterface, Sequelize) {
      //bulkDelete: eliminar todos los registros de una base de datos 
       await queryInterface.bulkDelete('reviews', null, {});
    
    }
  };