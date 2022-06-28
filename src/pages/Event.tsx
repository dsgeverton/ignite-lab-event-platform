import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";

export function Event() {

    const { slug } = useParams<{ slug: string }>() 

    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1">
            <div className="flex flex-1 flex-col">
                {slug ? <Video lessonSlug={slug} /> : <div className="flex flex-1 justify-center items-center"> Nenhum conteúdo disponível</div>}
                <Footer />
            </div>
        
        
        <Sidebar />
        </main>
        </div>
    )
}