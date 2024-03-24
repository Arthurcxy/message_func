import {  Box, Stack} from '@mui/material';
import React, { useRef, useState } from 'react';
import { useTheme } from "@mui/material/styles";
import Header from './Header';
import Footer from './Footer';
import Message from './Message';

const Conversation = (props) => {
  console.log('props----->',props);
    const theme = useTheme();
    // const message = useRef()
    const [messageObj,setMessageObj] = useState()
    const pushMessage = (value)=>{

    }
    const toMessage = (value)=>{
      setMessageObj(
        {
          type: "msg",
          message: value,
          incoming: false,
          outgoing: true,
        },
      )
    }
  return (
    <Stack height={'100%'} maxHeight={'100vh'} width={'auto'}>

        {/* Chat header */}
        <Header/>
        {/* Msg */}
        <Box className='scrollbar' width={"100%"} sx={{flexGrow:1, height:'100%', overflowY:'scroll'}}>
        <Message menu={true}  messageObj={messageObj}  />
        </Box>
        {/* Chat footer */}
       <Footer toMessage={toMessage}/>
    </Stack>
  )
}

export default Conversation