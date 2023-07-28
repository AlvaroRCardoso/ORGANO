import './Rodape.css'

const Rodape = () => {
    return (<footer className='footer'>
        <section>
            <ul>
                <li>
                    <a href="https://www.facebook.com/alvaro.cardoso.5496/" target="_blank">
                        <img src="/imagens/fb.png" alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/cardosoalvaro_" target="_blank">
                        <img src="/imagens/tw.png" alt="Instagram" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/cardosoalvaro_/" target="_blank">
                        <img src="/imagens/ig.png" alt="Twitter" />
                    </a>
                </li>
            </ul>
        </section>

        <section>
            <img src="/imagens/logo.png" alt="Logo Rodape"/>
        </section>

        <section>
            <p>Desenvolvido por Álvaro</p>
        </section>
    
    </footer>)
}

export default Rodape