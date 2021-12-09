import { useState } from 'react';
import {Modal, Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {editpost} from '../redux/actions'
        function Edit({el}) {
            const [show, setShow] = useState(false);
          
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
            const [editbody,setEditbody]=useState(el.body)
            const dispatch=useDispatch()
          
            return (
              <>
                <Button variant="primary" onClick={handleShow}>
                  Edit
                </Button>
          
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                 <input    value={editbody}   onChange={(e)=>setEditbody(e.target.value)}   />
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={()=>  { dispatch(editpost( el.id, editbody    ))}  }>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            );
          }

export default Edit