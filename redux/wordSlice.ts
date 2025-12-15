import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the product in the cart
export interface wordInterfaceSlice {
    id: number;
    title: string; 
    status:boolean;
    img:string ; 
    imganswer:string;
    description:string;
   
}

// Define the initial state as an array of CartProduct
const initialState: wordInterfaceSlice[] = [
        { id: 1, title: "pizza",status:false,img:'icons/qrcode.png',imganswer:'icons/qrgreen.png' ,  description: "Delicious cheese and tomato pizza." },
        { id: 2, title: "lasagna",status:false,img:'icons/qrcode.png' ,imganswer:'icons/qrgreen.png' ,  description: "Layered pasta with meat and cheese." },
        { id: 3, title: "pasta",status:false,img:'icons/qrcode.png' ,imganswer:'icons/qrgreen.png' ,  description: "pasta beef burger with toppings." },
        { id: 4, title: "Fish",status:false,img:'icons/qrcode.png' ,imganswer:'icons/qrgreen.png' ,  description: "Fresh fish cooked to perfection." },  
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
