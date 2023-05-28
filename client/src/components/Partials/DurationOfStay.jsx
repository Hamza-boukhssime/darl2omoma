

function DurationOfStay({onChange}) {
  return (
    <div className="my-3">
        <h3 className="fs-2 text-secondary">مدة الإقامة</h3>
        <div className="row my-3">
            <div className="col-md-12">
                <input onChange={onChange} type="number" min='0'  className="form-control col-12 border-primary " name='DurationOfStay'/>
            </div>
            
        </div>
        
    </div>
  )
}

export default DurationOfStay