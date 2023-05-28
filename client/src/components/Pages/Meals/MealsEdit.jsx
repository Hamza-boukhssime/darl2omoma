import React, { useEffect, useState } from 'react';
import axios from 'axios';
const MealsEdit = () => {
  const [meals, setMeals] = useState([]);
  const [updatedMeals, setUpdatedMeals] = useState({});

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = () => {
    axios
      .get('http://localhost:5000/meals/')
      .then(response => {
        setMeals(response.data);
      })
      .catch(error => {
        console.error('Error fetching meals: ', error);
      });
  };

  const daysOfWeek = {
    1: 'الأحد',
    2: 'الإثنين',
    3: 'الثلاثاء',
    4: 'الأربعاء',
    5: 'الخميس',
    6: 'الجمعة',
    7: 'السبت',
  };

  const mealstime = {
    breakfast: 'إفطار',
    lunch: 'غداء',
    afternoon_tea: 'عصورية',
    dinner: 'عشاء',
  };
  
  const handleMealInputChange = (mealId, value) => {
    setUpdatedMeals(prevState => ({
      ...prevState,
      [mealId]: value,
    }));
  };

  const renderMealInputs = (dayId, mealCategory) => {
    const filteredMeals = meals.filter(
      meal => meal.day_id === dayId && meal.category_id === mealCategory
    );

    return filteredMeals.map(meal => (
      <input
        key={meal.id}
        value={updatedMeals[meal.id] || meal.name}
        onChange={e => handleMealInputChange(meal.id, e.target.value)}
        className="form-control"
      />
    ));
  };

  const saveChanges = () => {
    Object.keys(updatedMeals).forEach(mealId => {
      const updatedMeal = {
        name: updatedMeals[mealId],
      };

      axios
        .put(`http://localhost:5000/meals/${mealId}`, updatedMeal)
        .then(response => {
          // Handle success, e.g., display a success message
          console.log('Meal updated successfully');
        })
        .catch(error => {
          console.error('Error updating meal: ', error);
          // Handle error, e.g., display an error message
        });
    });

    // After updating the meals, fetch the updated data again
    fetchMeals();

    // Reload the page
    window.location.reload();
  };

  return (
    <div className='m-5'>
      <table className="table table-bordered table-responsive-lg">
        <thead className="thead-light">
          <tr>
            <th>اليوم</th>
            <th>وجبة الإفطار</th>
            <th>وجبة الغداء</th>
            <th>شاي العصر</th>
            <th>وجبة العشاء</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(daysOfWeek).map(dayId => (
            <tr key={dayId}>
              <td>{daysOfWeek[dayId]}</td>
              <td>{renderMealInputs(Number(dayId), 1)}</td>
              <td>{renderMealInputs(Number(dayId), 2)}</td>
              <td>{renderMealInputs(Number(dayId), 3)}</td>
              <td>{renderMealInputs(Number(dayId), 4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">
        <button onClick={saveChanges} className="buttonn">
          حفظ
        </button>
      </div>
    </div>
  );
};

export default MealsEdit;


