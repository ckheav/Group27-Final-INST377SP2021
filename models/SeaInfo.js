/* eslint-disable camelcase */
export default (sequelize, DataTypes) => {
  const sea_information = sequelize.define(
    'Ssea_information',
    {
      sea_info_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      full_tide_present: {
        type: DataTypes.STRING
      },
      high_tide_rise_height: {
        type: DataTypes.DOUBLE
      },
      high_tide_set_height: {
        type: DataTypes.DOUBLE
      },
      low_tide_rise_height: {
        type: DataTypes.DOUBLE
      },
      low_tide_set_height: {
        type: DataTypes.DOUBLE
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return sea_information;
};
