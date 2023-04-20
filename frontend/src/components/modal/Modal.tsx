import AppLayer from "../app/AppLayer"
import AppButton from "../app/AppButton"
import AppHeading from "../app/AppHeading"
import AppParagraph from "../app/AppParagraph"
import ModalContainer from "./ModalContainer"
import ModalForm from "./ModalForm"

interface IModal {
    setIsDeleteMode: Function
    parentId: number
    id: number
}

const Modal: React.FC<IModal> = ({ setIsDeleteMode, parentId, id }) => {
    return (
        <AppLayer>
            <ModalContainer>
                <AppHeading large>Delete comment</AppHeading>
                <AppParagraph>
                    Are you sure you want to delete this comment?
                    This will remove the comment and can’t be undone.
                </AppParagraph>
                <ModalForm>
                    <AppButton large cancel onClick={setIsDeleteMode}>No, cancel</AppButton>
                    {parentId ?
                        <AppButton large delete name="deleteReply" id={id}>Yes, delete</AppButton>
                        :
                        <AppButton large delete name="deleteComment" id={id}>Yes, delete</AppButton>
                    }
                </ModalForm>
            </ModalContainer>
        </AppLayer>
    )
}

export default Modal