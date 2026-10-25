import { StudentGridTemplate } from "../templates/StudentGridTemplate.js";

async function getStudentsData() {
    const response = await fetch(`./assets/data/students.json`);
    const students = await response.json();
    return students;
}

export async function buildStudentGrid() {
    const studentGrid = document.getElementById("studentGrid");
    const studentsData = await getStudentsData();
    let studentGridContent = "";

    // iterate through student data
    for (let id = 0; id < Object.keys(studentsData).length; id++) {
        // for every student, run StudentGridTemplate()
        const student = studentsData[id];
        try {console.log(student.name + "'s ID is " + id);

            // and append them to the studentGrid element
            const studentProfile = StudentGridTemplate(student, id);
            studentGridContent = studentGridContent + studentProfile;}
        catch {
            console.log("No student associated with ID " + id);
        }
    }

    studentGrid.innerHTML = studentGridContent;
}

document.addEventListener("DOMContentLoaded", async () => {
    await buildStudentGrid();
});
