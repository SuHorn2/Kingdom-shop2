const boxmainsp1=[
    {
        img:"imagesport/picsp1.jpg" ,
        text:"black spirt",
        price:"12.99"
    },
    {
        img:"imagesport/picsp2.jpg",
        text:"black spirt",
        price:"13.00"
    },
    {
        img:"imagesport/picsp3.jpg",
        text:"black spirt",
        price:"14.00"
    },
    {
        img:"imagesport/picsp4.jpg",
        text:"black spirt",
        price:"11.00"
    },
];
var boxsp1="";
for(let i in boxmainsp1){
    boxsp1+=`
            <div class="smailboxsp1">
                <div class="smailboxsp1img">
                    <img src="${boxmainsp1[i]["img"]}" alt="">
                </div>
                <div class="smailboxsp1txt">${boxmainsp1[i]["text"]}</div>
                <div class="smailboxsp1add">
                    <button class="addsp1">BUY</button>
                    <div class="mainprice1">${boxmainsp1[i]["price"]}</div>
                </div>
            </div>
    `;

   document.getElementById("boxsp1-1").innerHTML=boxsp1;
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


const boxmainsp2=[
    {
        img:"imagesport/picsp5.jpg" ,
        text:"black spirt",
        price:"12.99"
    },
    {
        img:"imagesport/picsp6.jpg",
        text:"black spirt",
        price:"13.00"
    },
    {
        img:"imagesport/picsp7.jpg",
        text:"black spirt",
        price:"14.00"
    },
    {
        img:"imagesport/picsp8.jpg",
        text:"black spirt",
        price:"11.00"
    },
];
var boxsp2="";
for(let i in boxmainsp1){
    boxsp2+=`
            <div class="smailboxsp2">
                <div class="smailboxsp2img">
                    <img src="${boxmainsp2[i]["img"]}" alt="">
                </div>
                <div class="smailboxsp2txt">${boxmainsp2[i]["text"]}</div>
                <div class="smailboxsp2add">
                    <button class="addsp2">BUY</button>
                    <div class="mainprice2">${boxmainsp2[i]["price"]}</div>
                </div>
            </div>
    `;

   document.getElementById("boxsp2-1").innerHTML=boxsp2;
};
const boxmainsp3=[
    {
        img:"imagesport/picsp9.jpg" ,
        text:"black spirt",
        price:"12.99"
    },
    {
        img:"imagesport/picsp10.jpg",
        text:"black spirt",
        price:"13.00"
    },
    {
        img:"imagesport/picsp11.jpg",
        text:"black spirt",
        price:"14.00"
    },
    {
        img:"imagesport/picsp12.jpg",
        text:"black spirt",
        price:"11.00"
    },
];
var boxsp3="";
for(let i in boxmainsp3){
    boxsp3+=`
            <div class="smailboxsp3">
                <div class="smailboxsp3img">
                    <img src="${boxmainsp3[i]["img"]}" alt="">
                </div>
                <div class="smailboxsp3txt">${boxmainsp3[i]["text"]}</div>
                <div class="smailboxsp3add">
                    <button class="addsp2">BUY</button>
                    <div class="mainprice2">${boxmainsp3[i]["price"]}</div>
                </div>
            </div>
    `;

   document.getElementById("boxsp3-1").innerHTML=boxsp3;
};
const boxmainsp4=[
    {
        img:"imagesport/picsp13.jpg" ,
        text:"black spirt",
        price:"12.99"
    },
    {
        img:"imagesport/picsp14.jpg",
        text:"black spirt",
        price:"13.00"
    },
    {
        img:"imagesport/picsp15.jpg",
        text:"black spirt",
        price:"14.00"
    },
    {
        img:"imagesport/picsp16.jpg",
        text:"black spirt",
        price:"11.00"
    },
];
var boxsp4="";
for(let i in boxmainsp4){
    boxsp4+=`
    <div class="smailboxsp4">
        <div class="smailboxsp4img">
            <img src="${boxmainsp4[i]["img"]}" alt="">
        </div>
        <div class="smailboxsp4txt">${boxmainsp4[i]["text"]}</div>
        <div class="smailboxsp4add">
            <button class="addsp2">BUY</button>
            <div class="mainprice2">${boxmainsp4[i]["price"]}</div>
        </div>
    </div>
    `;

   document.getElementById("boxsp4-1").innerHTML=boxsp4;
};
const boxmainsp5=[
    {
        img:"imagesport/picsp17.jpg" ,
        text:"black spirt",
        price:"12.99"
    },
    {
        img:"imagesport/picsp18.jpg",
        text:"black spirt",
        price:"13.00"
    },
    {
        img:"imagesport/picsp19.jpg",
        text:"black spirt",
        price:"14.00"
    },
    {
        img:"imagesport/picsp20.jpg",
        text:"black spirt",
        price:"11.00"
    },
];
var boxsp5="";
for(let i in boxmainsp5){
    boxsp5+=`
    <div class="smailboxsp5">
        <div class="smailboxsp5img">
            <img src="${boxmainsp5[i]["img"]}" alt="">
        </div>
        <div class="smailboxsp5txt">${boxmainsp5[i]["text"]}</div>
        <div class="smailboxsp5add">
            <button class="addsp2">BUY</button>
            <div class="mainprice2">${boxmainsp5[i]["price"]}</div>
        </div>
    </div>
    `;

   document.getElementById("boxsp5-1").innerHTML=boxsp5;
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