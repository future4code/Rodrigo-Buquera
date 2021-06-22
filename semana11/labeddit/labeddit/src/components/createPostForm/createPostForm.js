import React,{useState} from 'react'
import useForm from '../../hooks/useForm'
import { createPost } from '../../services/posts'
import CircularProgress from '@material-ui/core/CircularProgress'

const CreatePostForm = () => {
    const [form, onChange, cleanFields] = useForm({ title: "", body: "" })
    const [isLoading, setIsLoading] =useState(false)

    const onSubmitForm = (e) => {
        e.preventDefault()
        createPost(form, cleanFields, setIsLoading)
    }

    return (
        <div>

            <form onSubmit={onSubmitForm} >
                <input
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    required
                    placeholder="Título"
                >
                </input>

                <input
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    required
                    placeholder="Texto"
                >
                </input>

                <button type={"submit"}>{isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Postar </>}</button>
            </form>

        </div>
    )
}

export default CreatePostForm

