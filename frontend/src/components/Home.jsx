import React, { useEffect, useState } from 'react'
import {Link}  from 'react-router-dom'
import axios from 'axios'
const Home = () => {
    const[data,setdata]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8081/")
        .then((res)=>setdata(res.data))
        .catch((res)=>console.log(res))
    },[])

    function handledelete(id){
        axios.delete(`http://localhost:8081/delete/${id}`)
        .then((res)=>setdata(res.data))
        .catch((res)=>console.log(res))
    }

    const style={
      marginBottom:"20px"
    }
  return (
    <div className='all-con'>
        <div style={style}>
            <Link to={'/create'} className='create'>Create</Link>
        </div>
    <div className='container'>
      {data.map((val)=>(
        <div className='con'>
           
            <div className='foot'>
                 <div className='main-image-con'>
                 <img src={`http://localhost:8081/images/${val.img}`} alt="no img" className='imagess'/> <br />
                 </div>  

                 <div className='head'>
                  <img src={`http://localhost:8081/images/${val.img}`} alt="err img" className='profileimage'/>
                  <h2>
                  {val.heading}
                  </h2>
                 </div>

                 
                 <div className='headcontainer'>
                 <p className='benifits'>
                  {/* <h1>Benefits</h1> */}
                  {val.describes}
                 </p>


                 <p>
                  <button className='price1'>${val.content}</button>
                 </p>



                  <p className='para'>
                    {val.para}
                  </p>
                  <div className='areal'>
                    <p>Arial drone footage</p>
                    <p>{val.aerial}</p>
                  </div>


                  <div className='areal1'>
                   <p>Express turnaround time</p>
                    <p>{val.express}</p>
                  </div>
                 </div>


                  <div>
                  <h2  className='heading'>Benefits</h2>
                    <div className='border'>
                    <p className='benifits1'>{val.benefits}</p>
                    </div>
                  </div>
                  
                 <br />
                 <div>
                    <Link to={`update/${val.id}`}className='update' >Buy for ${val.content}</Link>
                    {/* <button onClick={()=>handledelete(val.id)}>Delete</button> */}
                 </div>
            </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Home