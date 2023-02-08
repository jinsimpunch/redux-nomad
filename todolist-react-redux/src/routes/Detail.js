import React from "react";
import { useParams } from "react-router-dom";


function Detail() {

    const id = useParams()

    return <h1>{id.id}</h1>
}





export default Detail;