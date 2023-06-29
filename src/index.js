import React from 'react';
import ReactDOMClient from 'react-dom/client';

const click = console.log('click')
const text = 'react the best'
const elements = (<div className='name'>
<h1>{text}</h1>
<input placeholder={text}
onClick={click}/>

</div>)


const app = ReactDOMClient.createRoot( document.getElementById('root'))

app.render(elements)