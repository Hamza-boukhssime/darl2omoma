import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import {AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import moment from "moment";
import { useNavigate } from "react-router-dom";


const StockTable = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/list/stock")
      .then((response) => response.json())
      .then((data) => setStockData(data))
      .catch((error) => console.log(error));
  }, []);
  const navigate= useNavigate()
 

  return (
    <>
      <h1 className="text-center text-warning mb-4 ">جدول المخزون</h1>
      <Table striped bordered hover responsive className="stock-table">
        <thead>
          <tr>
            <th>N°</th>
            <th>التسمية</th>
            <th>تاريخ الدخول</th>
            <th>كمية الدخول</th>
            <th>كمية الخروج</th>
            <th>تاريخ الانتهاء</th>
            <th>المتاح</th>
            <th>التعديل</th>
          </tr>
        </thead>
        <tbody>
          {stockData.length>0 && stockData.map((item, index) => {
            const datePeremption = moment(item.date_peremption).utc().add(1, 'days');
            const today = moment().utc();
            const isWithinOneMonth = datePeremption.diff(today, 'months') <= 1;
            const isOutOfStock = item.disponible <=10;
            return(
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.designation}</td>
              
              <td>{moment(item.date_entree).utc().add(1, 'days').format("YYYY-MM-DD")}</td>
              <td>{item.quantite_entree}</td>
              <td>{item.quantite_sortie}</td>
              <td className={isWithinOneMonth? "bg-warning text-white":""} >{moment(item.date_peremption).utc().add(1, 'days').format("YYYY-MM-DD")}</td>              
              <td className={isOutOfStock? "bg-danger text-white":""}>{item.disponible}</td>
              <td className="text-center">
                <span className="text-primary mx-2" onClick={()=>navigate(`/stock/detail/${item.id}`)}>
                  <AiOutlineEdit size={25} />
                </span>
              </td>
            </tr>
          )
          })}
        </tbody>
      </Table>
    </>
  );
};

export default StockTable;
