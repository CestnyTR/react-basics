import './index.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Personnel from './pages/Personnel';
import PersonnelDetails from './pages/PersonnelDetails';
import Path from './pages/Path';
import Footer from './component/Footer';
import Courses from './component/Courses';
import Backend from "./pages/Backend"
import Frontend from "./pages/Frontend"
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRouter from './pages/PrivateRouter';
export default function App() {


    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path='contact' element={<PrivateRouter />}>
                    <Route path="" element={<Contact />} />
                </Route>
                <Route path='login' element={<Login />} />
                <Route path="personnel" element={<Personnel />} />
                <Route path="personnel/:id" element={<PersonnelDetails />} />
                <Route path="courses" element={<Courses />} />
                <Route path="path" element={<Path />} >
                    <Route index element={<Frontend />} />
                    <Route path="frontend" element={<Frontend />} />
                    <Route path="backend" element={<Backend />} />
                </Route>
                {/* <Route path="*" element={<Navigate to="/" />} /> */}
                <Route path="*" element={<NotFound />} />

            </Routes>
            <Footer />
        </BrowserRouter>
    );
} 
