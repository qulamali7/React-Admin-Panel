import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    title: {
        type: String,
        unique: true,
    },
    description: String,
}, { timestamps: true }); 

export const BlogsModel = mongoose.model('blogs', blogSchema);