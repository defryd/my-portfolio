import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProjectPage from '../presentation/screens/project/ProjectPage';
import Home from '../presentation/screens/home/Home';

const AppRoutes = () => {
    return (
    <BrowserRouter basename="/my-portfolio">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
    </BrowserRouter>
    );
};

export default AppRoutes;
