import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Navigate } from "react-router-dom";

import { editPost, getPostById } from "../../redux/postsRedux";
import PostForm from "./PostForm";

const EditPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const post = useSelector((state) => getPostById(state, id));

  const handleSubmit = (postData) => {
    dispatch(
      editPost({
        id,
        ...postData,
      }),
    );

    navigate("/");
  };

  if (!post) return <Navigate to="/" />;

  return (
    <PostForm
      action={handleSubmit}
      actionText="Edit post"
      title={post.title}
      author={post.author}
      publishedDate={post.publishedDate}
      shortDescription={post.shortDescription}
      content={post.content}
      category={post.category}
    />
  );
};

export default EditPostForm;
