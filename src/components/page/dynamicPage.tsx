import { useParams } from "react-router-dom";


function DynamicPage(){
    const params = useParams();

    console.log(params);
    
    return <p>I m in dynamic page, my id is: {params.id}</p>
}

export default DynamicPage;