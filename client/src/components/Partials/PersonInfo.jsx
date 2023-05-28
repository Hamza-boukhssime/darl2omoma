import React from 'react'

function PersonInfo(props) {
    const {title, onChange,label,type,name} = props
    const inputsDetail=[
        {
            label:'الإسم',
            type:'text',
            name:"firstName"
        },
        {
            label:'النسب',
            type:'text',
            name:"lastName",
        },
        {
            label:'تاريخ الإزدياد',
            type:'date',
            name:"birthDay"
        },
        
        {
            label:'السن',
            type:'number',
            name:"age"
        },
        {
            label:'رقم البطاقة الوطنية',
            type:'text',
            name:"cin"
        },
        {
            label:'الدوار',
            type:'text',
            name:"town"
        },
        {
            label:'الجماعة',
            type:'text',
            name:"community"
        },
        {
            label:label,
            type:type,
            name:name
        },
    ]


  return (
        <div className='my-3'>
            
            <h3 className="fs-2 text-secondary">{title}</h3>
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
            </div>

        </div>
  )
}

export default PersonInfo