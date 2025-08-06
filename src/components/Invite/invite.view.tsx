import {
    Button,
    Card,
    ColorBox,
    ColorPalettes,
    Container,
    ContainerCard,
    ContainerImageCard,
    ContentCard,
    HorizontMarging,
    Image,
    Lottie,
    Search,
    SectionCard,
    VerticalMarging,
    Wrapper, WrapperButton,
    WrapperCard,
    WrapperImage,
    WrapperLottie
} from "./invite.styles.tsx";
import * as React from "react";
import {memo} from "react";
import padrinhos from "../../assets/padrinhos.jpg";
import madrinhas from "../../assets/madrinhas.jpg";
import {AnimatedComponent} from "../Animations";
import jsonLotie from '../../assets/CM.json'
import {CheckBox} from "./check-box.tsx";
import {Controller} from "react-hook-form";
import {useInviteController} from "./invite.controller.tsx";
import {format} from "date-fns";
import { ptBR } from "date-fns/locale";
export const Invite: React.FC = memo(() => {
    const {
        control,
        inviteType,
        responseData,
        requestData,
        confirm,
        loading,
        recuse,
        handleChange,
        handleSearch,
        phone,
        finish,
        invite,
        needConfirmation
    } = useInviteController();
    const renderMessage: (element: React.ReactElement) => React.ReactElement = (element) => {
        switch (inviteType) {
            case 'padrinho':
                return (<ContainerCard>

                        <SectionCard>
                            <p>
                                Querido <strong>{responseData?.title}</strong>,<br/>
                                Você é muito especial para nós e, por isso, gostaríamos de convidá-lo a ser
                                nosso <strong>Padrinho</strong>.
                                Sua presença será essencial para tornar esse momento ainda mais especial. 🥂
                            </p>
                            {element}
                            <p>

                                Terno Cinza Claro e Sem Gravata
                            </p>
                        </SectionCard>
                        <WrapperImage>
                            <strong>Paleta de cores</strong>
                            <ColorPalettes>
                                <ColorBox color={'#e9ecef'}/>
                                <ColorBox color={'#edede9'}/>
                                <ColorBox color={'#dee2e6'}/>
                                <ColorBox color={'#ced4da'}/>
                                <ColorBox color={'#d4d4d4'}/>
                                <ColorBox color={'#c6cdd7'}/>
                                <ColorBox color={'#cbcbd7'}/>
                            </ColorPalettes>
                            <Image
                                src={padrinhos}
                                alt="Padrinhos"
                            />
                        </WrapperImage>
                    </ContainerCard>
                );
            case 'madrinha':
                return (<ContainerCard>
                        <SectionCard>
                            <p>
                                Querida <strong>{responseData?.title}</strong>,<br/>
                                É com muito prazer que convidamos você para ser nossa <strong>Madrinha</strong>. Sua
                                luz, seu amor e sua presença especial certamente tornarão o nosso grande dia ainda mais
                                inesquecivel. 💖
                            </p>
                            {element}
                            <p>
                                <strong>Vestido Longo Rosa Claro</strong>
                            </p>
                        </SectionCard>
                        <WrapperImage>
                            <strong>Paleta de cores</strong>
                            <ColorPalettes>
                                <ColorBox color={'rgb(250,225,221)'}/>
                                <ColorBox color={'rgb(250,227,228)'}/>
                                <ColorBox color={'rgb(250,215,217)'}/>
                                <ColorBox color={'rgb(250,216,231)'}/>
                                <ColorBox color={'rgb(249,215,225)'}/>
                                <ColorBox color={'rgb(247,199,219)'}/>
                                <ColorBox color={'rgb(246,204,215)'}/>
                            </ColorPalettes>
                            <Image
                                src={madrinhas}
                                alt="Madrinhas"
                            />
                        </WrapperImage>
                    </ContainerCard>
                );
            case 'madrinha_e_padrinho':
                return (
                    <ContainerCard both={true}>
                        <SectionCard>
                            <p>
                                Queridos <strong>{responseData?.title}</strong>,<br/>
                                É com muito carinho que queremos convidá-los para estarem ao nosso lado como
                                nossos <strong>padrinhos</strong>.
                            </p>
                            <p>
                                A história de vocês, cheia de afeto, companheirismo e amor, é uma grande inspiração. A
                                presença de vocês tornará esse dia ainda mais incrível.🥂💖
                            </p>
                            {element}
                            <p>
                                <strong>Orientações:</strong><br/>
                                - Padrinho: Terno Cinza Claro e Sem Gravata<br/>
                                - Madrinha: Traje na paleta de cores abaixo.<br/>
                            </p>
                        </SectionCard>
                        <ContainerImageCard>
                            <WrapperImage>
                                <strong>Paleta de cores masculino</strong>
                                <ColorPalettes>
                                    <ColorBox color={'#e9ecef'}/>
                                    <ColorBox color={'#edede9'}/>
                                    <ColorBox color={'#dee2e6'}/>
                                    <ColorBox color={'#ced4da'}/>
                                    <ColorBox color={'#d4d4d4'}/>
                                    <ColorBox color={'#c6cdd7'}/>
                                    <ColorBox color={'#cbcbd7'}/>
                                </ColorPalettes>
                                <Image
                                    src={padrinhos}
                                    alt="Padrinhos"
                                />
                            </WrapperImage>
                            <WrapperImage>
                                <strong>Paleta de cores feminana</strong>
                                <ColorPalettes>
                                    <ColorBox color={'rgb(250,225,221)'}/>
                                    <ColorBox color={'rgb(250,227,228)'}/>
                                    <ColorBox color={'rgb(250,215,217)'}/>
                                    <ColorBox color={'rgb(250,216,231)'}/>
                                    <ColorBox color={'rgb(249,215,225)'}/>
                                    <ColorBox color={'rgb(247,199,219)'}/>
                                    <ColorBox color={'rgb(246,204,215)'}/>
                                </ColorPalettes>
                                <Image
                                    src={madrinhas}
                                    alt="Madrinhas"
                                />
                            </WrapperImage>
                        </ContainerImageCard>

                    </ContainerCard>
                );

            default: // Convidado normal
                return (
                    <SectionCard>
                        <p>
                            Com Deus guiando nossos passos, dividimos com alegria o começo de uma nova fase em nossas
                            vidas.
                            Convidamos <strong>{responseData?.title}</strong> para testemunhar e celebrar a nossa
                            união diante de Deus,
                            em um momento de fé, amor e gratidão.

                            Esperamos por sua presença nesse dia abençoado e inesquecível.
                        </p>
                        {element}
                    </SectionCard>


                );
        }
    };
    return (
        <Wrapper>
            <Container>
                <WrapperCard>
                    <AnimatedComponent animationType={'FadeInRightUp'}>
                        <Card>
                            <HorizontMarging/>
                            <VerticalMarging/>
                            <ContentCard>
                                {!inviteType && !loading && !requestData && !invite && (<>
                                    <h1>Busque o seu convite</h1>
                                    <p>
                                        Digite seu número de telefone logo abaixo para localizar seu convite e confirmar
                                        sua
                                        presença! 😊
                                    </p>
                                    <Search>
                                        <input value={phone} placeholder={'(00) 0 0000-0000'} maxLength={15}
                                               type={'tel'} onChange={handleChange}/>
                                        <button type={"button"} onClick={handleSearch}>Buscar</button>
                                    </Search>
                                </>)}
                                {loading && (
                                    <WrapperLottie>
                                        <strong>Buscando convite </strong><Lottie animationData={jsonLotie}
                                                                                  loop={true}/>
                                    </WrapperLottie>
                                )}
                                {inviteType && !loading && !requestData && (<>
                                    <h1>Enfim, o grande dia!</h1>
                                    {renderMessage(
                                        <>
                                            <p>
                                                Data: 27 de setembro de 2025<br/>
                                                Local: Villaví - Recreio Internacional - Rua D 1550 - Ribeirao
                                                Preto-SP <br/>
                                                Horário: 16:30
                                            </p>
                                            <p>Por favor, confirme sua presença até o dia {format(new Date(responseData?.expirationDate||''),"dd 'de' MMMM 'de' yyyy",{locale: ptBR})}!</p>
                                            <p>
                                                Com carinho, <strong>Michel dos Santos Kuguio </strong> & <strong>Carolina
                                                Tavares de Oliveira.</strong>
                                            </p>
                                        </>
                                    )}
                                    {needConfirmation && (
                                        <WrapperButton>
                                            <Button type={'button'} onClick={confirm}>Confirmar</Button><Button invert
                                                                                                                type={'button'}
                                                                                                                onClick={recuse}>Não
                                            posso ir</Button>
                                        </WrapperButton>
                                    )}


                                </>)}

                                {requestData && (<>
                                        <h1>Marque quem vai</h1>
                                        <p>Deixamos todos marcados por padrão, mas, ao confirmar, pedimos que desmarque
                                            quem
                                            não poderá comparecer. Fizemos assim porque contamos com a presença de todos
                                            nesse dia tão especial!</p>
                                    </>
                                )}
                                {requestData && responseData?.users.some(user => !!user.honor) && (
                                    <p>Obs: Se você está lendo esta mensagem, é porque com certeza é um padrinho, uma
                                        madrinha, ou ambos! E padrinhos e madrinhas jamais podem sair da lista! 😄💖</p>
                                )}
                                {requestData && (responseData?.users?.map(user => (
                                    <Controller
                                        key={user.id}
                                        name={user.id.toString()}
                                        defaultValue={true}
                                        control={control}
                                        render={({field}) => (
                                            <CheckBox
                                                name={user.name}
                                                id={field.name}
                                                checked={field.value}
                                                onChange={field.onChange}
                                                typeUser={user?.honor?.title}
                                            />
                                        )}
                                    />

                                )))}
                                {requestData && (<Button type={'button'} onClick={finish}>Finalizar</Button>)}
                            </ContentCard>
                        </Card>
                    </AnimatedComponent>

                </WrapperCard>
            </Container>

        </Wrapper>

    )
});
