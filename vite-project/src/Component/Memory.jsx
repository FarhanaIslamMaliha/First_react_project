import React from 'react';
import Container from './Container';
import bgimg from '../assets/bgimg.png';
import four from '../assets/four.png';
import memoryImg from '../assets/memory.png';
import { PiCodesandboxLogo } from 'react-icons/pi';
import { BsQrCode } from 'react-icons/bs';
import { FaWikipediaW } from 'react-icons/fa';
import arrow from '../assets/arrow.png';
import { FaArrowLeftLong, FaArrowRight } from 'react-icons/fa6';

const Memory = () => {
  return (
    <Container>
      <div>
        <div>
          <img src={bgimg} alt="Background" />
        </div>

        <div>
          <div className="space-y-60 -mt-[800px] ml-10">
            <img src={four} alt="Four" />
            <img src={memoryImg} alt="Memory wordmark" className="mt-[450px]" />
          </div>

          <div className="flex">
            <div className="-mt-[750px] text-white ml-[150px]">
              <div className="font-medium text-[76px]">
                <h2 className="-mt-[30px]">+250</h2>
              </div>

              <p className="-mt-[20px]">I love my work and every project is my pride</p>

              <div className="font-medium text-[76px]">
                <h3 className="-mt-[20px]">HAPPY</h3>
                <h3 className="-mt-[40px] ml-[100px]">CLIENTS</h3>
              </div>

              <div className="flex mt-[250px] gap-20">
                <div>
                  <h3 className="text-[30px]">ARTCHIVE</h3>
                  <p>CRAFTS GLLERY</p>
                </div>

                <div className="flex gap-6">
                  <PiCodesandboxLogo className="w-[70px] h-[70px]" />
                  <p>
                    CREATIVE <br /> SPACE FOR TECNICAL <br /> INNOVECATIONS
                  </p>
                </div>
              </div>

              <div className="flex mt-[110px] gap-20">
                <div className="flex gap-3 items-center">
                  <BsQrCode className="w-[50px] h-[50px]" />
                  <h2 className="text-[30px]">behr</h2>
                </div>

                <div className="ml-[20px]">
                  <FaWikipediaW className="w-[50px] h-[50px] ml-[20px]" />
                  <p>Chitstopher wills</p>
                </div>
              </div>

              <div className="-mt-[20px]">
                <p>HANDELSAGENTUR</p>
              </div>
            </div>

            <div>
              <div className="-mt-[750px] ml-[60px] text-white">
                <h2 className="text-[40px]">
                  <span className="text-[#B66449]">Creative</span> &amp; dedicated is <br />
                  things that my studio <br /> brings for your business
                </h2>
              </div>

              <div className="flex mt-[180px] ml-[320px] gap-10">
                <img src={arrow} alt="Arrow" className="w-[100px] h-[85px]" />
                <p className="text-white text-[15px]">
                  “ If you are seeking an Interior designer that will <br />
                  understand exactly your needs, and someone who will <br />
                  utilise their creative and technical skills in parity with <br />
                  your taste, then Suzanne at The Bauhaus Studio is <br />
                  perfect.
                </p>
              </div>

              <div className="text-white mt-[80px] ml-[480px]">
                <h4 className="text-[22px]">DAVID &amp; ELISA</h4>
                <p className="text-[15px]">Apartment view lake at Brooklyn</p>
              </div>

              <div className="flex gap-4 mt-[100px] ml-[500px]">
                <button
                  className="px-8 py-4 border-2 border-white rounded-2xl"
                  aria-label="Previous"
                >
                  <FaArrowLeftLong className="text-white" />
                </button>

                <button
                  className="px-8 py-4 bg-[#B66449] rounded-2xl"
                  aria-label="Next"
                >
                  <FaArrowRight className="text-white" />
                </button>
              </div>
            </div>

            <div className="-mt-[400px] ml-[50px]">
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

export default Memory;
