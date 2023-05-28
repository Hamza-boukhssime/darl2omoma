import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const StockForm = () => {
  const [designation, setDesignation] = useState('');
  const [dateEntree, setDateEntree] = useState('');
  const [quantiteEntree, setQuantiteEntree] = useState('');
  const [quantiteSortie, setQuantiteSortie] = useState('');
  const [datePeremption, setDatePeremption] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      designation,
      dateEntree,
      quantiteEntree,
      quantiteSortie,
      datePeremption
    };
    axios.post('http://localhost:5000/add/stock',formData).then((response) => {
            return response
        }).catch(err => err)
    setDesignation('');
    setDateEntree('');
    setQuantiteEntree('');
    setQuantiteSortie('');
    setDatePeremption('');
  };

  return (
    <div className="d-flex justify-center flex-column  px-5 bg-white ">
      <h1 className="text-center my-3">إضافة مخزون</h1>
    <Form onSubmit={handleSubmit} className='w-100'>
      <Form.Group controlId="designation">
        <Form.Label>التسمية</Form.Label>
        <Form.Control
          type="text"
          placeholder="أدخل التسمية"
          value={designation}
          onChange={(event) => setDesignation(event.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="dateEntree">
        <Form.Label>تاريخ الدخول</Form.Label>
        <Form.Control
          type="date"
          value={dateEntree}
          onChange={(event) => setDateEntree(event.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="quantiteEntree">
        <Form.Label>كمية الدخول</Form.Label>
        <Form.Control
          type="number"
          placeholder="أدخل الكمية المدخلة"
          value={quantiteEntree}
          onChange={(event) => setQuantiteEntree(event.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="quantiteSortie">
        <Form.Label>كمية الخروج</Form.Label>
        <Form.Control
          type="number"
          placeholder="أدخل الكمية المستخرجة"
          value={quantiteSortie}
          onChange={(event) => setQuantiteSortie(event.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="datePeremption">
        <Form.Label>تاريخ الانتهاء</Form.Label>
        <Form.Control
          type="date"
          value={datePeremption}
          onChange={(event) => setDatePeremption(event.target.value)}
          required
        />
      </Form.Group>
      <div className="row text-center">
      <Button variant="primary" type="submit" className="mt-5 mx-auto p-0 w-50 btn btn-primary">
        حفظ
      </Button>
      </div>
    
    </Form>
    </div>
  );
};

export default StockForm;
