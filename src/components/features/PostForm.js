import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || "");
  const [author, setAuthor] = useState(props.author || "");
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || "");
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || "",
  );
  const [content, setContent] = useState(props.content || "");

  const handleSubmit = (event) => {
    event.preventDefault();

    action({
      title,
      author,
      publishedDate,
      shortDescription,
      content,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPublishedDate">
        <Form.Label>Published date</Form.Label>
        <Form.Control
          type="date"
          value={publishedDate}
          onChange={(event) => setPublishedDate(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formShortDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={shortDescription}
          onChange={(event) => setShortDescription(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Main content</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
  );
};

export default PostForm;
