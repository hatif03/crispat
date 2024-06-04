import React from 'react'
import { data } from '../../dummy_data/data'
import PostBox from './PostBox'
import { log } from 'debug/src/browser'

function Posts() {
  console.log(data)
  return(
    <>
    {data.map(function (post, index){
      console.log(post);
     return(<PostBox data={post} key={index}/>)
  })}
    </>
  )
}

export default Posts