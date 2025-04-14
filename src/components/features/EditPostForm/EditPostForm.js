import PostForm from '../PostForm/PostForm';
import {useDispatch, useSelector} from 'react-redux';
import {editPost, getPost} from '../../../redux/postsRedux';
import {useNavigate, useParams} from 'react-router-dom';

const EditPostForm = () => {
    const {postId} = useParams();
    const post = useSelector(state => getPost(state, postId));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEditPost = updatedPost => {
        dispatch(editPost({ id: postId, ...updatedPost }));
        navigate('/');
    };

    if (!post) return <p>Post not found</p>;

    return (
        <PostForm
            action={handleEditPost}
            actionText="Edit post"
            title={post.title}
            author={post.author}
            publishedDate={post.publishedDate}
            shortDescription={post.shortDescription}
            content={post.content}
        />
    );
};

export default EditPostForm;
