import AppButton from '../app/AppButton';
import AppContainer from "../app/AppContainer";
import AddCommentTextarea from './AddCommentTextarea';
import AddCommentPicture from './AddCommentPicture';
import AddCommentContainer from "./AddCommentContainer";
import AddCommentForm from "./AddCommentForm"

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
    handleAddComment?: Function
    handleAddReply?: Function
    buttonName?: string
    currentUser: IUser
    replyToUser?: IUser
    comment?: any
    isReplyMode: boolean
}

const AddComment: React.FC<IAddComment> = ({ currentUser, replyToUser, comment, buttonName, buttonText, handleAddComment, isReplyMode, handleAddReply }) => {
    return (
        <AddCommentContainer>
            <AddCommentPicture
                alt={currentUser.username}
                srcPrimary={currentUser.image.webp}
                srcDefault={currentUser.image.png}
            />
            {isReplyMode ?
                <AddCommentForm onSubmit={handleAddReply}>
                    {comment.parent_id ?
                        <>
                            <AddCommentTextarea name='content' placeholder="Add a comment…" defaultValue={`@${replyToUser?.username} `}></AddCommentTextarea>
                            <AppButton id={comment.parent_id} name={buttonName}>{buttonText}</AppButton>
                        </>
                        :
                        <>
                            <AddCommentTextarea name='content' placeholder="Add a comment…"></AddCommentTextarea>
                            <AppButton id={comment.id} name={buttonName}>{buttonText}</AppButton>
                        </>
                    }
                </AddCommentForm>
                :
                <AddCommentForm onSubmit={handleAddComment}>
                    <AddCommentTextarea name='content' placeholder="Add a comment…"></AddCommentTextarea>
                    <AppButton id={currentUser.id} name={buttonName}>{buttonText}</AppButton>
                </AddCommentForm>
            }
        </AddCommentContainer>
    )
}

export default AddComment
