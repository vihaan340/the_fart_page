name_of_the_student_array = [];

function submit()
{
    var display_student_array = [];
for (j=1; j<=4; j++)
{
    var name_the_student=document.getElementById("name_of_the_student_array"+j).value;
    console.log(name_the_student); 
    name_of_the_student_array.push(name_the_student);
}

console.log(name_of_the_student_array); 

    
var lenght_of_name_of_students_array = name_of_the_student_array.length; 

console.log(lenght_of_name_of_students_array);

for (var k=0; k<lenght_of_name_of_students_array; k++)
{
  display_student_array.push("<h4>NAME - "+ name_of_the_student_array[k] + "</h4>");
  console.log(display_student_array);
}

  console.log(display_student_array);
  document.getElementById("display_name_with_commas").innerHTML = display_student_array;
  var remove_commas = display_student_array.join(" ");
   console.log(remove_commas); 
   document.getElementById("display_name_without_commas").innerHTML = remove_commas;
   document.getElementById("but1").style.display="none";
   document.getElementById("but2").style.display="inline-block";
}
function sorting()

{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    var display_student_array_sorting = []; 
    var lenght_of_name_of_students_array = name_of_the_student_array.length; 
    console.log(lenght_of_name_of_students_array); 
    for (var k = 0; k < lenght_of_name_of_students_array; k++) 
    { display_student_array_sorting.push("NAME - " + name_of_the_student_array[k] + "</h4>"); 
    console.log(display_student_array_sorting); 
} 
var remove_commas = display_student_array_sorting.join(" ");
 console.log(remove_commas); 
 document.getElementById("display_name_without_commas").innerHTML = remove_commas; 
    
}
function newup () 
{ 
document.getElementById("display_name_without_commas").innerHTML = "<h1>" + name_of_the_student_array +"</h1>"; 
}