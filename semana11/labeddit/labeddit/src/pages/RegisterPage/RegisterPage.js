import React from 'react'
import useForm from '../../hooks/useForm'
import styled from "styled-components"
import Button from '@material-ui/core/Button';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import { signUp } from '../../services/users';
import {useHistory} from "react-router-dom"

const MainContainer = styled.div`
     display: flex;
     flex-direction:column;
     align-items:center;
`



const RegisterPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    const [form, onChange, cleanFields] = useForm({ name: "", email: "", password: "" })
    const history =useHistory()
   

    const onSubmitForm = (e) => {
        e.preventDefault()
       signUp(form, cleanFields, history, setRightButtonText)

    }
    return (
        <MainContainer>
            <form onSubmit={onSubmitForm} >

                <input
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    required
                    placeholder="Nome"

                ></input>


                <input
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    type="email"
                    required
                    placeholder="E-mail"

                ></input>

                <input
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    type="password"
                    required
                    placeholder="Password"

                ></input>

                <Button
                    type={"submit"}
                >Criar cadastro</Button>
            </form>



        </MainContainer>


    )
}

export default RegisterPage
