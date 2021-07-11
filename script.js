function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }


const year = new Date();
const month = new Date();
const date = new Date();
const year2 = year.getFullYear();
const month2 = month.getMonth();
const date2 = date.getDate();
const actualDate = "Today's Date: "+ month2 + "/" + date2 + "/" + year2;
document.getElementById("date").innerHTML = actualDate;