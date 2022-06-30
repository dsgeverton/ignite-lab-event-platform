import { Rocketseat } from "./Rocketseat";

export function Footer() {
    return (
        <div className="w-full px-8 bg-gray-900">
            <div className="border-t-2 p-6 border-t-gray-500 flex flex-col footer:flex-row gap-6 footer:gap-0 w-full justify-between items-center">
                <div className="flex flex-col footer:flex-row gap-4 items-center ">
                    <Rocketseat />
                    <span className="text-sm text-center text-gray-200">Rocketseat - Todos os direitos reservados</span>
                </div>
                <a className="text-gray-200" href="">Políticas de privacidade</a>
            </div>
        </div>
    )
}