// concat()
const textContact1 = "Sam is going to school";
const textContact2 = "Susi";
const textContact3 = "and";

document.write(textContact1.concat(" and to the movie theater") + "<br>");
document.write(textContact1.slice(0, 16).concat("movie theater") + "<br>");
document.write(textContact2.concat(" " + textContact3 + " ").concat(textContact1.replace("is", "are").replace("school", "gym and to the movie theater")) + "<br>");
document.write(textContact1.replace("Sam", textContact2).concat(" " + textContact3 + " to the movie theater"));
