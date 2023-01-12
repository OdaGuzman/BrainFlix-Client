import './RecommendedList.scss';
import RecommendedVideo from '../RecommendedVideo/RecommendedVideo';

function RecommendedList({ videoList }) {

    return (
        <section className="recommended">
            <p className="recommended__title">NEXT VIDEOS</p>
            {videoList.map((video) => {
                return <RecommendedVideo key={video.id} id={video.id} image={video.image} title={video.title} channel={video.channel} />
            })}
        </section>
    );
}

export default RecommendedList;