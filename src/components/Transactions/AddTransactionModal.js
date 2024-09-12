import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Button, Modal, Form } from "react-bootstrap";
import FormGroup from "../commons/FormGroup";

export const AddTransactionModal = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    setError("");
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const { addTransaction, currentMonth } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "" || amount === "") {
      setError("Por favor, ingresa una descripción y cantidad.");
      return;
    }
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      date: new Date().getDate(),
    };

    setText("");
    setAmount(0);
    setError("");
    handleCloseModal();
    addTransaction(newTransaction, currentMonth);
  };

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Movimiento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <FormGroup
              controlId="text"
              label="Descripción"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required={true}
              placeholder="Ejemplo: Renta"
            />
            <FormGroup
              controlId="amount"
              label="Cantidad"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required={true}
              placeholder="Ingresa la cantidad..."
              text="Ingresa un número negativo o positivo"
            />
            {error && <div className="text-danger">{error}</div>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="fixed-bottom">
        <Button
          onClick={handleShowModal}
          style={{
            width: "250px",
            backgroundColor: "rgb(134 165 255)",
            fontWeight: "bold",
          }}
        >
          Agregar Movimiento
        </Button>
      </div>
    </>
  );
};
