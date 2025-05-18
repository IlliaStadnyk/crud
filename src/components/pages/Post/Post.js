import {Button,  Col, Container, Modal, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {deletePost, getPost} from "../../../redux/postsRedux";
import {Link, Navigate, useParams} from "react-router-dom";
import {useState} from "react";

const Post = () => {

    const dispatch = useDispatch();
    const {postId} = useParams();
    const post = useSelector(state => getPost(state, postId));
    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        dispatch(deletePost(post.id));
        setShowModal(false);
    }
    if (!post) return <Navigate to="/" />;
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <div>
                        <h1>{post.title}</h1>
                        <h4><span className="fw-bold">Author:</span> {post.author}</h4>
                        <h4><span className="fw-bold">Published:</span> {post.publishedDate}</h4>
                        <h4><span className="fw-bold">Category:</span> {post.category}</h4>
                        <h4><span>{post.content}</span><br/></h4>
                    </div>

                </Col>
                <Col md={6}>
                <div className="d-flex justify-content-center gap-2 mt-3">
                    <Button variant="outline-info" as={Link} to={`/post/edit/${post.id}`}>Edit</Button>
                    <Button variant="outline-danger" onClick={()=> setShowModal(true)}>Delete</Button>
                    </div>
                </Col>
            </Row>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>This action will permanently delete the post.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button variant="danger" onClick={handleDelete}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Post