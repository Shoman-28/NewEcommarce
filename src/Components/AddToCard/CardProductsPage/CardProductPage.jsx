import React from "react";
import { Modal } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
const CardProductPage = () => {
  return (
    <>
      <Modal>
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <></>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close Modal</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CardProductPage;
