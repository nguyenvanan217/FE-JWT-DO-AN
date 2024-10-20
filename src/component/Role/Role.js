import './Role.scss';
import { IoMdAddCircle } from 'react-icons/io';
import { FaTrashCan } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import { toast } from 'react-toastify';
const Roles = () => {
    const dataChildDefault = {
        url: '',
        description: '',
        isValidUrl: true,
    };
    const [listChilds, setListChilds] = useState({
        child1: dataChildDefault,
    });
    useEffect(() => {
        Object.entries(listChilds).map(([key, value]) => {
            console.log('checkhihihi', key, value);
        });
    }, [listChilds]); // Thêm listChilds vào dependency array

    const handleOnchangeInput = (name, value, key) => {
        let _listChilds = _.cloneDeep(listChilds);
        _listChilds[key][name] = value;
        if (value && name === 'url') {
            _listChilds[key]['isValidUrl'] = true;
        }
        setListChilds(_listChilds);
    };
    const handleAddNewInput = () => {
        let _listChilds = _.cloneDeep(listChilds);
        _listChilds[`child-${uuidv4()}`] = dataChildDefault;
        setListChilds(_listChilds);
    };
    const handleDeleteInput = (key) => {
        let _listChilds = _.cloneDeep(listChilds);
        delete _listChilds[key];
        setListChilds(_listChilds);
    };
    const handleSave = () => {
        let _listChilds = _.cloneDeep(listChilds);
        let check = true;
        Object.entries(_listChilds).forEach(([key, child]) => {
            if (!child.url) {
                child.isValidUrl = false;
                check = false;
            }
        });
        if (check) {
            //call
        } else {
            toast.error("Input URL Must Not Be Empty...")
            setListChilds(_listChilds);
        }
    };

    return (
        <div className="role-container">
            <div className="container">
                <div className="mt-3">
                    <div className="title-role">
                        <h4>Add a new role ...</h4>
                    </div>
                    <div className="role-parent">
                        {Object.entries(listChilds).map(([key, child], index) => {
                            return (
                                <div className="row col-12 role-child" key={`child-${key}`}>
                                    <div className={`col-5 form-group ${key}`}>
                                        <label>URL:</label>
                                        <input
                                            type="text"
                                            className={child.isValidUrl ? 'form-control' : 'form-control is-invalid'}
                                            value={child.url}
                                            onChange={(event) => handleOnchangeInput('url', event.target.value, key)}
                                        />
                                    </div>
                                    <div className="col-5 form-group">
                                        <label>Description:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={child.description}
                                            onChange={(event) =>
                                                handleOnchangeInput('description', event.target.value, key)
                                            }
                                        />
                                    </div>
                                    <div className="col-2 mt-4 actions">
                                        <div className="btn-add" onClick={() => handleAddNewInput()}>
                                            <IoMdAddCircle />
                                        </div>
                                        <div className="btn-trash" onClick={() => handleDeleteInput(key)}>
                                            {index >= 1 && <FaTrashCan />}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <div>
                            <button className="btn btn-warning mt-3" onClick={() => handleSave()}>
                                save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Roles;
