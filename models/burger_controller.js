
module.exports = function(sequelize, DataTypes) {
	var burgers_list = sequelize.define("burgers_list", {
		ordered_burger: DataTypes.STRING,
		burger_eaten: DataTypes.BOOLEAN,
	});
	return burgers_list;
}