import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RootStoreContext from '../../Store/RootStore';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function TableComp() {

  const { tableStore } = React.useContext(RootStoreContext)
  const navigate = useNavigate();

  const [deleteTrigger, setDeleteTrigger] = React.useState(false)
  const [showAll, setShowAll] = React.useState(true)

  const deleteAll = () => {
    setShowAll(false)
    setDeleteTrigger(false)
  }


  const currentDate = new Date();
  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;

  return (
    <React.Fragment>
      {showAll && <TableContainer component={Paper} sx={{ boxShadow: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
          <TableHead>
            <TableRow>
              <TableCell><img src="https://img.icons8.com/3d-fluency/32/000000/document.png" alt='Id' /></TableCell>
              <TableCell align="center"><img src="https://img.icons8.com/3d-fluency/36/000000/user-male.png" alt='Nome' /></TableCell>
              <TableCell align="center"><img src="https://img.icons8.com/3d-fluency/36/000000/grapes.png" alt='Produto' /></TableCell>
              <TableCell align="center"><img src="https://img.icons8.com/3d-fluency/36/000000/coins.png" alt='Quantidade' /></TableCell>
              <TableCell align="center"><img src="https://img.icons8.com/3d-fluency/36/000000/edit.png" alt='Editar' /></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {tableStore.state.id}
              </TableCell>
              <TableCell align="center">{tableStore.state.name}</TableCell>
              <TableCell align="center">{tableStore.state.product}</TableCell>
              <TableCell align="center">{tableStore.state.quantity}</TableCell>
              <TableCell align="center" sx={{ cursor: "pointer" }} onClick={() => navigate(`/edit/${tableStore.state.id}`)}>
                <img src="https://img.icons8.com/ios-filled/20/000000/edit--v1.png" alt='Editar' />
              </TableCell>
            </TableRow>

            {tableStore.state.name1 !== '' ? <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {tableStore.state.id1}
              </TableCell>
              <TableCell align="center">{tableStore.state.name1}</TableCell>
              <TableCell align="center">{tableStore.state.product1}</TableCell>
              <TableCell align="center">{tableStore.state.quantity1}</TableCell>
              <TableCell align="center" sx={{ cursor: "pointer" }} onClick={() => navigate(`/edit/${tableStore.state.id1}`)}>
                <img src="https://img.icons8.com/ios-filled/20/000000/edit--v1.png" alt='Editar' />
              </TableCell>
            </TableRow> : ''}

            {tableStore.state.name2 !== '' ? <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {tableStore.state.id2}
              </TableCell>
              <TableCell align="center">{tableStore.state.name2}</TableCell>
              <TableCell align="center">{tableStore.state.product2}</TableCell>
              <TableCell align="center">{tableStore.state.quantity2}</TableCell>
              <TableCell align="center" sx={{ cursor: "pointer" }} onClick={() => navigate(`/edit/${tableStore.state.id2}`)}>
                <img src="https://img.icons8.com/ios-filled/20/000000/edit--v1.png" alt='Editar' />
              </TableCell>
            </TableRow> : ''}

          </TableBody>
        </Table>
      </TableContainer>}

      {/* <TableContainer component={Paper} sx={{ boxShadow: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
          <TableHead>
            <TableRow>
              <TableCell><img src="https://img.icons8.com/3d-fluency/32/000000/document.png" alt='Id' /></TableCell>
              <TableCell align="center"><img src="https://img.icons8.com/3d-fluency/36/000000/user-male.png" alt='Nome' /></TableCell>
              <TableCell align="center"><img src="https://img.icons8.com/3d-fluency/36/000000/grapes.png" alt='Produto' /></TableCell>
              <TableCell align="center"><img src="https://img.icons8.com/3d-fluency/36/000000/coins.png" alt='Quantidade' /></TableCell>
              <TableCell align="center"><img src="https://img.icons8.com/3d-fluency/36/000000/edit.png" alt='Editar' /></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {tableStore.state.id}
              </TableCell>
              <TableCell align="center">{tableStore.state.name}</TableCell>
              <TableCell align="center">{tableStore.state.product}</TableCell>
              <TableCell align="center">{tableStore.state.quantity}</TableCell>
              <TableCell align="center" sx={{ cursor: "pointer" }} onClick={() => navigate(`/edit/${tableStore.state.id}`)}>
                <img src="https://img.icons8.com/ios-filled/20/000000/edit--v1.png" alt='Editar' />
              </TableCell>
            </TableRow>

            {tableStore.state.name1 !== '' ? <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {tableStore.state.id1}
              </TableCell>
              <TableCell align="center">{tableStore.state.name1}</TableCell>
              <TableCell align="center">{tableStore.state.product1}</TableCell>
              <TableCell align="center">{tableStore.state.quantity1}</TableCell>
              <TableCell align="center" sx={{ cursor: "pointer" }} onClick={() => navigate(`/edit/${tableStore.state.id1}`)}>
                <img src="https://img.icons8.com/ios-filled/20/000000/edit--v1.png" alt='Editar' />
              </TableCell>
            </TableRow> : ''}

            {tableStore.state.name2 !== '' ? <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {tableStore.state.id2}
              </TableCell>
              <TableCell align="center">{tableStore.state.name2}</TableCell>
              <TableCell align="center">{tableStore.state.product2}</TableCell>
              <TableCell align="center">{tableStore.state.quantity2}</TableCell>
              <TableCell align="center" sx={{ cursor: "pointer" }} onClick={() => navigate(`/edit/${tableStore.state.id2}`)}>
                <img src="https://img.icons8.com/ios-filled/20/000000/edit--v1.png" alt='Editar' />
              </TableCell>
            </TableRow> : ''}

          </TableBody>
        </Table>
      </TableContainer> */}

      {deleteTrigger === false &&
        <Button variant='contained'
          sx={{ m: 2, backgroundColor: '#6bacdc' }}
          onClick={() => setDeleteTrigger(true)}>
          <img src="https://img.icons8.com/3d-fluency/30/000000/trash.png" alt='Deletar'
            style={{ marginRight: '8px' }} />
          <Typography variant='subtitle2'> Apagar Todos os Registros</Typography>
        </Button>}

      {deleteTrigger &&
        <Button variant='contained'
          sx={{ m: 2, backgroundColor: '#fd2d3d' }}
          onClick={() => deleteAll()}>
          Realmente Deseja Excluir ?
        </Button>}

    </React.Fragment>
  );
}
