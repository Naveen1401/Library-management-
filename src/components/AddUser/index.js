import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import "./style.css"
import AddRoundedIcon from '@mui/icons-material/AddRounded';

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


const AddUser = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => { setOpen(true) };
    const handleClose = () => { setOpen(false) };


    return (
        <div>
            <button className='adduser_' onClick={handleOpen}>Add User
            <AddRoundedIcon />
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <h3>Add User</h3>
                    <div>
                        <span>Name :</span>
                        <input type="text" name='Name' />
                    </div>
                    <div>
                        <span>Roll no. :</span>
                        <input type="text" name='rollno' />
                    </div>
                    <div>
                        <span>Phone Number :</span>
                        <input type="text" name='phoneno' />
                    </div>
                    <div>
                        <span>Email :</span>
                        <input type="email" name="email" />
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

export default AddUser