import axios from 'axios';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEdit, AiOutlineEye, AiOutlineDelete } from 'react-icons/ai';

function Table() {
  const [pregStatus, setStatus] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/test').then((res) => setStatus(res.data));
  }, []);

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

  function handleEdit(id, raison) {
    if (raison === 'الحمل') {
      navigate(`/edit/pregnant/${id}`);
    } else if (raison === 'مرافقة الطفل') {
      navigate(`/edit/withbaby/${id}`);
    } else if (raison === 'حالة خاصة') {
      navigate(`/edit/specialvisit/${id}`);
    }
  }
  const handleDelete = (reason, id) => {
    console.log(reason)
    var re = ""
    if (reason === 'الحمل') {
      re="pregnant";
    } else if (reason === 'مرافقة الطفل') {
      re="withbaby";
    } else if (reason === 'حالة خاصة') {
      re="specialvisit";
    }

    const url = `http://localhost:5000/delete/${re}/${id}`;
  
    axios
      .delete(url)
      .then(response => {
        console.log('Patient deleted successfully');
        // Handle success response here
      })
      .catch(error => {
        console.error('Failed to delete patient', error);
        // Handle error here
      });
  };
  
  

  return (
    <div className="container">
      <h2 className="text-secondary my-4">أضيف مؤخرا</h2>
      <table className="table table-striped table-hover">
        {/* Table headers */}
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">الإسم</th>
            <th scope="col">سبب المجيء</th>
            <th scope="col">المستوى الدراسي</th>
            <th scope="col">تاريخ الزيارة</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {pregStatus &&
            pregStatus.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.firstName}</td>
                <td>{item.raison}</td>
                <td>{item.academicLevel}</td>
                <td>{moment(item.dateCheckIn).utc().add(1, 'days').format('YYYY-MM-DD')}</td>
                <td>
                  <span className="text-warning" onClick={() => handleClick(item.raison, item.id)}>
                    <AiOutlineEye size={25} />
                  </span>

                  <span className="text-primary mx-2" onClick={() => handleEdit(item.id, item.raison)}>
                    <AiOutlineEdit size={25} />
                  </span>

                  <span className="text-danger" onClick={() => handleDelete(item.raison, item.id)}>
                    <AiOutlineDelete size={25} />
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
