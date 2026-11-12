
const studentName = document.getElementById("studentName")
const rollNumber = document.getElementById("rollNumber")
const className = document.getElementById("className")

const subject1 = document.getElementById("subject1")
const subject2 = document.getElementById("subject2")
const subject3 = document.getElementById("subject3")
const subject4 = document.getElementById("subject4")
const subject5 = document.getElementById("subject5")

const submitInfo = document.getElementById("submitInfo");
const result = document.getElementById("result");
const displayResult = document.getElementById("displayResult");
const display=document.querySelector(".display")

submitInfo.addEventListener("click", studentInfo)

function showError(message) {
  alert(message);
}

function studentInfo() {
  display.classList.add("show")
  const marks = [Number(subject1.value), Number(subject2.value), Number(subject3.value), Number(subject4.value), Number(subject5.value)];
  marks.forEach((mark, index) => {

    if (mark < 0 || mark > 100 || Number.isNaN(mark)) {
      showError(`Please enter valid marks for Subject ${index + 1} (0-100)`);
    }
  });
  const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
  const percentage = (totalMarks / 500) * 100;
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
const student = {
    name: studentName.value,
    rollNumber: rollNumber.value,
    className: className.value,
    marks: totalMarks
};

  const output = `
          <ul>
            <li>Name: ${student.name}</li>
            <li>Roll Number: ${student.rollNumber}</li>
            <li>Class: ${student.className}</li>
            <li>Total Marks: ${student.marks}</li>
            <li>Percentage: ${percentage.toFixed(2)}%</li>
            <li>Grade: ${grade}</li>
          </ul>
    `
  displayResult.innerHTML = output;
}
