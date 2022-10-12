import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
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