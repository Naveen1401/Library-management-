import React, {useState } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import './style.css'


const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



const AddBook = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = ()=>{setOpen(true)};
    const handleClose = ()=>{setOpen(false)};


    return (


        <div>
            <button className='addbookbtn_' onClick={handleOpen}>Add book
                <AddRoundedIcon/>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx ={modalStyle}>
                    <h3>Add Book</h3>
                    <div>
                        <span>Book Name :</span>
                        <input type="text"  name='Name'/>
                    </div>
                    <div>
                        <span>Author Name :</span>
                        <input type="text" name='Author'/>
                    </div>
                    <div>
                        <span>Topic :</span>
                        <input type="text" name='Topic'/>
                    </div>
                    <div>
                        <span>Number of copies :</span>
                        <input type="number" name="copies" />
                    </div>
                    <div>
                        <button>Submit</button>
                        <button onClick={handleClose}>Close</button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default AddBook