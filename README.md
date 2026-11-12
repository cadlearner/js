
# Student Grade & Report Card Calculator

A lightweight, vanilla JavaScript web application that collects a student's academic details and subject marks, validates the inputs, and dynamically calculates their total score, percentage, and final grade.

## Features
* **Student Profile Capture:** Collects student name, roll number, and class details.
* **Input Validation:** Ensures marks entered for all 5 subjects fall within a valid range (`0` to `100`).
* **Automated Calculations:** Computes total marks (out of 500) and overall percentage rounded to two decimal places.
* **Grade Assignment:** Automatically assigns a letter grade (`A`, `B`, `C`, `D`, or `F`) based on the calculated percentage.
* **Dynamic DOM Rendering:** Reveals the result container and injects a formatted HTML summary list upon submission.

## Grading Scale

| Percentage Range | Assigned Grade |
| :--- | :---: |
| 90% – 100% | **A** |
| 80% – 89.99% | **B** |
| 70% – 79.99% | **C** |
| 60% – 69.99% | **D** |
| Below 60% | **F** |

## Technologies used
* HTML
* CSS
* JS

## Required HTML Structure

To work properly with this script, your HTML document must include elements with the following IDs and classes:

* **Student Details Inputs:** `#studentName`, `#rollNumber`, `#className`
* **Subject Mark Inputs:** `#subject1`, `#subject2`, `#subject3`, `#subject4`, `#subject5`
* **Trigger Button:** `#submitInfo`
* **Output Containers:** `.display` (wrapper toggled with `.show`) and `#displayResult` (target for the generated `<ul>` report)

## Getting Started
1. Clone or download the project files to your local machine.
2. Ensure your `index.html` includes the required element IDs listed above and links to your JavaScript file.
3. Add CSS styling for `.display` and `.display.show` to control result visibility.
4. Open `index.html` in any modern web browser.

