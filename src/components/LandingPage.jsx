import React, { useEffect } from "react";
import { Search } from "lucide-react";
import DocterCard from "./DocterCard";
import { useState } from "react";
//import doctors from "./Doctors";

function LandingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [doctors, setDocters] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  
  useEffect(() => {
    fetch("/Doctors.json")
      .then((res) => res.json())
      .then((data)=> setDocters(data))
  }, [])


  const filteredDocters = doctors.filter((doc) =>
    `${doc.name} ${doc.specialty}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const searchInput = () => {
    return (
      <>
        <div className="flex items-center border w-sm rounded p-1">
          <Search className="mr-2" />
          <input
            type="search"
            value={searchTerm}
            placeholder="Search by name or speciality..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 outline-none "
          />
        </div>
      </>
    );
  };

  return (
    <>
      <div className="p-6 mx-auto bg-pink-100">
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
  );
}

export default LandingPage;
