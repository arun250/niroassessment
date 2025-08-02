import React from 'react'
import { Search } from 'lucide-react';
import DocterCard from './DocterCard';
import { useState } from 'react';

const doctors = [
    {
      id: 1,
      name: "Dr. Lelah Nichols",
      specialty: "Cardiologist",
      hospital: "Sterling Hospital, Surat, Gujarat",
      experience: "12+ yrs",
      rating: "4.8",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Dr. Michael Reyes",
      specialty: "Dermatologist",
      hospital: "Apollo Hospital, Chennai",
      experience: "8 yrs",
      rating: "4.5",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      id: 3,
      name: "Dr. Rina Patel",
      specialty: "Pediatrician",
      hospital: "Sunshine Clinic, Ahmedabad",
      experience: "6 yrs",
      rating: "4.7",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      id: 4,
      name: "Dr. Aditya Kumar",
      specialty: "Neurologist",
      hospital: "Global Hospital, Bengaluru",
      experience: "15 yrs",
      rating: "4.9",
      image: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      id: 5,
      name: "Dr. Sara George",
      specialty: "Gynecologist",
      hospital: "Rainbow Hospital, Hyderabad",
      experience: "10 yrs",
      rating: "4.6",
      image: "https://randomuser.me/api/portraits/women/36.jpg",
    },
    {
      id: 6,
      name: "Dr. Arjun Nair",
      specialty: "Orthopedic",
      hospital: "Fortis Hospital, Kochi",
      experience: "11 yrs",
      rating: "4.3",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      id: 7,
      name: "Dr. Tanya Mehta",
      specialty: "Psychiatrist",
      hospital: "MindCare Clinic, Mumbai",
      experience: "9 yrs",
      rating: "4.4",
      image: "https://randomuser.me/api/portraits/women/52.jpg",
    },
    {
      id: 8,
      name: "Dr. Rajeev Bansal",
      specialty: "ENT Specialist",
      hospital: "Max Hospital, Delhi",
      experience: "7 yrs",
      rating: "4.2",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
    },
    {
      id: 9,
      name: "Dr. Nidhi Verma",
      specialty: "Ophthalmologist",
      hospital: "Vision Eye Care, Pune",
      experience: "13 yrs",
      rating: "4.9",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
    },
    {
      id: 10,
      name: "Dr. Karan Das",
      specialty: "General Physician",
      hospital: "Lifeline Clinic, Kolkata",
      experience: "5 yrs",
      rating: "4.1",
      image: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    {
      id: 11,
      name: "Dr. Anita Chauhan",
      specialty: "Endocrinologist",
      hospital: "Diabetes Center, Vadodara",
      experience: "14 yrs",
      rating: "4.6",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 12,
      name: "Dr. Vivek Rana",
      specialty: "Urologist",
      hospital: "Men’s Health Center, Nagpur",
      experience: "10 yrs",
      rating: "4.3",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      id: 13,
      name: "Dr. Priya Shenoy",
      specialty: "Oncologist",
      hospital: "HCG Cancer Center, Bengaluru",
      experience: "16 yrs",
      rating: "4.8",
      image: "https://randomuser.me/api/portraits/women/35.jpg",
    },
    {
      id: 14,
      name: "Dr. Rohit Sen",
      specialty: "Radiologist",
      hospital: "ScanTech Imaging, Bhubaneswar",
      experience: "9 yrs",
      rating: "4.4",
      image: "https://randomuser.me/api/portraits/men/29.jpg",
    },
    {
      id: 15,
      name: "Dr. Sneha Rathi",
      specialty: "Pathologist",
      hospital: "LabCorp Diagnostics, Lucknow",
      experience: "7 yrs",
      rating: "4.5",
      image: "https://randomuser.me/api/portraits/women/49.jpg",
    },
    {
      id: 16,
      name: "Dr. Mohan Iyer",
      specialty: "Gastroenterologist",
      hospital: "Gastro Care Center, Mangalore",
      experience: "11 yrs",
      rating: "4.6",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
      id: 17,
      name: "Dr. Ayesha Khan",
      specialty: "Pulmonologist",
      hospital: "Breathe Easy Clinic, Indore",
      experience: "6 yrs",
      rating: "4.3",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    {
      id: 18,
      name: "Dr. Suresh Reddy",
      specialty: "Nephrologist",
      hospital: "Kidney Care Center, Vishakhapatnam",
      experience: "13 yrs",
      rating: "4.7",
      image: "https://randomuser.me/api/portraits/men/31.jpg",
    },
    {
      id: 19,
      name: "Dr. Megha Sinha",
      specialty: "Dentist",
      hospital: "Bright Smiles, Jaipur",
      experience: "4 yrs",
      rating: "4.2",
      image: "https://randomuser.me/api/portraits/women/53.jpg",
    },
    {
      id: 20,
      name: "Dr. Raghav Malhotra",
      specialty: "Surgeon",
      hospital: "AIIMS, New Delhi",
      experience: "17 yrs",
      rating: "4.9",
      image: "https://randomuser.me/api/portraits/men/38.jpg",
    }
  ];

function LandingPage() {

    const [searchTerm, setSearchTerm] = useState("")
        const filteredDocters = doctors.filter((doc) =>
        `${doc.name} ${doc.specialty}`.toLowerCase().includes(searchTerm.toLowerCase())
        )
   
    const searchInput = () => {
        
    return (
        <>
            <div className='flex items-center border w-sm rounded p-1'>
        <Search className='mr-2'/>
                <input type="search"
                    value={searchTerm}
                    placeholder='Search by name or speciality...'
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 outline-none "
                />
            </div>
    </>
    )
}

  return (
      <>
      <div className='p-6 mx-auto'>
        
          {searchInput()}
    
    {filteredDocters.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredDocters.map((doc) => (
            <DocterCard key={doc.id} {...doc} />
            ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-10">No doctors found.</p>
        )}
        </div>
    
      </>
  )
}

export default LandingPage