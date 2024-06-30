import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import logger from "redux-logger";


export const store = configureStore({
    reducer: {
        counter: counterSlice,
    }, // Add your reducer here
    devTools: true, //যদি false দেই তাহলে website এ দেখাবে না।
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch