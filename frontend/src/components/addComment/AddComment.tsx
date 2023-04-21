import AppButton from '../app/AppButton';
import AppContainer from "../app/AppContainer";
import AddCommentTextarea from './AddCommentTextarea';
import AddCommentPicture from './AddCommentPicture';
import AddCommentContainer from "./AddCommentContainer";

interface IUser {
    id: number
    username: string;
    image: {
        webp: string;
        png: string;
    };
}
interface IAddComment {
    buttonText?: string,
    handleSubmit?: any
    buttonName?: string
    currentUser: IUser
    replyToUser?: IUser
    comment?: any
}

const AddComment: React.FC<IAddComment> = ({ currentUser, replyToUser, comment, buttonName, buttonText, handleSubmit }) => {
    return (
        <AppContainer>
            <AddCommentContainer>
                <AddCommentPicture
                    alt={currentUser.username}
                    srcPrimary={currentUser.image.webp}
                    srcDefault={currentUser.image.png}
                />
                <AddCommentTextarea name='content' placeholder="Add a comment…"></AddCommentTextarea>
                <AppButton id={currentUser.id} name={buttonName}>{buttonText}</AppButton>
            </AddCommentContainer>
        </AppContainer>
    )
}

export default AddComment

/*
            <AddCommentForm onSubmit={handleSubmit}>
                {comment.parentId ?
                    <>
                        <AddCommentTextarea name='content' placeholder="Add a comment…" defaultValue={`@${replyToUser?.username} `}></AddCommentTextarea>
                        <AppButton id={comment.parentId} name={buttonName}>{buttonText}</AppButton>
                    </>
                    :
                    <>
                        <AddCommentTextarea name='content' placeholder="Add a comment…"></AddCommentTextarea>
                        <AppButton id={comment.id} name={buttonName}>{buttonText}</AppButton>
                    </>
                }
            </AddCommentForm>
*/