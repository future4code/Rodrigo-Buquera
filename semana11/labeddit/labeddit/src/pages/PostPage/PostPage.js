import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import{useParams} from "react-router-dom"
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/URL'
import CommentCard from '../../components/CommentCard/CommentCard'
import CreateCommentForm from '../../components/createCommentForm/CreateCommentForm'

const PostPage = () => {
    useProtectedPage()
    const params = useParams()
    
    const postComments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    const comments = postComments.map((comment) =>{
        return (
            <CommentCard
            key = {comment.id}
            id = {comment.id}
            body={comment.body}
            voteSum={comment.voteSum}
            userVote={comment.userVote}
            />
        )
    }).sort((a, b) => {return a.voteSum - b.voteSum })

    return (
        <div>
            <CreateCommentForm
                id={params.id}
            />
            {comments.length ? comments : "sem comentários"}
            
        </div>
    )
}

export default PostPage
