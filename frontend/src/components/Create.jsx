import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const navigate=useNavigate()
    const[heading,setheading]=useState({})
    const[content,setcontent]=useState({})
    const[file,setfile]=useState({})
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

        axios.post('http://localhost:8081/create',formdata)
        .then((res)=>navigate('/'))
        .catch((res)=>console.log("Error ; ",err))
        
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
        <input type="text" placeholder='Name' onChange={(e)=>setheading(e.target.value)} className='name'/> <br />
        <input type="text" placeholder='Price' onChange={(e)=>setcontent(e.target.value)} className='price'/> <br />
        <input type="text" placeholder='Enter benifits' onChange={(e)=>setbenefits(e.target.value)} className='price'/> <br />
        <input type="text" placeholder='Enter describes' onChange={(e)=>setdescribes(e.target.value)} className='price'/> <br />

        <input type="text" placeholder='Enter para' onChange={(e)=>setpara(e.target.value)} className='price'/> <br />
        <input type="text" placeholder='YES OR NO' onChange={(e)=>setaerial(e.target.value)} className='price'/> <br />
        <input type="text" placeholder='DAYS' onChange={(e)=>setexpress(e.target.value)} className='price'/> <br />

        <input type="file" onChange={e=>setfile(e.target.files[0])} className='file'/>
        <button type='submit' className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Create