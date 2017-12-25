// import { error } from "util";

// function HttpError (){
    
//     errorList(error){
//         return function(error){
//             console.error(err);
//         }
//     }
// }


let HttpError = () => {
    let errorList = (error) => {
        console.error(error);
    }
    return errorList;
}
export default HttpError;