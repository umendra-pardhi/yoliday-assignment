
import Sidebar from './Sidebar';
import Header from './Header';
import Portfolio from './Portfolio';
import BottomNavBar from './BottomNavbar';

const Main = () => {
    return (
        <div className="flex h-screen w-full  bg-[#F5F5F5]">
            <Sidebar />
            <main className=" w-full h-screen lg:overflow-hidden">

                <Header />

                <Portfolio />
            </main>

            <BottomNavBar/>

        </div>
    );
}

export default Main;