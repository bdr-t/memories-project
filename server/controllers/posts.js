const {PostMessage} = require('../models/postMessage.js') 
const mongoose = require('mongoose')

const getPosts = async (req, res) => {
    try{
        const postMessage = await PostMessage.find()

        res.status(200).json(postMessage)

    } catch(err){
        res.status(404).json({message: err.message})
    }
}

const createPost = async (req, res) => {
    const post = req.body
    const newPost = new PostMessage(post)

    try{
        await newPost.save()
        res.status(201).json(newPost)
    } catch(err){
        res.status(409).json({message: err.message})
    }
}

const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

const deletePost = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id)

    res.json({message: 'Post deleted successfully'})

}

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost
}
