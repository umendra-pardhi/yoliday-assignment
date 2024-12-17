import icofilter from '/filter-list.svg';

function BottomNavBar() {
    return (
        <div className="lg:hidden">
            <div class="fixed bottom-20 right-0 left-0 flex justify-center">
                <button class="flex items-center bg-[#DF5532] text-white px-4 py-2 rounded-full shadow-lg">
                   <img src={icofilter} alt="" className="w-6 h-6 mr-2" />
                    Filter
                </button>
            </div>
     
            <div class="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
                <div class="flex justify-around py-2">
                    <button class="flex flex-col items-center text-gray-500">
                        <i class="fas fa-home text-xl">
                        </i>
                        <span class="text-xs">
                            Home
                        </span>
                    </button>
                    <button class="flex flex-col items-center text-[#DF5532]">
                        <i class="fas fa-suitcase text-xl">
                        </i>
                        <span class="text-xs">
                            Portfolio
                        </span>
                    </button>
                    <button class="flex flex-col items-center text-gray-500">
                        <i class="fas fa-plus-circle text-xl">
                        </i>
                        <span class="text-xs">
                            Input
                        </span>
                    </button>
                    <button class="flex flex-col items-center text-gray-500">
                        <i class="fas fa-user text-xl">
                        </i>
                        <span class="text-xs">
                            Profile
                        </span>
                    </button>
                </div>
            </div>
    
        </div>
    )
}

export default BottomNavBar;