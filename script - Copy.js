/**********************************************************************************/
///////////////////////////////////////////////////////////////////////////////////
//functions
//////////////////////////////////////////////////////////////////////////////////
/*******************************************************************************/
// **************** birthDate ****************************************************
// v 1.0
function birthDate(DD,MM,YYYY){

         var now ,  months ;
         now = new Date() ;
         
         months = ['months ' , 'January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December'];
         console.log( DD + ' ' + months[MM] + ' ' + YYYY + ' IS YOUR BIRTH DATE');
          document.getElementById("demo").textContent =  DD + ' ' + months[MM] + ' ' + YYYY + ' IS YOUR BIRTH DATE'; 
 }

 //__________________________________________________________________________//
// *************** age ******************************************************
 //v1
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

     document.getElementById("demo").textContent = age + '  IS YOUR AGE' ;
}
//v2
$(document).ready(function () {
  handleDOBChanged();
});

//listener on date of birth field
function handleDOBChanged() {
    $('#dob').on('change', function () {
      if (isDate($('#dob').val())) {
        var age = calculateAge(parseDate($('#dob').val()), new Date());
      	$("#age").text(age);   
      } else {
        $("#age").text('');   
      }      
    });
}

//convert the date string in the format of dd/mm/yyyy into a JS date object
function parseDate(dateStr) {
  var dateParts = dateStr.split("/");
  return new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);
}

//is valid date format
function calculateAge (dateOfBirth, dateToCalculate) {
    var calculateYear = dateToCalculate.getFullYear();
    var calculateMonth = dateToCalculate.getMonth();
    var calculateDay = dateToCalculate.getDate();

    var birthYear = dateOfBirth.getFullYear();
    var birthMonth = dateOfBirth.getMonth();
    var birthDay = dateOfBirth.getDate();

    var age = calculateYear - birthYear;
    var ageMonth = calculateMonth - birthMonth;
    var ageDay = calculateDay - birthDay;

    if (ageMonth < 0 || (ageMonth == 0 && ageDay < 0)) {
        age = parseInt(age) - 1;
    }
    return age;
}

function isDate(txtDate) {
  var currVal = txtDate;
  if (currVal == '')
    return true;

  //Declare Regex
  var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
  var dtArray = currVal.match(rxDatePattern); // is format OK?

  if (dtArray == null)
    return false;

  //Checks for dd/mm/yyyy format.
  var dtDay = dtArray[1];
  var dtMonth = dtArray[3];
  var dtYear = dtArray[5];

  if (dtMonth < 1 || dtMonth > 12)
    return false;
  else if (dtDay < 1 || dtDay > 31)
    return false;
  else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31)
    return false;
  else if (dtMonth == 2) {
    var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
    if (dtDay > 29 || (dtDay == 29 && !isleap))
      return false;
  }

  return true;
}


//__________________________________________________________________________
/************************************* Time **************************************/
/*function time(){
    var nowDate  , timeNow ;
    nowDate = new Date ;
    
    timeNow = nowDate.getTime;
    console.log(timeNow);
}*/
 /*************************************************************************/
/*birthDate(1 , 10 , 12);birthDate(1 , 10 , 12);

 
date();
time();
    
*/
getAge(13131333);

