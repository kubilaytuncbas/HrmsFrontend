import axios from "axios";

export default class EducationService{

    getAll(){
        return axios.get("http://localhost:8080/api/languages/getAll")
    }
}