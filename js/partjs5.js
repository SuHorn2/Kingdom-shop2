const boxmainel1=[
    {
        img:"imageElectricity/picel1.jpg",
        text:"black elirt",
        price:"12.99"
    },
    {
        img:"imageElectricity/picel2.jpg",
        text:"black elirt",
        price:"13.00"
    },
    {
        img:"imageElectricity/picel3.jpg",
        text:"black elirt",
        price:"14.00"
    },
    {
        img:"imageElectricity/picel4.jpg",
        text:"black elirt",
        price:"11.00"
    },
];
var boxel1="";
for(let i in boxmainel1){
    boxel1+=`
            <div class="smailboxel1">
                <div class="smailboxel1img">
                    <img src="${boxmainel1[i]["img"]}" alt="">
                </div>
                <div class="smailboxel1txt">${boxmainel1[i]["text"]}</div>
                <div class="smailboxel1add">
                    <button class="addel1">BUY</button>
                    <div class="mainprice1">${boxmainel1[i]["price"]}</div>
                </div>
            </div>
    `;

   document.getElementById("boxel1-1").innerHTML=boxel1;
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


const boxmainel2=[
    {
        img:"imageElectricity/picel5.jpg",
        text:"black elirt",
        price:"12.99"
    },
    {
        img:"imageElectricity/picel6.jpg",
        text:"black elirt",
        price:"13.00"
    },
    {
        img:"imageElectricity/picel7.jpg",
        text:"black elirt",
        price:"14.00"
    },
    {
        img:"imageElectricity/picel8.jpg",
        text:"black elirt",
        price:"11.00"
    },
];
var boxel2="";
for(let i in boxmainel1){
    boxel2+=`
            <div class="smailboxel2">
                <div class="smailboxel2img">
                    <img src="${boxmainel2[i]["img"]}" alt="">
                </div>
                <div class="smailboxel2txt">${boxmainel2[i]["text"]}</div>
                <div class="smailboxel2add">
                    <button class="addel2">BUY</button>
                    <div class="mainprice2">${boxmainel2[i]["price"]}</div>
                </div>
            </div>
    `;

   document.getElementById("boxel2-1").innerHTML=boxel2;
};
const boxmainel3=[
    {
        img:"imageElectricity/picel9.jpg",
        text:"black elirt",
        price:"12.99"
    },
    {
        img:"imageElectricity/picel10.jpg",
        text:"black elirt",
        price:"13.00"
    },
    {
        img:"imageElectricity/picel11.jpg",
        text:"black elirt",
        price:"14.00"
    },
    {
        img:"imageElectricity/picel12.jpg",
        text:"black elirt",
        price:"11.00"
    },
];
var boxel3="";
for(let i in boxmainel3){
    boxel3+=`
            <div class="smailboxel3">
                <div class="smailboxel3img">
                    <img src="${boxmainel3[i]["img"]}" alt="">
                </div>
                <div class="smailboxel3txt">${boxmainel3[i]["text"]}</div>
                <div class="smailboxel3add">
                    <button class="addel2">BUY</button>
                    <div class="mainprice2">${boxmainel3[i]["price"]}</div>
                </div>
            </div>
    `;

   document.getElementById("boxel3-1").innerHTML=boxel3;
};
const boxmainel4=[
    {
        img:"imageElectricity/picel13.jpg",
        text:"black elirt",
        price:"12.99"
    },
    {
        img:"imageElectricity/picel14.jpg",
        text:"black elirt",
        price:"13.00"
    },
    {
        img:"imageElectricity/picel15.jpg",
        text:"black elirt",
        price:"14.00"
    },
    {
        img:"imageElectricity/picel16.jpg",
        text:"black elirt",
        price:"11.00"
    },
];
var boxel4="";
for(let i in boxmainel4){
    boxel4+=`
    <div class="smailboxel4">
        <div class="smailboxel4img">
            <img src="${boxmainel4[i]["img"]}" alt="">
        </div>
        <div class="smailboxel4txt">${boxmainel4[i]["text"]}</div>
        <div class="smailboxel4add">
            <button class="addel2">BUY</button>
            <div class="mainprice2">${boxmainel4[i]["price"]}</div>
        </div>
    </div>
    `;

   document.getElementById("boxel4-1").innerHTML=boxel4;
};
const boxmainel5=[
    {
        img:"imageElectricity/picel17.jpg",
        text:"black elirt",
        price:"12.99"
    },
    {
        img:"imageElectricity/picel18.jpg",
        text:"black elirt",
        price:"13.00"
    },
    {
        img:"imageElectricity/picel19.jpg",
        text:"black elirt",
        price:"14.00"
    },
    {
        img:"imageElectricity/picel20.jpg",
        text:"black elirt",
        price:"11.00"
    },
];
var boxel5="";
for(let i in boxmainel5){
    boxel5+=`
    <div class="smailboxel5">
        <div class="smailboxel5img">
            <img src="${boxmainel5[i]["img"]}" alt="">
        </div>
        <div class="smailboxel5txt">${boxmainel5[i]["text"]}</div>
        <div class="smailboxel5add">
            <button class="addel2">BUY</button>
            <div class="mainprice2">${boxmainel5[i]["price"]}</div>
        </div>
    </div>
    `;

   document.getElementById("boxel5-1").innerHTML=boxel5;
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