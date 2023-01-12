import './App.scss';
import Header from './components/Header/Header';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoUploadPage from './pages/VideoUploadPage';


function App() {

  const API_URL = "https://project-2-api.herokuapp.com";
  const API_KEY = "5b49abea-002a-4c73-8a8c-1093d31a3fca";

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home API_URL={API_URL} API_KEY={API_KEY} />} />
          <Route path='/videos/:id' element={<Home API_URL={API_URL} API_KEY={API_KEY} />} />
          <Route path='upload' element={<VideoUploadPage API_URL={API_URL} API_KEY={API_KEY} />} />
          <Route path='*' element={<h2>Oops! Page not found.</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
