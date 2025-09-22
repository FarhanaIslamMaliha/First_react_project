import React from 'react';
import Container from './Container';
import bgimg from '../assets/bgimg.png';
import three from '../assets/three.png';
import awword from '../assets/awword.png';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Awwards = () => {
  return (
    <Container>
      <div>
        <div>
          <img src={bgimg} alt="Background" />
        </div>

        <div className="flex">
          <div className="space-y-60 -mt-[800px] ml-10">
            <img src={three} alt="Three" />
            <img src={awword} alt="Awards wordmark" />
          </div>

          <div className="-mt-[800px] text-white ml-20">
            <div className="font-medium text-[76px]">
              <h2 className="-mt-[30px]">EXPLORE</h2>
              <h2 className="-mt-[110px] ml-[450px]">MY</h2>
            </div>

            <p className="-mt-[20px]">
              I love my work and every project is my pride
            </p>

            <div className="font-medium text-[76px]">
              <h3 className="-mt-[20px] ml-[150px]">PROTFILE</h3>
            </div>

            <p>
              Hello, my name is Pavel Suslov and i am UX/UI designer <br />
              and front-end developer, im working via developer 9 <br />
              years and i know all about design
            </p>

            <div className="flex mt-[100px] gap-4 ml-[350px] items-center">
              <h3>View behance</h3>
              <button className="px-8 py-4 bg-[#B66449] rounded-2xl" aria-label="View Behance">
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>

          <div>
            <div className="-mt-[800px] ml-[60px] text-white">
              <h2 className="text-[35px]">
                Professional <span className="text-[#B66449]"> awards</span>
              </h2>
            </div>
          </div>

          <div className="min-h-screen flex items-center justify-center p-6 -mt-[850px]">
            <div className="space-y-10 w-full max-w-3xl">
              <div className="flex items-start gap-6 border-b border-white pb-4 -ml-[300px]">
                <div className="w-12 h-12 bg-gray-200" />
                <div>
                  <h3 className="text-white font-bold text-sm">
                    1ST WINNER CREATIVE <br /> DESIGN CHAMPIONSHIP
                  </h3>
                </div>
                <div>
                  <p className="text-white text-xs ml-[40px]">
                    For most favorited design voted by NY City Style <br /> customers
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 border-b border-white pb-4 -ml-[300px]">
                <div className="w-12 h-12 bg-gray-200" />
                <div>
                  <h3 className="text-white font-bold text-sm">
                    BEST 5 BRANDING PROJECT <br /> OF NOMINATIONS
                  </h3>
                </div>
                <div>
                  <p className="text-white text-xs ml-[20px]">
                    For best creative &amp; usable health care mobile app <br /> design
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 border-b border-white pb-4 -ml-[300px]">
                <div className="w-12 h-12 bg-gray-200" />
                <div>
                  <h3 className="text-white font-bold text-sm">8 Years of Membership</h3>
                </div>
                <div>
                  <p className="text-white text-xs ml-[60px]">
                    Has been part of the Envato Community for over 8 years
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 border-b border-white pb-4 -ml-[300px]">
                <div className="w-12 h-12 bg-gray-200" />
                <div>
                  <h3 className="text-white font-bold text-sm">EXCLUSIVE AUTHOR</h3>
                </div>
                <div>
                  <p className="text-white text-xs ml-[80px]">
                    Sells items exclusively on Envato Market
                  </p>
                </div>
              </div>
            </div>

            <div className="-mt-[50px] ml-[70px]">
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
      </div>
    </Container>
  );
};

export default Awwards;
