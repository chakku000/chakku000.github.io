var vertical = 7;
var horizon  = 7;
var phase = 0;
var init_thermo = [];
var thermos = [];
var canvas;
var ctx;

const alpha = 83.5 / 7.87 / (0.45 * 1e3); 
const delta = 1.0;

var cellw = 50;
var cellh = 50;

const step_lim = 101;

var Plate= function(){
    this.vertical = vertical;
    this.horizon = horizon;
    this.phase = phase;
};

var update_table = function(){
    var table = document.createElement('table');
    table.setAttribute('id','thmtbl');
    var rows = [];

    for(i=0;i<vertical;i++){
        rows.push(table.insertRow(-1));
        for(j=0;j<horizon;j++){
            var cell = rows[i].insertCell(-1);
            var elem = document.createElement('input');
            elem.setAttribute('type','text');
            elem.setAttribute('value','0.0');
            elem.setAttribute('class','tbi');
            cell.appendChild(elem);
        }
    }
    var t = document.getElementById('input-table');
    t.innerHTML = "";
    t.appendChild(table);
};


var read_table = function(){
    var rows = document.getElementById('thmtbl').rows;
    init_thermo = [];
    for(i=0;i<vertical;i++){
        var ar = []
        for(j=0;j<horizon;j++){
            ar[j] = parseFloat(rows[i].cells[j].firstChild.value);
        }
        init_thermo.push(ar);
    }
};

// canvasをリセット
var set_canvas = function(){
    canvas = document.getElementById('main-canvas');
    var wsize = "" + cellw * vertical+ "px";
    var hsize = "" + cellh * horizon + "px";
    canvas.setAttribute('width',wsize);
    canvas.setAttribute('height',hsize);
    ctx = canvas.getContext('2d');
    ctx.font = '14px Arial';
};

var line = function(sx,sy,tx,ty){
    ctx.beginPath();
    ctx.moveTo(sx,sy);
    ctx.lineTo(tx,ty);
    ctx.closePath();
    ctx.stroke();
};

var write_text = function(text,x,y){
    ctx.clearRect(y*cellw,x*cellh,cellw,cellh);
    ctx.fillText(text,y*cellw+5,x*cellh+cellh/2+10,cellw);
};

var write_grid = function(){
    for(i=1;i<vertical;i++){
        for(j=1;j<horizon;j++){
            line(i*cellw,0,i*cellw,horizon*cellh);
            line(0,i*cellh,vertical*cellw,i*cellh)
        }
    }
};

var update_canvas = function(data){
    for(i=0;i<vertical;i++){
        for(j=0;j<horizon;j++){
            write_text(String(data[i][j]).substr(0,5),i,j);
        }
    }

    write_grid();
};

var show2d = function(matrix){
    var s = "";
    for(i=0;i<vertical;i++){
        for(j=0;j<horizon;j++){
            s += String(matrix[i][j]) + " ";
        }
        s += "\n";
    }
    console.log(s);
}

var calculate = function(){
    thermos = new Array(step_lim);
    thermos[0] = init_thermo;
    for(step=1;step<step_lim;step++){
        var tbl = new Array(vertical);
        for(i=0;i<vertical;i++) tbl[i] = new Array(horizon);


        for(i=0;i<vertical;i++){
            for(j=0;j<horizon;j++){
                var t = -thermos[step-1][i][j]*4;
                if(i-1>=0) t += thermos[step-1][i-1][j];
                if(i+1<vertical) t+= thermos[step-1][i+1][j];
                if(j-1>=0) t += thermos[step-1][i][j-1];
                if(j+1<horizon) t += thermos[step-1][i][j+1];
                tbl[i][j] = thermos[step-1][i][j] + alpha / delta * t;
            }
        }
        thermos[step] = tbl;
    }
}

let main = function(){
    // GUI
    const gui = new dat.GUI();
    var plate = new Plate();
    var vsize = gui.add(plate,'vertical',1,15,1).listen();
    var hsize = gui.add(plate,'horizon',1,15,1).listen();
    var phasebar = gui.add(plate,'phase',0,100,1).listen();
    vsize.onFinishChange(function(value){
        vertical = value;
        update_table();
    });
    hsize.onFinishChange(function(value){
        horizon = value;
        update_table();
    });
    phasebar.onFinishChange(function(value){
        update_canvas(thermos[value]);
    });


    // initialize
    update_table();
    document.getElementById('thmtbl').rows[3].cells[3].firstChild.value = 100.0;
    read_table();
    set_canvas();
    update_canvas(init_thermo);
    calculate();


    // click `calc`
    document.getElementById('btn').addEventListener('click',function(){
        read_table();
        set_canvas();
        update_canvas(init_thermo);
        calculate();
        console.log(thermos);
    });

};
