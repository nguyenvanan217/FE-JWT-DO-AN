import { Switch, Route } from 'react-router-dom';
import Login from '../component/Login/Login';
import Register from '../component/Register/Register';
import Users from '../component/ManageUsers/Users';
import PrivateRoutes from './PrivateRoutes';
const AppRoutes = (props) => {
    const Project = () => {
        return (
            <div>
                Project
            </div>
        )
    }
    return (
        <>
            <Switch>
                <Route path="/project">project</Route>
                <PrivateRoutes path="/users" component={Users}/>
                <PrivateRoutes path="/projects" component={Project}/>

                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                
                <Route path="/" exact>
                    home
                </Route>
                <Route path="*">404 NOT FOUND</Route>
            </Switch>
        </>
    );
};
export default AppRoutes;
