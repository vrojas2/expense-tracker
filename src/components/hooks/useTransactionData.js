const useTransactionData = (data) => {
    const groupedData = data.reduce((acc, transaction) => {
      const { date, amount } = transaction;
      if (!acc[date]) {
        acc[date] = { ingresos: 0, gastos: 0 };
      }
      if (amount > 0) {
        acc[date].ingresos += amount;
      } else {
        acc[date].gastos += Math.abs(amount);
      }
      return acc;
    }, {});
  
    const labels = Object.keys(groupedData);
    const ingresos = labels.map((date) => groupedData[date].ingresos);
    const gastos = labels.map((date) => groupedData[date].gastos);
    const balance = [];
    let acumulado = 0;
  
    labels.forEach((date) => {
      acumulado += groupedData[date].ingresos - groupedData[date].gastos;
      balance.push(acumulado);
    });
  
    return { labels, ingresos, gastos, balance };
  };
  
  export default useTransactionData;
  