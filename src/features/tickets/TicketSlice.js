import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import ticketservice from "./TicketService"

const initialState = {
    tickets : [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
    sticket: [],
    note:[]
}

const ticketSlice =  createSlice({
    name: "ticket",
    initialState,
    reducers:{
     
    },
    extraReducers: (builder) => {
        builder
        .addCase(getallticket.pending,(state)=>{
            state.isLoading= true,
            state.isError= false,
            state.isSuccess= false,
            state.message = ""
        })
        .addCase(getallticket.fulfilled,(state,action)=>{
            state.tickets = action.payload
            state.isLoading= false,
            state.isError= false,
            state.isSuccess= true,
            state.message = ""
        })
        .addCase(getallticket.rejected,(state,action)=>{
            state.tickets = [],
            state.isLoading= false,
            state.isError= true,
            state.isSuccess= false,
            state.message = action.payload
        })
        .addCase(getsingleticket.pending,(state)=>{
            state.isLoading= true,
            state.isError= false,
            state.isSuccess= false,
            state.message = ""
        })
        .addCase(getsingleticket.fulfilled,(state,action)=>{
            state.isLoading= false,
            state.isError= false,
            state.isSuccess= true,
            state.message = "",
            state.sticket = action.payload
        })
        .addCase(getsingleticket.rejected,(state,action)=>{
            state.isLoading= false,
            state.isError= true,
            state.isSuccess= false,
            state.message = action.payload
        })
        .addCase(createticket.pending,(state)=>{
            state.isLoading= true,
            state.isError= false,
            state.isSuccess= false,
            state.message = ""
        })
        .addCase(createticket.fulfilled,(state,action)=>{
            state.isLoading= false,
            state.isError= false,
            state.isSuccess= true,
            state.message = ""
        })
        .addCase(createticket.rejected,(state,action)=>{
            state.isLoading= false,
            state.isError= true,
            state.isSuccess= false,
            state.message = action.payload
        })
        .addCase(updateticket.pending,(state)=>{
            state.isLoading= true,
            state.isError= false,
            state.isSuccess= false,
            state.message = ""
        })
        .addCase(updateticket.fulfilled,(state,action)=>{
            state.isLoading= false,
            state.isError= false,
            state.isSuccess= true,
            state.message = ""
        })
        .addCase(updateticket.rejected,(state,action)=>{
            state.isLoading= false,
            state.isError= true,
            state.isSuccess= false,
            state.message = action.payload
        })
        .addCase(getnote.pending,(state)=>{
            state.isLoading= true,
            state.isError= false,
            state.isSuccess= false,
            state.message = ""
        })
        .addCase(getnote.fulfilled,(state,action)=>{
            state.isLoading= false,
            state.isError= false,
            state.isSuccess= true,
            state.message = "",
            state.note = action.payload
        })
        .addCase(getnote.rejected,(state,action)=>{
            state.isLoading= false,
            state.isError= true,
            state.isSuccess= false,
            state.message = action.payload
        })
        .addCase(createnote.pending,(state)=>{
            state.isLoading= true,
            state.isError= false,
            state.isSuccess= false,
            state.message = ""
        })
        .addCase(createnote.fulfilled,(state,action)=>{
            state.isLoading= false,
            state.isError= false,
            state.isSuccess= true,
            state.message = ""
            state.note = [ ...state.note,action.payload]

        })
        .addCase(createnote.rejected,(state,action)=>{
            state.isLoading= false,
            state.isError= true,
            state.isSuccess= false,
            state.message = action.payload
        })
    }
})

export default ticketSlice.reducer

export const {} = ticketSlice.actions

export const createticket = createAsyncThunk( "CREATE/TICKET" , async(formdata,thunkAPI)=> {
    
    try {
        const token = thunkAPI.getState().auth.user.token
        const data = await ticketservice.createticketservice(formdata,token)
        return data
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const getallticket = createAsyncThunk( "GET/TICKET" , async(_,thunkAPI)=> {
    try {
        const token = thunkAPI.getState().auth.user.token
        const data = await ticketservice.getallticketservice(token)
        return data
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
   
})
export const getsingleticket = createAsyncThunk( "GET/SINGLETICKET" , async(id,thunkAPI)=> {
    try {
        const token = thunkAPI.getState().auth.user.token
        const data = await ticketservice.getsingleticketservice(id,token)
        return data
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
   
})

export const updateticket = createAsyncThunk( "UPDATE/TICKET" , async(formdata,thunkAPI)=> {
    try {
        const token = thunkAPI.getState().auth.user.token
        const data = await ticketservice.updateticketservice(formdata._id, formdata ,token)
        return data
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})
export const createnote = createAsyncThunk( "CREATE/NOTE" , async(formdata,thunkAPI)=> {
    try {
        const token = thunkAPI.getState().auth.user.token
        const data = await ticketservice.createnoteservice(formdata,token)
        return data
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})
export const getnote = createAsyncThunk( "GET/NOTE" , async(id,thunkAPI)=> {
    try {
        const token = thunkAPI.getState().auth.user.token
        const data = await ticketservice.getallnoteservice(id ,token)
        return data
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})