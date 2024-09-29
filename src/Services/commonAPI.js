import axios from "axios"

export const commonAPI = async(httpRequest,url,reqBody,reqHeader)=>{
    const rqConfig={
        method:httpRequest,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:
        {"Content-Type" : "application/json"}
    }
    return await axios(rqConfig).then((result)=>{
        return result
    }
    ).catch((err)=>{
        return err
    })
}