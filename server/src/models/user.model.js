import { sequelize } from '../utils/database.js';
import { DataTypes } from 'sequelize';

const UserModel = sequelize.define('users', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING(255),
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
    selectable: false,
  },
  names: {
    type: DataTypes.STRING(255),
    allowNull: true,
  }
},{
  timestamps: false,
  indexes: [
    {
      name: "email",
      fields: ["email"],
    },
    {
      name: "password",
      fields: ["password"],
    },
    {
      name: "names",
      fields: ["names"],
    }
  ],
},
);
UserModel.sync({ alter: true })
  .then(() => {
    console.log("Data table created successfully");
  })
  .catch((error) => {
    console.error("Error creating Data table:", error);
  });


export default UserModel