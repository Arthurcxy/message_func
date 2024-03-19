import { Box, Fab, IconButton, InputAdornment, Stack, TextField, Tooltip } from '@mui/material';
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { styled, useTheme } from "@mui/material/styles";
import { LinkSimple, PaperPlaneTilt, Smiley,Camera, File, Image, Sticker, User } from 'phosphor-react';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import SendIcon from '@mui/icons-material/Send';
const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
      paddingTop: '12px',
      paddingBottom: '12px',
    }  
  }));

  const Actions = [
    {
        color:'#5955B3',
        icon: <Image size={24}/>,
        y:102,
        title:'Photo/Video'
    },
    {
        color:'#5955B3',
        icon: <Sticker size={24}/>,
        y:172,
        title:'Stickers'
    },
    {
        color:'#5955B3',
        icon: <Camera size={24}/>,
        y:242,
        title:'Image'
    },
    {
        color:'#5955B3',
        icon: <File size={24}/>,
        y:312,
        title:'Document'
    },
    {
        color:'#5955B3',
        icon: <User size={24}/>,
        y:382,
        title:'Contact'
    }
  ];

const ChatInput = forwardRef( ({setMessageObj},ref) =>{
    const [openAction, setOpenAction] = useState(false);
    const [inputValue2, setInputValue2] = useState();
    const textfieldRef = useRef(null)
    useImperativeHandle(ref,()=>({
        clear:(val)=>{
           setInputValue2(val)
       },
       changeOpen:(val)=>{
        setOpenAction(val)
       }
   }))
 
    return (
        <StyledInput fullWidth placeholder='Write a message...' variant='filled' ref={textfieldRef}  value={inputValue2}
            onChange={(e) => {
                setMessageObj(e.target.value);
                setInputValue2(e.target.value)
            }}
            InputProps={{
            disableUnderline: true,
            startAdornment: 
            <Stack sx={{width:'max-content'}}>
                <Stack sx={{position:'relative', display: openAction ? 'inline-block' : 'none'}}>
                    {Actions.map((el)=>(
                        <Tooltip placement='right' title={el.title}>
                            <Fab sx={{position:'absolute', top: -el.y, backgroundColor: el.color, '&:hover': {backgroundColor: el.color}}}>
                                {el.icon}
                            </Fab>
                        </Tooltip>
                      
                    ))}
                </Stack>
                {/* <InputAdornment>
                    <IconButton onClick={()=>{
                        setOpenAction((prev)=>!prev)
                    }}>
                        <LinkSimple/>
                    </IconButton>
                </InputAdornment> */}
            </Stack>
            ,
            endAdornment: <InputAdornment>
            {/* <IconButton onClick={()=>{
                setOpenPicker((prev)=> !prev);
            }}>
                <Smiley/>
            </IconButton> */}
            </InputAdornment>
        }}/>
    )
})

const Footer = (props) => {
    const theme = useTheme();
    const chatRef = useRef(null)
    // const [messageObj, setMessageObj] = useState(false);
    const [openPicker, setOpenPicker] = useState(false);
    const [inputValue,setInputValue] = useState()
    const setMessageObj = (value)=>{
        console.log('value',value);
        setInputValue(value)
    }
    const sendMessage = ()=>{
        props?.toMessage(inputValue);
        inputValue && chatRef?.current?.clear('')
        console.log('chatref',chatRef);
    }
  return (
    <Box p={2} sx={{ width:'100%', backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' :
     theme.palette.background.paper, boxShadow:'0px 0px 2px rgba(0,0,0,0.25)'}}>
    <Stack direction='row' alignItems={'center'} spacing={3}>

        <Stack sx={{width:'100%'}}> 
             {/* Chat Input */}
            <Box sx={{ display: openPicker ? 'inline' : 'none' , zIndex:10, position:'fixed',bottom:81, right:100}}>
                <Picker theme={theme.palette.mode} data={data} onEmojiSelect={console.log}/>
            </Box> 
            <ChatInput setMessageObj={setMessageObj} ref={chatRef}  />
        </Stack>
        <InputAdornment>
            <IconButton onClick={()=>{
                chatRef?.current?.changeOpen((prev)=>!prev)
            }}>
                <LinkSimple/>
            </IconButton>
        </InputAdornment>
        <Box onClick={()=>sendMessage()} sx={{height:48, width: 48,  
        borderRadius: 1.5}}>
            <Stack sx={{height:'100%', width:'100%', alignItems:'center', justifyContent:'center'}}>
                <IconButton>
                    {/* <PaperPlaneTilt color='#fff'/> */}
                    <SendIcon style={{fontSize:'24px'}}></SendIcon>
                </IconButton>
            </Stack>
            
        </Box>
    </Stack>
</Box>
  )
}

export default Footer