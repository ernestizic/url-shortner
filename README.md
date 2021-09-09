# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty


### Links

- Solution URL: https://www.frontendmentor.io/solutions/javascript-reactjs-css-bootstrap-m9Hcu8M0F
- Live Site URL: https://url-cropper.netlify.app/

## My process

### Built with

- Flexbox
- Mobile-first workflow
- Bootstrap
- [React](https://reactjs.org/) - JS library

### What I learned

How to copy text to clipboard
```js
    const copy =(code)=> {
        const copiedLink = shortLink.find(link => (link.code === code));
        navigator.clipboard.writeText(copiedLink.short_link2);
    }
```

## Author

- Website - [Ernest Isaac] https://ernestizic.netlify.app
- Frontend Mentor - [@ernestizic] https://www.frontendmentor.io/profile/ernestizic
- Twitter - [@ernestizic] https://www.twitter.com/ernestizic
