
import Sidebar from './Sidebar';
import Header from './Header';
import Portfolio from './Portfolio';
const Main = () => {
    return (
        <div className="flex w-full  bg-[#F5F5F5]">
            <Sidebar />
            <main className=" w-full ">

                <Header />

                <Portfolio/>
            </main>

        </div>
    );
}

export default Main;