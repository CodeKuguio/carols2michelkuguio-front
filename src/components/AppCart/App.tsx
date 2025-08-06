import {useEffect} from 'react';

import Loader from '../../components/Loader';

import Filter from '../../components/Filter';
import Products from '../../components/Products';
import Cart from '../../components/Cart';

import {useProducts} from '../../contexts/products-context';

import * as S from './style';
import {NavigationHeader} from "../NavigationHeader";
import {FirstSubHeader} from "../FirstSubHeader";
import {useModalStore} from "../../store/modal.store.ts";

function AppCart() {
    const {isFetching, products, fetchProducts} = useProducts();
    const {isOpen, setClose} = useModalStore()
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (<>
            {isOpen && (<S.BackgroundCard>

                <S.Card>
                    <p>Olá!</p>
                    <p>
                        Sua presença no nosso grande dia é o que mais importa para nós!
                    </p>

                    <p>
                        Se quiser nos presentear, nossa lista é simbólica: ao escolher um presente, você contribui com o
                        valor correspondente, e depois reuniremos todas as contribuições para montarmos nosso novo lar
                        com muito carinho.
                    </p>

                    <p>
                        Assim, evitamos presentes duplicados e registramos cada gesto de amizade para guardar na
                        memória.
                    </p>

                    <p>
                        O endereço solicitado na hora da contribuição é apenas uma exigência de segurança do provedor de
                        pagamento e não será usado para envio de nada.
                    </p>

                    <p>
                        Agradecemos de coração por todo o carinho e por fazer parte desse momento tão especial!
                    </p>

                    <p>Com carinho,<br/>
                        Michel e Carol.</p>
                    <S.CardButton onClick={setClose}>Clique para continuar</S.CardButton>
                </S.Card>

            </S.BackgroundCard>)}
            <NavigationHeader hasCart={true}/>

            <FirstSubHeader title={'Presenteie o noivos'} id={'presenteie-os-noivos'} invert={true}/>
            <S.Container>

                {isFetching && <Loader/>}
                <S.TwoColumnGrid>
                    <S.Side>
                        <Filter/>
                    </S.Side>
                    <S.Main>
                        <S.MainHeader>
                            <p>{products?.length} Produto(s) encontrado(s)</p>
                        </S.MainHeader>
                        <Products products={products}/>
                    </S.Main>
                </S.TwoColumnGrid>
                <Cart/>
            </S.Container>

        </>

    );
}

export default AppCart;
