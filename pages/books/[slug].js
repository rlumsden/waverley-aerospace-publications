import fs from 'fs'
import path from 'path'
import matter from "gray-matter"
import Link from 'next/link'
import BackButton from '../../components/BackButton'

export async function getStaticPaths() {

    const files = fs.readdirSync(path.join('books'))

    const paths = files.map(filename => ({        
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    console.log(paths)

    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps({ params: {slug} }) {

    const files = fs.readdirSync(path.join('books'))
    const books = files.map((filename) => {

    const slug = filename.replace('.md', '')      
    const markdownWithMeta = fs.readFileSync(path.join('books', filename),'utf-8')  
    const {data:frontmatter, content} = matter(markdownWithMeta)    
        
    return {
        slug,
        frontmatter,
        content
    }      
    })

    return {
        props: {
            slug,
            bookDescription: bookLongDescriptions[slug],
            books
        }
    }
}

export default function BookPage(props) {

    const book = props.books.filter(b => b.slug === props.slug)
    
    return (
       <div>
           <BackButton top/>
           <h2 className='font-bold text-lg text-center mb-3'>{book[0].frontmatter.title}</h2>
           {props.bookDescription.map((p, i) => (
               <p key={`${book[0].frontmatter.title} description paragraph ${i}`} className='mb-5'>{p}</p>
           ))}
           <BackButton bottom />
       </div>
  )
}

const bookLongDescriptions = {
    bookOne: 
    [
        "Bruce Lumsden joined the Blind Landing Experimental Unit (BLEU) in 1966 straight from the University of Edinburgh to work on the automatic control and guidance of aircraft particularly during the landing phase. Initially, he investigated the application of Kalman filters to guidance systems and developed improved dynamic models of the aerodynamics and Avon engines powering the unique Comet 3B. He successfully developed autopilot control laws to conduct automatic curved approaches to airports simulating the guidance proposed for the new microwave landing system (MLS) using the Comet 3B with its analogue TR48 based versatile autopilot (the Comet’s last trial before withdrawal). He alsoand flight tested new approach and landing control laws incorporating direct lift control using the modified spoilers of the BAC 1-11 (XX105) which had replaced the Comet 3B as the principal BLEU research aircraft.",
        "He then designed control laws to enable the BAC 1-11 to conduct automatic two segment approaches (60/30) to touchdown through the standard SEP5 autopilot as a means of alleviating noise at airports, comparing the results with other approach procedures such as the continuous descent, low drag and ILS glide paths >30. The two segment approaches were successfully tested at Gatwick and Heathrow in the UK and at Zurich to establish any incompatibility with existing procedures and certification. Based on noise measurements undertaken at Zurich and Bedford, the benefits of such approaches were then determined for the range of aircraft operated by the then BEA/BOAC.",
        "Transferring to the HS748 (XW750) at Bedford, Bruce became the project officer for the demonstration of the UK Doppler MLS contender for the ICAO MLS competition. Following the first ever automatic landing using MLS at an international airport at Gatwick, DMLS was trialled and demonstrated at Manchester and in the mountains around Berne in Switzerland where two segment approaches in both azimuth and elevation avoiding high ground were undertaken. Further demonstrations in Tehran (Iran) in the most difficult of circumstances and in Montreal during the ICAO meeting showed the capabilities and robustness of the DMLS. Unfortunately, the vote went against the UK in favour of the US/Australian time referenced scanning beam system.",
        "The UK Dept. of Transport and Industry (DTI) sponsored the Economic Category 3 programme to reduce the costs and complexity of existing fail operational Cat 3 systems, it was established by Bruce’s team at Bedford that manual landings could be achieved down to 250m RVR from a 50ft decision height and with a fail passive autopilot (the SEP6 autopilot with monitored autoland) this could be reduced to 200m. In addition, further reductions were possible with a head up display as a backup measure. The HUD used in the HS 748 was the Marconi Avionics Monocular HUD which proved successful when the symbology was designed and developed for the approach and landing task. The programme included new designs of approach and runway lighting to minimise costs and new techniques of RVR measurement.",
        "Bruce then turned to military all weather operations which were limited to a minimum DH of 200ft at suitably equipped runways and established that further weather minima reductions were possible with transport type aircraft using better procedures and techniques coupled with independent monitoring and pilot aid systems. For fighter aircraft, the existing precision approach path (PAR) radar approaches were modified with the development of minor changes to the HUD symbology and the talk down controller phraseology. The performance achieved reduced the lateral and height scatter on approach significantly and provided the required delivery accuracy to support Cat 2 operations with a 100ft DH. The new systems were tested using the HS748 in fog conditions across a range of RAF airfields in the UK and Germany and these were universally accepted, reducing the workload of both pilots and controllers. The HUD in Tornado ZA326 was also modified and successfully tested at Bedford and RAF airfields, providing the same level of improved performance as the 748. In spite of heavy lobbying, PAR was planned to be replaced by MLS and the planned modification fleet wide was not taken up; PAR is still with us, some 35 years later.",
        "Bruce also investigated the use of night vision goggles for night time approaches in poor visibility, the application of forward looking infra red (FLIR) systems in the aircraft and on the ground, and map based navigation techniques to provide approach and landing guidance at austere sites, the forerunners of enhanced and synthetic vision systems (EVS/SVS).",
        "Away from approach and landing, Bruce’s team devised and flight tested a dual Smiths Industries 1553B data bus system in the HS748 which connected a range of systems and devices including MonoHUD, automatic flight control system, inertial navigation system and guidance systems (ILS, map based guidance). This was the first ever aircraft flight using 1553B to connect flight critical systems.",
        "Part 1 consists of 19 chapters of 500 pages, is full of detail and illustrations and priced at £25 plus £5 P&P in the UK. Prices for Europe and the Rest of the World are available on request. It is available from the author or through the Bedford Aeronautical Heritage Group (BAHG) or the Farnborough Air Sciences Trust (FAST) bookshop.",
        "Part 2 of these memoirs, to be published separately, covers the author’s involvement with rotary wing aircraft, in particular the Sea King and Wessex research aircraft, developing an all-weather recovery system for helicopters operating to small ships at sea. For this work, Bruce received the RAeSoc Aero Marine Award and the IMechE William Sweet Smith Prize in 1998, and a Technical Cooperation Programme (TTCP) achievement award for work on the prediction and validation of ship air wakes using CFD techniques in 2000."
    ],
    bookTwo: [
        "This book describes the development of the blind and automatic landing of aircraft in poor visibility conditions. The main driver initially was civil aircraft operations but the requirement to recover bombers returning to fog bound bases in Britain in WWII and later the increasing requirements of military operations helped to maintain the pace of development. The arrival of jet powered airliners and the increasing need for safety and reliability then led to civil operations in a range of weather conditions established by ICAO.",
        "The book covers the early flight research conducted prior to WWI, the blind landings made by Lt Doolittle with his Consolidate Husky aircraft, the automatic landings by Capt. Crane in the lumbering Fokker YC-14B, and the work on unmanned aircraft as targets for naval gun practice and as guided weapons in the inter war years.",
        "The development of the US CAA VHF guidance system pre-WWI and the wartime SC-51, the forerunner of today’s ILS, during WWI for the USAAF in competition with systems operating in the microwave band is described in detail. The SC-51 with its UHF glide path tested at RAF Defford was cleared for automatic approaches by USAAF bomber aircraft returning to their home bases from Germany in fog. Toward the end of the war, the first automatic landing in the UK was achieved using a refurbished Boeing 247D aircraft equipped with SC-51 and a US electric autopilot and interface equipment developed by TFU personnel at RAF Defford.",
        "In 1946, the UK government acknowledged the need for future military aircraft to counter the Soviet threat and formed the Blind Landing Experimental Unit (BLEU) to investigate and develop scientifically the means of recovering aircraft in fog conditions. This resulted in a system to land the V-bombers automatically in poor weather.",
        "The arrival of jet powered aircraft saw the requirement for automatic approach and landing extended to civil aircraft such as the Caravelle and the Trident but with increased levels of safety and availability which necessitated fail operational, digital multiplexed flight control systems, guidance system and displays, including head up displays.",
        "The SC-51 ILS was adopted by ICAO and further developed to meet various forms of interference and multipath and siting problems and permit world-wide operation, while overcoming the challenges of competing systems in the microwave band. The net result was that modern civil aircraft are delivered capable of automatic or blind landing in the worst weather categories (ICAO Category 3) or better*.",
        "In addition, the book encompasses new forms of guidance, particularly enhanced vision systems using infra-red, and millimetric wave imaging systems and head up displays and map based synthetic vision systems. It also addresses the problems of modern control system design, certification methods, and training with specific reference to the Boeing B787, B377MAX and B777 aircraft systems and the problems caused by the world-wide Covid-19 pandemic which arrived in 2019 and significantly closed down civil aviation world-wide for a significant period until late 2021.",
        "The book has 560 pages and is well illustrated by pictures and diagrams. It may be purchased for £35, including postage and packaging (UK only). Prices for Europe and the Rest of the World are available on request.",
        "* A category III A/B/C approach is a precision instrument approach and landing with a decision height lower than 100ft (30m)/ 50ft (15m)/no DH and a runway visual range not less than 700ft (200m)/ 250ft (75m)/ no RVR limitation respectively."
    ]
}