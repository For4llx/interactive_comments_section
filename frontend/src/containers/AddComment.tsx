import AppButton from '../components/AppButton';
import AddCommentTextarea from '../components/AddCommentTextarea';
import AddCommentPicture from '../components/AddCommentPicture';
import AddCommentContainer from "../components/AddCommentContainer";
import AddCommentFormAdd from "../components/AddCommentForm";

function AddComment() {
    return (
        <AddCommentContainer>
            <AddCommentPicture
                alt="juliusomo"
                srcPrimary="./images/avatars/image-juliusomo.webp"
                srcDefault="./images/avatars/image-juliusomo.png"
            />
            <AddCommentFormAdd>
                <AddCommentTextarea placeholder="Add a comment…"></AddCommentTextarea>
                <AppButton>Send</AppButton>
            </AddCommentFormAdd>
        </AddCommentContainer>
    )
}

export default AddComment
