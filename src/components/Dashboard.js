import React, { useEffect, useState } from "react";
import Navbar from './NavAdmin';
import Footer1 from './Footer2';
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    axios
      .get("https://cloud-api-self.vercel.app/Ads")
      .then((response) => {
        setAnnonces(response.data.Ads || []);
      })
      .catch((error) => {
        console.error("Error fetching annonces:", error);
      });
  }, []);

  // Calcul des statistiques
  const annoncesParMois = annonces.reduce((acc, annonce) => {
    const mois = new Date(annonce.created_at).getMonth() + 1;
    acc[mois] = (acc[mois] || 0) + 1;
    return acc;
  }, {});

  const annoncesParCategorie = annonces.reduce((acc, annonce) => {
    acc[annonce.category] = (acc[annonce.category] || 0) + 1;
    return acc;
  }, {});

  const annoncesParVille = annonces.reduce((acc, annonce) => {
    acc[annonce.city] = (acc[annonce.city] || 0) + 1;
    return acc;
  }, {});

  // Données pour les graphiques avec nouvelles couleurs
  const dataBar = {
    labels: Object.keys(annoncesParMois),
    datasets: [
      {
        label: "Nombre d'annonces par mois",
        data: Object.values(annoncesParMois),
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Bleu clair
        borderColor: "rgba(75, 192, 192, 1)", // Bleu foncé
        borderWidth: 1,
      },
    ],
  };

  const dataPieCategorie = {
    labels: Object.keys(annoncesParCategorie),
    datasets: [
      {
        data: Object.values(annoncesParCategorie),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8A2BE2'],
        hoverOffset: 4,
      },
    ],
  };

  const dataPieVille = {
    labels: Object.keys(annoncesParVille),
    datasets: [
      {
        data: Object.values(annoncesParVille),
        backgroundColor: ['#4BC0C0', '#FF6384', '#36A2EB', '#FFCE56'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
       <Navbar />
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center dash">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
        <div className="bg-white rounded-lg shadow p-4" style={{ width: '70%',  margin: 'auto', marginTop:'2%'  }}>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Ads by month : </h2>
          <div style={{ width: '50%',  margin: 'auto', marginTop:'2%', marginBottom:'2%'  }}>
          <Bar data={dataBar} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4" style={{ width: '70%',height:'',  margin: 'auto', marginTop:'2%' }}>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Ads by category :</h2>
          <div style={{ width: '50%',  margin: 'auto', marginTop:'2%', marginBottom:'2%'  }}>
          <Pie data={dataPieCategorie} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4" style={{ width: '70%',  margin: 'auto', marginTop:'2%', marginBottom:'2%'  }}>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Ads by city :</h2>
          <div style={{ width: '50%',  margin: 'auto', marginTop:'2%', marginBottom:'2%'  }}>
          <Pie data={dataPieVille}/>
          </div>
        </div>
      </div>
      <Footer1 />
    </div>
  );
};

export default Dashboard;
