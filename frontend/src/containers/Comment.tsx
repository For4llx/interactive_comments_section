import { useCallback, useState } from 'react';
import AppLayer from '../components/AppLayer';
import AppButton from '../components/AppButton'
import AppHeading from "../components/AppHeading"
import AppParagraph from "../components/AppParagraph"
import CommentContainer from "../components/CommentContainer"
import CommentPicture from "../components/AddCommentPicture"
import CommentProfile from "../components/CommentProfile"
import CommentHeader from "../components/CommentHeader"
import CommentActionList from "../components/CommentActionList"
import CommentAction from "../components/CommentAction"
import CommentReplyIcon from "../components/CommentReplyIcon"
import CommentDeleteIcon from "../components/CommentDeleteIcon"
import CommentEditIcon from "../components/CommentEditIcon"
import CommentContent from "../components/CommentContent"
import CommentOwner from "../components/CommentOwner"
import AddComment from "./AddComment"
import Counter from "./Counter"
import CommentModalContainer from '../components/CommentModalContainer';
import AddCommentTextarea from "../components/AddCommentTextarea"
import CommentEditForm from '../components/CommentEditForm';
import CommentModalForm from '../components/CommentModalForm';
interface Props {
    username: string,
    createdAt: string,
    content: string,
    counterValue: number,
    pictureSrcPrimary: string,
    pictureSrcDefault: string,
    currentUser: any,
    commentUserId: number,
}

const useToggle = (initialState: boolean = false): [boolean, any] => {
    // Initialize the state
    const [state, setState] = useState<boolean>(initialState);

    // Define and memorize toggler function in case we pass down the comopnent,
    // This function change the boolean value to it's opposite value
    const toggle = useCallback((): void => setState(state => !state), []);

    return [state, toggle]
}

const Comment: React.FC<Props> = (props) => {
    const [isReplyMode, setIsReplyMode] = useToggle();
    const [isEditMode, setIsEditMode] = useToggle();
    const [isDeletetMode, setIsDeleteMode] = useToggle();
    const [content, setContent] = useState(props.content);

    const handleUpdateContent = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        setContent(e.currentTarget.content.value)
        setIsEditMode()
    }

    return (
        <>
            {isDeletetMode &&
                <AppLayer>
                    <CommentModalContainer>
                        <AppHeading large>Delete comment</AppHeading>
                        <AppParagraph>
                            Are you sure you want to delete this comment?
                            This will remove the comment and can’t be undone.
                        </AppParagraph>
                        <CommentModalForm>
                            <AppButton large cancel onClick={setIsDeleteMode}>No, cancel</AppButton>
                            <AppButton large delete>Yes, delete</AppButton>
                        </CommentModalForm>
                    </CommentModalContainer>
                </AppLayer>
            }
            <CommentContainer>
                <Counter
                    counterValue={props.counterValue}
                />
                <CommentContent>
                    <CommentHeader>
                        <CommentProfile>
                            <CommentPicture
                                alt={props.username}
                                srcPrimary={props.pictureSrcPrimary}
                                srcDefault={props.pictureSrcDefault}
                            />
                            <AppHeading>
                                {props.username}
                            </AppHeading>
                            {props.currentUser.id == props.commentUserId &&
                                <CommentOwner>you</CommentOwner>
                            }
                            <AppParagraph>{props.createdAt}</AppParagraph>
                        </CommentProfile>
                        <CommentActionList>
                            {props.currentUser.id == props.commentUserId &&
                                <>
                                    <CommentAction delete onClick={setIsDeleteMode}>
                                        <CommentDeleteIcon />
                                        Delete
                                    </CommentAction>
                                    <CommentAction onClick={setIsEditMode}>
                                        <CommentEditIcon />
                                        Edit
                                    </CommentAction>
                                </>
                            }
                            <CommentAction onClick={setIsReplyMode}>
                                <CommentReplyIcon />
                                Reply
                            </CommentAction>
                        </CommentActionList>
                    </CommentHeader>
                    {isEditMode ?
                        <CommentEditForm onSubmit={handleUpdateContent}>
                            <AddCommentTextarea
                                name='content'
                                defaultValue={content}
                            >
                            </AddCommentTextarea>
                            <AppButton>Update</AppButton>
                        </CommentEditForm>
                        :
                        <AppParagraph>
                            {content}
                        </AppParagraph>
                    }
                </CommentContent>
            </CommentContainer>
            {isReplyMode &&
                <AddComment
                    username={props.currentUser.username}
                    srcPrimary={props.currentUser.image.webp}
                    srcDefault={props.currentUser.image.png}
                    buttonText="Reply"
                />
            }
        </>
    )
}

export default Comment
