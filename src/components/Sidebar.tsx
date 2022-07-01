import { gql, useQuery } from '@apollo/client'
import classNames from 'classnames';
import { useState } from 'react';
import {Lesson} from './Lesson'

const GET_LESSONS_QUERY = gql`
    query {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
        id
        title
        availableAt
        slug
        lessonType
        }
    }
`

interface GetLessonsQueryResponse {
    lessons: {
        id: string;
        title: string;
        slug: string;
        availableAt: string;
        lessonsType: 'live' | 'class';
    }[]
}

interface SidebarActive {
    sidebarActive: Boolean
}

export function Sidebar(props: SidebarActive) {

    const [sidebarActive, setSidebarActive] = useState(false)
    const {data} = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

    document.body.onresize = function() {
        if (document.body.clientWidth < 832) {
            setSidebarActive(!sidebarActive)
        }
    };

    return (

        <aside className={classNames(`w-[348px] absolute limite:static limite:block bg-gray-700 p-6 border-l border-gray-600`, {
            'hidden': !props.sidebarActive,
            'block': props.sidebarActive,
            'z-10': props.sidebarActive,
            'right-0': props.sidebarActive
        })}>

            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>

            <div className='flex flex-col gap-8'>
                {data?.lessons.map(
                    lesson => {
                        return (
                            <Lesson
                            key={lesson.id}
                            type={lesson.lessonsType}
                            availableAt={new Date(lesson.availableAt)}
                            title={lesson.title}
                            slug={lesson.slug}
                            />
                        )
                    }
                )}
            </div>
        </aside>
    )
}