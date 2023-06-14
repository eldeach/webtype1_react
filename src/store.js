// ======================================================================================== [Import Libaray]
import { configureStore, createSlice } from '@reduxjs/toolkit' // redux 기본 라이브러리

let msgCodeBook = createSlice({
    name : 'msgCodeBook',
    initialState : {},
    reducers:{
        setMsgCodeBook(state,targetRow){
          return state = targetRow.payload
        }
      }
})

export let {setMsgCodeBook}=msgCodeBook.actions

export default configureStore({
  reducer: {
    msgCodeBook:msgCodeBook.reducer,
  }
}) 