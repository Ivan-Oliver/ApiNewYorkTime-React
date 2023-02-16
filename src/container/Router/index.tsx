import { FC, useCallback, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Details from '../../views/Details'
import Home from '../../views/Home';
import Acces from '../../views/Form/index';
import { getAuthenticatedToken } from '../../services/storage';

const Router: FC = () => {
    const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
        const token = getAuthenticatedToken()
        const location = useLocation()
    
        if (!token || token === null) {
          return <Navigate to="/" replace state={{ from: location }} />
        }
    
        return children
      }
    
      const HandleSession = ({ children }: { children: JSX.Element }) => {
        const token = getAuthenticatedToken()
        const location = useLocation()
      
        if (token) {
          if (location.pathname === "/signup" || location.pathname === "/login" || location.pathname === "/" ) {
            return <Navigate to="/home" replace state={{ from: location }}/>
          }
      
          return children
        }
      
        return children
      }
    
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Acces/>}/>
            <Route path='/home' element={<ProtectedRoutes><Home/></ProtectedRoutes>}/>
            <Route path="/details/:listName" element={<ProtectedRoutes><Details /></ProtectedRoutes>}/>
            <Route path="/login" element={<Acces />}></Route>
            <Route path="/SignUp" element={<Acces />}></Route>
            <Route path='*' element={<Acces/>}/>

        </Routes>
        </BrowserRouter>
    )
}

export default Router;