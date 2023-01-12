import UploadForm from "../components/UploadForm/UploadForm";


function VideoUploadPage({ API_URL }) {
    return (
        <div className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <UploadForm API_URL={API_URL} />
        </div>);
}

export default VideoUploadPage;