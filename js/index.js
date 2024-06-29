const documentHTML = document;
const inputs = documentHTML.querySelectorAll("input");
const sendBtn = documentHTML.getElementById("sendBtn");

const icon = documentHTML.querySelector("#sidebarCollapse i");
const smallData = documentHTML.querySelector("small");
const myTextArea = documentHTML.getElementById("textArea");
const remainCharText = documentHTML.getElementById("remainChar");
const sidebar = documentHTML.getElementById("sidebar");
const MAX_CHARS = 100;


$(function () {
  
  $("#sidebarCollapse").click(function () {
    $("#sidebar, #content").toggleClass("active");
  });

 
  $(".accordion").click(function (e) {
    e.preventDefault();
    var $this = $(this);
    console.log($this);

   

    $this.toggleClass(".activeAccordion");
    $this.next().slideToggle();
  });
  $("#closeSideNavBtn").click(function () {
    toggleSidenav();
  });
  interval();
  
  counterDown();

  
  remainChar();
});

function toggleSidenav() {
  const sidebarContent = documentHTML.getElementById("sidebarContent");
  if ($("#sidebar").css("left") === "0px")  {
    $("#sidebar").animate({ left: 0 }, 1000);
    $("header h1,header p").animate({ "padding-left": "200px" }, 1000);
  } else {
    $("#sidebar").animate({ left: -200 }, 1000);
    $("header h1,header p").animate({ "padding-left": "0px" }, 1000);
  }
  
}
function interval() {
  var countdown = new Date("July  17, 2024 18:00:00").getTime();
  var now = new Date().getTime();
  var distance = countdown - now;
 
  if (distance < 0) {
    clearInterval(x);
    console.log("hena");
    days = "00";
    hours = "00";
    minutes = "00";
    seconds = "00";
    documentHTML.getElementById("daysData").innerHTML = days + " D";
    documentHTML.getElementById("hoursData").innerHTML = hours + " H";
    documentHTML.getElementById("minutesData").innerHTML = minutes + " M";
    documentHTML.getElementById("secondsData").innerHTML = seconds + " S";
  } else {
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    documentHTML.getElementById("daysData").innerHTML = days + " D";
    documentHTML.getElementById("hoursData").innerHTML = hours + " H";
    documentHTML.getElementById("minutesData").innerHTML = minutes + " M";
    documentHTML.getElementById("secondsData").innerHTML = seconds + " S";
  }
}
function counterDown() {
  var x = setInterval(interval, 1000);
}

function remainChar() {
  myTextArea.addEventListener("input", function () {
    remaining = MAX_CHARS - myTextArea.value.length;
    const color = remaining <= MAX_CHARS * 0.1 ? "red" : null;
    remainCharText.textContent = `${remaining} Characters Remaining`;
    remainCharText.style.color = color;
    if (remaining == 0) {
      
      sendBtn.setAttribute("disabled", true);
    } else {
      sendBtn.removeAttribute("disabled");
    }
  });
}

function setForm() {
  inputs[0].value = "";
  inputs[1].value = "";
  inputs[2].value = "";
  myTextArea.value = "";
  remaining = MAX_CHARS;
  remainCharText.textContent = `${remaining} Characters Remaining`;
  remainCharText.style.color = null;
}


function iconeToggle(element) {
  if (element.classList.contains("fa-bars")) {
    element.classList.replace("fa-bars", "fa-xmark");
    smallData.textContent = "CLOSE";
  } else {
    element.classList?.replace("fa-xmark", "fa-bars");
    smallData.textContent = "OPEN";
  }
}



sendBtn.addEventListener("click", function (e) {
  e.preventDefault();
  setForm();
  
});

documentHTML.addEventListener("DOMContentLoaded", function () {
  sendBtn.removeAttribute("disabled");
});



$(function () {
  let w = $("#sidebarContent").innerWidth();
  $("#sidebarContent").css("left", -w);
  $("#sideBtn").click(function () {
    if ($("#sidebar").css("left") === "0px") {
      $("#sidebar").animate({ left: -w }, 1000);
      $("header h1,header p").animate({ "padding-left": "0px" }, 1000);
    } else {
      $("#sidebar").animate({ left: 0 }, 1000);
      $("header h1,header p").animate({ "padding-left": "200px" }, 1000);
    }
  });
  $("#closeBtn").click(function () {
    $("#sidebar").animate({ left: -w }, 1000);
    $("header h1,header p").animate({ "padding-left": "0px" }, 1000);
  });
  $(window).scroll(function () {
    let windowscroll = $(window).scrollTop();
    let sectionOffset = $("#duration").offset().top;
    if (windowscroll > sectionOffset - 400) {
      $("#sideBtn i,#sideBtn span").css({ color: "#153448" });
    } else {
      $("#sideBtn i,#sideBtn span").css({ color: "rgb(255,255,255)" });
    }
  });
  $("#sidebar a").click(function (e) {
    let linkhref = $(e.target).attr("href");
    let linkoffset = $(linkhref).offset().top;
    $("html,body").animate({ scrollTop: linkoffset }, 500);
  });
  $(`#box p`).eq(0).slideToggle(500);
  for (let i = 0; i < 5; i++) {
    $(`#box div`)
      .eq(i)
      .click(function () {
        for (let y = 0; y < 5; y++) {
          if (y == i) {
            $(`#box p`).eq(i).slideToggle(500);
          } else {
            $(`#box p`).eq(y).slideUp(500);
          }
        }
      });
  }
});
