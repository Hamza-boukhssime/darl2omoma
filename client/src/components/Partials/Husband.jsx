import React from 'react'

function Husband({onChange,Husband,job}) {
  return (
    <div className='my-3'>
      <div className="my-3 row">
            <label htmlFor="fatherName" className="col-md-2 col-form-label fw-bold">{Husband?Husband:'إسم الأب'}</label>
            <div className="col-md-4">
                <input onChange={onChange} type="text" className="form-control border-primary rounded" id="fatherName" name='fatherName'/>
            </div>
            <label htmlFor="fatherJob" className="col-md-2 col-form-label fw-bold">{job?job:"مهنة الأب"}</label>
            <div className="col-md-4">
                <input onChange={onChange} type="text" className="form-control border-primary rounded" id="fatherJob" name='fatherJob'/>
            </div>
        </div>
    </div>
  )
}

export default Husband
