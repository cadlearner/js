
const studentName = document.getElementById("studentName").value;
const rollNumber = document.getElementById("rollNumber").value;
const className = document.getElementById("className").value;

const subject1 = document.getElementById("subject1").value;
const subject2 = document.getElementById("subject2").value;
const subject3 = document.getElementById("subject3").value;
const showResult = document.getElementById("showResult");
const result = document.getElementById("result");

showResult.addEventListener("click", studentinfo)

function studentinfo() {
    const totalMarks = parseInt(subject1) + parseInt(subject2) + parseInt(subject3);
    const percentage = (totalMarks / 300) * 100;
    let grade;

    if (percentage >= 90) {
        grade = "A";
    } else if (percentage >= 80) {
        grade = "B";
    } else if (percentage >= 70) {
        grade = "C";
    } else if (percentage >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    const output = `
    <h2>Student Information</h2>
    <p>Name: ${studentName}</p>
    <p>Roll Number: ${rollNumber}</p>
    <p>Class: ${className}</p>
    <p>Total Marks: ${totalMarks}</p>
    <p>Percentage: ${percentage.toFixed(2)}%</p>
    <p>Grade: ${grade}</p>
    `
    result.innerHTML = output;
}
