import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const {id}=useParams()
    const navigate=useNavigate()
    const[heading,setheading]=useState({})
    const[content,setcontent]=useState({})
    const[file,setfile]=useState([])
    const[benefits,setbenefits]=useState({})

    const[describes,setdescribes]=useState({})

    const[para,setpara]=useState({})
    const[aerial,setaerial]=useState({})
    const[express,setexpress]=useState({})

    function handlesubmit(e){
        e.preventDefault();
        const formdata=new FormData();
        formdata.append('image',file)
        formdata.append('heading',heading)
        formdata.append('content',content)
        formdata.append('benefits',benefits)
        formdata.append('describes',describes)

        formdata.append('para',para)
        formdata.append('aerial',aerial)
        formdata.append('express',express)

        axios.put(`http://localhost:8081/update/${id}`,formdata)
        .then((res)=>navigate('/'))
        .catch((res)=>console.log("Error......00000"))
        
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
        <input type="text" onChange={(e)=>setheading(e.target.value)} className='name' placeholder='Name'/> <br />
        <input type="text" onChange={(e)=>setcontent(e.target.value)} className='price' placeholder='Price'/> <br />
        <input type="text" placeholder='Enter benifits' onChange={(e)=>setbenefits(e.target.value)} className='price'/> <br />
        <input type="text" placeholder='Enter describes' onChange={(e)=>setdescribes(e.target.value)} className='price'/> <br />

        <input type="text" placeholder='Enter para' onChange={(e)=>setpara(e.target.value)} className='price'/> <br />
        <input type="text" placeholder='Arial' onChange={(e)=>setaerial(e.target.value)} className='price'/> <br />
        <input type="text" placeholder='Express' onChange={(e)=>setexpress(e.target.value)} className='price'/> <br />

        <input type="file" onChange={e=>setfile(e.target.files[0])} className='file' /> <br />
        <button type='submit' className='btn'>Next</button>
        </form>
    </div>
  )
}

export default Update