var imgBox = document.querySelector('.img-box');
var imgWrap = document.querySelector('.img-wrap');
var originalImg = document.getElementById('originalImg');
var line = document.getElementById('line');

originalImg.style.width = imgBox.offsetWidth + 'px';

// to get the distance of left space
var leftSpace = imgBox.offsetLeft; 

imgBox.onmousemove = function(e){
    var imgBoxWidth = (e.pageX - leftSpace) + 'px';
    imgWrap.style.width = imgBoxWidth;
    line.style.left = imgBoxWidth;
}
