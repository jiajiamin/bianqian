window.onload=function(){
    let arr1=[];
    let arr2=[];
    localStorage.arr1?arr1=localStorage.arr1.split(","):[];
    localStorage.arr2?arr2=localStorage.arr2.split(","):[];
    
    // if(typeof(localStorage.arr1)!=null){
    //     arr1=localStorage.arr1.split(",");
    //     update();
    // }
    // if(typeof(localStorage.arr1)==String){
    //     arr2=localStorage.arr2.split(",");
    //     update();
    // }
    let text=document.querySelector(".text");  
    let num1=document.querySelector("#num1")
    let num2=document.querySelector("#num2")
    let list1=document.querySelector(".bigBox .list");
    let list2=document.querySelector(".bigBox2 .list");
    let bigBox=document.querySelector(".bigBox .list");
    let bigBox2=document.querySelector(".bigBox2 .list");
    update();
    text.onkeydown=function(e){ 
        
        let text1=text.value; 
        if(e.keyCode==13 && text1!=""){
           arr1.unshift(text1)         
            update();
           
            text.value="";
           
        }
        
    }

    function update(){
        localStorage.arr1=arr1.join(",");
        localStorage.arr2=arr2.join(",");
        list1.innerText="";
        num1.innerText=arr1.length;
        num2.innerText=arr2.length;
        arr1.forEach(function(item,index){           
            let con=document.createElement("div");
            con.className="con";
            let checkbox=document.createElement("input");        
            checkbox.className="check"; 
            checkbox.onclick=function(){
                arr1.splice(index,1);
                arr2.unshift(item);
                update();
            }        
            let son=document.createElement("son");
            son.className="son";
            
            son.ondblclick=function(){
                let input=document.createElement("input");
                let nr=son.innerText;
                son.innerText=""
                input.value=nr;               
                input.onkeydown=function(e){
                    if(e.keyCode==13 && input.value!=""){
                        // input.value=nr;  
                        arr1[index]=input.value;
                        
                        update();
                       
                    }
                }              
                input.onblur=function(){                   
                        arr1[index]=input.value;                       
                        update();                     
                    
                }             
                son.appendChild(input); 
                input.focus();  
            }         
            
            let del=document.createElement("div");
            del.className="del";
            del.onclick=function(){
                arr1.splice(index,1);
                update();
            }
            son.innerHTML=item;
            list1.appendChild(con);
            con.appendChild(checkbox);
            checkbox.setAttribute("type","checkbox");
            con.appendChild(son);                 
            con.appendChild(del);
           
        })
        list2.innerText="";
        arr2.forEach(function(item,index){
            
            let con=document.createElement("div");
            // let bigBox=document.querySelector(".bigBox2");
            con.className="con";
            list2.appendChild(con);
            let checkbox=document.createElement("input");
            
            checkbox.className="check";
            checkbox.checked="checked";
            checkbox.onclick=function(){
                arr2.splice(index,1);
                arr1.unshift(item);
                update();
            }        
            let son=document.createElement("son");
            son.className="son";
            son.ondblclick=function(){
                let input=document.createElement("input");
                let nr=son.innerText;
                son.innerText=""
                input.value=nr;               
                input.onkeydown=function(e){
                    if(e.keyCode==13 && input.value!=""){
                        arr2[index]=input.value;        
                        update();            
                    }
                }              
                input.onblur=function(){                  
                    arr2[index]=input.value;                       
                    update();                               
                }             
                son.appendChild(input); 
                input.focus();  
            }         
            let del=document.createElement("div");
            del.className="del";
            del.onclick=function(){
                arr2.splice(index,1);
                update();
            }
            son.innerHTML=item;
            
            con.appendChild(checkbox);
            checkbox.setAttribute("type","checkbox");
            con.appendChild(son);
            
            con.appendChild(del);
            
        })
    }
   
    
    
   
}