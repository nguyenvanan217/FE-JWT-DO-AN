import axios from '../setup/axios';

const createRoles = (roles) => {
    return axios.post('/api/v1/role/create', [...roles]);
};
const fetchAllRole = () => {
    return axios.get(`/api/v1/role/read`);
};
const deleteRole = (user) => {
    return axios.delete(`/api/v1/role/delete`, { data: { id: user.id } });
};
export { createRoles, fetchAllRole, deleteRole };
