const logo = document.querySelector(".logo");
      const nav = document.getElementById('fixed');
      const  imgLogo = document.querySelector(".img-logo");
      const lupa = document.querySelector(".search");
      const input = window.document.querySelector("input");
      const inputValue = document.getElementsByTagName("input").value;
      const head = document.querySelector('.paralax');
      const navBar = document.querySelector('.nav-bar');
      
      const MnueBar = window.document.querySelector('.column');
      const liMenuBar = document.querySelectorAll('.column > *');

      const  number = 130;

       imgLogo.addEventListener('mousemove',(event)=>{
            head.style.perspective=60+"px";
       });
       
       const menuu = document.querySelector('.menu');
 
       window.addEventListener( 'resize',(event) =>{
             const windowWidth = window.innerWidth;
          
            if (windowWidth < 908) {
            //     console.log(windowWidth+"px");
                input.classList.add('hidden');
            }
      });     
            window.addEventListener('scroll', (e)=>{
               //  imgLogo.classList.add('append-animation');
            });
      
      window.addEventListener( 'scroll',(event) => {            
            var currentScroLLY = window.scrollY;
            if (window.scrollY > 1) {                  
                  console.log(window.scrollY);
                  
            }
            if( currentScroLLY > number) {
                  // lupa.classList.add('hidden');
                  // input.classList.add('hidden');
                  logo.classList.remove('hidden');
                  logo.classList.add('visible');
                  nav.classList.add('sticky');
                  // lupa.remove();
                  imgLogo.classList.remove('animation');
            }
            if ( currentScroLLY < number ) {
                  imgLogo.classList.remove('append-animation');
                  imgLogo.classList.add('animation');
                  nav.classList.remove('sticky');
                  // lupa.classList.remove('hidden');
                  // lupa.classList.add('vivible');
                  // input.classList.remove('hidden');
                  logo.classList.remove('visible');
                  logo.classList.add('hidden');
                  navBar.appendChild(input);
                  navBar.appendChild(lupa);
            }
            
      });
      
      var click = 1;
      window.document.querySelector('.fa-search').addEventListener('click',mySearch);
      function mySearch(event) {
            console.log("kliklo sa na lupu");
            click++;
            if(click > 0){
                  input.classList.remove('hidden');
                  input.classList.add('visible');
            }
            if(click === 1){
                  input.classList.remove('hidden');
                  input.classList.add('visible');
            }
            if (click % 2) {
              input.classList.remove('visible');
              input.classList.add('hidden');
              console.log(click);
           }   
                
      };
      window.document.querySelector('input').addEventListener('keypress',mySelect);
      function mySelect(event) {
            console.log("input key press");
            if (event.key ==="Enter") {
            //     zistit ako zobrat text z inputu v js 
                  console.log("Input Value čiže text s inputu :"+ inputValue);
                  input.classList.add('hidden');
            }
            if (event.key ==="Down") {
                  console.log("Delete");
                  
            }
      };

      var  j = "J";
     
      window.addEventListener('keypress',(event) => {
            if (event.key === 74) {
                  console.log("J");                  
            }
           
            if (event.key ==="Enter") {
                  console.log("Enter");
            }
      });

      window.document.querySelector('.fa-bars').addEventListener('click',scrollMenu);
      
      function scrollMenu(event) {
            click++;
            const list = document.querySelector('.menu');
            if (click > 0) {
                  list.classList.remove('hidden');list.classList.remove('close');
                  list.classList.add('open');console.log('Open');
            }
            if (click === 1) {
                  list.classList.remove('hidden');list.classList.remove('close');
                  list.classList.add('open');console.log('Open');
            }
          
            if (click % 2) {
                  list.classList.remove('open');
                  list.classList.add('close');console.log('Close');
                  setTimeout(() => {
            window.location.reload();
        }, 3100);
      }
}