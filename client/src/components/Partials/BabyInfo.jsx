import React from 'react'

function BabyInfo({onChange}) {
    
    const inputsDetail=[
        {
            label:'الإسم',
            type:'text',
            name:"babyFirstName"
        },
        {
            label:'النسب',
            type:'text',
            name:"babyLastName",
        },
        
        {
            label:'السن',
            type:'number',
            name:"babyage"
        }
    ]
    const options =[
        {
            label: 'الأم',
            value:'الأم'
        },
        {
            label: 'الجدة',
            value:'الجدة'
        },
        {
            label: 'الخالة',
            value:'الخالة'
        },
        {
            label:'العمة' ,
            value:'العمة'
        },
        {
            label: 'أخر',
            value:'أخر'
        },
        
    ]

  return (
        <div className='my-3'>
            
            <h3 className="fs-2 text-secondary">هوية الطفل</h3>
            <div className="row my-3">

                {
                    
                    inputsDetail.map((input, index)=>(
                        <div key={index} className='col-6'>
                           <div className="row p-0 m-0">
                                
                                <label key={index} htmlFor={input.name} className="col-4 col-form-label fw-bold  my-3">{input.label}</label>
                                <div className="col-8" >
                                    <input onChange={onChange} type={input.type} className="form-control border-primary my-3" id={input.name} name={input.name} required />
                                </div>
                                
                             </div>
                        </div >
                    ))
                }
                
         <div className="my-3">
                <h3 className="fs-2 text-secondary">قرابة المرافقة للطفل</h3>
                <select defaultValue={'DEFAULT'} onChange={onChange} name="bloodrelationship" className='col-12 rounded border-primary my-3' >
                    <option value="DEFAULT" disabled selected>اختر واحدة</option>

                    {
                        options.map((option,index) =>(
                            <option key={index} value={option.value}>{option.label}</option>
                        ))
                    }
                </select>
                
            </div>
            </div>

        </div>
  )
}

export default BabyInfo