
interface ActiveSidebar{
    activeSidebar: Function
}

export function Sandwich(props: ActiveSidebar) {

    function handleMenu() {
        const bar1 = document.querySelector('#bar-1')
        const bar2 = document.querySelector('#bar-2')
        const bar3 = document.querySelector('#bar-3')
        bar1?.classList.toggle('top-[12px]')
        bar1?.classList.toggle('rotate-45')
        bar1?.classList.toggle('absolute')
        bar2?.classList.toggle('top-[4px]')
        bar2?.classList.toggle('rotate-[-45deg]')
        bar2?.classList.toggle('absolute')
        bar3?.classList.toggle('opacity-100')
        bar3?.classList.toggle('opacity-0')
        props.activeSidebar()
    }

    return (
        <div className="flex limite:hidden justify-center items-center absolute right-6">
            <p>Aulas</p>
            <div onClick={handleMenu} className="p-2 space-y-2 rounded shadow relative">
                <span id="bar-1" className="block w-8 h-0.5 bg-blue-500 duration-200"></span>
                <span id="bar-2" className="block w-8 h-0.5 bg-blue-500 duration-200"></span>
                <span id="bar-3" className="block w-8 h-0.5 bg-blue-500 opacity-100 duration-200"></span>
            </div>
        </div>
    )
}