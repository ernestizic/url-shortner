import React, { useState, useEffect } from 'react';
import spinner from '../images/unnamed.gif';

const UrlForm = () => {
    const [url,setUrl] = useState('')
    const [shortLink, setShortLink] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isFieldEmpty, setIsFieldEmpty] = useState(false);


    useEffect(()=> {
        const localData = localStorage.getItem("myLinks");
        if(localData) {
            setShortLink(JSON.parse(localData))
        }
    },[])

    useEffect(() => {
        localStorage.setItem("myLinks", JSON.stringify(shortLink));  
    })


    const handleSubmit = async(e)=> {  
        try {
            e.preventDefault();
            
            if(url === ''){
                setIsFieldEmpty(true)
            }else{
                setIsFieldEmpty(false)
                setIsLoading(true);
                const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
                const data = await res.json();
                setShortLink([...shortLink, data.result]);
                setIsLoading(false);
                setUrl('')
            }
        } catch (err) {
            console.log(err)
        } 
    }

    const copy =(code)=> {
        const copiedLink = shortLink.find(link => (link.code === code));
        navigator.clipboard.writeText(copiedLink.short_link2);
        
    }
    const deleteLink =(code)=> {
        setShortLink([...shortLink.filter(link => link.code !== code)]);
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


        {isLoading && 
            <div className='spinner-class'>
                <img src={spinner} alt='spinner'/>
            </div>
        }

        {shortLink.length ? (
                shortLink.slice(0).reverse().map(link => (
                    <div className='new-link' key={link.code}>
                        <p onClick={()=> deleteLink(link.code)}>{link.original_link}</p>
                        <div className='copy-div'>
                            <a href={`https://${link.short_link2}`} target="_blank" rel="noreferrer">{link.short_link2}</a>
                            <button onClick={()=>copy(link.code)}>Copy</button>   
                        </div>
                    </div>
                ))
            ) : ('')
        }
        </>
    )
}

export default UrlForm
