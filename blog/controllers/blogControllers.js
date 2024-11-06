// Create Blog
export const createBlog = async(req, res)=>{
    return res.json({message:"Blog created successfully."});
}

// Read Blog
export const readBlog = async(req, res)=>{
    return res.json({message:"Blog read successfully."});
}

// Update Blog
export const updateBlog = async(req, res)=>{
    return res.json({message:"Blog update successfully."});
}

// Delete Blog
export const deleteBlog = async(req, res)=>{
    return res.json({message:"Blog delete successfully."});
}