var text=document.getElementById("display");
//text.innerHTML="WELCOME";
text.style.fontSize="40px";
var but=Array.from(document.getElementsByClassName('button'));
but.map( button => {
    button.addEventListener('click',(e) => {
        switch(e.target.innerText){
            case 'AC':
                text.innerHTML='';
                break;
            case 'DEL':
                text.innerHTML=text.innerHTML.slice(0,-1);    
                break; 
            case '=':
                try{
                text.innerHTML=eval(text.innerHTML);
                }catch{
                    text.innerHTML="error!!";
                }
                break;    
            default:
                text.innerHTML+=e.target.innerText;    
        }
        
    });
});
