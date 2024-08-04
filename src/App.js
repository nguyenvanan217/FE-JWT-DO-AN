import './App.scss';
// import Login from './component/Login/Login';
// import Register from './component/Register/Register';
// import Users from './component/ManageUsers/Users';
import Nav from './component/Navigation/Nav';
import { BrowserRouter as Router} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
// import _ from 'lodash';
import AppRoutes from './routes/AppRoutes';
function App() {
    const [account, setAccount] = useState({});
    useEffect(() => {
        let session = sessionStorage.getItem('account');
        if (session) {
            setAccount(JSON.parse(session));
        }
    }, []);
    return (
        <Router>
            <div className="app-header">
                <Nav />
            </div>
            <div className="app-container">
                <AppRoutes/>
            </div>
            <ToastContainer
                position="top-left"
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
