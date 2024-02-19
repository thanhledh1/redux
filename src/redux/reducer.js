import { NAP_TIEN, RUT_TIEN } from "./action";
// Khai bao gia tri khoi tao
const initialState = {
    deposit_amount: 0,
    withdraw_amount: 0
};
const rootReducer = (state = initialState, action) => {
    /*
    action = {
        type: DEPOSIT,
        payload: 10
    }
    */ 
   switch (action.type) {
    case NAP_TIEN:
        return { ...state,deposit_amount:action.payload  }
        break;
    case RUT_TIEN:
        return { ...state,withdraw_amount:action.payload  }
        break;
    default:
        return state;
        break;
   }
};
export default rootReducer