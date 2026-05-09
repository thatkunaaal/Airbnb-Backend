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
