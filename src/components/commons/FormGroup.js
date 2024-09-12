import React from "react";
import { Form } from "react-bootstrap";

const FormGroup = ({ controlId, label, type, value, onChange, required = false, placeholder = "", text = "" }) => {
  return (
    <Form.Group controlId={controlId} className="pt-2">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
      />
      {text && <Form.Text className="text-muted">{text}</Form.Text>}
    </Form.Group>
  );
};

export default FormGroup;
