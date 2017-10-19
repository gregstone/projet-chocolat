



// Script controling navbar behavior 

window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 90) nav.className = ''; else nav.className = 'scroll';
};