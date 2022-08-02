import ContentBlock from "../../components/ContentBlock"
import Head from "next/head"
import BackButton from "../../components/BackButton"

function Contact() {
  return (
    <div>
      <Head>
        <title>Waverley Aerospace Publications | contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Contact information for Waverley Aerospace Publications, email: wavaeropubrbl@yahoo.com" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <ContentBlock>
          <p className='mb-3'>Feel free to contact the author directly for any purchases or enquiries:</p>
          <p className='underline font-bold'><a href='mailto:wavaeropubrbl@yahoo.com'>wavaeropubrbl@yahoo.com</a></p>
      </ContentBlock>
      <BackButton bottom ml mt />
    </div>
  )
}

export default Contact