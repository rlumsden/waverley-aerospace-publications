import ContentBlock from '../../components/ContentBlock'
// import authorImage from '../../public/img/author_bio.png'
import Head from 'next/head'
import BackButton from '../../components/BackButton'

function author() {

  const header = 'R Bruce Lumsden'

  const content = [
    "Robert Bruce Lumsden was born 1943 in Galashiels in the Scottish Borders and was educated at St Peter's school, Galashiels Academy, and the University of Edinburgh where he graduated with an honours degree in Electrical Engineering. He joined the Blind Landing Experimental Unit at the Royal Aircraft Establishment at Bedford in 1966 and worked on all aspects of automatic landing which are described in his first book, 'Touchdown Safely', a Boffin's Tale of All-Weather Approach and Landing and Flight Trials at RAE Bedford, 1966-1986.",
    "In 1986 he led the All-Weather Operations group to research helicopter embarked ship launch and recovery operations for the RN. During this period he was invited to join international information exchange groups with the United States Air Force (USAF), the USAF at Wright Labs in Dayton and the USN Naval Air Warfare Center at NAS Patuxent River. He received a number of awards for his research, the IMechE William Sweet Smith Prize in 1998 for his paper ‘Challenges at the Helicopter – Ship dynamic Interface’ presented at FITEC ’98, the Aero Marine Award from the RAeSoc in 1998 and the Technical Co-operation Program (Australia, New Zealand, Canada, USA and UK) Achievement Award for research on ship airwake prediction and validation in 2000.",
    "He was also co-opted on to the European Joint Aviation Authorities (JAA) All weather Operations Category 3 Subgroup as secretary tasked with establishing the requirements for Category 3 operations with fail passive autoland and head up displays.",
    "He experienced sea time on trials with the Canadian Navy (HMCS Ottawa), the USN (USS McInerny and USS Theodore Roosevelt (CVN-71) together with a catapult launch), and the RN (Type 23 frigates Iron Duke, Marlborough and Sutherland, the landing platform dock HMS Ocean and the aircraft carriers Invincible, Illustrious and Ark Royal).",
    "RAE became part of the Defence Evaluation and Research Agency (DERA). In 2001, it was split into QinetiQ, a wholly commercial arm, and a smaller Defence Science and Technology Group (DSTL), which was retained by the UK Government. Bruce was selected for DSTL because of his international government connections and continued to work as a consultant on all weather activities.",
    "He continued to work part time on launch and recovery operations. His final posting was to the Naval Systems Department at Portsdown near Portsmouth where he worked on embarked UAV operations and special projects. He left government science in 2009 after 43 years of service.",
    "Post retirement from 2012 to 2014 he became an Honorary Fellow of the School of Engineering at the University of Liverpool and lectured to students at Liverpool and at Airbus Helicopters at Marignane in France."
  ]

  return (
    <div>
      <Head>
        <title>Waverley Aerospace Publications | author</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Biography for the author - Robert Bruce Lumsden" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <ContentBlock>
          <div>
            <BackButton top />
            <h2 className='font-bold text-lg text-center mb-3'>{header}</h2>
            <div className='border-2 max-w-max mx-auto'>
              {/* <Image src={authorImage}/> */}
            </div>
            {content.map((paragraph, index) => (
              <div key={`author paragraph ${index + 1}`}>
                <p className='mb-3'>{paragraph}</p>
              </div>
            ))}
            <BackButton bottom />
          </div>
        {/* } */}
      </ContentBlock>
    </div>
  )
}

export default author