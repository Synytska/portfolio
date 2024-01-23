import Button from "./button";
import NavList from "./nav-list";

export default function Menu() {
    return (
        <div className="bg-white border-l border-black ml-4 my-0 p-6 absolute top-[8.5rem] right-0 left-0">
            <div className="flex flex-col gap-y-6 gap-x-6">
                    <NavList />
                </div>
            </div>
    )
}

