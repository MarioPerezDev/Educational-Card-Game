import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Shop() {
  const [show, setShow] = React.useState(false);

    return (
      <div>
        <Button variant="primary" onClick={() => setShow(true)}>
          Shop
        </Button>

        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              <div>
                Shop
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <container>
            Items
            </container>
          </Modal.Body>
        </Modal>
      </div>
  );
}
