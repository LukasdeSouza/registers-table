import React, { useContext, useState } from 'react';
import './App.css';
import ModalComp from './components/Modal/ModalComp';
import TableComp from './components/Table/TableComp';
import RootStoreContext from './Store/RootStore';
import dayjs from 'dayjs';
import { Box, Stack, Typography } from '@mui/material';

function App() {
  const { tableStore } = useContext(RootStoreContext)

  const [open, setOpen] = useState(false)

  const [name, setName] = useState([]);
  const [name1, setName1] = useState('');
  const [quantity, setQuantity] = useState([]);
  const [quantity1, setQuantity1] = useState('');
  const [product, setProduct] = useState([])
  const [product1, setProduct1] = useState('')

  const onChangeName = (e) => {
    setName(e.target.value)
    console.log(name)
  }
  const onChangeName1 = (e) => {
    setName1(e.target.value)
    console.log(name)
  }
  const onChangeQuantity = (e) => {
    setQuantity(e.target.value)
  }
  const onChangeQuantity1 = (e) => {
    setQuantity1(e.target.value)
  }
  const onChangeProduct = (e) => {
    setProduct(e.target.value)
  }
  const onChangeProduct1 = (e) => {
    setProduct1(e.target.value)
  }
  const handleSave = () => {
    tableStore.setState('id', Math.floor(Math.random() * 100))
    tableStore.setState('name', name)
    // tableStore.setState('date', value)
    tableStore.setState('product', product)
    tableStore.setState('quantity', quantity)
    tableStore.setState('id1', Math.floor(Math.random() * 100))
    tableStore.setState('name1', name1)
    tableStore.setState('product1', product1)
    tableStore.setState('quantity1', quantity1)
    alert(tableStore.state.name)

    if (name !== '' && quantity !== '') {
      alert('Registro criado com Sucesso')
      setOpen(false)
    }
    else {
      alert('Preencha todos os campos para salvar o registro')
    }
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
        <img src="https://img.icons8.com/fluency/48/000000/group-of-fruits.png" alt='' style={{ margin: '16px' }} />
        <Typography variant='subtitle1' fontWeight={'500'}>Fruits Company</Typography>
      </Box>
      <Typography variant='h5' sx={{ marginLeft: '16px' }}>Registros de Produtos</Typography>

      <ModalComp name={name} name1={name1} quantity={quantity} quantity1={quantity1} product={product} product1={product1} onChangeName={onChangeName} onChangeName1={onChangeName1} onChangeQuantity={onChangeQuantity} onChangeQuantity1={onChangeQuantity1}
        onChangeProduct={onChangeProduct} onChangeProduct1={onChangeProduct1} handleSave={handleSave} handleClose={handleClose} handleClickOpen={handleClickOpen} handleChange={handleChange} value={value} open={open} />
      {tableStore.state.name !== '' ? <TableComp /> : <Typography variant='subtitle2' textAlign={'center'}> Nenhum Registro Encontrado</Typography>}
    </React.Fragment>
  );
}

export default App;
