import { combineReducers, createStore } from "redux";
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};
const initialStateCostumer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      // LATER
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
        loanPurpose: "",
      };

    default:
      return state;
  }
}
function customerReducer(state = initialStateCostumer, action) {
    switch(action.type){
        case "costumer/createCostumer":
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalID: action.payload.nationalID,
                createdAt: action.payload.createdAt,
            };
        case "costumer/updateName":
            return{...state, fullName: action.payload }
        default: 
        return state;
    }
}

const rootReducer = combineReducers({ 
    account: accountReducer,
    customer: customerReducer,
})
const store = createStore(rootReducer);


function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}
function payLoan() {
  return { type: "account/payLoan" };
}
store.dispatch(deposit(6000));

// Costumer 

function createCostumner(fullName, nationalID) {
  return {
    type: "costumer/createCostumer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}
function updateName(fullName) {
  return { type: "costumer/updateName", payload: fullName };
}



store.dispatch(createCostumner("Ailton Gulmaneli", "230443"))

console.log(store.getState());
