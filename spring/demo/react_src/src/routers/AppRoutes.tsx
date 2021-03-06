import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { TestPage } from '../pages/TestPage';

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path=''>
                {/* Home Page */}
                <Route path="/home" element={<Home />}/>
                <Route path="/todo" element={<TestPage />}/>
            </Route>
        </Routes>
    )
}