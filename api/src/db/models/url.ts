module.exports = (sequelize: any, DataTypes: any) => {
  const Url = sequelize.define(
    'url',
    {
      urlCode: DataTypes.STRING,
      longURL: DataTypes.STRING,
      shortUrl: DataTypes.STRING,
      clickCount: DataTypes.INTEGER
    },
    {}
  );
  Url.associate = (models: any) => {
    // associations can be defined here
  };
  return Url;
};
