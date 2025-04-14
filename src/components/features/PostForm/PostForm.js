import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import PropTypes from "prop-types";

const PostForm = ({action, actionText, title = '', author = '', publishedDate = '', shortDescription = '', content = ''}) => {
    const [formTitle, setFormTitle] = useState(title);
    const [formAuthor, setFormAuthor] = useState(author);
    const [formPublishedDate, setFormPublishedDate] = useState(publishedDate);
    const [formShortDescription, setFormShortDescription] = useState(shortDescription);
    const [formContent, setFormContent] = useState(content);

    const handleSubmit = e => {
        e.preventDefault();
        action({
            title: formTitle,
            author: formAuthor,
            publishedDate: formPublishedDate,
            shortDescription: formShortDescription,
            content: formContent
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle" className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    value={formTitle}
                    onChange={e => setFormTitle(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formAuthor" className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control
                    type="text"
                    value={formAuthor}
                    onChange={e => setFormAuthor(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formPublishedDate" className="mb-3">
                <Form.Label>Published</Form.Label>
                <Form.Control
                    type="date"
                    value={formPublishedDate}
                    onChange={e => setFormPublishedDate(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formShortDescription" className="mb-3">
                <Form.Label>Short Description</Form.Label>
                <Form.Control
                    type="text"
                    value={formShortDescription}
                    onChange={e => setFormShortDescription(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formContent" className="mb-3">
                <Form.Label>Main Content</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={5}
                    value={formContent}
                    onChange={e => setFormContent(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">{actionText}</Button>
        </Form>
    );
};

PostForm.propTypes = {
    action: PropTypes.func.isRequired,
    actionText: PropTypes.string.isRequired,
    title: PropTypes.string,
    author: PropTypes.string,
    publishedDate: PropTypes.string,
    shortDescription: PropTypes.string,
    content: PropTypes.string
};

export default PostForm;
