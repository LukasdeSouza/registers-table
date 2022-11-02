import React, { useContext, useState } from 'react';
import './App.css';
import ModalComp from './components/Modal/ModalComp';
import TableComp from './components/Table/TableComp';
import RootStoreContext from './Store/RootStore';
import dayjs from 'dayjs';
import { Box, Stack, Typography } from '@mui/material';
import Footer from './components/Footer/Footer';

function App() {
  const { tableStore } = useContext(RootStoreContext)

  const [open, setOpen] = useState(false)

  const [name, setName] = useState('');
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [quantity, setQuantity] = useState('');
  const [quantity1, setQuantity1] = useState('');
  const [quantity2, setQuantity2] = useState('');
  const [product, setProduct] = useState('')
  const [product1, setProduct1] = useState('')
  const [product2, setProduct2] = useState('')

  const onChangeName = (e) => {
    setName(e.target.value)
    console.log(name)
  }
  const onChangeName1 = (e) => {
    setName1(e.target.value)
    console.log(name)
  }
  const onChangeName2 = (e) => {
    setName2(e.target.value)
    console.log(name)
  }
  const onChangeQuantity = (e) => {
    setQuantity(e.target.value)
  }
  const onChangeQuantity1 = (e) => {
    setQuantity1(e.target.value)
  }
  const onChangeQuantity2 = (e) => {
    setQuantity2(e.target.value)
  }
  const onChangeProduct = (e) => {
    setProduct(e.target.value)
  }
  const onChangeProduct1 = (e) => {
    setProduct1(e.target.value)
  }
  const onChangeProduct2 = (e) => {
    setProduct2(e.target.value)
  }
  const handleSave = () => {
    tableStore.setState('id', Math.floor(Math.random() * 100))
    tableStore.setState('id1', Math.floor(Math.random() * 100))
    tableStore.setState('id2', Math.floor(Math.random() * 100))
    tableStore.setState('name', name)
    tableStore.setState('name1', name1)
    tableStore.setState('name2', name2)
    tableStore.setState('product', product)
    tableStore.setState('product1', product1)
    tableStore.setState('product2', product2)
    tableStore.setState('quantity', quantity)
    tableStore.setState('quantity1', quantity1)
    tableStore.setState('quantity2', quantity2)

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
      <Box display={'flex'} flexDirection={'row'} alignItems={'center'} marginBottom={8}>
        <img src="https://img.icons8.com/3d-fluency/48/000000/shop.png" alt='Logo' style={{ marginLeft: '16px' }} />
        <Typography variant='h6' fontWeight={'500'} sx={{ marginLeft: '16px' }}>Fruits Company</Typography>
      </Box>
      <Typography variant='h5' sx={{ marginLeft: '16px' }}>Registros de Produtos</Typography>

      <ModalComp name={name} name1={name1} name2={name2} quantity={quantity} quantity1={quantity1} quantity2={quantity2} product={product} product1={product1} product2={product2} onChangeName={onChangeName} onChangeName1={onChangeName1} onChangeName2={onChangeName2} onChangeQuantity={onChangeQuantity} onChangeQuantity1={onChangeQuantity1} onChangeQuantity2={onChangeQuantity2}
        onChangeProduct={onChangeProduct} onChangeProduct1={onChangeProduct1} onChangeProduct2={onChangeProduct2} handleSave={handleSave} handleClose={handleClose} handleClickOpen={handleClickOpen} handleChange={handleChange} value={value} open={open} />
      {tableStore.state.name !== '' ? <TableComp /> : <Typography variant='subtitle2' textAlign={'center'}> Desculpe! Nenhum Registro foi Encontrado.</Typography>}
      <Footer />
    </React.Fragment>
  );
}

export default App;
