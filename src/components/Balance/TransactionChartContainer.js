import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import ChartComponent from "./ChartComponent"; // Importar el componente que crea el gráfico
import useTransactionData from "../hooks/useTransactionData";

export const TransactionChartContainer = () => {
  const { transactions, currentMonth } = useContext(GlobalContext);
  const data = transactions[currentMonth];

  const { labels, ingresos, gastos, balance } = useTransactionData(data);

  return (
    <div style={{ maxHeight: "350px", display: "flex", justifyContent: "center" }}>
      <ChartComponent labels={labels} ingresos={ingresos} gastos={gastos} balance={balance} />
    </div>
  );
};
