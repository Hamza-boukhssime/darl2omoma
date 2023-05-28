import React from 'react'

function Accompany({onChange}) {
    const accompany = ['الزوج', 'الأم', 'الأخت', "أم الزوج", "أخر" ]
  return (
    <div>
        <div className="my-3">
                <h3 className="fs-2 text-secondary">الشخص المرافق</h3>
                <select  defaultValue={'DEFAULT'} onChange={onChange} name='accompany' className="col-12 rounded border-primary my-3" >
                    <option value="DEFAULT" disabled selected>اختر واحدة</option>

                    {
                        accompany.map((acc,index) =>(
                            <option key={index} value={acc} >{acc}</option>

                        ))
                    }
                </select>

            </div>
    </div>
  )
}

export default Accompany