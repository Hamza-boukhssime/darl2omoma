// import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import AddPatient from '../Pages/AddPatient'
import Dashboard from '../Pages/Dashboard'
import Pregnant from '../Pages/Pregnant'
import Search from '../Pages/Search'
import SpecialVisit from '../Pages/SpecialVisit'
import WithBaby from '../Pages/WithBaby'
import Meals from "../Pages/Meals/Meals"
import Print from '../Pages/Prints/Print'
import PrintBaby from '../Pages/Prints/PrintBaby'
import PrintSpecial from '../Pages/Prints/PrintSpecial'
import EditPage from '../Partials/EditPage'
import PregnantEdit from '../Pages/Edits/PregnantEdit'
import WithBabyEdit from '../Pages/Edits/WithBabyEdit'
import SpecialVisitEdit from '../Pages/Edits/SpecialVisitEdit'
import MealsEdit from "../Pages/Meals/MealsEdit"
import Stock from '../../Stock/Stock'
import StockForm from '../../Stock/StockForm'
import StockFormUpdate from '../../Stock/StockOut'
import StockOut from '../../Stock/StockFormUpdate'
import StockDetails from '../../Stock/StockDetails'
function Content() {
  return (
    <div className='col-md-10 p-0 m-0 bg-light ' >
      <Routes>
        <Route path='/' element={<Dashboard class='activelink' />} />
        <Route path='/add' element={<AddPatient class='activelink'  />} />
        <Route path='/add/pregnant' element={<Pregnant class='activelink'  />} />
        <Route path='/add/specialVisit' element={<SpecialVisit />} />
        <Route path='/add/baby' element={<WithBaby />} />
        <Route path='/print/pregnant/:id' element={<Print />} />
        <Route path='/print/withbaby/:id' element={<PrintBaby />} />
        <Route path='/print/specialvisit/:id' element={<PrintSpecial />} />
        <Route path='/search' element={<Search />} />
        <Route path='/meals' element={<Meals/>}></Route>
        <Route path='/stock' element={<Stock/>}></Route>
        <Route path="/edit/pregnant/:id" element={<PregnantEdit />} />
        <Route path="/edit/withbaby/:id" element={<WithBabyEdit />} />
        <Route path="/edit/specialvisit/:id" element={<SpecialVisitEdit />} />
        <Route path='/meals/edit' element={<MealsEdit/>} />
        <Route path='/stock' element={<Stock />} />
        <Route path='/stock/form' element={<StockForm />} />
        <Route path='/stock/detail/:id' element={<StockFormUpdate />} />
        <Route path='/stock/out/:id' element={<StockOut />} />
        <Route path='/stockout/detail/:id' element={<StockDetails />} />


      </Routes>
    </div>
  )
}

export default Content