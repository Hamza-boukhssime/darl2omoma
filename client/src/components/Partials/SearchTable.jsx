import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEdit, AiOutlineEye, AiOutlineDelete } from 'react-icons/ai';


function SearchTable({data}) {
    const navigate = useNavigate()
    function handleEdit(id, raison) {
      if (raison === 'الحمل') {
        navigate(`/edit/pregnant/${id}`);
      } else if (raison === 'مرافقة الطفل') {
        navigate(`/edit/withbaby/${id}`);
      } else if (raison === 'حالة خاصة') {
        navigate(`/edit/specialvisit/${id}`);
      }
    }
    function handleClick(raison, id) {
      const name = raison;
  
      if (name === 'الحمل') {
        navigate(`/print/pregnant/${id}`);
      } else if (name === 'مرافقة الطفل') {
        navigate(`/print/withbaby/${id}`);
      } else if (name === 'حالة خاصة') {
        navigate(`/print/specialvisit/${id}`);
      }
    }
  return (
    <div className="container">
        <table className="table  table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">الإسم</th>
                <th scope="col">النسب</th>
                <th scope="col">رقم البطاقة</th>
                <th scope="col">الجماعة</th>
                <th scope="col">سبب المجيء</th>
                <th scope="col">المستوى الدراسي</th>
                <th scope="col">تاريخ الزيارة</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item,index)=>(
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{item.firstName}</td>
                            <td >{item.lastName}</td>
                            <td>{item.cin}</td>
                            <td>{item.community}</td>
                            <td>{item.raison}</td>
                            <td>{item.academicLevel}</td>
                            <td>{moment(item.dateCheckIn).utc().add(1, 'days').format("YYYY-MM-DD")}</td>
                            <td>
                            <span className="text-warning" onClick={() => handleClick(item.raison, item.id)}>
                              <AiOutlineEye size={25} />
                            </span>

                            <span className="text-primary mx-2" onClick={() => handleEdit(item.id, item.raison)}>
                              <AiOutlineEdit size={25} />
                            </span>
                            </td>
                        </tr>
                    ))
                }
            
                
                
            </tbody>
        </table>          
    </div>
  )
}

export default SearchTable