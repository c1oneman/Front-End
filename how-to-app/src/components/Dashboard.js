import React, { useState, useEffect } from 'react'


export const Dashboard = () => {

    const [data, setData] = useState([])

    // useEffect(()=>{
    //     axiosWithAuth().get("http://localhost:5000/api/friends")
    //     .then(res => {
    //         setData(res.data)
    //         console.log(res)
    //     })
    //     .catch(err => console.log(err,'error'))
    // }, [])



return (
<div>
    <h1> Add Your How To </h1>
<form>
<label for = "Name">Name</label>
<input type = "text" id="Name" name = "Name"></input>

<label for = "Category">Category</label>
<input type = "text" id="Category" name = "Category"></input>

<label for = "Description">Description</label>
<input type = "text" id="Description" name = "Description"></input>

</form>

</div>
    
    )

}
