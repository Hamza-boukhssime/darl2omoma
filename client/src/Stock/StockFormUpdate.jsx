import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const StockFormUpdate = () => {
  const [designation, setDesignation] = useState("");
  const [dateEntree, setDateEntree] = useState("");
  const [quantiteEntree, setQuantiteEntree] = useState("");
  const [quantiteSortie, setQuantiteSortie] = useState("");
  const [datePeremption, setDatePeremption] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:5000/stock/${id}`).then((response) => {
      const data = response.data[0];

      setDesignation(data.designation);
      setDateEntree(data.date_entree);
      setQuantiteEntree(data.quantite_entree);
      setQuantiteSortie(data.quantite_sortie);
      setDatePeremption(data.date_peremption);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      id,
      designation,
      dateEntree,
      quantiteEntree,
      quantiteSortie,
      datePeremption,
    };
    axios
      .put("http://localhost:5000/update/stock", formData)
      .then((response) => {
        return response;
      })
      .catch((err) => err);
    navigate("/stock");
  };

  return (
    <div className="d-flex justify-center flex-column  px-5 bg-white ">
      <h1 className="text-center my-3">تعديل المخزون</h1>
      <Form onSubmit={handleSubmit} className="w-100 mt-5 ">
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
            value={moment(dateEntree).utc().add(1, "days").format("YYYY-MM-DD")}
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
            value={moment(datePeremption)
              .utc()
              .add(1, "days")
              .format("YYYY-MM-DD")}
            onChange={(event) => setDatePeremption(event.target.value)}
            required
          />
        </Form.Group>
        <div className="row text-center">
          <Button
            variant="primary"
            type="submit"
            className="my-4 mx-auto w-50 "
          >
            حفظ
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default StockFormUpdate;
