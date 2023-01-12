import Video from '../components/Video/Video';
import VideoInfo from '../components/VideoInfo/VideoInfo';
import CommentsList from '../components/CommentsList/CommentsList';
import RecommendedList from '../components/RecommendedList/RecommendedList';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';


function Home({ API_URL, API_KEY }) {
    const { id } = useParams();
    const [currentVideo, setCurrentVideo] = useState(null);
    const [videoList, setVideoList] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/videos?api_key=${API_KEY}`)
            .then(response => {

                setVideoList(response.data);
            })
    }, [API_URL, API_KEY]);

    useEffect(() => {
        let videoId = id || videoList[0]?.id;

        if (videoId) {
            axios.get(`${API_URL}/videos/${videoId}?api_key=${API_KEY}`)
                .then(response => {
                    setCurrentVideo(response.data);
                })
        }
    }, [id, videoList, comments, API_URL, API_KEY]);

    return (
        <>
            {currentVideo && <Video currentVideo={currentVideo} />}
            <div className='container'>
                <section className='video'>
                    {currentVideo && <VideoInfo currentVideo={currentVideo} />}
                    {currentVideo && <CommentsList currentVideo={currentVideo} API_URL={API_URL} API_KEY={API_KEY} setComments={setComments} />}
                </section>
                {videoList && currentVideo && <RecommendedList videoList={videoList?.filter((video) => video.title !== currentVideo.title)} />}
            </div>
        </>);
}

export default Home;