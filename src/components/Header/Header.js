import React, { useContext, useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GlobalContext } from "../../context/GlobalState";
import "./index.css";

const months = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

export const Header = () => {
  const { setMonth, currentMonth } = useContext(GlobalContext);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const headerRef = useRef(null);

  const handleMonthClick = (month) => {
    setMonth(month);
    setSelectedMonth(month);
  };

  useEffect(() => {
    const scrollHeaderToCurrentMonth = () => {
      const headerElement = headerRef.current;
      const selectedMonthElement = headerElement.querySelector(".bold");
      if (selectedMonthElement) {
        const scrollLeft =
          selectedMonthElement.offsetLeft -
          headerElement.offsetWidth / 2 +
          selectedMonthElement.offsetWidth / 2;
        headerElement.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    };
    scrollHeaderToCurrentMonth();
  }, [selectedMonth]);

  useEffect(() => {
    const headerElement = headerRef.current;
    const handleScroll = () => {
      const maxScrollLeft = headerElement.scrollWidth / 2;

      if (headerElement.scrollLeft >= maxScrollLeft) {
        headerElement.scrollLeft -= maxScrollLeft;
      } else if (headerElement.scrollLeft === 0) {
        headerElement.scrollLeft += maxScrollLeft;
      }
    };
    headerElement.addEventListener("scroll", handleScroll);
    return () => {
      headerElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col className="d-flex flex-row overflow-auto header" ref={headerRef}>
            {[...months, ...months].map((month, index) => (
              <div
                className={`px-3 ${selectedMonth === month ? "bold" : "date"}`}
                key={index}
                onClick={() => handleMonthClick(month)}
              >
                {month}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </header>
  );
};
