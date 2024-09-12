import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartComponent = ({ labels, ingresos, gastos, balance }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (labels && chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const chartData = {
        labels,
        datasets: [
          {
            label: "Ingresos",
            data: ingresos,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
          {
            label: "Gastos",
            data: gastos,
            backgroundColor: "rgba(255, 99, 132, 0.6)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "Balance Acumulado",
            data: balance,
            type: "line",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 2,
            tension: 0.4,
            fill: false,
          },
        ],
      };

      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "bar",
        data: chartData,
        options: {
          scales: {
            y: {
              beginAtZero: true,
              display: true,
              title: {
                display: true,
                text: "Cantidad ($)",
              },
            },
            x: {
              display: true,
              title: {
                display: true,
                text: "Días",
              },
            },
          },
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
          },
        },
      });
    }
  }, [labels, ingresos, gastos, balance]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
