
import styled from 'styled-components'
import Comment from '../components/Comment'
import CommentAdd from '../components/CommentAdd';
import Counter from '../components/Counter'
import AppButton from '../components/AppButton'
import { useState, useEffect } from 'react';
const WrapperModal = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: hsl(0, 0%, 0%, 50%);
`

const Modal = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 1.5rem;
    background-color: ${props => props.theme.white};
    border-radius: 8px;
    max-width: 400px;
`

const HeadingModal = styled.h1`
    font-family: 'Rubik', sans-serif;
    font-weight: bold;
    font-size: 24px;
    color: ${props => props.theme.darkBlue};
`

const ParagraphModal = styled.p`
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: ${props => props.theme.fontSizeParagraph};
    color: ${props => props.theme.grayishBlue};
    line-height: 24px;
`

const ButtonListModal = styled.ul`
    display: flex;
    justify-content: space-between;
`


const CommentsContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: max(calc(50% - 730px / 2), 1rem);
    padding-right: max(calc(50% - 730px / 2), 1rem);
`

const ReplyItem = styled.li`
    margin-top: 0.5rem;
    padding-left: 2.688rem;
    margin-left: 2.688rem;
    border-left: 2px solid ${props => props.theme.lightGray};
    width: -moz-available;


    @media (max-width: 768px) {
        padding-left: 1rem;
        margin-left: 0;
    }
`

const CommenItem = styled.li`
    width: 100%;
`

const CommentWrapper = styled.article`
    padding: 1.5rem;
    display: flex;
    align-items: top;
    gap: 1.5rem;
    background-color: ${props => props.theme.white};
    border-radius: 8px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`

const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`

const Image = styled.img`
    width: 40px;
    height: 40px;
`

const Heading = styled.h1`
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: ${props => props.theme.fontSizeParagraph};
    color: ${props => props.theme.darkBlue};
`

const Tag = styled.div`
    padding: 1px 6px 1px 6px;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 13px;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.moderateBlue};
    border-radius: 2px;
`

const Paragraph = styled.p`
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: ${props => props.theme.fontSizeParagraph};
    color: ${props => props.theme.grayishBlue};
    line-height: 24px;
`
const Button = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: ${props => props.theme.fontSizeParagraph};
    color: ${props => props.red ? props.theme.softRed : props.theme.moderateBlue};
    fill: ${props => props.red ? props.theme.softRed : props.theme.moderateBlue};
    line-height: 24px;
    &:hover {
        color: ${props => props.red ? props.theme.paleRed : props.theme.lightGrayishBlue};
        fill: ${props => props.red ? props.theme.paleRed : props.theme.lightGrayishBlue};
    }
`
const ButtonList = styled.ul`
    display: flex;
    gap: 1.5rem;
    @media (max-width: 768px) {
        display: none;
    }
`

const ButtonListMobile = styled.ul`
    display: flex;
    gap: 1.5rem;
`

const Footer = styled.footer`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

const ReplyList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 2.688rem;

    @media (max-width: 768px) {
        padding-left: 0;
    }
`

const Textarea = styled.textarea`
    padding: 1rem;
    display: flex;
    align-items: top;
    gap: 1rem;
    max-width: 730px;
    background-color: ${props => props.theme.white};
    border-radius: 8px;
    border: 1px solid ${props => props.theme.lightGray};
    resize: none;
    width: 100%;
    height: 96px;
    line-height: 24px;
    color: ${props => props.theme.darkBlue};
    &:focus {
        border: 1px solid ${props => props.theme.moderateBlue};
    }
`

const CommentAddWrapper = styled.article`
    padding: 1.5rem;
    display: flex;
    align-items: top;
    gap: 1.5rem;
    background-color: ${props => props.theme.white};
    border-radius: 8px;
    width: 100%;
`

const CommentAddImage = styled.img`
    width: 40px;
    height: 40px;
`

const CommentAddTextarea = styled.textarea`
    padding: 1rem;
    display: flex;
    align-items: top;
    gap: 1rem;
    max-width: 730px;
    background-color: ${props => props.theme.white};
    border-radius: 8px;
    border: 1px solid ${props => props.theme.lightGray};
    resize: none;
    width: 100%;
    height: 96px;
    line-height: 24px;
    color: ${props => props.theme.darkBlue};
    &:focus {
        border: 1px solid ${props => props.theme.moderateBlue};
    }
`

const CommentAddItem = styled.li`
    width: 100%;
    padding-top: 0.5rem;
`

const CounterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.veryLightGray};
    width: fit-content;
    height: fit-content;
    border-radius: 10px;
    @media (max-width: 768px) {
        display: none;
    }
`

const CounterWrapperMobile = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-items: center;
        width: fit-content;
        height: fit-content;
        border-radius: 10px;
        background-color: ${props => props.theme.veryLightGray};
    }
`

const CounterButton = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    fill: ${props => props.theme.lightGrayishBlue};
    padding: 1rem;
    &:hover {
        fill: ${props => props.theme.moderateBlue};
    }
`

const Value = styled.span`
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    color: ${props => props.theme.moderateBlue};
`

function Comments() {
    const [comments, setComments] = useState([]);
    const [currentUser, setcurrentUser] = useState({
        id: "",
        image: "",
        username: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            const response1 = await fetch('http://127.0.0.1:8000/users/');
            const response2 = await fetch('http://127.0.0.1:8000/comments/');
            const users = await response1.json();
            const comments = await response2.json();
            setComments(comments);
            setcurrentUser(users[4]);
        };
        fetchData();
    }, []);


    const handleCounterIncrementClick = (itemId) => {
        const updatedItems = comments.map(comment => {
            if (comment.likedBy === undefined) {
                comment.likedBy = []
            }
            if (comment.dislikedBy === undefined) {
                comment.dislikedBy = []
            }
            if (comment.id === itemId && !comment.likedBy.includes(currentUser)) {
                if (comment.dislikedBy.includes(currentUser)) {
                    comment.dislikedBy.pop(currentUser)
                } else {
                    comment.likedBy.push(currentUser)
                }
                return {
                    ...comment,
                    score: comment.score + 1,
                };
            }
            return comment;
        });
        setComments(updatedItems);
    }

    const handleCounterDecrementClick = (itemId) => {
        const updatedItems = comments.map(comment => {
            if (comment.likedBy === undefined) {
                comment.likedBy = []
            }
            if (comment.dislikedBy === undefined) {
                comment.dislikedBy = []
            }
            if (comment.id === itemId && !comment.dislikedBy.includes(currentUser)) {
                if (comment.likedBy.includes(currentUser)) {
                    comment.likedBy.pop(currentUser)
                } else {
                    comment.dislikedBy.push(currentUser)
                }
                return {
                    ...comment,
                    score: comment.score - 1,
                };
            }
            return comment;
        });
        setComments(updatedItems);
    }

    const handleEditClick = (itemId, content) => {
        const updatedItems = comments.map(comment => {
            if (comment.id === itemId) {
                if (content) {
                    return {
                        ...comment,
                        content: content,
                        isEditing: !comment.isEditing
                    };
                }
                return {
                    ...comment,
                    isEditing: !comment.isEditing
                };
            }
            return comment;
        });
        setComments(updatedItems);
    }

    const handleReplyClick = (itemId) => {
        const updatedItems = comments.map(comment => {
            if (comment.id === itemId) {
                return {
                    ...comment,
                    isReplying: !comment.isReplying
                };
            }
            return comment;
        });
        setComments(updatedItems);
    }

    const handleDeleteClick = (itemId) => {
        const updatedItems = comments.map(comment => {
            if (comment.id === itemId) {
                return {
                    ...comment,
                    isDeleting: !comment.isDeleting
                };
            }
            return comment;
        });
        setComments(updatedItems);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const content = e.target[0].value
        let body = ""
        if (e.target[1].dataset.reply) {
            body = JSON.stringify({
                "user": currentUser,
                "content": content,
                "reply": true,
                "repliedTo": 1
            })
        } else {
            body = JSON.stringify({
                "user": currentUser,
                "content": content,
            })
        }

        fetch('http://127.0.0.1:8000/comments/', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: body

        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const handleReply = (e) => {
        e.preventDefault();
        handleSubmit(e)
        /*
                const id = e.target[1].id
                const content = e.target[0].value
                const body = JSON.stringify({
                    "user": currentUser,
                    "content": content,
                    "reply": true,
                })
                fetch(`http://127.0.0.1:8000/comments/${id}/`, {
                    method: 'PATCH',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: body
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Success:', data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });*/
    }

    const handleCommentUpdate = (e) => {
        e.preventDefault();
        const content = e.target[0].value
        const id = e.target[1].id
        const body = JSON.stringify({
            "id": id,
            "content": content,
        })
        console.log(body)
        fetch(`http://127.0.0.1:8000/comments/${id}/`, {
            method: 'PUT',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: body

        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                handleEditClick(parseInt(e.target[1].id), content)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const handleCommentDelete = (e) => {
        e.preventDefault();
        const id = e.target[0].id
        setComments((current) => current.filter(comment => comment.id != id))
        fetch(`http://127.0.0.1:8000/comments/${id}/`, {
            method: 'DELETE',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <CommentsContainer>
            {comments.map(comment => (
                !comment.reply ?
                    <>
                        {
                            comment.isDeleting ?
                                <WrapperModal>
                                    <Modal onSubmit={handleCommentDelete} method='delete'>
                                        <HeadingModal>Delete comment</HeadingModal>
                                        <ParagraphModal>
                                            Are you sure you want to delete this comment?
                                            This will remove the comment and can’t be undone.
                                        </ParagraphModal>
                                        <ButtonListModal>
                                            <li><AppButton id={comment.id} onClick={() => handleDeleteClick(comment.id)}>No, cancel</AppButton></li>
                                            <li><AppButton id={comment.id}>Yes, delete</AppButton></li>
                                        </ButtonListModal>
                                    </Modal>
                                </WrapperModal>
                                :
                                null
                        }
                        <CommenItem>
                            <CommentWrapper>
                                <CounterWrapper>
                                    <CounterButton id={comment.id} onClick={() => handleCounterIncrementClick(comment.id)}>
                                        <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" /></svg>
                                    </CounterButton>
                                    <Value>{comment.score}</Value>
                                    <CounterButton id={comment.id} onClick={() => handleCounterDecrementClick(comment.id)}>
                                        <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" /></svg>
                                    </CounterButton>
                                </CounterWrapper>
                                <Content>
                                    <Header>
                                        <Profile>
                                            <Image src={comment.user.image.webp} alt={comment.user.username} />
                                            <Heading>
                                                {comment.user.username}
                                            </Heading>
                                            {currentUser.id == comment.user.id ?
                                                <Tag>
                                                    you
                                                </Tag>
                                                :
                                                null}
                                            <Paragraph>
                                                {comment.timestamp}
                                            </Paragraph>
                                        </Profile>
                                        <ButtonList>
                                            {currentUser.id == comment.user.id ?
                                                <>
                                                    <li>
                                                        <Button red id={comment.id} onClick={() => handleDeleteClick(comment.id)}>
                                                            <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" /></svg>
                                                            Delete
                                                        </Button>
                                                    </li>
                                                    <li>
                                                        <Button id={comment.id} onClick={() => handleEditClick(comment.id)}>
                                                            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" /></svg>
                                                            Edit
                                                        </Button>
                                                    </li>
                                                </>
                                                :
                                                null}
                                            <li>
                                                <Button id={comment.id} onClick={() => handleReplyClick(comment.id)}>
                                                    <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" /></svg>
                                                    Reply
                                                </Button>
                                            </li>
                                        </ButtonList>
                                    </Header>
                                    {comment.isEditing ?
                                        <form onSubmit={handleCommentUpdate} method="PUT">
                                            <Textarea
                                                defaultValue={comment.content}
                                            >
                                            </Textarea>
                                            <AppButton id={comment.id}>Update</AppButton>
                                        </form>
                                        :
                                        <Paragraph>
                                            {comment.content}
                                        </Paragraph>}
                                    <Footer>
                                        <CounterWrapperMobile>
                                            <CounterButton id={comment.id} onClick={() => handleCounterIncrementClick(comment.id)}>
                                                <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" /></svg>
                                            </CounterButton>
                                            <Value>{comment.score}</Value>
                                            <CounterButton id={comment.id} onClick={() => handleCounterDecrementClick(comment.id)}>
                                                <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" /></svg>
                                            </CounterButton>
                                        </CounterWrapperMobile>
                                        <ButtonListMobile>
                                            {currentUser.id == comment.user.id ?
                                                <>
                                                    <li>
                                                        <Button red id={comment.id} onClick={() => handleDeleteClick(comment.id)}>
                                                            <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" /></svg>
                                                            Delete
                                                        </Button>
                                                    </li>
                                                    <li>
                                                        <Button id={comment.id} onClick={() => handleEditClick(comment.id)}>
                                                            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" /></svg>
                                                            Edit
                                                        </Button>
                                                    </li>
                                                </>
                                                :
                                                null}
                                            <li>
                                                <Button id={comment.id} onClick={() => handleReplyClick(comment.id)}>
                                                    <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" /></svg>
                                                    Reply
                                                </Button>
                                            </li>
                                        </ButtonListMobile>
                                    </Footer>
                                </Content>
                            </CommentWrapper>
                            {comment.isReplying ?
                                <form onSubmit={handleReply} method="POST">
                                    <CommentAddItem>
                                        <CommentAddWrapper>
                                            <CommentAddImage src={currentUser.image.webp} alt={currentUser.username} />
                                            <CommentAddTextarea></CommentAddTextarea>
                                            <AppButton data-reply="true" id={comment.id}>Reply</AppButton>
                                        </CommentAddWrapper>
                                    </CommentAddItem>
                                </form>
                                :
                                null
                            }
                        </CommenItem>
                        {comment.replies.map((reply => (
                            <>
                                {
                                    reply.isDeleting ?
                                        <WrapperModal>
                                            <Modal onSubmit={handleCommentDelete} method='delete'>
                                                <HeadingModal>Delete comment</HeadingModal>
                                                <ParagraphModal>
                                                    Are you sure you want to delete this comment?
                                                    This will remove the comment and can’t be undone.
                                                </ParagraphModal>
                                                <ButtonListModal>
                                                    <li><AppButton id={reply.id} onClick={() => handleDeleteClick(reply.id)}>No, cancel</AppButton></li>
                                                    <li><AppButton id={reply.id}>Yes, delete</AppButton></li>
                                                </ButtonListModal>
                                            </Modal>
                                        </WrapperModal>
                                        :
                                        null
                                }
                                <ReplyItem>
                                    <CommentWrapper>
                                        <CounterWrapper>
                                            <CounterButton id={reply.id} onClick={() => handleCounterIncrementClick(reply.id)}>
                                                <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" /></svg>
                                            </CounterButton>
                                            <Value>{reply.score}</Value>
                                            <CounterButton id={reply.id} onClick={() => handleCounterDecrementClick(reply.id)}>
                                                <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" /></svg>
                                            </CounterButton>
                                        </CounterWrapper>
                                        <Content>
                                            <Header>
                                                <Profile>
                                                    <Image src={reply.user.image.webp} alt={reply.user.username} />
                                                    <Heading>
                                                        {reply.user.username}
                                                    </Heading>
                                                    {currentUser.id == reply.user.id ?
                                                        <Tag>
                                                            you
                                                        </Tag>
                                                        :
                                                        null
                                                    }
                                                    <Paragraph>
                                                        {reply.timestamp}
                                                    </Paragraph>
                                                </Profile>
                                                <ButtonList>
                                                    {currentUser.id == reply.user.id ?
                                                        <>
                                                            <li>
                                                                <Button red id={reply.id} onClick={() => handleDeleteClick(reply.id)}>
                                                                    <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" /></svg>
                                                                    Delete
                                                                </Button>
                                                            </li>
                                                            <li>
                                                                <Button id={reply.id} onClick={() => handleEditClick(reply.id)}>
                                                                    <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" /></svg>
                                                                    Edit
                                                                </Button>
                                                            </li>
                                                        </>
                                                        :
                                                        null}
                                                    <li>
                                                        <Button id={reply.id} onClick={() => handleReplyClick(reply.id)}>
                                                            <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" /></svg>
                                                            Reply
                                                        </Button>
                                                    </li>
                                                </ButtonList>
                                            </Header>
                                            {reply.isEditing ?
                                                <form onSubmit={handleCommentUpdate} method='PUT'>
                                                    <Textarea
                                                        defaultValue={reply.content}
                                                    >
                                                    </Textarea>
                                                    <AppButton id={reply.id}>Update</AppButton>
                                                </form>
                                                :
                                                <Paragraph>
                                                    {reply.content}
                                                </Paragraph>}
                                            <Footer>
                                                <CounterWrapperMobile>
                                                    <CounterButton id={reply.id} onClick={() => handleCounterIncrementClick(reply.id)}>
                                                        <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" /></svg>
                                                    </CounterButton>
                                                    <Value>{reply.score}</Value>
                                                    <CounterButton id={reply.id} onClick={() => handleCounterDecrementClick(reply.id)}>
                                                        <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" /></svg>
                                                    </CounterButton>
                                                </CounterWrapperMobile>
                                                <ButtonListMobile>
                                                    {currentUser.id == reply.user.id ?
                                                        <>
                                                            <li>
                                                                <Button red id={reply.id} onClick={() => handleDeleteClick(reply.id)}>
                                                                    <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" /></svg>
                                                                    Delete
                                                                </Button>
                                                            </li>
                                                            <li>
                                                                <Button id={reply.id} onClick={() => handleEditClick(reply.id)}>
                                                                    <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" /></svg>
                                                                    Edit
                                                                </Button>
                                                            </li>
                                                        </>
                                                        :
                                                        null}
                                                    <li>
                                                        <Button id={reply.id} onClick={() => handleReplyClick(reply.id)}>
                                                            <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" /></svg>
                                                            Reply
                                                        </Button>
                                                    </li>
                                                </ButtonListMobile>
                                            </Footer>
                                        </Content>
                                    </CommentWrapper>
                                    {
                                        reply.isReplying ?
                                            <form onSubmit={handleReply} method="POST">
                                                <CommentAddItem>
                                                    <CommentAddWrapper>
                                                        <CommentAddImage src={currentUser.image.webp} alt={currentUser.username} />
                                                        <CommentAddTextarea></CommentAddTextarea>
                                                        <AppButton>Reply</AppButton>
                                                    </CommentAddWrapper>
                                                </CommentAddItem>
                                            </form>
                                            :
                                            null
                                    }
                                </ReplyItem>
                            </>
                        )))}

                    </>
                    :
                    null
            ))
            }
            <form onSubmit={handleSubmit} method="POST">
                <CommentAddItem>
                    <CommentAddWrapper>
                        <CommentAddImage src={currentUser.image.webp} alt={currentUser.username} />
                        <CommentAddTextarea></CommentAddTextarea>
                        <AppButton>Send</AppButton>
                    </CommentAddWrapper>
                </CommentAddItem>
            </form>
        </CommentsContainer>
    )
}

export default Comments
