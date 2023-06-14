import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from "axios"
import { useEffect,useState } from "react"

function Card({item}) {
    
    const [pregnant,setPregnant] =useState([])
    useEffect(()=>{
        
        axios.get(`http://localhost:5000/data/${item.url}`)
        .then(res => setPregnant(res.data))
    },[item])
    
  return (

    <div className="py-2 text-white rounded-3 card1" >
        {console.log(pregnant)}
        <div className='d-flex justify-content-around align-items-center '>
            <p className="fs-4 fw-bold text-start">{item.title}</p>
            
            <FontAwesomeIcon icon={item.icon} className='fs-1 fw-bold ' />
        </div>
        <div className='d-flex justify-content-center' >
            <h2 className=' fw-bold' >
            {pregnant.length}
            </h2>
            <p className='align-self-end mt-4 me-2'>حالة</p>
        </div>
        
    </div>
    
  )
}

export default Card