import React from 'react'
import { useState } from 'react';
import { AiOutlineDownload } from "react-icons/ai";
import { TiAttachmentOutline } from "react-icons/ti";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const Firstdiv = () => {
    const [currentDiv, setCurrentDiv] = useState(1);
    const [input, setInput] = useState("");
    const [text, setText] = useState("");
    const [file1, setFile1] = useState("");
    const [file2, setFile2] = useState("");



    const handleBtn = () => {
        if (!input || !text || !file1 || !file2) {
            alert("Please Fill All The Blank Fileds")
        } else {
            setCurrentDiv(2)
        }
    }
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
        </div>
    )
}

export default Firstdiv