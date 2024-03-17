import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import IMAGES from '../../constant/assests'

import Summarify from './Summarify'

const Hero = () => {

    return (
        <main className='hero-container' style={{
            backgroundImage: `url(${IMAGES.Hero_img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className='hero-content'>
                <h1>Summarize any <TypeAnimation
                    sequence={[
                        ' Article',
                        3000,
                        ' Essay',
                        3000,
                        ' Paragraph',
                        3000,
                        ' Text',
                        3000,
                        ' Webpage',
                        3000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
                    <br />in a click
                </h1>
                <p>Summarify helps you summarize any piece of text into concise, easy to digest content so you can free yourself from information overload.</p>
            </div>
            <div style={{paddingBottom:"20px"}} >
                <Summarify />
            </div>
        </main>
    )
}

export default Hero
