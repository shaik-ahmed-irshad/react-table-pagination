import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return (
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>)
  }
 

  return (
    <>
      {posts.map((post,index) => (
        <tr key={index} >
          <td>{post.id}</td>
          <td>{post.albumId}</td>
          <td>{post.title}</td>
          <td>{<img width={70} height={70} src={post.url}></img>}</td>
          <td>{<img width={40} height={40} src={post.thumbnailUrl}></img>}</td>
        </tr>
      ))
      }
    </>
  );
};

export default Posts;