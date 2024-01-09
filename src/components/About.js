import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-white">
            실무 경력 22년, 교육 경력 5년 을 동시에 겸비한 전문 개발자 및 교육자 
            <hr/>      
            <br className="hidden lg:inline-block" /> 사랑하는 두딸과 아내와 소소한 행복을 꿈꾸는 평범한 남편이자 아빠  
          </h1>
          <p className="mb-8 leading-relaxed">
            나보다 남을 먼저 생각하며 베풀려는 마음을 가지려고 노력하는 한 인간  
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              저랑 하고 싶은 과제가 있으시면 
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              나의 과거 교육 경력 
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./아내.PNG"
          />
        </div>
      </div>
    </section>
  );
}