import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";

export const SimpleFormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formState;

    return (
    <>
        <h1>Simple Form with Hook</h1>
        <hr />

        <input 
            type = "text"
            className = "form-control"
            placeholder = "Username"
            name = "username"
            value = { username }
            onChange = { onInputChange }
        />

        <input 
            type = "email"
            className = "form-control mt-2"
            placeholder = "test@mail.com"
            name = "email"
            value = { email }
            onChange = { onInputChange }
        />

        <input 
            type = "password"
            className = "form-control mt-2"
            placeholder = "password"
            name = "password"
            value = { password }
            onChange = { onInputChange }
        />

        <button onClick = { onResetForm } className = "btn btn-primary mt-2">Reset</button>     
    </>
    )
}
