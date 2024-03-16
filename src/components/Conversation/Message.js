import { Box, Stack } from '@mui/material'
import React, { useEffect } from 'react';
import {Chat_History} from '../../data'
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, TimeLine } from './MsgTypes';
import { useState } from 'react';
import { useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { UpdateChatArray } from '../../redux/slices/app';
const Message = ({menu,messageObj}) => {
  console.log('messageObj',messageObj);
  const dispatch = useDispatch()
  // dispatch(UpdateChatArray(Chat_History))
  const { chatArray } = useSelector((store)=>store.app);// access our store inside component
  console.log('chatArray',chatArray);
  const [chatList,setChatList] = useState(chatArray)
  const messageRef = useRef(null)
  useEffect(()=>
    {
      messageObj && setChatList([...chatList,messageObj]);
    //  chatBox.scrollTop = chatBox.scrollHeight;
    // console.log('chatBox--->',messageRef?.current);
    },
     [messageObj]
  )
  useEffect(()=>{
    if(chatArray.length===0){
      setChatList([])
    }
  },[chatArray])
  // useEffect(()=>{
    
  //   if(messageRef.current){
  //     messageRef.current.scrollTop = messageRef.current.scrollHeight
  //   }
  // },[chatList.length])
  return (
    <div ref={messageRef}>
      <Box p={3} >
          <Stack spacing={3}>
              {chatList.length > 0 && chatList.map((el)=>{
                  switch (el.type) {
                      case 'divider':
                        return <TimeLine el={el}/>
                          
                      case 'msg':
                          switch (el.subtype) {
                              case 'img':
                                return <MediaMsg el={el} menu={menu}/>
                              case 'doc':
                                  return <DocMsg el={el} menu={menu}/>
                                  
                              case 'link':
                                  return <LinkMsg el={el} menu={menu}/>
                              case 'reply':
                                  return <ReplyMsg el={el} menu={menu}/>
                          
                              default:
                                return <TextMsg el={el} menu={menu}/>
                          }
                          break;
                  
                      default:
                        return <></>;
                  }
              })}
          </Stack>
      </Box>
    </div>

  )
}

export default Message