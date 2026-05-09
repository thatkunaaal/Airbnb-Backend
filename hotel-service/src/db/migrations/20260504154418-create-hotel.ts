/** @type {import('sequelize-cli').Migration} */
import {  QueryInterface,INTEGER,DATE,STRING } from "sequelize";
export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('hotels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      name: {
        type: STRING,
        allowNull: false
      },
      address: {
        type: STRING,
        allowNull: false
      },
      location: {
        type: STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DATE
      },
      updatedAt: {
        allowNull: false,
        type: DATE
      }
    });
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('hotels');
  }
};