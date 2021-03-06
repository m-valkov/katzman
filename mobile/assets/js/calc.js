var materials = {
    "decor": {
        "koroed": {
            "cost":100,
            "job_cost": 101
        },
        "mramor": {
            "cost": 200,
            "job_cost": 200
        },
        "hauberg": {
            "cost": 300,
            "job_cost": 300
        },
        "vinil": {
            "cost": 400,
            "job_cost": 400
        },
        "metal": {
            "cost": 500,
            "job_cost": 500
        },
        "fibra": {
            "cost": 600,
            "job_cost": 600
        },
        "termo": {
            "cost": 700,
            "job_cost": 700
        },
        "klinker": {
            "cost": 800,
            "job_cost": 800
        }
    },
    "warm": {
        "nowarm": 0,
        "penoplast": {
            "dsoft": 100,
            "dmid": 200,
            "dhard": 400
        },
        "penopleks": {
            "dsoft": 120,
            "dmid": 220,
            "dhard": 520
        },
        "vata": {
            "dsoft": 150,
            "dmid": 250,
            "dhard": 550
        }
    }
}

var defaultSetting = {
    "decor": "koroed",
    "warm": "nowarm",
}

var calcState = {
    "decor": "koroed",
    "warm": "nowarm",
    "depth": "",
    "square": 1,
}

function allUnpress(cls) {
    var btns = Array.from(document.getElementsByClassName(cls));
    btns.forEach(function (btn) {
        btn.pressed = undefined;
        btn.classList.remove("calc-btn-pressed");
        btn.setAttribute("onclick", "press(" + btn.id + ");");
    });
}

function press(btn) {
    // alert(btn.id);
    if (btn.pressed === undefined) {
        // alert(btn.classList[0])
        allUnpress(btn.classList[0]);
        btn.classList.add("calc-btn-pressed");
        btn.pressed = true;
        btn.removeAttribute("onclick");
        controlDepth(btn);
        setCalcState(btn);
        calculateSumm();
    } else {
        btn.classList.remove("calc-btn-pressed");
        btn.pressed = undefined;
    }
}

function controlDepth(btn) {
    // var depth = document.getElementById("calcDepth");
    var allWarm = [
        "penoplast",
        "penopleks",
        "vata",
    ]
    if (btn.id === "nowarm") {
        disableDepth();
    }
    if (allWarm.indexOf(btn.id) > -1) {
        enableDepth();
    }
}

function disableDepth() {
    var btns = Array.from(document.getElementsByClassName("calc-tol-btn"));
    btns.forEach(function (btn) {
        btn.pressed = undefined;
        btn.classList.add("calc-btn-disabled");
        btn.removeAttribute("onclick");
        btn.classList.remove("calc-btn-pressed");
    });
}

function enableDepth() {
    var btns = Array.from(document.getElementsByClassName("calc-tol-btn"));
    btns.forEach(function (btn) {
        btn.pressed = undefined;
        btn.classList.remove("calc-btn-disabled");
        btn.setAttribute("onclick", "press(" + btn.id + ");");
        // btn.addEventListener("click",press(btn.id),true);
    });

    press(document.getElementById("dsoft"));
}

function setDefaultChoice () {
    var d = document.getElementById(defaultSetting.decor);
    var w = document.getElementById(defaultSetting.warm);

    press(d);
    press(w);
}
setDefaultChoice();

function setCalcState(btn) {
    var decorNames = [
        "koroed",
        "mramor",
        "hauberg",
        "vinil",
        "metal",
        "fibra",
        "termo",
        "klinker"
    ];
    var warmNames = [
        "nowarm",
        "penoplast",
        "penopleks",
        "vata",
    ];
    var depthNames = [
        "",
        "dsoft",
        "dmid",
        "dhard"
    ];
    if (decorNames.indexOf(btn.id) > -1) {
        calcState.decor = btn.id;
    }
    if (warmNames.indexOf(btn.id) > -1) {
        if (btn.id === "nowarm") {
            calcState.depth = "";
        }
        calcState.warm = btn.id;
    }
    if (depthNames.indexOf(btn.id) > -1) {
        calcState.depth = btn.id;
    }
}

function checkInput(inp) {
    calcState.square = Number(inp.value);
    calculateSumm();
}

function calculateSumm() {
    var out = document.getElementById("calcSumma");
    var cost = materials.decor[calcState.decor].cost;
    var job_cost = materials.decor[calcState.decor].job_cost;

    var cost_warm = 0;
    if (calcState.depth !== "") {
        cost_warm = materials.warm[calcState.warm][calcState.depth];
    }
    
    var square = calcState.square;

    var result = (cost + job_cost + cost_warm) * square;
    console.log(result);
    out.value = result;
}