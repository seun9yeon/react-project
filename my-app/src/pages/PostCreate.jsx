import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../store/slices/postsSlice'; 

export default function PostCreate() {
  const [formData, setFormData] = useState({ title: '', content: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addPost({ ...formData, id: Date.now() }));
    setFormData({ title: '', content: '' });
    navigate('/posts');
  }

  return (
    <div>
      <h3>새 게시글 작성</h3>
      <form onSubmit={handleSubmit}>
        <label>
          제목
          <input
            type="text"
            value={formData.title}
            name="title"
            onChange={handleChange}
          />
        </label>
        <label>
          내용
          <textarea
            type="text"
            value={formData.content}
            name="content"
            onChange={handleChange}
          ></textarea>
        </label>
        <button>제출</button>
      </form>
    </div>
  );
}
