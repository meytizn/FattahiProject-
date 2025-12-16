import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Function to get the initial state from localStorage
const getInitialState = (): number => {
    if (typeof window !== "undefined") {
        const storedValue = localStorage.getItem("counter");
        return storedValue ? Number(storedValue) : 0;
    }
    return 0; // Default value for SSR
};

// Define the initial state as a number
const initialState: number = getInitialState();

// Create the counter slice
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // Action to increment the counter
        increment: (state, action: PayloadAction<number>) => {
            const newState = state + action.payload; // Increment by the payload value
            localStorage.setItem("counter", newState.toString()); // Save to local storage
            return newState;
        },
        // Action to decrement the counter
        decrement: (state, action: PayloadAction<number>) => {
            const newState = state - action.payload; // Decrement by the payload value
            localStorage.setItem("counter", newState.toString()); // Save to local storage
            return newState;
        },
        // Action to reset the counter
        reset: () => {
            localStorage.removeItem("counter"); // Remove from local storage
            window.history.back()
            return 0; // Reset to initial state
        },
    },
});

// Export the actions
export default counterSlice
