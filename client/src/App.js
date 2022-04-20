import { useState, useEffect } from "react";
import axios from "axios";
import Customer from "./components/Customer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./App.module.css";

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    stateRefresh();
  }, []);
  
  const stateRefresh = async () => {
    const result = await axios.get("http://localhost:5000/api/customers");
    setCustomers(result.data);
  }


  return (
    <Paper className={styles.root}>
      <Table className={styles.table}>
        <TableHead>
          <TableCell>번호</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>생년월일</TableCell>
          <TableCell>성별</TableCell>
          <TableCell>직업</TableCell>
        </TableHead>
        <TableBody>
          {customers!=0 ? customers.map((c) => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
                // stateRefresh={stateRefresh}
              />
            );
          }) : "00"}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
