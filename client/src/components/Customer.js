import React from "react";
import { TableCell, Table, TableRow } from '@mui/material';


function Customer({ id, image, name, birthday, gender, job }){
    return (
        
            <TableRow >
                <TableCell>{id}</TableCell>
                <TableCell><img src={image} alt="profile"/></TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{birthday}</TableCell>
                <TableCell>{gender}</TableCell>
                <TableCell>{job}</TableCell>
            </TableRow>
       
    )
}

export default Customer;