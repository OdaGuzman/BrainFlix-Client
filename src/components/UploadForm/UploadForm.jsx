import './UploadForm.scss';
import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import publishIcon from '../../assets/icons/publish.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function UploadForm({ API_URL, API_KEY }) {

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    }

    const isFormValid = () => {
        if (!title || !description) {
            return false;
        }
        return true;
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        if (isFormValid()) {
            let videoObject = {
                title: title,
                description: description
            }

            axios.post(`${API_URL}/videos?api_key=${API_KEY}`, videoObject)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        } else {
            console.log("Error uploading video")
        }

        event.target.reset();
    }

    const handleCancelBtn = () => {
        navigate('/');
    }

    return (
        <form onSubmit={handleSubmit} className="upload__form">
            <div className="upload__wrapper">
                <div className="upload__thumbnail">
                    <p className="upload__subtitle">video thumbnail</p>
                    <div className="upload__img-container">
                        <img src={thumbnail} alt="bicicle" className="upload__img" />
                    </div>
                </div>
                <div className="upload__inputs">
                    <label htmlFor="title" className="upload__label">title your video</label>
                    <input type="text" className="upload__input" name="title" placeholder='Add a title to your video' onChange={handleChangeTitle} />
                    <label htmlFor="description" className="upload__label">add a video description</label>
                    <textarea className='upload__input upload__input--big' name="description" placeholder='Add a description to your video' onChange={handleChangeDescription} />
                </div>
            </div>

            <div className="upload__buttons">
                <button type='submit' className="upload__btn button">
                    <img src={publishIcon} alt="upload icon" className="button__icon" />
                    <span className="button__text">PUBLISH</span>
                </button>
                <button onClick={handleCancelBtn} className='upload__btn-cancel' >
                    <span className="upload__cancel">CANCEL</span>
                </button>

            </div>
        </form>
    )
}

export default UploadForm;