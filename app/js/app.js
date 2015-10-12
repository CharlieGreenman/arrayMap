document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){
    var map = [
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
    ];

    var Color = function(r, g, b, a) {

        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;

        this.toString = function() {

            return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")";

        }

    }

    var canvas;
    var ctx;

    var tileSize = 22;


    var colors = [new Color(0, 0, 0, 0), new Color(90, 200, 180, 1)];

    function init() {

        canvas = document.getElementById("canvas");
        canvas.width = window.outerWidth;
        canvas.height = window.outerHeight;
        ctx = canvas.getContext("2d");

        window.setInterval(function() {

            draw();
        }, 1000 / 30);

    }

    function draw() {

        for(var y = 0; y < map.length; y++) {
            for(var x = 0; x < map.length; x++) {
                ctx.fillStyle = colors[map[y][x]].toString();
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            }
        }
    }

    init();

}
