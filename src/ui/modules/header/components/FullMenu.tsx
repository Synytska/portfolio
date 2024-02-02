import NavList from "./NavList";

export const FullMenu = () => {
    return (
        <div className="bg-whiteM border-l border-r border-blackM mx-4 my-0 p-6 absolute top-[8.5rem] right-0 left-0">
            <div className="flex-M gap-y-6 gap-x-6">
                <NavList />
            </div>
        </div>
    )
}

