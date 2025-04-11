import React from 'react'

const A = ({message , posts}) => {
  return (
    <div>
        <h1>A component</h1>
        <p>{message}</p>
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default A