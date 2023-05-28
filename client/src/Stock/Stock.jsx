import { Link } from "react-router-dom";
import StockTable from "./StockTable";

function Stock() {
  return (
    <div className="stock-container container  ">
      <div className="py-4 px-5 table-container">
      <StockTable />
      </div>
      <div className="py-4 px-5 text-center ">
        <Link to={'/stock/form'} className="btn btn-warning text-white">إضافة مخزون</Link>
      </div>  
    </div>
  );
}

export default Stock;
