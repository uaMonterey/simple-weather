import {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {InputAdornment} from "@mui/material";


export default function BasicTextFields({onSubmit}) {
    const [searchQuery, setSearchQuery] = useState('')
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
                onSubmit(e, searchQuery)
                setSearchQuery('')
            }}
        >
            <TextField id="standard-basic"
                       label="Enter the city"
                       variant="standard"
                       onChange={(e) => setSearchQuery(e.target.value)}
                       value={searchQuery}
                       placeholder='For example: Los Angeles'
                       InputProps={{
                           endAdornment:
                               <InputAdornment position='end'>
                                   🌤️
                               </InputAdornment>
                       }}
                // helperText='follow the white rabbit...'
                // inputProps={{
                // readOnly: true
                // }}

            />
        </Box>
    );
}