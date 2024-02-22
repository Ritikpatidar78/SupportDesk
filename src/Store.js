import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/UserSlice"
import ticketReducer from "./features/tickets/TicketSlice"


const store = configureStore({
    reducer: {
        auth: authReducer,
        ticket: ticketReducer,
    }
})

export default store