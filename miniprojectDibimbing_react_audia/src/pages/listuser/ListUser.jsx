import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Layout from "../../components/Layout";
import AOS from "aos";
import 'aos/dist/aos.css'; 
import "./listuser.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <div className="listuserpage">
            <Layout>
                <h1 className="listuser" data-aos="fade-up">List User</h1>
                <div className="row">
                    {users.map((user) => (
                        <div className="col-md-4" key={user.id} data-aos="fade-up" data-aos-delay="500">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <img src={user.avatar} style={{ width: "150px", height: "150px", borderRadius: "50%", marginBottom: "10px"}} alt={`${user.first_name} ${user.last_name}`} />
                                    <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                                    <p className="card-text">{user.email}</p>
                                    <Link to={`/detailuser/${user.id}`} ><button className="btn2 btn">View Profile</button></Link>
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
