import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import RootStoreContext from '../Store/RootStore'
import { useNavigate, matchPath } from 'react-router-dom'


const EditTable = () => {

  // const { tableStore } = React.useContext(RootStoreContext)
  const navigate = useNavigate();

  // const routeId1 = matchPath(`/edit/${tableStore.state.id}`, {
  //   path: `/edit/${tableStore.state.id}`,
  //   exact: true,
  //   strict: false
  // });

  return (
    <div>
      <Button onClick={() => navigate(-1)}>Voltar</Button>
      <Box>
        <Typography variant='subtitle'>Em construção</Typography>
        {/* {routeId1 &&
          <>
            <TextField>{tableStore.state.id}</TextField>
            <TextField>{tableStore.state.name}</TextField>
            <TextField>{tableStore.state.product}</TextField>
          </>}
        <TextField></TextField> */}
      </Box>
    </div>
  )
}

export default EditTable