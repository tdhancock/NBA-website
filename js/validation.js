// import {submitForm} from "./controller.js";
/* Form Validation Example */
/* Personal Web Site-Visitor Form Validation */
/* See comments with TODO for code you need to implement */
const stateAbbreviations = [
    'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
    'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
    'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
    'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
    'VT','VI','VA','WA','WV','WI','WY'
];
           
function initValidation(formName) {
  
    let $form = $(formName);
    // $("#submitBtn").prop("disabled", true);
  
    $('form :input').change(function(ev){
      validateForm();
      if(!this.checkValidity())
        $(this).addClass("was-validated")
  
      //NOTE: we use 'was-validated' class so that you show the error indications only for the single field rather
      //than the whole form at once
    });
    
    $form.submit(function(event){
      $form = $(this);
      formEl=$form.get(0);
  
      event.preventDefault();  //prevent default browser submit
      event.stopPropagation(); //stop event bubbling
  
      validateForm();
      if (!formEl.checkValidity()){
        $(":input").addClass("was-validated")
      }
      else{
        console.log("true");
        return true;
        //TODO
        // $("#submitBtn").prop("disabled", false);
        // $("#myform").css("display","none");
        // $("#thankyou").css("display", "inline");
        //hide form
        //show thank you message
      }
    });
}

function validateForm() {
    
    validateState("#state", "You must enter a valid two character state code, e.g., UT");
    
    /*note, to validate the group, just passing in id of one of them ("#newspaper"), we will use groupName to check status of group.  Just call setElementValidity on the '#newspaper' element to show the error message*/
   
    validateCheckboxGroup("#newspaper", "find-page", "you must select at least one!");
    validateNames("#first-name", "Enter a valid First Name");
    validateNames("#last-name", "Enter a valid Last Name");
    validatePhone("#phone", "You must enter a valid phone number");
    validateEmail("#email", "You must enter a valid email")
    validateZip("#zip","You must enter a valid Zip Code")

    
}

function validateState(id, msg){
    $el = $(id);
    let valid=false;
    //TODO
    //get value from $el, and convert to upper case
    //check whether the value is in the stateAbbreviations array
    $el.val($el.val().toUpperCase());
    if (stateAbbreviations.includes($el.val())) {
      valid = true;
    }
    setElementValidity(id,valid,msg)
    return valid;
}

function validateCheckboxGroup(fieldName, groupName, message) {
    let valid=false;
  
    //TODO
    //Validate whether any of the checkboxes are checked. set 'valid' to true if checked
    if (($("input:checkbox")[0].checked) || ($("input:checkbox")[1].checked) || ($("input:checkbox")[2].checked)){
      valid = true;
    }
    
    setElementValidity(fieldName, valid, message);
    
    return valid;
}
  
function setElementValidity(fieldName, valid, message){
    let $field=$(fieldName);
    let el = $field.get(0);
    if (valid) {  //it has a value
  
      el.setCustomValidity('');  //sets to no error message and field is valid
    } else {
  
      el.setCustomValidity(message);   //sets error message and field gets 'invalid' stat
     
    }
    //TODO  insert or remove message in error div for element
    let err = $(fieldName).siblings()[1];
    if(err.display == "none"){
      err.diplay = "inline";
    }
    else{
      err.display = "none";
    }
}

function validateNames(id, msg) {
  let valid = false;
  let pattern = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
  if(pattern.exec($(id).val())){
    valid = true;
  }
  setElementValidity(id, valid, msg);
  return valid;
}

function validatePhone(id, msg) {
  let valid = false;
  let pattern = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/
  if(pattern.exec($(id).val())){
    valid = true;
  }
  setElementValidity(id, valid, msg);
  return valid;
}

function validateEmail(id, msg){
  let valid = false;
  let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
  if(pattern.exec($(id).val())){
    valid = true;
  }
  setElementValidity(id, valid, msg);
  return valid;
}

function validateZip(id, msg){
  let valid = false;
  let pattern = /^\d{5}$/
  if(pattern.exec($(id).val())){
    valid = true;
  }
  setElementValidity(id, valid, msg);
  return valid;
}

$(document).ready(function () {
  initValidation("#myform");
});