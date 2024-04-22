import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import NavBar from "./Navbar";
import Footer from "./Footer";
import BlackFooter from "./BlackFooter";
import backgroundImage from "./album/event_background.jpeg";
import Chatbox from "./Chatbox";
const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:8085/api/users?offset=${Number(page)}`);
            const newUsers = response.data['content'];
            console.log(newUsers);
            setUsers((prevUsers) => [...prevUsers, ...newUsers]);
            setHasMore(newUsers.length > 0);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [page]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers,page]);

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };


    return (
        <div>
            <div className="navbar-fixed"> <NavBar />
            </div>
            <div>
                <br/>
                <br/>
            </div>
            <div style={{ backgroundImage: `url(${backgroundImage})`, height: '100px',display: 'flex',
                justifyContent: 'center',
                alignItems: 'center' }}>
                <h2>DashBoard</h2>
            </div>
            <div className="container">
                <nav className="navbar"> <ul> <li><a href="/registration">Registration</a></li> </ul> </nav>
                <h1 className="mt-4">Dashboard</h1>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Organization</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.designation}</td>
                            <td>{user.organization}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                {hasMore && (
                    <button className="btn btn-primary" onClick={handleLoadMore} disabled={loading}>
                        {loading ? 'Loading...' : 'Load More'}
                    </button>
                )}
            </div>
            <BlackFooter/>
            <Chatbox/>
            <Footer/>
        </div>

    );
};

export default Dashboard;
