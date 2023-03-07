import {RequestHandler} from 'express'
import User from './user'

export const getUsers: RequestHandler = async (req,res) => {
    const usersFind = await User.find()
    return res.json(usersFind)};

export const getUser: RequestHandler = async (req,res) => {
    const userFindById = await User.findById({_id: req.params.id})
    res.json(userFindById)};

export const CreateUser: RequestHandler = async (req,res) => {
    const userFound = await User.findOne({name: req.body.name})

    if(userFound != null){
        return res.status(301).json({message: 'The User already exists'})
    };
    
    const user = new User(req.body);
    const userSave = await user.save();
    res.json(userSave)};

export const updateUser: RequestHandler = async  (req,res) => {
    const userUpdateById = await User.findByIdAndUpdate(req.params.id, req.body,{new:true})
    res.json(userUpdateById)};

export const deleteUser: RequestHandler = async (req,res) => {
    const userDeleteByName = await User.findByIdAndDelete({_id: req.params.id})
    res.json('user deleted')};

