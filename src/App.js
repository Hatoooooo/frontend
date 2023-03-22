import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
      //On déclare une variable (restaurants) qui va contenir nos restaurants
    //On obtient une méthode (setRestaurants) permettant de mettre à jour les restaurants et de rafraîchir l'affichage
  const [restaurants, setRestaurants] = useState()
    //Mééthode du cycle de vie d'un composant React permettant d'effectuer une action au montage du composant
    //Le montage de l'apparition du composant à l'écran

  useEffect(() => {
    //On crée une méthode pour récupérer les données provenant du backend (strapi )
    const loadDate = async () => {
      //On récupère les données du backend avec la librairie Axios (C'est un appel HTTP)
      const response = await axios.get('http://localhost:1337/api/restaurants?populate=*')
      //On vérifie que l'appel d'api s'est bien passé (status = 200 = "ok")
      if (response.status === 200) {
        //Si l'appel d'API est OK, on enregistre les restaurants dans la variable "restaurants"
        const data = response.data.data
        setRestaurants(data)
      }
    }
    //On appelle la méthode créee précédement
    loadDate()
  },[])

  return (
    <div className="App">
      <Header />
      <Clock />
      {
        //On vérifie qu'on a bien récupérer les restaurants
        //On crée une bouche sur le tableau de restaurants grâce à la fonction "map()"
        //On retourne pour chaque restaurant une Card pour afficher son contenu
        restaurants && restaurants.map(restaurant => {
          return(
            <Card restaurant={restaurant} />
          )
        })
      }
      <Footer />
    </div>
  );
}

export default App;
