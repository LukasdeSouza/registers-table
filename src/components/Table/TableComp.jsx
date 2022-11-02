import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RootStoreContext from '../../Store/RootStore';
import { Button, IconButton, Typography } from '@mui/material';
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
              <TableCell><img src="https://img.icons8.com/3d-fluency/32/000000/document.png" alt='Id' /></TableCell>
              <TableCell align="right"><img src="https://img.icons8.com/3d-fluency/36/000000/user-male.png" alt='Nome' /></TableCell>
              <TableCell align="right"><img src="https://img.icons8.com/emoji/36/000000/spiral-calendar-emoji.png" alt='Data' /></TableCell>
              <TableCell align="right"><img src="https://img.icons8.com/3d-fluency/36/000000/clock.png" alt='Horário' /></TableCell>
              <TableCell align="right"><img src="https://img.icons8.com/3d-fluency/36/000000/grapes.png" alt='Produto' /></TableCell>
              <TableCell align="right"><img src="https://img.icons8.com/3d-fluency/36/000000/coins.png" alt='Quantidade' /></TableCell>
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
      <Button variant='contained' sx={{ m: 2, backgroundColor: '#6bacdc' }}><img src="https://img.icons8.com/3d-fluency/36/000000/save.png" style={{ marginRight: '8px' }} />
        <Typography variant='subtitle2'>Salvar Todos os Registros</Typography>
      </Button>

    </React.Fragment>
  );
}
