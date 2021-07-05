import axios from "axios"
import { BASE_URL } from "../constants/URL"

const auth = { headers: { Authorization: localStorage.getItem("token") } }

export const createPost = (body, cleanFields, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/posts/`, body, auth)
        .then(() => {
            setIsLoading(false)
            cleanFields()
            window.location.reload()
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data)
        })
}

export const createComment = (body, id, cleanFields, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, auth)
        .then(() => {
            setIsLoading(false)
            cleanFields()
            window.location.reload()
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data)
        })
}

export const votePostUp = (id) => {
    const body = { "direction": 1 }
    axios.post(`${BASE_URL}/posts/${id}/votes`, body, auth)
        .then(() => {
            window.location.reload()
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const votePostDown = (id) => {
    const body = { "direction": -1 }
    axios.put(`${BASE_URL}/posts/${id}/votes`, body, auth)
        .then(() => {
            window.location.reload()
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const voteCommentUp = (id) => {
    const body = { "direction": 1 }
    axios.post(`${BASE_URL}/comments/${id}/votes`, body, auth)
        .then(() => {
            window.location.reload()
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const voteCommentDown = (id) => {
    const body = { "direction": -1 }
    axios.put(`${BASE_URL}/comments/${id}/votes`, body, auth)
        .then(() => {
            window.location.reload()
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const deletePostVote = (id) => {
    axios.delete(`${BASE_URL}/posts/${id}/votes`, auth)
        .then(() => {
            window.location.reload()
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const deleteCommentVote = (id) => {
    axios.delete(`${BASE_URL}/comments/${id}/votes`, auth)
        .then(() => {
            window.location.reload()
        })
        .catch((err) => {
            alert(err.response.data)
        })
}