// import Accompany from "../../Partials/Accompany";
// import CheckInOut from "../../Partials/CheckInOut";
// import DecisionToCome from "../../Partials/DecisionToCome";
// import DurationOfStay from "../../Partials/DurationOfStay";
// import Husband from "../../Partials/Husband";
// import PersonInfo from "../../Partials/PersonInfo";
// import ReturnToCenter from "../../Partials/ReturnToCenter";
// import StudyLevel from "../../Partials/StudyLevel";
// import Transport from "../../Partials/Transport";
// import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

// function Pregnant() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [pData, setPdata] = useState({});

//   useEffect(() => {
//     fetchPatientData();
//   }, []);

//   const fetchPatientData = async () => {
//     try {
//       const response = await axios.get(`/patients/pregnant/${id}`);
//       const patientData = response.data;
//       setPdata(patientData);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleChanges = (e) => {
//     const { name, value } = e.target;
//     setPdata((prev) => {
//       return { ...prev, [name]: value };
//     });
//   };

//   const givenBirth = [
//     {
//       label: 'مركز صحي',
//       value: 'مركز صحي',
//     },
//     {
//       label: 'المستشفى الإقليمي',
//       value: 'المستشفى الإقليمي',
//     },
//     {
//       label: 'أخر',
//       value: 'أخر',
//     },
//   ];
//   const saveData = async (reason) => {
//     try {
//       const response = await axios.put(`/patients/${reason}/${id}`, pData);
//       // Handle the response or any success/error messages here
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
  

//   return (
//     <div>
//       <h1 className='py-3 text-center fs-3 text-black fw-bold' style={{ background: '#FFFFFF', borderBottom: '1px solid #e2e2e2' }}>
//         إستمارة النزيلة في حالة الحمل
//       </h1>

//       <form method="POST" action={`/edit/pregnant/${id}`}  className='my-5 container px-4'>
//         <CheckInOut title='تاريخ الدخول' onChange={handleChanges} date='dateCheckIn' time='timeCheckIn' />

//         <div className='my-3'>
//           <h3 className="fs-2 text-secondary">حالة الحمل</h3>
//           <div className="row my-3">
//             <div className="col-md-3 text-start">
//               <input className="bg-primary" onChange={handleChanges} type="radio" name="GivngBirthStatu" value='قبل الوضع جيدة' />
//             </div>
//             <label className="col-md-3 form-label fw-bold text-end">قبل الوضع جيدة</label>
//             <div className="col-md-3 text-start">
//               <input onChange={handleChanges} type="radio" name="GivngBirthStatu" value='بعد الوضع جيدة' />
//             </div>
//             <label className="col-md-3 text-end fw-bold">بعد الوضع جيدة</label>
//           </div>
//         </div>

//         <PersonInfo
//             title='هوية المرأة'
//             father=''
//             type={'date'}
//             label={'التاريخ المحتمل للوضع'}
//             name={'possibleDayBirth'}
//             onChange={handleChanges}
//             pData={pData}
//           />

//         <div className='my-3'>
//           <h3 className="fs-2 text-secondary">عدد الولادات </h3>
//           <div className="my-3 row">
//             <label htmlFor="NumberOfPregnancies" className="col-md-2 col-form-label fw-bold">عدد مرات الحمل</label>
//             <div className="col-md-4">
//               <input onChange={handleChanges} type="number" min='0' name='NumberOfPregnancies' className="border-primary rounded form-control" value={pData.NumberOfPregnancies} />
//             </div>
//             <label htmlFor="numberLiveChildren" className="col-md-2 col-form-label fw-bold">عدد الأطفال الأحياء</label>
//             <div className="col-md-4">
//               <input onChange={handleChanges} type="number" min='0' name='numberLiveChildren' className="border-primary rounded form-control" value={pData.numberLiveChildren} />
//             </div>
//           </div>
//         </div>

//         {/* Study Level */}
//         <StudyLevel onChange={handleChanges} value={pData.academicLevel} />

//         {/* Husband */}
//         <Husband onChange={handleChanges} value={pData.fatherName} />

//         {/* Transport */}
//         <Transport onChange={handleChanges} value={pData.transport} />

//         {/* Decision To Come */}
//         <DecisionToCome onChange={handleChanges} value={pData.decisionToCome} />

//         {/* Accompany */}
//         <Accompany onChange={handleChanges} value={pData.accompany} />

//         <div className="my-3">
//           <h3 className="fs-2 text-secondary">الوضع</h3>
//           <div className="my-3 row">
//             <select onChange={handleChanges} name="givenBirthLocation" className="col-12 rounded border-primary my-3" value={pData.givenBirthLocation}>
//               {
//                 givenBirth.map((item, index) => (
//                   <option key={index} value={item.value}>{item.label}</option>
//                 ))
//               }
//             </select>
//           </div>
//         </div>

//         <ReturnToCenter onChange={handleChanges} value={pData.dateBack} />

//         <CheckInOut onChange={handleChanges} title='الخروج' date='dateCheckOut' time='timeCheckOut' value={pData.dateCheckOut} />

//         <DurationOfStay onChange={handleChanges} value={pData.DurationOfStay} />

//         <div className="row">
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Pregnant;



import Accompany from "../../Partials/Accompany";
import CheckInOut from "../../Partials/CheckInOut";
import DecisionToCome from "../../Partials/DecisionToCome";
import DurationOfStay from "../../Partials/DurationOfStay";
import Husband from "../../Partials/Husband";
import PersonInfo from "../../Partials/PersonInfo";
import ReturnToCenter from "../../Partials/ReturnToCenter";
import StudyLevel from "../../Partials/StudyLevel";
import Transport from "../../Partials/Transport";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

function Pregnant() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pData, setPdata] = useState({});

  useEffect(() => {
    fetchPatientData();
  }, []);

  const fetchPatientData = async () => {
    try {
      const response = await axios.get(`/patients/pregnant/${id}`);
      const patientData = response.data;
      setPdata(patientData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setPdata((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const givenBirth = [
    {
      label: 'مركز صحي',
      value: 'مركز صحي',
    },
    {
      label: 'المستشفى الإقليمي',
      value: 'المستشفى الإقليمي',
    },
    {
      label: 'أخر',
      value: 'أخر',
    },
  ];
  
  const saveData = async (reason) => {
    try {
      const response = await axios.put(`/edit/pregnant/${id}`, pData);
      // Handle the response or any success/error messages here
      console.log(response.data);
      fetchPatientData(); // Fetch the updated data from the server
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className='py-3 text-center fs-3 text-black fw-bold' style={{ background: '#FFFFFF', borderBottom: '1px solid #e2e2e2' }}>
        إستمارة النزيلة في حالة الحمل
      </h1>

      <form className='my-5 container px-4' onSubmit={saveData}>
        <CheckInOut title='تاريخ الدخول' onChange={handleChanges} date='dateCheckIn' time='timeCheckIn' />

        <div className='my-3'>
          <h3 className="fs-2 text-secondary">حالة الحمل</h3>
          <div className="row my-3">
            <div className="col-md-3 text-start">
              <input className="bg-primary" onChange={handleChanges} type="radio" name="GivngBirthStatu" value='قبل الوضع جيدة' />
            </div>
            <label className="col-md-3 form-label fw-bold text-end">قبل الوضع جيدة</label>
            <div className="col-md-3 text-start">
              <input onChange={handleChanges} type="radio" name="GivngBirthStatu" value='بعد الوضع جيدة' />
            </div>
            <label className="col-md-3 text-end fw-bold">بعد الوضع جيدة</label>
          </div>
        </div>

        <PersonInfo
          title='هوية المرأة'
          father=''
          type={'date'}
          label={'التاريخ المحتمل للوضع'}
          name={'possibleDayBirth'}
          onChange={handleChanges}
          pData={pData}
        />

        <div className='my-3'>
          <h3 className="fs-2 text-secondary">عدد الولادات </h3>
          <div className="my-3 row">
            <label htmlFor="NumberOfPregnancies" className="col-md-2 col-form-label fw-bold">عدد مرات الحمل</label>
            <div className="col-md-4">
              <input onChange={handleChanges} type="number" min='0' name='NumberOfPregnancies' className="border-primary rounded form-control" value={pData.NumberOfPregnancies} />
            </div>
            <label htmlFor="numberLiveChildren" className="col-md-2 col-form-label fw-bold">عدد الأطفال الأحياء</label>
            <div className="col-md-4">
              <input onChange={handleChanges} type="number" min='0' name='numberLiveChildren' className="border-primary rounded form-control" value={pData.numberLiveChildren} />
            </div>
          </div>
        </div>

        {/* Study Level */}
        <StudyLevel onChange={handleChanges} value={pData.academicLevel} />

        {/* Husband */}
        <Husband onChange={handleChanges} value={pData.fatherName} />

        {/* Transport */}
        <Transport onChange={handleChanges} value={pData.transport} />

        {/* Decision To Come */}
        <DecisionToCome onChange={handleChanges} value={pData.decisionToCome} />

        {/* Accompany */}
        <Accompany onChange={handleChanges} value={pData.accompany} />

        <div className="my-3">
          <h3 className="fs-2 text-secondary">الوضع</h3>
          <div className="my-3 row">
            <select onChange={handleChanges} name="givenBirthLocation" className="col-12 rounded border-primary my-3" value={pData.givenBirthLocation}>
              {
                givenBirth.map((item, index) => (
                  <option key={index} value={item.value}>{item.label}</option>
                ))
              }
            </select>
          </div>
        </div>

        <ReturnToCenter onChange={handleChanges} value={pData.dateBack} />

        <CheckInOut onChange={handleChanges} title='الخروج' date='dateCheckOut' time='timeCheckOut' value={pData.dateCheckOut} />

        <DurationOfStay onChange={handleChanges} value={pData.DurationOfStay} />

        <div className="row">
          <button className="btn btn-dark mb-5 mt-4 col-6 m-auto fs-4" type="submit">حفظ <FontAwesomeIcon className="fs-4" icon={faArrowLeft} /></button>
        </div>
      </form>
    </div>
  );
}

export default Pregnant;
