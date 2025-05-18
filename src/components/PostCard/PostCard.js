import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const PostCard = props => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.post.title}</Card.Title>
                <Card.Text>Author: {props.post.author}</Card.Text>
                <Card.Text>Published: {props.post.publishedDate}</Card.Text>
                <Card.Text>Category: {props.post.category}</Card.Text>
                <Card.Text>{props.post.shortDescription}</Card.Text>
                <Button as={Link} to={`/post/${props.post.id}`}>Read more</Button>
            </Card.Body>
        </Card>
    )
}

export default PostCard