import './Login.scss';
import { useHistory } from 'react-router-dom';
const Login = (props) => {
    let history = useHistory();
    const handleCreateNewAccount = () => {
        history.push('/register');
    };
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
                        <input type="text" placeholder="Emailaddress or phone number" className="form-control" />
                        <input type="password" placeholder="Password" className="form-control" />
                        <button className="btn btn-primary">Login</button>
                        <span className="text-center">
                            <a className="forgot-pass" href="#">
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
