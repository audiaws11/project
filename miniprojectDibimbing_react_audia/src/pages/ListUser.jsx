import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import "./listuser.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
const ListUser = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const getUserData = (page) => {
        axios
            .get(`https://reqres.in/api/users?page=${page}`)
            .then((res) => {
                setUsers(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getUserData(currentPage);
    }, [currentPage]);

    return (
        <div className="listuserpage">
            <Layout>
                <h1 className="listuser">List User</h1>
                <div className="row">
                    {users.map((user) => (
                        <div className="col-md-6" key={user.id}>
                            <div className="card mb-3">
                                <div className="card-body">
                                    <img src={user.avatar} className="card-img-top" alt={`${user.first_name} ${user.last_name}`} />
                                    <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                                    <p className="card-text">{user.email}</p>
                                    <Link to={`/`} className="btn btn-primary"><button className="btn btn-primary">View Profile</button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="button-container">
                    <button disabled={currentPage === 1} onClick={() => setCurrentPage(1)}>Back</button>
                    <button disabled={currentPage === 2} onClick={() => setCurrentPage(2)}>Next</button>
                </div>
            </Layout>
        </div>
    );
}

export default ListUser;
