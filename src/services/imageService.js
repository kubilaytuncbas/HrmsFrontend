import axios from "axios";


export default class ImageService{

    getById(id){
        return axios.get("http://localhost:8080/api/images/getbyid?id"+
        id)
    }   
}