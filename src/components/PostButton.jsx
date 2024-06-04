import React from 'react'
import { NavLink } from 'react-router-dom'

function PostButton() {
  return (
    <NavLink to={"/create"} className=' bg-blue-500 w-[20%] mx-auto py-2 px-5'>Create Post</NavLink>
  )
}

export default PostButton