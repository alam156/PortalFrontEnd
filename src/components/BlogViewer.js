import React, { useState } from 'react';
import data from '../jsons/data.json';
import '../css/BlogViewer.css';
import NavBar from "./Navbar";
import BlackFooter from "./BlackFooter";
import Footer from "./Footer";
import backgroundImage from "./album/event_background.jpeg";

const BlogViewer = () => {
    const [loadedBlogs, setLoadedBlogs] = useState(3);

    const handleLoadMoreClick = () => {
        setLoadedBlogs((prevLoadedBlogs) => prevLoadedBlogs + 3);
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
                <h2>Blogs</h2>
            </div>
            <div className="container">

                <div className="blog-viewer">
                    {data.slice(0, loadedBlogs).map((blog) => (
                        <div key={blog.id} className="blog-post">
                            <h2 className="blog-title">{blog.title}</h2>
                            <p className="blog-date">{new Date(blog.publicationDate).toLocaleDateString()}</p>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="row">
                                            <div className="col-md-6" >
                                                <img
                                                    src={blog.imageUrl}
                                                    className="blog-image" alt={blog.title}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-content">
                                <p>{blog.content}</p>
                            </div>
                        </div>
                    ))}
                    {loadedBlogs < data.length && (
                        <button className="load-more-btn" onClick={handleLoadMoreClick}>
                            Load More
                        </button>
                    )}
                </div>
            </div>

            <BlackFooter/>
            <Footer/>

        </div>
    );

};

export default BlogViewer;