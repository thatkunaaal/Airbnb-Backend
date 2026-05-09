// "use strict";
// const { Model, INTEGER } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//   class hotel extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   hotel.init(
//     {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER,
//       },
//       name: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       address: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       location: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     },
//     {
//       sequelize,
//       modelName: "hotel",
//     },
//   );
//   return hotel;
// };

import {Model,InferAttributes,InferCreationAttributes,CreationOptional, DataTypes} from "sequelize"
import {sequelize} from "./sequelize";

class Hotel extends Model<InferAttributes<Hotel>,InferCreationAttributes<Hotel>>{
  declare id: CreationOptional<number>;
  declare name : string;
  declare address : string;
  declare location : string;
  declare rating : CreationOptional<number>;
  declare rating_count : CreationOptional<number>;
}

Hotel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name:{
    type: DataTypes.STRING,
  },
  address:{
    type: DataTypes.STRING,
  },
  location:{
    type: DataTypes.STRING,
  },
  rating:{
    type: DataTypes.DECIMAL(3,2)
  },
  rating_count:{
    type: DataTypes.INTEGER
  }
},{
  tableName: "hotels",
  timestamps: true,
  sequelize
})

export default Hotel;
