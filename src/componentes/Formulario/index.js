import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    // Nesse trecho de código, você está utilizando o hook useState do React para criar três estados diferentes: nome, cargo e imagem. O useState é uma função que retorna um array com duas posições: a primeira posição é o valor atual do estado e a segunda posição é uma função para atualizar esse valor. No seu caso, você está atribuindo o valor retornado pelo useState às variáveis nome, cargo e imagem, respectivamente. Esses estados podem ser utilizados para controlar os valores dos campos de texto e do select em componentes como CampoTexto e ListaSuspensa.
    const [nome, setNome] = useState('') 
    const [cargo, setCargo] = useState('') 
    const [imagem, setImagem] = useState('http...') 
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do dev</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto
                    label="Imagem"
                    placeholder="endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.nomeTimes}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    {/* tudo que estiver aqui no meio vai ser passado para props.children */}
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario