

function ReturnToCenter({onChange}) {
  return (
    <div className="my-3">
        <h3  className="fs-2 text-secondary">الرجوع إلى دار الأمومة</h3>
        <div className="row my-3">
            <label className="col-md-2 col-form-label fw-bold">التاريخ</label>
            <div className="col-md-4">
                <input onChange={onChange} type="date"   className="form-control border-primary" name='dateBack'/>
            </div>
            <label className="col-md-2 col-form-label fw-bold">الساعة</label>
            <div className="col-md-4">
                <input onChange={onChange} type="time"   className="form-control border-primary" name='timeBack'/>
            </div>
        </div>
        
    </div>
  )
}

export default ReturnToCenter