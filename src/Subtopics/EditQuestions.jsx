import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editQuestionAPI } from '../Services/allAPI';
import { editQuestionResponseContext } from '../Context/Contextshare';

function EditQuestions({potqns}) {

    const {setEditResponse} = useContext(editQuestionResponseContext)

    const[editPotQuestion,setEditPotQuestion] = useState({
        section_name:"Arithmetic_aptitude",
        category:"PoT",
        id:potqns._id,
        question:potqns.question,
        option_a:potqns.option_a,
        option_b:potqns.option_b,
        option_c:potqns.option_c,
        option_d:potqns.option_d,
        answer:potqns.answer,
        explanation:potqns.explanation

    })

    //state to store original question
    const [initialQstn, setInitialQstn] = useState(editPotQuestion)

    const [show, setShow] = useState(false);

    useEffect(()=>{
        setInitialQstn(editPotQuestion);
    },[show])

    const handleShow = () => setShow(true);

    const handleCancel = ()=>{
        setEditPotQuestion({
          section_name:"Arithmetic_aptitude",
          category:"PoT",
        question:potqns.question,
        option_a:potqns.option_a,
        option_b:potqns.option_b,
        option_c:potqns.option_c,
        option_d:potqns.option_d,
        answer:potqns.answer,
        explanation:potqns.explanation,
        id:potqns._id

        })
      }

      const handleClose = () => {
        // Compare the current editPotQuestion with the initialPotQuestion to detect changes
        if (JSON.stringify(editPotQuestion) === JSON.stringify(initialQstn)) {
          setShow(false); // No changes, close the modal
        } else {
          // Changes detected, show confirmation dialog
          const confMsg = window.confirm("Discard changes?");
          if (confMsg) {
            handleCancel(); // Revert to initial state
            setShow(false); // Close the modal
          }
        }
      };
    

    const handleUpdate = async(e)=>{
        e.preventDefault()
        const{id,question,option_a,option_b,option_c,option_d,answer,explanation} = editPotQuestion
        
        if(!question || !option_a || !option_b || !option_c || !option_d || !answer || !explanation){
            alert('Please fill all the fields!')
        } else{
            try {
                const result = await editQuestionAPI(id,editPotQuestion)

                if(result.status === 200){
                    alert('Updated successfully')
                    console.log(result.data);
                    setEditResponse(result.data)
                    setShow(false)
                    
                } else{
                    console.log(result.response.data);
                    
                }
                
            } catch (error) {
                console.log(`Request failed due to ${error}`);
                alert('Oops!? something went wrong!')
                
            }
        }
    }

  return (
    <>
        <Button className='' onClick={handleShow}>
              Edit<i class="fa-solid fa-pencil"></i>
        </Button>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} animation={true} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add a new question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="totalform row">
            <div className="col-md-6">
                <div >
                    <textarea name='question' id='question' className='form-control' placeholder='Enter question' value={editPotQuestion.question} onChange={(e)=>setEditPotQuestion({...editPotQuestion,question:e.target.value})}/>
                </div>
                <div className="options">
                    <div className="option-one d-flex gap-2">
                        <span className='d-flex align-items-center'>A</span>
                        <input type="text" className='form-control' placeholder='Option A' value={editPotQuestion.option_a} onChange={(e)=>setEditPotQuestion({...editPotQuestion,option_a:e.target.value})}/>
                    </div>
                    <div className="option-one d-flex gap-2">
                        <span className='d-flex align-items-center'>B</span>
                        <input type="text" className='form-control' placeholder='Option B' value={editPotQuestion.option_b} onChange={(e)=>setEditPotQuestion({...editPotQuestion,option_b:e.target.value})}/>
                    </div>
                    <div className="option-one d-flex gap-2">
                        <span className='d-flex align-items-center'>C</span>
                        <input type="text" className='form-control' placeholder='Option C' value={editPotQuestion.option_c} onChange={(e)=>setEditPotQuestion({...editPotQuestion,option_c:e.target.value})}/>
                    </div>
                    <div className="option-one d-flex gap-2">
                        <span className='d-flex align-items-center'>D</span>
                        <input type="text" className='form-control' placeholder='Option D' value={editPotQuestion.option_d} onChange={(e)=>setEditPotQuestion({...editPotQuestion,option_d:e.target.value})}/>
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

                    <select value={editPotQuestion.answer}  onChange={(e)=>setEditPotQuestion({...editPotQuestion,answer:e.target.value})}>
                        <option href="#/action-1" value="">Choose one</option>
                        <option href="#/action-1" value={editPotQuestion.option_a}>{editPotQuestion.option_a}</option>
                        <option href="#/action-2" value={editPotQuestion.option_b}>{editPotQuestion.option_b}</option>
                        <option href="#/action-3" value={editPotQuestion.option_c}>{editPotQuestion.option_c}</option>
                        <option href="#/action-4" value={editPotQuestion.option_d}>{editPotQuestion.option_d}</option>
                    </select>
                {/* </Dropdown> */}
                </div>
                <div>
                    <textarea name="explanation" id="explanation" placeholder='Write the explanation here.' className='form-control' rows={7} value={editPotQuestion.explanation} onChange={(e)=>setEditPotQuestion({...editPotQuestion,explanation:e.target.value})}></textarea>
                </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='me-auto' variant="secondary" onClick={handleCancel}>
            Clear all
          </Button>
          <Button variant="primary" onClick={handleUpdate}>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditQuestions