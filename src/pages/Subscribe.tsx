import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import classNames from 'classnames';

const CREATE_SUBSCRIBER_MUTATION = gql`
    mutation createSubscriberMutation($name: String!, $email: String!) {
        createSubscriber(data: {name: $name, email: $email}) {
            id
        }
    }

`

export function Subscribe() {
    const navigate = useNavigate()
    const [inputNameAlert, setInputNameAlert] = useState(false)
    const [inputEmailAlert, setInputEmailAlert] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [createSubscriber, {loading}] = useMutation(CREATE_SUBSCRIBER_MUTATION)

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()


        if (!name) setInputNameAlert(true)
        if (!email) setInputEmailAlert(true)

        if(!name || !email) {
            console.log('entrou')
            return;
        }

        await createSubscriber({
            variables: {
                name,
                email
            }
        })
        navigate('/event')

    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex login1115:flex-row flex-col items-center justify-between mt-10 login1115:mt-20 mx-auto">
                <div className="max-w-[640px] text-center login1115:text-left px-6 login1115:px-0 justify-center flex login1115:block flex-col items-center">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
                    </h1>
                    <p className="mt-6 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded mt-8 login1115:mt-0">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
                        <input 
                            onChange={event => {setName(event.target.value)}}
                            onFocus={() => setInputNameAlert(false)}
                            type="text" 
                            name="name" 
                            id="name"
                            placeholder="Insira sem nome completo"
                            className={classNames("bg-gray-900 rounded px-5 h-14", {
                                'border': inputNameAlert,
                                'border-red-600': inputNameAlert,
                                'animate-pulse': inputNameAlert,
                            })} 
                        />
                        <input 
                            onChange={event => {setEmail(event.target.value)}}
                            onFocus={() => setInputEmailAlert(false)} 
                            type="email" 
                            name="email" 
                            id="email"
                            placeholder="Insira seu melhor e-mail"
                            className={classNames("bg-gray-900 rounded px-5 h-14", {
                                'border': inputEmailAlert,
                                'border-red-600': inputEmailAlert,
                                'animate-pulse': inputEmailAlert
                            })} 
                        />
                        { inputEmailAlert || inputNameAlert ? <strong className="block max-w-[324px] text-center">Preencha os campos acima</strong>: '' }
                        <button
                            disabled={loading}
                            type="submit"
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            Garantir minha vaga
                        </button>
                        { loading ? (
                            <div className="mt-4 flex justify-center gap-2 items-center">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping animation-delay-0"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping animation-delay-150"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping animation-delay-300"></div>
                            </div>) : ''
                        }
                    </form>
                </div>

            </div>
            
            <img src="/src/assets/code-mockup.png" alt="" className="mt-10" />
            <Footer />
        </div>
    )
}