import React from 'react';
import Container from './Container';
import bgimg from '../assets/bgimg.png';
import five from '../assets/five.png';
import fromImg from '../assets/from.png';
import { GoArrowUpRight } from 'react-icons/go';
import { FaLongArrowAltRight } from 'react-icons/fa';

const From = () => {
  return (
    <Container>
      <div>
        <div>
          <img src={bgimg} alt="Background" />
        </div>

        <div className="flex">
          <div className="space-y-60 -mt-[800px] ml-10">
            <img src={five} alt="Five" />
            <img src={fromImg} alt="From wordmark" className="mt-[300px]" />
          </div>

          <div className="-mt-[800px] text-white ml-[130px]">
            <div className="font-medium text-[76px]">
              <h2 className="-mt-[30px]">LATEST</h2>
            </div>

            <p className="-mt-[20px]">I love my work and every project is my pride</p>

            <div className="font-medium text-[76px]">
              <h3 className="-mt-[20px] ml-[150px]">NEWS</h3>
            </div>

            <div className="text-white border-t-2 border-white inline-block w-[450px] text-[20px] mt-[80px]">
              <div className="space-y-4">
                <div className="flex gap-4 border-b border-white mt-2">
                  <p>HOW TO DESUGN WELL?</p>
                  <GoArrowUpRight className="ml-[150px]" />
                </div>

                <div className="flex gap-4 border-b border-white mt-2">
                  <p>LEMON ILLUSTRATION DESIGN</p>
                </div>

                <div className="flex gap-4 border-b border-white mt-2">
                  <p>PAUL THEME BRANDING</p>
                </div>

                <div className="flex gap-4 border-b border-white mt-2">
                  <p>BEST TYPOGRAPHY 2020</p>
                </div>

                <div className="flex gap-4 border-b border-white mt-2">
                  <p>MY NAME IS PATTISON</p>
                </div>
              </div>
            </div>

            <div className="flex mt-[80px] gap-4 ml-[250px] items-center">
              <h3>View all works</h3>
              <button
                className="px-8 py-4 bg-[#B66449] rounded-2xl"
                aria-label="View all works"
              >
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>

          <div>
            <div className="flex gap-20 -mt-[800px] ml-[100px] text-white text-[15px]">
              <p>3th January, 2020</p>
              <p>
                Berling ® — minimalism photography agency website. <br />
                with the help of a minimalistic design, the site turned <br />
                out to be very user-friendly and responsive, and the <br />
                brand became&nbsp;more.
              </p>
              <h1>(01)</h1>
            </div>

            <div className="w-[700px] h-[600px] bg-[#C4C4C4] mt-[15px] ml-[100px]" />
          </div>

          <div className="-mt-[420px] ml-[50px]">
            <div className="flex flex-col gap-3 items-center">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span className="w-2 h-2 rounded-full bg-white/50" />
              <span className="w-2 h-2 rounded-full bg-white/50" />
              <span className="w-2 h-2 rounded-full bg-white/50" />
              <span className="w-2 h-2 rounded-full bg-white/50" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default From;
