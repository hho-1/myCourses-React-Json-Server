
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Courses from './Courses';
import Loading from './Loading';


//! önemli not: projeye json server eklemede zorluk yasadim. npm install komutunun öncesine sudo yazip sifreyi girerek bu sorunu astim. 
//? Yani  sudo npm install -g json-server dedim. 
//? sonra json-server --watch api/db.json dedim.
//Bundan sonra mesela 3000 portunda json server calisirken baska bir terminalde projeyi baslatiyorsun ve 3001 portunda baslatiyor.



function App() {

  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchCourses = async () => {

    setLoading(true)

    try {
      const response = await axios.get('http://localhost:3000/courses')
      setCourses(response.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }

    
  }

  useEffect(() => {
    fetchCourses()
  },[])

  return (
    <div className="App">
      {
        loading ? (<Loading/>) : (<Courses courses = {courses}/>)
      }
       
    </div>
  );
}

export default App;
