import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NavBar from "../components/NavBar";

function Movie() {
const [user, setUser] = useState({});
const params = useParams();
const userId = params.id;


  useEffect(()=>{
    fetch(`http://localhost:4000/movies/${userId}`)
    .then(r=> r.json())
    .then(data => setUser(data))
    .catch(error=>console.error(error))
  },[userId])
  
  if(!user.title){
    return <h1>Loading...</h1>
  }

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>{user.title}</h1>
        <p>Duration : {user.time} minutes</p>
        <h3>Genre : {user.genres.join(', ')}</h3>
      </main>
    </>
  );
};

export default Movie;
