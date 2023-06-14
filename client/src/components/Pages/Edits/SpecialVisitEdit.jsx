import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate,useParams } from 'react-router-dom'
import moment from "moment"




function SpecialVisitEdit() {
    const navigate =useNavigate()
    const { id } = useParams();
    const [pData, setPdata] =useState({})
    const inputsDetail=[
        {
            label:'الإسم',
            type:'text',
            name:"firstName",
            value:pData.firstName,
        },
        {
            label:'النسب',
            type:'text',
            name:"lastName",
            value:pData.lastName,


        },
        {
            label:'تاريخ الإزدياد',
            type:'date',
            name:"birthDay",
            value:moment(pData.birthDay).utc().add(1, 'days').format("YYYY-MM-DD"),

        },
        
        {
            label:'السن',
            type:'number',
            name:"age",
            value:pData.age,

        },
        {
            label:'رقم البطاقة الوطنية',
            type:'text',
            name:"cin",
            value:pData.cin,

        },
        {
            label:'الدوار',
            type:'text',
            name:"town",
            value:pData.town,

        },
        {
            label:'الجماعة',
            type:'text',
            name:"community",
            value:pData.community,

        },
        {
            label:'التاريخ المحتمل للإقامة', 
            type:'text',
            name:'possibleDaysToStay',
            value:pData.possibleDaysToStay,
        },
    ]
    const transport =[
        {
            label:'سيارة الإسعاف لدار الأمومة',
            value: "سيارة الإسعاف لدار الأمومة"
        },
        {
            label:'وسيلة نقل خاصة',
            value: "وسيلة نقل خاصة"
        },
        {
            label:'سيارة الإسعاف خاصة',
            value: "سيارة الإسعاف خاصة"
        },
        {
            label:'أخر',
            value: "أخر"
        }
    ]
    const options =[
        {
            label: 'المرأة',
            value:'المرأة'
        },
        {
            label: 'الزوج',
            value:'الزوج'
        },
        {
            label: 'مولدة تقليدية',
            value:'مولدة تقليدية'
        },
        {
            label: 'مؤسسة صحية',
            value:'مؤسسة صحية'
        },
        {
            label: 'أخر',
            value:'أخر'
        },
        
    ]
    const optionAdvice =['الطبيب - بنية صحية','المولدة - بنية صحية','توجيه داتي','أخر']
    const accompany = ['الزوج', 'الأم', 'الأخت', "أم الزوج", "أخر" ]
    const optionCheck = ['المركز الصحي','المستشفى الإقليمي']

    

    useEffect(() => {
      fetchPatientData();
    }, []);
  
    const fetchPatientData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/print/specialvisit`,{params:{id:id}})
        const patientData = response.data;
        setPdata(...patientData);
        console.log(pData)
      } catch (error) {
        console.error(error);
      }
    };
    function onChange(e){
        const {name,type , value, checked} = e.target
        setPdata((pre)=>{
            if(checked && type === 'checkbox') return {...pre, [name]:value } 
            if(!checked && type === 'checkbox') return {...pre, [name]:'' } 
            if(!checked && type !== 'checkbox') return {...pre, [name]:value } 
        })
     }
     function handleUpdate(e){
        e.preventDefault()
        const data = pData
        data.id=id
         axios.post('http://localhost:5000/update/specialvisit',data).then((response) => {
             return response
         }).catch(err => err)
     
         navigate('/')
    }

  return (
    <div>
    
      <h1 className='py-3 text-center fs-3 text-black fw-bold' style={{background:'#FFFFFF',   borderBottom: '1px solid #e2e2e2'}} >
            إستمارة النزيلة في حالة خاصة
        </h1>

        <form method="POST" className='my-5 container px-4 ' onSubmit={handleUpdate} >
            <div className="my-3">
                <h3 className="fs-2 text-secondary">تاريخ الدخول</h3>
                <div className="row my-4">
                    <label className="col-md-2 col-form-label fw-bold">التاريخ</label>
                    <div className="col-md-4">
                        <input type="date" onChange={onChange} value={moment(pData.dateCheckIn).utc().add(1, 'days').format('YYYY-MM-DD')}   className="form-control border-primary" name='dateCheckIn'/>
                    </div>
                    <label className="col-md-2 col-form-label fw-bold">الساعة</label>
                    <div className="col-md-4">
                        <input type="time" onChange={onChange} value={pData.timeCheckIn}  className="form-control border-primary" name='timeCheckIn'/>
                    </div>
                </div>
                        
            </div>
            <div className='my-3'>
                <div className="row my-3">
                    <label className="col-md-2 form-label fw-bold text-end" >سبب الولوج لدار الأمومة</label>
                    <div className="col-md-10 text-start ">
                        <input onChange={onChange} className='form-control border-primary rounded' value={pData.raisonForVisit}  type="text" name="raisonForVisit" required />
                    </div>
                </div>
            </div>

                <div className='my-3'>
                    
                    <h3 className="fs-2 text-secondary">هوية المرأة</h3>
                    <div className="row my-3">
                        {
                            inputsDetail.map((input, index)=>(
                                <div key={index} className='col-6'>
                                <div className="row p-0 m-0">
                                        
                                        <label key={index} htmlFor={input.name} className="col-4 col-form-label fw-bold  my-3">{input.label}</label>
                                        <div className="col-8" >
                                            <input onChange={onChange} value={input.value} type={input.type} className="form-control border-primary my-3" id={input.name} name={input.name} required />
                                        </div>
                                        
                                    </div>
                                </div >
                            ))
                        }
                    </div>

                </div>

            <div className='row my-3'>
                <label className="col-md-2 col-form-label fw-bold">
                    المستوى الدراسي
                </label>
                <div className="col-md-10">
                    <select onChange={onChange} value={
                        pData.academicLevel === 'أمية' ? 'أمية' :
                        pData.academicLevel === 'ابتدائي' ? 'ابتدائي' :
                        pData.academicLevel === 'إعدادي' ? 'إعدادي' :
                        pData.academicLevel === 'ثانوي' ? 'ثانوي' :
                        pData.academicLevel === 'أخر' ? 'أخر' : 'DEFAULT'

                    } name='academicLevel' className="border-primary rounded col-md-12">
                    
                        <option value="DEFAULT" disabled >اختر المستوى الدراسي</option>
                        <option value="أمية" >أمية</option>
                        <option value="ابتدائي">ابتدائي</option>
                        <option value="إعدادي">إعدادي</option>
                        <option value="ثانوي">ثانوي</option>
                        <option value="أخر">أخر</option>
                    </select>
                </div>
            </div>
            <div className='my-3'>
            <div className="my-3 row">
                    <label htmlFor="fatherName" className="col-md-2 col-form-label fw-bold">إسم الأب</label>
                    <div className="col-md-4">
                        <input onChange={onChange} value={pData.fatherName} type="text" className="form-control border-primary rounded" id="fatherName" name='fatherName'/>
                    </div>
                    <label htmlFor="fatherJob" className="col-md-2 col-form-label fw-bold">مهنة الأب</label>
                    <div className="col-md-4">
                        <input onChange={onChange} value={pData.fatherJob}  type="text" className="form-control border-primary rounded" id="fatherJob" name='fatherJob'/>
                    </div>
                </div>
            </div>
            {/* Transport  */}
            <div>
        <div className='my-3'>
                
                <div className="my-3 row">
                    <label htmlFor="transport" className="col-md-2 col-form-label fw-bold">وسيلة النقل المستعملة</label>
                    <div className="col-md-10">
                        
                            <select value={
                                pData.transport==="سيارة الإسعاف لدار الأمومة"
                                ? "سيارة الإسعاف لدار الأمومة"
                                : pData.transport==="وسيلة نقل خاصة"
                                ? "وسيلة نقل خاصة"
                                : pData.transport==="سيارة الإسعاف خاصة"
                                ? "سيارة الإسعاف خاصة"
                                : pData.transport==="أخر"
                                ? "أخر": 
                                "DEFAULT"
                            } onChange={onChange} name='transport' className="border-primary rounded px-5 col-12">
                                <option value="DEFAULT" disabled selected>اختر وسيلة النقل</option>

                                {
                                    transport.map((option,index) =>(
                                        <option key={index} value={option.value}>{option.label}</option>
                                    ))
                                }
                                
                            </select>
                    </div>
                </div>
            </div>
            <div className="my-4">
                <h3 className="fs-2 text-secondary">المسافة المقطوعة / المدة بالساعة</h3>
                <div className="my-4 row">
                <label htmlFor="road" className="col-md-2 col-form-label fw-bold">طريق معبدة</label>
                <div className="col-md-3">
                    <input onChange={onChange} value={pData.road} type="number" min='0' name='road'  className='ms-1 border-primary rounded form-control '/>كلم
                </div>            
                <label htmlFor="passage" className="col-md-2 col-form-label fw-bold">مسلك</label>
                <div className="col-md-3">
                    <input onChange={onChange} value={pData.passage} type="number" min='0' name='passage'  className='ms-1 border-primary rounded form-control'/>كلم
                </div>            
                </div>
            </div>
    </div>
            {/* End Transport  */}
            <div className="my-3">
                <h3 className="fs-2 text-secondary">قرار المجيء إلى دار الأمومة</h3>
                <select value={
                    pData.decisionToCome==="المرأة"
                    ? "المرأة"
                    : pData.decisionToCome==="الزوج"
                    ? "الزوج"
                    : pData.decisionToCome==="مولدة تقليدية"
                    ?"مولدة تقليدية"
                    : pData.decisionToCome==="مؤسسة صحية"
                    ?"مؤسسة صحية"
                    : pData.decisionToCome==="أخر"
                    ?"أخر":'DEFAULT'
                } onChange={onChange} name="decisionToCome" className='col-12 rounded border-primary my-3' >
                    <option value="DEFAULT" disabled selected>اختر واحدة</option>

                    {
                        options.map((option,index) =>(
                            <option key={index} value={option.value}>{option.label}</option>
                        ))
                    }
                </select>
                
            </div>
            <div className="my-3">
                <h3 className="fs-2 text-secondary">الشخص الذي قام بتوجيه المرأة إلى دار الأمومة</h3>
                <select value={
                    pData.whoAdviceToCome==="الطبيب - بنية صحية"
                    ?"الطبيب - بنية صحية"
                    : pData.whoAdviceToCome==="المولدة - بنية صحية"
                    ?"المولدة - بنية صحية"
                    : pData.whoAdviceToCome==="توجيه داتي"
                    ?"توجيه داتي"
                    : pData.whoAdviceToCome==="أخر"
                    ?"أخر":'DEFAULT'

                } onChange={onChange} name="whoAdviceToCome" className='col-12 rounded border-primary my-3' >
                    <option value="DEFAULT" disabled selected>اختر واحدة</option>
                    {
                        optionAdvice.map((option,index) =>(
                            <option key={index} value={option}>{option}</option>
                        ))
                    }
                </select>
                
            </div>
            <div>
            <div className="my-3">
                    <h3 className="fs-2 text-secondary">الشخص المرافق</h3>
                    <select value={
                        pData.accompany==="الزوج"
                        ?"الزوج"
                        : pData.accompany==="الأم"
                        ?"الأم"
                        : pData.accompany==="الأخت"
                        ?"الأخت"
                        : pData.accompany==="أم الزوج"
                        ?"أم الزوج"
                        : pData.accompany==="أخر"
                        ?"أخر":'DEFAULT'
                    } onChange={onChange} name='accompany' className="col-12 rounded border-primary my-3" >
                        <option value="DEFAULT" disabled selected>اختر واحدة</option>

                        {
                            accompany.map((acc,index) =>(
                                <option key={index} value={acc} >{acc}</option>

                            ))
                        }
                    </select>

                </div>
            </div>
            <div className="my-3">
                <h3 className="fs-2 text-secondary">الفحص</h3>
                <select value={
                    pData.medicalCheck==="المركز الصحي"
                    ?"المركز الصحي"
                    :pData.medicalCheck==="المستشفى الإقليمي"
                    ?"المستشفى الإقليمي":"DEFAULT"
                } onChange={onChange} name="medicalCheck" className='col-12 rounded border-primary my-3' >
                    <option value="DEFAULT" disabled selected>اختر واحدة</option>
                    {
                        optionCheck.map((option,index) =>(
                            <option key={index} value={option}>{option}</option>
                        ))
                    }
                </select>
                
            </div>
            <div className="my-3">
                <h3  className="fs-2 text-secondary">الرجوع إلى دار الأمومة</h3>
                <div className="row my-3">
                    <label className="col-md-2 col-form-label fw-bold">التاريخ</label>
                    <div className="col-md-4">
                        <input onChange={onChange} 
                        value={
                            moment(pData.dateBack).utc().add(1, 'days').format("YYYY-MM-DD")
                        }
                        type="date"   className="form-control border-primary" name='dateBack'/>
                    </div>
                    <label className="col-md-2 col-form-label fw-bold">الساعة</label>
                    <div className="col-md-4">
                        <input onChange={onChange} 
                        value={pData.timeBack}
                        type="time"   className="form-control border-primary" name='timeBack'/>
                    </div>
                </div>
                
            </div>      
            <div className="my-3">
                <h3 className="fs-2 text-secondary">الخروج</h3>
                <div className="row my-4">
                    <label className="col-md-2 col-form-label fw-bold">التاريخ</label>
                    <div className="col-md-4">
                        <input type="date" 
                        value={moment(pData.dateCheckOut).utc().add(1, 'days').format("YYYY-MM-DD")}
                        onChange={onChange}   className="form-control border-primary" name='dateCheckOut'/>
                    </div>
                    <label className="col-md-2 col-form-label fw-bold">الساعة</label>
                    <div className="col-md-4">
                        <input
                        value={pData.timeCheckOut} 
                        type="time" 
                        onChange={onChange}  className="form-control border-primary" name='timeCheckOut'/>
                    </div>
                </div>
                        
            </div>
            <div className="my-3">
                <h3 className="fs-2 text-secondary">مدة الإقامة</h3>
                <div className="row my-3">
                    <div className="col-md-12">
                        <input onChange={onChange}
                        value={pData.DurationOfStay}
                         type="number" min='0'  className="form-control col-12 border-primary " name='DurationOfStay'/>
                    </div>
                    
                </div>
                
            </div>            
            <div className="row">
                <button  className="btn btn-dark mb-5 mt-4 col-6 m-auto fs-4">حفظ </button>
            </div>
        </form>
    </div>
  )
}

export default SpecialVisitEdit
