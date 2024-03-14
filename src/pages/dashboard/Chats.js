import { Box, IconButton, Stack, Typography, InputBase, Button, Divider, Avatar, Badge} from
  '@mui/material'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';
import {useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import {ChatList} from '../../data';
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search';
import ChatElement from '../../components/ChatElement';

const Chats = () => {
  const theme = useTheme();
  const [active,setActive] = useState(0)
  return (    
    <Box sx={{
      position: "relative", width: 330, 
      backgroundColor: theme.palette.mode === 'light'? "#F8FAFF" : theme.palette.background.paper,
      boxShadow: '0px 0px 2px rgba(0,0,0,0.25)'
    }}>
      <Stack p={1} spacing={3} sx={{height:"110vh"}}>
        <Stack direction="row" alignItems='center' justifyContent='space-between'>
          <Typography variant='h5'>
            Messages
          </Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>

        <Stack direction="row" sx={{ width: "100%", alignItems: 'center' }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#5955B3"/>
            </SearchIconWrapper>
            <StyledInputBase placeholder='Search...' inputProps={{ "aria-label": "search" }} />
          </Search>
          <IconButton 
              sx={{ 
                color: theme.palette.spero.main, // 使用自定义颜色
              }}
            >
              <BorderColorIcon />
            </IconButton>
        </Stack>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button
        onClick={()=>setActive(0)}
          sx={{
            width: '160px',
            height: '45px',
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
            marginRight: '2px', // adjust the space between buttons
            backgroundColor: active===0 ?theme.palette.spero.main: 'common.white', // replace with your color variable
            color: active===0 ?'common.white': '#5B6680',
            '&:hover': {
              backgroundColor: theme.palette.spero.main,
              color: 'common.white', 
            },
          }}
        >
          THERAPISTS
        </Button>
        <Button
           onClick={()=>setActive(1)}
          sx={{
            width: '160px',
            height: '45px',
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
            marginRight: '2px', // adjust the space between buttons
            backgroundColor: active===1 ? theme.palette.spero.main: 'common.white', // replace with your color variable
            color: active===1 ? 'common.white': '#5B6680',
            '&:hover': {
              backgroundColor: theme.palette.spero.main,
              color: 'common.white', 
            },
            
          }}
        >
          PATIENTS
        </Button>
      </Box>

          <Stack
            className='scrollbar'
            direction='column'
            sx={{
              flexGrow: 1,
              overflow: 'auto', // Changed from 'scroll' to 'auto'
              maxHeight: 'calc(100vh - [Subtract the height of other elements here]px)', // This will take the full height of the viewport
            }}
          >
            { active ===0 &&  <Stack spacing={0}>
              <Typography variant='subtitle2' sx={{color:"#676767"}}>
              THERAPISTS
              </Typography>
              {ChatList.filter((el)=> el.pinned).map((el)=>{
                return <ChatElement  {...el}/>
              })}
              
            </Stack>}
           
          { active===1 &&  <Stack spacing={0}>
            <Typography variant='subtitle2' sx={{color:"#676767"}}>
            PATIENTS
            </Typography>
            {ChatList.filter((el)=> !el.pinned).map((el)=>{
              return <ChatElement {...el}/>
            })}
            
          </Stack> }
         
        </Stack>
      </Stack>

    </Box>
  )
}

export default Chats