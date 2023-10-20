const boxmainsh1=[
    {
        img:"imageshirt/picsh1.jpg",
        text:"black shirt",
        price:"12.99"
    },
    {
        img:"imageshirt/picsh2.jpg",
        text:"black shirt",
        price:"13.00"
    },
    {
        img:"imageshirt/picsh3.jpg",
        text:"black shirt",
        price:"14.00"
    },
    {
        img:"imageshirt/picsh4.jpg",
        text:"black shirt",
        price:"11.00"
    },
];
var boxsh1="";
for(let i in boxmainsh1){
    boxsh1+=`
            <div class="smailboxsh1">
                <div class="smailboxsh1img">
                    <img src="${boxmainsh1[i]["img"]}" alt="">
                </div>
                <div class="smailboxsh1txt">${boxmainsh1[i]["text"]}</div>
                <div class="smailboxsh1add">
                    <button class="addsh1">BUY</button>
                    <div class="mainprice1">${boxmainsh1[i]["price"]}</div>
                </div>
            </div>
    `;

   document.getElementById("boxsh1-1").innerHTML=boxsh1;
};
const boxmainsh2=[
    {
        img:"imageshirt/picsh5.jpg",
        text:"black shirt",
        price:"12.99"
    },
    {
        img:"imageshirt/picsh6.jpg",
        text:"black shirt",
        price:"13.00"
    },
    {
        img:"imageshirt/picsh7.jpg",
        text:"black shirt",
        price:"14.00"
    },
    {
        img:"imageshirt/picsh8.jpg",
        text:"black shirt",
        price:"11.00"
    },
];
var boxsh2="";
for(let i in boxmainsh2){
    boxsh2+=`
            <div class="smailboxsh2">
                <div class="smailboxsh2img">
                    <img src="${boxmainsh2[i]["img"]}" alt="">
                </div>
                <div class="smailboxsh2txt">${boxmainsh2[i]["text"]}</div>
                <div class="smailboxsh2add">
                    <button class="addsh2">BUY</button>
                    <div class="mainprice2">${boxmainsh2[i]["price"]}</div>
                </div>
            </div>
    `;

   document.getElementById("boxsh2-1").innerHTML=boxsh2;
};
const boxmainsh3=[
    {
        img:"imageshirt/picsh9.jpg",
        text:"black shirt",
        price:"12.99"
    },
    {
        img:"imageshirt/picsh10.jpg",
        text:"black shirt",
        price:"13.00"
    },
    {
        img:"imageshirt/picsh11.jpg",
        text:"black shirt",
        price:"14.00"
    },
    {
        img:"imageshirt/picsh12.jpg",
        text:"black shirt",
        price:"11.00"
    },
];
var boxsh3="";
for(let i in boxmainsh3){
    boxsh3+=`
            <div class="smailboxsh3">
                <div class="smailboxsh3img">
                    <img src="${boxmainsh3[i]["img"]}" alt="">
                </div>
                <div class="smailboxsh3txt">${boxmainsh3[i]["text"]}</div>
                <div class="smailboxsh3add">
                    <button class="addsh2">BUY</button>
                    <div class="mainprice2">${boxmainsh3[i]["price"]}</div>
                </div>
            </div>
    `;

   document.getElementById("boxsh3-1").innerHTML=boxsh3;
};
const boxmainsh4=[
    {
        img:"imageshirt/picsh13.jpg",
        text:"black shirt",
        price:"12.99"
    },
    {
        img:"imageshirt/picsh14.jpg",
        text:"black shirt",
        price:"13.00"
    },
    {
        img:"imageshirt/picsh15.jpg",
        text:"black shirt",
        price:"14.00"
    },
    {
        img:"imageshirt/picsh16.jpg",
        text:"black shirt",
        price:"11.00"
    },
];
var boxsh4="";
for(let i in boxmainsh4){
    boxsh4+=`
    <div class="smailboxsh4">
        <div class="smailboxsh4img">
            <img src="${boxmainsh4[i]["img"]}" alt="">
        </div>
        <div class="smailboxsh4txt">${boxmainsh4[i]["text"]}</div>
        <div class="smailboxsh4add">
            <button class="addsh2">BUY</button>
            <div class="mainprice2">${boxmainsh4[i]["price"]}</div>
        </div>
    </div>
    `;

   document.getElementById("boxsh4-1").innerHTML=boxsh4;
};
const boxmainsh5=[
    {
        img:"imageshirt/picsh17.jpg",
        text:"black shirt",
        price:"12.99"
    },
    {
        img:"imageshirt/picsh18.jpg",
        text:"black shirt",
        price:"13.00"
    },
    {
        img:"imageshirt/picsh19.jpg",
        text:"black shirt",
        price:"14.00"
    },
    {
        img:"imageshirt/picsh20.jpg",
        text:"black shirt",
        price:"11.00"
    },
];
var boxsh5="";
for(let i in boxmainsh5){
    boxsh5+=`
    <div class="smailboxsh5">
        <div class="smailboxsh5img">
            <img src="${boxmainsh5[i]["img"]}" alt="">
        </div>
        <div class="smailboxsh5txt">${boxmainsh5[i]["text"]}</div>
        <div class="smailboxsh5add">
            <button class="addsh2">BUY</button>
            <div class="mainprice2">${boxmainsh5[i]["price"]}</div>
        </div>
    </div>
    `;

   document.getElementById("boxsh5-1").innerHTML=boxsh5;
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
const contextemail=[
    {
        logo:"fa-brands fa-facebook"
    },
    {
        logo:"fa-brands fa-tiktok"
    },
    {
        logo:"fa-brands fa-youtube"
    },
    {
        logo:"fa-brands fa-instagram"
    },
    {
        logo:"fa-brands fa-twitter"
    },
];
var contextemail1="";
for(let i in contextemail){
    contextemail1+=` 
    <li class="contextemail1">
        <i class="${contextemail[i]["logo"]}"></i>
    </li>
    `;
    document.getElementById("contextemail").innerHTML= contextemail1;
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