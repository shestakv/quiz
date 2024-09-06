"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate({ Question }) {
      this.belongsTo(Question, { foreignKey: "questionId" });
    }
  }
  Answer.init(
    {
      questionId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          key: "id",
          model: "Questions",
        },
        onDelete: "cascade",
      },
      status: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Answer",
    }
  );
  return Answer;
};
