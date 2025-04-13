import {useSelector} from "react-redux";
import {getAllPosts} from "../../../redux/postsRedux";
import {Col, Row} from "react-bootstrap";
import PostCard from "../../PostCard/PostCard";

const Home = () => {

    const allPosts = useSelector(getAllPosts);
    console.log(allPosts);
    return (
        <div>
            <Row>
                {allPosts.map((post) => (
                    <Col  md={4}>
                        <PostCard key={post.id} post={post} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Home