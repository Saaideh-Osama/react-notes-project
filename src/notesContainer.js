import React from 'react'

import "./App.css";
import { useState } from "react";

function showForm() {
  document.getElementById("showFormbtn").style.display = "none";

}


function NotesContainer() {
    const [noteTitle , setNoteTitle] = useState(""); 
    

  const handleTitle = event => {
    setNoteTitle(event.target.value);
  };
   
    
  const [noteDescription , setNoteDescription] = useState(""); 
  const [noteColor , setNoteColor] = useState(""); 
  
  const handleColor = event => {
    setNoteColor(event.target.style.backgroundColor);
  };
  const handleDescription = event => {
    setNoteDescription(event.target.value);
  };
  const [notesContent, setnotesContent] = useState([]);

  function addNote(){
    var date = new Date();
	if(date.getHours()>=12){
var current_time = date.getHours()-12+ ":"+date.getMinutes()+" PM"
  } else if(date.getHours()<12){
    var current_time = date.getHours()+ ":"+date.getMinutes()+" AM"
  }

  
  setnotesContent([
    ...notesContent,
      { id: notesContent.length+1, title: noteTitle, description:noteDescription , createdAt: current_time},
    ]);
    document.getElementById("showFormbtn").style.display = "block";
    document.getElementById("note-title").value = "" ; 
    document.getElementById("note-body").value = "" ; 
  
  }
  
  const deleteNote = noteId =>{
    setnotesContent(notesContent.filter(note => note.id !==noteId))
  }
    const markComplete = (event,noteId) =>{
      document.getElementById(noteId).style.textDecoration="line-through"
      document.getElementById(noteId).style.textDecorationColor="red"
      
    }

    const paintNote = noteId=>{
document.getElementById("color-wheel").style.display="flex"
    }

//--------------------------------------------------------------
    function colorLightGreen(){
  document.getElementsByClassName("note").style.backgroundColor="#43e43d"
}
function colorGreen(){
  document.getElementsByClassName("note").style.backgroundColor="#2aa926"
}
function colorDarkGreen(){
  document.getElementsByClassName("note").style.backgroundColor="#154213"
}
//--------------------------------------------------------------
  return (
    
        <div id="notes-container">
          {notesContent.map((note)=>{
          return(
                  <div  className="note" key={note.id} >
                  <div id="posted-note-actions" ><button id='mark' onClick={event=>markComplete(event,note.id)}><i class="fa-solid fa-check"></i></button>
                  <button id='delete' onClick={()=>deleteNote(note.id)}><i class="fa-solid fa-trash"></i>
                  </button>
                  
                  <button id='paint' onClick={()=>paintNote(note.id)}><i class="fa-solid fa-paint-roller"></i></button></div> 
                  <div className="posted-note-title" id={note.id} >{note.title}  </div> 
                  <div className="posted-note-description" id={note.id} >{note.description} </div> 
                  <div id="posted-note-creationTime">{note.createdAt} </div> 
                  <div id="color-wheel" >
                    <button className='colorBtn'  value="lightgreen" id="light-green-note" onClick={colorLightGreen}> </button>
                    <button className='colorBtn' value="lightblue" id="light-blue-note" ></button>
                    <button className='colorBtn' value="lightpurple" id="light-purple-note"> </button>
                    <button className='colorBtn'  value="lightred" id="light-red-note"> </button>

                    <button className='colorBtn'  value="green" id="green-note"> </button>
                    <button className='colorBtn' value="blue" id="blue-note" > </button>
                    <button className='colorBtn' value="purple" id="purple-note"> </button>
                    <button className='colorBtn'  value="red" id="red-note"> </button>


                    <button className='colorBtn'  value="darkgreen" id="dark-green-note"></button>
                    <button className='colorBtn' value="darkblue" id="dark-blue-note" > </button>
                    <button className='colorBtn' value="darkpurple" id="dark-purple-note"> </button>
                    <button className='colorBtn'  value="darkred" id="dark-red-note"></button>
                    
                    </div> 
</div> 

              )
          })}
          <div id="form-container" className='addNoteForm'>
           
            <form id="addNote-form" >
              <input type="text" id="note-title"  placeholder="Enter Note title" onChange={handleTitle}/>
              <input type="text" id="note-body" placeholder="Enter Note description" onChange={handleDescription} />
  
              <button type="button" class="button-86" onClick={addNote}>
                create Note
              </button>
            </form>
            <button type="button" onClick={showForm} id="showFormbtn">
            <i class="fa-solid fa-plus"></i>
            </button>
          </div>
          
        </div>
      );
  
}

export default NotesContainer


