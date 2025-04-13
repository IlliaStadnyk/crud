import {useSelector} from "react-redux";
import {getAllPosts} from "../../../redux/postsRedux";
import {Button, Col, Row} from "react-bootstrap";
import PostCard from "../../PostCard/PostCard";
import {Link} from "react-router-dom";

const Home = () => {

    const allPosts = useSelector(getAllPosts);
    console.log(allPosts);
    return (
        <div>
            <div className="d-flex justify-content-between m-2">
                <h1>All Posts</h1>
                <Button as={Link} to={`/post/add`} className="d-flex align-items-center justify-content-center" variant="outline-info">Add Post</Button>
            </div>
            <Row>
                {allPosts.map((post) => (
                    <Col  md={4} className="mt-3">
                        <PostCard key={post.id} post={post} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Home