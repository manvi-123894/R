var navBtn = document.querySelector(".nav-toggle");
var navList = document.querySelector(".nav-list");
var links = document.querySelectorAll("li");


var singleReview = [
    {
        image : "image/Review/michael-dam-mEZ3PoFGs_k-unsplash.jpg",
        name: "Susain Smith",
        single : "Lorem ipsum dolor sit amet consectetur  dolorem  iusto? Laborum eos at voluptates modi nihiliust."
    },
    {
        image : "image/Review/arrul-lin-sYhUhse5uT8-unsplash.jpg",
        name: "Arrul Lin",
        single : "Lorem ipsum dolor adipisicing elit. Quaerat vel nobis dolorem  iusto? Laborum eos at voluptates modi nihiliust."
    },
    {
        image : "image/Review/christian-buehner-DItYlc26zVI-unsplash.jpg",
        name: "Christopher",
        single : "Lorem ipsum dolor sit amet consectetur adipisicing elit.  iusto? Laborum eos at voluptates modi nihiliust."
    },
    {
        image : "image/Review/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
        name: "Christian",
        single : "Lorem adipisicing elit. Quaerat vel nobis dolorem  iusto? Laborum eos at voluptates modi nihiliust."
    },
    {
        image : "image/Review/dorothy-puscas-kMgtp2f7yKs-unsplash.jpg",
        name: "Dorothy",
        single : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vel nobis i nihiliust."
    },
   
    
]


var review = document.querySelector(".reviews .review-inner");
var img = document.querySelector(".reviews .review-inner img");
var reviewName = document.querySelector(".reviews .review-inner h2");
var para = document.querySelector(".reviews .review-inner p");
var prev = document.querySelector(".reviews .review-inner .btn .prev");
var next = document.querySelector(".reviews .review-inner .btn .next");
var section = document.querySelector(".menu .menu-inner .section-center");
var menuBtn = document.querySelectorAll(".menu .btn button");


navBtn.addEventListener("click",function(){
         navList.classList.toggle("nav-toggle-appear");

         links.forEach(function(link,index){
      

          if(link.style.animation){
              link.style.animation=``;
          }
          else{
              link.style.animation = `navLink 0.5s ease forwards ${index/7 + 1}s`;
      }
         });
})

var counter =0;

prev.addEventListener("click",function(){
    if(counter===0){
        counter= singleReview.length;
    }
  
        counter--;
   

    img.setAttribute("src",singleReview[counter].image);
    reviewName.innerHTML = singleReview[counter].name;
    para.innerHTML = singleReview[counter].single;

})

next.addEventListener("click",function(){
    if(counter== singleReview.length-1){
        counter=-1;
    }
  
    counter++;

    img.setAttribute("src",singleReview[counter].image);
    reviewName.innerHTML = singleReview[counter].name;
    para.innerHTML = singleReview[counter].single;

})


const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./image/Menu/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./image/Menu/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./image/Menu/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./image/Menu/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./image/Menu/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./image/Menu/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./image/Menu/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./image/Menu/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./image/Menu/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "./image/Menu/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];


function displayItems(Menu){
      var menuItem = Menu.map(function(item){
          return `  <div class="menu-item">
              <img src="${item.img}" alt="">
               <div class="item-info">

                  <div class="item-price">
                      <div class="menu-title">${item.title}</div>
                       <div class="price">$${item.price}</div>
                  </div>
                   <div class="description">${item.desc}</div>
              
               </div>   
          </div>`;
      })

      menuItem = menuItem.join("");
      section.innerHTML = menuItem;
  }


  window.addEventListener("DOMContentLoaded",function(){
      displayItems(menu);
  });

  var filteredArr = [];
  menuBtn.forEach(function(bttn){
      bttn.addEventListener("click",function(){

        if(bttn.innerHTML.toLowerCase()=="all"){
            displayItems(menu);
        }
        else{
            filteredArr = menu.filter(function(item){

                 

                if(item.category.includes(bttn.innerHTML.toLowerCase())){
                    console.log(item);
                   return item;
                }
       })
       displayItems(filteredArr);
        }
      })
     
  })