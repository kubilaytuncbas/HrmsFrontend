import React, { useState,useEffect } from 'react'
import JobseekerService from '../services/jobseekerService'

export default function JobseekerList(){
    const [jobSeekers,setJobSeekers]=useState([])
    useEffect(()=>{
        let jobseekerService=new JobseekerService();
        jobseekerService.getJobseekers().then(result=>setJobSeekers(result.data.data))
    },[])
    return (
        
    )
}