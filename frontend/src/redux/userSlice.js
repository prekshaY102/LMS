// Create a slice (a small part of Redux store)
import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    // Name of this slice (used internally by Redux)
    name:"user",
    // Initial state (default data when app starts)
    initialState:{
        userData: null //Initially no user data (null means empty)

    },
    // Reducers = functions that update the state
    reducers:{
        // Action function to set/update user data
        setUserData:(state, action)=>{
            // action.payload contains the data we send
            // We update userData with new data
            state.userData =action.payload
        }
    }

})
// Export action so we can use it inside components
export const {setUserData} = userSlice.actions
// Export reducer to connect it inside store.js
export default userSlice.reducer