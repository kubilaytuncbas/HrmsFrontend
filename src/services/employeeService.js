import axios from "axios";


export default class EmployeeService{

    employerConfirm(){
        return axios.put("http://localhost:8080/api/employees/employerConfirm?id=310&isVerified=true")
    }
}