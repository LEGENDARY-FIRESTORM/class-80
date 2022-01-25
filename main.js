student_array=[];

function submit(){
    var display_student_array=[];

    for( var i = 1; i <= 4; i++)
    {
        var student_name=document.getElementById("name_of_the_student_"+i).value;
        console.log(student_name);
        student_array.push(student_name);
    }
    console.log(student_array);
    var student_array_length=student_array.length;
    console.log(student_array_lenght);

    for( var y = 0; y < student_array_length; y++)
    {
        display_student_array.push("<h4> name - "+ student_array[y]+"</h4>");
        console.log(display_student_array);
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;

    var remove_commas=display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display="none";

    document.getElementById("sort_button").style.display="inline-block";
}

function sort(){
    student_array.sort();

    console.log(student_array);

    var display_student_array_sorting=[];

    var student_array_length=student_array.length;
    console.log(student_array_lenght);

    for( var y = 0; y < student_array_length; y++)
    {
        display_student_array_sorting.push("<h4> name - "+ student_array[y]+"</h4>");
        console.log(display_student_array_sorting);
    }

    var remove_commas=display_student_array_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}

function new_update(){
    document.getElementById("display_name_without_commas").innerHTML="<h1> name - "+ student_array[y]+"</h1>";
}