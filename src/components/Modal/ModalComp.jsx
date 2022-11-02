import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { InputAdornment, Stack } from '@mui/material';

export default function ModalComp({ name, quantity, product, name1, quantity1, product1, onChangeName, onChangeName1, onChangeQuantity, onChangeQuantity1, onChangeProduct, onChangeProduct1, handleSave, handleClose, handleClickOpen, open }) {

  const [registers, newRegisters] = React.useState(false)

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Criar Registro
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Novos Registros</DialogTitle>
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
          <Button onClick={handleClose} sx={{ mr: 2, mb: 2 }}>Voltar</Button>
          <Button onClick={() => newRegisters(true)} sx={{ mr: 2, mb: 2 }} variant='contained' >Adicionar +</Button>
          <Button onClick={() => newRegisters(false)} sx={{ mr: 2, mb: 2 }} variant='contained' color='warning'>Reduzir -</Button>
          <Button variant='contained' onClick={handleSave} sx={{ mr: 2, mb: 2 }} color='success'>Salvar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
