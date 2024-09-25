const resumeForm = document.getElementById('resumeForm') as HTMLFormElement | null;
const resumeOutput = document.getElementById('resumeOutput') as HTMLElement | null;

if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get all input values with null checks
        const nameInput = document.getElementById('name') as HTMLInputElement | null;
        const emailInput = document.getElementById('email') as HTMLInputElement | null;
        const phoneInput = document.getElementById('phone') as HTMLInputElement | null;
        const educationInput = document.getElementById('education') as HTMLInputElement | null;
        const workExperienceInput = document.getElementById('workExperience') as HTMLInputElement | null;
        const skillsInput = document.getElementById('skills') as HTMLInputElement | null;
        const othersInput = document.getElementById('others') as HTMLInputElement | null;

        // Check for null before accessing .value
        const name = nameInput ? nameInput.value : '';
        const email = emailInput ? emailInput.value : '';
        const phone = phoneInput ? phoneInput.value : '';
        const education = educationInput ? educationInput.value : '';
        const workExperience = workExperienceInput ? workExperienceInput.value : '';
        const skills = skillsInput ? skillsInput.value : '';
        const others = othersInput ? othersInput.value : '';

        // Generate HTML for the resume
        const resumeHTML = `
            <h2>Generated Resume</h2>
            <label>Name: <input type="text" value="${name}" /></label><br>
            <label>Email: <input type="email" value="${email}" /></label><br>
            <label>Phone: <input type="tel" value="${phone}" /></label><br>
            <label>Education: <input type="text" value="${education}" /></label><br>
            <label>Work Experience: <input type="text" value="${workExperience}" /></label><br>
            <label>Skills: <input type="text" value="${skills}" /></label><br>
            <label>Others: <input type="text" value="${others}" /></label><br>
        `;

        resumeOutput.innerHTML = resumeHTML;
        console.log(name, email, phone, education, workExperience, skills, others);
        
    });
} else {
    console.error('Form or output div not found in the DOM');
}