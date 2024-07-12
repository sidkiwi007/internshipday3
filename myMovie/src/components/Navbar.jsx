import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const Navbar = () =>{
const [rows,setRows]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:4000/movies').then((res)=>{
      console.log(res);
      setRows(res.data);
    })
  },[])


// const rows = [
//     {
//         name:"1.Oppenheimer",
//         year:2023,
//         dir:"Chris Nolan",
//         rating:9.8,
//         poster:"https://t.ly/Mo5H4"
       
//     },
//     {
//         name:"2.Barbie",
//         year:2023,
//         dir:"Greta Gerwig",
//         rating:9.5,
//         poster: "https://t.ly/Dz8up",
        
//     },
//     {
//         name:"3. Interstellar",
//         year:2017,
//         dir:"Chris Nolan",
//         rating:9,
//         poster:"https://t.ly/4o7IX"
//     }
// ];

  return (
    <div><TableContainer component={Paper}>
    <Table border='' sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead x>
        <TableRow  sx={{ '& td, & th': { border: 2 } }}> 
          <TableCell ><b>Name</b></TableCell>
          <TableCell align="right"><b>Director</b></TableCell>
          <TableCell align="right"><b>Category</b></TableCell>
          <TableCell align="right"><b>Year</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '& td, & th': { border: 2 } }}
          >
            <TableCell component="th" scope="row">
              {row.movieName}
            </TableCell>
            {/* <TableCell align="right">{<img src={row.poster} alt="" width="100" height="100"></img>}</TableCell> */}
            <TableCell align="right">{row.movieDirector}</TableCell>
            <TableCell align="right">{row.category}</TableCell>
            <TableCell align="right">{row.releaseYear}</TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  )
}


export default Navbar