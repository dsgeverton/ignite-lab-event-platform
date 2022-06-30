import { Logo } from "./Logo";
import { Sandwich } from "./Sandwich";

interface ActiveSidebar{
    activeSidebar: Function
}

export function Header(props: ActiveSidebar) {
    return (
        <header className="w-full pl-6 footer:pl-0 py-5 flex justify-start footer:justify-center items-center bg-gray-700 border-b border-gray-600">
        <Logo />
        <Sandwich activeSidebar={props.activeSidebar}/>
        </header>
    )
}