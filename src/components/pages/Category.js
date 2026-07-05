import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

import { getPostsByCategory } from "../../redux/postsRedux";
import dateToStr from "../../utils/dateToStr";

const Category = () => {
  const { categoryId } = useParams();
  const posts = useSelector((state) => getPostsByCategory(state, categoryId));

  return (
    <div>
      <h1>Category: {categoryId}</h1>

      {posts.length === 0 && <p>No posts in this category.</p>}

      {posts.map((post) => (
        <Card key={post.id} className="mb-3">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.shortDescription}</Card.Text>
            <p>
              <strong>Author:</strong> {post.author}
              <br />
              <strong>Published:</strong> {dateToStr(post.publishedDate)}
              <br />
              <strong>Category:</strong> {post.category}
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

export default Category;
