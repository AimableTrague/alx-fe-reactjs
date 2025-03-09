import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams(); // Extract the dynamic blog ID from the URL

  return (
    <div>
      <h2>Blog Post {id}</h2>
      <p>This is the content of blog post {id}.</p>
    </div>
  );
}

export default BlogPost;
