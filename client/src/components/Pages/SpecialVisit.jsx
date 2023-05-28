import { useState } from "react"
import axios from "axios"
import CheckInOut from "../Partials/CheckInOut"
import PersonInfo from '../Partials/PersonInfo'
import StudyLevel from "../Partials/StudyLevel"
import Husband from "../Partials/Husband"
import Transport from "../Partials/Transport"
import DecisionToCome from "../Partials/DecisionToCome"
import WhoAdvice from "../Partials/WhoAdvice"
import Accompany from "../Partials/Accompany"
import MedicalCheck from "../Partials/MedicalCheck"
import ReturnToCenter from "../Partials/ReturnToCenter"
import DurationOfStay from "../Partials/DurationOfStay"
import { useNavigate } from 'react-router-dom'



function SpecialVisit() {
    const navigate =useNavigate()
    const [pData, setPdata] =useState({})
    function handleChanges(e){
        const {name,type , value, checked} = e.target
        setPdata((pre)=>{
            if(checked && type === 'checkbox') return {...pre, [name]:value } 
            if(!checked && type === 'checkbox') return {...pre, [name]:'' } 
            if(!checked && type !== 'checkbox') return {...pre, [name]:value } 
        })
     }
     function handleCreate(e){
        e.preventDefault()
       const data = pData
       
        axios.post('http://localhost:5000/add/specialvisit',data)
            .then((response) => {
            return response
        }).catch(err => err)
        navigate('/')
    }
  return (
    <div>
    
      <h1 className='py-3 text-center fs-3 text-black fw-bold' style={{background:'#FFFFFF',   borderBottom: '1px solid #e2e2e2'}} >
            إستمارة النزيلة في حالة خاصة
        </h1>

        <form method="POST" className='my-5 container px-4 ' onSubmit={handleCreate} >
            <CheckInOut title='تاريخ الدخول' onChange={handleChanges} date='dateCheckIn' time='timeCheckIn' />
            <div className='my-3'>
                <div className="row my-3">
                    <label className="col-md-2 form-label fw-bold text-end" >سبب الولوج لدار الأمومة</label>
                    <div className="col-md-10 text-start ">
                        <input onChange={handleChanges} className='form-control border-primary rounded"'  type="text" name="raisonForVisit" required />
                    </div>
                </div>
            </div>
            <PersonInfo title='هوية المرأة'
                 label={'التاريخ المحتمل للإقامة'} 
                 type={'text'}
                 name={'possibleDaysToStay'}
                 onChange={handleChanges} />

            <StudyLevel onChange={handleChanges} />
            <Husband onChange={handleChanges} />
            <Transport onChange={handleChanges} />
            <DecisionToCome onChange={handleChanges} />
            <WhoAdvice onChange={handleChanges} />
            <Accompany onChange={handleChanges} />
            <MedicalCheck onChange={handleChanges} />
            <ReturnToCenter onChange={handleChanges} />       
            <CheckInOut onChange={handleChanges} title='الخروج' date='dateCheckOut' time='timeCheckOut' />
            <DurationOfStay onChange={handleChanges} />
            <div className="row">
                <button  className="btn btn-dark mb-5 mt-4 col-6 m-auto fs-4">حفظ </button>
            </div>
        </form>
    </div>
  )
}

export default SpecialVisit
