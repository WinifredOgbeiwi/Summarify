import React from 'react'
import { Mapping } from '../../utils'
import { FEATURE_DATA } from '../../constant/data'

const Feature = () => {
    return (
        <section className='section'>
            <div className='feature-container'>
                <h2>Lightning fast. Better privacy. Fairer cost.
                </h2>
                <p>You can choose continue to use centralized cloud storage but we have some better reasons for you to start moving to decentralized storage because it is simply the future of the internet.</p>
            </div>
            <div className='feature-box-container'>
                <Mapping
                    of={FEATURE_DATA}
                    render={(item, index) => (
                        <div key={index} className='feature-content'>
                            <div className='feature-content-icon'>
                                <img src={item.img} alt={item.heading} width="100%" />
                            </div>
                            <h4>{item.heading}</h4>
                            <p>{item.description}</p>

                        </div>
                    )}
                />
            </div>
        </section>
    )
}

export default Feature
