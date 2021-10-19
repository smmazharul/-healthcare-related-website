import React, {  useState } from 'react';



const useCard = () => {
    const [selectedService, setSelectedService]=useState([]);

    const addToCart=(service)=>{



    const newSelection=[...selectedService,service ];
    setSelectedService(newSelection);





    }
    return{addToCart,selectedService};
};

export default useCard;