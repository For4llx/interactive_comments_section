import AppButton from '../components/AppButton';
import AddCommentTextarea from '../components/AddCommentTextarea';
import AddCommentPicture from '../components/AddCommentPicture';
import AddCommentContainer from "../components/AddCommentContainer";
import AddCommentFormAdd from "../components/AddCommentForm";

interface Props {
    username: string,
    srcPrimary: string,
    srcDefault: string,
    buttonText: string,
}

const AddComment: React.FC<Props> = (props) => {
    return (
        <AddCommentContainer>
            <AddCommentPicture
                alt={props.username}
                srcPrimary={props.srcPrimary}
                srcDefault={props.srcDefault}
            />
            <AddCommentFormAdd>
                <AddCommentTextarea placeholder="Add a comment…"></AddCommentTextarea>
                <AppButton>{props.buttonText}</AppButton>
            </AddCommentFormAdd>
        </AddCommentContainer>
    )
}

export default AddComment
