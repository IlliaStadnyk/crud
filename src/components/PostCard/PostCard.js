import {Button, Card} from "react-bootstrap";

const PostCard = props => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.post.title}</Card.Title>
                <Card.Text>Author: {props.post.author}</Card.Text>
                <Card.Text>Published: {props.post.publishedDate}</Card.Text>
                <Card.Text>{props.post.shortDescription}</Card.Text>
                <Button href={`/post/${props.post.id}`}>Read more</Button>
            </Card.Body>
        </Card>
    )
}

export default PostCard