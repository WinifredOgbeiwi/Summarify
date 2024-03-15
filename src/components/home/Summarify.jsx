import React, { useState } from 'react'
import Button from '../Button';
import { useGetSummaryQuery } from '../../api/article-summarizer';

const Summarify = () => {
    const [url, setUrl] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const { data: summary, isLoading, isError, error } = useGetSummaryQuery(submitted ? url : undefined, {
        skip: !submitted // Skip the initial execution of the query until submitted is true
    });

    const handleSummarify = (e) => {
        e.preventDefault();
        setSubmitted(true);
    
    };
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
            <form className='text-summarize'>
                <input type="url" placeholder='https://enter-article-url' required value={url}
                    onChange={(e) => setUrl(e.target.value)} />
                {submitted && (
                    <div>
                        {isLoading && <p>Loading...</p>}
                        {isError && <p className='error-message'>Error:{error.error} </p>}
                        <div className='summarized-text'>
                            {summary && <p>{summary.summary}</p>}
                        </div>
                    <hr className='extra-info'/>
                        <p>Word count: {summary && summary.summary ? getWordCount(summary.summary) : 0}</p>

                        <p>Letter count: {summary && summary.summary ?getLetterCount(summary.summary): 0}</p>
    
                    </div>
                )}
                <Button specific='nav_button_full hero-button' text={summary ? 'Save Summary ' : 'Summarize'} />
                {/* <button className='nav_buttons nav_button_full hero-button' onClick={handleSummarify}><span className='button-content'>{summary ? 'Save Summary ' : 'Summarize'}</span></button> */}
               
            </form>
        </div>
    )
}

export default Summarify
