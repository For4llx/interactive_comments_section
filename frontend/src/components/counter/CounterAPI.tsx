interface IUser {
    id: number
    username: string;
    image: {
        webp: string;
        png: string;
    }
}

interface IComment {
    id: number
    user: IUser
    parentId: number
    content: string
    score: number
    reply: boolean
    user_liked: Array<IUser>
    user_disliked: Array<IUser>
    replies: Array<IComment>
}

interface ILikedComment {
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    comment: IComment
    disliked: boolean
    liked: boolean
    currentUser: IUser
}

interface IDislikedComment {
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    comment: IComment
    disliked: boolean
    liked: boolean
    currentUser: IUser
}

export const likedComment = async ({ e, comment, disliked, liked, currentUser }: ILikedComment) => {
    const updatedUserDisliked = comment.user_disliked.filter((user) => {
        return user.id !== currentUser.id
    })
    let body = ""
    if (disliked) {
        body = JSON.stringify({
            score: comment.score + 1,
            user_disliked: updatedUserDisliked,
        })
    } else if (!liked) {
        body = JSON.stringify({
            score: comment.score + 1,
            user_liked: [...comment.user_liked, currentUser.id],
        })
    } else {
        return console.log("non")
    }
    const response = await fetch(`http://127.0.0.1:8000/comments/${e.target.id}/`, {
        method: "PATCH",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: body
    }
    )
    return response.json()
}

export const dislikedComment = async ({ e, comment, disliked, liked, currentUser }: IDislikedComment) => {
    const updatedUserLiked = comment.user_liked.filter((user) => {
        return user.id !== currentUser.id
    })
    let body = ""
    if (liked) {
        body = JSON.stringify({
            score: comment.score - 1,
            user_liked: updatedUserLiked,
        })
    } else if (!disliked) {
        body = JSON.stringify({
            score: comment.score - 1,
            user_disliked: [...comment.user_disliked, currentUser.id],
        })
    } else {
        return console.log("non")
    }
    const response = await fetch(`http://127.0.0.1:8000/comments/${e.target.id}/`, {
        method: "PATCH",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: body
    }
    )
    return response.json()
}