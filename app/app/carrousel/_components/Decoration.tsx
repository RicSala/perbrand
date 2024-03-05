// REVIEW: Resource carousel design: https://www.figma.com/file/i6swob1ukdTq1hD8H16Got/LinkedIn-Carousel-templates-(Community)?type=design&node-id=124-19986&mode=design&t=NS3cMsexq2Pb43qK-0

// Color use:
// Bg, font, accent
// Inverted: bg -> font, accent -> bg, font -> accent

import { cn } from '@/lib/utils';
import { ArrowRight, Circle, TrendingUp } from 'lucide-react';
import { TopoSVG } from './svgs/Topo';

type DecorativeElementsProps = {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor?: string;
    decorationid: keyof typeof decorationMap;
    even?: boolean;
    cover?: boolean;
    cta?: boolean;
    alternateColors?: boolean;
};

type DecorationProps = {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor?: string;

    even?: boolean;
    cover?: boolean;
    cta?: boolean;
    alternateColors?: boolean;
};

const Squares = ({
    primaryColor,
    secondaryColor,
    tertiaryColor,
    even,
    cover,
    cta,
    alternateColors,
}: DecorationProps) => {
    return (
        <div className='absolute h-full w-full top-0 left-0'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                viewBox='0 0 150 200'
            >
                <g
                    fill='none'
                    stroke={secondaryColor}
                    stroke-width='1'
                    stroke-opacity={even && alternateColors ? '0.05' : '0.15'}
                >
                    <rect x='-40' y='40' width='75' height='75' />
                    <rect x='-35' y='45' width='65' height='65' />
                    <rect x='-30' y='50' width='55' height='55' />
                    <rect x='-25' y='55' width='45' height='45' />
                    <rect x='-20' y='60' width='35' height='35' />
                    <rect x='-15' y='65' width='25' height='25' />
                    <rect x='-10' y='70' width='15' height='15' />
                    <rect x='-5' y='75' width='5' height='5' />
                    <rect width='35' height='35' />
                    <rect x='5' y='5' width='25' height='25' />
                    <rect x='10' y='10' width='15' height='15' />
                    <rect x='15' y='15' width='5' height='5' />
                    <rect x='40' width='75' height='75' />
                    <rect x='45' y='5' width='65' height='65' />
                    <rect x='50' y='10' width='55' height='55' />
                    <rect x='55' y='15' width='45' height='45' />
                    <rect x='60' y='20' width='35' height='35' />
                    <rect x='65' y='25' width='25' height='25' />
                    <rect x='70' y='30' width='15' height='15' />
                    <rect x='75' y='35' width='5' height='5' />
                    <rect x='40' y='80' width='35' height='35' />
                    <rect x='45' y='85' width='25' height='25' />
                    <rect x='50' y='90' width='15' height='15' />
                    <rect x='55' y='95' width='5' height='5' />
                    <rect x='120' y='-40' width='75' height='75' />
                    <rect x='125' y='-35' width='65' height='65' />
                    <rect x='130' y='-30' width='55' height='55' />
                    <rect x='135' y='-25' width='45' height='45' />
                    <rect x='140' y='-20' width='35' height='35' />
                    <rect x='145' y='-15' width='25' height='25' />
                    <rect x='150' y='-10' width='15' height='15' />
                    <rect x='155' y='-5' width='5' height='5' />
                    <rect x='120' y='40' width='35' height='35' />
                    <rect x='125' y='45' width='25' height='25' />
                    <rect x='130' y='50' width='15' height='15' />
                    <rect x='135' y='55' width='5' height='5' />
                    <rect y='120' width='75' height='75' />
                    <rect x='5' y='125' width='65' height='65' />
                    <rect x='10' y='130' width='55' height='55' />
                    <rect x='15' y='135' width='45' height='45' />
                    <rect x='20' y='140' width='35' height='35' />
                    <rect x='25' y='145' width='25' height='25' />
                    <rect x='30' y='150' width='15' height='15' />
                    <rect x='35' y='155' width='5' height='5' />
                    <rect x='200' y='120' width='75' height='75' />
                    <rect x='40' y='200' width='75' height='75' />
                    <rect x='80' y='80' width='75' height='75' />
                    <rect x='85' y='85' width='65' height='65' />
                    <rect x='90' y='90' width='55' height='55' />
                    <rect x='95' y='95' width='45' height='45' />
                    <rect x='100' y='100' width='35' height='35' />
                    <rect x='105' y='105' width='25' height='25' />
                    <rect x='110' y='110' width='15' height='15' />
                    <rect x='115' y='115' width='5' height='5' />
                    <rect x='80' y='160' width='35' height='35' />
                    <rect x='85' y='165' width='25' height='25' />
                    <rect x='90' y='170' width='15' height='15' />
                    <rect x='95' y='175' width='5' height='5' />
                    <rect x='120' y='160' width='75' height='75' />
                    <rect x='125' y='165' width='65' height='65' />
                    <rect x='130' y='170' width='55' height='55' />
                    <rect x='135' y='175' width='45' height='45' />
                    <rect x='140' y='180' width='35' height='35' />
                    <rect x='145' y='185' width='25' height='25' />
                    <rect x='150' y='190' width='15' height='15' />
                    <rect x='155' y='195' width='5' height='5' />
                    <rect x='160' y='40' width='75' height='75' />
                    <rect x='165' y='45' width='65' height='65' />
                    <rect x='170' y='50' width='55' height='55' />
                    <rect x='175' y='55' width='45' height='45' />
                    <rect x='180' y='60' width='35' height='35' />
                    <rect x='185' y='65' width='25' height='25' />
                    <rect x='190' y='70' width='15' height='15' />
                    <rect x='195' y='75' width='5' height='5' />
                    <rect x='160' y='120' width='35' height='35' />
                    <rect x='165' y='125' width='25' height='25' />
                    <rect x='170' y='130' width='15' height='15' />
                    <rect x='175' y='135' width='5' height='5' />
                    <rect x='200' y='200' width='35' height='35' />
                    <rect x='200' width='35' height='35' />
                    <rect y='200' width='35' height='35' />
                </g>
            </svg>
        </div>
    );
};

const Topo = ({
    primaryColor,
    secondaryColor,
    alternateColors,
    even,
}: DecorationProps) => {
    return (
        <div className='absolute h-full w-full top-0 left-0'>
            <TopoSVG
                strokeColor={secondaryColor}
                opacity={even && alternateColors ? '0.1' : '0.25'}
            />
        </div>
    );
};

const Arrows = ({
    primaryColor,
    secondaryColor,
    cover,
    tertiaryColor,
    even,
    cta,
}: DecorationProps) => {
    const element = (
        <div className='absolute h-full w-full top-0 left-0 opacity-30'>
            <ArrowRight
                className='absolute top-8 -translate-x-1/2 left-0'
                size={140}
                color={secondaryColor}
            />
            <ArrowRight
                className='absolute bottom-12 -translate-x-3/4 left-0'
                size={240}
                color={secondaryColor}
            />
        </div>
    );

    return (
        <DecorationConnectingPattern
            Element={element}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            cover={cover}
            cta={cta}
            even={even}
            tertiaryColor={tertiaryColor}
        />
    );
};

const Bubbles = ({
    primaryColor,
    secondaryColor,
    cover,
    cta,
    even,
}: DecorationProps) => {
    const Element = (
        <>
            <Circle
                className='absolute bottom-0 translate-x-1/2 translate-y-1/2 right-0'
                size={140}
                color={secondaryColor}
                absoluteStrokeWidth={true}
                strokeWidth={6}
            />
            <Circle
                className='absolute bottom-0 translate-x-1/2 translate-y-1/2 right-0'
                size={200}
                color={secondaryColor}
                absoluteStrokeWidth={true}
                strokeWidth={6}
            />
            <Circle
                className='absolute bottom-0 translate-x-1/2 translate-y-1/2 right-0'
                size={260}
                color={secondaryColor}
                absoluteStrokeWidth={true}
                strokeWidth={6}
            />
            <Circle
                className='absolute bottom-0 translate-x-1/2 translate-y-1/2 right-0'
                size={320}
                color={secondaryColor}
                absoluteStrokeWidth={true}
                strokeWidth={6}
            />
        </>
    );

    return (
        <DecorationConnectingPattern
            Element={Element}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            cover={cover}
            cta={cta}
            even={even}
            yAxis={0}
            xAxis={0}
        />
    );
};

const Balls = ({
    primaryColor,
    secondaryColor,
    cover,
    cta,
    even,
}: DecorationProps) => {
    const Element = (
        <div className='absolute bottom-0 translate-x-1/2 translate-y-1/2 right-0 bg-green-500 rounded-full w-40 h-40'></div>
    );

    return (
        <DecorationConnectingPattern
            Element={Element}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            cover={cover}
            cta={cta}
            even={even}
            yAxis={48}
            xAxis={20}
        />
    );
};

const Trending = ({
    primaryColor,
    secondaryColor,
    cover,
    cta,
    even,
}: DecorationProps) => {
    const Element = (
        <TrendingUp
            className='absolute bottom-0 translate-x-3/4 translate-y-full right-0'
            size={360}
            color={secondaryColor}
            absoluteStrokeWidth={true}
            strokeWidth={24}
        />
    );

    return (
        <DecorationConnectingPattern
            Element={Element}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            cover={cover}
            cta={cta}
            even={even}
            yAxis={0}
            xAxis={0}
        />
    );
};

const VerticalGradient = ({
    primaryColor,
    secondaryColor,
    tertiaryColor,
}: DecorationProps) => {
    // TODO: Needs to go from totally transparent to the color depending on the slide. For that, we need be able to modify the opacity of the color, but righ now is a string
    return (
        <div
            className='absolute h-full w-full top-0 left-0'
            style={{
                background: `linear-gradient(180deg, ${primaryColor} 0%, ${tertiaryColor}) 100%`,
            }}
        ></div>
    );
};
const HorizontalGradient = ({
    primaryColor,
    secondaryColor,
    tertiaryColor,
}: DecorationProps) => {
    // TODO: Needs to go from totally transparent to the color depending on the slide. For that, we need be able to modify the opacity of the color, but righ now is a string
    return (
        <div
            className='absolute h-full w-full top-0 left-0'
            style={{
                background: `linear-gradient(90deg, ${primaryColor} 0%, ${tertiaryColor}) 100%`,
            }}
        ></div>
    );
};

const Paper = ({ primaryColor, secondaryColor }: DecorationProps) => {
    return (
        <div className={`absolute h-full w-full top-0 left-0`}>
            <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
                <defs>
                    <filter id='roughpaper'>
                        <feTurbulence
                            type='fractalNoise'
                            baseFrequency='0.04'
                            result='noise'
                            numOctaves='5'
                        />
                        <feDiffuseLighting
                            in='noise'
                            lighting-color='#ff000'
                            surfaceScale='2'
                        >
                            <feDistantLight azimuth='45' elevation='60' />
                        </feDiffuseLighting>
                    </filter>
                </defs>
                <rect
                    width='100%'
                    height='100%'
                    fill='#fff'
                    filter='url(#roughpaper)'
                />
            </svg>
        </div>
    );
};

// https://fffuel.co/gggrain/
// const Grain = ({
//     primaryColor,
//     secondaryColor,
//     tertiaryColor,
// }: DecorationProps) => {
//     return (
//         <div className='absolute h-full w-full top-0 left-0'>
//             <svg
//                 xmlns='http://www.w3.org/2000/svg'
//                 version='1.1'
//                 viewBox='0 0 700 700'
//                 width='700'
//                 height='700'
//             >
//                 <defs>
//                     <linearGradient
//                         gradientTransform='rotate(-150, 0.5, 0.5)'
//                         x1='50%'
//                         y1='0%'
//                         x2='50%'
//                         y2='100%'
//                         id='gggrain-gradient2'
//                     >
//                         <stop
//                             stop-color='hsla(0, 0%, 100%, 1.00)'
//                             stop-opacity='1'
//                             offset='-0%'
//                         ></stop>
//                         <stop
//                             stop-color={primaryColor}
//                             stop-opacity='0'
//                             offset='100%'
//                         ></stop>
//                     </linearGradient>
//                     <linearGradient
//                         gradientTransform='rotate(150, 0.5, 0.5)'
//                         x1='50%'
//                         y1='0%'
//                         x2='50%'
//                         y2='100%'
//                         id='gggrain-gradient3'
//                     >
//                         <stop
//                             stop-color={secondaryColor}
//                             stop-opacity='1'
//                         ></stop>
//                         <stop
//                             stop-color='rgba(255,255,255,0)'
//                             stop-opacity='0'
//                             offset='100%'
//                         ></stop>
//                     </linearGradient>
//                     <filter
//                         id='gggrain-filter'
//                         x='-20%'
//                         y='-20%'
//                         width='140%'
//                         height='140%'
//                         filterUnits='objectBoundingBox'
//                         primitiveUnits='userSpaceOnUse'
//                         color-interpolation-filters='sRGB'
//                     >
//                         <feTurbulence
//                             type='fractalNoise'
//                             baseFrequency='0.55'
//                             numOctaves='2'
//                             seed='98'
//                             stitchTiles='stitch'
//                             x='0%'
//                             y='0%'
//                             width='100%'
//                             height='100%'
//                             result='turbulence'
//                         ></feTurbulence>
//                         <feColorMatrix
//                             type='saturate'
//                             values='0'
//                             x='0%'
//                             y='0%'
//                             width='100%'
//                             height='100%'
//                             in='turbulence'
//                             result='colormatrix'
//                         ></feColorMatrix>
//                         <feComponentTransfer
//                             x='0%'
//                             y='0%'
//                             width='100%'
//                             height='100%'
//                             in='colormatrix'
//                             result='componentTransfer'
//                         >
//                             <feFuncR type='linear' slope='3'></feFuncR>
//                             <feFuncG type='linear' slope='3'></feFuncG>
//                             <feFuncB type='linear' slope='3'></feFuncB>
//                         </feComponentTransfer>
//                         <feColorMatrix
//                             x='0%'
//                             y='0%'
//                             width='100%'
//                             height='100%'
//                             in='componentTransfer'
//                             result='colormatrix2'
//                             type='matrix'
//                             values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -11'
//                         ></feColorMatrix>
//                     </filter>
//                 </defs>
//                 <g>
//                     <rect width='100%' height='100%' fill={primaryColor}></rect>
//                     {/* <rect
//                         width='100%'
//                         height='100%'
//                         fill='url(#gggrain-gradient3)'
//                     ></rect> */}
//                     {/* <rect
//                         width='100%'
//                         height='100%'
//                         fill='url(#gggrain-gradient2)'
//                     ></rect> */}
//                     <rect
//                         width='100%'
//                         height='100%'
//                         fill='transparent'
//                         filter='url(#gggrain-filter)'
//                         opacity='1'
//                         style={{ mixBlendMode: 'soft-light' }}
//                     ></rect>
//                 </g>
//             </svg>
//         </div>
//     );
// };
// https://fffuel.co/gggrain/
const Organic = ({ primaryColor, secondaryColor }: DecorationProps) => {
    return (
        <div
            className='absolute h-full w-full top-0 left-0'
            style={{
                backgroundColor: '#ffffff',
                backgroundAttachment: '',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 800 800'%3E%3Cdefs%3E%3Cfilter id='ssspot-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.022 0.218' numOctaves='2' seed='260' stitchTiles='stitch' x='0%25' y='0%25' width='100%25' height='100%25' result='turbulence'%3E%3C/feTurbulence%3E%3CfeGaussianBlur stdDeviation='0 3' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' edgeMode='duplicate' result='blur'%3E%3C/feGaussianBlur%3E%3CfeDisplacementMap in='SourceGraphic' in2='blur' scale='32' xChannelSelector='R' yChannelSelector='B' x='0%25' y='0%25' width='100%25' height='100%25' result='displacementMap'%3E%3C/feDisplacementMap%3E%3C/filter%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='hsl(32, 100%25, 89%25)'%3E%3C/rect%3E%3Cg fill='hsl(32, 100%25, 51%25)' filter='url(%23ssspot-filter)'%3E%3Ccircle r='16.243150724655088' cx='82.64948638298124' cy='344.8830652019613' opacity='0.3096789057937961'%3E%3C/circle%3E%3Ccircle r='7.12757558171109' cx='291.7937108354884' cy='22.429663258324695' opacity='0.6598556419804871'%3E%3C/circle%3E%3Ccircle r='13.706171864519105' cx='533.1718479891084' cy='770.0215048634265' opacity='0.3299545208165156'%3E%3C/circle%3E%3Ccircle r='9.93182273296595' cx='30.347466532944065' cy='301.76720086353475' opacity='0.4026501949406316'%3E%3C/circle%3E%3Ccircle r='18.151969653477547' cx='157.9973150609444' cy='575.8365433618201' opacity='0.8432911637347079'%3E%3C/circle%3E%3Ccircle r='11.206296448716845' cx='261.69446092427404' cy='144.42120043006102' opacity='0.3548371157651252'%3E%3C/circle%3E%3Ccircle r='12.063986776085402' cx='746.0672714376906' cy='457.61771198972184' opacity='0.7868719154017095'%3E%3C/circle%3E%3Ccircle r='10.30703711347023' cx='445.4553729426737' cy='699.90776873797' opacity='0.8773491195241621'%3E%3C/circle%3E%3Ccircle r='14.032234223908864' cx='756.3993734136798' cy='552.2740230726226' opacity='0.6735821865589121'%3E%3C/circle%3E%3Ccircle r='10.950636527578135' cx='34.41855578957697' cy='122.81564229697591' opacity='0.4712965272170313'%3E%3C/circle%3E%3Ccircle r='14.17462751941364' cx='285.04161897349945' cy='637.223512987862' opacity='0.7152879122696073'%3E%3C/circle%3E%3Ccircle r='17.71669543475431' cx='581.169343981136' cy='574.1679763564291' opacity='0.2044125460554596'%3E%3C/circle%3E%3Ccircle r='20.290399571439032' cx='404.8862409703627' cy='347.41499764164246' opacity='0.4122227238928651'%3E%3C/circle%3E%3Ccircle r='12.277673809854269' cx='391.08729333233015' cy='650.1532159956597' opacity='0.6162933692480939'%3E%3C/circle%3E%3Ccircle r='12.07715930292697' cx='264.8809967184816' cy='752.2054249173905' opacity='0.5706748474145132'%3E%3C/circle%3E%3Ccircle r='12.693005343127155' cx='551.6024288925685' cy='129.59745133172135' opacity='0.3065186889869467'%3E%3C/circle%3E%3Ccircle r='9.899342867493006' cx='403.1453746322989' cy='23.49557007132258' opacity='0.2512196265690713'%3E%3C/circle%3E%3Ccircle r='15.583804425708522' cx='559.9585311985616' cy='475.86136183927306' opacity='0.7423746870919341'%3E%3C/circle%3E%3Ccircle r='17.266656588716103' cx='37.06541305513206' cy='211.91267237265203' opacity='0.11723400509780962'%3E%3C/circle%3E%3Ccircle r='10.104730906148788' cx='763.1881612836812' cy='757.851221076406' opacity='0.1997863572361272'%3E%3C/circle%3E%3Ccircle r='20.141963630227643' cx='524.6598851034704' cy='386.7877947830677' opacity='0.41553720120512727'%3E%3C/circle%3E%3Ccircle r='20.14542148698831' cx='324.6956108012976' cy='386.20416821863273' opacity='0.6549547513495027'%3E%3C/circle%3E%3Ccircle r='17.07715919156461' cx='404.20715136138443' cy='571.1604131555526' opacity='0.2529594900181995'%3E%3C/circle%3E%3Ccircle r='10.674332144518928' cx='94.68453261940377' cy='72.93382734176745' opacity='0.8509410975486931'%3E%3C/circle%3E%3Ccircle r='8.299966336826643' cx='45.84076238651921' cy='476.55421563906873' opacity='0.9214912557649431'%3E%3C/circle%3E%3Ccircle r='21.99061595204476' cx='191.74612088132008' cy='678.5575378753215' opacity='0.5844455262406748'%3E%3C/circle%3E%3Ccircle r='13.493283672480747' cx='457.96980554144375' cy='510.5640200162167' opacity='0.4650276289447056'%3E%3C/circle%3E%3Ccircle r='9.809066823218533' cx='223.17425237403634' cy='228.68296026428484' opacity='0.32507971773771427'%3E%3C/circle%3E%3Ccircle r='16.618961356834337' cx='654.9457549512695' cy='494.99638488495845' opacity='0.23905123267614548'%3E%3C/circle%3E%3Ccircle r='13.807713878333228' cx='302.1919542432004' cy='549.052201654749' opacity='0.6626884939718052'%3E%3C/circle%3E%3Ccircle r='19.311243886139337' cx='370.7984342744465' cy='139.08713107345966' opacity='0.8742312304382968'%3E%3C/circle%3E%3Ccircle r='12.753379745207678' cx='45.91624990919948' cy='756.0034240724542' opacity='0.34666287192595124'%3E%3C/circle%3E%3Ccircle r='14.455002015745674' cx='188.038319611323' cy='416.5415317178954' opacity='0.7632110689670588'%3E%3C/circle%3E%3Ccircle r='10.750598354431173' cx='84.59653347422304' cy='677.5696368383541' opacity='0.5038786393589265'%3E%3C/circle%3E%3Ccircle r='8.343168364906052' cx='132.38829552208892' cy='34.99364078924314' opacity='0.3794200443453226'%3E%3C/circle%3E%3Ccircle r='16.405698419955012' cx='37.78812594812425' cy='34.85305672326896' opacity='0.1913853746163457'%3E%3C/circle%3E%3Ccircle r='17.19656518505012' cx='73.29682229319255' cy='604.4201793609319' opacity='0.6298528967444244'%3E%3C/circle%3E%3Ccircle r='6.868706342014082' cx='187.47628939490068' cy='38.57102528773402' opacity='0.849080278869847'%3E%3C/circle%3E%3Ccircle r='10.246593312118735' cx='632.864328215686' cy='31.481552425986646' opacity='0.6370956594778645'%3E%3C/circle%3E%3Ccircle r='14.251644966371169' cx='557.593595009386' cy='668.5604395928259' opacity='0.7847657268305734'%3E%3C/circle%3E%3Ccircle r='13.342732854541856' cx='753.7818383712578' cy='47.77099424508411' opacity='0.5127186754649509'%3E%3C/circle%3E%3Ccircle r='8.997661537148819' cx='18.683082111712626' cy='657.1045753783685' opacity='0.8731763364921227'%3E%3C/circle%3E%3Ccircle r='12.104511311050887' cx='533.4418683276605' cy='46.668002635239624' opacity='0.5449110453048215'%3E%3C/circle%3E%3Ccircle r='10.669218337603603' cx='627.8063676730693' cy='399.18740160347716' opacity='0.29552316201612716'%3E%3C/circle%3E%3Ccircle r='13.35814570418812' cx='751.9566570878482' cy='148.5567035707192' opacity='0.6599925475901769'%3E%3C/circle%3E%3Ccircle r='17.506903442375418' cx='290.189007713633' cy='257.36643855192654' opacity='0.4468941052769936'%3E%3C/circle%3E%3Ccircle r='14.224178018249964' cx='311.27299523385574' cy='465.6592890773131' opacity='0.24769820264060707'%3E%3C/circle%3E%3Ccircle r='11.63641165624519' cx='144.28895679881288' cy='756.5232469981607' opacity='0.9010682387066851'%3E%3C/circle%3E%3Ccircle r='12.393275521223384' cx='203.51397865672126' cy='500.0667715530367' opacity='0.185289805805595'%3E%3C/circle%3E%3Ccircle r='11.712362482488835' cx='766.3281275986099' cy='366.4012145885051' opacity='0.5373838016258138'%3E%3C/circle%3E%3Ccircle r='13.549244533487766' cx='102.61022961357111' cy='242.5792147572654' opacity='0.4338971182134276'%3E%3C/circle%3E%3Ccircle r='7.5466526217610985' cx='260.08994560206804' cy='86.3834615247919' opacity='0.9702180609233869'%3E%3C/circle%3E%3Ccircle r='11.778307008709307' cx='31.93835774650738' cy='402.0725765785472' opacity='0.9916879117113806'%3E%3C/circle%3E%3Ccircle r='14.934646626204222' cx='158.26538620984255' cy='347.0989795864103' opacity='0.29941910211559064'%3E%3C/circle%3E%3Ccircle r='18.02728773856484' cx='369.2328522359343' cy='256.6758920981046' opacity='0.45116133137677017'%3E%3C/circle%3E%3Ccircle r='18.14152824714064' cx='449.63815185115254' cy='99.57009012602809' opacity='0.1846763593938759'%3E%3C/circle%3E%3Ccircle r='13.73354404208076' cx='463.6686166701786' cy='186.833667510218' opacity='0.44522084545519414'%3E%3C/circle%3E%3Ccircle r='16.562800248593348' cx='692.549317266929' cy='747.1713989874489' opacity='0.4298277370082132'%3E%3C/circle%3E%3Ccircle r='10.643345921576518' cx='659.7210597789904' cy='291.89641825770576' opacity='0.30561658109337697'%3E%3C/circle%3E%3Ccircle r='11.779268759998946' cx='107.77710861351933' cy='449.87439242703493' opacity='0.7579161155573039'%3E%3C/circle%3E%3Ccircle r='14.104503594978093' cx='724.7889294030624' cy='657.8349946371494' opacity='0.6162126399073924'%3E%3C/circle%3E%3Ccircle r='10.170039652795127' cx='591.2552689117725' cy='328.0073297116366' opacity='0.6591190089216584'%3E%3C/circle%3E%3Ccircle r='12.747881980882466' cx='530.1098538638907' cy='291.8024097207524' opacity='0.49856571938336947'%3E%3C/circle%3E%3Ccircle r='14.350169006551015' cx='498.68428601350854' cy='608.2554011427119' opacity='0.6184302279492807'%3E%3C/circle%3E%3Ccircle r='10.02134359459484' cx='572.0597527632597' cy='229.88494165806662' opacity='0.5238094571639204'%3E%3C/circle%3E%3Ccircle r='8.879012128565115' cx='455.4146706021275' cy='31.62077909408778' opacity='0.752180139192351'%3E%3C/circle%3E%3Ccircle r='13.291398103755473' cx='461.66838126409573' cy='283.6345230047082' opacity='0.17853897343737574'%3E%3C/circle%3E%3Ccircle r='12.666123773291744' cx='172.25622848285693' cy='187.12528534118897' opacity='0.8540696176346098'%3E%3C/circle%3E%3Ccircle r='10.447266247397282' cx='508.52665371771707' cy='707.3487094224464' opacity='0.6930589472810357'%3E%3C/circle%3E%3Ccircle r='19.84057452172657' cx='635.8994321628659' cy='666.2784555717751' opacity='0.5843895288339644'%3E%3C/circle%3E%3Ccircle r='14.592525831414488' cx='164.0088111269436' cy='277.37142520285886' opacity='0.20219243484769867'%3E%3C/circle%3E%3Ccircle r='14.027446300087485' cx='759.8477435660774' cy='253.27444131789719' opacity='0.11429159739200527'%3E%3C/circle%3E%3Ccircle r='16.708963301075634' cx='187.18641947383142' cy='113.17562889181198' opacity='0.4088127494591054'%3E%3C/circle%3E%3Ccircle r='10.319303060047073' cx='670.0896839455398' cy='161.7852325786906' opacity='0.8082539808656645'%3E%3C/circle%3E%3Ccircle r='12.324339526168135' cx='668.4169459458327' cy='87.30215711930603' opacity='0.5907432769839082'%3E%3C/circle%3E%3Ccircle r='12.483376862062396' cx='319.02226089494536' cy='71.16404284881595' opacity='0.6084353064377869'%3E%3C/circle%3E%3Ccircle r='15.63627601425259' cx='109.18649561603694' cy='148.22773375161313' opacity='0.15163211458633177'%3E%3C/circle%3E%3Ccircle r='11.378696104991711' cx='364.67893090940413' cy='44.85754511231296' opacity='0.15030874508468964'%3E%3C/circle%3E%3Ccircle r='17.421812940600997' cx='250.4307197806562' cy='331.7773419538716' opacity='0.9579673414758063'%3E%3C/circle%3E%3Ccircle r='7.235990990199305' cx='778.3591914024057' cy='667.3580731346465' opacity='0.33742782947666605'%3E%3C/circle%3E%3Ccircle r='14.015815894643893' cx='42.54444167590888' cy='539.5167888994368' opacity='0.4486340213079407'%3E%3C/circle%3E%3Ccircle r='7.221250222909122' cx='629.6836915351149' cy='775.9525888587018' opacity='0.8980621353212938'%3E%3C/circle%3E%3Ccircle r='21.44291193492329' cx='360.31371460364824' cy='744.9793642137357' opacity='0.5573159295327816'%3E%3C/circle%3E%3Ccircle r='8.537337739211885' cx='308.4934430055853' cy='185.20248448694366' opacity='0.9130302056866256'%3E%3C/circle%3E%3Ccircle r='16.316345794142695' cx='441.6924677704807' cy='429.11443974295236' opacity='0.1355684929866213'%3E%3C/circle%3E%3Ccircle r='15.74949152292356' cx='699.8588178298138' cy='356.1904580763147' opacity='0.24556661732679616'%3E%3C/circle%3E%3Ccircle r='20.994308252593598' cx='678.2100514553418' cy='591.046460651866' opacity='0.2272682359600297'%3E%3C/circle%3E%3Ccircle r='12.497210842790437' cx='610.2852348620311' cy='157.51451619086458' opacity='0.42878912645734946'%3E%3C/circle%3E%3Ccircle r='13.93296085221274' cx='674.5829193595468' cy='226.73443250518997' opacity='0.9449857095822872'%3E%3C/circle%3E%3Ccircle r='13.463276736104936' cx='449.94728289235053' cy='771.345453674754' opacity='0.28227775111666203'%3E%3C/circle%3E%3Ccircle r='8.29049199316288' cx='236.18542877544374' cy='29.918249349913395' opacity='0.8407038206368068'%3E%3C/circle%3E%3Ccircle r='13.313876813003404' cx='595.4755733509081' cy='734.5928515971125' opacity='0.7712399797070708'%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")`,
            }}
        ></div>
    );
};

const Stars = ({
    primaryColor,
    secondaryColor,
    tertiaryColor,
}: DecorationProps) => {
    return (
        <div
            className='absolute h-full w-full top-0 left-0'
            style={{
                // backgroundColor: '#ffffff',
                backgroundAttachment: 'fixed',
            }}
        >
            <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
                <defs>
                    <linearGradient id='a' x1='0' x2='0' y1='0' y2='1'>
                        <stop offset='0' stop-color={tertiaryColor} />
                        <stop offset='1' stop-color={primaryColor} />
                    </linearGradient>
                </defs>
                <pattern
                    id='b'
                    width='24'
                    height='24'
                    patternUnits='userSpaceOnUse'
                >
                    <circle fill='#ffffff' cx='12' cy='12' r='12' />
                </pattern>
                <rect width='100%' height='100%' fill='url(#a)' />
                <rect
                    width='100%'
                    height='100%'
                    fill='url(#b)'
                    fill-opacity='0.1'
                />
            </svg>
        </div>
    );
};

const Prism = ({
    primaryColor,
    secondaryColor,
    tertiaryColor,
}: DecorationProps) => {
    return (
        <div
            className='absolute h-full w-full top-0 left-0'
            style={{
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
            }}
        >
            <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
                <defs>
                    <linearGradient
                        id='a'
                        gradientUnits='userSpaceOnUse'
                        x1='0'
                        x2='0'
                        y1='0'
                        y2='100%'
                        gradientTransform='rotate(240)'
                    >
                        <stop offset='0' stop-color={primaryColor} />
                        <stop offset='1' stop-color={tertiaryColor} />
                    </linearGradient>
                    <pattern
                        patternUnits='userSpaceOnUse'
                        id='b'
                        width='540'
                        height='450'
                        x='0'
                        y='0'
                        viewBox='0 0 1080 900'
                    >
                        <g fill-opacity='0.1'>
                            <polygon
                                fill='#444'
                                points='90 150 0 300 180 300'
                            />
                            <polygon points='90 150 180 0 0 0' />
                            <polygon fill='#AAA' points='270 150 360 0 180 0' />
                            <polygon
                                fill='#DDD'
                                points='450 150 360 300 540 300'
                            />
                            <polygon fill='#999' points='450 150 540 0 360 0' />
                            <polygon points='630 150 540 300 720 300' />
                            <polygon fill='#DDD' points='630 150 720 0 540 0' />
                            <polygon
                                fill='#444'
                                points='810 150 720 300 900 300'
                            />
                            <polygon fill='#FFF' points='810 150 900 0 720 0' />
                            <polygon
                                fill='#DDD'
                                points='990 150 900 300 1080 300'
                            />
                            <polygon
                                fill='#444'
                                points='990 150 1080 0 900 0'
                            />
                            <polygon
                                fill='#DDD'
                                points='90 450 0 600 180 600'
                            />
                            <polygon points='90 450 180 300 0 300' />
                            <polygon
                                fill='#666'
                                points='270 450 180 600 360 600'
                            />
                            <polygon
                                fill='#AAA'
                                points='270 450 360 300 180 300'
                            />
                            <polygon
                                fill='#DDD'
                                points='450 450 360 600 540 600'
                            />
                            <polygon
                                fill='#999'
                                points='450 450 540 300 360 300'
                            />
                            <polygon
                                fill='#999'
                                points='630 450 540 600 720 600'
                            />
                            <polygon
                                fill='#FFF'
                                points='630 450 720 300 540 300'
                            />
                            <polygon points='810 450 720 600 900 600' />
                            <polygon
                                fill='#DDD'
                                points='810 450 900 300 720 300'
                            />
                            <polygon
                                fill='#AAA'
                                points='990 450 900 600 1080 600'
                            />
                            <polygon
                                fill='#444'
                                points='990 450 1080 300 900 300'
                            />
                            <polygon
                                fill='#222'
                                points='90 750 0 900 180 900'
                            />
                            <polygon points='270 750 180 900 360 900' />
                            <polygon
                                fill='#DDD'
                                points='270 750 360 600 180 600'
                            />
                            <polygon points='450 750 540 600 360 600' />
                            <polygon points='630 750 540 900 720 900' />
                            <polygon
                                fill='#444'
                                points='630 750 720 600 540 600'
                            />
                            <polygon
                                fill='#AAA'
                                points='810 750 720 900 900 900'
                            />
                            <polygon
                                fill='#666'
                                points='810 750 900 600 720 600'
                            />
                            <polygon
                                fill='#999'
                                points='990 750 900 900 1080 900'
                            />
                            <polygon
                                fill='#999'
                                points='180 0 90 150 270 150'
                            />
                            <polygon
                                fill='#444'
                                points='360 0 270 150 450 150'
                            />
                            <polygon
                                fill='#FFF'
                                points='540 0 450 150 630 150'
                            />
                            <polygon points='900 0 810 150 990 150' />
                            <polygon
                                fill='#222'
                                points='0 300 -90 450 90 450'
                            />
                            <polygon
                                fill='#FFF'
                                points='0 300 90 150 -90 150'
                            />
                            <polygon
                                fill='#FFF'
                                points='180 300 90 450 270 450'
                            />
                            <polygon
                                fill='#666'
                                points='180 300 270 150 90 150'
                            />
                            <polygon
                                fill='#222'
                                points='360 300 270 450 450 450'
                            />
                            <polygon
                                fill='#FFF'
                                points='360 300 450 150 270 150'
                            />
                            <polygon
                                fill='#444'
                                points='540 300 450 450 630 450'
                            />
                            <polygon
                                fill='#222'
                                points='540 300 630 150 450 150'
                            />
                            <polygon
                                fill='#AAA'
                                points='720 300 630 450 810 450'
                            />
                            <polygon
                                fill='#666'
                                points='720 300 810 150 630 150'
                            />
                            <polygon
                                fill='#FFF'
                                points='900 300 810 450 990 450'
                            />
                            <polygon
                                fill='#999'
                                points='900 300 990 150 810 150'
                            />
                            <polygon points='0 600 -90 750 90 750' />
                            <polygon
                                fill='#666'
                                points='0 600 90 450 -90 450'
                            />
                            <polygon
                                fill='#AAA'
                                points='180 600 90 750 270 750'
                            />
                            <polygon
                                fill='#444'
                                points='180 600 270 450 90 450'
                            />
                            <polygon
                                fill='#444'
                                points='360 600 270 750 450 750'
                            />
                            <polygon
                                fill='#999'
                                points='360 600 450 450 270 450'
                            />
                            <polygon
                                fill='#666'
                                points='540 600 630 450 450 450'
                            />
                            <polygon
                                fill='#222'
                                points='720 600 630 750 810 750'
                            />
                            <polygon
                                fill='#FFF'
                                points='900 600 810 750 990 750'
                            />
                            <polygon
                                fill='#222'
                                points='900 600 990 450 810 450'
                            />
                            <polygon
                                fill='#DDD'
                                points='0 900 90 750 -90 750'
                            />
                            <polygon
                                fill='#444'
                                points='180 900 270 750 90 750'
                            />
                            <polygon
                                fill='#FFF'
                                points='360 900 450 750 270 750'
                            />
                            <polygon
                                fill='#AAA'
                                points='540 900 630 750 450 750'
                            />
                            <polygon
                                fill='#FFF'
                                points='720 900 810 750 630 750'
                            />
                            <polygon
                                fill='#222'
                                points='900 900 990 750 810 750'
                            />
                            <polygon
                                fill='#222'
                                points='1080 300 990 450 1170 450'
                            />
                            <polygon
                                fill='#FFF'
                                points='1080 300 1170 150 990 150'
                            />
                            <polygon points='1080 600 990 750 1170 750' />
                            <polygon
                                fill='#666'
                                points='1080 600 1170 450 990 450'
                            />
                            <polygon
                                fill='#DDD'
                                points='1080 900 1170 750 990 750'
                            />
                        </g>
                    </pattern>
                </defs>
                <rect x='0' y='0' fill='url(#a)' width='100%' height='100%' />
                <rect x='0' y='0' fill='url(#b)' width='100%' height='100%' />
            </svg>
        </div>
    );
};

// TODO: Need more colors for this one...
// const Rounded = ({
//     primaryColor,
//     secondaryColor,
//     tertiaryColor,
// }: DecorationProps) => {
//     return (
//         <div className='absolute h-full w-full top-0 left-0'>
//             <svg
//                 xmlns='http://www.w3.org/2000/svg'
//                 width='100%'
//                 height='100%'
//                 viewBox='0 0 480 600'
//                 className='border border-red-500 object-cover'
//             >
//                 <g>
//                     <path
//                         fill='#ffb100'
//                         d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'
//                     />
//                     <path
//                         fill='#ffb800'
//                         d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'
//                     />
//                     <path
//                         fill='#ffbe00'
//                         d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'
//                     />
//                     <path
//                         fill='#ffc500'
//                         d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'
//                     />
//                     <path
//                         fill='#ffcc00'
//                         d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'
//                     />
//                     <path
//                         fill='#ffd914'
//                         d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'
//                     />
//                     <path
//                         fill='#ffe529'
//                         d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'
//                     />
//                     <path
//                         fill='#ffef3d'
//                         d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'
//                     />
//                     <path
//                         fill='#fff852'
//                         d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'
//                     />
//                     <path
//                         fill='#ffff66'
//                         d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'
//                     />
//                 </g>
//             </svg>
//         </div>
//     );
// };
const Sky = ({ primaryColor, secondaryColor }: DecorationProps) => {
    return (
        <div
            className='absolute h-full w-full top-0 left-0'
            style={{
                backgroundColor: '#ffaa00',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'repeat',
                backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 2000 1400%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cfilter id=%22b%22 x=%22-200%25%22 y=%22-200%25%22 width=%22500%25%22 height=%22500%25%22%3E%3CfeGaussianBlur in=%22SourceGraphic%22 stdDeviation=%2220%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cpath fill=%22%23000336%22 d=%22M0 0h2000v1400H0z%22%2F%3E%3Cellipse cx=%22132.018%22 cy=%22103.425%22 rx=%221.838%22 ry=%221.46%22 fill=%22%23fff%22 opacity=%22-.105%22%2F%3E%3Cellipse cx=%22390.883%22 cy=%2237.202%22 rx=%221.895%22 ry=%221.631%22 fill=%22%23fff%22 opacity=%22.341%22%2F%3E%3Cellipse cx=%22587.922%22 cy=%2217.272%22 rx=%221.91%22 ry=%221.609%22 fill=%22%23fff%22 opacity=%22.607%22%2F%3E%3Cellipse cx=%22667.422%22 cy=%22139.863%22 rx=%222.042%22 ry=%221.94%22 fill=%22%23fff%22 opacity=%22.154%22%2F%3E%3Cellipse cx=%22877.004%22 cy=%2237.944%22 rx=%221.767%22 ry=%221.561%22 fill=%22%23fff%22 opacity=%22-.266%22%2F%3E%3Cellipse cx=%221077.154%22 cy=%22137.27%22 rx=%221.624%22 ry=%221.125%22 fill=%22%23fff%22 opacity=%22.281%22%2F%3E%3Cellipse cx=%221299.139%22 cy=%2244.553%22 rx=%222.201%22 ry=%221.902%22 fill=%22%23fff%22 opacity=%22-.276%22%2F%3E%3Cellipse cx=%221568.962%22 cy=%2288.387%22 rx=%221.858%22 ry=%221.494%22 fill=%22%23fff%22 opacity=%22.215%22%2F%3E%3Cellipse cx=%221628.666%22 cy=%22132.141%22 rx=%221.173%22 ry=%221.039%22 fill=%22%23fff%22 opacity=%22.534%22%2F%3E%3Cellipse cx=%221912.622%22 cy=%2238.315%22 rx=%221.598%22 ry=%221.436%22 fill=%22%23fff%22 opacity=%22-.125%22%2F%3E%3Cellipse cx=%2232.34%22 cy=%22265.218%22 rx=%221.619%22 ry=%221.187%22 fill=%22%23fff%22 opacity=%22.172%22%2F%3E%3Cellipse cx=%22287.217%22 cy=%22141.916%22 rx=%221.312%22 ry=%221.057%22 fill=%22%23fff%22 opacity=%22-.273%22%2F%3E%3Cellipse cx=%22554.446%22 cy=%22185.043%22 rx=%222.417%22 ry=%221.992%22 fill=%22%23fff%22 opacity=%22.775%22%2F%3E%3Cellipse cx=%22777.104%22 cy=%22245.031%22 rx=%221.199%22 ry=%221.023%22 fill=%22%23fff%22 opacity=%22.586%22%2F%3E%3Cellipse cx=%22903.203%22 cy=%22165.737%22 rx=%222.23%22 ry=%221.785%22 fill=%22%23fff%22 opacity=%22.518%22%2F%3E%3Cellipse cx=%221164.281%22 cy=%22154.346%22 rx=%222.086%22 ry=%221.642%22 fill=%22%23fff%22 opacity=%22.605%22%2F%3E%3Cellipse cx=%221284.066%22 cy=%22189.807%22 rx=%221.918%22 ry=%221.855%22 fill=%22%23fff%22 opacity=%22.684%22%2F%3E%3Cellipse cx=%221424.179%22 cy=%22269.441%22 rx=%222.001%22 ry=%221.956%22 fill=%22%23fff%22 opacity=%22.521%22%2F%3E%3Cellipse cx=%221659.187%22 cy=%22200.974%22 rx=%221.08%22 ry=%221.039%22 fill=%22%23fff%22 opacity=%22.1%22%2F%3E%3Cellipse cx=%221995.584%22 cy=%22143.85%22 rx=%221.461%22 ry=%221.389%22 fill=%22%23fff%22 opacity=%22.632%22%2F%3E%3Cellipse cx=%2259.59%22 cy=%22320.144%22 rx=%222.344%22 ry=%221.926%22 fill=%22%23fff%22 opacity=%22.036%22%2F%3E%3Cellipse cx=%22276.365%22 cy=%22306.562%22 rx=%221.736%22 ry=%221.455%22 fill=%22%23fff%22 opacity=%22.419%22%2F%3E%3Cellipse cx=%22433.598%22 cy=%22349.16%22 rx=%221.966%22 ry=%221.533%22 fill=%22%23fff%22 opacity=%22.531%22%2F%3E%3Cellipse cx=%22771.795%22 cy=%22364.592%22 rx=%221.835%22 ry=%221.771%22 fill=%22%23fff%22 opacity=%22-.049%22%2F%3E%3Cellipse cx=%22844.733%22 cy=%22320.443%22 rx=%221.392%22 ry=%221.266%22 fill=%22%23fff%22 opacity=%22.773%22%2F%3E%3Cellipse cx=%221092.006%22 cy=%22366.449%22 rx=%221.379%22 ry=%221.205%22 fill=%22%23fff%22 opacity=%22.198%22%2F%3E%3Cellipse cx=%221323.956%22 cy=%22341.898%22 rx=%221.593%22 ry=%221.448%22 fill=%22%23fff%22 opacity=%22.613%22%2F%3E%3Cellipse cx=%221417.733%22 cy=%22362.843%22 rx=%222.015%22 ry=%221.921%22 fill=%22%23fff%22 opacity=%22-.106%22%2F%3E%3Cellipse cx=%221635.705%22 cy=%22296.006%22 rx=%221.432%22 ry=%221.408%22 fill=%22%23fff%22 opacity=%22.402%22%2F%3E%3Cellipse cx=%221857.413%22 cy=%22411.868%22 rx=%221.647%22 ry=%221.26%22 fill=%22%23fff%22 opacity=%22.102%22%2F%3E%3Cellipse cx=%22152.071%22 cy=%22427.972%22 rx=%221.905%22 ry=%221.893%22 fill=%22%23fff%22 opacity=%22.531%22%2F%3E%3Cellipse cx=%22236.798%22 cy=%22491.237%22 rx=%221.722%22 ry=%221.494%22 fill=%22%23fff%22 opacity=%22.255%22%2F%3E%3Cellipse cx=%22534.744%22 cy=%22488.937%22 rx=%221.794%22 ry=%221.397%22 fill=%22%23fff%22 opacity=%22.158%22%2F%3E%3Cellipse cx=%22787.086%22 cy=%22558.207%22 rx=%221.684%22 ry=%221.552%22 fill=%22%23fff%22 opacity=%22.381%22%2F%3E%3Cellipse cx=%22802.028%22 cy=%22513.922%22 rx=%221.285%22 ry=%221.052%22 fill=%22%23fff%22 opacity=%22-.194%22%2F%3E%3Cellipse cx=%221134.251%22 cy=%22500.048%22 rx=%221.528%22 ry=%221.045%22 fill=%22%23fff%22 opacity=%22.658%22%2F%3E%3Cellipse cx=%221240.415%22 cy=%22516.956%22 rx=%221.029%22 ry=%221.012%22 fill=%22%23fff%22 opacity=%22.398%22%2F%3E%3Cellipse cx=%221466.395%22 cy=%22428.172%22 rx=%222.307%22 ry=%221.841%22 fill=%22%23fff%22 opacity=%22.203%22%2F%3E%3Cellipse cx=%221601.708%22 cy=%22434.728%22 rx=%221.555%22 ry=%221.248%22 fill=%22%23fff%22 opacity=%22.379%22%2F%3E%3Cellipse cx=%221851.904%22 cy=%22465.45%22 rx=%221.309%22 ry=%221.152%22 fill=%22%23fff%22 opacity=%22.746%22%2F%3E%3Cellipse cx=%2220.237%22 cy=%22650.189%22 rx=%221.438%22 ry=%221.081%22 fill=%22%23fff%22 opacity=%22.316%22%2F%3E%3Cellipse cx=%22273.707%22 cy=%22693.707%22 rx=%221.452%22 ry=%221.393%22 fill=%22%23fff%22 opacity=%22-.049%22%2F%3E%3Cellipse cx=%22550.858%22 cy=%22654.256%22 rx=%221.507%22 ry=%221.045%22 fill=%22%23fff%22 opacity=%22-.063%22%2F%3E%3Cellipse cx=%22680.887%22 cy=%22684.834%22 rx=%222.305%22 ry=%221.837%22 fill=%22%23fff%22 opacity=%22.573%22%2F%3E%3Cellipse cx=%22836.884%22 cy=%22608.087%22 rx=%222.024%22 ry=%221.975%22 fill=%22%23fff%22 opacity=%22-.077%22%2F%3E%3Cellipse cx=%221129.382%22 cy=%22583.583%22 rx=%221.096%22 ry=%221.084%22 fill=%22%23fff%22 opacity=%22.303%22%2F%3E%3Cellipse cx=%221364.983%22 cy=%22651.837%22 rx=%221.988%22 ry=%221.539%22 fill=%22%23fff%22 opacity=%22.391%22%2F%3E%3Cellipse cx=%221460.333%22 cy=%22625.526%22 rx=%221.819%22 ry=%221.702%22 fill=%22%23fff%22 opacity=%22-.092%22%2F%3E%3Cellipse cx=%221649.571%22 cy=%22618.094%22 rx=%222.09%22 ry=%221.844%22 fill=%22%23fff%22 opacity=%22-.036%22%2F%3E%3Cellipse cx=%221959.614%22 cy=%22682.758%22 rx=%221.387%22 ry=%221.347%22 fill=%22%23fff%22 opacity=%22.645%22%2F%3E%3Cellipse cx=%2252.393%22 cy=%22830.135%22 rx=%221.663%22 ry=%221.188%22 fill=%22%23fff%22 opacity=%22.883%22%2F%3E%3Cellipse cx=%22298.631%22 cy=%22754.031%22 rx=%222.127%22 ry=%221.988%22 fill=%22%23fff%22 opacity=%22-.006%22%2F%3E%3Cellipse cx=%22430.338%22 cy=%22732.225%22 rx=%222.175%22 ry=%221.749%22 fill=%22%23fff%22 opacity=%22.343%22%2F%3E%3Cellipse cx=%22715.525%22 cy=%22807.972%22 rx=%222.309%22 ry=%221.917%22 fill=%22%23fff%22 opacity=%22-.074%22%2F%3E%3Cellipse cx=%22959.529%22 cy=%22800.313%22 rx=%221.176%22 ry=%221.025%22 fill=%22%23fff%22 opacity=%22.82%22%2F%3E%3Cellipse cx=%221133.944%22 cy=%22720.481%22 rx=%221.742%22 ry=%221.658%22 fill=%22%23fff%22 opacity=%22.752%22%2F%3E%3Cellipse cx=%221349.967%22 cy=%22827.889%22 rx=%221.58%22 ry=%221.324%22 fill=%22%23fff%22 opacity=%22.411%22%2F%3E%3Cellipse cx=%221472.101%22 cy=%22720.966%22 rx=%221.277%22 ry=%221.059%22 fill=%22%23fff%22 opacity=%22-.134%22%2F%3E%3Cellipse cx=%221788.212%22 cy=%22803.867%22 rx=%221.407%22 ry=%221.023%22 fill=%22%23fff%22 opacity=%22.442%22%2F%3E%3Cellipse cx=%221810.444%22 cy=%22767.474%22 rx=%221.65%22 ry=%221.451%22 fill=%22%23fff%22 opacity=%22.766%22%2F%3E%3Cellipse cx=%2239.444%22 cy=%22938.379%22 rx=%221.273%22 ry=%221.191%22 fill=%22%23fff%22 opacity=%22.428%22%2F%3E%3Cellipse cx=%22376.669%22 cy=%22882.192%22 rx=%221.879%22 ry=%221.664%22 fill=%22%23fff%22 opacity=%22.513%22%2F%3E%3Cellipse cx=%22508.197%22 cy=%22934.382%22 rx=%222.234%22 ry=%221.807%22 fill=%22%23fff%22 opacity=%22.359%22%2F%3E%3Cellipse cx=%22668.266%22 cy=%22886.953%22 rx=%221.31%22 ry=%221.151%22 fill=%22%23fff%22 opacity=%22.285%22%2F%3E%3Cellipse cx=%22928.215%22 cy=%22902.046%22 rx=%222.308%22 ry=%221.929%22 fill=%22%23fff%22 opacity=%22.185%22%2F%3E%3Cellipse cx=%221025.739%22 cy=%22964.509%22 rx=%221.626%22 ry=%221.265%22 fill=%22%23fff%22 opacity=%22.437%22%2F%3E%3Cellipse cx=%221296.904%22 cy=%22914.612%22 rx=%221.817%22 ry=%221.576%22 fill=%22%23fff%22 opacity=%22-.094%22%2F%3E%3Cellipse cx=%221465.519%22 cy=%22889.467%22 rx=%222.295%22 ry=%221.806%22 fill=%22%23fff%22 opacity=%22.081%22%2F%3E%3Cellipse cx=%221759.177%22 cy=%22875.066%22 rx=%221.945%22 ry=%221.534%22 fill=%22%23fff%22 opacity=%22.76%22%2F%3E%3Cellipse cx=%221970.884%22 cy=%22947.058%22 rx=%222.132%22 ry=%221.742%22 fill=%22%23fff%22 opacity=%22.233%22%2F%3E%3Cellipse cx=%2227.81%22 cy=%221069.206%22 rx=%221.683%22 ry=%221.676%22 fill=%22%23fff%22 opacity=%22.753%22%2F%3E%3Cellipse cx=%22389.385%22 cy=%221080.396%22 rx=%222.304%22 ry=%221.95%22 fill=%22%23fff%22 opacity=%22.728%22%2F%3E%3Cellipse cx=%22539.12%22 cy=%221073.151%22 rx=%222.201%22 ry=%221.796%22 fill=%22%23fff%22 opacity=%22.009%22%2F%3E%3Cellipse cx=%22688.548%22 cy=%221017.868%22 rx=%222.204%22 ry=%221.899%22 fill=%22%23fff%22 opacity=%22.257%22%2F%3E%3Cellipse cx=%22912.87%22 cy=%221095.863%22 rx=%221.503%22 ry=%221.27%22 fill=%22%23fff%22 opacity=%22.746%22%2F%3E%3Cellipse cx=%221106.738%22 cy=%221047.945%22 rx=%221.442%22 ry=%221.341%22 fill=%22%23fff%22 opacity=%22.821%22%2F%3E%3Cellipse cx=%221297.643%22 cy=%221067.213%22 rx=%222.07%22 ry=%221.836%22 fill=%22%23fff%22 opacity=%22.224%22%2F%3E%3Cellipse cx=%221537.947%22 cy=%221005.788%22 rx=%221.762%22 ry=%221.624%22 fill=%22%23fff%22 opacity=%22.652%22%2F%3E%3Cellipse cx=%221760.929%22 cy=%221031.931%22 rx=%221.444%22 ry=%221.256%22 fill=%22%23fff%22 opacity=%22-.041%22%2F%3E%3Cellipse cx=%221876.379%22 cy=%221011.749%22 rx=%221.593%22 ry=%221.549%22 fill=%22%23fff%22 opacity=%22.733%22%2F%3E%3Cellipse cx=%2277.661%22 cy=%221229.222%22 rx=%221.611%22 ry=%221.506%22 fill=%22%23fff%22 opacity=%22.539%22%2F%3E%3Cellipse cx=%22294.219%22 cy=%221258.993%22 rx=%221.826%22 ry=%221.7%22 fill=%22%23fff%22 opacity=%22.451%22%2F%3E%3Cellipse cx=%22557.538%22 cy=%221221.318%22 rx=%221.579%22 ry=%221.304%22 fill=%22%23fff%22 opacity=%22-.005%22%2F%3E%3Cellipse cx=%22764.239%22 cy=%221157.499%22 rx=%222.092%22 ry=%221.6%22 fill=%22%23fff%22 opacity=%22.001%22%2F%3E%3Cellipse cx=%22899.554%22 cy=%221179.744%22 rx=%221.506%22 ry=%221.423%22 fill=%22%23fff%22 opacity=%22.438%22%2F%3E%3Cellipse cx=%221110.335%22 cy=%221166.16%22 rx=%221.759%22 ry=%221.382%22 fill=%22%23fff%22 opacity=%22.336%22%2F%3E%3Cellipse cx=%221265.011%22 cy=%221210.748%22 rx=%221.668%22 ry=%221.307%22 fill=%22%23fff%22 opacity=%22.536%22%2F%3E%3Cellipse cx=%221573.4%22 cy=%221151.335%22 rx=%221.741%22 ry=%221.407%22 fill=%22%23fff%22 opacity=%22.344%22%2F%3E%3Cellipse cx=%221650.567%22 cy=%221146.513%22 rx=%221.757%22 ry=%221.671%22 fill=%22%23fff%22 opacity=%22.357%22%2F%3E%3Cellipse cx=%221949.209%22 cy=%221120.902%22 rx=%221.782%22 ry=%221.647%22 fill=%22%23fff%22 opacity=%22-.045%22%2F%3E%3Cellipse cx=%22199.446%22 cy=%221376.949%22 rx=%222.147%22 ry=%221.99%22 fill=%22%23fff%22 opacity=%22-.016%22%2F%3E%3Cellipse cx=%22290.282%22 cy=%221328.944%22 rx=%221.395%22 ry=%221.253%22 fill=%22%23fff%22 opacity=%22.435%22%2F%3E%3Cellipse cx=%22573.255%22 cy=%221291.809%22 rx=%221.89%22 ry=%221.733%22 fill=%22%23fff%22 opacity=%22.259%22%2F%3E%3Cellipse cx=%22705.5%22 cy=%221292.599%22 rx=%222.018%22 ry=%221.583%22 fill=%22%23fff%22 opacity=%22.319%22%2F%3E%3Cellipse cx=%22999.099%22 cy=%221316.172%22 rx=%221.274%22 ry=%221.013%22 fill=%22%23fff%22 opacity=%22.664%22%2F%3E%3Cellipse cx=%221014.665%22 cy=%221316.726%22 rx=%221.851%22 ry=%221.592%22 fill=%22%23fff%22 opacity=%22.434%22%2F%3E%3Cellipse cx=%221384.355%22 cy=%221370.148%22 rx=%221.847%22 ry=%221.613%22 fill=%22%23fff%22 opacity=%22.105%22%2F%3E%3Cellipse cx=%221404.247%22 cy=%221329.976%22 rx=%221.873%22 ry=%221.395%22 fill=%22%23fff%22 opacity=%22-.065%22%2F%3E%3Cellipse cx=%221780.137%22 cy=%221379.111%22 rx=%222.048%22 ry=%221.598%22 fill=%22%23fff%22 opacity=%22.394%22%2F%3E%3Cellipse cx=%221927.247%22 cy=%221335.44%22 rx=%221.5%22 ry=%221.062%22 fill=%22%23fff%22 opacity=%22.235%22%2F%3E%3Cg transform=%22rotate(-56.001 486.905 -136.857)%22%3E%3Cdefs%3E%3ClinearGradient id=%22a%22 x1=%220%22 y1=%221%22 x2=%22216.893%22 y2=%221%22 gradientUnits=%22userSpaceOnUse%22%3E%3Cstop stop-color=%22%23fff%22%2F%3E%3Cstop offset=%22.3%22 stop-color=%22%23fff%22 stop-opacity=%22.1%22%2F%3E%3Cstop offset=%22.7%22 stop-color=%22%23fff%22 stop-opacity=%220%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect x=%22-10.845%22 y=%22-12.5%22 width=%2286.757%22 height=%2225%22 rx=%2225%22 ry=%2225%22 fill=%22url(%23a)%22 filter=%22url(%23b)%22 opacity=%22.4%22%2F%3E%3Crect width=%22130.136%22 height=%228%22 rx=%228%22 ry=%228%22 fill=%22url(%23a)%22%2F%3E%3C%2Fg%3E%3Cg transform=%22rotate(-55.68 532.545 -417.55)%22 fill=%22url(%23a)%22%3E%3Crect x=%22-15.087%22 y=%22-12.5%22 width=%22120.694%22 height=%2225%22 rx=%2225%22 ry=%2225%22 filter=%22url(%23b)%22 opacity=%22.4%22%2F%3E%3Crect width=%22181.041%22 height=%228%22 rx=%228%22 ry=%228%22%2F%3E%3C%2Fg%3E%3Cg transform=%22rotate(-60.599 753.26 -999.15)%22 fill=%22url(%23a)%22%3E%3Crect x=%22-16.917%22 y=%22-12.5%22 width=%22135.336%22 height=%2225%22 rx=%2225%22 ry=%2225%22 filter=%22url(%23b)%22 opacity=%22.4%22%2F%3E%3Crect width=%22203.004%22 height=%228%22 rx=%228%22 ry=%228%22%2F%3E%3C%2Fg%3E%3Cg transform=%22rotate(-58.564 813.63 -1394.62)%22 fill=%22url(%23a)%22%3E%3Crect x=%22-12.257%22 y=%22-12.5%22 width=%2298.06%22 height=%2225%22 rx=%2225%22 ry=%2225%22 filter=%22url(%23b)%22 opacity=%22.4%22%2F%3E%3Crect width=%22147.089%22 height=%228%22 rx=%228%22 ry=%228%22%2F%3E%3C%2Fg%3E%3Cg transform=%22rotate(-63.909 605.67 324.906)%22 fill=%22url(%23a)%22%3E%3Crect x=%22-10.854%22 y=%22-12.5%22 width=%2286.832%22 height=%2225%22 rx=%2225%22 ry=%2225%22 filter=%22url(%23b)%22 opacity=%22.4%22%2F%3E%3Crect width=%22130.248%22 height=%228%22 rx=%228%22 ry=%228%22%2F%3E%3C%2Fg%3E%3Cg transform=%22rotate(-56.135 1181.21 -129.449)%22 fill=%22url(%23a)%22%3E%3Crect x=%22-11.751%22 y=%22-12.5%22 width=%2294.005%22 height=%2225%22 rx=%2225%22 ry=%2225%22 filter=%22url(%23b)%22 opacity=%22.4%22%2F%3E%3Crect width=%22141.007%22 height=%228%22 rx=%228%22 ry=%228%22%2F%3E%3C%2Fg%3E%3Cg transform=%22rotate(-59.287 1059.907 -709.815)%22 fill=%22url(%23a)%22%3E%3Crect x=%22-16.219%22 y=%22-12.5%22 width=%22129.756%22 height=%2225%22 rx=%2225%22 ry=%2225%22 filter=%22url(%23b)%22 opacity=%22.4%22%2F%3E%3Crect width=%22194.634%22 height=%228%22 rx=%228%22 ry=%228%22%2F%3E%3C%2Fg%3E%3Cg transform=%22rotate(-62.706 1307.252 -1002.528)%22 fill=%22url(%23a)%22%3E%3Crect x=%22-13.592%22 y=%22-12.5%22 width=%22108.736%22 height=%2225%22 rx=%2225%22 ry=%2225%22 filter=%22url(%23b)%22 opacity=%22.4%22%2F%3E%3Crect width=%22163.104%22 height=%228%22 rx=%228%22 ry=%228%22%2F%3E%3C%2Fg%3E%3Cg transform=%22rotate(-55.831 1143.774 535.19)%22 fill=%22url(%23a)%22%3E%3Crect x=%22-13.246%22 y=%22-12.5%22 width=%22105.968%22 height=%2225%22 rx=%2225%22 ry=%2225%22 filter=%22url(%23b)%22 opacity=%22.4%22%2F%3E%3Crect width=%22158.952%22 height=%228%22 rx=%228%22 ry=%228%22%2F%3E%3C%2Fg%3E%3Cg transform=%22rotate(-64.202 1372.59 93.383)%22 fill=%22url(%23a)%22%3E%3Crect x=%22-15.704%22 y=%22-12.5%22 width=%22125.635%22 height=%2225%22 rx=%2225%22 ry=%2225%22 filter=%22url(%23b)%22 opacity=%22.4%22%2F%3E%3Crect width=%22188.452%22 height=%228%22 rx=%228%22 ry=%228%22%2F%3E%3C%2Fg%3E%3Cg transform=%22rotate(-64.389 1691.674 -542.614)%22 fill=%22url(%23a)%22%3E%3Crect x=%22-16.261%22 y=%22-12.5%22 width=%22130.085%22 height=%2225%22 rx=%2225%22 ry=%2225%22 filter=%22url(%23b)%22 opacity=%22.4%22%2F%3E%3Crect width=%22195.128%22 height=%228%22 rx=%228%22 ry=%228%22%2F%3E%3C%2Fg%3E%3Cg transform=%22rotate(-57.595 1962.22 -1231.162)%22 fill=%22url(%23a)%22%3E%3Crect x=%22-13.563%22 y=%22-12.5%22 width=%22108.508%22 height=%2225%22 rx=%2225%22 ry=%2225%22 filter=%22url(%23b)%22 opacity=%22.4%22%2F%3E%3Crect width=%22162.761%22 height=%228%22 rx=%228%22 ry=%228%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
            }}
        ></div>
    );
};
const Grid = ({ primaryColor, secondaryColor }: DecorationProps) => {
    return (
        <div
            className='absolute h-full w-full top-0 left-0'
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'repeat',
                backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 2000 1400%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cmask id=%22b%22 x=%220%22 y=%220%22 width=%222000%22 height=%221400%22%3E%3Cpath fill=%22url(%23a)%22 d=%22M0 0h2000v1400H0z%22%2F%3E%3C%2Fmask%3E%3Cpath fill=%22%23000336%22 d=%22M0 0h2000v1400H0z%22%2F%3E%3Cg style=%22transform-origin:center center%22 stroke=%22%234c4e72%22 stroke-width=%222%22 mask=%22url(%23b)%22%3E%3Cpath fill=%22none%22 d=%22M0 0h100v100H0z%22%2F%3E%3Cpath fill=%22%234c4e7266%22 d=%22M100 0h100v100H100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M200 0h100v100H200zM300 0h100v100H300z%22%2F%3E%3Cpath fill=%22%234c4e728e%22 d=%22M400 0h100v100H400z%22%2F%3E%3Cpath fill=%22none%22 d=%22M500 0h100v100H500zM600 0h100v100H600zM700 0h100v100H700zM800 0h100v100H800zM900 0h100v100H900z%22%2F%3E%3Cpath fill=%22%234c4e72d3%22 d=%22M1000 0h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e727f%22 d=%22M1100 0h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1200 0h100v100h-100zM1300 0h100v100h-100zM1400 0h100v100h-100zM1500 0h100v100h-100zM1600 0h100v100h-100zM1700 0h100v100h-100zM1800 0h100v100h-100zM1900 0h100v100h-100zM0 100h100v100H0z%22%2F%3E%3Cpath fill=%22%234c4e72d4%22 d=%22M100 100h100v100H100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M200 100h100v100H200zM300 100h100v100H300zM400 100h100v100H400zM500 100h100v100H500zM600 100h100v100H600zM700 100h100v100H700zM800 100h100v100H800z%22%2F%3E%3Cpath fill=%22%234c4e7226%22 d=%22M900 100h100v100H900z%22%2F%3E%3Cpath fill=%22%234c4e7297%22 d=%22M1000 100h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e729c%22 d=%22M1100 100h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e72e5%22 d=%22M1200 100h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1300 100h100v100h-100zM1400 100h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e7269%22 d=%22M1500 100h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1600 100h100v100h-100zM1700 100h100v100h-100zM1800 100h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e7292%22 d=%22M1900 100h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M0 200h100v100H0zM100 200h100v100H100zM200 200h100v100H200zM300 200h100v100H300zM400 200h100v100H400z%22%2F%3E%3Cpath fill=%22%234c4e72c7%22 d=%22M500 200h100v100H500z%22%2F%3E%3Cpath fill=%22%234c4e726d%22 d=%22M600 200h100v100H600z%22%2F%3E%3Cpath fill=%22none%22 d=%22M700 200h100v100H700zM800 200h100v100H800zM900 200h100v100H900z%22%2F%3E%3Cpath fill=%22%234c4e7212%22 d=%22M1000 200h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1100 200h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e72bf%22 d=%22M1200 200h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1300 200h100v100h-100zM1400 200h100v100h-100zM1500 200h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e72ad%22 d=%22M1600 200h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1700 200h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e72a3%22 d=%22M1800 200h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e72da%22 d=%22M1900 200h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M0 300h100v100H0zM100 300h100v100H100zM200 300h100v100H200zM300 300h100v100H300z%22%2F%3E%3Cpath fill=%22%234c4e72d0%22 d=%22M400 300h100v100H400z%22%2F%3E%3Cpath fill=%22none%22 d=%22M500 300h100v100H500zM600 300h100v100H600zM700 300h100v100H700zM800 300h100v100H800z%22%2F%3E%3Cpath fill=%22%234c4e72b9%22 d=%22M900 300h100v100H900z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1000 300h100v100h-100zM1100 300h100v100h-100zM1200 300h100v100h-100zM1300 300h100v100h-100zM1400 300h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e72c1%22 d=%22M1500 300h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1600 300h100v100h-100zM1700 300h100v100h-100zM1800 300h100v100h-100zM1900 300h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e7225%22 d=%22M0 400h100v100H0z%22%2F%3E%3Cpath fill=%22%234c4e7232%22 d=%22M100 400h100v100H100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M200 400h100v100H200z%22%2F%3E%3Cpath fill=%22%234c4e722d%22 d=%22M300 400h100v100H300z%22%2F%3E%3Cpath fill=%22none%22 d=%22M400 400h100v100H400z%22%2F%3E%3Cpath fill=%22%234c4e7209%22 d=%22M500 400h100v100H500z%22%2F%3E%3Cpath fill=%22none%22 d=%22M600 400h100v100H600zM700 400h100v100H700z%22%2F%3E%3Cpath fill=%22%234c4e7288%22 d=%22M800 400h100v100H800z%22%2F%3E%3Cpath fill=%22none%22 d=%22M900 400h100v100H900zM1000 400h100v100h-100zM1100 400h100v100h-100zM1200 400h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e72bd%22 d=%22M1300 400h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1400 400h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e72aa%22 d=%22M1500 400h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1600 400h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e7217%22 d=%22M1700 400h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1800 400h100v100h-100zM1900 400h100v100h-100zM0 500h100v100H0z%22%2F%3E%3Cpath fill=%22%234c4e72ae%22 d=%22M100 500h100v100H100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M200 500h100v100H200zM300 500h100v100H300zM400 500h100v100H400z%22%2F%3E%3Cpath fill=%22%234c4e7225%22 d=%22M500 500h100v100H500z%22%2F%3E%3Cpath fill=%22none%22 d=%22M600 500h100v100H600zM700 500h100v100H700zM800 500h100v100H800zM900 500h100v100H900zM1000 500h100v100h-100zM1100 500h100v100h-100zM1200 500h100v100h-100zM1300 500h100v100h-100zM1400 500h100v100h-100zM1500 500h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e724f%22 d=%22M1600 500h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e7209%22 d=%22M1700 500h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1800 500h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e72b1%22 d=%22M1900 500h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e7283%22 d=%22M0 600h100v100H0z%22%2F%3E%3Cpath fill=%22none%22 d=%22M100 600h100v100H100z%22%2F%3E%3Cpath fill=%22%234c4e7260%22 d=%22M200 600h100v100H200z%22%2F%3E%3Cpath fill=%22none%22 d=%22M300 600h100v100H300zM400 600h100v100H400zM500 600h100v100H500z%22%2F%3E%3Cpath fill=%22%234c4e728b%22 d=%22M600 600h100v100H600z%22%2F%3E%3Cpath fill=%22none%22 d=%22M700 600h100v100H700z%22%2F%3E%3Cpath fill=%22%234c4e724f%22 d=%22M800 600h100v100H800z%22%2F%3E%3Cpath fill=%22%234c4e722c%22 d=%22M900 600h100v100H900z%22%2F%3E%3Cpath fill=%22%234c4e7257%22 d=%22M1000 600h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1100 600h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e726d%22 d=%22M1200 600h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e7240%22 d=%22M1300 600h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e724a%22 d=%22M1400 600h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1500 600h100v100h-100zM1600 600h100v100h-100zM1700 600h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e72d9%22 d=%22M1800 600h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1900 600h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e729c%22 d=%22M0 700h100v100H0z%22%2F%3E%3Cpath fill=%22%234c4e720e%22 d=%22M100 700h100v100H100z%22%2F%3E%3Cpath fill=%22%234c4e722f%22 d=%22M200 700h100v100H200z%22%2F%3E%3Cpath fill=%22%234c4e72e2%22 d=%22M300 700h100v100H300z%22%2F%3E%3Cpath fill=%22none%22 d=%22M400 700h100v100H400z%22%2F%3E%3Cpath fill=%22%234c4e7224%22 d=%22M500 700h100v100H500z%22%2F%3E%3Cpath fill=%22none%22 d=%22M600 700h100v100H600zM700 700h100v100H700zM800 700h100v100H800zM900 700h100v100H900zM1000 700h100v100h-100zM1100 700h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e722a%22 d=%22M1200 700h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e722e%22 d=%22M1300 700h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e72a1%22 d=%22M1400 700h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e7251%22 d=%22M1500 700h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1600 700h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e72e8%22 d=%22M1700 700h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1800 700h100v100h-100zM1900 700h100v100h-100zM0 800h100v100H0zM100 800h100v100H100z%22%2F%3E%3Cpath fill=%22%234c4e725a%22 d=%22M200 800h100v100H200z%22%2F%3E%3Cpath fill=%22none%22 d=%22M300 800h100v100H300zM400 800h100v100H400z%22%2F%3E%3Cpath fill=%22%234c4e7216%22 d=%22M500 800h100v100H500z%22%2F%3E%3Cpath fill=%22none%22 d=%22M600 800h100v100H600zM700 800h100v100H700z%22%2F%3E%3Cpath fill=%22%234c4e72e7%22 d=%22M800 800h100v100H800z%22%2F%3E%3Cpath fill=%22none%22 d=%22M900 800h100v100H900zM1000 800h100v100h-100zM1100 800h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e7297%22 d=%22M1200 800h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1300 800h100v100h-100zM1400 800h100v100h-100zM1500 800h100v100h-100zM1600 800h100v100h-100zM1700 800h100v100h-100zM1800 800h100v100h-100zM1900 800h100v100h-100zM0 900h100v100H0z%22%2F%3E%3Cpath fill=%22%234c4e7211%22 d=%22M100 900h100v100H100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M200 900h100v100H200z%22%2F%3E%3Cpath fill=%22%234c4e7299%22 d=%22M300 900h100v100H300z%22%2F%3E%3Cpath fill=%22none%22 d=%22M400 900h100v100H400zM500 900h100v100H500zM600 900h100v100H600z%22%2F%3E%3Cpath fill=%22%234c4e7290%22 d=%22M700 900h100v100H700z%22%2F%3E%3Cpath fill=%22none%22 d=%22M800 900h100v100H800zM900 900h100v100H900zM1000 900h100v100h-100zM1100 900h100v100h-100zM1200 900h100v100h-100zM1300 900h100v100h-100zM1400 900h100v100h-100zM1500 900h100v100h-100zM1600 900h100v100h-100zM1700 900h100v100h-100zM1800 900h100v100h-100zM1900 900h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e72f4%22 d=%22M0 1000h100v100H0z%22%2F%3E%3Cpath fill=%22none%22 d=%22M100 1000h100v100H100zM200 1000h100v100H200zM300 1000h100v100H300z%22%2F%3E%3Cpath fill=%22%234c4e7229%22 d=%22M400 1000h100v100H400z%22%2F%3E%3Cpath fill=%22none%22 d=%22M500 1000h100v100H500zM600 1000h100v100H600z%22%2F%3E%3Cpath fill=%22%234c4e7209%22 d=%22M700 1000h100v100H700z%22%2F%3E%3Cpath fill=%22%234c4e7292%22 d=%22M800 1000h100v100H800z%22%2F%3E%3Cpath fill=%22none%22 d=%22M900 1000h100v100H900zM1000 1000h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e72b6%22 d=%22M1100 1000h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e7296%22 d=%22M1200 1000h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1300 1000h100v100h-100zM1400 1000h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e720b%22 d=%22M1500 1000h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1600 1000h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e7254%22 d=%22M1700 1000h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1800 1000h100v100h-100zM1900 1000h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e725f%22 d=%22M0 1100h100v100H0z%22%2F%3E%3Cpath fill=%22none%22 d=%22M100 1100h100v100H100z%22%2F%3E%3Cpath fill=%22%234c4e72a9%22 d=%22M200 1100h100v100H200z%22%2F%3E%3Cpath fill=%22none%22 d=%22M300 1100h100v100H300zM400 1100h100v100H400zM500 1100h100v100H500zM600 1100h100v100H600zM700 1100h100v100H700zM800 1100h100v100H800z%22%2F%3E%3Cpath fill=%22%234c4e72a0%22 d=%22M900 1100h100v100H900z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1000 1100h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e72e4%22 d=%22M1100 1100h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1200 1100h100v100h-100zM1300 1100h100v100h-100zM1400 1100h100v100h-100zM1500 1100h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e72dd%22 d=%22M1600 1100h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1700 1100h100v100h-100zM1800 1100h100v100h-100zM1900 1100h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e72ea%22 d=%22M0 1200h100v100H0z%22%2F%3E%3Cpath fill=%22none%22 d=%22M100 1200h100v100H100z%22%2F%3E%3Cpath fill=%22%234c4e7258%22 d=%22M200 1200h100v100H200z%22%2F%3E%3Cpath fill=%22none%22 d=%22M300 1200h100v100H300z%22%2F%3E%3Cpath fill=%22%234c4e728a%22 d=%22M400 1200h100v100H400z%22%2F%3E%3Cpath fill=%22none%22 d=%22M500 1200h100v100H500zM600 1200h100v100H600zM700 1200h100v100H700zM800 1200h100v100H800z%22%2F%3E%3Cpath fill=%22%234c4e7208%22 d=%22M900 1200h100v100H900z%22%2F%3E%3Cpath fill=%22%234c4e72e3%22 d=%22M1000 1200h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e7299%22 d=%22M1100 1200h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1200 1200h100v100h-100zM1300 1200h100v100h-100zM1400 1200h100v100h-100zM1500 1200h100v100h-100zM1600 1200h100v100h-100zM1700 1200h100v100h-100zM1800 1200h100v100h-100zM1900 1200h100v100h-100zM0 1300h100v100H0zM100 1300h100v100H100zM200 1300h100v100H200zM300 1300h100v100H300zM400 1300h100v100H400zM500 1300h100v100H500zM600 1300h100v100H600z%22%2F%3E%3Cpath fill=%22%234c4e727c%22 d=%22M700 1300h100v100H700z%22%2F%3E%3Cpath fill=%22none%22 d=%22M800 1300h100v100H800z%22%2F%3E%3Cpath fill=%22%234c4e72cc%22 d=%22M900 1300h100v100H900z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1000 1300h100v100h-100zM1100 1300h100v100h-100zM1200 1300h100v100h-100zM1300 1300h100v100h-100z%22%2F%3E%3Cpath fill=%22%234c4e72aa%22 d=%22M1400 1300h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1500 1300h100v100h-100zM1600 1300h100v100h-100zM1700 1300h100v100h-100zM1800 1300h100v100h-100zM1900 1300h100v100h-100z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CradialGradient id=%22a%22%3E%3Cstop offset=%220%22 stop-color=%22%23fff%22%2F%3E%3Cstop offset=%221%22 stop-color=%22%23fff%22 stop-opacity=%220%22%2F%3E%3C%2FradialGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")`,
            }}
        ></div>
    );
};
const Blobs = ({
    primaryColor,
    secondaryColor,
    cover,
    cta,
    even,
    tertiaryColor,
}: DecorationProps) => {
    const element = (
        <div
            className='absolute bottom-0 translate-x-1/2 translate-y-1/2 right-0 rounded-full w-40 h-40'
            style={{
                width: '200px',
                height: '200px',
                borderRadius: '15rem',
                background: `linear-gradient(180deg, #EF516D 0%, rgba(239, 81, 109, 0) 100%), radial-gradient(94.51% 124.88% at 94.32% 94.43%, rgba(65, 244, 255, 0.78) 0%, rgba(131, 218, 255, 0.6552) 32.29%, rgba(99, 175, 240, 0.3978) 64.06%, rgba(43, 90, 211, 0) 100%), linear-gradient(313.04deg, #341D65 0.93%, #604AEA 125.68%)`,
                backgroundBlendMode: `normal,normal,normal,normal,normal,normal`,
                filter: `blur(50px)`,
            }}
        ></div>
    );
    return (
        <DecorationConnectingPattern
            Element={element}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            cover={cover}
            cta={cta}
            even={even}
            tertiaryColor={tertiaryColor}
            xAxis={0}
            yAxis={36}
            className='opacity-100'
        />
    );
};

export const decorationMap = {
    Squares,
    Topo,
    Arrows,
    Bubbles,
    Trending,
    VerticalGradient,
    Starts: Stars,
    Paper,
    Prism,
    // Rounded,
    Balls,
    HorizontalGradient,
    // Grain,
    Organic,
    Sky,
    Grid,
    Blobs,
};

export const Decoration = ({
    primaryColor,
    secondaryColor,
    tertiaryColor,
    decorationid,
    cover,
    cta,
    even,
    alternateColors,
}: DecorativeElementsProps) => {
    const DecorationComponent = decorationMap[decorationid];
    return (
        <DecorationComponent
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            tertiaryColor={tertiaryColor}
            cover={cover}
            cta={cta}
            even={even}
            alternateColors={alternateColors}
        />
    );
};

type DecorationConnectingPatternProps = {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor?: string;
    cover?: boolean;
    cta?: boolean;
    even?: boolean;
    Element: React.ReactNode;

    yAxis?: number;
    xAxis?: number;
    className?: string;
};

export const DecorationConnectingPattern = ({
    primaryColor,
    secondaryColor,
    cover,
    cta,
    even,
    Element,
    yAxis = 0,
    xAxis = 0,
    className,
}: DecorationConnectingPatternProps) => {
    return (
        <div
            className={cn(
                ` absolute h-full w-full top-0 left-0 opacity-25`,
                className
            )}
        >
            <div
                className='absolute bg-green-500 border-0 border-green-500'
                style={{
                    bottom: `${yAxis}px`,
                    right: `${xAxis}px`,
                }}
            >
                {!cta && !even && Element}
            </div>
            <div
                className='absolute'
                style={{
                    bottom: `${yAxis}px`,
                    left: `-${xAxis}px`,
                }}
            >
                {!cover && even && Element}
            </div>
            <div
                className='absolute '
                style={{
                    top: `${yAxis}px`,
                    right: `${xAxis}px`,
                }}
            >
                {!cta && even && Element}
            </div>
            <div
                className='absolute '
                style={{
                    top: `${yAxis}px`,
                    left: `-${xAxis}px`,
                }}
            >
                {!cover && !even && Element}
            </div>
        </div>
    );
};
