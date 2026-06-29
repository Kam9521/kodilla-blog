import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Navigate, Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

import { getPostById, removePost } from "../../redux/postsRedux";

const SinglePost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => getPostById(state, id));
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleRemovePost = () => {
    dispatch(removePost(post.id));
  };

  if (!post) return <Navigate to="/" />;

  return (
    <article>
      <div className="d-flex justify-content-between align-items-start mb-3">
        <h1>{post.title}</h1>

        <div>
          <Button
            as={Link}
            to={`/post/edit/${post.id}`}
            variant="outline-info"
            className="me-2"
          >
            Edit
          </Button>

          <Button variant="outline-danger" onClick={handleShow}>
            Delete
          </Button>
        </div>
      </div>

      <p>
        <strong>Author:</strong> {post.author}
        <br />
        <strong>Published:</strong> {post.publishedDate}
      </p>

      <p>{post.content}</p>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          This action will completely remove this post. Are you sure you want to
          do this?
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>

          <Button variant="danger" onClick={handleRemovePost}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </article>
  );
};

export default SinglePost;
