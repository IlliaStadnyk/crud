import {useSelector} from "react-redux";
import {getCategories} from "../../../redux/categoriesRedux";
import {Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Categories = () => {
    const categories = useSelector(getCategories);
    return (
        <Nav className="me-auto flex-column w-100">
            {categories.map((category) => (
                <Nav.Link
                    as={NavLink}
                    to={`/category/${category}`}
                    className="w-100 border mb-2 text-start"
                    key={category}
                >
                    {category}
                </Nav.Link>
            ))}
        </Nav>
    )
}

export default Categories