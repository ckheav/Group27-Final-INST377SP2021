/* eslint-disable camelcase */
export default (sequelize, DataTypes) => {
  const weather_secondary = sequelize.define(
    'weather_secondary',
    {
      weather_secondary_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
      },
      pressure_Hg: {
        type: DataTypes.DECIMAL
      },
      precipitation_in: {
        type: DataTypes.DECIMAL
      },
      dew_point: {
        type: DataTypes.DECIMAL
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return weather_secondary;
};