let i = 0;
let images = [];
let time = 3000;
images[0] = "img1.jpg";
images[1] = "img2.jpg";
images[2] = "img3.jpg";
images[3] = "img4.jpg";


function changeImg(){
    document.getElementById('aa').src= images[i];
	if(i < images.length - 1){
	  i++; 
	}else { 
		i = 0;
	}

	setTimeout("changeImg()", time);
}
window.onload=changeImg;