import {NavigationHeader} from "./components/NavigationHeader";
import {FirstSubHeader} from "./components/FirstSubHeader";
import styled from "styled-components";
import {device} from "./App.theme.ts";

export const Wrapper = styled.div`
    height: auto;
    max-width: 100vw;
    overflow: hidden;
    padding-bottom: 30px;
    @media ${device.desktop} {
        //background-color: red;
        padding: 3rem;

    }
    @media ${device.laptop} {
        //background-color: #f1a447;
    }
    @media ${device.tablet} {
        //background-color: #1050f1;
    }
    @media ${device.mobile} {
        //background-color: #b700ff;
    }



`
export const Container = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: justify;

    font-family: "Montserrat", "Open Sans", "Raleway", serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-size: 2rem;
    color: #9f9693;
    align-items: stretch;
    width: 100%;
    @media ${device.mobile} {
        font-size: 1.8rem;
    }
    a {
        color: #815646;
        font-weight: 400;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }

`
export const Lgpd = () => {
    return (
        <Wrapper>
            <NavigationHeader hasCart={true}/>
            <FirstSubHeader title={'Política de Privacidade'} id={'politica-de-privacidade'} invert={true}/>
            <Container>
                <p><strong>Última atualização:</strong> 14 de maio de 2025</p>

                <p>Esta Política de Privacidade descreve as diretrizes adotadas pela <strong>Caral &
                    Michel</strong> para
                    coleta, uso, armazenamento e compartilhamento de seus dados pessoais ao utilizar nossos serviços.
                    Também
                    explicamos os seus direitos de privacidade e como a legislação protege você.</p>

                <p>Ao utilizar nossos serviços, você concorda com a coleta e uso das informações conforme descrito nesta
                    política.</p>

                <h2>Interpretação e Definições</h2>

                <h3>Interpretação</h3>
                <p>Palavras com a inicial maiúscula têm significados específicos definidos abaixo. As definições se
                    aplicam
                    independentemente de estarem no singular ou plural.</p>

                <h3>Definições</h3>
                <ul>
                    <li><strong>Conta:</strong> Conta única criada para que você acesse nossos serviços.</li>
                    <li><strong>Afiliada:</strong> Empresa relacionada por controle comum, propriedade ou administração
                        compartilhada.
                    </li>
                    <li><strong>Empresa:</strong> Refere-se à Caral & Michel (também chamada de "nós" ou "nosso").</li>
                    <li><strong>Cookies:</strong> Arquivos armazenados no seu dispositivo que registram informações de
                        navegação.
                    </li>
                    <li><strong>Dispositivo:</strong> Qualquer equipamento utilizado para acessar o serviço (computador,
                        celular etc.).
                    </li>
                    <li><strong>Dados Pessoais:</strong> Qualquer dado que identifique ou possa identificar uma pessoa.
                    </li>
                    <li><strong>Serviço:</strong> O site <a href="http://carols2michel.kuguio.com.br"
                                                            target="_blank">carols2michel.kuguio.com.br</a>.
                    </li>
                    <li><strong>Prestador de Serviço:</strong> Terceiros contratados para apoiar a entrega do nosso
                        serviço.
                    </li>
                    <li><strong>Serviço de Mídia Social de Terceiros:</strong> Plataformas como Google, Facebook etc.
                    </li>
                    <li><strong>Dados de Uso:</strong> Informações como IP, navegador, páginas visitadas, data e hora de
                        acesso.
                    </li>
                    <li><strong>Você:</strong> Usuário individual ou organização que utiliza o serviço.</li>
                </ul>

                <h2>Coleta e Uso dos Seus Dados Pessoais</h2>

                <h3>Tipos de Dados Coletados</h3>
                <p><strong>Dados Pessoais:</strong> Podemos coletar informações como:</p>
                <ul>
                    <li>Nome e sobrenome</li>
                    <li>Endereço de e-mail</li>
                    <li>Número de telefone</li>
                    <li>Dados de navegação (ex.: IP, tipo de navegador)</li>
                </ul>

                <p><strong>Dados de Uso:</strong> Incluem:</p>
                <ul>
                    <li>Endereço IP</li>
                    <li>Informações do dispositivo e sistema operacional</li>
                    <li>Navegador utilizado</li>
                    <li>Páginas acessadas e duração da visita</li>
                </ul>

                <p><strong>Dados de Redes Sociais de Terceiros:</strong> Incluindo:</p>
                <ul>
                    <li>Nome</li>
                    <li>E-mail</li>
                    <li>Lista de contatos ou atividades relacionadas</li>
                </ul>

                <h2>Tecnologias de Rastreamento e Cookies</h2>
                <p>Utilizamos cookies e tecnologias similares para:</p>
                <ul>
                    <li>Autenticar usuários</li>
                    <li>Lembrar preferências</li>
                    <li>Analisar uso do site</li>
                    <li>Melhorar a experiência do usuário</li>
                </ul>

                <p><strong>Tipos de Cookies:</strong></p>
                <ul>
                    <li>Essenciais</li>
                    <li>Preferências</li>
                    <li>Aceitação de Cookies</li>
                </ul>

                <h2>Finalidades do Uso dos Dados Pessoais</h2>
                <p>Seus dados podem ser usados para:</p>
                <ul>
                    <li>Fornecer e manter os serviços</li>
                    <li>Gerenciar sua conta</li>
                    <li>Enviar comunicações importantes</li>
                    <li>Atender solicitações e dúvidas</li>
                    <li>Melhorar nossos serviços</li>
                    <li>Cumprir obrigações legais</li>
                    <li>Participar de fusões ou aquisições</li>
                </ul>

                <h2>Compartilhamento dos Dados</h2>
                <p>Seus dados podem ser compartilhados com:</p>
                <ul>
                    <li>Prestadores de serviço terceirizados</li>
                    <li>Afiliadas ou empresas do grupo</li>
                    <li>Parceiros comerciais</li>
                    <li>Outros usuários, conforme interação pública</li>
                    <li>Autoridades legais, quando exigido</li>
                    <li>Com seu consentimento</li>
                </ul>

                <h2>Retenção dos Dados Pessoais</h2>
                <p>Armazenamos seus dados pelo tempo necessário para cumprir as finalidades desta Política, respeitando
                    exigências legais. Após isso, os dados são excluídos ou anonimizados.</p>

                <h2>Seus Direitos de Privacidade (conforme LGPD)</h2>
                <p>Você pode solicitar:</p>
                <ul>
                    <li>Acesso aos seus dados</li>
                    <li>Correção de informações</li>
                    <li>Anonimização, bloqueio ou exclusão</li>
                    <li>Revogação de consentimento</li>
                    <li>Portabilidade dos dados</li>
                    <li>Informação sobre compartilhamento</li>
                    <li>Reclamação à ANPD</li>
                </ul>

                <p>Para exercer esses direitos, envie um e-mail para: <strong>michel.kuguio@gmail.com</strong></p>

                <h2>Segurança dos Dados</h2>
                <p>Adotamos medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados e
                    uso
                    indevido.</p>

                <h2>Alterações nesta Política</h2>
                <p>Esta política pode ser atualizada periodicamente. A última atualização será sempre informada no topo
                    da
                    página.</p>

                <h2>Contato</h2>
                <p>Para dúvidas sobre esta Política de Privacidade, envie um e-mail
                    para: <strong>michel.kuguio@gmail.com</strong>
                </p>
                <a href={'https://checkout.infinitepay.io/carolina-tavares-090?items=[{"name":"Teste+de+compra","amount":500,"quantity":1}]&order_nsu=michels2carolteste1&redirect_url=https://carols2michel.kuguio.com.br/sucesso&customer_name=Michel+dos+Santos+Kuguio&customer_email=michel.kuguio@gmail.com&customer_cellphone=16992267112'}>COMPRA TESTE</a>
            </Container>

        </Wrapper>
    )
}
