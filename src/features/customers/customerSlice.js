import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalId) {
        return {
          payload: { fullName, nationalId, createdAt: new Date().toISOString() },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});
console.log(customerSlice)
export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;

// export default function customerReducer(state = initialState, action) {
//   switch (action.type) {
//     case "costumer/createCostumer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };
//     case "costumer/updateName":
//       return { ...state, fullName: action.payload };
//     default:
//       return state;
//   }
// }

// export function createCostumner(fullName, nationalID) {
//   return {
//     type: "costumer/createCostumer",
//     payload: { fullName, nationalID, createdAt: new Date().toISOString() },
//   };
// }
// export function updateName(fullName) {
//   return { type: "costumer/updateName", payload: fullName };
// }
