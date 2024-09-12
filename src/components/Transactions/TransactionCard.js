import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Container, Modal, Button } from "react-bootstrap";
import { moneyFormatter } from "../../util/moneyFormatter";
import "./index.css";

export const TransactionCard = ({ transaction }) => {
  const { deleteTransaction, currentMonth } = useContext(GlobalContext);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    deleteTransaction(transaction.id, currentMonth);
    setShowModal(false);
  };

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <Container className="transaction rounded shadow-small mt-2 p-2">
      <div className="transaction-text">
        <div
          className={transaction.amount < 0 ? "icon minus" : "icon plus"}
        ></div>
        {transaction.text}
      </div>
      <div
        className={
          transaction.amount < 0
            ? "transaction-amount minus"
            : "transaction-amount plus"
        }
      >
        {sign}
        {moneyFormatter(transaction.amount)}
        <svg
          height="20px"
          width="20px"
          onClick={() => setShowModal(true)}
          fill="none"
          viewBox="0 0 24 24"
          style={{ marginLeft: "10px" }}
        >
          <g id="Interface / Trash_Full">
            <path
              id="Vector"
              d="M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20"
              stroke="grey"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estas serguro que deseas eliminarlo?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};