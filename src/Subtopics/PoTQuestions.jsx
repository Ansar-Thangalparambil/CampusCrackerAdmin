import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addQuestionAPI } from '../Services/allAPI';
// import Dropdown from 'react-bootstrap/Dropdown';

function PoTQuestions() {
  
  const [qstn,setQstn] = useState({
    question:"",
    optiona:"",
    optionb:"",
    optionc:"",
    optiond:"",
    answer:"",
    explanation:""
    
  })
  // console.log(qstn);
  
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

    const handleCancel = ()=>{
      setQstn({
        question:"",
        optiona:"",
        optionb:"",
        optionc:"",
        optiond:"",
        answer:"",
        explanation:""
      })
    }

    const handleClose = () => {
      if(!qstn.question && !qstn.optiona && !qstn.optionb && !qstn.optionc && !qstn.optionc && !qstn.optiond && !qstn.answer && !qstn.explanation){
        setShow(false)
      }
      else{
        const confMsg = window.confirm("Discard changes?")
        if(confMsg){
          handleCancel()
          setShow(false)
        }
      }
    };
    
  //Function to add question
  const addQuestion = async(e)=>{
    e.preventDefault()
    const {question,optiona,optionb,optionc,optiond,answer,explanation} = qstn
    if(!question || !optiona || !optionb || !optionc || !optionc || !optiond || !answer || !explanation){
      alert("Please fill all the fields!")
    }
    else{
      try{
        const result = await addQuestionAPI(qstn)
      console.log(result);

      if(result.status === 200){
        alert('Question added successfully.')
      }
      else{
        alert(`${result.response.data}`)
      }
    }catch(err){
      console.log(`Request failed due to ${err}`);
      alert('Oops something went wrong!')
      
    }
      
    }
  }


    
    
  return (
    <>
      <div className="addnewbtn">
          <Button className='' onClick={handleShow}>
              Add<i class="fa-solid fa-plus"></i>
          </Button>
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} animation={true} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add a new question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="totalform row">
            <div className="col-md-6">
                <div >
                    <textarea name='question' id='question' className='form-control' placeholder='Enter question' value={qstn.question} onChange={(e)=>setQstn({...qstn,question:e.target.value})}/>
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
                        <p className='m-0'>Choose the correct answer</p>
                    </div>
                {/* <Dropdown onSelect={handleChange}> */}
                    {/* <Dropdown.Toggle variant="" className='border border-dark rounded-1 py-0 p-1' id="dropdown-basic"> */}
                    {/* <i class="fa-solid fa-caret-down"></i> */}
                    {/* </Dropdown.Toggle> */}

                    <select value={qstn.answer}  onChange={(e)=>setQstn({...qstn,answer:e.target.value})}>
                        <option href="#/action-1" value="">Choose one</option>
                        <option href="#/action-1" value={qstn.optiona}>{qstn.optiona}</option>
                        <option href="#/action-2" value={qstn.optionb}>{qstn.optionb}</option>
                        <option href="#/action-3" value={qstn.optionc}>{qstn.optionc}</option>
                        <option href="#/action-4" value={qstn.optiond}>{qstn.optiond}</option>
                    </select>
                {/* </Dropdown> */}
                </div>
                <div>
                    <textarea name="explanation" id="explanation" placeholder='Write the explanation here.' className='form-control' rows={7} value={qstn.explanation} onChange={(e)=>setQstn({...qstn,explanation:e.target.value})}></textarea>
                </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='me-auto' variant="secondary" onClick={handleCancel}>
            Clear all
          </Button>
          <Button variant="primary" onClick={addQuestion}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PoTQuestions