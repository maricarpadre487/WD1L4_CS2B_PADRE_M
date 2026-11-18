// script.js - JavaScript for student_grades.html

// arrays for the students and their grades
// same index = same student (ex. index 0 is Anna and her grade is 92)
let students = ["Anna Reyes", "Ben Santos", "Carla Cruz", "David Lim", "Ella Ramos"];
let grades = [92, 85, 78, 97, 74];

// runs when the button is clicked
function showGradeEquivalent() {

  // start of the result table (heading and table headers)
  let output = "<h2>Grade Equivalents</h2>";
  output += "<table>";
  output += "<tr>";
  output += "<th>Student Name</th>";
  output += "<th>Grade</th>";
  output += "<th>Equivalent</th>";
  output += "<th>Remark</th>";
  output += "<th>Academic Leader</th>";
  output += "</tr>";

  // for loop - goes through every student in the arrays
  // so I don't need to repeat the code 5 times
  for (let i = 0; i < students.length; i++) {

    // get the student and the grade at the current index
    let student = students[i];
    let grade = grades[i];

    // use the functions below to evaluate the grade
    let equivalent = getEquivalent(grade);
    let remark = getRemark(grade);
    let leader = getAcademicLeader(equivalent);

    // add a new row for this student
    output += "<tr>";
    output += "<td>" + student + "</td>";
    output += "<td>" + grade + "</td>";
    output += "<td>" + equivalent + "</td>";
    output += "<td>" + remark + "</td>";
    output += "<td>" + leader + "</td>";
    output += "</tr>";
  }

  // close the table
  output += "</table>";

  // show the result inside the div with id "result"
  document.getElementById("result").innerHTML = output;
}

// gives "Passed" or "Failed" using a ternary operator
function getRemark(grade) {
  // 75 and above is Passed, below 75 is Failed
  let remark = grade >= 75 ? "Passed" : "Failed";

  return remark;
}

// changes the grade into its equivalent using if...else if
function getEquivalent(grade) {
  let equivalent = "";

  // checks from the highest grade going down
  if (grade >= 97) { equivalent = "1.0"; }
  else if (grade >= 94) { equivalent = "1.25"; }
  else if (grade >= 91) { equivalent = "1.5"; }
  else if (grade >= 88) { equivalent = "1.75"; }
  else if (grade >= 85) { equivalent = "2.0"; }
  else if (grade >= 82) { equivalent = "2.25"; }
  else if (grade >= 79) { equivalent = "2.5"; }
  else if (grade >= 76) { equivalent = "2.75"; }
  else if (grade >= 75) { equivalent = "3.0"; }
  else { equivalent = "Failed" ; } // below 75

  return equivalent;
}

// gets the Academic Leader class using a switch
function getAcademicLeader(equivalent) {
  let leader = "";

  switch (equivalent) {
    case "1.0":
    case "1.25":
      leader = "1st Class Academic Leader"; // 1.0 and 1.25 share the same result
      break;
    case "1.5":
      leader = "2nd Class Academic Leader";
      break;
    case "1.75":
      leader = "3rd Class Academic Leader";
      break;
    default:
      leader = "-"; // no academic leader class
  }

  return leader;
}
