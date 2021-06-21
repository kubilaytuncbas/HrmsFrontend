import axios from "axios";

export default class CoverLetterService{

    getAll(){
        return axios.get("http://localhost:8080/api/coverLetters/getall")
    }
}