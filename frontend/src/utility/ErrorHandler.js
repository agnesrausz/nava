/**
 * Handling the backend response
 * @param response
 * @returns {{message, status: boolean}}
 */
export const checkResponse = (response) => {
    let responseStatus = response.data.status;
    let responseMessage = response.data.message;

    if(!responseStatus >= 200 && !responseStatus <= 226 ){
        return {
            status:false,
            message:responseMessage
        }
    } else {
        return {
            status:true,
            message:responseMessage
        }
    }
}