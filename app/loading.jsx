
"use client"
import ClipLoader from "react-spinners/ClipLoader"
const Loading = () => {
    const override={
        display:"block",
        margin:"100px auto"
    }
    return ( 
       <ClipLoader color="#3b82f6" cssOverride={override} size={150} aria-label="loading spinner"/>
     );
}
 
export default Loading;