import * as React from 'react';
// import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image';
import Pricing from '../components/ThePricingSection';

const IndexPage = () => {
  return (
      <div className="bg-gray-200 font-sans leading-normal tracking-normal">
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <StaticImage src='../images/logo.png' alt='logo' placeholder='blurred' />
              <h1 className="text-4xl font-bold mb-6">We're launching soon</h1>
              <p className="text-gray-600 mb-12">Enter your email to be the first to know when we launch.</p>
              <form 
                method="post" 
                netlify-honeypot="bot-field" 
                data-netlify="true" 
                name="contact" 
                className="max-w-md mx-auto"
                action="/success"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div className="flex items-center">
                  <input id='email' name='email' type="email" className="bg-gray-100 mr-3 py-2 px-4 w-full rounded-md focus:outline-none focus:bg-white" placeholder="Enter your email" />
                  <button type="submit" className="bg-primary text-white py-2 px-4 rounded-md hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="bg-gray-200 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">What to expect</h2>
              <p className="text-gray-600 mb-12">
                We're commencing our journey in the Wirral, assisting them in amplifying their digital footprint through marketing strategies and web development.              
              </p>
            </div>
            <div className="flex flex-wrap -mx-4 mt-12">
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="rounded-md bg-white shadow-md p-8 h-full">
                  <div className="text-4xl font-bold text-primary mb-4">01</div>
                  <h3 className="text-2xl font-bold mb-4">Videography</h3>
                  <p className="text-gray-600 mb-4">
                    Expertly edited, high-quality video production tailored for social media platforms.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="rounded-md bg-white shadow-md p-8 h-full">
                  <div className="text-4xl font-bold text-primary mb-4">02</div>
                  <h3 className="text-2xl font-bold mb-4">Web Development</h3>
                  <p className="text-gray-600 mb-4">
                    Cutting-edge web development solutions for your digital success.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="rounded-md bg-white shadow-md p-8 h-full">
                  <div className="text-4xl font-bold text-primary mb-4">03</div>
                  <h3 className="text-2xl font-bold mb-4">Package Deal</h3>
                  <p className="text-gray-600 mb-4">
                  Discover the perfect combination of features bundled together to enhance your online presence at an affordable price, offering you a comprehensive solution.                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Pricing />
        <h2>One off costs</h2>
        <p>Video: £50</p>
        <p>One Page Custom Website: £250</p>
      </div>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage