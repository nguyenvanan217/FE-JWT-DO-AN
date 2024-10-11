import { useEffect } from "react"
import {Route} from 'react-router-dom'
import { useHistory } from "react-router-dom";
const PrivateRoutes = (props) => {
    const {path,component} = props
    let history = useHistory()
    useEffect(()=> {
        let session = sessionStorage.getItem('account');
        if (!session) {
            history.push("/login");
            window.location.reload()
        }
    })
    return (
        <>
            <Route path={path} component={component}/>
        </>
    )
}
export default PrivateRoutes