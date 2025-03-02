import { useEffect, useState } from "react";
import axios from "axios";
import './style3.css';
import Navbar from './MembreNav';
import Footer1 from './Footer2';
const AddAnnounce = () => {
  
  const [articles, setArticles] = useState([]);
  const [filters, setFilters] = useState({ city: "", category: "" });
  const [newArticle, setNewArticle] = useState({
    title: "",
    category: "",
    description: "",
    city: "",
    price: "",
    image: "", // Image URL instead of file
    name: "",
    email: ""
  });

  useEffect(() => {
    axios
      .get("https://cloud-api-self.vercel.app/Ads", { params: filters })
      .then((response) => setArticles(response.data.Ads))
      .catch((error) => console.error(error));
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("https://cloud-api-self.vercel.app/Ads", newArticle);
      setArticles([...articles, response.data.ad]);
      setNewArticle({ title: "", category: "", description: "", city: "", price: "", image: "", name: "", email: "" });
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'annonce :", error);
    }
  };
  return (
  <div className='bd'>
    <Navbar/>
    <div className="containerr22">
      
    <div className="form-containerr22">
      <h2 className='h2h2'>Ajouter une Annonce</h2>
      <form onSubmit={handleCreate}>
        {/* Première ligne */}
        <div className="form-row">
          <div className="form-groupp1">
            <label htmlFor="titre">Titre :</label>
            <input
              type="text"
              name="title"
              value={newArticle.title}
              onChange={handleChange}
              placeholder="Titre de l'annonce"
              required
            />
          </div>
          <div className="form-groupp1">
            <label htmlFor="description">Description :</label>
            <textarea
              name="description"
              value={newArticle.description}
              onChange={handleChange}
              placeholder="Description de l'annonce"
            ></textarea>
          </div>
        </div>

        {/* Deuxième ligne */}
        <div className="form-row">
          <div className="form-groupp1">
            <label htmlFor="categorie">Catégorie :</label>
            <select
              name="category"
              value={newArticle.category}
              onChange={handleChange}
            >
              <option value="">Sélectionnez une catégorie</option>
              <option value="Frames">Frames</option>
              <option value="Furniture">Furniture</option>
              <option value="Electronics">Electronics</option>
            </select>
          </div>
          <div className="form-groupp1">
            <label htmlFor="prix">Prix (€) :</label>
            <input
              type="number"
              name="price"
              value={newArticle.price}
              onChange={handleChange}
              placeholder="Prix"
              required
            />
          </div>
        </div>

        {/* Troisième ligne */}
        <div className="form-row">
          <div className="form-groupp1">
            <label htmlFor="ville">Ville :</label>
            <select name="city" value={newArticle.city} onChange={handleChange}>
              <option value="">Sélectionnez une ville</option>
              <option value="Rabat">Rabat</option>
              <option value="Casablanca">Casablanca</option>
              <option value="Tanger">Tanger</option>
            </select>
          </div>
          <div className="form-groupp1">
            <label htmlFor="photos">Image(s) :</label>
            <input type="text" name="image" value={newArticle.image} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-groupp1">
            <label htmlFor="by">Name :</label>
            <input type="text" name='name' value={newArticle.name} onChange={handleChange} placeholder='your name' />
          </div>
          <div className="form-groupp1">
            <label htmlFor="email">E-mail :</label>
            <input
              type="email"
              name="email"
              value={newArticle.email}
              onChange={handleChange}
              placeholder='your email'
            />
          </div>
        </div>

        {/* Bouton */}
        <button type="submit" className="submit-button">
          Ajouter l'Annonce
        </button>
      </form>
    </div>
   
  </div>
   <Footer1/>
  </div>
  );
};

export default AddAnnounce;