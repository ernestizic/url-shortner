import React, { useState } from 'react'

const UrlForm = () => {
    const [url,setUrl] = useState('')
    const [shortLink, setShortLink] = useState(null);
    const [isCopied, setIsCopied] = useState(false);


    const handleSubmit = async(e)=> {   
        e.preventDefault();
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        const data = await res.json();
        setShortLink(data.result);
    }
    const copy =()=> {
        navigator.clipboard.writeText(shortLink.short_link);
        setIsCopied(true);
    }
    return (
        <>
        <div className='form-div'>

            <form onSubmit={handleSubmit}>
                <input className='url-form' type='url' placeholder='Shorten a link here...' value={url} onChange={(e)=> setUrl(e.target.value)} required/>
                <input className='btn' type='submit' value='Shorten It!'/>
            </form>
        </div>

        {shortLink && <div className='new-link'>
            <p>{url}</p>
            <div className='copy-div'>
                <a href={`https://${shortLink.short_link}`} target="_blank" rel="noreferrer">{shortLink.short_link}</a>
                {isCopied ? (<button className='btn copied'>Copied!</button>) : (
                    <button className='btn' onClick={copy}>Copy</button>
                )}
                
            </div>
        </div>}
        </>
    )
}

export default UrlForm
