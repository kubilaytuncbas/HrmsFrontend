import React, { useState,useEffect } from 'react'
import JobAdvertisementService from '../services/jobAdvertisementService'


export default function EmployerList(){

    const[jobAdvertisements,setJobAdvertisements]=useState([])
    useEffect(()=>{
        let jobAdvertisementService=new JobAdvertisementService();
        jobAdvertisementService.getJobAdvertisements().then(result=>setJobAdvertisements(result.data.data))
    },[])
    return (
        
    )
}