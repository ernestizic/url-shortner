import React, { useState } from 'react'

const UrlForm = () => {
    const [url,setUrl] = useState('')
    const [shortLink, setShortLink] = useState(null);
    const [isCopied, setIsCopied] = useState(false);
    const [isFieldEmpty, setIsFieldEmpty] = useState(false)


    const handleSubmit = async(e)=> {  
        try {
            e.preventDefault();
            
            if(url === ''){
                setIsFieldEmpty(true)
            }else{
                setIsFieldEmpty(false)
                const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
                const data = await res.json();
                setShortLink(data.result);
            }
        } catch (err) {
            console.log(err)
        } 
    }

    const copy =()=> {
        navigator.clipboard.writeText(shortLink.short_link2);
        setIsCopied(true);
    }
    return (
        <>
        <div className='form-div'>

            <form onSubmit={handleSubmit}>
                <input className={isFieldEmpty? ('error-field') : ('url-form')} type='url' placeholder='Shorten a link here...' value={url} onChange={(e)=> setUrl(e.target.value)}/>     
                <input className='btn' type='submit' value='Shorten It!'/>
            </form>
            {isFieldEmpty && <span className='error'>Please add a link</span>}
        </div>

        {shortLink && <div className='new-link'>
            <p>{url}</p>
            <div className='copy-div'>
                <a href={`https://${shortLink.short_link2}`} target="_blank" rel="noreferrer">{shortLink.short_link2}</a>
                {isCopied ? (<button className='copied'>Copied!</button>) : (
                    <button onClick={copy}>Copy</button>
                )}
                
            </div>
        </div>}
        </>
    )
}

export default UrlForm
