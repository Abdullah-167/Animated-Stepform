import React from 'react'
import { useState } from 'react';
import HeroImge from '../src/assets/handshake.jpg'
import { AiOutlineArrowRight } from "react-icons/ai";


const Seconddiv = () => {
    const [currentDiv, setCurrentDiv] = useState(1);

    return (
        <div> {currentDiv === 2 && (
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
        )}</div>
    )
}

export default Seconddiv