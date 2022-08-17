
   let gridNumber = 5;
   
   for (i=0; i<gridNumber; i++) {
        let hello = document.createElement('div')
    
        hello.style.background = "red"
        hello.style.height = "100px"
        hello.style.flex = "1"
        
        let container = document.querySelector('#container')
        
        container.appendChild(hello)
    }
    
    
    // let mydiv = document.createElement('div')
    // mydiv.style.height = "200px"
    // mydiv.style.background = "black"
    // let thecontainer = document.querySelector('#container')
    // thecontainer.appendChild(myDiv)






// let div = document.querySelectorAll(".myDiv")


// div.forEach((divs) => { 
//     divs.addEventListener('click', function(e){
//         let color = Math.floor((Math.random()*256)+1)
//         let color2 = Math.floor((Math.random()*256)+1)
//         let color3 = Math.floor((Math.random()*256)+1)
//         divs.style.background = `rgb(${color}, ${color2}, ${color3})`;
//     })
    
// } )







