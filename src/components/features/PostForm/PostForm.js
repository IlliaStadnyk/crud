import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import PropTypes from "prop-types";
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {getCategories} from "../../../redux/categoriesRedux";
const PostForm = ({action, actionText, title = '',category ='', author = '', publishedDate = '', shortDescription = '', content = ''}) => {
    const [formTitle, setFormTitle] = useState(title);
    const [formAuthor, setFormAuthor] = useState(author);
    const [formCategory, setFormCategory] = useState(category);
    const [formPublishedDate, setFormPublishedDate] = useState(publishedDate);
    const [formShortDescription, setFormShortDescription] = useState(shortDescription);
    const [formContent, setFormContent] = useState(content);
    const [contentError, setContentError] = useState(null);
    const [dateError, setDateError] = useState(null);
    const categories = useSelector(getCategories);
    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const handleSubmit = () => {
        setContentError(!formContent)
        setDateError(!formPublishedDate)
        console.log(formCategory);
        if(formContent && formPublishedDate) {
            action({ title: formTitle,
                     author: formAuthor,
                     publishedDate: formPublishedDate,
                     shortDescription: formShortDescription,
                     content: formContent,
                     category: formCategory });
        }
    };

    return (
        <Form onSubmit={validate(handleSubmit)}>
            <Form.Group controlId="formTitle" className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    {...register("title", {required: true, minLength: 3})}
                    type="text"
                    value={formTitle}
                    onChange={e => setFormTitle(e.target.value)}
                />
                {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
            </Form.Group>

            <Form.Group controlId="formAuthor" className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control
                    {...register("author", {required: true, minLength: 3})}
                    type="text"
                    value={formAuthor}
                    onChange={e => setFormAuthor(e.target.value)}
                />
                {errors.author && <small className="d-block form-text text-danger mt-2">This field is required and must have at least 3 letters</small>}
            </Form.Group>

            <Form.Group controlId="formPublishedDate" className="mb-3">
                <Form.Label>Published</Form.Label>
                <Form.Control
                    type="date"
                    value={formPublishedDate}
                    onChange={e => setFormPublishedDate(e.target.value)}
                />
                {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
            </Form.Group>

            <Form.Group controlId="formCaategory" className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select aria-label="Default select example"
                             {...register("category", {required: true})}
                             value={formCategory}
                             onChange={e => setFormCategory(e.target.value)}>
                    <option value=''>Select category</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </Form.Select>
                {errors.category && (
                    <small className="d-block form-text text-danger mt-2">
                        This field is required
                    </small>)}
            </Form.Group>

            <Form.Group controlId="formShortDescription" className="mb-3">
                <Form.Label>Short Description</Form.Label>
                <Form.Control
                    {...register("shortDescription", {required: true, minLength: 20})}
                    type="text"
                    value={formShortDescription}
                    onChange={e => setFormShortDescription(e.target.value)}
                />
                {errors.description && <small className="d-block form-text text-danger mt-2">This field is required and must have at least 20 letters</small>}
            </Form.Group>

            <Form.Group controlId="formContent" className="mb-3">
                <Form.Label>Main Content</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={5}
                    value={formContent}
                    onChange={e => setFormContent(e.target.value)}
                />
                {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
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
