function CodeGroup()
{
    var x = document.getElementById("name").value;
   var no = x.slice(x.length-3, x.length);
  
if(no>=100 && no<200){
  
    document.getElementById("group_name").style.color="yellow";

    document.getElementById("group_name").innerHTML=no
}
else if(no>=200 && no<300){
  
    document.getElementById("group_name").style.color="red";

    document.getElementById("group_name").innerHTML=no
}
else if(no>=300 && no<400){
  
    document.getElementById("group_name").style.color="black";

    document.getElementById("group_name").innerHTML=no
}
else{
    alert("  Qrup nomresi yanlis daxil edilib!!!");
}
}