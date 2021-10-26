
  let section_index = 0;
   let m = [];
 m = document.getElementsByTagName('a');
 
 $('a').click (function(section_index)
 {

   //   m.forEach((element, index) => {if (element == this) section_index = index}); 

     ab(section_index) ;

 })

 function ab(x) {
    for (i =0; i <m.length; i++)
      m[i].style.backgroundColor = 'red';

      alert(2);

      m[2].style.backgroundColor = 'blue'; 

    //  const ID = $(this).attr ('href');
    //  const OFFSET = $(ID).offset().top;
    //  console.log (OFFSET);
    //  $('html').animate({
    //      scrollTop: OFFSET,
    //  },1000)
 }