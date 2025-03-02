import { useEffect, useState } from "react";
import axios from "axios"; // Ensure Axios is installed
import Footer1 from './Footer2';
import './style4.css';
import Navbar from './NavAdmin';


export default function ListeAnnonces2() {
  const [articles, setArticles] = useState([]); // Remove TypeScript type annotation
  

  useEffect(() => {
    // Fetch articles based on the query
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`https://cloud-api-self.vercel.app/Ads`);
        setArticles(response.data.Ads);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
      }
    };

    fetchArticles(); // Appeler la fonction dès le chargement du composant
  }, []); 

  // Function to delete an article
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      axios
        .delete(`https://cloud-api-self.vercel.app/Ads/${id}`) // Ensure API expects this format
        .then(() => {
          setArticles(articles.filter((article) => article._id !== id));
        })
        .catch((error) => {
          console.error("Erreur lors de la suppression de l'article :", error);
        });
    }
  };

  return (
    <div>
        <Navbar />
        <h2 className='h22'>Welcome Back, Mr.Karrem!</h2>
        <p className='p22'>You can delete The ads.</p>
      <div className="product-container1">
        {articles.map((article) => (
          <div key={article.id} className="product-card1">
            <div className="image1">
               <img src={article.image} alt={article.title} width="100" />
            </div>
            <div className="description1">
                <h1>{article.title}</h1>
                <p>Price: {article.price}€ </p>
                <button onClick={() => handleDelete(article._id)} className="delete-button">Supprimer</button>
            </div>
          </div>
        ))}
      </div>
      <Footer1 />
    </div>
  );
}
