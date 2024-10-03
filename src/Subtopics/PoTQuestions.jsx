import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addQuestionAPI } from '../Services/allAPI';
// import Dropdown from 'react-bootstrap/Dropdown';

function PoTQuestions() {
  
  const [qstn,setQstn] = useState({
    section_name:"Arithmetic_aptitude",
    category:"PoT",
    question:"",
    option_a:"",
    option_b:"",
    option_c:"",
    option_d:"",
    answer:"",
    explanation:""
            
  })
  // console.log(qstn);
  
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

    const handleCancel = ()=>{
      setQstn({
        section_name:"Arithmetic_aptitude",
        category:"PoT",
        question:"",
        option_a:"",
        option_b:"",
        option_c:"",
        option_d:"",
        answer:"",
        explanation:""
      })
    }

    const handleClose = () => {
      if(!qstn.question && !qstn.option_a && !qstn.option_b && !qstn.option_c && !qstn.option_d && !qstn.answer && !qstn.explanation){
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
    const {question,option_a,option_b,option_c,option_d,answer,explanation} = qstn
    if(!question || !option_a || !option_b || !option_c || !option_d || !answer || !explanation){
      alert("Please fill all the fields!")
    }
    else{
      try{
        const result = await addQuestionAPI(qstn)
      console.log(result);

      if(result.status === 200){
        alert('Question added successfully.')
        handleCancel()
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
                        <input type="text" className='form-control' placeholder='Option A' value={qstn.option_a} onChange={(e)=>setQstn({...qstn,option_a:e.target.value})}/>
                    </div>
                    <div className="option-one d-flex gap-2">
                        <span className='d-flex align-items-center'>B</span>
                        <input type="text" className='form-control' placeholder='Option B' value={qstn.option_b} onChange={(e)=>setQstn({...qstn,option_b:e.target.value})}/>
                    </div>
                    <div className="option-one d-flex gap-2">
                        <span className='d-flex align-items-center'>C</span>
                        <input type="text" className='form-control' placeholder='Option C' value={qstn.option_c} onChange={(e)=>setQstn({...qstn,option_c:e.target.value})}/>
                    </div>
                    <div className="option-one d-flex gap-2">
                        <span className='d-flex align-items-center'>D</span>
                        <input type="text" className='form-control' placeholder='Option D'value={qstn.option_d} onChange={(e)=>setQstn({...qstn,option_d:e.target.value})}/>
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
                        <option href="#/action-1" value={qstn.option_a}>{qstn.option_a}</option>
                        <option href="#/action-2" value={qstn.option_b}>{qstn.option_b}</option>
                        <option href="#/action-3" value={qstn.option_c}>{qstn.option_c}</option>
                        <option href="#/action-4" value={qstn.option_d}>{qstn.option_d}</option>
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