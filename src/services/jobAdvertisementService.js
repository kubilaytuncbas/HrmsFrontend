import axios from "axios"
export default class JobAdvertisementService {

    getJobAdvertisements() {
        return axios.get("http://localhost:8080/api/jobAdvertisements/getAll");
    }
    findAllByOrderByPublishedAtDesc(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getAllOrderByPublishedDesc")
    }
    add(values){
        return axios.post("http://localhost:8080/api/jobAdvertisements/add",values)
    }
    
}