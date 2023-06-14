import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import { Table } from "react-bootstrap";
import moment from "moment";



function StockDetails() {
    const { id } = useParams();
    const [data, setData]=useState([])
    const [name, setName]=useState("")

    useEffect(() => {
        axios.get(`http://localhost:5000/stockout/details/${id}`).then((response) => {
            const Data = response.data
            console.log(Data)
            setName(Data[0].productName)
            setData(Data);
        });
      }, []);
  return (
    <div className="px-3 " style={{height:'100vh'}} >
    <h1 className='text-center fw-bold mb-2'>تفاصيل المنتوج</h1>
    <p className="fw-bold">اسم المنتج: {name}</p>
    <Table striped bordered hover responsive className="stock-table" >
        <thead>
          <tr>
            <th>التاريخ</th>
            <th>الكمية</th>
          </tr>
        </thead>
        <tbody>
            {
                data&&data.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{moment(item.date).utc().add(0, "days").format("YYYY-MM-DD")}</td>
                            <td>{item.quntite}</td>
                        </tr>
                        )
                    })
            }
        </tbody>
    </Table>
    <div className="text-center">
    <button onClick={()=>{
        document.querySelector('button').style.display='none'
        window.print()
        document.querySelector('button').style.display=''

    }} className='button-meals' >نسخ</button>

    </div>

    </div>
  )
}

export default StockDetails