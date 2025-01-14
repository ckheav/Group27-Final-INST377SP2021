/* eslint-disable camelcase */
export default (sequelize, DataTypes) => {
  const celestial_phases = sequelize.define(
    'celestial_phases',
    {
      celestial_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
      },
      moon_type: {
        type: DataTypes.STRING
      },
      moon_rise_time: {
        type: DataTypes.TIME
      },
      moon_fall_time: {
        type: DataTypes.TIME
      },
      sun_rise_time: {
        type: DataTypes.TIME
      },
      sun_fall_time: {
        type: DataTypes.TIME
      },
      sea_info_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return celestial_phases;
};
