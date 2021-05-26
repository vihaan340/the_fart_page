name_of_the_student_array = [];

function submit()
{

    var n_1 = document.getElementById("text_input_1").value;
    var n_2 = document.getElementById("text_input_2").value;
    var n_3 = document.getElementById("text_input_3").value;
    var n_4 = document.getElementById("text_input_4").value;


    name_of_the_student_array.push(n_1);
    name_of_the_student_array.push(n_2);
    name_of_the_student_array.push(n_3);
    name_of_the_student_array.push(n_4);

    console.log(name_of_the_student_array);

    document.getElementById("disname").innerHTML = name_of_the_student_array;
    document.getElementById("but1").style.display = "none";
    document.getElementById("but2").style.display = "inline-block";

}
function sorting()

{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    document.getElementById("disname").innerHTML= name_of_the_student_array;
}