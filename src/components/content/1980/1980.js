function Olympics(){
  gsap.to('.olympics .olympics__gallery_wrapper', {
    x: '-30%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.olympics__gallery',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.2,
      markers: false
    }
  });

  gsap.fromTo('.olympics .olympics__bottom .olympics__bottom_image',  {
    top: '50%',
  },{
    top: '35%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.olympics .olympics__bottom',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.2,
      markers: false
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const imgElement = document.querySelector('img.moskow');
    const totalImages = 33;
    let currentImage = 1;

    function padNumber(num) {
      return num.toString().padStart(2, '0');
    }
    function updateImage() {
      imgElement.src = `assets/img/moskow/${padNumber(currentImage)}.png`;
      currentImage = currentImage % totalImages + 1;
    }

    const intervalId = setInterval(updateImage, 300);
    updateImage();
  });
}


let olympics = document.querySelector('.olympics');
if (olympics) {
  Olympics()
}
