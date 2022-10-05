"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class credit_card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    //this function is used to hide id from user
    // toJSON() {
    //   return { ...this.get(), id: undefined };
    // }
  }

  credit_card.init(
    {
      holder_name: { type: DataTypes.STRING, allowNull: false },
      card_number: { type: DataTypes.STRING, allowNull: false },
      cvc: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "credit_card",
    }
  );
  return credit_card;
};
