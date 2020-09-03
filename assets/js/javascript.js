//nav-bar-start;
let bars=document.getElementById("responcive_icon_1");
let times=document.getElementById("maddy");
let mobileNav=document.getElementById("mob_nav_bar");

function bar(){
	bars.style.display="none"
	times.style.display="flex";
	mobileNav.style.display="flex"
}
function time(){
	bars.style.display="flex"
	times.style.display="none";
	mobileNav.style.display="none";
}

bars.addEventListener("click",bar);
times.addEventListener("click",time);
//nav-bar-start;

//slider-start;
let slider=document.getElementById("imgSlide");
let img=["images/slider-1.jpg",
         "images/slider-2.jpg",
         "images/slider-3.jpg",
         "images/slider-4.jpg",
         "images/slider-5.jpg"
        ];
let index=0;
setInterval(slide,1500);
function slide(){
	slider.src=img[index];
	index++;
	if(index>img.length-1){
		index=0;
	}
}
//slider-end;

//about-section-start;
let skill=document.getElementById("about_button_1");
let weDo=document.getElementById("about_button_2");

function skillShow(){
	document.getElementById("content_about_skills").style.display="block";
	document.getElementById("content_about").style.display="none";
	document.getElementById("content_about_we_do").style.display="none";
}

function weShow(){
	document.getElementById("content_about_skills").style.display="none";
	document.getElementById("content_about").style.display="none";
	document.getElementById("content_about_we_do").style.display="block";
}

skill.addEventListener("click",skillShow);
weDo.addEventListener("click",weShow);
//about-section-end;


//gallery-section-start;
let development=document.getElementById("web_development");
let application=document.getElementById("mobile_application");
let marketing=document.getElementById("digital_marketing");
let windowApplication=document.getElementById("window_application");
let project=document.getElementById("all_project");
let gallery=document.getElementById("img_gallery");
let imgDevelopment=document.getElementById("img_gallery_development");
let imgMobile=document.getElementById("img_gallery_mobile_application");
let imgDigital=document.getElementById("img_gallery_digital_marketing");
let imgApplication=document.getElementById("img_gallery_window_application");

function webDevelopment(){
	gallery.style.display="none";
	imgDevelopment.style.display="block";
	imgMobile.style.display="none";
	imgDigital.style.display="none";
	imgApplication.style.display="none";
}
function mobileApplication(){
	gallery.style.display="none";
	imgDevelopment.style.display="none";
	imgMobile.style.display="block";
	imgDigital.style.display="none";
	imgApplication.style.display="none";
}
function digitalMarketing(){
	gallery.style.display="none";
	imgDevelopment.style.display="none";
	imgMobile.style.display="none";
	imgDigital.style.display="block";
	imgApplication.style.display="none";
}
function adword(){
	gallery.style.display="none";
	imgDevelopment.style.display="none";
	imgMobile.style.display="none";
	imgDigital.style.display="none";
	imgApplication.style.display="block";
}
function allProject(){
	gallery.style.display="block";
	imgDevelopment.style.display="none";
	imgMobile.style.display="none";
	imgDigital.style.display="none";
	imgApplication.style.display="none";
}
development.addEventListener("click",webDevelopment);
application.addEventListener("click",mobileApplication);
marketing.addEventListener("click",digitalMarketing);
windowApplication.addEventListener("click",adword);
project.addEventListener("click",allProject);


//gallery-section-end;

//client-section-start;
function switch_1(){
	document.getElementById("client_img_text_first").style.display="block";
	document.getElementById("client_img_text_secound").style.display="none";
	document.getElementById("client_img_text_thired").style.display="none";
}
function switch_2(){
	document.getElementById("client_img_text_first").style.display="none";
	document.getElementById("client_img_text_secound").style.display="block";
	document.getElementById("client_img_text_thired").style.display="none";
}
function switch_3(){
	document.getElementById("client_img_text_first").style.display="none";
	document.getElementById("client_img_text_secound").style.display="none";
	document.getElementById("client_img_text_thired").style.display="block";
}

//client-section-end;