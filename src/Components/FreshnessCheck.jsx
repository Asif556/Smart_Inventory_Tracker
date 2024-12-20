import React, { useState, useRef, useEffect } from "react";
import * as tmImage from "@teachablemachine/image";
import './FreshnessCheck.css'
import { getAuth, signOut } from "firebase/auth";
import app from './Firebase'
import { useNavigate ,Link} from "react-router";

const FreshnessCheck = () => {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const imageRef = useRef(null);

  const MODEL_URL = "/models/";

  let model;

  const loadModel = async () => {
    try {
      setLoading(true);
      console.log("Loading model...");
      model = await tmImage.load(MODEL_URL + "model.json", MODEL_URL + "metadata.json");
      console.log("Model loaded successfully!");
      setLoading(false);
    } catch (error) {
      console.error("Error loading model:", error);
      setLoading(false);
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    imageRef.current.src = imageURL;

    console.log("Image uploaded: ", file.name);

    if (!model) {
      await loadModel();
    }

    try {
      const predictionResult = await model.predict(imageRef.current);
      console.log("Prediction result: ", predictionResult);

      const highestPrediction = predictionResult.reduce((prev, curr) =>
        prev.probability > curr.probability ? prev : curr
      );
      
      console.log("Highest prediction: ", highestPrediction);
      setPrediction(highestPrediction.className); 
    } catch (error) {
      console.error("Error during prediction: ", error);
    }
  };

  
  const auth = getAuth(app);
function goout(){
  signOut(auth).then(() => {
    alert("sign out succesfully")
  }).then(
    a('/')
  )
}
let a=useNavigate()
  function changetofeatures(){
    a('/Features')

  }

  useEffect(() => {
    loadModel();
  }, []);

  return (
    <div className="fresh-main">

<div className="featurs-nav">
        <nav className="landing-nav-main">
          <div className="landing-logo">StockSense</div>
          <ul className="nav-links-main">
            <li><Link to="/Main">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link onClick={goout}>Logout</Link></li>
          </ul>
        </nav>
      </div>
    <div className="freshcheck-page">
      
      <div className="fresh-container">
      <h1>Fruit Freshness Checker</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <img
        ref={imageRef}
        alt="Uploaded"
        style={{ maxWidth: "300px", marginTop: "20px" }}
      />
      {loading && <p>Loading model...</p>}
      {prediction && <p>Prediction: <strong>{prediction}</strong></p>}
    </div>
    </div>
    </div>
  );
};

export default FreshnessCheck;
