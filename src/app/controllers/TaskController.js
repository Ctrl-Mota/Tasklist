import * as Yup from "yup";
import Task from "../models/Tasks";

class TaskController{

    async index(req, res){
        const tasks = await Task.findAll({
            where: { user_id: req.userId}
        })
        return res.json(tasks)
    }
    async store(req,res){
        const schema = Yup.object().shape({
            task: Yup.string().required(),
        })
        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'falha ao cadastrar tarefa..'});
        }
        const { task } = req.body;
        const tasks = await Task.create({
            user_id: req.userId,
            task,
        })
        return res.json(tasks)
    }
    async check(req, res){
        const {task_id} = req.params;
        const schema = Yup.object().shape({
            check: Yup.boolean().required(),
        })
        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'Valor inválido'});
        }

        const task = await Task.findByPk(task_id)
       
        if(!task){
            return res.status(400).json({ error: 'Tarefa não existe!'});
        }
        
        await task.update(req.body)
        
        return res.json(task)
    }
    async check(req, res){
        const {task_id} = req.params;
        const schema = Yup.object().shape({
            check: Yup.boolean().required(),
        })
        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'Valor inválido'});
        }

        const task = await Task.findByPk(task_id)
       
        if(!task){
            return res.status(400).json({ error: 'Tarefa não existe!'});
        }
        
        await task.update(req.body)
        
        return res.json(task)
    }
    async delete( req,res){
        const {task_id} = req.params;
        const task = await Task.findByPk(task_id)
       
        if(!task){
            return res.status(400).json({ error: 'Tarefa não existe!'});
        }
        if(task.user_id !== req.userId){
            return res.status(401).json({ error: 'Voce não tem acesso a essa tarefa!'});
        }
        await task.destroy();
        
        return res.send(`Task ${task_id} foi deletada.`)
    }
}

export default new TaskController();