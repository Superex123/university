let participants = [];

registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const user = document.getElementById("Fullname");
    const email = document.getElementById("Email");
    const age = document.getElementById("Age");
    const fieldOfStudy = document.getElementById("field_of_study").value;
    const terms = document.getElementById("terms");
    const list = document.getElementById("userList");
    let message = document.getElementById("message");
    let userCount = document.getElementById("userCount");
    message.textContent = "";
    
    if (user.value.trim() === "" || email.value.trim() === "" || email.value.includes("@") === false || age.value.trim() < 18 || !terms.checked) {
        message.textContent = "Error: Please correct the following issues:\n"
        message.style.color = "red";
        if (user.value.trim() === "") {
        // alert("Please enter your full name.");
        message.textContent += "Please enter your full name.\n";
        }
        if (email.value.trim() === "") {
            // alert("Please enter your email.");
            message.textContent += "Please enter your email.\n";
        }
        else if (email.value.includes("@") === false) {
            // alert("Please enter a valid email address.");
            message.textContent += "Please enter a valid email address.\n";
        }
        if (age.value.trim() === "" || age.value.trim() < 0) {
            // alert("Please enter your age.");
            message.textContent += "Please enter valid age.\n";
        }
        else if (age.value.trim() < 18) {
            // alert("You must be at least 18 years old.");
            message.textContent += "You must be at least 18 years old.\n";
        }

        if (!terms.checked) {
            // alert("Please accept the terms and conditions.");
            message.textContent += "Please accept the terms and conditions.\n";
        }
    }
    else {
            message.textContent = "Registration successful!\n" + user.value + "\n"+ "Age:" + age.value + "\n" + "Field of Study: " + fieldOfStudy + "\n";
            message.style.color = "green";
            participant = {
                name: user.value,
                email: email.value,
                age: age.value,
                fieldOfStudy: fieldOfStudy
            };
            participants.push(participant);
            userCount.textContent = participants.length;
            addParticipant(participant);
            registrationForm.reset();


    }   
});

function addParticipant(participant) {
    const list = document.getElementById("userList");
    const listItem = document.createElement("li");
    listItem.textContent = `Name: ${participant.name}\n Age: ${participant.age} \n Field of Study: ${participant.fieldOfStudy}`;
    list.appendChild(listItem);
}