import React from 'react'

function Transport({onChange}) {
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
  return (
    <div>
        <div className='my-3'>
                
                <div className="my-3 row">
                    <label htmlFor="transport" className="col-md-2 col-form-label fw-bold">وسيلة النقل المستعملة</label>
                    <div className="col-md-10">
                        
                            <select defaultValue={'DEFAULT'} onChange={onChange} name='transport' className="border-primary rounded px-5 col-12">
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
                    <input onChange={onChange} type="number" min='0' name='road'  className='ms-1 border-primary rounded form-control '/>كلم
                </div>            
                <label htmlFor="passage" className="col-md-2 col-form-label fw-bold">مسلك</label>
                <div className="col-md-3">
                    <input onChange={onChange} type="number" min='0' name='passage'  className='ms-1 border-primary rounded form-control'/>كلم
                </div>            
                </div>
            </div>
    </div>
  )
}

export default Transport