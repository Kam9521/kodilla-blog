import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

import { getAllCategories } from "../../redux/categoriesRedux";

const Categories = () => {
  const categories = useSelector(getAllCategories);

  return (
    <div>
      <h1>Categories</h1>

      <ListGroup>
        {categories.map((category) => (
          <ListGroup.Item
            key={category}
            as={Link}
            to={`/category/${category.toLowerCase()}`}
          >
            {category}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Categories;
