const User = require('../models/users')

exports.getUserById = async (req, res, next,id) => {
    try {
        const user = await User.findById(id)
        if (!user) {
            return res.status(400).json({error: 'No user found'});
        }
        req.user = user;
        next();
    } catch (err) {
        return res.status(400).json({error: err?.message || 'No user found'});
    }
}


exports.getUser = (req, res) => {
    console.log(req.user);
    req.user.hash_password = undefined;
    return res.json(req.user);
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users);
    } catch (err) {
        return res.status(400).json({error:err?.message || 'No user found'});
    }
}

exports.adminUpdateUser = async (req,res) => {
    try {
        const user = await User.findById(req.body.userId)
        user.role = req.body.role;
        user.name = req.body.name;
        const updatedUser = await user.save()
        res.json({message: 'User updated successfully', user: updatedUser})
    } catch (err) {
        return res.status(403).json({error:err?.message || 'Failed to update user'});
    }
}

exports.adminDeleteUser = async (req,res) => {
    try {
        const user = await User.deleteOne({_id: req.params.deleteUserId})
        
        res.json({message: 'User deleted successfully'})
    } catch (err) {
        return res.status(403).json({error:err?.message || 'Failed to delete user'});
    }
}