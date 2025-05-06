import express, { response } from 'express';
import { StatusCodes } from "http-status-codes";
import { expressYupMiddleware } from 'express-yup-middleware';

import userController from './controllers/user.controller.js'
import userService from './services/user.service.js'
import {getUser,addUser,updateUser,deleteUser} from './user.schemas.js';

const router = express.Router()

const STATUS={
    'success':'OK',
    'failure':'ERROR'
}


router.get('/all',userController.getAllUsers)

router.get('/:id',
    expressYupMiddleware({schemaValidator:getUser}),
    userController.getUser)

router.post('/',
    expressYupMiddleware({schemaValidator:addUser, expectedStatusCode:StatusCodes.BAD_REQUEST}),
    userController.addUser
)

router.put('/:id',
    expressYupMiddleware({schemaValidator:updateUser}),
    userController.updateUser,
)

router.delete('/:id',
    expressYupMiddleware({schemaValidator:deleteUser}),
    userController.deleteUser)

export default router;