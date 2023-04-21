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
