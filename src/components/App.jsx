import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from '../contexts/auth'
import EditList from './EditList'
import GlobalStyle from './GlobalStyle'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

export default function App() {

    const [editing, setEditing] = useState('')

    return (
        <>
            <AuthContextProvider>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<SignIn />} />
                        <Route path='/sing-up' element={<SignUp />} />
                        <Route path='/home' element={editing ? <EditList editing={editing} setEditing={setEditing} /> : <Home editing={editing} setEditing={setEditing} />} />
                    </Routes>
                </BrowserRouter>
            </AuthContextProvider>
        </>
    )
}