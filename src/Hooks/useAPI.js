import { useEffect, useState } from "react";


const useAPI = () => {
    const [useApi, setUseApi]=useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/smmazharul/hm-health-care/main/fackdata.json')
        .then(res=>res.json())
        .then(data=>setUseApi(data))
    },[])
    return {useApi,setUseApi};
};

export default useAPI;