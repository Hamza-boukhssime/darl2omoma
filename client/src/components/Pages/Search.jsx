import { useState } from "react"
import axios from 'axios'
import SearchTable from "../Partials/SearchTable"


function Search() {
  const filter=[
    {
      value:'cin',
      label:'رقم البطاقة الوطنية'
    },
    {
      value:'firstName',
      label:'الإسم'
    },
    {
      value:'lastName',
      label:'النسب'
    },
    {
      value:'academicLevel',
      label:'المستوى الدراسي'
    },
    {
      value:'community',
      label:'الجماعة'
    }
  ]
  const [searchInfo, setSearchInfo] = useState({})
  const [data, setData] =useState([])
  function handleChange(e){
    const {name,value}= e.target
    setSearchInfo((pre)=>({...pre,[name]:value}))
  }
  function handleSubmit(e){
    axios.get('http://localhost:5000/search', {params:searchInfo})
        .then(res => setData(res.data))
        .catch(err =>err)
  }

  return (
    <div className="container">
        <div className="row height d-flex justify-content-center mt-5">

          <div className="col-md-8">

            <div className="search">
              <i className="fa fa-search"></i>
              <input onChange={handleChange} type="text" name="search" className="form-control" placeholder="قم بالبحث ..." />
              <button onClick={handleSubmit} className="btn btn-primary fw-bold">بحث</button>
            </div>


            <div className="container  my-4 justify-content-center d-flex">
              {
                filter.map((item,index)=>(
                  <div className="form-check form-check-inline " key={index}>
                      <input onChange={handleChange} className="form-check-input " type="radio" name="filter" value={item.value}   />
                      <label className="form-check-label text-end " >{item.label}</label>
                    
                  </div>
                ))
              }
              
            </div>
            


            <div className="row mt-5">
              <SearchTable data={data} />
            </div>
          </div>
          
        </div>
      
        
    </div>
  )
}

export default Search