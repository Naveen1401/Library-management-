import React, { useState } from 'react'
import style from './style.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import RollNoSearch from '../RollNoSearch';



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


const BookCard = ({ name, author, copies }) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (

        <div className='card'>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx = {modalStyle}>
                    <h1>{name}</h1>
                    <p>{author}</p>
                    <RollNoSearch/>
                    <input type="date" name="from"/>
                    <input type="date" name="to"/>
                    <button>Submit</button>
                    <button onClick={handleClose}>Close</button>
                </Box>
            </Modal>

            <h1 className='bookName'>{name}</h1>
            <h3 className='author'>{author}</h3>
            <div className='copies'>
                <p>No. of copies</p>
                <span>{copies}</span>
            </div>
            <div className='btnDiv'>
                <button onClick={handleOpen} >Issue</button>
            </div>
        </div>
    )
}

export default BookCard