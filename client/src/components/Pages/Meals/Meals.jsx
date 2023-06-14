import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./style.css"
function Meals() {
  const [currentDay, setCurrentDay] = useState();
  const [currentMeals, setCurrentMeals] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
   
    const id = currentDate.getDay() + 1;
    axios
      .get(`http://localhost:5000/meals/${id}`)
      .then((res) => {
        setCurrentMeals(res.data);
        console.log(currentMeals)
      })
      .catch((error) => console.log(error));
      setCurrentDay(currentDate.toLocaleDateString('ar-EG', { weekday: 'long' }));
  }, []);

  const daysofweek = [
    "الأحد",
    "الإثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];

  const mealstime = {
    breakfast: "إفطار",
    lunch: "غداء",
    afternoon_tea: "شاي العصر",
    dinner: "عشاء",
  };

  return (
    <div className="all" >
      <h1 className="title">{currentDay}</h1>


      <div className="therow">
        <div className="cols">
          <div className="cards ">
            <div className="body-card" style={{ height: '320px' }}>
              <h2 className="title-card">{mealstime.breakfast}</h2>
              <ul className="list">
                {currentMeals[0] &&
                  currentMeals[0].name.split("+").map((item, index) => (
                    <li className='li' key={index}>{item.trim()}</li>
                  
                  ))
                  
                  }
              </ul>
            </div>
          </div>
        </div>

        <div className="cols">
          <div className="cards">
            <div className="body-card" style={{ height: '320px' }}>
              <h2 className="title-card">{mealstime.lunch}</h2>
              <ul className="list">
                {currentMeals[1] &&
                  currentMeals[1].name.split("+").map((item, index) => (
                    <li className='li' key={index}>{item.trim()}</li>
                  
                  ))
                  
                  }
              </ul>
            </div>
          </div>
        </div>
        <div className="cols">
          <div className="cards">
            <div className="body-card " style={{ height: '320px' }}>
              <h2 className="title-card">{mealstime.afternoon_tea}</h2>
              <ul className="list">
                {currentMeals[2] &&
                  currentMeals[2].name.split("+").map((item, index) => (
                    <li className='li' key={index}>{item.trim()}</li>
                  
                  ))
                  
                  }
              </ul>
            </div>
          </div>
        </div>

        <div className="cols">
          <div className="cards">
            <div className="body-card" style={{ height: '320px' }}>
              <h2 className="title-card">{mealstime.dinner}</h2>
              <ul className="list">
                {currentMeals[3] &&
                  currentMeals[3].name.split("+").map((item, index) => (
                    <li className='li' key={index}>{item.trim()}</li>
                  
                  ))
                  
                  }
              </ul>
            </div>
          </div>
        </div>
      </div>
      
     <div className='div-button'>
     <Link to="/meals/edit">
      <button className='button-meals ms-5' style={{padding:10}}> تعديل الوجبات</button>
      </Link>
      <button onClick={()=>{
        document.querySelectorAll('button').forEach(item=>{
          item.style.display='none'
        })
        window.print()
        document.querySelectorAll('button').forEach(item=>{
          item.style.display=''
        })

    }} className='button-meals' >نسخ</button>
     </div>

    </div>
    
  );
}

export default Meals;


