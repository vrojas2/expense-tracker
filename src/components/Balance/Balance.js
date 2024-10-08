import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { IncomeExpenses } from "./IncomeExpenses";
import { Analytics } from "./Analytics";
import { Container } from "react-bootstrap";
import { moneyFormatter } from "../../util/moneyFormatter";
import "./index.css";

export const Balance = () => {
  const { transactions, currentMonth } = useContext(GlobalContext);

  const amounts = transactions[currentMonth].map(
    (transaction) => transaction.amount
  );

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <Container className="balance rounded-4 shadow">
      <h4 className="title">Balance del mes</h4>
      <h1 className="month-balance">{moneyFormatter(total)}</h1>
      <IncomeExpenses />
      <Analytics />
    </Container>
  );
};