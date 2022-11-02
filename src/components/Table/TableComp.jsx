import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RootStoreContext from '../../Store/RootStore';
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

export default function TableComp() {

  const { tableStore } = React.useContext(RootStoreContext)

  const currentDate = new Date();
  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
  const currentYear = currentDate.getFullYear();

  const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;

  return (
    <React.Fragment>
      <TableContainer component={Paper} sx={{ boxShadow: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Nome</TableCell>
              <TableCell align="right">Data</TableCell>
              <TableCell align="right">Horário</TableCell>
              <TableCell align="right">Produto</TableCell>
              <TableCell align="right">Quantidade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {tableStore.state.id}
              </TableCell>
              <TableCell align="right">{tableStore.state.name}</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">{tableStore.state.product}</TableCell>
              <TableCell align="right">{tableStore.state.quantity}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {tableStore.state.id1}
              </TableCell>
              <TableCell align="right">{tableStore.state.name1}</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">{tableStore.state.product1}</TableCell>
              <TableCell align="right">{tableStore.state.quantity1}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant='contained' sx={{ m: 2, backgroundColor: "#12934f" }}><SaveIcon sx={{ mr: 1 }} />Salvar Registros</Button>
    </React.Fragment>
  );
}
