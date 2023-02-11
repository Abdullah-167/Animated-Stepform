import React, { useState } from 'react';
import './App.css';
import { AiOutlineDownload } from "react-icons/ai";
import { TiAttachmentOutline } from "react-icons/ti";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RxCrossCircled } from "react-icons/rx";
import { BiPlus } from "react-icons/bi";
import HeroImge from '../src/assets/handshake.jpg'
import Watch from '../src/assets/watch.jpg'

function App() {

  const [currentDiv, setCurrentDiv] = useState(1);
  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [text2, setText2] = useState("");

  const handleBtn = () => {
    if (!input || !text || !file1 || !file2) {
      alert("Please Fill All The Blank Fileds")
    } else {
      setCurrentDiv(2)
    }
  }

  const lastHandel = () => {
    if (!input2 || !input3 || !text2) {
      alert("Please Fill All The Blank Fileds")
    } else {
      setCurrentDiv(1)
    }
  }



  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      text: "Slide 1"
    },
    {
      text: "Slide 2"
    },
    {
      text: "Slide 3"
    }
  ];

  const handleNext = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div>
      {currentDiv === 1 && (
        <div>
          <div className='main-inp'>
            <input onChange={(e) => setInput(e.target.value)} placeholder='This Is the title' />
          </div>
          <div className='txt-div'>
            <textarea onChange={(e) => setText(e.target.value)} className='txt-area' placeholder='Text' />
          </div>
          <div className='new-main'>
            <div class="search-bar">
              <input onChange={(e) => setFile1(e.target.value)} placeholder='Select File Or Drp here' />
              <a href="#">
                <AiOutlineDownload className='icon' />
              </a>
            </div>
          </div>

          <div className='new-main'>
            <div class="search-bar">
              <input onChange={(e) => setFile2(e.target.value)} placeholder='Select File Or Drp here' />
              <a href="#">
                <TiAttachmentOutline className='icon' />
              </a>
            </div>
          </div>
          <div className='button-main2'>
            <button class="button">
              <AiOutlineArrowLeft className='icon2' />
              Back
            </button>
            <button class="publication-button" onClick={handleBtn}>
              Save & Continue
              <AiOutlineArrowRight className='icon3' />
            </button>
          </div>
        </div>
      )}
      {currentDiv === 2 && (
        <div>
          <div className='dog-main'>
            <div className='dog-img'>
              <img className='img' src={HeroImge} />
              <h2 className='card-head'>Images Only</h2>
              <p className='card-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            <div className='dog-img'>
              <img className='img' src={HeroImge} />
              <h2 className='card-head'>Images Only</h2>
              <p className='card-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            <div className='dog-img'>
              <img className='img' src={HeroImge} />
              <h2 className='card-head'>Images Only</h2>
              <p className='card-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
          </div>
          <div className='btn-div'>
            <button class="cards-button" onClick={() => setCurrentDiv(3)}>
              Save & Continue
              <AiOutlineArrowRight className='icon3' />
            </button>
          </div>
        </div>
      )}
      {currentDiv === 3 && (
        <div>
          <div className='btn-main'>
            <button class="btn">Show Preview <HiOutlineDesktopComputer className='outline-icon' /></button>
          </div>
          <div className='main-con'>
            <h1 className='pub'>Publication Date</h1>
            <p className='pub-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          </div>
          <div className='pub-input'>
            <div class="pub-calen-inp">
              <input type={'date'} placeholder='Start Date' />
            </div>
            <div class="pub-calen-inp">
              <input type={'date'} placeholder='Start Date' />
            </div>
          </div>
          <div className='button-main2'>
            <button class="button" onClick={() => setCurrentDiv(2)}>
              <AiOutlineArrowLeft className='icon2' />
              Back
            </button>
            <button class="publication-button" onClick={() => setCurrentDiv(4)}>
              Save & Publish
              <AiOutlineArrowRight className='icon3' />
            </button>
          </div>
        </div>
      )}
      {currentDiv === 4 && (
        <div className='final-flex'>
          <div>
            <div className='slide-detail-inp'>
              <input onChange={(e) => setInput2(e.target.value)} placeholder='This Is the title' />
            </div>
            <div className='slide-detail-txt'>
              <textarea onChange={(e) => setText2(e.target.value)} className='slide-detail-txt-area' placeholder='Text' />
            </div>
            <div className='slide-detail-inp2'>
              <input onChange={(e) => setInput3(e.target.value)} placeholder='This Is the title' />
            </div>
          </div>
          <div className='watch-div'>
            <div className='w-div'>
              <img className='watch-img' src={Watch} />
            </div>
            <div className='watch-btn'>
              <div class="calen-inp">
                <input type={'date'} placeholder='Start Date' />
              </div>
              <div class="calen-inp">
                <input type={'date'} placeholder='Start Date' />
              </div>
            </div>
            <div className='watch-btns-2'>
              <button class="button" onClick={() => setCurrentDiv(3)}>
                <RxCrossCircled className='icon2' />
                Back
              </button>
              <button class="publication-button" onClick={lastHandel}>
                Save & Publish
                <AiOutlineArrowRight className='icon3' />
              </button>
            </div>
            <button class="absl-btn">
              Save & Publish
              <BiPlus className='icon3' />
            </button>
          </div>
        </div>
      )}


      <div className="container">
        {items.map((item, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            {item.text}
          </div>
        ))}
        <button onClick={handleNext}>Next</button>
      </div>
    </div>

  )
};

export default App;

