import axios from "axios"
export default class JobseekerService{
    
    getJobseekers(){
        return axios.get("http://localhost:8080/api/jobSeekers/getall");
    }

    add(values){
        return axios.post("http://localhost:8080/api/jobSeekers/add",values);
    }
}