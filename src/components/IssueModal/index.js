import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap'


const IssueModal = ({ issue }) => {
  const [lgShow, setLgShow] = useState(false);
  if (!issue) issue = {}

  return (
    <>
      <div>
        <h1>Modal</h1>
        <Button onClick={() => setLgShow(true)}>Large modal</Button>
      </div >
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <h4>{issue.title}</h4>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h4>{issue.body}</h4>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default IssueModal;
