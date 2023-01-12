import './Video.scss';
import video from '../../assets/videos/BrainStation_Sample_Video.mp4';

function Video({ currentVideo }) {

    return (
        <section className="hero">
            <video poster={currentVideo.image} className="hero__player" controls>
                <source src={video} />
            </video>
        </section>
    );
}

export default Video;