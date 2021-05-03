/* eslint-disable camelcase */
export default (sequelize, DataTypes) => {
  const weather_secondary = sequelize.define(
    'weather_secondary',
    {
      weather_secondary_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      pressure_Hg: {
        type: DataTypes.DOUBLE
      },
      precipitation_in: {
        type: DataTypes.DOUBLE
      },
      dew_point: {
        type: DataTypes.DOUBLE
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return weather_secondary;
};