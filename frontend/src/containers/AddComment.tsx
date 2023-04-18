import AppButton from '../components/AppButton';
import AddCommentTextarea from '../components/AddCommentTextarea';
import AddCommentPicture from '../components/AddCommentPicture';
import AddCommentContainer from "../components/AddCommentContainer";
import AddCommentForm from "../components/AddCommentForm";

interface Props {
    id: any
    username: string,
    srcPrimary: string,
    srcDefault: string,
    buttonText: string,
    createComment: any
}

const AddComment: React.FC<Props> = (props) => {
    return (
        <AddCommentContainer>
            <AddCommentPicture
                alt={props.username}
                srcPrimary={props.srcPrimary}
                srcDefault={props.srcDefault}
            />
            <AddCommentForm onSubmit={props.createComment}>
                <AddCommentTextarea name='content' placeholder="Add a comment…"></AddCommentTextarea>
                <AppButton id={props.id} >{props.buttonText}</AppButton>
            </AddCommentForm>
        </AddCommentContainer>
    )
}

export default AddComment
