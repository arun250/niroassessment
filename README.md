# 🩺 Doctor Directory App

A React-based Doctor Directory application that displays detailed doctor profiles, allows searching by name/specialty, and enables users to book appointments for video consultations.

## Live Demo:  

Published Url: https://niroass.netlify.app/

Video Link: https://drive.google.com/file/d/10QZwFXdqla5E4QexphMPYq0kRqZVvvyP/view?usp=sharing


## 🚀 Features

- 🔍 Search doctors by name or specialty
- 🧑‍⚕️ View detailed doctor profile with:
  - Name, specialty, qualifications, license
  - Location, languages spoken
  - About section, expertise, clinic address
  - Rating and image
- 📅 Book Appointment:
  - Patient Name, Email, Date/Time
  - Confirmation message on submission
- 🖥️ Video Appointment button that links to the appointment form
- Fully responsive UI using TailwindCSS

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS
- **Routing**: React Router
- **Mock Data**: JSON file (`Doctors.json`)
- **Form Handling**: React useState

## 📁 Project Structure

    src/
    ├── components/
    │ ├── Header.jsx # List of all doctors with search
    │ ├── DoctorCard.jsx # Individual doctor card UI
    │ ├── LandingPage.jsx # Detailed view of doctor info
    │ └── ProfilePage.jsx # Form to book an appointment
    ├── public/
    │ └── Doctors.json
    ├── App.jsx
    └── index.js



## 📦 How to Run Locally

    git clone 
    cd doctor-directory
    npm install
    npm run dev
##    Example Mock Data
    {
      "id": 1,
      "name": "Dr. Asha Mehta",
      "qualification": "MBBS, MD (Cardiology)",
      "specialty": "Cardiologist",
      "expertise": "Heart failure, Arrhythmia",
      "about": "20+ years of experience in treating complex cardiac conditions.",
      "license": "GJ/MC/4521",
      "languages": ["English", "Hindi", "Gujarati"],
      "location": "Ahmedabad, Gujarat",
      "clinic_address": "HeartCare Clinic, Satellite, Ahmedabad",
      "rating": 4.8,
      "image": "https://randomuser.me/api/portraits/women/65.jpg"
    }
## Screenshot

|Home Page|

<img src="https://res.cloudinary.com/diejm0elz/image/upload/v1754272996/Bildschirmfoto_2025-08-04_um_07.31.31_rsscij.png" width= "400">

|Profile Page |

<img src="https://res.cloudinary.com/diejm0elz/image/upload/v1754272995/Bildschirmfoto_2025-08-04_um_07.31.59_j6deik.png" width= "400">
