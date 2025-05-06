import { StatusCodes } from "http-status-codes";
import pino from 'pino';

const logger = pino();

import userService from '../services/user.service.js'

const STATUS={
    'success':'OK',
    'failure':'ERROR'
}

const getAllUsers=(req,res)=>{
    const users = userService.getAllUsers()
    
    if(users.length){
        logger.info('Retrieving all Users...')
        return res.status(StatusCodes.OK).send(users)
    }
    return res.status(StatusCodes.NOT_FOUND).send(
        {
            status:STATUS.failure,
            message:"No Users Found",
        }
    )
}

const getUser=(req,res)=>{
    const id=parseInt(req.params.id,10);
    const user = userService.getUser(id)
    if(user){
        logger.info('Retrieving User...')
        return res.status(StatusCodes.OK).send(
            {
                status:STATUS.success,
                user,
            }
        )
    }

    return res.status(StatusCodes.NOT_FOUND).send(
        {
            status:STATUS.failure,
            message:`User ${id}  not found!`,
        }
    )
}

const addUser=(req,res)=>{
    const {body:user} = req;

    logger.info('Creating a User...')
    const addedUser = userService.addUser(user);
    
    return res.status(StatusCodes.CREATED).send({
        status:STATUS.success,
        message:user,
    }); 
}

const updateUser = (req,res)=>{
    const {body:user} = req;

    const id = parseInt(req.params.id,10 );
    const updatedUser = userService.updateUser(id,user);
    
    
    if(updatedUser){
        logger.info('Updating the User...')
        return res.status(StatusCodes.OK).send({
            status:STATUS.success,
            message:updatedUser,
        }); 
    }
    else{
        return res.status(StatusCodes.NOT_FOUND).send({
            status:STATUS.failure,
            message:`User ${id}  not found!`,
        });
    }
}

const deleteUser=(req,res)=>{
    const id=parseInt(req.params.id,10)
    const user = userService.getUser(id);
    if(user){
        logger.info('Deleting a User...')
        userService.removeUser(id);
        return res.status(StatusCodes.OK).send({
            status:STATUS.success,
            message:`User ${id} has been deleted`,
        })
    }
    else{
        return res.status(StatusCodes.NOT_FOUND).send({
            status:STATUS.failure,
            message:`User ${id} is not found`,
        })
    }
}

export default {getAllUsers,getUser,addUser,updateUser,deleteUser}