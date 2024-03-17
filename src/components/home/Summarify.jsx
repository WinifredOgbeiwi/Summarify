import React, { useState } from 'react';
import Button from '../Button';
import { useLazyGetSummaryQuery } from '../../api/summaryApi';
import IMAGES from '../../constant/assests';
import Loader from '../Loader';

const Summarify = () => {
    const [summarify, setSummarify] = useState({
        url: "",
        summary: ""
    })
    const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

    const handleSummarify = async (e) => {
        e.preventDefault();
        const { data } = await getSummary({ url: summarify.url })
        if (data?.summary) {
            const newSummary = { ...summarify, summary: data.summary }
            setSummarify(newSummary)
            console.log(newSummary)
        }

    }
    const getWordCount = (text) => {
        if (!text) return 0;
        const stringText = String(text);
        return stringText.trim().split(/\s+/).length;
    };

    const getLetterCount = (text) => {
        if (!text) return 0;
        const stringText = String(text);
        return stringText.replace(/\s+/g, '').length;
    };

    return (
        <div className='summarify'>
            <form className='text-summarize' onSubmit={handleSummarify}>
                <input type='url' placeholder='https://enter-article-url' required value={summarify.url} onChange={(e) => setSummarify({ ...summarify, url: e.target.value })} />

                <div>
                    {isFetching ? (
                        <Loader />
                    )
                        :
                        error ? (<p className='error-message'>Error:{error.data.error}</p>)
                            :
                            (summarify.summary && (
                                <>
                                    <h3 className='summarized-header'>Summarized Text</h3>
                                    <div className='summarized-text' >
                                        <p>{summarify.summary}</p>
                                        <hr className='extra-info' />

                                        <div className='flex'>
                                            <p>Word count: <span style={{ fontWeight: "900" }}>{summarify ? getWordCount(summarify.summary) : ''}</span></p>
                                            <p>Letter count: <span style={{ fontWeight: "900" }}>{summarify ? getLetterCount(summarify.summary) : ''}</span></p>
                                        </div>
                                    </div>

                                </>

                            ))
                    }



                </div>

                <Button specific='nav_button_full hero-button' type="submit" text={summarify.summary ? 'Save Summary ' : 'Summarize'} />
            </form>
        </div>
    );
};

export default Summarify;
