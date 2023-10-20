const boxmainco1=[
    {
        img:"imagecomputer/piccom1.jpg",
        text:"black shirt",
        price:"12.99"
    },
    {
        img:"imagecomputer/piccom2.jpg",
        text:"black shirt",
        price:"13.00"
    },
    {
        img:"imagecomputer/piccom3.webp",
        text:"black shirt",
        price:"14.00"
    },
    {
        img:"imagecomputer/piccom4.jpg",
        text:"black shirt",
        price:"11.00"
    },
];
var boxco1="";
for(let i in boxmainco1){
    boxco1+=`
            <div class="smailboxco1">
                <div class="smailboxco1img">
                    <img src="${boxmainco1[i]["img"]}" alt="">
                </div>
                <div class="smailboxco1txt">${boxmainco1[i]["text"]}</div>
                <div class="smailboxco1add">
                    <button class="addco1">BUY</button>
                    <div class="mainprice1">${boxmainco1[i]["price"]}</div>
                </div>
            </div>
    `;

   document.getElementById("boxco1-1").innerHTML=boxco1;
};
const context=[
    {
        img:"/proimg/picslide.png"
    }
];
var context1="";
for(let i in context){
    context1+=` <img src="${context[i]["img"]}" alt="">;`;
    document.getElementById("contextimg").innerHTML=context1;
};


const boxmainco2=[
    {
        img:"imagecomputer/piccom5.jpg",
        text:"black shirt",
        price:"12.99"
    },
    {
        img:"imagecomputer/piccom6.jpg",
        text:"black shirt",
        price:"13.00"
    },
    {
        img:"imagecomputer/piccom7.jpg",
        text:"black shirt",
        price:"14.00"
    },
    {
        img:"imagecomputer/piccom8.jpg",
        text:"black shirt",
        price:"11.00"
    },
];
var boxco2="";
for(let i in boxmainco1){
    boxco2+=`
            <div class="smailboxco2">
                <div class="smailboxco2img">
                    <img src="${boxmainco2[i]["img"]}" alt="">
                </div>
                <div class="smailboxco2txt">${boxmainco2[i]["text"]}</div>
                <div class="smailboxco2add">
                    <button class="addco2">BUY</button>
                    <div class="mainprice2">${boxmainco2[i]["price"]}</div>
                </div>
            </div>
    `;

   document.getElementById("boxco2-1").innerHTML=boxco2;
};
const boxmainco3=[
    {
        img:"imagecomputer/piccom9.jpg",
        text:"black shirt",
        price:"12.99"
    },
    {
        img:"imagecomputer/piccom10.jpg",
        text:"black shirt",
        price:"13.00"
    },
    {
        img:"imagecomputer/piccom11.avif",
        text:"black shirt",
        price:"14.00"
    },
    {
        img:"imagecomputer/piccom12.jpg",
        text:"black shirt",
        price:"11.00"
    },
];
var boxco3="";
for(let i in boxmainco3){
    boxco3+=`
            <div class="smailboxco3">
                <div class="smailboxco3img">
                    <img src="${boxmainco3[i]["img"]}" alt="">
                </div>
                <div class="smailboxco3txt">${boxmainco3[i]["text"]}</div>
                <div class="smailboxco3add">
                    <button class="addco2">BUY</button>
                    <div class="mainprice2">${boxmainco3[i]["price"]}</div>
                </div>
            </div>
    `;

   document.getElementById("boxco3-1").innerHTML=boxco3;
};
const boxmainco4=[
    {
        img:"imagecomputer/piccom13.jpg",
        text:"black shirt",
        price:"12.99"
    },
    {
        img:"imagecomputer/piccom14.webp",
        text:"black shirt",
        price:"13.00"
    },
    {
        img:"imagecomputer/piccom15.jpg",
        text:"black shirt",
        price:"14.00"
    },
    {
        img:"imagecomputer/piccom16.jpg",
        text:"black shirt",
        price:"11.00"
    },
];
var boxco4="";
for(let i in boxmainco4){
    boxco4+=`
    <div class="smailboxco4">
        <div class="smailboxco4img">
            <img src="${boxmainco4[i]["img"]}" alt="">
        </div>
        <div class="smailboxco4txt">${boxmainco4[i]["text"]}</div>
        <div class="smailboxco4add">
            <button class="addco2">BUY</button>
            <div class="mainprice2">${boxmainco4[i]["price"]}</div>
        </div>
    </div>
    `;

   document.getElementById("boxco4-1").innerHTML=boxco4;
};
const boxmainco5=[
    {
        img:"imagecomputer/piccom17.jpg",
        text:"black shirt",
        price:"12.99"
    },
    {
        img:"imagecomputer/piccom18.webp",
        text:"black shirt",
        price:"13.00"
    },
    {
        img:"imagecomputer/piccom19.jpg",
        text:"black shirt",
        price:"14.00"
    },
    {
        img:"imagecomputer/piccom20.jpg",
        text:"black shirt",
        price:"11.00"
    },
];
var boxco5="";
for(let i in boxmainco5){
    boxco5+=`
    <div class="smailboxco5">
        <div class="smailboxco5img">
            <img src="${boxmainco5[i]["img"]}" alt="">
        </div>
        <div class="smailboxco5txt">${boxmainco5[i]["text"]}</div>
        <div class="smailboxco5add">
            <button class="addco2">BUY</button>
            <div class="mainprice2">${boxmainco5[i]["price"]}</div>
        </div>
    </div>
    `;

   document.getElementById("boxco5-1").innerHTML=boxco5;
};
const navbar=[
    {
        Name:"home",
        url:"index.html"
    },
    {
        Name:"Shirt",
        url:"propart2.html"
    },
    {
        Name:"Sneakers",
        url:"propart1.html"
    },
    {
        Name:"Sport",
        url:"propart3.html"
    },
    {
        Name:"Compter",
        url:"propart4.html"
    },
    {
        Name:"Electronic",
        url:"propart5.html"
    },

];
var text="";
for(let i in navbar){
    text+=`
    <li class="nav-item">
    <a class="nav-link" href="${navbar[i]["url"]}">${navbar[i]["Name"]}</a>
 </li>
    `;
   document.getElementById("navbar-nav").innerHTML=text;
};