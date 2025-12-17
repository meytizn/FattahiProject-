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
  { id: 1, title: "Pizza", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "a famous Italian food with cheese" },
  { id: 2, title: "Fish", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "an animal that lives in water" },
  { id: 3, title: "Apple", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "a red or green fruit" },
  { id: 4, title: "Dog", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "a loyal animal that barks" },
  { id: 5, title: "Cat", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "a small animal that says meow" },
  { id: 6, title: "Car", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "a vehicle with four wheels" },
  { id: 7, title: "Sun", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "the star that gives us light" },
  { id: 8, title: "Moon", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "it shines in the night sky" },
  { id: 9, title: "Book", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "you read it to learn stories" },
  { id: 10, title: "Chair", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "you sit on it" },
  { id: 11, title: "Table", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "you eat food on it" },
  { id: 12, title: "Phone", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "you use it to call people" },
//   { id: 13, title: "Computer", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "a machine for work and games" },
//   { id: 14, title: "Clock", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "it shows the time" },
//   { id: 15, title: "Shoes", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "you wear them on your feet" },
//   { id: 16, title: "Hat", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "you wear it on your head" },
//   { id: 17, title: "Tree", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "a tall plant with leaves" },
//   { id: 18, title: "Flower", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "a colorful plant that smells nice" },
//   { id: 19, title: "Bird", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "an animal that can fly" },
//   { id: 20, title: "Milk", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "a white drink from cows" },
//   { id: 21, title: "Bread", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "a food made from flour" },
//   { id: 22, title: "Egg", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "it comes from a chicken" },
//   { id: 23, title: "Cheese", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "a food made from milk" },
//   { id: 24, title: "River", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "a long stream of water" },
//   { id: 25, title: "Mountain", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "a very high landform" },
//   { id: 26, title: "Beach", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "sand near the ocean" },
//   { id: 27, title: "Rain", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "water falling from the sky" },
//   { id: 28, title: "Snow", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "white and cold weather" },
//   { id: 29, title: "Fire", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "it is hot and bright" },
//   { id: 30, title: "Ice", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "frozen water" },
//   { id: 31, title: "School", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "a place to learn" },
//   { id: 32, title: "Teacher", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "a person who teaches students" },
//   { id: 33, title: "Doctor", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "a person who helps sick people" },
//   { id: 34, title: "Hospital", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "a place for medical care" },
//   { id: 35, title: "Police", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "they keep people safe" },
//   { id: 36, title: "Firefighter", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "they stop fires" },
//   { id: 37, title: "Bus", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "a big vehicle for many people" },
//   { id: 38, title: "Train", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "it runs on tracks" },
//   { id: 39, title: "Airplane", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "it flies in the sky" },
//   { id: 40, title: "Airport", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "planes take off here" },
//   { id: 41, title: "Key", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "it opens a door" },
//   { id: 42, title: "Door", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "you enter a room through it" },
//   { id: 43, title: "Window", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "you can see outside through it" },
//   { id: 44, title: "Bed", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "you sleep on it" },
//   { id: 45, title: "Pillow", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "you rest your head on it" },
//   { id: 46, title: "Blanket", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "it keeps you warm" },
//   { id: 47, title: "Bag", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "you carry things in it" },
//   { id: 48, title: "Wallet", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "you keep money in it" },
//   { id: 49, title: "Money", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "used to buy things" },
//   { id: 50, title: "Store", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "a place to buy items" },
//   { id: 51, title: "Market", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "people buy food here" },
//   { id: 52, title: "Chef", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "a person who cooks food" },
//   { id: 53, title: "Kitchen", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "a room for cooking" },
//   { id: 54, title: "Spoon", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "used to eat soup" },
//   { id: 55, title: "Fork", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "used to eat food" },
//   { id: 56, title: "Knife", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "used to cut food" },
//   { id: 57, title: "Plate", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "food is served on it" },
//   { id: 58, title: "Cup", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "used for drinking" },
//   { id: 59, title: "Water", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "a clear drink humans need" },
//   { id: 60, title: "Juice", status: false, imganswer: "/images/vedavski1.jpg", sound: "/audios/correct.mp3", description: "a drink made from fruits" }
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
