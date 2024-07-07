import { userModel } from "../models/user_model.js";

// Function to add a user
export const addUser = async (req, res, next) => {
    try {
        const addData = await userModel.create(req.body)
        res.status(200).json(addData)
    } catch (error) {
        next(error)
    }
}

// Function to get all users
export const getUsers = async (req, res, next) => {
    try {
        // Get query params
        const { limit, skip, filter } = req.query;
        // Get all recipes from database
        const allUsers = await userModel
            .find(filter)
            .limit(limit)
            .skip(skip);
        // Return all recipes as response
        res.json(allUsers);
    } catch (error) {
        next(error);
    }
}


// Function to get a user by certain parameters
export const getUser = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

// Function to update the details of a user
export const updateUser = async (req, res, next) => {
    try {
        const updateData = await userModel.findByIdAndUpdate(req.params.id)
        res.status(200).json(updateData)
    } catch (error) {
        next(error)
    }
}

// Function to delete a user with a unique ID
export const deleteUser = async (req, res, next) => {
    try {
        const deleteData = await userModel.findByIdAndDelete(req.params.id)
        res.status(200).json(`User with ID ${req.params.id} has been deleted`)
    } catch (error) {
        next(error)
    }
}