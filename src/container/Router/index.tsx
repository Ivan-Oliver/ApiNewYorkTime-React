import { FC, useCallback, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from '../../views/Details'
import Home from '../../views/Home';
import Acces from '../../views/Form/index';


const Router: FC = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path="/details/:listName" element={<Details />}></Route>
            <Route path="/login" element={<Acces />}></Route>

        </Routes>
        </BrowserRouter>
    )
}

export default Router;