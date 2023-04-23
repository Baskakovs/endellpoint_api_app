import { useNavigate } from "react-router-dom";
function CloseButton(){
    const navigate = useNavigate()
    return(
        <>
        <button 
        className="btn-close" 
        onClick={()=>navigate(-1)}/>
        </>
    )
}

export default CloseButton
