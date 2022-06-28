import { Rocketseat } from "./Rocketseat";

export function Footer() {
    return (
        <div className="w-full px-8 bg-gray-900 flex flex-1 max-h-[3.4rem]">
            <div className="p-4 border-t-2 border-t-gray-500 flex flex-1 justify-between items-center">
                <div className="flex gap-4 items-center ">
                    <Rocketseat />
                    <span className="text-sm text-gray-200">Rocketseat - Todos os direitos reservados</span>
                </div>
                <a className="text-gray-200" href="">Políticas de privacidade</a>
            </div>
        </div>
    )
}