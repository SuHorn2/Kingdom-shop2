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
// sneaker
const boxmainsn1=[
    {
        img:"imagesneaker/picsn1.jpg",
        text:"black shirt",
        price:"12.99"
    },
    {
        img:"imagesneaker/picsn2.jpg",
        text:"black shirt",
        price:"13.00"
    },
    {
        img:"imagesneaker/picsn3.jpg",
        text:"black shirt",
        price:"14.00"
    },
    {
        img:"imagesneaker/picsn4.jpg",
        text:"black shirt",
        price:"11.00"
    },
];
var boxsn1="";
for(let i in boxmainsn1){
    boxsn1+=`
            <div class="smailboxsn1">
                <div class="smailboxsn1img">
                    <img src="${boxmainsn1[i]["img"]}" alt="">
                </div>
                <div class="smailboxsn1txt">${boxmainsn1[i]["text"]}</div>
                <div class="smailboxsn1add">
                    <button class="addsn1">BUY</button>
                    <div class="mainprice1">${boxmainsn1[i]["price"]}</div>
                </div>
            </div>
    `;

   document.getElementById("boxsn1-1").innerHTML=boxsn1;
};
const boxmainsn2=[
    {
        img:"imagesneaker/picsn5.jpg",
        text:"black shirt",
        price:"12.99"
    },
    {
        img:"imagesneaker/picsn6.jpg",
        text:"black shirt",
        price:"13.00"
    },
    {
        img:"imagesneaker/picsn7.jpg",
        text:"black shirt",
        price:"14.00"
    },
    {
        img:"imagesneaker/picsn8.jpg",
        text:"black shirt",
        price:"11.00"
    },
];
var boxsn2="";
for(let i in boxmainsn1){
    boxsn2+=`
            <div class="smailboxsn2">
                <div class="smailboxsn2img">
                    <img src="${boxmainsn2[i]["img"]}" alt="">
                </div>
                <div class="smailboxsn2txt">${boxmainsn2[i]["text"]}</div>
                <div class="smailboxsn2add">
                    <button class="addsn2">BUY</button>
                    <div class="mainprice2">${boxmainsn2[i]["price"]}</div>
                </div>
            </div>
    `;

   document.getElementById("boxsn2-1").innerHTML=boxsn2;
};
const boxmainsn3=[
    {
        img:"imagesneaker/picsn9.jpg",
        text:"black shirt",
        price:"12.99"
    },
    {
        img:"imagesneaker/picsn10.jpg",
        text:"black shirt",
        price:"13.00"
    },
    {
        img:"imagesneaker/picsn11.jpg",
        text:"black shirt",
        price:"14.00"
    },
    {
        img:"imagesneaker/picsn12.jpg",
        text:"black shirt",
        price:"11.00"
    },
];
var boxsn3="";
for(let i in boxmainsn3){
    boxsn3+=`
            <div class="smailboxsn3">
                <div class="smailboxsn3img">
                    <img src="${boxmainsn3[i]["img"]}" alt="">
                </div>
                <div class="smailboxsn3txt">${boxmainsn3[i]["text"]}</div>
                <div class="smailboxsn3add">
                    <button class="addsn2">BUY</button>
                    <div class="mainprice2">${boxmainsn3[i]["price"]}</div>
                </div>
            </div>
    `;

   document.getElementById("boxsn3-1").innerHTML=boxsn3;
};
const boxmainsn4=[
    {
        img:"imagesneaker/picsn13.jpg",
        text:"black shirt",
        price:"12.99"
    },
    {
        img:"imagesneaker/picsn14.jpg",
        text:"black shirt",
        price:"13.00"
    },
    {
        img:"imagesneaker/picsn15.jpg",
        text:"black shirt",
        price:"14.00"
    },
    {
        img:"imagesneaker/picsn16.jpg",
        text:"black shirt",
        price:"11.00"
    },
];
var boxsn4="";
for(let i in boxmainsn4){
    boxsn4+=`
    <div class="smailboxsn4">
        <div class="smailboxsn4img">
            <img src="${boxmainsn4[i]["img"]}" alt="">
        </div>
        <div class="smailboxsn4txt">${boxmainsn4[i]["text"]}</div>
        <div class="smailboxsn4add">
            <button class="addsn2">BUY</button>
            <div class="mainprice2">${boxmainsn4[i]["price"]}</div>
        </div>
    </div>
    `;

   document.getElementById("boxsn4-1").innerHTML=boxsn4;
};
const boxmainsn5=[
    {
        img:"imagesneaker/picsn17.jpg",
        text:"black shirt",
        price:"12.99"
    },
    {
        img:"imagesneaker/picsn18.jpg",
        text:"black shirt",
        price:"13.00"
    },
    {
        img:"imagesneaker/picsn19.jpg",
        text:"black shirt",
        price:"14.00"
    },
    {
        img:"imagesneaker/picsn20.jpg",
        text:"black shirt",
        price:"11.00"
    },
];
var boxsn5="";
for(let i in boxmainsn5){
    boxsn5+=`
    <div class="smailboxsn5">
        <div class="smailboxsn5img">
            <img src="${boxmainsn5[i]["img"]}" alt="">
        </div>
        <div class="smailboxsn5txt">${boxmainsn5[i]["text"]}</div>
        <div class="smailboxsn5add">
            <button class="addsn2">BUY</button>
            <div class="mainprice2">${boxmainsn5[i]["price"]}</div>
        </div>
    </div>
    `;

   document.getElementById("boxsn5-1").innerHTML=boxsn5;
};

