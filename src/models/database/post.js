import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    description: {
        type: String,
        required: true,
        minlength: 3,
    },
    author: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
})

const Post = mongoose.model('Post', postSchema)
export default Post