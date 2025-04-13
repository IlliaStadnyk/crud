import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import shortid from "shortid";
import {addPost} from "../../../redux/postsRedux";

const AddPostForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [publishedDate, setPublishedDate] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            id: shortid(),
            title: title,
            author: author,
            shortDescription: description,
            content: content,
            publishedDate: publishedDate
        }

        dispatch(addPost(newPost));
        navigate("/");
    }

    return (
        <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group controlId="formBasicTitle">
                <Form.Label column={"sm"}>Title</Form.Label>
                <Form.Control type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicAuthor">
                <Form.Label column={"sm"}>Author</Form.Label>
                <Form.Control type="text" placeholder='Enter author name'  onChange={(e) => setAuthor(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicPublished">
                <Form.Label column={"sm"}>Published</Form.Label>
                <Form.Control type="date" placeholder='Title' onChange={(e) => setPublishedDate(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicShortDescription">
                <Form.Label column={"sm"}>Short description</Form.Label>
                <Form.Control type="text" placeholder='Title' onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicMainContent">
                <Form.Label column={"sm"}>Main content</Form.Label>
                <Form.Control as="textarea" rows={6} placeholder='Write the main content...' onChange={(e) => setContent(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    )
}
export default AddPostForm;