import { BlogsModel } from "../Model/BlogModel.js"

export const getAllBlogs = async (req, res) => {
    const blogs = await BlogsModel.find({})
    res.send(blogs)
}

export const getByIdBlogs = async (req, res) => {
    const { id } = req.params
    const blog = await BlogsModel.findById(id)
    res.send(blog)
}

export const getCreateBlogs = async (req, res) => {
    const { title, description } = req.body;
    const newBlog = new BlogsModel({ title, description })
    await newBlog.save()
    res.send('Got a POST request')
}

export const getUpdateBlogs = async (req, res) => {
    const { id } = req.params
    const { title, description } = req.body;
    const blog = await BlogsModel.findByIdAndUpdate(id, { title, description })
    res.send('Got a PUT request at /blog')
}

export const getDeleteBlogs = async (req, res) => {
    const { id } = req.params
    const blogs = await BlogsModel.findByIdAndDelete(id)
    res.send('Got a DELETE request at /blog')
}