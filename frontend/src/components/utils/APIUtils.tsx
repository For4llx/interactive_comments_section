const [comments, setComments] = useState<IComment[]>([]);
const [currentUser, setCurrentUser] = useState<IUser>({
    id: 0,
    image: {
        png: "",
        webp: "",
    },
    username: "",
}
);

async function fetchComments() {
    const response = await fetch("http://127.0.0.1:8000/comments/");
    return response.json();
}

async function fetchCurrentUser() {
    const response = await fetch("http://127.0.0.1:8000/users/5");
    return response.json();
}

const addComment = useMutation({
    mutationFn: async (e: React.FormEvent<HTMLFormElement>) => {
        const response = await fetch('http://127.0.0.1:8000/comments/', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: currentUser,
                content: e.target.content.value,
                reply: false
            }),
        })
        return response.json();
    },
    onSuccess: (comment) => setComments([...comments, comment])
})

const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addComment.mutate(e)
}