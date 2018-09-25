//This function makes the employee list visible after the 'view' button is pressed
function view() {
    $("#chkName").empty();
    $(".main-body").empty();
    for (let i = 0; i < employeeList.length; i++) {
        $(".main-body").append("<div class='employeeInfo'>" + "<p>" + employeeList[i].name + "</p>" +
            "<p>" + employeeList[i].officeNum + "</p>" +
            "<p>" + employeeList[i].phoneNum + "</p>" + "</div");
    }
}
$("#view").on("click", view);

//This function adds to the employee list after the 'add' button is pressed
function add() {
    $("#chkName").empty();
    $(".main-body").empty();
    const nameInput = $("#nameInput").val();
    const officenumInput = $("#officenumInput").val();
    const phonenumInput = $("#phonenumInput").val();
    //add function does not execute if there is no input
    if (nameInput === "" || officenumInput === "" || phonenumInput === "") {
        $(".main-body").empty();
    } else {
        employeeList.push({ name: nameInput, officeNum: officenumInput, phoneNum: phonenumInput });
    }
    // After performing our actions, clear the name input and re-render the list
    $("#nameInput").val('');
    $("#officenumInput").val('');
    $("#phonenumInput").val('');
    $("#chkName").val('');
    //call the 'view' function
    view();
}
$("#add").on("click", add);


//This function verifies the existence of an employee on the list after the 'verify' button is pressed
function verify() {
    $(".main-body").empty();
    $("#chkName").empty();
    const verifyName = $("#verifyName").val();
    //temporary array to hold the inputed name
    let tempArr = [];
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === verifyName) {
            tempArr.push(employeeList[i].name);
        }
        if (tempArr.includes(verifyName)) {
            document.getElementById("chkName").innerText = "Yes";
        } else {
            document.getElementById("chkName").innerText = "No";
        }
    }
    $("#verifyName").val('');
    $("#chkName").val('');
}
$("#verify").on("click", verify);


//This function updates the info of an existing employee
function update() {
    $(".main-body").empty();
    const nameInput = $("#nameInput").val();
    const officenumInput = $("#officenumInput").val();
    const phonenumInput = $("#phonenumInput").val();
    if (nameInput === "" || officenumInput === "" || phonenumInput === "") {
        $(".main-body").empty();
    } else {
        for (let i = 0; i < employeeList.length; i++) {
            if (employeeList[i].name === nameInput) {
                employeeList[i].officeNum = officenumInput;
                employeeList[i].phoneNum = phonenumInput;
            }
        }
    }
    // After performing our actions, clear the name input and re-render the list
    $("#nameInput").val('');
    $("#officenumInput").val('');
    $("#phonenumInput").val('');
    $("#chkName").val('');
    //call the 'view' function
    view();
}
$("#update").on("click", update);

//This function erases the info of a selected employee
function erase() {
    $("#chkName").val('');
    const eraseName = $("#eraseName").val();
    if (eraseName === "") {
        alert("Please insert a name from the list below in the Erase Name field");
    }
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === eraseName) {
            employeeList.splice(i, 1);
        }
    }
    // After performing our actions, clear the name input and re-render the list
    $("#eraseName").val('');
    view();
}
$("#erase").on("click", erase);