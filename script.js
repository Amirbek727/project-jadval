// const students = [
//   {
//     firstName: "Ibrohim",
//     lastName: "Otabekov",
//     age: 15,
//     grade: 10,
//   },
//   {
//     firstName: "Mirsaid",
//     lastName: "Mambetov",
//     age: 15,
//     grade: 9,
//   },
//   {
//     firstName: "Kamron",
//     lastName: "Toirov",
//     age: 15,
//     grade: 9,
//   },
//   {
//     firstName: "Javohir ",
//     lastName: "Qurbonov",
//     age: 15,
//     grade: 9,
//   },
//   {
//     firstName: "Asilbek",
//     lastName: "Abdullayev",
//     age: 14,
//     grade: 9,
//   },

//   {
//     firstName: "Amirbek",
//     lastName: "Abdullayev",
//     age: 14,
//     grade: 8,
//   },

//   {
//     firstName: "Rasul",
//     lastName: "G'aybullayev",
//     age: 14,
//     grade: 8,
//   },
//   {
//     firstName: "Daler",
//     lastName: "Raxmonov",
//     age: 14,
//     grade: 8,
//   },
//   {
//     firstName: "Alibek",
//     lastName: "Nazarov",
//     age: 13,
//     grade: 7,
//   },
// ];

const jadval = document.querySelector("tbody");
const addButton = document.querySelector(".add-btn");
const modalWindow = document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");

const form = document.querySelector("form");
const surnameInput = document.querySelector("#surname");
const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const gradeInput = document.querySelector("#grade");
const numberInput = document.querySelector("#number");
let STUDENTS = JSON.parse(localStorage.getItem("students")) || [];


addButton.addEventListener("click", openModal);
form.addEventListener("submit", addStudent);
overlay.addEventListener("click", closeModal);
document.addEventListener(
  "keydown",
  (event) => event.key === "Escape" && closeModal()
);
window.addEventListener("load", displayStudents);

function addStudent(e) {
  e.preventDefault();

  const newStudentObject = {
    firstName: nameInput.value,
    lastName: surnameInput.value,
    age: ageInput.value,
    grade: gradeInput.value,
    number: numberInput.value,
  };

  STUDENTS.push(newStudentObject);

  localStorage.setItem("students", JSON.stringify(STUDENTS));

  displayStudents();
  form.reset();
  closeModal();
}
  


function closeModal() {
  modalWindow.classList.remove("open");
  overlay.classList.remove("open");
}
function openModal() {
  modalWindow.classList.add("open");
  overlay.classList.add("open");
}

function displayStudents() {
  jadval.innerHTML = "";
  STUDENTS.forEach((student, i) => {
    const newStudent = document.createElement("tr");
    newStudent.innerHTML = `
                          <td>${i + 1}</td>
                          <td>
                              ${student.firstName}
                              ${student.lastName}
                          </td>
                          <td>${student.age}</td>
                          <td>${student.grade}</td>
                          <td>${student.number}</td>
                         `;
    jadval.append(newStudent);
  });
}