// code js
var x = 10;
// hoặc let y = 20;
// Number, string, boolean( T/F)
// array, object
x ="hello";//kiểu dữ liệu động( dynamic datatype)
var t = true;
console.log(x);// printf
var y= 20;
var z = y + 10;//30
var k = x +y;//hello20 -> strcat()
var u= y + x;//20hello
var o= y + "world";//20world
var p= "hello" + "world" + 20;//helloworld20
var a= "20" + 10;//2010
console.log(a);
console.log(y);
var b= 5 + 10 + 15 + "a";//30a
if(y > 10){

}else if(y>15){

}else{

}
for(var j=0;j<10;j++){
    console.log("j="+j);
}
console.log("xin chao cac ban"+20+",chúc buổi sáng tốt lành");
//giá trị của y= 20, giá trị đẹp
console.log("giá trị của y=" +y+ ", giá trị đẹp");
console.log(`giá trị của y=${y} , giá trị đẹp`);
// khai báo 1 hàm
function tinhtong(a,b){
    //return a+b;
    console.log(a+b);
}
var kq = tinhtong(4,5);

var arr= []; // không bị giới giạn phần tử, các phần tử không bắt buộc là cùng dữ liệu
arr[0]=15;//0
arr[1]="abc";//1
arr[2]= true;//2
arr.push(17);//3
arr.push("xyz");//4
for(var i=0;i< arr.length;i++){
     console.log(arr[i]);
}


//alert("Alert");// chức năng cảnh báo đến người dùng


// var rs = confirm("Bạn chắc chắn nộp bài?");// return boolean( cũng là cảnh báo xem có chắc chắn nộp baif hay không)
//if(rs == true){
//   console.log("Nguời dùng đồng ý rồi làm gì thì làm đi");
//}else{
//    console.log("Hủy bỏ chiến dịch");
//}


//var s = prompt("Vui lòng nhập họ tên");// return string
//console.log(s);
// nếu nhập -> string
// nếu không nhập + ok -> string rỗng
// nếu nhấn cancel (hủy) -> null


//setTimeout(function(){
 //   alert("Hello");
//},3000);


//var i=0;
//setInterval(function(){
 //   console.log("i="+i);
 //   i++;
//},3000)
var span_min = document.getElementById("minutes");
var span_sec = document.getElementById("seconds");

var min = 10, sec= 0;
var timer = setInterval(function(){
    var m = min < 10 ?"0" + min : min;
    var s = sec < 10 ?"0" + sec : sec;// toán tử 3 ngôi
    console.log(m + ":" + s);
    span_min.innerText=m;
    span_sec.innerText=s;

    //làm thế nào để giamr thời gian
    sec--;
    if(sec<0){
        sec= 59 ;
        min--;
    }
    if(min < 0){
        //dừng tại đây
        clearInterval(timer);
    }
},100);
//10:00