const User = require('../model/user.model')
const bcrypt = require('bcrypt')
const signup = async (req, res) => {
    try{
        const {fullname,email,password} = req.body || {}
        const user = await User.findOne({email})

        if(user){
            return res.status(400).json({message:"User already exists"})
        }
        const hassedPassword = await bcrypt.hash(password,10)
        const newUser = new User({fullname,email,password:hassedPassword})
        await newUser.save()
        const userwithoutPassword = newUser.toObject()
        delete userwithoutPassword.password
        res.status(201).json({message:"User created successfully",user:userwithoutPassword})

    }catch(error){
        console.log("Error in user signup:",error)
        res.status(500).json(error)
    }
}

const login = async (req, res) => {
    try {
        const {email,password} = req.body || {}
        const user = await User.findOne({email})
        if( !user){
            return res.status(400).json({message:"Invalid email or password"})
        }
        const isPasswordMatch = await bcrypt.compare(password,user.password)
        if( !isPasswordMatch){
            return res.status(400).json({message:"Invalid email or password"})
        }
            const userwithoutPassword = user.toObject() 
            delete userwithoutPassword.password
            res.status(200).json({message:"Login successful",user:userwithoutPassword})
    } catch (error) {
        console.log("Error in user login:",error)
        res.status(500).json(error)
    }
}

module.exports = {signup,login}