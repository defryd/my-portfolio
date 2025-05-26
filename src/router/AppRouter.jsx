import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import ProjectPage from '../presentation/components/ProjectPage';

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
