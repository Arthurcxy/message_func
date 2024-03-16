import { Avatar, Box, Typography,IconButton, Divider,Stack, } from '@mui/material'
import {MagnifyingGlass, Phone,VideoCamera } from 'phosphor-react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useState } from 'react';
import { useTheme } from "@mui/material/styles";
import { faker } from '@faker-js/faker';
import StyledBadge from '../StyledBadge';
import { ToggleSidebar } from '../../redux/slices/app';
import { useDispatch,useSelector } from 'react-redux';
import { UpdateUserName,UpdateUserAvatar } from '../../redux/slices/app';
const Header = () => {
  const dispatch = useDispatch();
  const {name,avatar} = useSelector((store)=>store.app);// access our store inside component
  const theme = useTheme();
//   const [name,setNamr] = useState(faker.name.fullName())
//   const [avatar,setAvatar] = useState(faker.image.avatar())
  return (
    <Box p={2} sx={{ width:'100%', backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper, boxShadow:'0px 0px 2px rgba(0,0,0,0.25)'}}>
    <Stack alignItems={'center'} direction='row' justifyContent={'space-between'}
    sx={{width:'100%', height:'100%'}}>
        <Stack  direction={'row'} spacing={2}>
            <Box>
                <StyledBadge  overlap="circular"
                anchorOrigin={{ // position
                    vertical: "bottom",
                    horizontal: "right",
                }}
                variant="dot">
                    <Avatar alt={name} src={avatar}/>
                </StyledBadge>
                
            </Box>
            <Stack spacing={0.2}>
                    <Typography variant='subtitle2'>
                        {name}
                    </Typography>
                    <Typography variant='caption'>
                        Online
                    </Typography>
                </Stack>
        </Stack>
        <Stack direction='row' alignItems='center' spacing={3}>
            <IconButton>
                <MagnifyingGlass/>
            </IconButton>
            <Divider orientation='vertical' flexItem/>
            <IconButton onClick={()=>{
            dispatch(ToggleSidebar());
        }}>
                <MoreVertIcon/>
            </IconButton>
        </Stack>
    </Stack>
</Box>
  )
}

export default Header