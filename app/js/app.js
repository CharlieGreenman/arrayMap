document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){
    var canvas, ctx, tileSize = 22, map = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
        [1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1],
        [1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
        [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],

    arrMap = {
      Color: function(r, g, b, a) {

          this.r = r;
          this.g = g;
          this.b = b;
          this.a = a;

          this.toString = function() {

              return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")";
          }

      },

      draw: function(){
        for(var y = 0; y < map.length; y++) {
          for(var x = 0; x < map.length; x++) {
            ctx.fillStyle = colors[map[y][x]].toString();
            ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
          }
        }
      },
      init: function(){
        canvas = document.getElementById("canvas");
        canvas.width = window.outerWidth;
        canvas.height = window.outerHeight;
        ctx = canvas.getContext("2d");

        window.setInterval(function() {

            arrMap.draw();
        }, 1000 / 30);
      }
    };



    var colors = [new arrMap.Color(0, 0, 0, 0), new arrMap.Color(90, 200, 180, 1)];

    arrMap.init();

}
