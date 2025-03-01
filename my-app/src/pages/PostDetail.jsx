import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function PostDetail() {
  const { postId } = useParams();
  const posts = useSelector((state) => state.posts);

  const [post, setPost] = useState();

  useEffect(() => {
    setPost(posts.find((post) => post.id === parseInt(postId)));
  });

  if (!post) {
    return <p>게시물을 찾을 수 없습니다.</p>;
  }
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
}
