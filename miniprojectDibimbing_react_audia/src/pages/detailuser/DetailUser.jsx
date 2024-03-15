import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import "./detailuser.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const DetailUser = () => {
    
    const [user, setUser] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    
    const getUserDetail = () => {
        axios
            .get(`https://reqres.in/api/users/${id}`)
            .then((res) => {
                setUser(res?.data?.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDelete = () => {
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        axios
            .delete(`https://reqres.in/api/users/${id}`, config)
            .then((res) => {
                navigate("/listuser");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getUserDetail();
    }, [id]);
    return (
        <Layout>
            <div className="detailuserpage">
                <div className="detailuser text-center">
                    <h1>Profile User</h1>
                    <img className="avatar" src={user?.avatar} alt={user?.first_name} />
                    <h2 className="name">full name : {user?.first_name} {user?.last_name}</h2>
                    <p className="email">email : {user?.email}</p>
                    <button className="button" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </Layout>
        
    )
}

export default DetailUser;