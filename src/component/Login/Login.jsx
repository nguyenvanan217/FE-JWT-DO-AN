import { useEffect, useState, useRef } from 'react';
import './Login.scss';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../../services/userService';
const Login = (props) => {
    let history = useHistory();
    const [valueLogin, setValueLogin] = useState('');
    const [password, setPassword] = useState('');

    const valueLoginRef = useRef(null);
    const passwordRef = useRef(null);

    const defaultObjValidInput = {
        isValidValueLogin: true,
        isValidPassword: true,
    };
    const [objValidInput, setObjValidInput] = useState(defaultObjValidInput);
    const handleKeyDown = (e, nextRef) => {
        if (e.key === 'Enter') {
            nextRef.current.focus();
        }
    };
    const handleCreateNewAccount = () => {
        history.push('/register');
    };
    const handleLogin = async () => {
        setObjValidInput(defaultObjValidInput);
        if (!valueLogin) {
            setObjValidInput({ ...defaultObjValidInput, isValidValueLogin: false });
            toast.error('Please enter your address email or phone number');
            return;
        }
        if (!password) {
            setObjValidInput({ ...defaultObjValidInput, isValidPassword: false });
            toast.error('Please enter your password');
            return;
        }
        let response = await loginUser(valueLogin, password);
        if (response && +response.EC === 0) {
            //success
            let data = {
                isAuthenticated: true,
                token: 'fake token',
            };
            sessionStorage.setItem('account', JSON.stringify(data));
            history.push('/users');
            window.location.reload();
        }
        if (response && +response.EC !== 0) {
            //error
            toast.error(response.EM);
        }
    };
    const handlePressEnter = (event) => {
        if (event.keyCode === 13 && event.code === 'Enter') {
            handleLogin();
        }
    };
    // let location = useLocation();
    // useEffect(() => {
    //     if (location.pathname === '/login') {
    //         setIsShow(false);
    //     }
    // }, []);
    useEffect(() => {
        let session = sessionStorage.getItem('account');
        if (session) {
            history.push('/');
            window.location.reload();
        }
    }, []);
    return (
        <div className="login-container">
            <div className="container">
                <div className="row px-3 px-sm-0">
                    <div className="content-left d-none d-sm-block col-sm-7">
                        <div className="brand">
                            <h1>Nguyen An</h1>
                        </div>
                        <div className="detail">
                            Nguyen An help you learning html, css, javascipt taildwincss, boostrap, sass, reactjs,
                            nodejs, expressjs, mysql,xampp, sequelize ,git, github ...
                        </div>
                    </div>
                    <div className="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3">
                        <div className="brand d-sm-none">
                            <h1>Nguyen An</h1>
                        </div>
                        <input
                            ref={valueLoginRef}
                            type="text"
                            placeholder="Emailaddress or phone number"
                            className={objValidInput.isValidValueLogin ? 'form-control' : 'form-control is-invalid'}
                            value={valueLogin}
                            onKeyDown={(e) => handleKeyDown(e, passwordRef)}
                            onChange={(event) => setValueLogin(event.target.value)}
                        />
                        <input
                            ref={passwordRef}
                            type="password"
                            placeholder="Password"
                            className={objValidInput.isValidPassword ? 'form-control' : 'form-control is-invalid'}
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            onKeyDown={(event) => handlePressEnter(event)}
                        />
                        <button className="btn btn-primary" onClick={() => handleLogin()}>
                            Login
                        </button>
                        <span className="text-center">
                            <a className="forgot-pass" href="https">
                                Forgot your password?
                            </a>
                        </span>
                        <hr />
                        <div className="text-center">
                            <button className="btn btn-success" onClick={() => handleCreateNewAccount()}>
                                Create new account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
