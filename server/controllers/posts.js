const {PostMessage} = require('../models/postMessage.js') 

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
    const {id: _id} = req.params
    const post = req.body
    if(mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

    const updatePost = await PostMessage.findByIdAndUpdate(_id, post, {new : true} )

    res.json(updatePost)
}

module.exports = {
    getPosts,
    createPost,
    updatePost,
}
