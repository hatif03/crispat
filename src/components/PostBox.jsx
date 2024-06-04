import React from 'react'

function PostBox({data}) {
  return (
    <div className=' p-5 border-2 space-y-3'>
        <div className=' font-bold'>{data.title}</div>
        <div>{data.content}</div>
        <div className=' flex items-center justify-between'>
            <div>{data.date}</div>
            <div>{data.like}</div>
            <div>{data.comments}</div>
        </div>
    </div>
  )
}

export default PostBox