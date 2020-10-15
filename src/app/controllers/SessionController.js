import Jwt from "jsonwebtoken";
import User from "../models/User";
import auth from "../../config/auth";

class SessionController{
    async store(req, res){
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if(!user){
            return status(401).json({error: "usuario não existe!"})
        }

        if(!(await user.checkPassword(password))){
            return status(401).json({error: "Senha incorreta"})
            
        }
        const { id, name } = user;
        
        return res.json({
             user:{
            id,
            name,
            email,
        },
        token: Jwt.sign({ id }, auth.secret,{
            expiresIn: auth.expiresIn
            })
        })
    }
   
}

export default new SessionController();