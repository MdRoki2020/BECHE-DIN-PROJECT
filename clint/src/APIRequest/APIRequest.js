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


//filter product by userEmail
export function FilterProductByEmail(publisherEmail){
    let URL="http://localhost:5000/api/v1/SpecificPublisherProductList/"+publisherEmail;
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


//Signup Request
export function SignupRequest(data){

    let URL="http://localhost:5000/api/v1/CreatePublisher"


    return Axios.post(URL,data).then((res)=>{
        
        if(res.status===200){
            return true;
        }else{
            return false;
        }
    }).catch((err)=>{
        
        console.log(err);
        return false;
    })
}


//Read All ADs
export function AllADs(){
    let URL="http://localhost:5000/api/v1/AllADs"
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


//Create ADS
export function PostADsRequest(data){
    

    let URL="http://localhost:5000/api/v1/CreateADs"


    return Axios.post(URL,data).then((res)=>{
        
        if(res.status===200){
            return true;
        }else{
            return false;
        }
    }).catch((err)=>{
        
        console.log(err);
        return false;
    })
}


//Read All Orders
export function AllOrders(){
    let URL="http://localhost:5000/api/v1/ReadOrders"
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

//Read Publisher List
export function AllPublisherList(){
    let URL="http://localhost:5000/api/v1/ReadPublisher"
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

//Read All Ads List
export function AllADsList(){
    let URL="http://localhost:5000/api/v1/ReadProducts"
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

//Read Data By TransactionID
export function ReadOrderByTransactionId(TransactionId){
    let URL="http://localhost:5000/api/v1/ReadOrderByTransactionId/"+TransactionId;
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


//Read Data By ProductID
export function ReadProductsById(ProductId){
    let URL="http://localhost:5000/api/v1/ReadById/"+ProductId;
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

//generate voucher code
export function generateVoucherCode(voucher){
    
    let URL="http://localhost:5000/api/v1/CreateVoucherCode"

    let PostBody={
        VoucherCode:voucher,
    }
    return Axios.post(URL,PostBody).then((res)=>{
        
        if(res.status===200){
            return true;
        }else{
            return false;
        }
    }).catch((err)=>{
        
        console.log(err);
        return false;
    })
}

//Read Voucher code
export function ShowVoucherCode(){
    let URL="http://localhost:5000/api/v1/ShowVoucherCode"
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

//Total Orders
export function TotalOrders(){
    let URL="http://localhost:5000/api/v1/TotalOrders"
    return Axios.get(URL).then((res)=>{

        if(res.status===200){
            return res.data['data'][0];
        }else{
            return false
        }

    }).catch((err)=>{
        return false
    })
}

//Total publisher
export function TotalPublisher(){
    let URL="http://localhost:5000/api/v1/TotalPublisher"
    return Axios.get(URL).then((res)=>{

        if(res.status===200){
            return res.data['data'][0];
        }else{
            return false
        }

    }).catch((err)=>{
        return false
    })
}

//Total Products
export function TotalProducts(){
    let URL="http://localhost:5000/api/v1/TotalProducts"
    return Axios.get(URL).then((res)=>{

        if(res.status===200){
            return res.data['data'][0];
        }else{
            return false
        }

    }).catch((err)=>{
        return false
    })
}