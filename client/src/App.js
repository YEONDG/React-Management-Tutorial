
import Customer from "./components/Customer";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './App.module.css';



  const customers = [
    {
      id: 1,
      image: "https://placeimg.com/64/64/any",
      name: "홍길동",
      birthday: "961222",
      gender: "남자",
      job: "대학생",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/1",
      name: "연동근",
      birthday: "921212",
      gender: "남자",
      job: "취준생",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/2",
      name: "데브리",
      birthday: "980422",
      gender: "여자",
      job: "대학원생",
    },
  ];

function App() {
 
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
         {customers.map(c => {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>)})}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
