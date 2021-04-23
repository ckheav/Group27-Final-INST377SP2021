export default (sequelize, DataTypes) => {
  const SeaInfo = sequelize.define(
    'SeaInfo',
    {
      sea_info_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      full_tide_present: {
        type: DataTypes.VARCHAR
      },
      high_tide_rise_height: {
        type: DataTypes.DECIMAL
      },
      high_tide_set_height: {
        type: DataTypes.DECIMAL
      },
      low_tide_rise_height: {
        type: DataTypes.DECIMAL
      },
      low_tide_set_height: {
        type: DataTypes.DECIMAL
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return SeaInfo;
};
