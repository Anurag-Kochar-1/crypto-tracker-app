import {  createTheme, MenuItem, Select, ThemeProvider } from '@mui/material'
import {useNavigate} from "react-router-dom"
import React from 'react'
import { CryptoState } from '../CryptoContext'

function Header() {

    const navigate = useNavigate()

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#F1F1F1"
            },
            type : "dark",
        }
    })

    const { currency, setCurrency } = CryptoState()

  return (
    <ThemeProvider theme={darkTheme}>

        <div className='w-full h-[10vh] bg-[#21209C] flex flex-row justify-between items-center px-2 
     sm:px-4
        '>


            <h1 className='text-lg font-bold text-[#FDB827] font-Montserrat hover:cursor-pointer'
            onClick={() => navigate('/')}
            > Krypto Tracker </h1>

            
            <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{ width: 100, height: 40,  backgroundColor: "#FDB827" }}
                value={currency}
                onChange ={(e) => setCurrency(e.target.value)}
                >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
            
            {/* <button onClick={() => console.log(currency)}> check  state </button> */}
            
        </div>
    </ThemeProvider>
  )
}

export default Header