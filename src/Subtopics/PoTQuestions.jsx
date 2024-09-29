import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';

function PoTQuestions() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedOption,setSelectedOption] = useState('')

    const handleChange = (e)=>{
        setSelectedOption(e.target.value);
    }

    const [qstn,setQstn] = useState({
        question:"",
        optiona:"",
        optionb:"",
        optionc:"",
        optiond:"",
        answer:"",
        explanation:""

    })
    console.log(qstn);
    

  return (
    <>
        <div className="addnewbtn">
            <Button className='' onClick={handleShow}>
                Add<i class="fa-solid fa-plus"></i>
            </Button>
        </div>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        animation={true}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a new question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="totalform row">
            <div className="col-md-6">
                <div >
                    <input type="text" id='question' className='form-control' placeholder='Enter question' value={qstn.question} onChange={(e)=>setQstn({...qstn,question:e.target.value})}/>
                </div>
                <div className="options">
                    <div className="option-one d-flex gap-2">
                        <span className='d-flex align-items-center'>A</span>
                        <input type="text" className='form-control' placeholder='Option A' value={qstn.optiona} onChange={(e)=>setQstn({...qstn,optiona:e.target.value})}/>
                    </div>
                    <div className="option-one d-flex gap-2">
                        <span className='d-flex align-items-center'>B</span>
                        <input type="text" className='form-control' placeholder='Option B' value={qstn.optionb} onChange={(e)=>setQstn({...qstn,optionb:e.target.value})}/>
                    </div>
                    <div className="option-one d-flex gap-2">
                        <span className='d-flex align-items-center'>C</span>
                        <input type="text" className='form-control' placeholder='Option C' value={qstn.optionc} onChange={(e)=>setQstn({...qstn,optionc:e.target.value})}/>
                    </div>
                    <div className="option-one d-flex gap-2">
                        <span className='d-flex align-items-center'>D</span>
                        <input type="text" className='form-control' placeholder='Option D'value={qstn.optiond} onChange={(e)=>setQstn({...qstn,optiond:e.target.value})}/>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className='d-flex gap-3'>
                    <div className=' d-flex align-items-center'>
                        <p className='m-0'>Correct Answer</p>
                    </div>
                <Dropdown>
                    <Dropdown.Toggle variant="" className='border border-dark rounded-1 py-0 p-1' id="dropdown-basic">
                    {/* <i class="fa-solid fa-caret-down"></i> */}
                    </Dropdown.Toggle>

                    <Dropdown.Menu value={qstn.answer} onChange={(e)=>setQstn({...qstn,answer:e.target.value})}>
                        <Dropdown.Item href="#/action-1" value={"optiona"}>Option A</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" value={"optionb"}>Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" value={"optionc"}>Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-4" value={"optiond"}>Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
                <div>
                    <textarea name="explanation" id="explanation" placeholder='Write the explanation here.' className='form-control' rows={6} value={qstn.explanation}></textarea>
                </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PoTQuestions