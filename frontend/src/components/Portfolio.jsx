import { useState, useEffect } from "react";
import axios from "axios";
import icnoti from '/ic_notifications.svg'
import icshop from '/ic_shopping_bag.svg';

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch data from backend
    axios.get("https://yoliday-assignment.netlify.app/.netlify/functions/api/projects/").then((res) => setProjects(res.data));
  }, []);

  return (
    <section className=" p-0 lg:p-6  ">
      <div className="w-full lg:rounded-[15px] bg-white lg:p-4 ">

        <div className="flex justify-between p-4 lg:p-0 sticky bg-white top-0 lg:static ">

          <div>
            <h1 className=" font-bold text-xl text-gray-800">Portfolio</h1>
          </div>

          <div className="flex gap-3 lg:hidden">
            <img src={icshop} alt="" className="w-7 h-7" />
            <img src={icnoti} alt="" className="w-7 h-7" />

          </div>
        </div>


        <div className="flex flex-col lg:flex-row justify-between items-center mb-4 bg-white sticky top-[58px] lg:static">
          <div className="flex lg:space-x-4 justify-evenly w-full lg:w-fit border-b-2 ">
            <div><button className="text-[#DF5532] border-b-[3px]  border-[#DF5532] pb-1">Project</button></div>
            <div><button className="text-gray-600">Saved</button></div>
            <div><button className="text-gray-600">Shared</button></div>
            <div><button className="text-gray-600">Achievement</button></div>

          </div>
          <div className="flex items-center space-x-5 space-y-5 lg:space-y-0 me-8 w-full lg:w-fit justify-center">
            <div className="flex  hidden justify-center items-center lg:flex">
              <i className="fas fa-filter text-gray-600 me-2"></i><p className="me-5">Filter</p>
            </div>

            <div className="border rounded-lg p-1 ps-0 w-[90%] ">
              <input type="text" placeholder="Search a project" onChange={(e) => setSearch(e.target.value)} className="w-[85%] lg:w-fit outline-none px-4 py-2 lg:py-1 " />
              <button className="bg-[#DF5532] text-white py-1 px-3 rounded-lg ">
                <i className="fas fa-search text-xs"></i>
              </button>
            </div>

          </div>
        </div>

        <div className="space-y-4 p-2 lg:h-[68vh] lg:overflow-y-scroll">
          {projects
            .filter((project) =>
              project.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((project) => (
              <div key={project.id} className="flex bg-white rounded-lg shadow p-0 lg:w-[80%]">
                <div className=" w-[35%]">
                  <img src={project.img} className="  object-cover rounded-s-lg lg:w-[400px] lg:h-[170px]" />
                </div>

                <div className="flex justify-center items-center w-[75%]">


                  <div className="flex-1 p-2 ">
                    <h2 className="text-xl font-semibold">{project.title}</h2>
                    <p className="text-gray-500 text-md hidden lg:block">{project.description}....</p>
                    <div className="text-gray-500 mt-2">
                      <div className="flex justify-between">
                        <div className="">
                          <div className="uppercase text-md font-semibold text-gray-900">{project.language}</div>
                          <div className="text-gray-500 text-md">{project.author}</div>
                        </div>
                        <div>
                          <button className=" text-white px-2 lg:px-4 py-2 rounded-lg self-start text-xs lg:text-sm " style={{ background: "linear-gradient(135deg, #F39519 0%, #FFCD67 100%)" }}>Add to Cart</button>
                        </div>
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
