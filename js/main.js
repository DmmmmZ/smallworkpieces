let magnifying_area = document.getElementById("magnifying_area");
let magnifying_img = document.getElementById("magnifying_img");

magnifying_area.addEventListener("mousemove", function(e) {
    clientX = e.clientX - magnifying_area.offsetLeft;
    clientY = e.clientY - magnifying_area.offsetTop;

    mWidth = magnifying_area.offsetWidth;
    mHeight = magnifying_area.offsetHeight;

    clientX = clientX / mWidth * 100;
    clientY = clientY / mHeight * 100;

    magnifying_img.style.transform = 'translate(-'+clientX+'%,-'+clientY+'%) scale(2)';
    // magnifying_img.style.transform = 'translate(-50%,-50%) scale(2)';

});

magnifying_area.addEventListener("mouseleave", function() {
    magnifying_img.style.transform = 'translate(-50%,-50%) scale(1)';

});