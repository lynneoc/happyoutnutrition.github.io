
 var x = new Vue({
     el:'#top',
     data:{
        fname: 'Evelina',
        htmlcontent: 'How are you feeling?'

       
  }
        
     

 })


 
 var dt = new Date().getHours();
        if (dt >= 0 && dt <= 11){
         document.getElementById("greating").innerHTML='Good Morning'
        }else if (dt >= 12 && dt <= 17){
            document.getElementById("greating").innerHTML='Good Afternoon'
        }else {
            document.getElementById("greating").innerHTML='Good Evening'
        }