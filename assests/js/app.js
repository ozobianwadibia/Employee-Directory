//This function makes the employee list visible after the 'view' button is pressed
function view() {
    // $(".main-body").empty();
    for (let i = 0; i < employeeList.length; i++) {
        $(".main-body").append("<div class='employeeInfo'>" + "<p>" + employeeList[i].name + "</p>" +
            "<p>" + employeeList[i].officeNum + "</p>" +
            "<p>" + employeeList[i].phoneNum + "</p>" + "</div");
    }
}
$("#view").on("click", view);

function changeColor() {
    document.getElementById("view").style.backgroundColor = "black";
    document.getElementById("view").style.color = "white";
}
$("#view").on("click", changeColor);

//This function adds to the employee list after the 'add' button is pressed
function add() {
    const nameInput = $("#nameInput").val();
    const officenumInput = parseInt($("#officenumInput").val());
    const phonenumInput = $("#phonenumInput").val();

    // if (input has field, execute code below
    //     else ignore!!!) {

    // }
    //finish later
    employeeList.push({ name: nameInput, officeNum: officenumInput, phoneNum: phonenumInput });

    // After performing our actions, clear the name input and re-render the list
    $("#nameInput").val('');
    $("#officenumInput").val('');
    $("#phonenumInput").val('');

    view();
}