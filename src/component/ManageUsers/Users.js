import { useEffect, useState } from 'react';
import { fetchAllUser } from '../../services/userService';
import ReactPaginate from 'react-paginate';
const Users = () => {
    const [listUsers, setListUsers] = useState([]);
    const [currentPage,setCurrentPage] = useState(1)
    const [currentLimit,setCurrentLimit] = useState(2)
    const [totalPages,setTotalPages] = useState(0)
    useEffect(() => {
        fetchUsers();
    }, []);
    const fetchUsers = async () => {
        let response = await fetchAllUser(currentPage,currentLimit);
        if (response && response.data && response.data.EC === 0) {
            setTotalPages(response.data.DT.totalPages)
            setListUsers(response.data.DT.users);
        }
    };
    const handlePageClick = (event) => {
        alert (event.selected)
      };
    return (
        <div className="container">
            <div className="manage-user-container">
                <div className="user-header">
                    <div className="title">
                        <h3> Create table user</h3>
                    </div>
                    <div className="actions">
                        <button className="btn btn-success">Refesh</button>
                        <button className="btn btn-primary">Add new user</button>
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
                                            </tr>
                                        );
                                    })}
                                </>
                            ) : (
                                <>
                                    <tr><td>Not Found User</td></tr>
                                </>
                            )}
                        </tbody>
                    </table>
                </div>
                {totalPages > 0 && 
                    <div className="user-footer">
                    <ReactPaginate
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={totalPages}
                        previousLabel="< previous"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
                </div>
                }
            </div>
        </div>
    );
};
export default Users;
