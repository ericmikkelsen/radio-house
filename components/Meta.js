import Head from 'next/head'



export default (props) => {
    const title = 'Radio House'
    const color = '#333'
return (
    <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="/static/main.css"/>
        <title>{title}</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/static/meta/apple-touch-icon.png"/>
        <link rel="shortcut icon" href="/static/meta/favicon.svg" sizes="any" type="image/svg+xml"/>
        <link rel="manifest" href="/static/meta/manifest.json"/>
        <link rel="mask-icon" href="/static/meta/safari-pinned-tab.svg" color={color}/>

        <meta name="apple-mobile-web-app-title" content={title}/>
        <meta name="application-name" content={title}/>
        <meta name="msapplication-TileColor" content={color}/>
        <meta name="msapplication-config" content="/static/meta/browserconfig.xml"/>
        <meta name="theme-color" content={color}/>
        
        <svg className="Icons" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
            <defs>
                <path id="add-icon" d="M 3 1.5 L 3 3 L 1.5 3 L 1.5 5 L 3 5 L 3 6.5 L 5 6.5 L 5 5 L 6.5 5 L 6.5 3 L 5 3 L 5 1.5 L 3 1.5 z " />
                <path id="pause-icon" d="M 1 1.5 L 1 6.5 L 3 6.5 L 3 1.5 L 1 1.5 z M 5 1.5 L 5 6.5 L 7 6.5 L 7 1.5 L 5 1.5 z " />
                <path id="play-icon" d="m 2.5,1.5 0,5 4,-2.5 -4,-2.5 z" />
                <path id="next-icon" d="M 2 2.125 L 2 5.875 L 4 4.625 L 4 5.875 L 7 4 L 4 2.125 L 4 3.375 L 2 2.125 z "/>
                <path id="previous-icon" d="M 6,2.125 6,5.875 4,4.625 4,5.875 1,4 4,2.125 4,3.375 6,2.125 Z"/>
            </defs>
        </svg>
    </Head>
)}