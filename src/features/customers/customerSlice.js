const initialStateCostumer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

export default function customerReducer(state = initialStateCostumer, action) {
  switch (action.type) {
    case "costumer/createCostumer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "costumer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

export function createCostumner(fullName, nationalID) {
  return {
    type: "costumer/createCostumer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}
export function updateName(fullName) {
  return { type: "costumer/updateName", payload: fullName };
}

// store.dispatch(createCostumner("Ailton Gulmaneli", "230443"));

// console.log(store.getState());
