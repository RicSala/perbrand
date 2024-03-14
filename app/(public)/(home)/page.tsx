import { Faq } from '@/components/marketing/faq';
import { Pricing } from '@/components/marketing/pricing';
import CtaWithSocial from '@/components/marketing/cta-with-social';
import { secondaryFont } from '@/config/fonts';
import Hero from '@/components/marketing/hero';
import { TextWithMedia } from '@/components/marketing/TextWithMedia';
import { CTABanner } from '@/components/marketing/CTABanner';
import { Testimonials } from '@/components/marketing/Testimonials';
import { DemoVideo } from '@/components/marketing/DemoVideo';
import ReactPlayer from 'react-player';
import { VideoClient } from '@/components/marketing/VideoClient';
import Highlight from '@/components/utils/Hightlight';

export default async function Home() {
    // const session = await auth();

    return (
        <div className={`gap flex flex-col items-center justify-between`}>
            <Hero />

            <section className='flex flex-col gap-8 relative'>
                <div className='anchor -top-32 absolute' id='how-it-works' />

                <h2
                    className={`text-6xl font-extrabold font-grotesqu relative ${secondaryFont.className} text-center`}
                >
                    ¿Cómo funciona?
                </h2>
                <div className='flex flex-col gap-12'>
                    <TextWithMedia
                        title={'1. Cuéntale qué estás pensando'}
                        description={
                            <>
                                Elige la forma que más cómoda te resulte:{' '}
                                <Highlight color='yellow'>
                                    escríbelo o cuéntalo hablado
                                </Highlight>{' '}
                                tal cuál te salga, la IA se encarga de darle
                                forma 👌
                            </>
                        }
                        side='left'
                        className=''
                    >
                        <VideoClient
                            videoUrl='https://www.youtube.com/watch?v=MGjCIQh5Pkw&ab_channel=Joshtriedcoding'
                            className='h-52'
                        />
                    </TextWithMedia>
                    <TextWithMedia
                        title={'2. Selecciona tono y formato'}
                        description={
                            <>
                                Elige entre las decenas de{' '}
                                <Highlight>
                                    formatos probados que la IA personalizará
                                </Highlight>{' '}
                                para ti y un tono que se adapte a tu estilo 🪡
                            </>
                        }
                        side='left'
                        className=''
                    >
                        <VideoClient
                            videoUrl='https://www.youtube.com/watch?v=MGjCIQh5Pkw&ab_channel=Joshtriedcoding'
                            className='h-52'
                        />
                    </TextWithMedia>
                    <TextWithMedia
                        title={'3. Genera tu Post Optimizado'}
                        description={
                            <>
                                <Highlight>En segundos</Highlight>, un post de
                                Linkedin estructurado aplicando las mejores
                                técnicas de copywriting. <br />
                                <br />
                                <Highlight>
                                    ¡EMPIEZA A RECIBIR INTERACCIONES!
                                </Highlight>
                                .
                            </>
                        }
                        side='left'
                        className=''
                    >
                        <VideoClient
                            videoUrl='https://www.youtube.com/watch?v=MGjCIQh5Pkw&ab_channel=Joshtriedcoding'
                            className='h-52'
                        />
                    </TextWithMedia>
                </div>
            </section>

            <Pricing />
            <DemoVideo
                title={
                    <h2
                        className={`${secondaryFont.className} text-6xl font-semibold text-center`}
                    >
                        Vídeo Demo
                    </h2>
                }
                subtitle={
                    <div className='flex flex-col items-center'>
                        <p>¿Necesitas ver a Perbrand en acción?</p>
                        <p>
                            ¡No hay problema! Aquí te dejo un vídeo enseñando
                            cómo crear tu primer post y carrusel para Linkeding
                            😊
                        </p>
                    </div>
                }
                cta={
                    <CtaWithSocial
                        accentText={'30% de descuento'}
                        buttonLabel={'Comprar'}
                        primaryText={'a las primeras 200 compras'}
                    />
                }
                videoPosterUrl='asdf'
                videoUrl='https://www.youtube.com/watch?v=MGjCIQh5Pkw&ab_channel=Joshtriedcoding'
            />
            <Testimonials />
            <Faq />
            <CTABanner
                title='some title'
                description={
                    <>
                        <p>Some description</p>
                        <CtaWithSocial
                            accentText={'30% de descuento'}
                            buttonLabel={'Comprar'}
                            primaryText={'a las primeras 200 compras'}
                            buttonClasses='bg-primary-foreground text-primary'
                            spanClasses='text-primary-foreground'
                        />
                    </>
                }
                media={<div className='h-48 w-96'>Some media</div>}
            />
        </div>
    );
}
