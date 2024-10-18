import './App.scss';
// import Login from './component/Login/Login';
// import Register from './component/Register/Register';
// import Users from './component/ManageUsers/Users';
import Nav from './component/Navigation/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from './context/UserContext';
import { Rings } from 'react-loader-spinner';
// import _ from 'lodash';
import AppRoutes from './routes/AppRoutes';
function App() {
    const { user } = useContext(UserContext);
    return (
        <Router>
            {user && user.isLoading ? (
                <div className="loading-container">
                    <Rings heigth="100" width="100" color="#1877f2" ariaLabel="loading" />
                    <div>Loading data....</div>
                </div>
            ) : (
                <>
                    {' '}
                    <div className="app-header">
                        <Nav />
                    </div>
                    <div className="app-container">
                        <AppRoutes />
                    </div>
                </>
            )}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                // transition: Bounce,
            />
            {/* Same as */}
        </Router>
    );
}

export default App;
