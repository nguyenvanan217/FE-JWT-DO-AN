import { useContext, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
const PrivateRoutes = (props) => {
    const { path, component } = props;
    let history = useHistory();
    const { user } = useContext(UserContext);
    useEffect(() => {
        console.log('>>>>>>>>>>cehcec jk user', user );
        let session = sessionStorage.getItem('account');
        if (!session) {
            history.push('/login');
            window.location.reload();
        }
    });
    return (
        <>
            <Route path={path} component={component} />
        </>
    );
};
export default PrivateRoutes;
