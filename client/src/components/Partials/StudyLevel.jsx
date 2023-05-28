import React from 'react'

function StudyLevel({onChange}) {
  return (
    <div className='row my-3'>
        <label className="col-md-2 col-form-label fw-bold">
            المستوى الدراسي
        </label>
        <div className="col-md-10">
            <select onChange={onChange} defaultValue={'DEFAULT'} name='academicLevel' className="border-primary rounded col-md-12">
            
                <option value="DEFAULT" disabled selected>اختر المستوى الدراسي</option>
                <option value="أمية" >أمية</option>
                <option value="ابتدائي">ابتدائي</option>
                <option value="إعدادي">إعدادي</option>
                <option value="ثانوي">ثانوي</option>
                <option value="أخر">أخر</option>
            </select>
        </div>
    </div>
  )
}

export default StudyLevel