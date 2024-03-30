import { Avatar, Box, Typography, IconButton, Divider, Stack } from '@mui/material';
import { MagnifyingGlass, Phone, VideoCamera } from 'phosphor-react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useRef, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { faker } from '@faker-js/faker';
import StyledBadge from '../StyledBadge';
import { ToggleSidebar } from '../../redux/slices/app';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateUserName, UpdateUserAvatar,ChangeSchedule } from '../../redux/slices/app';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleModel from '../scheduleModel';
const Header = () => {
    const dispatch = useDispatch();
    const { name, avatar } = useSelector(store => store.app); // access our store inside component
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const scheduleRef =useRef(null);
    //   const [name,setNamr] = useState(faker.name.fullName())
    //   const [avatar,setAvatar] = useState(faker.image.avatar())
    return (
        <Box
            p={2}
            sx={{
                width: '100%',
                backgroundColor:
                    theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper,
                boxShadow: '0px 0px 2px rgba(0,0,0,0.25)'
            }}>
            <Stack
                alignItems={'center'}
                direction='row'
                justifyContent={'space-between'}
                sx={{ width: '100%', height: '100%' }}>
                <Stack
                    direction={'row'}
                    spacing={2}>
                    <Box>
                        <StyledBadge
                            overlap='circular'
                            anchorOrigin={{
                                // position
                                vertical: 'bottom',
                                horizontal: 'right'
                            }}
                            variant='dot'>
                            <Avatar
                                alt={name}
                                src={avatar}
                            />
                        </StyledBadge>
                    </Box>
                    <Stack spacing={0.2}>
                        <Typography variant='subtitle2'>{name}</Typography>
                        <Typography variant='caption'>Online</Typography>
                    </Stack>
                </Stack>
                <Stack
                    direction='row'
                    alignItems='center'
                    spacing={3}>
                    {/* <IconButton>
                        <MagnifyingGlass />
                    </IconButton> */}
                    <div
                        style={{
                            backgroundColor: '#E6F8EF',
                            color: '#00BB61 ',
                            padding: '5px 8px',
                            display: 'flex',
                            cursor:'pointer'
                        }}
                        onClick={() => scheduleRef?.current?.changeOpen()}>
                        <CalendarMonthIcon
                            style={{ fontSize: '24px', marginRight: '5px' }}></CalendarMonthIcon>
                        <div>Schedule oppointment</div>
                    </div>
                    <Divider
                        orientation='vertical'
                        flexItem
                    />
                    <IconButton
                        onClick={() => {
                            dispatch(ToggleSidebar());
                        }}>
                        <MoreVertIcon />
                    </IconButton>
                </Stack>
            </Stack>
            <ScheduleModel open={open} ref={scheduleRef}></ScheduleModel>
        </Box>
    );
};

export default Header;
