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
            <div className="column" style={{textAlign:"center"}}>
             <img style={{width:"100%", height:"100%", textAlign:"center"}} src="https://i.pinimg.com/736x/d1/6e/65/d16e656b8d40f345d574cf3485ffeb00.jpg"/>
             <Button variant="primary" style={{margin:"10px"}}>Power UP</Button>
            </div>
            <div className="column"style={{textAlign:"center"}}>
             <img style={{width:"100%", height:"100%", textAlign:"center"}} src="https://i.pinimg.com/736x/d1/6e/65/d16e656b8d40f345d574cf3485ffeb00.jpg"/>
             <Button variant="primary" style={{margin:"10px"}}>Power UP</Button>
            </div>
            <div className="column"style={{textAlign:"center"}}>
             <img style={{width:"100%", height:"100%", textAlign:"center"}} src="https://i.pinimg.com/736x/d1/6e/65/d16e656b8d40f345d574cf3485ffeb00.jpg"/>
             <Button variant="primary" style={{margin:"10px"}}>Power UP</Button>
            </div>
            <div className="column"style={{textAlign:"center"}}>
             <img style={{width:"100%", height:"100%", textAlign:"center"}} src="https://i.pinimg.com/736x/d1/6e/65/d16e656b8d40f345d574cf3485ffeb00.jpg"/>
             <Button variant="primary" style={{margin:"10px"}}>Power UP</Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
  );
}
