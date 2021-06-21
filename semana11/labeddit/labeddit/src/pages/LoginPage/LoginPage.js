import React from 'react'
import useForm from '../../hooks/useForm'
import styled from "styled-components"
import Button from '@material-ui/core/Button';
import { goToFeed, goToRegister } from '../../routes/coordinator';
import { useHistory } from "react-router-dom"
import { login } from '../../services/users';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';


const MainContainer = styled.div`
     display: flex;
     flex-direction:column;
     align-items:center;

`

const LoginPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    const [form, onChange, cleanFields] = useForm({ email: "", password: "" })
        const history = useHistory()

    const onSubmitForm = (e) => {
        e.preventDefault()
        login(form, cleanFields, history, setRightButtonText)
        
    }

    
    return (
        <MainContainer>
            <form onSubmit={onSubmitForm} >
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
                >Login</Button>
            </form>

            <Button onClick={() => goToRegister(history)}>Crie um cadastro</Button>

        </MainContainer>
    )
}

export default LoginPage
