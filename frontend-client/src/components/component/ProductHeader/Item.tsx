
import React from 'react'
import { Paper, Button } from '@mui/material'

interface props{
    item:string
}



export const Item = ({item}:props) => {
    
  return (
    <Paper>
        <img src={item} alt="slow" style={{width:"100%"}}/>
    </Paper>
  )
}
