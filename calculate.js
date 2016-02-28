/**
 * Created by Duqiu on 2016/1/8.
 */
var res=0;
var a;
var b;
var operator;

function changetext(s){
    //alert(s);
    $(".show_s").append(s);
}

function deltext(){
    var x=$(".show_s").text();
    $(".show_s").empty();
    $(".show_s").append(x.substring(0,x.length-1));

}
function cleartext(){
    $(".show_s").empty();
    res=0;
}
function showresult(){
    var x=$(".show_s").text();

    b=Number(x);

    if(operator=="+"){
        res=a+b;
    }
    if(operator=="-"){
        res=a-b;
    }
    if(operator=="*"){
        res=a*b;
    }
    if(operator=="/"){
        res=a/b;
    }
    if(operator=="%"){
        res=a;
    }

    $(".show_s").empty();
    $(".show_s").append(res);
    //alert(res);
    res=0;


}
function plustext(){
    //$(".show_s").append("+");

    operator="+";

    var x=$(".show_s").text();
    a=Number(x);
    $(".show_s").empty();

}
function minustext(){
    //$(".show_s").append("+");
    operator="-";

    var x=$(".show_s").text();
    a=Number(x);
    $(".show_s").empty();

}
function timestext(){
    //$(".show_s").append("+");

    operator="*";

    var x=$(".show_s").text();
    a=Number(x);
    $(".show_s").empty();

}
function dividetext(){
    //$(".show_s").append("+");

    operator="/";

    var x=$(".show_s").text();
    a=Number(x);
    $(".show_s").empty();

}
function divide100text(){

    operator="%";

    var x=$(".show_s").text();
    a=Number(x)/100;
    $(".show_s").empty();
}