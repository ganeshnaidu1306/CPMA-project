
document.getElementById("bu1").addEventListener("click",fun)

let l = window.localStorage;
let t1 = document.getElementById("te1");
let sfrom = document.getElementById("sfrom");
let sto = document.getElementById("sto");
let t2 = document.getElementById("te2");
let t3 = document.getElementById("te3");

l.setItem("AGPPAGPP",10)
l.setItem("AGPPBYPH",40);
l.setItem("AGPPHSLI",15);
l.setItem("AGPPBHNK",38);
l.setItem("AGPPCKPE",22);
l.setItem("AGPPSRCS",18);
l.setItem("AGPPCBPK",28);
l.setItem("AGPPDSH",45);
l.setItem("AGPPDJNR",10);
l.setItem("AGPPVDSA",25);
l.setItem("AGPPYPI",38);
l.setItem("AGPPHLRU",35);
l.setItem("AGPPIDN",35);
l.setItem("AGPPJLHL",45);
l.setItem("AGPPJPN",40);
l.setItem("AGPPKRMT",25);
l.setItem("AGPPLBGH",30);
l.setItem("AGPPMIRD",15);
l.setItem("AGPPJYN",35);
l.setItem("AGPPKVPR",28);
l.setItem("AGPPNLC",28);
l.setItem("AGPPMHLI",30);
l.setItem("AGPPMAGR",30);
l.setItem("AGPPMYRD",15);
l.setItem("AGPPNGSA",50);
l.setItem("AGPPKGWA",20);
l.setItem("AGPPPEYA",40);
l.setItem("AGPPPYID",42);
l.setItem("AGPPRJNR",30);
l.setItem("AGPPRVR",35);
l.setItem("AGPPSPGD",22);
l.setItem("AGPPSSFY",35);
l.setItem("AGPPVSWA",22);
l.setItem("AGPPSECE",30);
l.setItem("AGPPSPRU",25);
l.setItem("AGPPSVRD",38);
l.setItem("AGPPTTY",30);
l.setItem("AGPPVJN",10);
l.setItem("AGPPPUTH",42);
l.setItem("AGPPYPM",35);


function fun()
{
    t1.value = "Rs."+l.getItem(sfrom.value+sto.value);
    var a = l.getItem(sfrom.value+sto.value);
    a -= (0.15*a);
    t2.value = "Rs."+parseFloat(a);
    var b = l.getItem(sfrom.value+sto.value);
    b -= (0.10*b);
    t3.value = "Rs."+parseFloat(b);
}

