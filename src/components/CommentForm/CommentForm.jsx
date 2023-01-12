import './CommentForm.scss';
import commentIcon from '../../assets/icons/add_comment.svg';
import { useState } from 'react';
import axios from 'axios';


function CommentForm({ currentVideo, API_URL, setComments, API_KEY }) {

    const user = "Mohan Muruge"
    const [comment, setComment] = useState("");

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    const isFormValid = () => {
        if (!comment) {
            return false;
        }

        return true;
    }

    const handleSubmit = (event) => {
        event.preventDefault();


        if (isFormValid()) {
            let commentObject = {
                name: user,
                comment: comment
            }

            let videoId = currentVideo.id;

            axios.post(`${API_URL}/videos/${videoId}/comments?api_key=${API_KEY}`, commentObject)
                .then(response => {
                    console.log(response)
                    return axios.get(`${API_URL}/videos/${videoId}?api_key=${API_KEY}`)
                })
                .then(response => {
                    setComments(response.data.comments)
                })
                .catch(error => {
                    console.log(error)
                })
        } else {
            console.log("Error submitting the comment")
        }

        event.target.reset();
    }


    return (
        <div className="comments__wrapper">
            <div className="comments__avatar"></div>
            <form id="commentsForm" onSubmit={handleSubmit} className="comments__form">
                <div className="comments__input-container">
                    <label htmlFor="comment" className="comments__subtitle">join the conversation</label>
                    <textarea id="inputComment" className="comments__input comments__input" name="comment"
                        placeholder="Add a new comment" onChange={handleCommentChange}></textarea>
                </div>
                <button type="submit" className="button comments__btn">
                    <img src={commentIcon} alt="comment icon"
                        className='button__icon'></img>
                    <span className="button__text">COMMENT</span>
                </button>
            </form>
        </div>
    );
}

export default CommentForm;