import { commonAPI } from "./commonAPI"
import { BASE_URL } from "./baseUrl"

// Admin Login API
export const admloginAPI=async(users)=>{
    return await commonAPI('POST',`${BASE_URL}/admin/login`,users,"")
}