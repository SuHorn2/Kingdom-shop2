// const slides=[{img:"image/512x512bb.jpg"}];
document.getElementById("sign").addEventListener("click",()=>{
    document.getElementById('signin').style.display="block";
    document.getElementById('main').style.opacity=0.2;
    document.getElementById('firstmenu').style.opacity=0.2;
    document.getElementById('wrapper').style.opacity=0.2;
    document.getElementById('secondmenu').style.opacity=0.2;
});
document.getElementById("cancel").addEventListener("click",()=>{
    document.getElementById('signin').style.display="none";
    document.getElementById('main').style.opacity=1;
    document.getElementById('firstmenu').style.opacity=1;
    document.getElementById('wrapper').style.opacity=1;
    document.getElementById('secondmenu').style.opacity=1;
});
document.getElementById("signin-button").addEventListener("click",()=>{
    document.getElementById('signinbefor').style.display="none";
    document.getElementById('signinafter-btt').style.display="block";
});
document.getElementById("signinafter-btt").addEventListener("click",()=>{
    document.getElementById('signin').style.display="none";
    document.getElementById('main').style.opacity=1;
    document.getElementById('firstmenu').style.opacity=1;
    document.getElementById('wrapper').style.opacity=1;
    document.getElementById('secondmenu').style.opacity=1;
});
const slids=[
    {
        img:"proimg/picslide.png"
    }
];
var slideses="";
for(let i in slids){
    slideses+=`
        <img src="${slids[i]["img"]}" alt="">;
    `;
    document.getElementById("slide").innerHTML=slideses;
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
const carouselimage1=[
    {
        img:"proimg/pic1.jpg"
    }
    ,
    {
        img:"proimg/pic2.webp"
    },
    {
        img:"proimg/download.jpg"
    },
    {
        img:"proimg/pic3.jpg"
    },
    {
        img:"proimg/pic6.jpg"
    },
    {
        img:"proimg/pic.4.jpg"
    }    
];
var carouselimg="";
for(let i in carouselimage1){
    carouselimg+=`
    <img class="imgin" src="${carouselimage1[i]["img"]}" alt="img">
    `;
    document.getElementById("img_caro").innerHTML=carouselimg;
};
const carousel=document.querySelector(".img_caro"),
 firstImg=carousel.querySelectorAll(".imgin")[0];
arrowIcons=document.querySelectorAll(".wrapper i");
 
let isDragstart=false,prevPageX,prevScrollLeft;
let firstImgWidth=firstImg.clientWidth + 1220 ;
arrowIcons.forEach(icon=>{
    icon.addEventListener("click",()=>{
        carousel.scrollLeft+=icon.id=="right"?-firstImgWidth : +firstImgWidth;
    });
});

const dragstart=(e)=>{
    isDragstart = true;
    prevPageX=e.pageX;
    prevScrollLeft=carousel.scrollLeft;
};
const dragging=(e)=>{
    if(!isDragstart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff=e.pageX-prevPageX;
    carousel.scrollLeft=prevScrollLeft-positionDiff;
    // console.log(e.pageX);
};
const dragstop=()=>{
    isDragstart=false;
    carousel.classList.remove("dragging");
};
carousel.addEventListener("mousedown",dragstart);
carousel.addEventListener("mousemove",dragging);
carousel.addEventListener("mouseup",dragstop);
const boxmain1=[
    {
        imgm1:"proimg/pic7.jpg",
        txtm1:"Sneaker brand news",
        url:"propart1.html"
    }
    ,
    {
        imgm1:"proimg/pic8.jpg",
        txtm1:"CPU corei9",
        url:"propart4.html"
    }
    ,
    {
        imgm1:"proimg/pic9.jpg",
        txtm1:"Blender ",
        url:"propart5.html"
    }
    ,
    {
        imgm1:"proimg/pic11.webp",
        txtm1:"Electronic",
        url:"propart5.html"
    }
];
var box1="";
for(let i in boxmain1){
    box1+=` <div class="boxmain1_1">
    <div class="boxmain1_1img">
    <img src="${boxmain1[i]["imgm1"]}" alt=""></div>
    <div class="boxmain1_1txt">${boxmain1[i]["txtm1"]}</div>
    <div class="boxmain1_btt">
    <a href="${boxmain1[i]["url"]}">Seemore...</a>
</div>
    </div>`;
    document.getElementById("boxmain1").innerHTML=box1;
};
const boxmain2=[
    {
        img2:"proimg/pic12.jpg",
        text2:"Gray shirt",
        price2:"12.99"
    },
    {
        img2:"proimg/pic13.jpg",
        text2:"Summer shirt",
        price2:"13.00"
    },
    {
        img2:"proimg/pic14.jpg",
        text2:"Winter shirt",
        price2:"14.00"
    },
    {
        img2:"proimg/pic15.jpg",
        text2:"Pair shirt",
        price2:"11.00"
    },
];
var box2="";
for(let i in boxmain2){
    box2+=`
    <div class="boxmain2_1">
    <div class="boxmain2_1img">
        <img src="${boxmain2[i]["img2"]}" alt="">
    </div>
    <div class="boxmain2_1txt">${boxmain2[i]["text2"]}</div>
    <div class="boxmain2_add">
            <button class="add2">BUY</button>
            <div class="mainprice2">${boxmain2[i]["price2"]}</div>
    </div>
    </div>`;

   document.getElementById("boxmainbig2").innerHTML=box2;
};
const boxmain3=[
    {
        img3:"proimg/pic16.jpg",
        text3:"Pc build",
        price3:"499.99"
    },
    {
        img3:"proimg/pic17.jpg",
        text3:"GPU",
        price3:"570.00"
    },
    {
        img3:"proimg/pic18.webp",
        text3:"Cpu",
        price3:"110.00"
    },
    {
        img3:"proimg/pic19.webp",
        text3:"Power supplay",
        price3:"50.00"
    },
];
var box3="";
for(let i in boxmain3){
    box3+=`
    <div class="boxmain3_1">
        <div class="boxmain3_1img">
            <img src="${boxmain3[i]["img3"]}" alt="">
        </div>
        <div class="boxmain3_1txt">${boxmain3[i]["text3"]}</div>
        <div class="boxmain3_add">
                <button class="add3">BUY</button>
                <div class="mainprice3">${boxmain3[i]["price3"]}</div>
        </div>
    </div>
    `;

   document.getElementById("boxmainbig3").innerHTML=box3;
};
const boxmain4=[
    {
        img4:"proimg/pic21.webp",
        text4:"Sneaker",
        price4:"49.99"
    },
    {
        img4:"proimg/pic22.jpg",
        text4:"Blue sneaker",
        price4:"43.00"
    },
    {
        img4:"proimg/pic23.jpg",
        text4:"New model",
        price4:"40.00"
    },
    {
        img4:"proimg/pic24.jpg",
        text4:"black Sneaker",
        price4:"60.00"
    },
];
var box4="";
for(let i in boxmain4){
    box4+=`
    <div class="boxmain4_1">
    <div class="boxmain4_1img">
        <img src="${boxmain4[i]["img4"]}" alt="">
    </div>
    <div class="boxmain4_1txt">${boxmain4[i]["text4"]}</div>
    <div class="boxmain4_add">
            <button class="add4">BUY</button>
            <div class="mainprice4">${boxmain4[i]["price4"]}</div>
    </div>
</div>
    `;

   document.getElementById("boxmainbig4").innerHTML=box4;
};
const boxmain5=[
    {
        img5:"proimg/pic25.jpg",
        text5:"black gon",
        price5:"44.99"
    },
    {
        img5:"proimg/pic26.jpg",
        text5:"baskelt ball",
        price5:"13.00"
    },
    {
        img5:"proimg/pic27.webp",
        text5:"Blue",
        price5:"15.00"
    },
    {
        img5:"proimg/pic28.png",
        text5:"Tennis",
        price5:"31.00"
    },
];
var box5="";
for(let i in boxmain5){
    box5+=`
    <div class="boxmain5_1">
    <div class="boxmain5_1img">
        <img src="${boxmain5[i]["img5"]}" alt="">
    </div>
    <div class="boxmain5_1txt">${boxmain5[i]["text5"]}</div>
    <div class="boxmain5_add">
            <button class="add5" id="add5">BUY</button>
            <div class="mainprice5">${boxmain5[i]["price5"]}</div>
    </div>
</div>
    `;

   document.getElementById("boxmainbig5").innerHTML=box5;
};
const context=[
    {
        img:"proimg/picslide.png"
    }
];
var context1="";
for(let i in context){
    context1+=` <img src="${slids[i]["img"]}" alt="">;`;
    document.getElementById("contextimg").innerHTML=context1;
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
document.querySelectorAll('.add5').forEach((button)=>{
    button.addEventListener('click',()=>{
            const chang=  document.querySelector('.add5');
        if(chang.innerHTML==='BUY'){
            document.querySelector('.add5').innerHTML = 'Thank for buy';
        }else{
            document.querySelector('.add5').innerHTML = 'BUY';
        } 
    });
});

