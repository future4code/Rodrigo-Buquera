import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import PostCard from '../../components/postCard/PostCard'
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from '../../constants/URL'
import CreactePostForm from "../../components/createPostForm/createPostForm"
import { goToPost } from '../../routes/coordinator'
import {useHistory} from "react-router-dom"

const FeedPage = () => {  
    useProtectedPage()
    const posts = useRequestData([], `${BASE_URL}/posts` )
    const history = useHistory()
    
    const onClickPost =(id) => {
        goToPost(history, id )
    }

    const postsList = posts.map((post) =>{
        return (
        <PostCard
         key= {post.id}
         id= {post.id} 
         title={post.title}
         body={post.body}
         commentCount={post.commentCount}
         voteSum={post.voteSum}
         userVote={post.userVote}
         onClick={() => onClickPost(post.id)}
        />
        )
    
    })
    .sort(function(a, b) {
        return (a.voteSum ===null)-(b.voteSum===null) || -(a.voteSum>b.voteSum)||+(a.voteSum<b.voteSum);
    })
    .sort((a, b) => (a.voteSum != null ? a.voteSum : Infinity) - (b.voteSum != null ? b.voteSum : Infinity))

    
    return (
        <div>
           <CreactePostForm/>


           { postsList.length ? postsList : "sem postagens"}
        </div>
    )
}

export default FeedPage
