const c = document.querySelector('#sky');
var ctx = c.getContext('2d'),
    x, y, x1, y1, x2 = 0, y2 = 0, /// positions
    f = 0,                        /// "progress"
    speed,                        /// speed based on dist/steps
    dist,                         /// distance between points
    steps = 3;
const W = window.innerWidth;
const H = window.innerHeight;
c.width = W;
c.height = H;
const sizeImg = ()=> Math.floor(Math.random()*20+4)
const flakes = []
    ,count = 100;

for(var i = 0; i < count; i++)
{
    flakes.push({
        x: Math.random()*W,
        y: Math.random()*H,
        r: Math.random()*5+2, //min of 2px and max of 7px,
        f: 0,
        size: sizeImg(),
        speed: Math.random()*0.00025
    })
}

function init() {
    ctx.clearRect(0, 0, W, H);

    ctx.beginPath();
    if (f !== 0){
        return false;
    }



    x2 = W/2;
    y2 = H/2;


    for(let i = 0; i < count; i++)
    {
        const item = flakes[i];
        ctx.fillRect(item.x,  item.y, item.size, item.size);
    }
    ctx.fill();
    animate()
}
/// if we are moving, return


function animate() {

    ctx.clearRect(0, 0, W, H);
    flakes.forEach(el => {

        el.f += el.speed;
        const newX = el.x + (x2 - el.x) * el.f;
        const newY = el.y + (y2 - el.y) * el.f;
        if(((W/2)-el.x) >= -2 && ((W/2)-el.x) <= 2){

            el.x = Math.random()*W
            el.y = Math.random()*H
            el.r = Math.random()*5+2
            el.f =  0
            el.size = sizeImg()
            speed = Math.random()*0.00005

        }
        else{
            el.x = newX;
            el.y = newY;
        }


        ctx.fillRect(el.x,  el.y, el.size, el.size);

    })


    requestAnimationFrame(animate)
}

init() 