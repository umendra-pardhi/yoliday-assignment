import profile from '/profile.svg'
import icobell from '/ico_bell.svg'

function Header() {
    return (
        <header className="bg-white h-[70px] border-b flex justify-end px-12 hidden lg:flex ">
            <div className="flex items-center">
                <img src={icobell} alt="User profile" className="w-6 h-6 mr-5" />
                <div className="flex items-center">
                    <img src={profile} alt="User profile" className="rounded-full w-10 h-10 mr-2" />
                    <div>
                        <div className="font-semibold text-gray-700">Lorem Ips <i class="fas fa-caret-down ms-6"></i></div>
                        <div className="text-sm text-gray-500">Manager</div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;