import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AlbumDetail from "../pages/AlbumDetail.tsx";
import Home from "../pages/Home.tsx";
import Navbar from "../pages/Navbar.tsx";
import '../styles/Router.scss'
import Llama from "../pages/Llama.tsx";
import Login from "../pages/Login.tsx";
import Register from "../pages/Register.tsx";

export const LanaAppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar/>

            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/albums/:id" element={<AlbumDetail/>}/>
                <Route path="/llama" element={<Llama />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}