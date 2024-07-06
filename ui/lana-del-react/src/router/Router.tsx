import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AlbumDetail from "../pages/AlbumDetail.tsx";
import Home from "../pages/Home.tsx";

export const LanaAppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/albums/:id" element={<AlbumDetail />} />
            </Routes>
        </BrowserRouter>
    )
}