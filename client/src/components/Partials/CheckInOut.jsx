import React from 'react'

function CheckInOut(props) {
    const {title, date,time, onChange,value} = props
    console.log("vqlue", value)
  return (
    <div className="my-3">
        <h3 className="fs-2 text-secondary">{title}</h3>
        <div className="row my-4">
            <label className="col-md-2 col-form-label fw-bold">التاريخ</label>
            <div className="col-md-4">
                <input type="date" onChange={onChange} value={value}  className="form-control border-primary" name={date}/>
            </div>
            <label className="col-md-2 col-form-label fw-bold">الساعة</label>
            <div className="col-md-4">
                <input type="time" onChange={onChange}  className="form-control border-primary" name={time}/>
            </div>
        </div>
                
    </div>
  )
}

export default CheckInOut