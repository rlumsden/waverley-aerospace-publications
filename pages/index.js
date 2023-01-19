import React from "react"
import Link from "next/link"
import Head from 'next/head'
import Card from "../components/Card"
import CardAlt from "../components/CardAlt"
// import image1 from "../public/img/Page127.jpg"
// import image2 from "../public/img/ConcordeLanding.png"
import imageOne from "/public/img/Book1Frontpage.png"
import imageTwo from "/public/img/Book2Frontpage.png"
import imageThree from "/public/img/Book1and2FrontPage.png"
import ContentBlock from "../components/ContentBlock"
import fs from 'fs'
import path from 'path'
import matter from "gray-matter"

export async function getStaticProps() {
    
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
        books
      }
    }
}

export default function home(props) {
  
  // const images = [image1, image2, image2]
  const images = [imageOne, imageTwo, imageThree]
  const reducedCard = true

  return (
      <div>
          <Head>
            <title>Waverley Aerospace Publications</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="content: homepage with introduction to Waverley Aerospace Publications and brief descriptions of the books for sale - Touchdown, Safely and Blind Landing, A History, Category: Books, Author: Robert Bruce Lumsden," />
            <link rel="icon" href="/favicon.svg" />
          </Head>
          <ContentBlock>
            <p className="mb-3">Welcome to Waverley Aerospace Publications. The books currently
              available are shown below. If you would like to purchase a book, please
              contact the author for details. Payment may be made directly by cheque or
              by bank transfer or by using PayPal.
            </p>
            <p className="mb-8">This website is under development, and so we cannot currently take payment here. However, if you would like to email the author with a purchase order, payment can be made directly by cheque or bank transfer or by using PayPal. Please <strong className="underline"><Link href="/contact">contact the author</Link></strong> for details.</p>
          </ContentBlock>
          <div className="grid md:grid-cols-2 mt-10">
            {props.books.map((book, index) => (
                <CardAlt
                  key={`${book.frontmatter.title} card`}
                  image={images[index]} 
                  title={book.frontmatter.title} 
                  description={book.content} 
                  price={book.frontmatter.price} 
                  slug={book.slug}             
                />
            ))}
            {reducedCard &&
              <CardAlt
                image={images[2]} 
                title={"title"} 
                description={"description"} 
                price={45} 
                reduced
                // slug={book.slug}             
              />            
            }
          </div>
          <ContentBlock>* Prices UK only, other countries available on request</ContentBlock>
      </div>
  )
}
