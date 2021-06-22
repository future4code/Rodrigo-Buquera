import React,{useState} from 'react'
import useForm from '../../hooks/useForm'
import { createComment } from '../../services/posts'
import CircularProgress from '@material-ui/core/CircularProgress'

const CreateCommentForm = (props) => {
    const [form, onChange, cleanFields] = useForm({ body: "" })
    const [isLoading, setIsLoading] =useState(false)

    const onSubmitForm = (e) => {
        e.preventDefault()
        createComment(form, props.id, cleanFields, setIsLoading)
    }

    return (
        <div>

            <form onSubmit={onSubmitForm} >
                
                <input
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    required
                    placeholder="Texto"
                >
                </input>

                <button type={"submit"}>{isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Comentar </>}</button>
            </form>

        </div>
    )
}

export default CreateCommentForm

