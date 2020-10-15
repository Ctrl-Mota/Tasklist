import Sequelize, { Model } from "sequelize";

class Task extends Model{
    static init(sequelize){
        super.init({
            task: Sequelize.STRING,
            chech: Sequelize.BOOLEAN,
        },{
            sequelize,
        });
        return this;
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
    }
}

export default Task;