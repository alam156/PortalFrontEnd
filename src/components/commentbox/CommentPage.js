import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import NavBar from "../Navbar";
import BlackFooter from "../BlackFooter";
import Footer from "../Footer";

// ...

const CommentPage = () =>  {
    const [comments, setComments] = useState([]);
    const [idCounter, setIdCounter] = useState(1);

    const handleCommentLike = (id) => {
        const commentsCopy = [...comments];
        const commentIndex = commentsCopy.findIndex((comment) => comment.id === id);
        commentsCopy[commentIndex] = {
            ...commentsCopy[commentIndex],
            likes: commentsCopy[commentIndex].likes + 1,
        };
        setComments(commentsCopy);
    };

    const handleCommentSubmit = (comment) => {
        setComments([...comments, { ...comment, id: idCounter }]);
        setIdCounter(idCounter + 1);
    };

    return (
        <div>
            <div className="navbar-fixed">
                <NavBar />
            </div>
            <div>
                <br/>
                <br/>
                <br/>
            </div>
            <div className="row">
                <div className="col-md-2">

                </div>
                <div className="col-md-8">
                    <h2>Anonymous review about our services</h2>
                    <Form
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '1rem',
                        }}
                        onSubmit={(event) => {
                            event.preventDefault();
                            const commentText = event.target.comment.value;
                            handleCommentSubmit({ text: commentText, likes: 0 });
                            event.target.comment.value = '';
                        }}>
                        <FormControl type="text" name="comment" placeholder="Add a comment" required/>
                        <Button variant="secondary" type="submit">Submit</Button>
                    </Form>
                    {comments.map((comment) => (
                        <Comment
                            key={comment.id}
                            comment={comment}
                            handleCommentLike={handleCommentLike}
                        />
                    ))}
                </div>
                <div className="col-md-2">

                </div>
            </div>
            <BlackFooter/>
            <Footer/>
        </div>


    );
}

function Comment({ comment, handleCommentLike }) {
    return (
        <div>
            <p>{comment.text}</p>
            <FontAwesomeIcon icon={faThumbsUp} onClick={() => handleCommentLike(comment.id)}/> Like ({comment.likes})

        </div>
    );
}

export default CommentPage;