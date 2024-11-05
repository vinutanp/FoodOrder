import { createContext, useState } from "react";

const UserActionContext= createContext({
    action:'',
    showCart:()=>{},
    hideCart:()=>{},
    showCheckout:()=>{},
    hideCheckout:()=>{}
})

export function UserActionContextProvider({children}){
    const [userAction,setUserAction]=useState('');

    function showCart(){
        setUserAction('cart');
    }

    function hideCart(){
        setUserAction('');
    }

    function showCheckout(){
        setUserAction('checkout');
    }

    function hideCheckout(){
        setUserAction('')
    }

    const userActionctx={
        action:userAction,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }
    return <UserActionContext.Provider value={userActionctx}> 
        {children}
    </UserActionContext.Provider>
}
export default UserActionContext;