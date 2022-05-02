// import React from 'react'
// import "./style.css"

// const TopicFilter = ({data})=> {
//   return (
//     <div>
//         {data.map((value)=>{
//             return (
//                 <div>
//                     <span>{parseInt(value.index)+1}</span>
//                     <h3>{value.book}</h3>
//                     {value.issued ? <p>Issued</p> : <p>Available</p>}
//                 </div>
//             )
//         })}
//     </div>
//   )
// }

// export default TopicFilter

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
import './style.css';
import { useSelector } from 'react-redux';

// function createData(name, calories, fat, carbs, protein, price) {
//     return {
//         name,
//         calories,
//         fat,
//         carbs,
//         protein,
//         price,
//         history: [
//             {
//                 customerId: '11091700',
//                 from: '2020-01-05',
//                 to:'2020-01-12',
//                 expected: '2020-01-11',
//                 amount: 3,
//             },
//         ],
//     };
// }

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell >
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
                <TableCell >{row.author}</TableCell>
                <TableCell >{row.copies}</TableCell>
                <TableCell >{row.topic}</TableCell>
                <TableCell >{row.issued ? <p>Issued</p> : <p>Available</p>}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Last Issued
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Roll No.</TableCell>
                                        <TableCell>From</TableCell>
                                        <TableCell align='center'>To</TableCell>
                                        <TableCell align='right'>Expected Return</TableCell>
                                        {/* <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell> */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.from}>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell component="th" scope="row">
                                                {historyRow.from}
                                            </TableCell>
                                            <TableCell align='center' component="th" scope="row">
                                                {historyRow.to}
                                            </TableCell>
                                            <TableCell align='right'>
                                                {historyRow.expected}
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

// Row.propTypes = {
//     row: PropTypes.shape({
//         calories: PropTypes.number.isRequired,
//         carbs: PropTypes.number.isRequired,
//         fat: PropTypes.number.isRequired,
//         history: PropTypes.arrayOf(
//             PropTypes.shape({
//                 amount: PropTypes.number.isRequired,
//                 customerId: PropTypes.string.isRequired,
//                 from: PropTypes.string.isRequired,
//             }),
//         ).isRequired,
//         name: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//         protein: PropTypes.number.isRequired,
//     }).isRequired,
// };

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//     createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//     createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//     createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];

// console.log(rows);

const AllBooks = () => {
    // console.log(data);

    // const [FilteredList, setFilteredList] = useState([]);
    const data = useSelector((state) => state.data._data);

    console.log(data.length);
    const columns = [
        { id: 's', label: '', minWidth: 5 },
        { id: 'Book', label: 'Book', minWidth: 30 },
        { id: 'Author', label: 'Author', minWidth: 20 },
        { id: 'Copies', label: 'Copies', minWidth: 5 },
        { id: 'Topic', label: 'Topic', minWidth: 10 },
        { id: 'Availability', label: 'Availability', minWidth: 20 },
    ];


    return (
        <div className='allbooks'>
            <Paper
            // sx={{margin: 2,}}
            >
                <TableContainer>
                    <Table aria-label="collapsible table" size="small">
                        <TableHead>
                            <TableRow>
                                {columns.map((col) =>
                                    <TableCell key={col.id} style={{ width: `${col.minWidth}vw` }}>{col.label}</TableCell>
                                )}
                                {/* <TableCell />
                            <TableCell>Book</TableCell>
                            <TableCell align="right">Author</TableCell>
                            <TableCell align="right">Copies</TableCell>
                            <TableCell align="right">Topic</TableCell>
                            <TableCell align="right">Availability</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.map((row) => (
                                <Row key={row.name} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className='nobook'>
                    {data.length > 0 ? <p></p> : <p>No such book Available</p>}
                </div>
                
                {/*{console.log(data)} */}
            </Paper>
        </div>
    );
}


export default AllBooks;