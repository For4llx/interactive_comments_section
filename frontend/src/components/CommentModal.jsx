import styled from 'styled-components'

const Container = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: hsl(0, 0%, 0%, 50%);
    visibility: hidden;
`

const Modal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 1.5rem;
    background-color: ${props => props.theme.white};
    border-radius: 8px;
    max-width: 400px;
`

const Heading = styled.h1`
    font-family: 'Rubik', sans-serif;
    font-weight: bold;
    font-size: 24px;
    color: ${props => props.theme.darkBlue};
`

const Paragraph = styled.p`
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: ${props => props.theme.fontSizeParagraph};
    color: ${props => props.theme.grayishBlue};
    line-height: 24px;
`

const ButtonList = styled.ul`
    display: flex;
    justify-content: space-between;
`



function CommentModal(props) {
    return (
        <Container>
            <Modal>
                <Heading>Delete comment</Heading>
                <Paragraph>
                    Are you sure you want to delete this comment?
                    This will remove the comment and can’t be undone.
                </Paragraph>
                <ButtonList>
                    <li>{props.buttonCancel}</li>
                    <li>{props.buttonDelete}</li>
                </ButtonList>
            </Modal>
        </Container>
    )
}

export default CommentModal