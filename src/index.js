document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", function(event) {
      event.preventDefault(); // 🚀 Prevent form submission from refreshing the page
      const taskInput = document.getElementById("new-task-description").value;
      
      if (taskInput.trim() === "") {
          alert("Task cannot be empty!");
          return;
      }

      // Call function to add the task
      addTask(taskInput);
      
      // Clear input field
      taskForm.reset();
  });

  function addTask(task) {
      const li = document.createElement("li");
      li.textContent = task;

      // Add a delete button for each task
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❌";
      deleteButton.style.marginLeft = "10px";
      deleteButton.addEventListener("click", () => {
          li.remove();
      });

      li.appendChild(deleteButton);
      taskList.appendChild(li);
  }
});
