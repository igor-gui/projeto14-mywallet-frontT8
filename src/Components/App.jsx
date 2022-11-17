import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import EditList from './EditList'
import GlobalStyle from './GlobalStyle'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'

export default function App() {

    const [editing, setEditing] = useState(true)

    return (
        <>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignIn />}/>
                <Route path='/sing-up' element={<SignUp />} />
                <Route path='/home' element={editing ? <EditList editing={editing} setEditing={setEditing} /> : <Home editing={editing} setEditing={setEditing} />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}