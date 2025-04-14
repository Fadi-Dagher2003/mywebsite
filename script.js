document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the user inputs
    const name = document.getElementById('nameInput').value;
    const phone = document.getElementById('phoneInput').value;
    const email = document.getElementById('emailInput').value;
    const location = document.getElementById('locationInput').value;
    const linkedin = document.getElementById('linkedinInput').value;

    // Get user input for each skill
    const skill1 = document.getElementById('skill1Input').value;
    const skill2 = document.getElementById('skill2Input').value;
    const skill3 = document.getElementById('skill3Input').value;
    const skill4 = document.getElementById('skill4Input').value;

    // Get user input for each language
    const language1 = document.getElementById('language1Input').value;
    const language2 = document.getElementById('language2Input').value;
    const language3 = document.getElementById('language3Input').value;
    const language4 = document.getElementById('language4Input').value;
    const language5 = document.getElementById('language5Input').value;

    // Get user input for each hobby
    const hobby1 = document.getElementById('hobby1Input').value;
    const hobby2 = document.getElementById('hobby2Input').value;
    const hobby3 = document.getElementById('hobby3Input').value;

    // Get user input for the right panel
    const position = document.getElementById('positionInput').value;
    const profileInfo = document.getElementById('profileinfoInput').value;


    const experience1 = document.getElementById('experience1Input').value;
    const company1 = document.getElementById('company1Input').value;
    const jobTitle1 = document.getElementById('jobTitle1Input').value;
    const startDate1 = new Date(document.getElementById('startDate1Input').value);
    const endDate1 = new Date(document.getElementById('endDate1Input').value);
    const experienceinfo1 = document.getElementById('experienceInfo1Input').value;

    // Validate dates
    if (startDate1 > endDate1) {
        alert('End date must be after the start date.');
        return;
    }

    const experience2 = document.getElementById('experience2Input').value;
    const company2 = document.getElementById('company2Input').value;
    const jobTitle2 = document.getElementById('jobTitle2Input').value;
    const startDate2 = new Date(document.getElementById('startDate2Input').value);
    const endDate2 = new Date(document.getElementById('endDate2Input').value);
    const experienceinfo2 = document.getElementById('experienceInfo2Input').value;

    // Validate dates
    if (startDate2 > endDate2) {
        alert('End date must be after the start date.');
        return;
    }

    const experience3 = document.getElementById('experience3Input').value;
    const company3 = document.getElementById('company3Input').value;
    const jobTitle3 = document.getElementById('jobTitle3Input').value;
    const startDate3 = new Date(document.getElementById('startDate3Input').value);
    const endDate3 = new Date(document.getElementById('endDate3Input').value);
    const experienceinfo3 = document.getElementById('experienceInfo3Input').value;

    // Validate dates
    if (startDate3 > endDate3) {
        alert('End date must be after the start date.');
        return;
    }

    const experience4 = document.getElementById('experience4Input').value;
    const company4 = document.getElementById('company4Input').value;
    const jobTitle4 = document.getElementById('jobTitle4Input').value;
    const startDate4 = new Date(document.getElementById('startDate4Input').value);
    const endDate4 = new Date(document.getElementById('endDate4Input').value);
    const experienceinfo4 = document.getElementById('experienceInfo4Input').value;

    // Validate dates
    if (startDate4 > endDate4) {
        alert('End date must be after the start date.');
        return;
    }


    const educationinfo1 = document.getElementById('educationinfo1Input').value;
    const educationinfo2 = document.getElementById('educationinfo2Input').value;
    const educationinfo3 = document.getElementById('educationinfo3Input').value;
    const educationinfo4 = document.getElementById('educationinfo4Input').value;

    // Update the display with user inputs
    document.getElementById('nameDisplay').textContent = name;
    document.getElementById('phoneDisplay').textContent = phone;
    document.getElementById('emailDisplay').textContent = email;
    document.getElementById('locationDisplay').textContent = location;
    document.getElementById('linkedinDisplay').textContent = linkedin;

    // Update skills display
    document.getElementById('skill1Display').textContent = skill1;
    document.getElementById('skill2Display').textContent = skill2;
    document.getElementById('skill3Display').textContent = skill3;
    document.getElementById('skill4Display').textContent = skill4;

    // Update the display with user inputs for languages
    document.getElementById('language1Display').textContent = language1;
    document.getElementById('language2Display').textContent = language2;
    document.getElementById('language3Display').textContent = language3;
    document.getElementById('language4Display').textContent = language4;
    document.getElementById('language5Display').textContent = language5;

    // Update hobbies display
    document.getElementById('hobby1Display').textContent = hobby1;
    document.getElementById('hobby2Display').textContent = hobby2;
    document.getElementById('hobby3Display').textContent = hobby3;

    // Update the display with user inputs for the right panel
    document.getElementById('positionDisplay').textContent = position;
    document.getElementById('profileDisplay').textContent = profileInfo;

    document.getElementById('educationinfo1Display').textContent = educationinfo1;
    document.getElementById('educationinfo2Display').textContent = educationinfo2;
    document.getElementById('educationinfo3Display').textContent = educationinfo3;
    document.getElementById('educationinfo4Display').textContent = educationinfo4;

    document.getElementById('experience1Display').textContent = experience1;
    document.getElementById('experienceinfo1Display').textContent = experienceinfo1;
    document.getElementById('company1Display').textContent = company1;
    document.getElementById('jobTitle1Display').textContent = jobTitle1;
    document.getElementById('startDate1Display').textContent = startDate1.toDateString();
    document.getElementById('endDate1Display').textContent = endDate1.toDateString();

     // Use the function for start and end dates
updateTextContentIfValid('startDate1Display', 'Start Date', startDate1);
updateTextContentIfValid('endDate1Display', 'End Date', endDate1);

  
    document.getElementById('experience2Display').textContent = experience2;
    document.getElementById('experienceinfo2Display').textContent = experienceinfo2;
    document.getElementById('company2Display').textContent = company2;
    document.getElementById('jobTitle2Display').textContent = jobTitle2;
    document.getElementById('startDate2Display').textContent = startDate2.toDateString();
    document.getElementById('endDate2Display').textContent = endDate2.toDateString();

    // Use the function for start and end dates
updateTextContentIfValid('startDate2Display', 'Start Date', startDate2);
updateTextContentIfValid('endDate2Display', 'End Date', endDate2);
    

    document.getElementById('experience3Display').textContent = experience3;
    document.getElementById('experienceinfo3Display').textContent = experienceinfo3;
    document.getElementById('company3Display').textContent = company3;
    document.getElementById('jobTitle3Display').textContent = jobTitle3;
    document.getElementById('startDate3Display').textContent = startDate3.toDateString();
    document.getElementById('endDate3Display').textContent = endDate3.toDateString();

    // Use the function for start and end dates
updateTextContentIfValid('startDate3Display', 'Start Date', startDate3);
updateTextContentIfValid('endDate3Display', 'End Date', endDate3);

    

    document.getElementById('experience4Display').textContent = experience4;
    document.getElementById('experienceinfo4Display').textContent = experienceinfo4;
    document.getElementById('company4Display').textContent = company4;
    document.getElementById('jobTitle4Display').textContent = jobTitle4;
    document.getElementById('startDate4Display').textContent = startDate4.toDateString();
    document.getElementById('endDate4Display').textContent = endDate4.toDateString();

    // Use the function for start and end dates
updateTextContentIfValid('startDate4Display', 'Start Date', startDate4);
updateTextContentIfValid('endDate4Display', 'End Date', endDate4);



});

function updateTextContentIfValid(elementId, text, date) {
    const element = document.getElementById(elementId);

    // Check if date is valid and not empty
    if (isNaN(date) || !date) {
        element.textContent = "";  // Clear content if the date is invalid or empty
    } else {
        element.innerHTML = `<strong>${text}:</strong> ${date.toDateString()}`;  // Set content with bold text if the date is valid
    }
}

document.getElementById('imageInput').addEventListener('change', function(event) {
    const profilePic = document.getElementById('profilePic');
    const file = event.target.files[0];

    if (file) {
        if (!file.type.startsWith('image/')) {
            alert("Please select a valid image file.");
            return;
        }

        const reader = new FileReader();

        reader.onload = function(e) {
            profilePic.src = e.target.result;
        };

        reader.onerror = function() {
            alert("There was an error reading the file.");
        };

        reader.readAsDataURL(file);
    } else {
        alert("No file selected.");
    }

    
});

const sels = document.getElementById("country");
    
        // Update the phone code display when the selection changes
        function updateCodeDisplay() {
            const selectedOption = sels.options[sels.selectedIndex];
            const phoneCode = selectedOption.getAttribute("data-code");
            document.getElementById('codeDisplay').textContent = phoneCode ? `${phoneCode} ` : "";
        }
    
        // Call the function to set the initial display (optional)
        updateCodeDisplay();
    
        // Add an event listener to update the display when the selection changes
        sels.addEventListener("change", updateCodeDisplay);

         // Track the current field for each section separately
const sectionFields = {
    skillsContainer: 1,
    languagesContainer: 1,
    hobbiesContainer: 1,
    educationContainer: 1,
    ExperienceContainer: 1,
};

function toggleExtraFields(sectionId) {
    const fieldNum = sectionFields[sectionId];
    const nextField = document.getElementById(`${sectionId}-field${fieldNum}`);
    const showButton = document.getElementById(`${sectionId}-show`);
    
    if (nextField) {
        nextField.classList.remove('hidden'); // Show the next hidden field
        sectionFields[sectionId]++; // Move to the next field in this section

        // Check if there are more fields to show; if not, hide the button
        if (!document.getElementById(`${sectionId}-field${sectionFields[sectionId]}`)) {
            showButton.classList.add('hidden');
        }
    } 
}

        

function showElements() {
    // Select all elements with the class "dateElement" and display them
    const elements = document.querySelectorAll(".dateElement");
    elements.forEach(element => {
        element.style.display = "inline";
    });
}

