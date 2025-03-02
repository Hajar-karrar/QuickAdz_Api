import { useEffect, useState } from "react";
import axios from "axios"; // Ensure Axios is installed
import './style2.css';
import Footer1 from './Footer2';
import Navbar from './AdminNav';
import logo1 from '../images/Chair.jpeg';
import logo2 from '../images/phonecase.jpeg';
import logo3 from '../images/wh.jpeg';


export default function Apiclient2() {
  const [articles, setArticles] = useState([]);
  const [filters, setFilters] = useState({ city: "", category: "" }); // Remove TypeScript type annotation
  const [newArticle, setNewArticle] = useState({
    title: "",
    category: "",
    description: "",
    city: "",
    price: "",
    image: null, // File for image upload
  });



  useEffect(() => {
    const fetchArticles2 = async () => {
      try {
        const response = await axios.get("https://cloud-api-self.vercel.app/Ads/filter", {
          params: { city: filters.city, category: filters.category }, // Passer les filtres dans la requête
        });
        setArticles(response.data.Ads);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
      }
    };
  
    fetchArticles2();
  }, [filters]); 




  const handleFilterChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [e.target.name]: e.target.value
    }));
  };

  

  useEffect(() => {
    // Fetch articles based on the query
    const fetchArticles2 = async () => {
      try {
        const response = await axios.get(`https://cloud-api-self.vercel.app/Ads/filter`);
        setArticles(response.data.Ads);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
      }
    };

    fetchArticles2();
  },[] );


  // Function to handle form changes
  const handleChange = (
    e
  ) => {
    setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
  };

  // Handle file input
  const handleFileChange = (e) => {
    if (e.target.files) {
      setNewArticle({ ...newArticle, image: e.target.files[0] });
    }
  };

  

  return (
    <div>


<div className='con1'>
  <Navbar  />
  <div className="DIC">
    <div className="masonry-grid">
      <div className="grid-item">
        <img src={logo1} alt="Frame" className='grid-image' />
        <div className="grid-overlay">
          <h3 className="grid-title">Inspiring Art</h3>
          <p className="grid-description">Discover unique pieces for your home.</p>
        </div>
      </div>
      <div className="grid-item">
        <img src={logo2} alt="Electronics" className='grid-image' />
        <div className="grid-overlay">
          <h3 className="grid-title">Latest Electronics</h3>
          <p className="grid-description">Upgrade your life with cutting-edge tech.</p>
        </div>
      </div>
      <div className="grid-item">
        <img src={logo3} alt="Furniture" className='grid-image' />
        <div className="grid-overlay">
          <h3 className="grid-title">Stylish Furniture</h3>
          <p className="grid-description">Transform your space with modern designs.</p>
        </div>
      </div>
    </div>
  </div>
</div>






      <div className="tabs-section">
      <h1>/All Annonce</h1>
      <div className="tabs-container">
      <button className="tab active">Filter By</button>
        <select name="city" value={filters.city} onChange={handleFilterChange} className="tab">
          <option value="">Toutes les villes</option>
          <option value="Rabat">Rabat</option>
          <option value="Casablanca">Casablanca</option>
          <option value="Tanger">Tanger</option>
        </select>
        <select name="category" value={filters.category} onChange={handleFilterChange} className="tab">
          <option value="">Toutes les catégories</option>
          <option value="Frames">Frames</option>
          <option value="Furniture">Furniture</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>

      </div>
      
       
     
      <div className="product-container">
        {articles.map((article) => (
          <div key={article.id} className="product-card">
            <div className="image">
            <img src={article.image} alt={article.title} width="100" />
            </div>
            <div className="description">
              <h3>{article.title}</h3>
              <p>Price: {article.price}€</p>
            </div>
          </div>
        ))}
      </div>

      <Footer1/>
    </div>
  );
}
