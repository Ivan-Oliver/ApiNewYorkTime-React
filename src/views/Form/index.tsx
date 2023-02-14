import React, { FC, useCallback } from 'react'
import { MaxContenedor } from '../../views/Home/style'
import SignUp from '../../components/SignUp/index'
import LoginForm from '../../components/Login';


 const Acces:FC = () => {

    return(
        <MaxContenedor>
            <SignUp/>
            <LoginForm/>
        </MaxContenedor>
    )
 }

 export default Acces