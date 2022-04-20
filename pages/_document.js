import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                {/*<meta name="viewport" content="width=device-width, initial-scale=1"/>*/}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@lahlinave" />
                <meta name="twitter:creator" content="@lahlinave" />
                <meta property="og:title" content="RePop" />
                <meta property="og:description" content="tactility. connection. transmutation. repopulate your mind." />
                <meta property="og:image" content="https://www.repopnft.art/twitter-share.jpeg" />

                <meta
                    name="description"
                    content="RePop NFT on Stargaze"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"/>
                
                        {/* <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap" rel="stylesheet" />  */}
                        
<link href="https://fonts.googleapis.com/css2?family=Lexend+Mega:wght@200&display=swap" rel="stylesheet" />

                
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
)
}
