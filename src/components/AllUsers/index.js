import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './style.css'
import { useSelector } from 'react-redux';

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell >{row.rollNumber}</TableCell>
                <TableCell >{row.branch}</TableCell>
                <TableCell >{row.phoneNumber}</TableCell>
                <TableCell >{row.email}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Issued Books
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Roll No.</TableCell>
                                        <TableCell>From</TableCell>
                                        <TableCell align='center'>To</TableCell>
                                        <TableCell align='right'>Fine</TableCell>
                                        <TableCell align='right'>Remove</TableCell>
                                        {/* <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell> */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.issuedBooks.map((book) => (
                                        <TableRow key={book.from}>
                                            <TableCell>{row.rollNumber}</TableCell>
                                            <TableCell component="th" scope="row">
                                                {book.from}
                                            </TableCell>
                                            <TableCell align='center' component="th" scope="row">
                                                {book.to}
                                            </TableCell>
                                            <TableCell align='right'>
                                                {book.fine}
                                            </TableCell>
                                            <TableCell align='right'>
                                                <button>-</button>
                                            </TableCell>
                                            {/* <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(historyRow.amount * row.price * 100) / 100}
                                            </TableCell> */}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


const AllUsers = () => {
    
    const data = useSelector((state) => state.user._data);

    console.log(data.length);
    const columns = [
        { id: 's', label: '', minWidth: 5 },
        { id: 'Name', label: 'Name', minWidth: 30 },
        { id: 'RollNo.', label: 'Roll No.', minWidth: 20 },
        { id: 'Branch', label: 'Branch', minWidth: 5 },
        { id: 'PhoneNo.', label: 'Phone No.', minWidth: 10 },
        { id: 'EMail', label: 'E-Mail', minWidth: 20 },
    ];


    return (
        <div className='allusers'>
            <div className='userlistHeading'>
                <h1>User List</h1>
                <h3>{data.length} Users</h3>
            </div>
            <div className="allusertable">
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                {columns.map((col) =>
                                    <TableCell key={col.id} style={{ width: `${col.minWidth}vw` }}>{col.label}</TableCell>
                                )}
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.map((row) => (
                                <Row key={row.name} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className="nouser">
                    {data.length > 0 ? <p></p> : <p>No such User Available</p>}
                </div>
            </div>
        </div>
    );
}


export default AllUsers;