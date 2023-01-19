import Axios from 'axios';
import { getToken, setToken, setUserDetails } from '../Helper/SessionHelperPublisher';
import { ErrorToast, SuccessToast } from '../Helper/FormHelper';

const AxiosHeader={headers:{"token":getToken()}}


//read data by categories..
export function FilterByCategories(ProductCategories){
    let URL="http://localhost:5000/api/v1/FilterByCategories/"+ProductCategories;
    return Axios.get(URL).then((res)=>{

        if(res.status===200){
            return res.data['data'];
        }else{
            return false
        }

    }).catch((err)=>{
        return false
    })
}

//Product ReadBy Id
export function ReadById(id){
    let URL="http://localhost:5000/api/v1/ReadById/"+id;
    return Axios.get(URL).then((res)=>{

        if(res.status===200){
            return res.data['data'];
        }else{
            return false
        }

    }).catch((err)=>{
        return false
    })
}


//After PostADS Login
export function AfterPostADsLoginRequest(Email,Password){
    let URL="http://localhost:5000/api/v1/AfterPostADsLogin"

    let PostBody={
        Email:Email,
        Password:Password
    }

    return Axios.post(URL,PostBody).then((res)=>{

        if(res.status===200){
            setToken(res.data['token']);
            setUserDetails(res.data['data']);
            SuccessToast("Login Success")
            return true;
        }
        else{
            ErrorToast("Invalid Email or Password")
            return  false;
        }
    }).catch((err)=>{
        console.log("Something Went Wrong");
        return false;
    });

}


//Publisher Login
export function PublisherLoginRequest(Email,Password){
    let URL="http://localhost:5000/api/v1/PublisherLogin"

    let PostBody={
        Email:Email,
        Password:Password
    }

    return Axios.post(URL,PostBody).then((res)=>{

        if(res.status===200){
            setToken(res.data['token']);
            setUserDetails(res.data['data']);
            SuccessToast("Login Success")
            return true;
        }
        else{
            ErrorToast("Invalid Email or Password")
            return  false;
        }
    }).catch((err)=>{
        console.log("Something Went Wrong");
        return false;
    });

}