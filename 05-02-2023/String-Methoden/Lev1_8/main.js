// toLowerCase() & toUpperCase()

const textCase = "Sam is going to school.";
document.write(textCase.toUpperCase() + "<br>") ;
document.write(textCase.toLowerCase() + "<br>") ;
document.write(textCase.toLowerCase().replace("sam", "SAM").replace("school", "SCHOOL") + "<br>");
document.write(textCase.toLowerCase().replace("is going to", "IS GOING TO") + "<br>");
document.write(textCase.toLowerCase().replace("i", "I").replace("g", "G").replace("t", "T") +"<br>");