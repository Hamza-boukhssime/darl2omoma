import React from 'react'

function DecisionToCome({onChange}) {
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
  return (
         <div className="my-3">
                <h3 className="fs-2 text-secondary">قرار المجيء إلى دار الأمومة</h3>
                <select defaultValue={'DEFAULT'} onChange={onChange} name="decisionToCome" className='col-12 rounded border-primary my-3' >
                    <option value="DEFAULT" disabled selected>اختر واحدة</option>

                    {
                        options.map((option,index) =>(
                            <option key={index} value={option.value}>{option.label}</option>
                        ))
                    }
                </select>
                
            </div>
    
  )
}

export default DecisionToCome