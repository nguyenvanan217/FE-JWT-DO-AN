import { useEffect, useState } from 'react';
import { fetchAllUser, deleteUser } from '../../services/userService';
import { toast } from 'react-toastify';
import ModalDelete from './ModalDelete.js';
import ModalUser from './ModalUser.js';
import './Users.scss';
import { HiRefresh } from 'react-icons/hi';
import { IoPersonAdd } from 'react-icons/io5';
const Users = () => {
    const [listUsers, setListUsers] = useState([]);
    //modal delete
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [dataModal, setDataModal] = useState({});
    // Modal user (update , create)
    const [isShowModalUser, setIsShowModalUser] = useState(false);
    const [actionModalUser, setActionModalUser] = useState('CREATE');
    const [dataModalUser, setDataModalUser] = useState({});
    useEffect(() => {
        fetchUsers();
    }, []);
    const fetchUsers = async () => {
        let response = await fetchAllUser();
        if ( response && response.EC === 0) {
            setListUsers(response.DT);
        } else {
            toast.error(response.EM);
        }
    };
    const handleDelete = (user) => {
        setDataModal(user);
        setIsShowModalDelete(true);
    };
    const handleClose = () => {
        setIsShowModalDelete(false);
        setDataModal({});
    };
    const confirmDeleteUser = async () => {
        let response = await deleteUser(dataModal);
        if (response && response && response.EC === 0) {
            toast.success(response.EM);
            await fetchUsers();
            setIsShowModalDelete(false);
        } else {
            toast.error(response.EM);
        }
    };
    const onHideModalUser = async () => {
        setIsShowModalUser(false);
        setDataModalUser({});
        await fetchUsers();
    };
    const handleEditUser = (user) => {
        setActionModalUser('UPDATE');
        setDataModalUser(user);
        setIsShowModalUser(true);
    };
    const handleRefesh = async () => {
        let refesh = await fetchUsers();
        if (refesh = true ) {
            toast.success("Refesh User Success !")
        }
    };
    return (
        <>
            <div className="container">
                <div className="manage-user-container">
                    <div className="user-header">
                        <div className="title">
                            <h3> Create table user</h3>
                        </div>
                        <div className="actions">
                            <button className="refesh btn btn-success" onClick={() => handleRefesh()}>
                                <HiRefresh /> Refesh
                            </button>
                            <button
                                className="add btn btn-primary"
                                onClick={() => {
                                    setIsShowModalUser(true);
                                    setActionModalUser('CREATE');
                                }}
                            >
                                <IoPersonAdd /> Add new user
                            </button>
                        </div>
                    </div>
                    <div className="user-body">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">UserName</th>
                                    <th scope="col">Group</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listUsers && listUsers.length > 0 ? (
                                    <>
                                        {listUsers.map((item, index) => {
                                            return (
                                                <tr key={`row-${index}`}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.id}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.username}</td>
                                                    <td>{item.Group ? item.Group.name : ''}</td>
                                                    <td>{item.address}</td>
                                                    <td>
                                                        <button
                                                            className="edit btn btn-edit btn btn-warning mx-3"
                                                            onClick={() => handleEditUser(item)}
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            className="btn btn-danger"
                                                            onClick={() => handleDelete(item)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </>
                                ) : (
                                    <>
                                        <tr>
                                            <td>Not Found User</td>
                                        </tr>
                                    </>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ModalDelete
                show={isShowModalDelete}
                handleClose={handleClose}
                confirmDeleteUser={confirmDeleteUser}
                dataModal={dataModal}
            />
            <ModalUser
                onHide={onHideModalUser}
                show={isShowModalUser}
                action={actionModalUser}
                dataModalUser={dataModalUser}
            />
        </>
    );
};
export default Users;
