/* eslint-disable camelcase */
export default (sequelize, DataTypes) => {
  const weather_primary = sequelize.define(
    'weather_primary',
    {
      weather_primary_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
      },
      temperature: {
        type: DataTypes.DECIMAL
      },
      humidity: {
        type: DataTypes.DECIMAL
      },
      wind_speed: {
        type: DataTypes.INTEGER
      },

      date: {
        type: DataTypes.DATE
      },
      weather_secondary_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },
      region_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
      },
      season_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return weather_primary;
};
