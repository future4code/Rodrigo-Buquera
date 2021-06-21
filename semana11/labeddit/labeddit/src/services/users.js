import axios from "axios"
import { BASE_URL } from "../constants/URL"
import { goToFeed } from "../routes/coordinator"

export const login = (body, cleanFields, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => { 
            localStorage.setItem("token", res.data.token)
            cleanFields()
            goToFeed(history)
            setRightButtonText("Logout")
        })
        .catch((err) => { 
            alert(err)
        })

}

export const signUp = (body, cleanFields, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/signup`, body)
        .then((res) => { 
            localStorage.setItem("token", res.data.token)
            cleanFields()
            goToFeed(history)
            setRightButtonText("Logout")
        })
        .catch((err) => { 
            alert(err)
        })

}
