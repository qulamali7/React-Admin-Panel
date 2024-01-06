import express from "express"
import { getAllBlogs, getByIdBlogs, getCreateBlogs, getDeleteBlogs, getUpdateBlogs, } from "../Controller/BlogController.js"
export const blogRoute = express.Router()

blogRoute.get('/blogs', getAllBlogs)
blogRoute.get('/blogs/:id', getByIdBlogs)
blogRoute.post('/blogs', getCreateBlogs)
blogRoute.put('/blogs/:id', getUpdateBlogs)
blogRoute.delete('/blogs/:id', getDeleteBlogs)
