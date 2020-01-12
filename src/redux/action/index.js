import {database} from "../../firebase";
 export const createNote = (item) =>
 {
     return async (dispatch) => (database.push(item))
 }