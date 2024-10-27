        function changeBackgroundColor() {
            const bgColor = document.getElementById("bgColor").value; // Ambil nilai warna dari dropdown
            document.body.style.backgroundColor = bgColor; // Terapkan warna latar belakang ke body
        }

       function changeFontSize() {
           const fontSize = document.getElementById("fontSize").value + "px";
           document.body.style.fontSize = fontSize;
         }
         
        // Function to add a new task
        function addTask() {
            var taskInput = document.getElementById("newTask");
            var taskText = taskInput.value;

            if (taskText === "") {
                alert("Please enter a task.");
                return;
            }

            var li = document.createElement("li");
            li.appendChild(document.createTextNode(taskText));

            var closeButton = document.createElement("span");
            closeButton.className = "close";
            closeButton.appendChild(document.createTextNode("hapus"));
            closeButton.onclick = function () {
                deleteTask(this);
            };

            li.appendChild(closeButton);
            li.ondblclick = function () {
                editTask(this);
            };
            li.onclick = function () {
                markCompleted(this);
            };

            document.getElementById("taskList").appendChild(li);
            taskInput.value = "";  // Clear the input field
        }

        // Function to delete a task
        function deleteTask(element) {
            element.parentElement.remove();
        }

        // Function to edit a task
        function editTask(element) {
            var taskText = prompt("Edit your task:", element.firstChild.textContent);
            if (taskText) {
                element.firstChild.textContent = taskText;
            }
        }

        function toggleDarkMode() {
            document.body.classList.toggle("dark-mode");
        }