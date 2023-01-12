import './VideoInfo.scss';
import views from '../../assets/icons/views.svg';
import likes from '../../assets/icons/likes.svg';

function Video({ currentVideo }) {

    let d = new Date(currentVideo.timestamp);
    let date = `${(d.getMonth() + 1)}/${d.getDate()}/${d.getFullYear()}`;

    return (
        <div className="video__info">
            <h1 className="video__title">{currentVideo.title}</h1>
            <div className="video__details">
                <div className="video__left">
                    <p className="video__author video__text">By {currentVideo.channel}</p>
                    <p className="video__date video__text">{date}</p>
                </div>
                <div className="video__right">
                    <div className="video__views">
                        <img src={views} alt="Views icon" className="video__icon"></img>
                        <p className="video__views--text video__text">{currentVideo.views} </p>
                    </div>
                    <div className="video__likes">
                        <img src={likes} alt="Likes icon" className="video__icon"></img>
                        <p className="video__likes--text video__text">{currentVideo.likes} </p>
                    </div>
                </div>
            </div>
            <p className="video__description">{currentVideo.description} </p>
        </div>
    );
}

export default Video;