var bola = document.querySelector(".bola");
var bot = document.querySelector(".iniciar")
var barra = document.querySelector(".barra1")
var barra2 = document.querySelector(".barra2")
var primeiro = document.querySelector(".pri")
var segundo = document.querySelector(".seg")
var bolapo = bola.offsetLeft;
var bolapoba = +window.getComputedStyle(bola).bottom.replace('px', "");
var barrapo = +window.getComputedStyle(barra).bottom.replace('px', "");
var velocBola= 1
let BolaposX = 465
let BolaposY = 320
var BolaX =-1
var BolaY =0

segundo.value=0
segundo.innerHTML=segundo.value

primeiro.value=0
primeiro.innerHTML=primeiro.value

var salvar = (() => {  
    BolaposX+=  BolaX  * velocBola ;

    bola.style.left = BolaposX +'px';

    BolaposY+= BolaY * velocBola;

    bola.style.bottom= BolaposY +'px'; 

})

var wallblock = (() => { 

    if (BolaposY < 40) {

    
        if (BolaposX > 40 &&  BolaposX < 870  ) {
       
           
               
                BolaY = 1
                
            
            
       
               salvar();
           }
        } else  if (BolaposY > 560) {

    
            if (BolaposX > 40 &&  BolaposX < 870  ) {
           
               
              
                BolaY = -1
                 
             
            }
            }
})



 




//Barra1


let barrapos = 280
let velocidade = 5
  
       
var  movimentarb = (() => {
    var barrapo = +window.getComputedStyle(barra).bottom.replace('px', "");
   
    salvar();

    



if (BolaposX <= 80 && BolaposX >= 77  ) {

  
 
    difbol = BolaposY - 40;
    checagem = barrapo - difbol;  

  
    
  console.log(checagem);

if(checagem < 19 && checagem > -19 ) { 
    BolaX= 1
    
    salvar();
      
} else if (checagem > 19 && checagem <= 40 ) {
    
    
    BolaX= 1
    BolaY= -1
    
    salvar();

} else if (checagem < -19 && checagem >= -40) {
  
    BolaX= 1
    
    BolaY= 1
    salvar();

}
    else if(checagem >= 50 && checagem <= 60) {
    BolaX= 1
    
    BolaY=-1
    salvar();

} else if (checagem <= -50 && checagem >= -60) {
  
    BolaX= 1
    
    BolaY= 1
    salvar();

} else if(checagem >= 60 && checagem <= 70) {
    BolaX= 1
    
    BolaY=-1
    salvar(); } else if (checagem <= -60 && checagem >= -70) {
  
    BolaX= 1
    
    BolaY= 1
    salvar();

}

}
else if(BolaposX <= 10) {
    
        
     
    segundo.value++
    segundo.innerHTML=segundo.value
    bola.style.left = 465 +'px';
    bola.style.bottom= 320 +'px'; 
    BolaposX = 465;
    BolaposY =320;
    velocidade =5
    BolaX= 1
    velocBola=1
    BolaY=0

  
    

}

    wallblock();
    
 
  

   

})  


bot.addEventListener("click", e => {

    bot.classList.add("inv")
    const loop = setInterval ( (e) => {
        
    movimentarb();
    
} )
})




document.addEventListener("keydown" , function(e) {
    var barrapo = +window.getComputedStyle(barra).bottom.replace('px', "");
  
    if(e.key ==='ArrowUp' && barrapo <471){
        barrapos= barrapos + (2 * velocidade)
  
        barra.style.bottom= barrapos +'px'

    } 

    if (e.key ==='ArrowDown' && barrapo >30) {
        barrapos= barrapos - (2 * velocidade)
        barra.style.bottom= barrapos +'px'  
    }
} )
  
//Barra2
segundo.value=0
segundo.innerHTML=segundo.value

var  movimentarb2 = (() => {

    var bolapo = bola.offsetLeft;
    var barrapo2 = +window.getComputedStyle(barra2).bottom.replace('px', "");
   var bolapoba = +window.getComputedStyle(bola).bottom.replace('px', "");

    if (BolaposX == 835  ) {

        
  

        difbol2 = BolaposY - 40;
        checagem2 = barrapo2 - difbol2;  

        if(checagem2 < 19 && checagem2 > -19 ) { 
            BolaX= -1
           
            salvar();
              
         } else if (checagem2 > 19 && checagem2 <= 40 ) {
            
            
            BolaX= -1
            BolaY= -1
          
            salvar();
         
         } else if (checagem2 < -19 && checagem2 >= -40) {
          
            BolaX= -1
           
            BolaY= 1
            salvar();
         
         }
         else if(checagem >= 50 && checagem <= 60) {
            BolaX= 1
            
            BolaY=-1
            salvar();
        
        } else if (checagem <= -50 && checagem >= -60) {
          
            BolaX= 1
            
            BolaY= 1
            salvar();
        
        } else if(checagem >= 60 && checagem <= 70) {
            BolaX= 1
            
            BolaY=-1
            salvar();
         } else if (checagem <= -60 && checagem >= -70) {
          
            BolaX= 1
            
            BolaY= 1
            salvar();
        
        }
         
        
         }
         else if(BolaposX >= 905) { 
         
                
            primeiro.value=primeiro.value+1
            primeiro.innerHTML=primeiro.value
            bola.style.left = 465 +'px';
            bola.style.bottom= 320 +'px'; 
            BolaposX = 465;
            BolaposY =320;
            velocidade= 5
            BolaX= -1
            velocBola=1
            BolaY=0
     
 
 
        }
        

            wallblock();
            
          
          
         

})


const loop2 = setInterval ( (e) => { 
var bolapo = bola.offsetLeft;
    var barrapo2 = +window.getComputedStyle(barra2).bottom.replace('px', "");
   var bolapoba = +window.getComputedStyle(bola).bottom.replace('px', "");

  
  
   movimentarb2();

   let Andar1 = ( (e) => {
    let barrapos2 = barrapo2;
    let bolapobadf = bolapoba-40;

    if(BolaX == 1) { 
        if(barrapos2>bolapobadf &&  barrapo2 >30) {
            barrapos2= barrapos2 - (1 * (velocidade -3))
        }  else if(barrapos2<bolapobadf && barrapo2 <471) {
            barrapos2= barrapos2 + (1 * (velocidade -3))
        }
    barra2.style.bottom= barrapos2 +'px'  }

 })

    Andar1();
   


})


   