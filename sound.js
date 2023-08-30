import Nav from './Nav';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

function Applylis(){
  const navigate = useNavigate();
  const [name,setname] = useState('');
  const [addr,setaddr] = useState('');
  const [vehicle,setvehicle] = useState('');
  const [child,setchild] = useState('');
  const [dob,setdob] = useState('');
  const [dor,setdor] = useState('');

  const [afile,setafile] = useState('');
  const [pfile,setpfile] = useState();
  // const changeHandler = (event) => {
  //       console.log(event.target.files[0])
  //       setpfile(event.target.files[0]);
  // };   
  function handleImage(e){
    console.log(e);
    var reader=new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=()=>{
      console.log(reader.result);
      setpfile(reader.result)
    };
    reader.onerror=error =>{
      console.log("error",error)
    };
    
    
  }


  const clickHandler = async (e) => 
    {

      // e.preventDefault();
      // const formData2 = new FormData();
      // console.log(pfile);
      // formData2.append("file",pfile.files);


//       try{
//         if(pfile){
//           axios.post("http://localhost:8080/test",{
//             pfile:pfile
//           },
//           {
//             credentials: "include",
//             mode:"cors"
//           })
//         }
//       }
//       catch(error) {
//         console.log("inside catch");
//       console.log(" error" +error);
//     } finally {
//         console.log("in finally");
//     }
// }      
   
   
   
   
   
   
   
   
       try {
        if(name && addr  && child && dob && dor &&afile )
        {
          const today = new Date();
          const year = today.getFullYear();
          
          const birth = new Date(dob);
          const byear = birth.getFullYear();

          if(afile.toString().length===12 &&year-byear>=18 )
          {

          
            console.log("semding");
            const res = await axios.post("http://localhost:8080/applylis",{
              name:name,
              addr:addr,
              vehicle:vehicle,
              child:child,
              dob:dob,
              dor:dor,
              afile:afile,
              pfile:pfile
              
          },
          {
            credentials: "include",
            mode:"cors"
          }
        );
        if(res.data.message==="User already exists")
            {
                alert("User already exists");
            }
        else if(res.status===200){
          alert("succesfully process done");
          navigate("/nav")

        }   
      }
      else{
        alert("enter valid credentials")
      }

        }

        else
        {
            alert("enter all fields");
        
        }
    }  
        catch(error) {
            console.log("inside catch");
          console.log(" error" +error);
        } finally {
            console.log("in finally");
        }
    }








    return (
      <div>
      <><Nav/></>
        <div className='container'>
          
        <h2 >APPLY LICENSE</h2>
        <form>
          <div className="mb-3" onChange={(e) => {setname(e.target.value)}}>
              <label htmlFor="formGroupExampleInput"  className="form-label formhead">FULL NAME</label>
              <input type="text" className="form-control"  id="formGroupExampleInput" placeholder="Example input placeholder"/>
            </div>
            <div action="/action_page.php" className='btnleft'>
            <label htmlFor="birthday">DATE OF BIRTH</label>
            <input type="date" id="birthday"   onChange={(e) => {setdob(e.target.value)}} name="birthday"/>
            </div>
            
            <br/>
            <br/>
            <br/>
            
  
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput"  className="form-label formhead">SON/DAUGHTHER/WIFE OF:</label>
              <input type="text" className="form-control" onChange={(e) => {setchild(e.target.value)}} id="formGroupExampleInput" placeholder="Example input placeholder"/>
            </div>
  
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput"  className="form-label formhead">ADDRESS</label>
              <input type="text" className="form-control" onChange={(e) => {setaddr(e.target.value)}} id="formGroupExampleInput" placeholder="Example input placeholder"/>
            </div>
  
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label formhead">ADHAAR NO.</label>
              <input className="form-control"  onChange={(e) => {setafile(e.target.value)}}  type="number" id="formFile"/>
            </div>
  
            <div className="mb-3">
              <label htmlFor="formFile"  className="form-label formhead">IMAGE FILE</label>
              <input className="form-control" onChange={handleImage} name="file" type="file" id="formFile" accept=".jpeg, .png, .jpg"/>
            </div>
  
            <div onChange={(e) => {setvehicle(e.target.value)}} className="form-floating">
             
              <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option defaultValue="1">NONE</option>
                <option defaultValue="2">motorcycle without gear</option>
                <option defaultValue="3">motorcycle with gear</option>
                <option defaultValue="4">transport and commercial vehicle</option>
              </select>
              <label htmlFor="floatingSelect" className='formhead'>SELECT CATEGORY</label>
  
            </div>
            <br/>
           
            <div action="/action_page.php" onChange={(e) => {setdor(e.target.value)}} className='btnleft'>
            <label htmlFor="birthday">DATE OF REQUEST</label>
            <input type="date" id="birthday" name="birthday"/>
           
            
           
            
          </div>
          
    
          
          
        </form>
        <br/><br/><br/><br/>
        <center>
        <button type="button" className="btn btn-primary" onClick={clickHandler} data-bs-target="#exampleModal">
                          SUBMIT
                        </button>
        </center>
       
      </div>
      <br/>
    <br/>
      </div>
    )

   

}
export default Applylis;