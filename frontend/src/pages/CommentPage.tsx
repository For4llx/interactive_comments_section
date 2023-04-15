import AppContainer from '../components/AppContainer';
import AddComment from '../containers/AddComment';
import Counter from '../containers/Counter';
import Comment from '../containers/Comment';

function CommentPage() {
    return (
        <AppContainer>
            <Counter />
            <Comment />
            <AddComment />
        </AppContainer>
    )
}

export default CommentPage
