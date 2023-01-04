
export function showVisitors()  {
    //shows visitor container and hides all other site content containers
    console.log("showVisitors");
    $("#homepage").css("display", "none");
    $("#stats").css("display", "none");
    $("#highlights").css("display", "none");
    $("#standings").css("display","none");
    $("#logsheet").css("display","grid");
    $("#log").css("display","none");
}

export function showList() {
    //shows visitor list and hides form
    console.log("showList");
    $("#log").css("display", "none");
    $("#logsheet").css("display","grid");
}

export function showForm() {
    //shows visitor form and hides list 
    console.log("showForm");
    $("#log").css("display", "grid");
    $("#logsheet").css("display","none");
}
    
export function clearForm() {
    //clears values on inputs so next time form is loaded they don't have old contents
    $("#myform")[0].reset();
}