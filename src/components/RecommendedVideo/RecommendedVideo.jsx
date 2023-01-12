import './RecommendedVideo.scss';
import { Link } from 'react-router-dom';

function RecommendedVideo({ id, image, title, channel }) {
    return (
        <Link to={`/videos/${id}`}><div className="recommended__video" >
            <img src={image} alt={title}
                className="recommended__img"></img>
            <div className="recommended__info">
                <h3 className="recommended__name">
                    {title}
                </h3>
                <p className="recommended__author">{channel}</p>
            </div>
        </div>
        </Link>
    );
}

export default RecommendedVideo;
