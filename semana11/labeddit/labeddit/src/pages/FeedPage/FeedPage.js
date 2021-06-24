import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import PostCard from '../../components/postCard/PostCard'
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from '../../constants/URL'
import CreactePostForm from "../../components/createPostForm/createPostForm"
import { goToPost } from '../../routes/coordinator'
import { useHistory } from "react-router-dom"
import { FeedContainer } from './styled'
import Typography from '@material-ui/core/Typography';
import CircularLoading from '../../components/circularLoading/CircularLoading'
import useForm from '../../hooks/useForm'
import FilterForm from '../../components/filterForm/FilterForm'

const FeedPage = () => {
    useProtectedPage()
    const posts = useRequestData([], `${BASE_URL}/posts`)
    const [form, onChange, cleanFields] = useForm({ title: "", body: "" })
    const history = useHistory()

    const onClickPost = (id) => {
        goToPost(history, id)
    }

    const postsList = posts
        .filter(post => post.title.toLowerCase().includes(form.title.toLowerCase()))
        .filter(post => post.body.toLowerCase().includes(form.body.toLowerCase()))
        .sort((a, b) => { return Number(b.voteSum) - Number(a.voteSum) })
        .map((post) => {
            return (
                <PostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    commentCount={post.commentCount}
                    voteSum={post.voteSum}
                    userVote={post.userVote}
                    username={post.username}
                    onClick={() => onClickPost(post.id)}
                />
            )
        })

    return (
        <FeedContainer>
            <Typography variant="h5" component="h2"> Bem vindo(a) ao seu feed </Typography>

            <CreactePostForm />

            <FilterForm
            form={form}
            onChange={onChange}
            cleanFields={cleanFields}
            />

            {postsList.length ? postsList : <CircularLoading />}
        </FeedContainer>
    )
}

export default FeedPage
