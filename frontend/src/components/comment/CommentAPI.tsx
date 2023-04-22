
export const deleteComment = async (e: React.FormEvent<HTMLFormElement>) => {
    const response = await fetch(`http://127.0.0.1:8000/comments/${e.target.id}/`, {
        method: 'DELETE',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    })
    return response.json()
}

export const editComment = async (e: React.FormEvent<HTMLFormElement>) => {
    const response = await fetch(`http://127.0.0.1:8000/comments/${e.target.edit.id}/`, {
        method: 'PATCH',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "id": e.target.edit.id,
            "content": e.target.content.value,
        })
    })
    return response.json()
}

interface IUser {
    id: number
    username: string;
    image: {
        webp: string;
        png: string;
    }
}

interface IaddReply {
    e: React.FormEvent<HTMLFormElement>
    currentUser: IUser
}

export const addReply = async ({ e, currentUser }: IaddReply) => {
    let body = ""
    if (e.target.send) {
        body = JSON.stringify({
            user: currentUser,
            content: e.target.content.value,
            reply: false
        })
    }
    if (e.target.reply) {
        body = JSON.stringify({
            user: currentUser,
            content: e.target.content.value,
            reply: true,
            parent_id: e.target.reply.id,
        })
    }
    const response = await fetch('http://127.0.0.1:8000/comments/', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: body
    })
    return response.json()
}