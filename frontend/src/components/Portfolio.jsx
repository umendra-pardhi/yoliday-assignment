import { useState, useEffect } from "react";
import axios from "axios";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch data from backend
    axios.get("http://localhost:5000/api/projects").then((res) => setProjects(res.data));
  }, []);

  return (
    <section className=" p-0 lg:p-6 ">
      <div className="w-full lg:rounded-[15px] bg-white lg:p-4 ">
        <h1 className=" font-semibold text-lg text-gray-800">Portfolio</h1>

        <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
          <div className="flex lg:space-x-4 justify-evenly ">
            <div><button className="text-[#DF5532] border-b-[3px]  border-[#DF5532] pb-1">Project</button></div>
            <div><button className="text-gray-600">Saved</button></div>
            <div><button className="text-gray-600">Shared</button></div>
            <div><button className="text-gray-600">Achievement</button></div>

          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-filter text-gray-600"></i>
            <input type="text" placeholder="Search a project" onChange={(e) => setSearch(e.target.value)} className="border rounded-lg px-4 py-2" />
            <button className="bg-orange-500 text-white p-2 rounded-lg">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        <div className="space-y-4 p-2">
          {projects
            .filter((project) =>
              project.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((project) => (
              <div key={project.id} className="flex bg-white rounded-lg shadow p-0">
                <div className="h-full">
                  <img src={`https://placehold.co/150x100`} className=" h-full rounded-lg mr-4" />
                </div>

                <div className="flex-1 p-2">
                  <h2 className="text-lg font-semibold">{project.title}</h2>
                  <p className="text-gray-500 text-sm">{project.description}....</p>
                  <div className="text-gray-500 mt-2">
                    <div className="flex justify-between">
                      <div className="">
                        <div className="uppercase text-sm font-semibold text-gray-900">{project.language}</div>
                        <div className="text-gray-500 text-sm">{project.author}</div>
                      </div>
                      <div>
                        <button className=" text-white px-4 py-2 rounded-lg self-start " style={{ background: "linear-gradient(135deg, #F39519 0%, #FFCD67 100%)" }}>Add to Cart</button>
                      </div>
                    </div>


                  </div>
                </div>


              </div>
            ))}
        </div>

      </div>

    </section>
  );
}

export default Portfolio;
