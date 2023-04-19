import AppButton from '../components/AppButton';
import AddCommentTextarea from '../components/AddCommentTextarea';
import AddCommentPicture from '../components/AddCommentPicture';
import AddCommentContainer from "../components/AddCommentContainer";
import AddCommentForm from "../components/AddCommentForm";

interface IProps {
    id: number,
    username: string,
    srcPrimary: string,
    srcDefault: string,
    buttonText: string,
    handleSubmit: any
    buttonName: string
    parentId?: number
    parentUsername?: string
}

const AddComment: React.FC<IProps> = (props) => {
    return (
        <AddCommentContainer>
            <AddCommentPicture
                alt={props.username}
                srcPrimary={props.srcPrimary}
                srcDefault={props.srcDefault}
            />
            <AddCommentForm onSubmit={props.handleSubmit}>
                {props.parentId ?
                    <>
                        <AddCommentTextarea name='content' placeholder="Add a comment…" defaultValue={`@${props.parentUsername} `}></AddCommentTextarea>
                        <AppButton id={props.parentId} name={props.buttonName}>{props.buttonText}</AppButton>
                    </>
                    :
                    <>
                        <AddCommentTextarea name='content' placeholder="Add a comment…"></AddCommentTextarea>
                        <AppButton id={props.id} name={props.buttonName}>{props.buttonText}</AppButton>
                    </>
                }
            </AddCommentForm>
        </AddCommentContainer>
    )
}

export default AddComment
