import { useParams } from 'react-router-dom';
import {useSelector} from "react-redux";
import {getPostsByCategory} from "../../../redux/postsRedux";
import PostCard from "../../PostCard/PostCard";
import {Col, Row} from "react-bootstrap";

const CategorySearch = () => {
    const { categoryId } = useParams();
    const allPosts = useSelector(state => getPostsByCategory(state, categoryId));

    return (
        <div>
            <h2>Selected Category: {categoryId}</h2>
            <Row>
                {allPosts.map((post) => (
                    <Col  md={4} className="mt-3">
                        <PostCard key={post.id} post={post} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default CategorySearch;