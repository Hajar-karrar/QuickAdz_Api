import { useState } from "react";

function ReviewSection({reviews, Language} ) {
  const [language, setLanguage] = useState("English"); // Default language
  const [currentIndex, setCurrentIndex] = useState(0); // To cycle through reviews
  const handleNext = () =>{
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  }
  const handlePrev = () =>{
    setCurrentIndex((prevIndex) => (prevIndex - 1) % reviews.length);
  }
  return (
    <div>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="English">English</option>
        <option value="Français">Français</option>
        <option value="Español">Español</option>
      </select>
     <button onClick={handleNext}></button>
      <div key={reviews[currentIndex].id} className="wid">
        <h6>{reviews[currentIndex].opn[language]}</h6>
        <p>{reviews[currentIndex].name}</p>
        <p>{reviews[currentIndex].city}</p>
      </div>

      <button onClick={handlePrev}>
        Next Review
      </button>
    </div>
  );
}

export default ReviewSection;
