function addCourse() {
    const coursesDiv = document.getElementById("courses");
    const courseInput = document.createElement("input");
    courseInput.type = "text";
    courseInput.placeholder = "Course Name";
    coursesDiv.appendChild(courseInput);
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.type = "button";
    deleteBtn.onclick = () => {
      coursesDiv.removeChild(courseInput);
      coursesDiv.removeChild(deleteBtn);
    };
    coursesDiv.appendChild(deleteBtn);
  }