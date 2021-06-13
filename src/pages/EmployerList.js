import React, { useState,useEffect } from 'react'
import EmployerService from '../services/employerService'

export default function EmployerList(){
    const [employers,setEmployers]=useState([])
    useEffect(()=>{
        let employerService=new EmployerService()
        employerService.getEmployers().then(result=>setEmployers(result.data.data))
    },[] )
    return (
        
    )
}