import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const StockFormUpdate = () => {
  const [quantiteSortieNew, setQuantiteSortieNew] = useState("");
  const [designation, setDesignation] = useState("");
  const [quantiteSortieOld, setQuantiteSortieOld] = useState("");
  const [disponible, setDisponible] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:5000/stock/${id}`).then((response) => {
      const data = response.data[0];
      console.log(data)
      setDesignation(data.designation);
      setQuantiteSortieOld(data.quantite_sortie);
      setDisponible(data.disponible);

    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      id,
      quantiteSortieOld,
      quantiteSortieNew,
      disponible,
      designation
    };
    axios
      .put("http://localhost:5000/update/sortie", formData)
      .then((response) => {
        return response;
      })
      .catch((err) => err);
    axios
      .post("http://localhost:5000/add/details", formData)
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
    <Form.Group controlId="quantiteSortie">
      <Form.Control
            type="hidden"
            value={disponible}
          />
      <Form.Control
            type="hidden"
            value={quantiteSortieOld}
          />
          <Form.Label>كمية الخروج</Form.Label>
          <Form.Control
            type="number"
            placeholder="أدخل الكمية المستخرجة"
          
            onChange={(event) => setQuantiteSortieNew(event.target.value)}
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
