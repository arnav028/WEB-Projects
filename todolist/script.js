function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = taskInput.value;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}


/* Yeh code ek naye task ko add karne ke liye hai. Dry run karke explain karta hoon:

1. `if (taskInput.value.trim() !== "")`: Yeh condition check karta hai ki text input mein kuch likha hai ya nahi. Agar input mein koi text hai (aur wo sirf spaces nahi hai), tabhi niche ke steps follow honge.

2. `var li = document.createElement("li");`: Yeh ek new list item element create karta hai.

3. `li.textContent = taskInput.value;`: Is line mein, jo text input mein likha gaya hai, wo ab naye list item ke text content mein set kiya jata hai.

4. `var deleteButton = document.createElement("button");`: Yeh ek naya button element create karta hai, jise hum delete button ke liye use karenge.

5. `deleteButton.textContent = "Delete";`: Delete button ke text content ko "Delete" set kiya jata hai.

6. `deleteButton.className = "delete-button";`: Is line mein, delete button ko ek specific class `delete-button` di jati hai, jisse hum CSS mein is button ko style kar sakein.

7. `deleteButton.onclick = function() { taskList.removeChild(li); };`: Yeh ek event listener set karta hai, jo delete button par click hone par chalega. Is event listener mein, list item ko uske parent se remove karne ka code hai.

8. `li.appendChild(deleteButton);`: Yeh line list item ke andar delete button ko append karta hai, jisse delete button list item ke saath dikhega.

9. `taskList.appendChild(li);`: Naya list item ko existing list ke end mein add karta hai.

10. `taskInput.value = "";`: Yeh line input field ko khali kar deta hai, taaki user agli task ko add kar sake.

Is tarah se, yeh code ek naye task ko input karne ke saath uske saath ek delete button bhi add karta hai. Aur jab bhi delete button par click kiya jata hai, tab wo specific task list se remove ho jata hai. */