import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const GET_LESSONS_QUERY = gql`
    query {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
        slug
        }
    }
`

interface GetLessonsQueryResponse {
    lessons: {
        slug: string;
    }[]
}

interface Teste {
    first_lesson_slug: string;
}

export function Event() {

    const [sidebarActive, setSidebarActive] = useState(false)

    function handleUpdatesidebar() {
        console.log("teste")
        setSidebarActive(!sidebarActive)
    }

    const navigate = useNavigate()
    const { slug } = useParams<{ slug: string }>()
    // var {first_lesson_slug } = useParams<{first_lesson_slug: string}>()
    const {data} = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

    if ( !slug || slug === undefined ) {
        var first_lesson_slug = data?.lessons[0].slug
        navigate(`/event/lesson/${first_lesson_slug}`)
    }

    return (
        <div className="flex flex-col min-h-screen">
        <Header activeSidebar={handleUpdatesidebar} />
        <main className="flex flex-1">
            <div className="flex flex-1 flex-col">
                {slug ? <Video lessonSlug={slug} /> : <h1>teste</h1>}
                <Footer />
            </div>
        
        
        <Sidebar sidebarActive={sidebarActive}/>
        </main>
        </div>
    )
}