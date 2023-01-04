import { showVisitors, showList, showForm, clearForm } from "./view.js";
import { Visitor, visitors, modelAddVisitor, modelDeleteVisitor, findVisitor, findVisitorIndex, modelUpdateVisitor} from "./model.js";
// import { stateAbbreviations, validateForm, validateState, validateCheckboxGroup, setElementValidity, validateNames, validatePhone, validateEmail, validateZip} from "./validation.js";
// import {initValidation} from "./validation.js";

$(document).ready(function(){
   
    //in validation.js, should set up submit event handler
    $("#submitBtn").click(submitForm);
    // $("#submitBtn").click(function(){
    //     if(initValidation("#myform")){
    //         submitForm();
    //     }
    // });
    $("#logVisit").click(loadVisitors);
    $("#newVisitor").click(addVisitor);
    $("#standingsButton").click(standings);
    $("#statisticsButton").click(statistics);
    $("#highlightsButton").click(highlights);
    // $("#logVisit").click(logVisit);
    $("#change").click(change);
    $("input[type=radio][name='statsButton']").change(choose);
    $("#logChange").click(showList);
    $("#prompt").click(function(){
        let x = prompt("Enter User ID:","0");
        deleteUser(x);
    });
    $("#update").click(update);
    // initValidation("#myform");

});

function loadVisitors() {
    //called when 'visitors' menu item is clicked 
    //calls view 'showVisitors' 
    //calls view 'renderTable' 
    //calls view 'showTable'
    showVisitors();
    renderTable();
    showList();
}

function submitForm() {
    //called on form submit. Gets contents of form, creates visitor object, 
    //calls model 'modelAddVisitor' function
    //calls view 'renderTable' 
    //calls view 'showTable'
    console.log("submitForm");
    modelAddVisitor(new Visitor(visitors.length + 1, $("#first-name").val(), $("#last-name").val(), $("#address").val(), $("#city").val(), $("#state").val(), $("#zip").val(), $("#phone").val(), $("#email").val()))
    renderTable();
    showList();
}

function addVisitor(visitor) {
   //called on 'click' of 'New Visitor' button 
   //calls view 'clearForm' to clear form contents
   //calls view 'showForm'
   clearForm();
   showForm();
}
 
function deleteVisitor(id) {
    //called on 'click' of 'delete' icon in visitor list 
    //calls model.js modelDeleteVisitor
    //calls view 'renderTable' 
    //calls view 'showTable'
    modelDeleteVisitor(id);
    renderTable;
    showTable();
}

function standings(){
    $("#homepage").css("display", "none");
    $("#stats").css("display", "none");
    $("#highlights").css("display", "none");
    $("#standings").css("display","grid");
    $("#log").css("display","none");
    $("#logsheet").css("display","none");
    // console.log("standings");
}

function statistics(){
    $("#homepage").css("display", "none");
    $("#standings").css("display", "none");
    $("#highlights").css("display", "none");
    $("#log").css("display","none")
    $("#stats").css("display","grid");
    $("#logsheet").css("display","none");
    // console.log("stats");
}

function highlights(){
    $("#homepage").css("display", "none");
    $("#standings").css("display", "none");
    $("#stats").css("display", "none");
    $("#log").css("display","none")
    $("#highlights").css("display","grid");
    $("#logsheet").css("display","none");
    // console.log("highlights");
}

function choose(){
    if(this.value == "Luka Doncic"){
        console.log("luka")
        luka();
    }
    if(this.value == "Donovan Mitchell"){
        mitchell();
    }
    if(this.value == "Rudy Gobert"){
        gobert();
    }
}

function luka(){
    $("#statsPhoto").attr("src","luka.png");
    $("#statsCaption").html("Luka Doncic Stats");
    $("#points").html("28.2");
    $("#ast").html("8.8");
    $("#rbs").html("9.3");
    $("#stl").html("1.2");
    $("#blk").html("0.6");
    $("#fg").html("45.5%");
    $("#3p").html("34.1%");
}

function mitchell(){
    $("#statsPhoto").attr("src","mitchellDunk.png");
    $("#statsCaption").html("Donovan Mitchell Stats");
    $("#points").html("25.7");
    $("#ast").html("5.5");
    $("#rbs").html("4.1");
    $("#stl").html("1.5");
    $("#blk").html("0.2");
    $("#fg").html("45.1%");
    $("#3p").html("35.9%");
}

function gobert(){
    $("#statsPhoto").attr("src","gobert.png");
    $("#statsCaption").html("Rudy Gobert Stats");
    $("#points").html("15.4");
    $("#ast").html("1.1");
    $("#rbs").html("14.8");
    $("#stl").html("0.7");
    $("#blk").html("2.2");
    $("#fg").html("71.1%");
    $("#3p").html("0.0%");
}

function change(){
    console.log("change")
    $("#css").attr("href") == "css/main.css" ? $("#css").attr("href","css/theme.css") : $("#css").attr("href","css/main.css");
}

function logVisit(){
    console.log("LogVisit")
    $("#homepage").css("display", "none");
    $("#stats").css("display", "none");
    $("#highlights").css("display", "none");
    $("#standings").css("display","none");
    $("#log").css("display","grid")
}

function updateTable(item) {
    let w = "<tr>" 
    w += "<td>" + item.id + "</td>";
    w += "<td>" + item.fullName; + "</td>";
    w += "<td>" + item.fullAddress; + "</td>";
    w += "<td>" + item.email; + "</td>";
    w += "<td>" + item.phone; + "</td>";
    // w += "<td><button class='delete' id='" + item.id + "'>DELETE</button>";
    w += "</tr>"
    $("#vlog").append(w);
}

function renderTable() {
    //renders table from global 'visitors' object array
    $("#infosheet").children().remove();
    $("#infosheet").append("<table id='vlog'><tr><th>ID</th><th>Name</th><th>Address</th><th>Email</th><th>Phone</th></tr>")
    for(let i=0;i<visitors.length;i++){
        updateTable(visitors[i]);
    }
    $("#infosheet").append("</table>")

}

function deleteUser(x) {
    console.log("delete user");
    modelDeleteVisitor(x);
    renderTable();
}

function update(){
    let x = prompt("Enter User ID:","0");
    let vis = visitors[x-1];
    $("#first-name").val(vis.firstName)
    $("#last-name").val(vis.lastName)
    $("#address").val(vis.address)
    $("#city").val(vis.city)
    $("#state").val(vis.state)
    $("#zip").val(vis.zip)
    $("#phone").val(vis.phone)
    $("#email").val(vis.email)
    deleteUser(x);
    showForm();
}
