import { useEffect ,useState} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import moment from "moment"

function PrintSpecial() {
  let {id} =useParams()
  const[data,setData] = useState([])

  useEffect(()=>{    
    
      axios.get(`http://localhost:5000/print/specialvisit`,{params:{id:id}})
      .then(res => setData(res.data))
      .catch(err =>err)

  },[id])


  

  return (
    <div className="container " >
      <div className="container   print"  >
        <h1  className="fw-bold text-warning">دار الأمومة تافراوت</h1>
        <h2>ورقة النزيلة في حالة خاصة</h2>
        {
          data.map((item,i)=>(
            <div key={i}>
              <div className="row  ">
                  <label className="col-2 col-form-label fw-bold">تاريخ الدخول</label>
                  <div className="col-4">
                      <p className="fw-bold">{moment(item.dateCheckIn).utc().add(1, 'days').format("YYYY-MM-DD")}</p>
                  </div>
                  
              </div>
              <div className="row">
                  <label className="col-2 col-form-label fw-bold">سبب الولوج لدار الأمومة</label>
                  <div className="col-4">
                      <p className="fw-bold">{item.raisonForVisit}</p>
                  </div>
              </div>
              <div className="row">
                  <label className="col-2 col-form-label fw-bold">هوية المرأة</label>
                  <div className="col-4">
                      <p className="fw-bold">مغربية</p>
                  </div>
              </div>
              <div className="row">
                  <label className="col-2 col-form-label fw-bold">الإسم</label>
                  <div className="col-4">
                      <p className="fw-bold">{item.firstName}</p>
                  </div>
                  <label className="col-2 col-form-label fw-bold">النسب</label>
                  <div className="col-4">
                      <p className="fw-bold">{item.lastName}</p>
                  </div>
              </div>
              <div className="row">
                  <label className="col-2 col-form-label fw-bold">السن</label>
                  <div className="col-4">
                      <p className="fw-bold">{item.age}</p>
                  </div>
                  <label className="col-2 col-form-label fw-bold">رقم البطاقة الوطنية</label>
                  <div className="col-4">
                      <p className="fw-bold">{item.cin}</p>
                  </div>
                  <label className="col-2 col-form-label fw-bold">الدوار</label>
                  <div className="col-4">
                      <p className="fw-bold">{item.town}</p>
                  </div>
                  <label className="col-2 col-form-label fw-bold">الجماعة</label>
                  <div className="col-4">
                      <p className="fw-bold">{item.community}</p>
                  </div>
                  
              </div>
              <div className="row">
                <label className="col-2 col-form-label fw-bold">المدة المحتمل للإقامة</label>
                    <div className="col-4">
                        <p className="fw-bold">{item.possibleDaysToStay}</p>
                    </div>
              </div>
              <div className="row">
                
                <label className="col-2 col-form-label fw-bold">المستوى الدراسي </label>
                    <div className="col-4">
                        <p className="fw-bold">{item.academicLevel}</p>
                    </div>
              </div>
              <div className="row ">
                <label className="col-2 col-form-label fw-bold"> اسم الزوج</label>
                        <div className="col-4">
                            <p className="fw-bold">{item.fatherName}</p>
                        </div>
                <label className="col-2 col-form-label fw-bold">مهنة الزوج</label>
                        <div className="col-4">
                            <p className="fw-bold">{item.fatherJob}</p>
                        </div>
              </div>
              <div className="row">
              <label className="col-2 col-form-label fw-bold">وسيلة النقل المستعملة </label>
                    <div className="col-4">
                        <p className="fw-bold">{item.transport}</p>
                    </div>
              </div>
              <label className="col col-form-label fw-bold ">المسافة المقطوعة / المدة بالساعة </label>

              <div className="row">
              <label className="col-2 col-form-label fw-bold"> طريق معبدة</label>
                    <div className="col-4">
                        <p className="fw-bold">{item.road}  كلم</p>
                    </div>
              <label className="col-2 col-form-label fw-bold">مسلك</label>
                    <div className="col-4">
                        <p className="fw-bold">{item.passage}  كلم</p>
                    </div>
                    <label className="col-4 col-form-label fw-bold">قرار المجيء إلى دار الأمومة</label>
                    <div className="col-8">
                        <p className="fw-bold">{item.decisionToCome}</p>
                    </div>
              <label className="col-8 col-form-label fw-bold">الشخص الذي قام بتوجيه المرأة إلى دار الأمومة</label>
                    <div className="col-4">
                        <p className="fw-bold">{item.whoAdviceToCome}</p>
                    </div>
             
              </div>
              <div className="row">
              <label className="col-4 col-form-label fw-bold">الشخص المرافق</label>
                    <div className="col-6">
                        <p className="fw-bold">{item.accompany}</p>
                    </div>
              </div>
              <div className="row">
              <label className="col-2 col-form-label fw-bold">الفحص</label>
                    <div className="col-4">
                        <p className="fw-bold">{item.medicalCheck}</p>
                    </div>
              </div>
              <div className="row">
                <label className="col-4 col-form-label fw-bold">الرجوع إلى دار الأمومة بعد الفحص</label>
                <label className="col-2 col-form-label fw-bold">التاريخ</label>
                <div className="col-2">
                            <p className="fw-bold">{moment(item.dateBack).utc().add(1, 'days').format("YYYY-MM-DD")}</p>
                        </div>
                <label className="col-2 col-form-label fw-bold">الساعة</label>
                <div className="col-2">
                            <p className="fw-bold">{moment(item.timeBack, 'HH:mm:ss').format('HH:mm')}</p>
                        </div>
              </div>
              <div className="row">
                <label className="col-4 col-form-label fw-bold">الخروج</label>
                <label className="col-2 col-form-label fw-bold">التاريخ</label>
                <div className="col-2">
                            <p className="fw-bold">{moment(item.dateCheckOut).utc().add(1, 'days').format("YYYY-MM-DD")}</p>
                        </div>
                <label className="col-2 col-form-label fw-bold">الساعة</label>
                <div className="col-2">
                            <p className="fw-bold">{moment(item.timeCheckOut, 'HH:mm:ss').format('HH:mm')}</p>
                        </div>
              </div>
              <div className="row">
              <label className="col-2 col-form-label fw-bold">مدة الإقامة</label>
                    <div className="col-4">
                        <p className="fw-bold">{item.DurationOfStay} يوم</p>
                    </div>
              </div>

              <div className="row my-3 mx-auto">
                <p className="col-12 text-center">الإمضاء : </p>
                
              </div>
            













            </div>
          ))
        }
        
        
      </div>
        
    <button onClick={()=>window.print()} className="btn  bprint" >نسخ</button>
        
    </div>

  )
}

export default PrintSpecial
