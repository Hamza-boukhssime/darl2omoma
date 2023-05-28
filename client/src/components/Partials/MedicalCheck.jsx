

function MedicalCheck({onChange}) {
    const options = ['المركز الصحي','المستشفى الإقليمي']
  return (
    <div className="my-3">
        <h3 className="fs-2 text-secondary">الفحص</h3>
        <select defaultValue={'DEFAULT'} onChange={onChange} name="medicalCheck" className='col-12 rounded border-primary my-3' >
            <option value="DEFAULT" disabled selected>اختر واحدة</option>
            {
                options.map((option,index) =>(
                    <option key={index} value={option}>{option}</option>
                ))
            }
        </select>
        
    </div>
  )
}

export default MedicalCheck