import {Router} from 'express'
import * as userController from './userController'

const router = Router();
router.get('/user', userController.getUsers);
router.post('/user', userController.CreateUser );
router.get('/user/:id', userController.getUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

export default router;
