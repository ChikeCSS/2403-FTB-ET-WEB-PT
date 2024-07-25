import { configureStore } from "@reduxjs/toolkit";
//transactions slice
import transactionReducer from "../features/transactions/transactionsSlice.js";

// TODO: Configure the store to use the reducer from the transactions slice.
export const store = configureStore({
    reducer: {
      transactions: transactionReducer,
    },
  });