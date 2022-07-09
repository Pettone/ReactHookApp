import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'email@mail.com'
    });

    const { username, email } = formState;

    const onInputChange = ( { target } ) => {

        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect( () => {
        //console.log(`useEffect called`);
    });

    useEffect( () => {
        //console.log(`useEffect called`);
    },[formState]);

    useEffect( () => {
        //console.log(`useEffect called`);
    },[email]);

    return (
    <>
        <h1>Simple Form</h1>
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

        {
           (username === 'strike') &&  <Message />
        }
             
    </>
    )
}
