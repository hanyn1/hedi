import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import rap from '../database/Data';
import Swal from 'sweetalert2'
import { useState } from 'react'
export default function Add({onAdd}) {
    const [newRap,setNewRap]=useState({nom:"",age:"",album:"",image:""})
    const handle=()=>{
        if(newRap.nom.trim()===""|| newrap.age.trim()===""||newrap.album.trim()===""||newrap.image.trim()===""){
            Swal.fire({
                icon:"error",
                title:"oups...",
                text:"please fill in all fileds!"
            });return;
        }
        onAdd(newRap);
        setNewRap({name:"",age:"",album:"",image:""})
        Swal.fire({
          icon: "success",
          title: "Serie  Added!",
          showConfirmButton: false,
          timer: 1500 // Automatically close after 1.5 seconds
        })
    }
  return (
    <div>
      {
        rap.map((ele)=>(
            <div class="card" style="width: 18rem;">
            <img src={ele.image} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{ele.nom}</h5>
              <p class="card-text">rap</p>
              <a href="#" class="btn btn-primary"></a>
            </div>
          </div>     
        ))

      }
    </div>
  )
}
