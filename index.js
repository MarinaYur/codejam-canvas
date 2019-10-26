
function drawImage1() {
    let canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 256;
    let pic = new Image();
    pic.src = 'data/image.png';
    pic.onload = function () {
        ctx.drawImage(pic, 0, 0);
    }
}

function drawImage2() {
    fetch("https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json")
        .then(response => response.json())
        .then(json => {
            let canvas = document.getElementById('canvas');
            ctx = canvas.getContext('2d');
            canvas.width = 32;
            canvas.height = 32;
            let x = 0;
            let y = 0;
            pic = json;
            for (let i = 0; i < pic.length; i++) {
                for (let j = 0; j < pic.length; j++) {
                    pic[i][j][3] = pic[i][j][3] * 100 / 255;
                    ctx.fillStyle = 'rgba' + '(' + pic[i][j].join() + ')';
                    ctx.fillRect(x, y, 1, 1);
                    x++;
                }
                x = 0;
                y += 1;
            }
        });
}

function drawImage3() {
    fetch("https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json")
        .then(response => response.json())
        .then(json => {
            let canvas = document.getElementById('canvas');
            ctx = canvas.getContext('2d');
            canvas.width = 4;
            canvas.height = 4;
            let x = 0;
            let y = 0;
            pic = json;
            for (let i = 0; i < pic.length; i++) {
                for (let j = 0; j < pic.length; j++) {
                    ctx.fillStyle = '#' + pic[i][j];
                    ctx.fillRect(x, y, 1, 1);
                    x++;
                }
                x = 0;
                y += 1;
            }
        });
}