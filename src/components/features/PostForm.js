import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../redux/categoriesRedux";

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || "");
  const [author, setAuthor] = useState(props.author || "");
  const [publishedDate, setPublishedDate] = useState(
    props.publishedDate || null,
  );
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || "",
  );
  const [content, setContent] = useState(props.content || "");

  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const categories = useSelector(getAllCategories);
  const [category, setCategory] = useState(props.category || categories[0]);
  useEffect(() => {
    if (props.title !== undefined) {
      setTitle(props.title || "");
      setAuthor(props.author || "");
      setPublishedDate(props.publishedDate || null);
      setShortDescription(props.shortDescription || "");
      setContent(props.content || "");
      setCategory(props.category || categories[0] || "");
    }
  }, [
    props.title,
    props.author,
    props.publishedDate,
    props.shortDescription,
    props.content,
    props.category,
    categories,
  ]);

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleSubmit = () => {
    setContentError(!content);
    setDateError(!publishedDate);

    if (content && publishedDate) {
      action({
        title,
        author,
        publishedDate,
        shortDescription,
        content,
        category,
      });
    }
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...register("title", { required: true, minLength: 3 })}
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        {errors.title && (
          <small className="d-block form-text text-danger mt-2">
            Title is too short (min is 3)
          </small>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control
          {...register("author", { required: true, minLength: 3 })}
          type="text"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        {errors.author && (
          <small className="d-block form-text text-danger mt-2">
            Author is too short (min is 3)
          </small>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPublishedDate">
        <Form.Label>Published date</Form.Label>
        <DatePicker
          selected={publishedDate}
          onChange={(date) => setPublishedDate(date)}
          dateFormat="MM/dd/yyyy"
        />
        {dateError && (
          <small className="d-block form-text text-danger mt-2">
            Date can't be empty
          </small>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formShortDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control
          {...register("shortDescription", {
            required: true,
            minLength: 20,
          })}
          as="textarea"
          rows={3}
          value={shortDescription}
          onChange={(event) => setShortDescription(event.target.value)}
        />
        {errors.shortDescription && (
          <small className="d-block form-text text-danger mt-2">
            Short description is too short (min is 20)
          </small>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCategory">
        <Form.Label>Category</Form.Label>
        <Form.Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Main content</Form.Label>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={(value) => setContent(value)}
        />
        {contentError && (
          <small className="d-block form-text text-danger mt-2">
            Content can't be empty
          </small>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
  );
};

export default PostForm;
