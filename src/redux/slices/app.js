import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import {Chat_History} from '../../data';
import { faker } from "@faker-js/faker";
// define initial state
const initialState = {
    sidebar:{
        open:false,
        type: "CONTACT",// can be CONTACT, STARRED,SHARED
    },
    chatArray:Chat_History,
    name: faker.name.fullName(),
    avatar:faker.image.avatar(),
    scheduleOpen:false,
}

// create slice
const slice = createSlice({
    name:'app',
    initialState,
    reducers:{
        //Toggle sidebar
        toggleSidebar(state,action){
            state.sidebar.open = !state.sidebar.open
        },
        updateSidebarType(state, action){
            state.sidebar.type = action.payload.type;
        },
        updateChatArray(state,action){
            // console.log('action',action);
            state.chatArray = action.payload.chatArray
        },
        updateUserName(state,action){
            state.name = action.payload.name
        },
        updateUserAvatar(state,action){
            state.avatar = action.payload.avatar
        },
        changeSchedule(state,action){
            state.scheduleOpen = !state.scheduleOpen
        }
    }
});

// export reducer
export default slice.reducer;

//thunk functions - perform async operations
export function ToggleSidebar (){
    return async () =>{
        dispatch(slice.actions.toggleSidebar());
    }
}
export function ChangeSchedule (){
    return async () =>{
        dispatch(slice.actions.changeSchedule());
    }
}

export function UpdateSidebarType (type){
    return async () =>{
        dispatch(slice.actions.updateSidebarType({
            type
        }))
    }
}
export function UpdateChatArray (chatArray){
    return async () =>{
        dispatch(slice.actions.updateChatArray({
            chatArray
        }))
    }
}
export function UpdateUserName (name){
    return async () =>{
        dispatch(slice.actions.updateUserName({
            name:faker.name.fullName()
        }))
    }
}
export function UpdateUserAvatar (avatar){
    return async () =>{
        dispatch(slice.actions.updateUserAvatar({
            avatar:faker.image.avatar()
        }))
    }
}