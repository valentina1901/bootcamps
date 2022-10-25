'use strict';
 /*@type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     
     await queryInterface.bulkInsert('users', [{
       name: 'valentina',
      email: 'vgaviria415@misena.edu.co',
      assword:'1234'
     },
     {
      name: 'doctor',
     email: 'doctor@misena.edu.co',
     assword:'6547'}
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    //bulkDelete: eliminar todos los registros de una base de datos 
     await queryInterface.bulkDelete('users', null, {});
  
  }
};
