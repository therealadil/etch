
   let startButton = document.createElement('button')
   let body = document.querySelector('body')
   let container = document.querySelector('#container')
   body.insertBefore(startButton, container)


   startButton.innerHTML = "RESET"


   function alpha () {
    let lol = prompt("what's your name")
    return lol
   }
   
   startButton.onclick = () => alpha();
   

//    Logic for making grid that changes color
   
   for (i = 0; i < 5; i++) {
        let gridSquare = document.createElement('div')
    
        gridSquare.style.background = "white"
        gridSquare.style.height = "100px"
        gridSquare.style.flex = "1"
        gridSquare.style.border = "solid 1px"

        gridSquare.addEventListener('mouseover', function(e){
            let color = Math.floor((Math.random()*256)+1)
            let color2 = Math.floor((Math.random()*256)+1)
            let color3 = Math.floor((Math.random()*256)+1)
            gridSquare.style.background = `rgb(${color}, ${color2}, ${color3})`;
        })
        
        container.appendChild(gridSquare)
    }
    







