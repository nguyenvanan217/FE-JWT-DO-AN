import './Role.scss';
import { IoMdAddCircle } from 'react-icons/io';
import { FaTrashCan } from 'react-icons/fa6';
const roles = () => {
    return (
        <div className="role-container">
            <div className="container">
                <div className="mt-3">
                    <div className="title-role">
                        <h4>Add a new role ...</h4>
                    </div>
                    <div className="role-parent">
                        <div className="row col-12 role-child">
                            <div className="col-5 form-group">
                                <label>URL:</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-5 form-group">
                                <label>Description:</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-2 mt-4 actions">
                                <div className="btn-add">
                                    <IoMdAddCircle />
                                </div>
                                <div className="btn-trash">
                                    <FaTrashCan />
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-warning mt-3">save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default roles;
