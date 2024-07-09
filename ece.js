const b=document.querySelector('p');
console.log(b);

// classi error olani secmek icin class icin nokta id icin # kullanilir. 

const a=document.querySelector('.error');

 console.log(a);

const hata=document.querySelector('div.error');
console.log(hata);

// hepsini secmek istersem

const hatalar=document.querySelectorAll('p');
console.log(hatalar);
console.log(hatalar[0]);

hatalar.forEach(hata =>{
    console.log(hata);
})