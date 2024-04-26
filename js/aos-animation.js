AOS.init({
  offset: 100,
  once: true,
  duration: 1000,
});

AOS.init({
  offset: 200,
  duration: 1000,
  selector: ".aos-title",
});

AOS.init({
  offset: 300,
  duration: 1000,
  selector: ".aos-subtitle",
});

AOS.init({
  offset: 300,
  duration: 1000,
  once: true, 
  selector: ".aos-box-1",
});

AOS.init({
  offset: 300,
  duration: 1000,
  once: true,
  selector: ".aos-box-2",
});

AOS.init({
  offset: 300,
  duration: 1000,
  once: true,
  selector: ".aos-box-3",
});

AOS.init({
  offset: 180,
  duration: 1000,
  once: true,
  selector: ".aos-box-4",
});

// window.onload = function () {
//   const screenWidth = window.innerWidth;

//   if (screenWidth <= 767) {
//     const aosBoxes = document.querySelectorAll('.aos-box');
//     aosBoxes.forEach(function (box) {
//       box.setAttribute('data-aos', 'fade-up');
//     });
//   }
// }