import { CheckCircle, Lock} from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {

    const isLessonAvailable = isPast(props.availableAt)
    const availableDataFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR
    })
    const { slug } = useParams<{ slug: string }>()

    const isActive = slug === props.slug

    return (
        <Link to={`/event/lesson/${props.slug}`} className='group'>
            <span>
                {availableDataFormatted}
            </span>

            <div className={`rounded border border-gray-500 p-4 mt-2 ${isActive ? 'bg-green-500':''} group-hover:border-green-500`}>
                <header className="flex items-center justify-between">
                    { isLessonAvailable ? (
                        <span className={`text-sm ${isActive ? 'text-white' : 'text-blue-500'} font-medium flex items-center gap-2`}>
                            <CheckCircle size={20}/>
                            Conteúdo liberado
                        </span> )
                        :
                        (<span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20}/>
                            Em breve
                        </span>)

                    }

                    <span className={`text-xs rounded px-2 py-[0.125rem] text-white border ${isActive ? 'border-white' : 'border-green-300'} font-bold`}>
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className={` ${isActive ? 'text-white' : 'text-gray-200'} mt-5 block`}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}