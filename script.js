let inputBox = document.querySelector(".input-box")
let outerDiv = document.querySelector(".outerDiv")
let mainContainer = document.querySelector(".container")
let addButton = document.querySelector(".Add-Btn")
let currTask = document.querySelector(".currTask")



inputBox.addEventListener("keypress",getData);
addButton.addEventListener("click",addTask);


function addTask(){
    let currVal = inputBox.value;
    if(currVal != ""){
        let currTaskArr = [];
        let innerDiv = document.createElement("div");
        innerDiv.setAttribute("class","innerDiv");
        let list = document.createElement("li");
        list.setAttribute("class","currdiv");
        let del = document.createElement("button");
        del.setAttribute("class","delete");
        del.innerText = 'delete'
        list.innerText = currVal;
        innerDiv.appendChild(list);                
       innerDiv.appendChild(del);
       currTask.appendChild(innerDiv);
       currTaskArr.push(innerDiv);
       inputBox.value = " "

       let deleteBtn = innerDiv.querySelector(".delete");
        for(let i = 0; i < currTaskArr.length; i++){
            deleteBtn.addEventListener("click",function(){
                let noticeBoard = document.createElement("div");
                noticeBoard.setAttribute("class","notice");
                noticeBoard.innerText = "Are you sure You want to Delete it."
                outerDiv.appendChild(noticeBoard);
                let okay = document.createElement("button");
                okay.setAttribute("class","okay");
                okay.innerText = "okay";
                let cancel = document.createElement("button");
                cancel.setAttribute("class","cancel");
                cancel.innerText = "cancel";
                noticeBoard.appendChild(okay);
                noticeBoard.appendChild(cancel);


               let ok = noticeBoard.querySelector(".okay");
               let can = noticeBoard.querySelector(".cancel");
               ok.addEventListener("click",function(){
                    currTaskArr[i].remove();
                    noticeBoard.remove();
               })
               can.addEventListener("click",function(){
                noticeBoard.remove();
           })

               
                                
               })
        }
        
   }
}
function getData(e){
    // console.log("heyyy boys")
let currVal = e.target.value;
if(e.key == "Enter"){
    if(currVal != ""){
        let currTaskArr = [];
        let innerDiv = document.createElement("div");
        innerDiv.setAttribute("class","innerDiv");
        let list = document.createElement("li");
        let del = document.createElement("button");
        del.setAttribute("class","delete");        
        del.innerText = 'delete'        
        list.innerText = currVal;  
        
        list.setAttribute("class","currdiv");
        let editBtn = document.createElement("button");
        editBtn.setAttribute("class","edit");
        editBtn.innerText = "edit";
        innerDiv.appendChild(editBtn);
        innerDiv.appendChild(list);
        innerDiv.appendChild(del);
        currTaskArr.push(innerDiv);
        currTask.appendChild(innerDiv);
       inputBox.value = " "


       // creat edit button
          editBtn.addEventListener("click",function(){
              let div = innerDiv.querySelector("li");
              inputBox.value = div.outerText;
          })

        let deleteBtn = innerDiv.querySelector(".delete");
        for(let i = 0; i < currTaskArr.length; i++){
            deleteBtn.addEventListener("click",function(){
                let noticeBoard = document.createElement("div");
                noticeBoard.setAttribute("class","notice");
                noticeBoard.innerText = "Are you sure You want to Delete it."
                outerDiv.appendChild(noticeBoard);
                let okay = document.createElement("button");
                okay.setAttribute("class","okay");
                okay.innerText = "okay";
                let cancel = document.createElement("button");
                cancel.setAttribute("class","cancel");
                cancel.innerText = "cancel";
                noticeBoard.appendChild(okay);
                noticeBoard.appendChild(cancel);


               let ok = noticeBoard.querySelector(".okay");
               let can = noticeBoard.querySelector(".cancel");
               ok.addEventListener("click",function(){
                    currTaskArr[i].remove();
                    noticeBoard.remove();
                    inputBox.value = "";
               })
               can.addEventListener("click",function(){
                noticeBoard.remove();
           })        
         })
      } 
      
     }if(currVal == ""){
        let div = document.createElement("div");
        div.setAttribute("class","notice");
        div.innerText = "please enter your task"        
        let okay = document.createElement("button");
        okay.setAttribute("class","okayBtn");
        okay.innerText = "okay"
        div.appendChild(okay);
        outerDiv.appendChild(div);
       

       let ok = div.querySelector(".okayBtn");
       ok.addEventListener("click",function(){
           console.log("heyyyy")
           div.remove();
       })

    }  
   }   
}
//