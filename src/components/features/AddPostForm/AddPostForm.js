import PostForm from '../PostForm/PostForm';
import {useDispatch} from 'react-redux';
import {addPost} from '../../../redux/postsRedux';
import {useNavigate} from 'react-router-dom';
import shortid from 'shortid';

const AddPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddPost = post => {
        dispatch(addPost({ id: shortid.generate(), ...post }));
        navigate('/');
    };

    return <PostForm action={handleAddPost} actionText="Add post" />;
};

export default AddPostForm;
