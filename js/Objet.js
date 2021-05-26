 // LES CLASSES
 class Cercle {
     constructor(x, y, radius, color, velocity) {
         this.x = x;
         this.y = y;
         this.radius = radius;
         this.color = color;
     }

     draw() {
         ctx.beginPath();
         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
         ctx.fillStyle = this.color;
         ctx.fill();
     }
 }
 class Carre {
     constructor(x, y, width, height, color) {
         this.x = x;
         this.y = y;
         this.width = width;
         this.height = height;
         this.color = color;
     }

     draw() {
         ctx.save();
         ctx.beginPath();
         ctx.fillStyle = this.color;
         ctx.fillRect(this.x, this.y, this.width, this.height);
         ctx.restore();
     }
 }