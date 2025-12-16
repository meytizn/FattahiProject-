import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the product in the cart
export interface wordInterfaceSlice {
    id: number;
    title: string; 
    status:boolean;
    imganswer:string;
    sound:string;
    description:string;
   
}

// Define the initial state as an array of CartProduct
const initialState: wordInterfaceSlice[] = [
        { id: 1, title: "pizza",status:false,imganswer:'/images/vedavski1.jpg' , sound:'/audios/correct.mp3',  description: "the food that italians eat" },
        { id: 2, title: "Fish",status:false,imganswer:'/images/vedavski1.jpg' , sound:'/audios/correct.mp3', description: "the animal can swim in ocean" },  
        { id: 3, title: "lasagna",status:false,imganswer:'/images/vedavski1.jpg' , sound:'/audios/correct.mp3' ,   description: "Layered pasta with meat and cheese." },
        { id: 4, title: "pasta",status:false,imganswer:'/images/vedavski1.jpg' , sound:'/audios/correct.mp3', description: "pasta beef burger with toppings." },
    ];

// Create the cart slice
const wordSlice = createSlice({
    name: "words",
    initialState,
    reducers: {

        // addToCart: (state, action: PayloadAction<CartProductInterfaceSlice>) => {
        //     const oldProduct = state.find(product => product.id === action.payload.id);

        //     if (oldProduct) {
        //         oldProduct.quantity += 1;
        //     } else {
        //         state.push({ ...action.payload, quantity: 1 });
        //     }
        // },



        // removeFromCart: (state, action: PayloadAction<number>) => {
        //     return state.filter(product => product.id !== action.payload);
        // },




        // changeQuantityProduct: (state, action: PayloadAction<{ id: number; change: number }>) => {
        //     const { id, change } = action.payload;
        //     const existingProduct = state.find(product => product.id === id);

        //     if (existingProduct) {
        //         existingProduct.quantity += change;
        //     }
        // },


        // clearCart: () => initialState,



    },
});


export default wordSlice;
