import {database} from "../../firebase";
 export const createNote = (item) =>
 {
     return async (dispatch) => (database.push(item))
 }

 export const fetchNote = () =>
{
   return async  (dispatch) =>
   {
       await database.on("value",(snapshot)=> {
     let a = snapshot.val();
     dispatch ({type: "FETCH_NOTE" , payload : a });

     
   });

   
}
}