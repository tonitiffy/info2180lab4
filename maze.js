// CSE 190 M, solution to Mouse Maze lab

var loser = null;  // whether the user has hit a wall

window.onload = function() {
    $("start").onclick = Click;
    $("end").onmouseover = End;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
    document.body.observe("mousemove", onBody);   // haxor exercise
};


function onBody(event) {
    if (loser === false && event.element() == document.body) {
        overBoundary(event);
    }
}


function overBoundary(event) {
    if (loser === false) {
        loser = true;
        $("status").textContent = "Haha you lose!";
        var boundaries = $$("div#maze div.boundary");
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].addClassName("youlose");
        }
        event.stop();  
    }
}


function Click() {
    loser = false;
    $("status").textContent = "Begin!";
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].removeClassName("youlose");
    }
}


function End() {
    if (loser === false) {
        $("status").textContent = "Your good at this you win";
    }
    event.stop();
}
