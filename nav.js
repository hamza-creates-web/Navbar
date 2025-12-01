// firstly we have to selects the element we want to add the javascript...
const a = document.querySelector('.nav-toggle');
const b = document.querySelector('.links');
a.addEventListener('click',function()
// {
//   // console.log(b.classList.contains(random))
//   if(b.classList.contains('show-links'))
//   {
//     b.classList.remove('show-links')
//   }
//   else{
//     b.classList.add('show-links')
//   }
// })


// now use the toggle case in which we can see if something happens then it should be cancel..
// and if something is not happening then something should be add or happens....
{
b.classList.toggle('show-links');
})