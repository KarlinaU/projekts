var startnum = 0
var convstart = 0
var convend = 0

function CalcNum(){
    var selector = document.getElementById('mervieniba1');
    var convstart = selector[selector.selectedIndex].value;
    startnum = document.getElementById("skaitlis1").value
    startnum*=convstart
    var selector = document.getElementById('mervieniba2');
    var convend = selector[selector.selectedIndex].value;
    startnum*=convend
    if(startnum == 0){
        alert("Ievadiet skaitli")
    }
    else if(startnum == document.getElementById("skaitlis1").value){
        alert("Izvēlies dažādas mērvienības!")
    }
    else{
    document.getElementById("Atbilde").value = startnum
    }
}