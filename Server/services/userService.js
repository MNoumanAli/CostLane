import user from "../Models/User"
import bcrypt from 'bcrypt'

export const createUser = async(data) => {
    try {
        const newUser  = new user({
            firstname : data.firstname,
            lastname : data.lastname,
            email : data.email,
            password : data.password,
            phone : data.phone,
        });
        const savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        throw error
    }
};

export const getUserById = async (id) => {
    try {
        const userData = await user.findById({_id : id});
        return userData;
    } catch (error) {
        throw error;   
    }
};

export const getUserByEmail = async (email) => {
    try {
        const userData = await user.findOne({email : email});
        return userData;
    } catch (error) {
        throw error;
    }
};

export const getAllUsers = async (email) => {
    try {
        const userData = await user.findAll();
        return userData;
    } catch (error) {
        throw error;
    }
};

export const changeUserPassword = async (id,hashedPassword) => {
    try {
        await user.findByIdAndUpdate(
            {_id : id},
            {password : hashedPassword},
        )
    } catch (error) {
        throw error
    }
};

export const verifyUserPasswordByEmail = async (email, password) => {
    try {
        const userPassword = await user.findOne({email : email}).password;
        const hashedPassword = await bcrypt.compare(password, userPassword);
        if(hashedPassword) return true;
        else return false;   
    } catch (error) {
        throw error;
    }
};

export const userExistByEmail = async (email) => {
    try {
        const user = await user.findOne({email : email});
        if(user) return true;
        else return false;   
    } catch (error) {
        throw error;
    }
};