var tl = gsap.timeline();

tl.from(".navbar-brand, .nav-item", {
    y: -80,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.3
})  

// var canvasShape = function(block_id, params) {
//     if (typeof params === "object") {
//         if (typeof params.size === "number") {
//             var radius_ball = params.size;
//         } else {
//             var radius_ball = 10;
//         }
//         if (typeof params.image === "string") {
//             var image = new Image();
//             image.src = params.image;
//         } else {
//             var image = new Image();
//             image.src = 'http://kidschemistry.ru/wp-content/themes/fary-chemical/images/smile/icon_cool.png';
//         }
//         if (typeof params.speed === "number") {
//             var speed_ball = params.speed;
//         } else {
//             var speed_ball = 10;
//         }
//         if (typeof params.number_of_item === "number") {
//             if (params.number_of_item > 250) {
//                 var total_ball = 10; 
//             } else {
//                 var total_ball = params.number_of_item;
//             }
//         } else {
//             var total_ball = 10;
//         }
//         if (typeof params.shape === "string") {
//             var ballShape = params.shape;
//         } else {
//             var ballShape = 'circle';
//         }
//     } else {
//         var radius_ball = 10;
//         var speed_ball = 10;
//         var total_ball = 20;
//         var ballShape = 'square';
//     }

//     var canvas_el = document.createElement('canvas');
//     var canvas = document.getElementById(block_id).appendChild(canvas_el);
//     var ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     var particles = [];
//     var color1 = params.color;
//     document.getElementById(block_id).setAttribute("style", "position: absolute; left: 0; right: 0;");

//     function GetRandomColor() {
//         if (typeof params.color === "string") {
//             return params.color;
//         } else {
//             var r = 0,
//                 g = 0,
//                 b = 0;
//             while (r < 100 && g < 100 && b < 100) {
//                 r = Math.floor(Math.random() * 256);
//                 g = Math.floor(Math.random() * 256);
//                 b = Math.floor(Math.random() * 256);
//             }
//             return "rgb(" + r + "," + g + "," + b + ")";
//         }
//     }

//     var Particle = function(x, y) {
//         if (!x) {
//             this.x = canvas.width * Math.random();
//         } else {
//             this.x = x;
//         }
//         if (!x) {
//             this.y = canvas.height * Math.random();
//         } else {
//             this.y = y;
//         }

//         this.vx = speed_ball * Math.random() - 2;
//         this.vy = speed_ball * Math.random() - 2;
//         this.Color = GetRandomColor();
//     }

//     Particle.prototype.Draw = function(ctx) {
//         if (ballShape == "img") {
//             ctx.drawImage(image, this.x - radius_ball/2, this.y - radius_ball/2, radius_ball, radius_ball);
//         } 
//         // else {
//         //     ctx.fillStyle = this.Color;
//         //     if (ballShape == 'circle') {
//         //         ctx.beginPath();
//         //         ctx.arc(this.x, this.y, radius_ball, 0, 2 * Math.PI, false);
//         //         ctx.fill();
//         //     } else if (ballShape == 'square') {
//         //         ctx.fillRect(this.x, this.y, radius_ball, radius_ball);
//         //     } else if (ballShape == "triangle") {
//         //         var tri = [ctx.beginPath(), ctx.moveTo(this.x, this.y), ctx.lineTo(this.x + radius_ball, this.y + radius_ball), ctx.lineTo(this.x + radius_ball, this.y - radius_ball), ctx.closePath(), ctx.fill()]
//         //     } else if (ballShape == "hexa") {
//         //         var side = 0;
//         //         var size = radius_ball;
//         //         var x = this.x;
//         //         var y = this.y;
//         //         ctx.beginPath();
//         //         ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
//         //         for (side; side < 7; side++) {
//         //             ctx.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
//         //         }
//         //         ctx.fill();
//         //     }
//         // }
//     }
//     Particle.prototype.Update = function() {
//         this.x += this.vx;
//         this.y += this.vy;

//         if (this.x < 0 || this.x > canvas.width)
//             this.vx = -this.vx;

//         if (this.y < 0 || this.y > canvas.height)
//             this.vy = -this.vy;
//     }

//     function loop() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         ctx.fillStyle = "#ffffff"; // Set background color to white
//         ctx.fillRect(0, 0, canvas.width, canvas.height);

//         for (var i = 0; i < particles.length; i++) {
//             particles[i].Update();
//             particles[i].Draw(ctx);
//         }
//         requestAnimationFrame(loop);
//     }

//     for (var i = 0; i < total_ball; i++)
//         particles.push(new Particle());

//     function drawCircle(event) {
//         for (var i = 0; i < 2; i++) {
//             cursorX = event.pageX;
//             cursorY = event.pageY;
//             particles.unshift(new Particle(cursorX, cursorY));
//              if(particles.length > 100){
//               particles.pop();
//             }
//         }
//     }
//     document.getElementById(block_id).style.overflow = 'hidden';
//     document.getElementById(block_id).addEventListener('click', drawCircle);
//     document.getElementById(block_id).addEventListener('mousemove', drawCircle);
//     image.onload = loop;
//     window.onresize = function() {  
//        canvas_Wth = window.innerWidth;
//        canvas_hgt = window.innerHeight;
//        canvas.width = canvas_Wth;
//        canvas.height = canvas_hgt; 
//     }
  
// } 

// // // Customization
// canvasShape('canvas-shapes', {
//   size: 30,  // Change Elements Size 
//   speed: 5, // Change Elements Speed
//   number_of_item: 10,  // Max Limit Of Iteam 250
//   shape: "img",  //You Can Change With "circle" , "square" , "triangle", "hexa"
//   // color: '#008000',  // Change Elements Color
//   image: "assets/main/github.png",
  
// });
