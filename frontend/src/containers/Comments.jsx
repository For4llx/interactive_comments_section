
import styled from 'styled-components'
import Comment from '../components/Comment'
import Counter from '../components/Counter'

import { useState, useEffect } from 'react';

const CommentsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: max(calc(50% - 730px / 2), 1rem);
    padding-right: max(calc(50% - 730px / 2), 1rem);
`

function Comments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://127.0.0.1:8000/comments/');
            const comments = await response.json();
            setComments(comments);
        };
        fetchData();
    }, []);

    return (
        <CommentsContainer>
            {comments.map(comment =>
                <Comment
                    counter={<Counter />}
                    counterMobile={<Counter mobile />}
                    score={comment.score}
                    username={comment.user.username}
                    image={comment.user.image.png}
                    timestamp={comment.timesince}
                    content={comment.content}
                />)}
        </CommentsContainer>
    )
}

export default Comments