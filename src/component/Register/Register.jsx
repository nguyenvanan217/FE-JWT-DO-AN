import './Register.scss';
import { useHistory } from 'react-router-dom';
const Register = (props) => {
    let history = useHistory();
    const handleLogin = () => {
        history.push('/login');
    };
    return (
        <div className="register-container">
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
                        <div className="form-group">
                            <label>Email</label>
                        <input type="text" placeholder="Email address" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                        <input type="text" placeholder="phone number" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>User Name</label>
                        <input type="text" placeholder="User Name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                        <input type="text" placeholder="Password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Re-enter Password</label>
                        <input type="text" placeholder="Re-enter password" className="form-control" />
                        </div>
                        <button className="btn btn-primary">Register</button>
                        <hr />
                        <div className="text-center">
                            <button className="btn btn-success" onClick={() => handleLogin()}>
                                Already've account login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;
