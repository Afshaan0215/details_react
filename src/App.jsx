import React, { useState } from 'react';
import './App.css';

function App() {
  var [ar,setAr]=useState([{
    id:"",
    name:"",
    email:"",
    contact:""
  }])
  
  var [data,setdata]=useState([
    { id: 1, name: "Tania", email: "mailto:tania@abc.com", contact: 989898757 },
    { id: 2, name: "Craig", email: "mailto:craig@abc.com", contact: 999898757 },
    { id: 3, name: "Ben", email: "mailto:ben@abc.com", contact: 979898757 }
  ])
  var [index,setindex]=useState([""])

  function yz(a,i){
    setAr({id:a.id,name:a.name,email:a.email,contact:a.contact})
    setindex(i)
    console.log(i)
  }
  function ake(){
    setdata([...data,ar])
    console.log(ar)
  }

  function del(i) {
    var temp=[...data]
    temp.splice(i,1)
    setdata(temp)
  }
 
  function ak() {
    var temp=[...data]
    temp[index]=ar
   setdata(temp)
  }
 
  function ab(e) {
   ar.id=e.target.value
   setAr({...ar})
  }
 
  function cd(e) {
   ar.name=e.target.value
   setAr({...ar})
  }
 
  function ef(e) {
   ar.email=e.target.value
   setAr({...ar})
  }
  
  function gh(e) {
    ar.contact=e.target.value 
    setAr({...ar})
  }
 
  return (
    <div>
      <h1 className="text-center">Table</h1>
      <button  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" >Add New Data</button>
     <table className='table table-striped text-center'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
      {
       data && data.map((a,i)=>{
          return <tr>
            <td>{a?.id}</td>
            <td>{a?.name}</td>
            <td>{a?.email}</td>
            <td>{a?.contact}</td>
            <td>
              <button type='button' className="btn btn-success text-light" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@mdo"  onClick={()=>{yz(a,i)}}>Edit</button>
            </td>
            <td>
              <button type='button' className='btn btn-danger text-light' onClick={()=>{del(i)}}>Delete</button>
            </td>
          </tr>
        })
      }
      </tbody>
     </table>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add data</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">  
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">id</label>
                <input type="number" class="form-control" id="recipient-name" onKeyUp={(e)=>{ab(e)}} required />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">name</label>
                <input  type="text"  class="form-control" id="message-text"onKeyUp={(e)=>{cd(e)}} required />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">email</label>
                <input  type="email"  class="form-control" id="message-text" onKeyUp={(e)=>{ef(e)}} required />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">contact</label>
                <input  type="text"  class="form-control" id="message-text" onKeyUp={(e)=>{gh(e)}} required />
              </div>        
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" onClick={ake}>Add</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">update data</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">  
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">id</label>
                <input type="number" class="form-control" id="recipient-name"  value={ar.id} onChange={(e)=>{ab(e)}} required />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">name</label>
                <input  type="text"  class="form-control" id="message-text" value={ar.name} onChange={(e)=>{cd(e)}} required />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">email</label>
                <input  type="email"  class="form-control" id="message-text"  value={ar.email} onChange={(e)=>{ef(e)}} required />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">contact</label>
                <input  type="text"  class="form-control" id="message-text"  value={ar.contact} onChange={(e)=>{gh(e)}} required />
              </div>        
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" onClick={ak}>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;