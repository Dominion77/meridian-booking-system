// Add this script to the bottom of the first HTML file (index.html)
document.addEventListener('DOMContentLoaded', function() {
    // Doctor data - add more details for each doctor
    const doctors = {
        "Dr. Jane Peters": {
            name: "Dr. Jane Peters",
            specialty: "Cardiologist",
            experience: "5 years",
            image: "./Frame (1).png",
            bio: "Dr. Peters is a dedicated and compassionate medical professional with a strong commitment to patient care with years of experience in cardiology. She is one of the foremost cardiologists in Meridian Hospital, London.",
            patients: "6800+"
        },
        "Dr. Sam Wilson": {
            name: "Dr. Sam Wilson",
            specialty: "Neurosurgeon",
            experience: "8 years",
            image: "./Frame (2).png",
            bio: "Dr. Wilson is a dedicated and compassionate medical professional with a strong commitment to patient care with years of experience in neurosurgery. He is one of the foremost neurosurgeons in Meridian Hospital, London.",
            patients: "8900+"
        },
        "Dr. Pepper Potts": {
            name: "Dr. Pepper Potts",
            specialty: "Optometrist",
            experience: "7 years",
            image: "./Frame (3).png",
            bio: "Dr. Potts is a dedicated and compassionate medical professional with a strong commitment to patient care with years of experience in optometry. She is one of the foremost optometrists in Meridian Hospital, London.",
            patients: "7100+"
        },
        "Dr. Tony Stark": {
            name: "Dr. Tony Stark",
            specialty: "Orthopedic Surgeon",
            experience: "10 years",
            image: "./Frame (4).png",
            bio: "Dr. Stark is a dedicated and compassionate medical professional with a strong commitment to patient care with years of experience in orthopedic surgery. He is one of the foremost orthopedic surgeons in Meridian Hospital, London.",
            patients: "11200+"
        },
        "Dr. Meghan Carter": {
            name: "Dr. Meghan Carter",
            specialty: "Pediatrician",
            experience: "6 years",
            image: "./Frame (5).png",
            bio: "Dr. Carter is a dedicated and compassionate medical professional with a strong commitment to patient care with years of experience in pediatrics. She is one of the foremost pediatricians in Meridian Hospital, London.",
            patients: "6500+"
        },
        "Dr. Dev Patel": {
            name: "Dr. Dev Patel",
            specialty: "Psychiatrist",
            experience: "9 years",
            image: "./Frame (6).png",
            bio: "Dr. Patel is a dedicated and compassionate medical professional with a strong commitment to patient care with years of experience in psychiatry. He is one of the foremost psychiatrists in Meridian Hospital, London.",
            patients: "7300+"
        },
        "Dr. Jackson Stockdale": {
            name: "Dr. Jackson Stockdale",
            specialty: "Dentist",
            experience: "7 years",
            image: "./recent2.jpeg",
            bio: "Dr. Stockdale is a dedicated and compassionate medical professional with a strong commitment to patient care with years of experience in dentistry. He is one of the foremost dentists in Meridian Hospital, London.",
            patients: "6200+"
        },
        "Dr. Fred Hutchinson": {
            name: "Dr. Fred Hutchinson",
            specialty: "Oncologist",
            experience: "6 years",
            image: "./reecnt3.jpeg",
            bio: "Dr. Hutchinson is a dedicated and compassionate medical professional with a strong commitment to patient care with years of experience in oncology. He is one of the foremost oncologists in Meridian Hospital, London.",
            patients: "7500+"
        },
        "Dr. Tina George": {
            name: "Dr. Tina George",
            specialty: "Gynaecologist",
            experience: "5 years",
            image: "./recent1.jpeg",
            bio: "Dr. George is a dedicated and compassionate medical professional with a strong commitment to patient care with years of experience in gynaecology. She is one of the foremost gynaecologists in Meridian Hospital, London.",
            patients: "5800+"
        }
    };

    // Get all view profile buttons
    const viewProfileButtons = document.querySelectorAll('.doctor-card button');
    
    // Add click event listener to each button
    viewProfileButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the doctor's name from the parent card
            const doctorCard = this.closest('.doctor-card');
            const doctorName = doctorCard.querySelector('.doctor-name').textContent;
            
            // Get the doctor's data
            const doctorData = doctors[doctorName];
            
            // Store data in localStorage to access it from the next page
            localStorage.setItem('selectedDoctor', JSON.stringify(doctorData));
            
            // Navigate to the appointment page
            window.location.href = 'appointment.html';
        });
    });
});