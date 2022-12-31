document.querySelector("#roll").addEventListener("click",dice);
        function dice(){
            let x=Math.floor(Math.random()*6)+1; 
            let y=Math.floor(Math.random()*6)+1; 
            let z=Math.floor(Math.random()*6)+1; 
    
            document.querySelector("#Ruby-1").innerText=x;
    
        document.querySelector("#Ruby-2").innerText=y;
    
        document.querySelector("#Ruby-3").innerText=z;
        if(x>y && x>z){
                document.querySelector("#winner").innerText="Winner is: user1👯🙋 ";
                document.querySelector("#Ruby-1").style.backgroundColor = 'green';
                document.querySelector("#Ruby-2").style.backgroundColor = 'yellow';
                document.querySelector("#Ruby-3").style.backgroundColor = 'pink';
            }else if(y>x && y>z){
                document.querySelector("#winner").innerText="Winner is: user2🥳";
                document.querySelector("#Ruby-1").style.backgroundColor = 'pink';
                document.querySelector("#Ruby-2").style.backgroundColor = 'green';
                document.querySelector("#Ruby-3").style.backgroundColor = 'yellow';
            }else{
                document.querySelector("#winner").innerText="Winner is: user3🥳";
                document.querySelector("#Ruby-1").style.backgroundColor = 'yellow';
                document.querySelector("#Ruby-2").style.backgroundColor = 'pink';
                document.querySelector("#Ruby-3").style.backgroundColor = 'green';
            }
            if(x<y && x<z){
                document.querySelector("#Ruby-1").style.backgroundColor = 'red';
            }else if(y<x && y<z){
                document.querySelector("#Ruby-2").style.backgroundColor = 'red';
            }else{
                document.querySelector("#Ruby-3").style.backgroundColor = 'purple';
            }
        
            if(x==y && x==z && y==z){
                document.querySelector("#Ruby-1").style.backgroundColor = 'blue';
                document.querySelector("#Ruby-2").style.backgroundColor = 'blue';
                document.querySelector("#Ruby-3").style.backgroundColor = 'grey';
                document.querySelector("#winner").innerText="Tie👯";
            }else if(x==y){
                document.querySelector("#Ruby-1").style.backgroundColor = 'blue';
                document.querySelector("#Ruby-2").style.backgroundColor = 'blue';
                if(x>z){
                document.querySelector("#winner").innerText="Roll again!🙋";
                }else{
                    document.querySelector("#Ruby-3").style.backgroundColor = 'green';
                }
            }else if(x==z){
                document.querySelector("#Ruby-1").style.backgroundColor = 'blue';
                document.querySelector("#Ruby-3").style.backgroundColor = 'blue';
                if(x>y){
                document.querySelector("#winner").innerText="Roll again!🙋";
                }
            }else if(y==z){
                document.querySelector("#Ruby-2").style.backgroundColor = 'blue';
                document.querySelector("#Ruby-3").style.backgroundColor = 'grey';
                if(y>x){
                document.querySelector("#winner").innerText="Roll again!🥳";
                }
            }
    
        }