import Image from "next/image";
import React, { useState } from "react";
export default function Index() {
  return (
    <>
      <div className="container mx-auto lg:px-3 xl:px-5 2xl:px-20 px-5 ">
        <div className="flex gap-12 mt-6 lg:px-5 xl:px-10 2xl:px-12 px-5">
          <Image className=" " src="/image 2 (1).svg" width={167} height={32} />
          <h1 className="text-base text-gray-800 font-normal mt-3 cursor-pointer">
            Our Work
          </h1>
          <h1 className="text-base text-gray-800 font-normal mt-3 cursor-pointer">
            Pricing
          </h1>{" "}
          <div className=" flex gap-2">
            <h1 className=" text-base text-gray-800 font-normal mt-3 cursor-pointer">
              Resources
            </h1>
            <Image
              className="cursor-pointer my-auto "
              src="/Vector (33).svg"
              width={12}
              height={5.44}
            />
          </div>
          <h1 className="text-base text-gray-800 font-normal mt-3 cursor-pointer">
            Contact Us
          </h1>
          <div className="ml-auto">
            <button className="border px-12 py-3 rounded-full bg-gray-50 hover:bg-indigo-50 focus:bg-indigo-50 ease-in-out duration-300 border-gray-800 font-semibold">
              Request a Logo
            </button>
          </div>
        </div>
        <div className="flex mt-16  lg:px-5 xl:px-10 2xl:px-12 px-5">
          <div className="w-11/12 ">
            <h1 className="text-6xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-semibold  w-full lg:w-11/12 xl:w-11/12 2xl:w-11/12">
              We make your <span className="text">LOGO</span> and{" "}
              <span className="text1">BRAND</span> stand out from the crowd.
            </h1>
            <h1 className="text-gray-800 text-base mt-8 lg:w-8/12 xl:w-6/12 2xl:w-6/12 w-full">
              We create compelling brands for startups, companies and
              organizations. With German quality.{" "}
            </h1>
            <button className="border px-12 py-3 mt-8 rounded-full bg-gray-50 hover:bg-indigo-50 focus:bg-indigo-50 ease-in-out duration-300 border-gray-800 font-semibold">
              Request a Logo
            </button>
          </div>
          <div className="w-6/12">
            <div className="float-right">
              <Image
                className=" my-auto "
                src="/Group 99.png"
                width={445}
                height={491}
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-50 mt-16 lg:px-5 xl:px-10 2xl:px-12 px-5 pb-12">
          <h1 className=" text2 text-4xl font-semibold pt-12">Benefits</h1>
          <h1 className="text-4xl font-semibold text-gray-800">
            We see a problem & we fix it.
          </h1>
          <div className="flex gap-8 mt-12">
            <div className="bg-white w-11/12 rounded-xl px-8 py-12">
              <h1 className="text-4xl font-semibold text-gray-800 px-5">
                <span className="line-through text2 text-4xl  font-semibold">
                  Just a logo
                </span>{" "}
                A stunning identity.
              </h1>
              <h1 className="text-gray-800 text-base mt-6 w-10/12 font-normal px-5">
                We design beautiful brands that speak to the hearts and minds of
                your consumers. A good brand isn’t only beautiful, it tells a
                clear story and speaks to the unique value of your product to
                set your brand apart from the noise.
              </h1>
            </div>
            <div className="w-44 ">
              <div className="flex flex-col">
                <div className="bg-white py-5 rounded-xl">
                  <h1 className="font-extrabold  text-3xl text-center text5">
                    25+
                  </h1>
                  <h1 className="text-center text-gray-800 mt-1 text-base">
                    Happy Clients
                  </h1>
                </div>
                <div className="bg-white py-5 rounded-xl mt-6">
                  <h1 className="font-extrabold text-3xl text-center text6">
                    100%
                  </h1>
                  <h1 className="text-center text-gray-800 mt-1 text-base">
                    Passion
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-8 mt-8">
            <div className="w-11/12 bg-white rounded-2xl py-12 px-3">
              <div className="flex justify-center items-center">
                <Image
                  className="  "
                  src="/Group 47.png"
                  width={92}
                  height={92}
                />
              </div>
              <div className="flex justify-center items-center">
                <h1 className="text-4xl font-semibold text-center mt-5 text-gray-800 w-6/12">
                  Lightning-fast delivery
                </h1>
              </div>
              <div className="flex justify-center items-center">
                <h1 className="text-2xl mt-5 text-center text-gray-800 w-9/12 ">
                  Get your logo design package back within two weeks of
                  purchase. Word.
                </h1>
              </div>
            </div>
            <div className="w-11/12 bg-white rounded-2xl py-12 px-3">
              <div className="flex justify-center items-center">
                <Image
                  className=""
                  src="/Group 48 (5).png"
                  width={92}
                  height={92}
                />
              </div>
              <div className="flex justify-center items-center">
                <h1 className="text-4xl font-semibold text-center mt-5 text-gray-800 w-5/12">
                  Multiple revisions
                </h1>
              </div>
              <div className="flex justify-center items-center">
                <h1 className="text-2xl mt-5 text-center text-gray-800 w-7/12 ">
                  We’re not happy until you’re 100% satisfied.
                </h1>
              </div>
            </div>
          </div>
          <div className="flex gap-8 mt-8">
            <div className="w-11/12 bg-white rounded-2xl py-12 px-3">
              <div className="flex justify-center items-center">
                <Image
                  className="  "
                  src="/Group 51.png"
                  width={92}
                  height={92}
                />
              </div>
              <div className="flex justify-center items-center">
                <h1 className="text-4xl font-semibold text-center mt-5 text-gray-800 w-6/12">
                  Smooth Collaboration
                </h1>
              </div>
              <div className="flex justify-center items-center">
                <h1 className="text-2xl mt-5 text-center text-gray-800 w-9/12 ">
                  Easily track the process using Slack or Discord.
                </h1>
              </div>
            </div>
            <div className="w-11/12 bg-white rounded-2xl py-12 px-3">
              <div className="flex justify-center items-center">
                <Image
                  className="  "
                  src="/Group 53.png"
                  width={92}
                  height={92}
                />
              </div>
              <div className="flex justify-center items-center">
                <h1 className="text-4xl font-semibold text-center mt-5 text-gray-800 w-6/12">
                  Customer-first principle
                </h1>
              </div>
              <div className="flex justify-center items-center">
                <h1 className="text-2xl mt-5 text-center text-gray-800 w-9/12 ">
                  We make sure your branding will appeal to the right kind of
                  people!
                </h1>
              </div>
            </div>
          </div>
          <div className="flex gap-8 mt-8">
            <div className="w-11/12 bg-white rounded-2xl py-12 px-3">
              <div className="flex justify-center items-center">
                <Image
                  className="  "
                  src="/Group 57.png"
                  width={92}
                  height={92}
                />
              </div>
              <div className="flex justify-center items-center">
                <h1 className="text-4xl font-semibold text-center mt-5 text-gray-800 w-4/12">
                  Goal Oriented
                </h1>
              </div>
              <div className="flex justify-center items-center">
                <h1 className="text-2xl mt-5 text-center text-gray-800 w-9/12 ">
                  We go beyond to exceed all your expectations.
                </h1>
              </div>
            </div>
            <div className="w-11/12 bg-white rounded-2xl py-12 px-3">
              <div className="flex justify-center items-center">
                <Image
                  className="  "
                  src="/Group 55.png"
                  width={92}
                  height={92}
                />
              </div>
              <div className="flex justify-center items-center">
                <h1 className="text-4xl font-semibold text-center mt-5 text-gray-800 w-5/12">
                  Non-Profit Love
                </h1>
              </div>
              <div className="flex justify-center items-center">
                <h1 className="text-2xl mt-5 text-center text-gray-800 w-9/12 ">
                  Registrered non-profits receive 50% off on all packages.
                </h1>
              </div>
            </div>
          </div>
          <div className="flex gap-8 mt-8">
            <div className="w-5/12 bg py-24 rounded-2xl ">
              <h1 className="text-4xl text-white font-semibold text-center">
                Pixel-perfect
              </h1>
              <div className="flex justify-center items-center">
                <h1 className="text-xl text-center font-normal text-white w-10/12 mt-8 ">
                  Your SVG and EPS logo files let you scale your logo to any
                  size
                </h1>
              </div>
              <div className="mt-8 flex justify-center items-center">
                <Image src="/Group 41.png" width={505} height={116} />
              </div>
            </div>
            <div className="w-11/12 bg-slate-200 rounded-2xl py-8">
              <h1 className="text-4xl font-semibold px-16 mt-12 w-5/12">
                Full brand guideline
              </h1>
              <div className="flex justify-end items-end px-8">
                <Image src="/Group 5 (1).png" width={454.46} height={239.96} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white lg:px-5 xl:px-10 2xl:px-12 px-5 py-12">
          <div className="flex gap-8">
            <div className="w-11/12">
              <h1 className="text-4xl text-gray-800 font-semibold w-5/12">
                Our Creative Proccess
              </h1>
              <h1 className="text-base text-gray-800 mt-8 w-8/12 ">
                We design beautiful brands that speak to the hearts and minds of
                your consumers. A good brand isn’t only beautiful, it tells a
                clear story and speaks to the unique value of your product to
                set your brand apart from the noise.
              </h1>
            </div>
            <div className="w-11/12 ">
              <div className="bg-white px-8 py-12 shadow radius">
                <Image
                  className=""
                  src="/Group 6 (1).png"
                  width={32}
                  height={27}
                />
                <h1 className="mt-1 text-gray-800 font-semibold text-4xl">
                  Discovery
                </h1>
                <h1 className="mt-2 text-gray-800 text-base pb-5">
                  Going deep into your business to understand its core sense,
                  goals and challenges to build partnership.
                </h1>
              </div>
              <div className="bg-white px-8 py-12 shadow radius -mt-10">
                <Image
                  className=""
                  src="/Group 6 (1).png"
                  width={32}
                  height={27}
                />
                <h1 className="mt-1 text-gray-800 font-semibold text-4xl">
                  Research
                </h1>
                <h1 className=" mt-2 text-gray-800 text-base pb-6">
                  Conduct research focused on your industry, its history, and
                  competitors.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 py-12">
          <div className="flex justify-center items-center">
            <h1 className="text-gray-800 font-semibold text-center text-3xl lg:w-5/12 xl:w-4/12 2xl:w-4/12 w-6/12">
              Choose the right package that works for your business
            </h1>
          </div>
          <div className="flex justify-center items-center mt-2">
            <h1 className="text-center text-gray-800 font-normal">
              We offer 3 different type of packages.
            </h1>
          </div>
          <div className="flex gap-8 lg:px-5 xl:px-10 2xl:px-12 px-5 mt-12">
            <div className="w-11/12 bg-white px-12 py-12 rounded-2xl relative shadow">
              <h1 className="font-semibold text-2xl text-gray-800">Bronze</h1>
              <h1 className="font-semibold text-4xl text-gray-800 mt-3">
                $495
              </h1>
              <div className="mt-6 -mb-1.5">
                <Image src="/Group 12.png" width={10} height={9.02} />
              </div>
              <h1 className="text-gray-800 lg:w-full xl:w-full 2xl:w-10/12 w-full ">
                Best suited for small businesses, start-ups and entrepreneurs
                who need an identity.
              </h1>
              <button className="w-full py-5 bg-gray-800 text-white mt-5 rounded-2xl text-lg font-semibold">
                Get Started
              </button>
              <h1 className="text-gray-800 font-semibold text-base mt-8">
                What Included
              </h1>
              <h1 className="text-gray-800 font-normal text-base mt-2">
                Client Brainstorm
              </h1>
              <h1 className="text-gray-800 font-normal text-base mt-2">
                2 rounds of Revisions
              </h1>
              <h1 className="text-gray-800 font-normal text-base mt-2">
                1 Initial Logo Sketch Design
              </h1>
              <h1 className="text-gray-800 font-normal text-base mt-2">
                Files Provided: JPEG, PNG, SVG, etc.
              </h1>
              <h1 className="text-gray-800 font-normal text-base mt-2">
                Full brand guidelines + Mockups
              </h1>
              <div className="absolute bottom-12">
                <h1 className="text-gray-800 font-semibold text-base mt-6 px-6">
                  1-2 Weeks Delivery
                </h1>
              </div>
            </div>
            <div className="w-11/12 bg px-12 py-12 rounded-2xl relative">
              <div className="absolute -right-6 -top-5">
                <Image src="/Group 88.svg" width={112.53} height={72.46} />
              </div>
              <div className="absolute right-12 ">
                <Image src="/Group 30.png" width={47} height={47.61} />
              </div>
              <h1 className="font-semibold text-2xl text-white">Silver</h1>
              <h1 className="font-semibold text-4xl text3 mt-3">$895</h1>
              <div className="mt-6 -mb-1.5">
                <Image src="/Group 12 (1).png" width={10} height={9.02} />
              </div>
              <h1 className="text-white lg:w-full xl:w-full 2xl:w-10/12 w-full">
                Medium sized businesses who require a quality custom brand that
                will take them to the next level.
              </h1>
              <button className="w-full py-5 bg-pink text-gray-800 mt-5 rounded-2xl text-lg font-semibold">
                Get Started
              </button>
              <h1 className="text-white font-semibold text-base mt-8">
                What Included
              </h1>
              <h1 className="text-white font-normal text-base mt-2">
                Client Brainstorm
              </h1>
              <h1 className="text-white font-normal text-base mt-2">
                2 rounds of Revisions
              </h1>
              <h1 className="text-white font-normal text-base mt-2">
                1 Initial Logo Sketch Design
              </h1>
              <h1 className="text-white font-normal text-base mt-2">
                Files Provided: JPEG, PNG, SVG, etc.
              </h1>
              <h1 className="text-white font-normal text-base mt-2">
                Full brand guidelines + Mockups
              </h1>
              <div className="absolute bottom-12">
                <h1 className="text-white font-semibold text-base  px-6">
                  1-2 Weeks Delivery
                </h1>
              </div>
            </div>
            <div className="w-11/12 bg-white px-12 py-12 rounded-2xl shadow ">
              <h1 className="font-semibold text-2xl text-gray-800">Gold</h1>
              <h1 className="font-semibold text-4xl text-gray-800 mt-3">
                $1295
              </h1>
              <div className="mt-6 -mb-1.5">
                <Image src="/Group 12.png" width={10} height={9.02} />
              </div>
              <h1 className="text-gray-800 lg:w-full xl:w-full 2xl:w-10/12 w-full ">
                Large and Medium businesses looking for authenticity in their
                brand.
              </h1>
              <button className="w-full py-5 bg-gray-800 text-white mt-5 rounded-2xl text-lg font-semibold ease-in-out duration-500">
                Get Started
              </button>
              <h1 className="text-gray-800 font-semibold text-base mt-8">
                What Included
              </h1>
              <h1 className="text-gray-800 font-normal text-base mt-2">
                Client Brainstorm
              </h1>
              <h1 className="text-gray-800 font-normal text-base mt-2">
                4 rounds of Revisions
              </h1>
              <h1 className="text-gray-800 font-normal text-base mt-2">
                3 Initial Logo Sketch Designsz
              </h1>
              <h1 className="text-gray-800 font-normal text-base mt-2">
                Files Provided: JPEG, PNG, SVG, etc.
              </h1>
              <h1 className="text-gray-800 font-normal text-base mt-2">
                Full brand guidelines + Mockups
              </h1>
              <h1 className="text-gray-800 font-normal text-base mt-2">
                Logo guideline
              </h1>

              <h1 className="text-gray-800 font-semibold text-base mt-6 px-6">
                1-2 Weeks Delivery
              </h1>
            </div>
          </div>
          <h1 className="text-gray-800 text-base text-center font-normal mt-3">
            Need something more custom? We got you! Contact us here
          </h1>
          <h1 className="text-4xl text-center font-semibold text-gray-800 mt-16">
            Frequently Asked Questions
          </h1>
          <div className="flex gap-8 mt-8 lg:px-5 xl:px-10 2xl:px-12 px-5">
            <div className="w-11/12 bg-white px-8 py-8 rounded-2xl shadow">
              <h1 className="text-gray-800 text-base font-semibold">
                Why are your logo packages so expensive?
              </h1>
            </div>
            <div className="w-11/12 bg-white px-8 py-8 rounded-2xl shadow">
              <h1 className="text-gray-800 text-base font-semibold">
                What software do you use to create logos?
              </h1>
            </div>
          </div>
          <div className="flex gap-8 mt-8 lg:px-5 xl:px-10 2xl:px-12 px-5">
            <div className="w-11/12 bg-white px-8 py-8 rounded-2xl shadow">
              <h1 className="text-gray-800 text-base font-semibold">
                How long does it takes to complete a logo?
              </h1>
            </div>
            <div className="w-11/12 bg-white px-8 py-8 rounded-2xl shadow">
              <h1 className="text-gray-800 text-base font-semibold">
                Where are you based?
              </h1>
            </div>
          </div>
          <div className="flex gap-8 mt-8 lg:px-5 xl:px-10 2xl:px-12 px-5">
            <div className="w-11/12 bg-white px-8 py-8 rounded-2xl shadow">
              <h1 className="text-gray-800 text-base font-semibold">
                Do you offer other services?
              </h1>
            </div>
            <div className="w-11/12 bg-white px-8 py-8 rounded-2xl shadow">
              <h1 className="text-gray-800 text-base font-semibold">
                I have more questions, how do I contact you?
              </h1>
            </div>
          </div>
          <div className=" lg:px-44 xl:px-32 2xl:px-44 px-5 px-20">
            <div className="bg mt-12 py-8 rounded-2xl px-8 ">
              <div className="flex justify-end items-end ">
                <Image src="/Group 39.png" width={47} height={47.61} />
              </div>
              <div className="flex mb-12">
                <div className="">
                  <h1 className="text-4xl text-white font-semibold w-7/12">
                    Don’t just buy a logo, Invest in your brand.
                  </h1>
                  <h1 className="text-white text-base mt-3">
                    Let’s make something beautiful for you!
                  </h1>
                </div>
                <div className="ml-auto">
                  <button className="w-full py-5 w-64 bg-pink text-gray-800 mt-5 rounded-lg text-lg font-semibold">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-between lg:px-5 xl:px-10 2xl:px-12 px-5 mt-20">
            <div className="">
              <Image src="/image 10.svg" width={181} height={44} />
            </div>
            <div className="flex gap-32">
              <div className="">
                <h1 className="text-lg font-semibold">Useful Links</h1>
                <h1 className="text-base font-semibold mt-4 text4">Work</h1>
                <h1 className="text-base font-semibold mt-4 text4">
                  Pricing
                </h1>{" "}
                <h1 className="text-base font-semibold mt-4 text4">
                  Resources
                </h1>{" "}
                <h1 className="text-base font-semibold mt-4 text4">Sitemap</h1>
                <h1 className="text-base font-semibold mt-4 text4">Contact</h1>
              </div>
              <div className="">
                <h1 className="text-lg font-semibold">Services</h1>
                <h1 className="text-base font-semibold mt-4 text4">
                  Logo & Branding
                </h1>
                <h1 className="text-base font-semibold mt-4 text4">
                  Web Design (COMING SOON!)
                </h1>
                <h1 className="text-base font-semibold mt-4 text4">
                  SEO (COMING SOON!)
                </h1>{" "}
              </div>
            </div>
          </div>
          <div className="flex px-12 mt-12">
            <div className="">
              <h1 className="text-base text4">© Copyright</h1>
            </div>
            <div className="ml-auto">
              <div className="flex gap-8">
                <h1 className="text-base text4">Cookie Policy</h1>
                <h1 className="text-base text4">Privacy Policy</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .text{
            color:#647CF8;
          }
          .text1{
            color:#00E4D5;
          }
          .text2{
            color:#A3A3A3;
          }
          .text3{
           color: #FDDAFD;
          }
          .text4{
            color: #828997;
          }
          .bg{
            background:#0F1528;
          }
          .shadow{
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          }
          .radius{
            border-radius: 35px;
          }
          .text5{
            background: linear-gradient(180deg, #452280 20.97%, #9D7CD3 80.65%);
            -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
          .text6{
            background: linear-gradient(180deg, #0036C2 20.97%, #00D7F7 80.65%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
          .bg-pink{
          background: linear-gradient(180deg, #FDDAFD 0%, #E7D5FE 100%);
          }
          .bg-pink:hover{
            background: linear-gradient(180deg,#E7D5FE 100% ,  #FDDAFD 0%);
            }
          `}
      </style>
    </>
  );
}
