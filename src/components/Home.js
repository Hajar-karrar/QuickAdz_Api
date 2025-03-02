import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer1 from './Footer1';
import logo from '../images/wow.jpeg';
import logo1 from '../images/The phone.jpeg';
import logo2 from '../images/Chair.jpeg';
import {CircleArrowLeft, CircleArrowRightIcon}from "lucide-react";
export default function Home() {
  
  const aboutUsRef = useRef(null);
  const reviewsRef = useRef(null)
  
  const scrollToReviews = ()=>{
    if(reviewsRef.current){
      reviewsRef.current.scrollIntoView({behavior : "smooth", block : "start"})
    }
  }
  const scrollToAboutUs = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
       const products = [
        {
          id: 1,
          name: "Arno Wood Glass Table",
          price: "$500",
          location: "New in Rochester",
          imgSrc: "glass.jpeg", // Replace with your image path
          colors: ["#000", "#6cc24a", "#6cc24a"], // Example colors
        },
        {
          id: 2,
          name: "Ian Felton Chair",
          price: "$600",
          location: "New in Rochester",
          imgSrc: "Fauteuil par Ian Felton.jpeg",
          colors: ["#000", "#f7c646"],
        },
      {
          id: 3,
          name: "Marshalls Headphones",
          price: "$300",
          location: "New in Rochester",
          imgSrc: "marshall.jpeg",
          colors: ["#f7c646", "#000"],
        },
        {
          id: 4,
          name: "Very Berry Iphone Case",
          price: "$60",
          location: "New in Rochester",
          imgSrc: "Very Berry iPhone Case.jpeg",
          colors: ["#6cc24a", "#000"],
        },
        {
          id: 5,
          name: "Pamplona Eboniz frame",
          price: "$830",
          location: "New in Rochester",
          imgSrc: "Unique Picture Frames & Modern Gallery Wall Frames _ CB2.jpeg",
          colors: ["#000"],
        },
        {
          id: 6,
          name: "Handmade Wood Covers",
          price: "$249 ",
          location: "New in Rochester",
          imgSrc: "Handmade Wood Covers for iPhone, Laptop, Razer _ USA.jpeg",
          colors: ["#000", "#6cc24a"],
        },
  ];
  const reviews=[
    {id: 1, name: "Ahlam E.", city: "Bern, Swi", opn: "I’ve never had such a hassle-free experience! The process of posting my announcements was straightforward, and the outcome was absolutely perfect. I’m thrilled with how everything turned out."},
    {id: 2, name: "Ahlam E.", city: "Cardiff, Wal", opn: "Exceptional service and flawless execution! My announcements were posted quickly and looked fantastic. The entire experience was smooth, professional, and exceeded my expectations."},
    {id: 3, name: "Zaid M.", city: "Casa, Mor", opn: "Everything about this platform is amazing! Posting my announcements was quick and simple, and the quality of the final result blew me away. I’m beyond satisfied!"},
    {id: 4, name: "Mohammed S.", city:"Tangier, Mor", opn: "A seamless experience from start to finish! Posting my announcements was incredibly easy, and the results exceeded my expectations. The quality and attention to detail are unmatched. Highly recommended!"},
    {id: 5, name: "Sarah M.", city: "Los Angeles, CA" , opn: "The announces are perfectly posted, and I couldn't be happier with my experience.From start to finish,the process was smooth, and the quality is the best."},  
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };
  const [Language, setLanguage] = useState("en");
  const translations={
    en :{
        title1 :"Discover what's",
        title2 : "New",
        title3 : "Share what's",
        title4 : "Next",
        description1 : "Explore the latest product launches, deals, and innovations ",
        description2 : " all in one place. Whether you're showcasing your new creations",
        description3 : "or searching for the next big thing,",
        description4 : "is here to help ",
        description5 : "you make the connection",
        button1 : "Ready to Dive in ?",
        h1 : "New Collections",
        p3 : " These products are made with wood from forests certified to be responsibly managed",
        title5 : "Would you like to learn  more about",
        title6 : "us ?",
        description6 : "Our platform provides detailed announcements, reviews, and insights to help you stay informed about the latest innovations. Whether you’re looking for tech gadgets, fashion trends, or lifestyle essentials, our team is dedicated to showcasing the best products",
        description7 : "available.",
        button2 : "Learn more",
      } ,
    fr: {
      title1 : "Découvrez ce qui est",
      title2 : "Nouveau",
      title3 : "Partagez ce qui est",
      title4 : "Prochain",
      description1 : "Explorez les derniers lancements de produits, offres et innovations",
      description2 : "tout en un seul endroit. Que vous présentiez vos nouvelles créations",
      description3 : "ou cherchiez la prochaine grande nouveauté,",
      description4 : "est là pour vous aider",
      description5 : "à établir la connexion",
      button1 : "Prêt à plonger ?",
      h1 : "Nouvelles Collections",
      p3 : "Ces produits sont fabriqués avec du bois provenant de forêts certifiées comme étant gérées de manière responsable",
      title5 : "Souhaitez-vous en savoir plus sur" ,
      title6 : "nous ?",
      description6 : "Notre plateforme propose des annonces détaillées, des avis et des perspectives pour vous aider à rester informé des dernières innovations. Que vous recherchiez des gadgets technologiques, des tendances mode ou des essentiels de style de vie, notre équipe est dédiée à mettre en avant les meilleurs produits",
      description7 : "disponibles.",
      button2 : "En savoir plus",
    },
    sp : {
      title1 : "Descubre qué es",
      title2 : "Nuevo",
      title3 : "Comparte qué es",
      title4 : "Lo siguiente",
      description1 : "Explora los últimos lanzamientos de productos, ofertas e innovaciones",
      description2 : "todo en un solo lugar. Ya sea que estés mostrando tus nuevas creaciones",
      description3 : "o buscando lo próximo en tendencia,",
      description4 : "está aquí para ayudarte",
      description5 : "a hacer la conexión",
      button1 : "¿Listo para sumergirte?",
      h1 : "Nuevas Colecciones",
      p3 : "Estos productos están hechos con madera de bosques certificados como gestionados de manera responsable",
      title5 : "¿Te gustaría saber más sobre",
      title6 : "nosotros?",
      description6 : "Nuestra plataforma ofrece anuncios detallados, reseñas y perspectivas para ayudarte a estar informado sobre las últimas innovaciones. Ya sea que busques gadgets tecnológicos, tendencias de moda o esenciales de estilo de vida, nuestro equipo está dedicado a mostrar los mejores productos",
      description7 : "disponibles.",
      button2 : "Saber más",
    }
  };
  const text= translations[Language];
  const [darkMode, setDarkMode] = useState(false);
  return (
    
    <div className="App">
      <div className={darkMode ? "darkBack" : "background"}>
      <Navbar dark={darkMode} setDark={setDarkMode} scrollToAboutUs={scrollToAboutUs} scrollToReviews={scrollToReviews} />

        <div className="content">
          <img src={logo} className='imgLogo' alt="" />
          <div className='content2'>
          <h1 className='bowlby-one-sc-regular'>{text.title1} <br /> {text.title2} <br />{text.title3} <br />{text.title4}</h1>
          <p className='par'>{text.description1} <br /> {text.description2} <br />{text.description3} <span className='macondo-regular'>QuickADZ</span> {text.description4} <br /> {text.description5}</p>
          <Link to="/Annonces"><button className={darkMode? "darkBtn" : ""} >{text.button1} </button></Link>
          </div>
        </div>
    </div>
  <div className={darkMode? "darkAll" : "all"} >
      <div className="header2">
       <div className="header">
          <h1 className="h11">{text.h1}</h1>
          <p className={darkMode? "darkP3" : "p3"}>{text.p3}</p>
       </div>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.imgSrc} alt={product.name} className="product-img" />
            <div className="vid">
            <h2 className={darkMode ? "darkh2" : ""} >{product.name}</h2>
            <div className= "price">{product.price}</div>
            </div>
            <p className={darkMode? "darkP" : ""}>{product.location}</p>
          </div>
        ))}
      </div>
    </div>
    <div className={darkMode? "darkAll" : "all"}>
    
      <div className="content" >
          <div className='content3' ref={aboutUsRef}>
             <h1 className= {darkMode? "bowlby-one-sc-regular darkH1" : 'bowlby-one-sc-regular h1'}>{text.title5} <br />{text.title6}</h1>
             <p className={ darkMode? "darkpar1" :'par1'}>{text.description6} <br /> {text.description7}</p>
             <Link to="/About"><button className={darkMode? "darkmt-4" :'mt-4'}>{text.button2}</button></Link>
          </div>
          <div className='parent'>
              <img src={logo1} className='child1' alt="" />
              <img src={logo2} className='child2 ' alt="" />     
          </div>
      </div>
    
    <div className='divid' ref={reviewsRef} >
    <button onClick={handlePrev} className="text-2xl" >
          <CircleArrowLeft style={{ width: "40px", height: "40px" }}/>
        </button>
       
        <div key={reviews.id} className='wid'>
          <h6>{reviews[currentIndex].opn}</h6>
          <p>{reviews[currentIndex].name}</p>
          <p>{reviews[currentIndex].city}</p>
        </div>

        <button onClick={handleNext} className="text-2xl">
          <CircleArrowRightIcon className="w-6 h-6" style={{ width: "40px", height: "40px" }}/>
        </button>
    </div>
   
    
    {/*Footer*/}
    <Footer1 Language={Language} setLanguage={setLanguage} darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

     </div>
    
  );

}
