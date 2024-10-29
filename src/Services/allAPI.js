import { commonAPI } from "./commonAPI"
import { BASE_URL } from "./baseUrl"

// Admin Login API
export const admloginAPI=async(users)=>{
    return await commonAPI('POST',`${BASE_URL}/admin/login`,users,"")
}

//Adding new question API
export const addQuestionAPI=async(question)=>{
    return await commonAPI('POST',`${BASE_URL}/general/arith/add`,question,"")
}

// Getting general questions
export const getGeneralQuestionAPI = async(sectionName,categoryName)=>{
    return await commonAPI('GET',`${BASE_URL}/general/${sectionName}/${categoryName}`) 
}

//Editing questions
export const editQuestionAPI = async(qId,editQuestion) =>{
    return await commonAPI('PUT',`${BASE_URL}/question/edit/${qId}`,editQuestion,"")
}

//delete question
export const deleteQuestionAPI = async(qId,deleteQuestion) =>{
    return await commonAPI('DELETE',`${BASE_URL}/question/remove/${qId}`,deleteQuestion,"")
}

//Get all users
export const getUsersAPI = async()=>{
    return await commonAPI('GET',`${BASE_URL}/admin/allusers`)
}