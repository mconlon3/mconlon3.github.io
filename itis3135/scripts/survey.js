document.getElementById('intro').addEventListener('submit', function(e) {
  e.preventDefault();

  let requiredFields = [
    'name', 'mascot', 'imgcap', 'per_bg', 'pro_bg',
    'aca_bg', 'web_bg', 'pcp', 
    'extra_funny', 'extra_else', 'agree'
  ];

  for (let field of requiredFields) {
    let el = document.getElementById(field);
    if (!el || (el.type === 'checkbox' && !el.checked) || (el.value.trim() === '')) {
      alert('Please fill out the required fields and check the agreement.');
      return;
    }
  }

  let imageFile = document.getElementById('img').files[0];
  if (!imageFile || !['image/png', 'image/jpeg'].includes(imageFile.type)) {
    alert('Please upload a valid file type.');
    return;
  }

  let courseInputs = document.querySelectorAll('#coursesContainer input');
  let courses = [];
  courseInputs.forEach(input => {
    if (input.value.trim()) courses.push(input.value.trim());
  });

  document.getElementById('intro').innerHTML = `
    <h3>Your Page: </h3>
    <p><strong>Name:</strong> ${document.getElementById('name').value}</p>
    <p><strong>Mascot:</strong> ${document.getElementById('mascot').value}</p>
    <img src="${URL.createObjectURL(imageFile)}" alt="${document.getElementById('imgcap').value}" width="300">
    <p><em>${document.getElementById('imgcap').value}</em></p>
    <p><strong>Personal Background:</strong> ${document.getElementById('per_bg').value}</p>
    <p><strong>Professional Background:</strong> ${document.getElementById('pro_bg').value}</p>
    <p><strong>Academic Background:</strong> ${document.getElementById('aca_bg').value}</p>
    <p><strong>Background in Web Development:</strong> ${document.getElementById('web_bg').value}</p>
    <p><strong>Primary Computer Platform:</strong> ${document.getElementById('pcp').value}</p>
    <p><strong>Courses Currently Taking:</strong></p>
    <ul>${courses.map(course => `<li>${course}</li>`).join('')}</ul>
    <p><strong>Something Funny:</strong> ${document.getElementById('extra_funny').value}</p>
    <p><strong>Anything Else:</strong> ${document.getElementById('extra_else').value}</p>
    <button onclick="window.location.reload()">Reset</button>
  `;
});

document.getElementById('intro').addEventListener('reset', function() {
  window.location.reload();
});

document.getElementById('addCourse').addEventListener('click', function() {
  let container = document.getElementById('coursesContainer');
  let courseDiv = document.createElement('div');
  courseDiv.classList.add('courseField');

  let courseInput = document.createElement('input');
  courseInput.type = 'text';
  courseInput.placeholder = 'Enter a course';
  courseDiv.appendChild(courseInput);

  let deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'deleteCourse';
  deleteButton.addEventListener('click', function() {
    container.removeChild(courseDiv);
  });
  courseDiv.appendChild(deleteButton);

  container.appendChild(courseDiv);
});
