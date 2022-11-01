'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('bootcamps',
                                  'bootcamps_id',{
                                    type:Sequelize.INTEGER,
                                    references:{
                                      model:'cursos',
                                    key:'id',
                                    },
                                    onUpdate:'CASCADE',
                                    onDelete:'SET NULL'

                                  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('bootcamps',
                                      'bootcamps_id')
  }
};
