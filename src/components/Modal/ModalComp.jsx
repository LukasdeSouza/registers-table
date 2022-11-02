import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import DatePickerJsx from '../DatePicker/datePicker';
import { IconButton, Stack } from '@mui/material';

export default function ModalComp({ value, name, quantity, product, name1, quantity1, product1, onChangeName, onChangeName1, onChangeQuantity, onChangeQuantity1, onChangeProduct, onChangeProduct1, handleSave, handleClose, handleClickOpen, handleChange, open }) {

  const [registers, newRegisters] = React.useState(false)

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} sx={{ m: 2, backgroundColor: '#eb8201' }}>
        <AddIcon sx={{ mr: 1 }} /> Adicionar Produto
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <DialogTitle>Novos Registros</DialogTitle>
          <Button onClick={handleClose}><img src="https://img.icons8.com/3d-fluency/24/000000/close-window.png" /></Button>
        </Stack>
        <DialogContent>
          <DialogContentText>
            Insira quantos registros achar necessário
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Seu Nome"
            type="name"
            placeholder='José Inácio Neto etc'
            fullWidth
            variant="outlined"
            value={name}
            onChange={onChangeName}

          />
          <TextField
            autoFocus
            margin="dense"
            id="product"
            label="Produto"
            type="text"
            placeholder='Pêra, Banaba, Abacate, etc'
            fullWidth
            variant="outlined"
            value={product}
            onChange={onChangeProduct}
          />
          <DatePickerJsx value={value} handleChange={handleChange} />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Quantidade de Produtos"
            type="Number"
            placeholder='Quantidade do Produto que está registrando'
            fullWidth
            variant="outlined"
            value={quantity}
            onChange={onChangeQuantity}
          />
          {registers === true ?
            <>
              <TextField autoFocus margin='dense' label='Seu Nome' type='text' fullWidth variant='outlined' value={name1} onChange={onChangeName1} />
              <TextField autoFocus margin='dense' label='Produto' type='text' fullWidth variant='outlined' value={product1} onChange={onChangeProduct1} />
              <TextField autoFocus margin='dense' label='Quantidade' type='number' fullWidth variant='outlined' value={quantity1} onChange={onChangeQuantity1} />
            </>

            : ''}

        </DialogContent>
        <DialogActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'end' }}>
          <Button onClick={handleClose} sx={{ mr: 13, mb: 2 }}><ArrowBackIcon sx={{ mr: 1 }} />Voltar</Button>
          <IconButton onClick={() => newRegisters(true)} sx={{ mr: 2, mb: 2 }} variant='contained' ><AddIcon /></IconButton>
          <IconButton onClick={() => newRegisters(false)} sx={{ mr: 2, mb: 2 }} variant='contained' color='warning'><RemoveIcon /></IconButton>
          <Button variant='contained' onClick={handleSave} sx={{ mr: 2, mb: 2, backgroundColor: "#12934f" }}>Salvar<SaveIcon sx={{ ml: 1 }} /></Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
