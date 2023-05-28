
function WhoAdvice({onChange}) {
    const options =['الطبيب - بنية صحية','المولدة - بنية صحية','توجيه داتي','أخر']
  return (
    <div className="my-3">
        <h3 className="fs-2 text-secondary">الشخص الذي قام بتوجيه المرأة إلى دار الأمومة</h3>
        <select defaultValue={'DEFAULT'} onChange={onChange} name="whoAdviceToCome" className='col-12 rounded border-primary my-3' >
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

export default WhoAdvice