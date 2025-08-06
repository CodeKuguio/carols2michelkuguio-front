import {
    Button,
    Card,
    Container,
    ContentCard,
    HorizontMarging, Product, Products,
    VerticalMarging,
    Wrapper,
    WrapperCard,
} from "./checkout.styles.tsx";
import * as React from "react";
import {toast} from "react-toastify";

import {memo, useCallback, useEffect, useMemo} from "react";

import {AnimatedComponent} from "../Animations";

import {useCheckoutController} from "./checkout.controller.tsx";
import formatPrice from "../../utils/formatPrice.ts";
import {NavigationHeader} from "../NavigationHeader";
import {FirstSubHeader} from "../FirstSubHeader";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import {api} from "../../service.ts";
import {useNavigate, useSearchParams} from "react-router";


interface Payload {
    name: string;
    email: string;
    message?: string;
}

const schema: yup.ObjectSchema<Payload> = yup
    .object({
        name: yup.string().required('campo obrigatório'),
        email: yup.string().email('campo precisa ser email').required('campo obrigatório'),
        message: yup.string().optional(),
    })
    .required()
export const Checkout: React.FC = memo(() => {
    const {
        total,
        products
    } = useCheckoutController();
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<Payload>({
        resolver: yupResolver(schema),
    })
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const clearPayment = useCallback(() => {
        searchParams.delete("receipt_url");
        searchParams.delete("transaction_id");
        searchParams.delete("capture_method");
        searchParams.delete("order_nsu");
        searchParams.delete("slug");
        setSearchParams(searchParams);
    },[searchParams, setSearchParams]);
    const payment = useMemo(() => {
        const receiptUrl = searchParams.get('receipt_url');
        const transactionId = searchParams.get('transaction_id');
        const captureMethod = searchParams.get('capture_method');
        const orderNsu = searchParams.get('order_nsu');
        const slug = searchParams.get('slug');
        return receiptUrl && transactionId && captureMethod && orderNsu && slug ? {
            receiptUrl,
            transactionId,
            captureMethod,
            orderNsu,
            slug
        } : undefined;


    }, [searchParams]);
    const onSubmit = handleSubmit(async (payload) => {
        const order = {
            products,
            total
        }
        const response = await api.post('/cart', {order, ...payload});

        const handle = 'carolina-tavares-090';
        const items = JSON.stringify(products.map(product => ({
            name: product.nome,
            price: product.preco * 100,
            quantity: product.quantity
        })));
        const order_nsu = response.data.id;
        const redirect_url = 'https://carols2michel.kuguio.com.br/checkout'
        const link = `https://checkout.infinitepay.io/${handle}?items=${items}&order_nsu=${order_nsu}&redirect_url=${redirect_url}&customer_name=${payload.name}&customer_email=${payload.email}`
        const a = document.createElement('a');
        a.href = link;
        a.target = '_self';
        a.rel = 'noopener';
        a.click();
    });
    useEffect(() => {
        if(payment) {
            const update = async () =>{
                const response = await api.patch(`/cart/${payment.orderNsu}`, {
                    ...payment,
                })
                if(response) {
                    clearPayment()
                    toast('Presente Registrado com Sucesso!', {
                        type: "success"
                    })
                    navigate('/home')
                }
            }
            update();
        }
    }, [clearPayment, navigate, payment]);
    return (<>
            <NavigationHeader></NavigationHeader>
            <FirstSubHeader title={'Checkout'} id={'checkout'} invert={true}/>
            <Wrapper>
                <Container>
                    <WrapperCard>
                        <AnimatedComponent animationType={'FadeInRightUp'}>
                            <Card>
                                <HorizontMarging/>
                                <VerticalMarging/>
                                <ContentCard>
                                    {payment && (<h1>Presente Registrado com Sucesso!</h1>)}
                                    {!payment && (
                                        <>
                                            <form>
                                                <fieldset>
                                                    <legend>Dados para pagamento</legend>
                                                    <label>
                                                        <input placeholder={'Nome Completo'}
                                                               type={'text'} {...register("name")}/>
                                                        {errors && errors.name && <span>{errors.name.message}</span>}
                                                    </label>
                                                    <label>
                                                        <input placeholder={'email'} type={'email'} {...register("email")}/>
                                                        {errors && errors.email && <span>{errors.email.message}</span>}
                                                    </label>
                                                </fieldset>
                                                <fieldset>
                                                    <legend>Cartão de Presente</legend>
                                                    <textarea placeholder={'Deixe sua mensagem aos noivos'}
                                                              rows={5} {...register("message")}/>
                                                </fieldset>
                                                <Button type={"button"} onClick={onSubmit}>Ir Pagamento</Button>
                                            </form>
                                            <Products>
                                                <section>
                                                    {products.map(product => (
                                                        <Product key={product.nome}>
                                                            <img src={`/static/products/${product.imagem}`}
                                                                 alt={product.nome}/>
                                                            <div className={'content'}>
                                                                <strong>{product.nome}</strong>
                                                                <span>Quantidade: {product.quantity}</span>
                                                                <span>R$ {formatPrice(product.preco, 'BRL')}</span>
                                                            </div>
                                                        </Product>
                                                    ))}
                                                </section>
                                                {total && (<strong
                                                    className={'total'}>R$ {formatPrice(total.totalPrice, 'BRL')}</strong>)}
                                            </Products>
                                        </>
                                    )}



                                    <HorizontMarging/>
                                    <VerticalMarging/>
                                </ContentCard>
                            </Card>
                        </AnimatedComponent>

                    </WrapperCard>
                </Container>

            </Wrapper>
        </>


    )
});
