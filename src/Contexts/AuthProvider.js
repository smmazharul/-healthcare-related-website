import React, { createContext } from 'react';
import useAPI from '../Hooks/useAPI';
import useCard from '../Hooks/useCard';
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const AllContexts =useFirebase();
    const {useApi} =useAPI();
    const {addToCart,selectedService}=useCard();
    const data = {selectedService,addToCart,AllContexts, useApi};
    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;