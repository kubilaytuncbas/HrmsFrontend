import axios from "axios"


export default class SocialMediaLinkService{

    getAll(){
        return axios.get("http://localhost:8080/api/socialMediaLinks/getall")
    }
}