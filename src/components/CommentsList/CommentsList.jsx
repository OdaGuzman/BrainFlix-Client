import './CommentsList.scss';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';

function CommentsList({ currentVideo, API_URL, setComments, API_KEY }) {

    const comments = currentVideo.comments;

    return (
        <div className="comments">
            <h3 className="comments__title">{comments.length} Comments</h3>
            <CommentForm currentVideo={currentVideo} API_URL={API_URL} setComments={setComments} />
            {comments.sort((a, b) => parseInt(b.timestamp) - parseInt(a.timestamp)).map((comment) => {
                //Timestamp modifier to convert timestamp to readable format using backticks and Date() method.
                let d = new Date(comment.timestamp);
                let date = `${(d.getMonth() + 1)}/${d.getDate()}/${d.getFullYear()}`;

                return <Comment key={comment.id} videoId={currentVideo.id} commentId={comment.id} user={comment.name} comment={comment.comment} date={date} API_URL={API_URL} API_KEY={API_KEY} setComments={setComments} />
            })}

        </div>
    );
}

export default CommentsList;