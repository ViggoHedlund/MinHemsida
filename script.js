window.onload = setInterval(clock,1000);

function clock()
{
  var d = new Date();
  
  var date = d.getDate();
  
  var month = d.getMonth();
  var montharr =["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
  month=montharr[month];
  
  var year = d.getFullYear();
  
  var day = d.getDay();
  var dayarr =["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
  day=dayarr[day];
  
  var hour =d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();

  document.getElementById("date").innerHTML=day+" "+date+" "+month+" "+year;
  document.getElementById("time").innerHTML=hour+":"+min+":"+sec;
}

  const txt1 = document.getElementById('KommentarBoxID');
  const btn1 = document.getElementById('KommentarKnappID');
  const out1 = document.getElementById('CommentId1');

  const CommentList1 = ["Hej1","Hej2","Hej3","Hej4"]

  function fun1() {
    out1.innerHTML = txt1.value;
  }

  btn1.addEventListener('click',fun1);
  