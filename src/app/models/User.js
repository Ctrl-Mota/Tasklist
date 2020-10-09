import Sequelize, { Model } from "sequelize";

class User extends Model{
    static init(sequelize){
        super.init(
            {
                name: Sequelize.NUMBER,
                email: Sequelize.NUMBER,
                password_hash: Sequelize.NUMBER
            },
            {
                sequelize,
            }
        );
    }
}
export default User;