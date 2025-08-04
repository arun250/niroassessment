import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//import doctors from "./Doctors";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [errors, setErrors] = useState("")
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
    email: "",
    datetime: "",
    mode: "",
  });

  useEffect(() => {
    fetch("/Doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);


const validate = () => {
    const newErrors = {}
  //first name
  if (!form.name.trim()) {
    newErrors.name = "Name is required"
}

// email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!form.email) {
    newErrors.email = "Email is required"
}
else if (!emailRegex.test(form.email)) {
    newErrors.email = "Invalid Email format"
}
if (!form.datetime) {
  newErrors.date = "Date of Appointment is required"
}

setErrors(newErrors)
return Object.keys(newErrors).length === 0;
    
}


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: "", email: "", datetime: "", mode: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const openForm = (modeType) => {
    setForm((prev) => ({ ...prev, mode: modeType }));
    setShowForm(true);
  };

  const returnToHomePage = () => {
    navigate("/")
  }

  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === parseInt(id));
  if (!doctor) return <p>Doctor not found</p>;

  return (
    <>
      <div className="p-6 min-w-3xl mx-auto space-y-6 bg-cyan-800 text-white">
        {/* Top Header */}
        <div className="flex items-center space-x-4">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-24 h-24 rounded-full border"
          />
          <div>
            <h2 className="text-xl font-bold">{doctor.name}</h2>
            <p className="text-sm">
              {doctor.qualification || "MBBS, DNB, PGDCC"}
            </p>
            <p className="text-sm">{doctor.hospital}</p>
            <p className="text-sm text-gray-400">
              {doctor.location || "SURAT, GUJARAT"}
            </p>
          </div>
        </div>
        {/* About */}
        <div>
          <h3 className="font semi-bold text-lg">About Doctor</h3>
          <p className="text-sm mt-1">
            {doctor.about ||
              "I am a clinical cardiologist, physician & have special interest in diabetes."}
          </p>
        </div>
        {/* Expertise */}
        <div>
          <h3 className="font-semibold text-lg">
            Expertise / Special Interest
          </h3>
          <p className="text-sm mt-1">
            {doctor.expertise || "Heart, Diabetes, General Care"}
          </p>
        </div>
        {/* Specialities */}
        <div>
          <h3 className="font-semibold text-lg">Specialities</h3>
          <ul className="flex gap-4 mt-2">
            {(doctor.specialities || ["Cardiology", "Internal Medicine"]).map(
              (spec, i) => (
                <li
                  key={i}
                  className="bg-white text-black px-3 py-1 rounded-full text-xs">
                  {spec}
                </li>
              )
            )}
          </ul>
        </div>
        {/* License & Language */}
        <div className="grid grid-cols-2 gap-6 ">
          <div>
            <h4 className="text-sm font-medium">License Number</h4>
            <p className="text-xs mt-1">{doctor.license || "G-34794"}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium">Languages</h4>
            <p className="text-xs mt-1">
              {doctor.languages || "English, Hindi"}
            </p>
          </div>
        </div>

        {/* Clinic Details */}
        <div>
          <h4 className="text-sm font-medium">Practices at</h4>
          <p className="text-xs mt-1">
            {doctor.clinicAddress || "Shivansh Clinic, Surat"}
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 text-xs">
            Get Directions
          </a>
          <p className="mt-2 text-green-600 font-semibold">
            Available: Mon–Sat, 10:00 AM – 5:00 PM
          </p>
        </div>
        {/* Video Appointment Button */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => openForm("in-person")}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            In-Person Appointment
          </button>

          <button
            onClick={() => openForm("video")}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
            Video Appointment
          </button>
        </div>
        <button
            onClick={() => returnToHomePage()}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-purple-700">
            Return to HomePage
          </button>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit} className="p-6 min-w-3xl mx-auto space-y-6 bg-cyan-800  text-white">
          <h3 className="text-xl font-semibold">
            Book a {form.mode === "video" ? "Video" : "In-Person"} Appointment
          </h3>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className=" w-full border rounded p-2 "
          />
          <div>

          {errors["name"] && <span className="text-sm text-red-600/100 ">{errors["name"]}</span>}
          </div>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border rounded p-2"
          />
          <div>
           {errors["email"] && <span className="text-sm text-red-600/100 ">{errors["email"]}</span>}
          </div>
          <input
            type="datetime-local"
            value={form.datetime}
            onChange={(e) => setForm({ ...form, datetime: e.target.value })}
            className="w-full border rounded p-2 "
          />
          <div>
           {errors["date"] && <span className="text-sm text-red-600/100">{errors["date"]}</span>}
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Confirm Appointment
          </button>
        </form>
      )}
      {submitted && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded shadow">
          Appointment booked successfully!
        </div>
      )}
    </>
  );
}

export default ProfilePage;
