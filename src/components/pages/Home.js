import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

import { getAllPosts } from "../../redux/postsRedux";

const Home = () => {
  const posts = useSelector(getAllPosts);

  return (
    <div>
      <h1>All posts</h1>

      {posts.length === 0 && <p>No posts available.</p>}

      {posts.map((post) => (
        <Card key={post.id} className="mb-3">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.shortDescription}</Card.Text>
            <p>
              <strong>Author:</strong> {post.author}
              <br />
              <strong>Published:</strong> {post.publishedDate}
            </p>
            <Button as={Link} to={`/post/${post.id}`} variant="primary">
              Read more
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Home;
