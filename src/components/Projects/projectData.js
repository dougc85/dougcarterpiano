// Remember to use ChatGPT to change Bandcamp's html embed code into a React component (JSX)!

export const projects = [
    {
        albumTag: (
            <iframe
                style={{ border: 0, width: 200, height: 200 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=1435303434/size=large/bgcol=ffffff/linkcol=f171a2/minimal=true/transparent=true/"
                seamless
                title="Vintage Christmas by Andrée Belle"
            >
            <a href="https://andreebelle.bandcamp.com/album/vintage-christmas">
                Vintage Christmas by Andrée Belle
            </a>
            </iframe>
        ),
        name: "Vintage Christmas",
        artist: 'Andrée Belle',
        description: "Arrangements by Andrée and Tim Conley; featuring a diverse array of musicians, w/ me on Piano",
        link: 'https://andreebelle.bandcamp.com/album/vintage-christmas',
        releaseDate: 'November 7, 2025',
    },
    {
        albumTag: (
            <iframe
                style={{ border: 0, width: 200, height: 200 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=1564454768/size=large/bgcol=ffffff/linkcol=f171a2/minimal=true/transparent=true/"
                seamless
                title="Silver Street by Jacob Wendt"
            >
            <a href="https://jacobwendt.bandcamp.com/album/silver-street">
                Silver Street by Jacob Wendt
            </a>
            </iframe>
        ),
        name: "Silver Street",
        artist: 'Jacob Wendt',
        description: "Compositions & drums by Jacob; Tenor Sax - Jimmy Emerzian, Trumpet - Harry Ostrander, Bass - David Reynoso, Piano - Me",
        link: 'https://jacobwendt.bandcamp.com/album/silver-street',
        releaseDate: 'October 18, 2024',
    },
    {
        name: "www.tunepicker.app",
        artist: 'Doug Carter (as web developer)',
        description: "I built this web app to help musicians pick tunes on gigs and in practice sessions. It picks recently learned songs frequently to help reinforce them, and then also mixes in older songs to keep them fresh. It also suggests keys to play the songs in to reinforce playing everything in all 12 keys.",
        link: 'https://www.tunepicker.app',
        releaseDate: 'January 23, 2023',
        image: "/images/tunepicker.png",
    },
    {
        name: "Songs From the Playground",
        artist: 'Jazzy Ash',
        description: "Arrangements by Ashli St. Armant & me; vocals - Ash, piano - me",
        link: 'https://us.yotoplay.com/products/jazzy-ash-songs-from-the-playground',
        releaseDate: 'Summer 2021',
        image: "/images/playground.jpg",
    },
    {
        name: "I Was Here",
        artist: 'Ryan Rost',
        description: "Compositions and Bass by Ryan; 1st album by the Apropos a'GoGo trio (Peter Buck on drums, me on piano)",
        link: 'https://ryanrost.bandcamp.com/album/i-was-here',
        releaseDate: 'October 29, 2020',
        albumTag: (
            <iframe
                style={{ border: 0, width: 200, height: 200 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=2604498395/size=large/bgcol=ffffff/linkcol=f171a2/minimal=true/transparent=true/"
                seamless
                title="I Was Here by Ryan Rost"
            >
                <a href="https://ryanrost.bandcamp.com/album/i-was-here">I Was Here by Ryan Rost</a>
            </iframe>
        )
    },
    {
    name: "The Return to Queendom",
    artist: 'Andrée Belle',
    description: "Compositions by Andrée and Tim Conley; featuring a diverse array of musicians, w/ me on Wurlitzer",
    link: 'https://andreebelle.bandcamp.com/album/the-return-to-queendom',
    releaseDate: 'March 8, 2019',
    albumTag: (
        <iframe
            style={{ border: 0, width: 200, height: 200 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=1740877584/size=large/bgcol=ffffff/linkcol=f171a2/minimal=true/transparent=true/"
            seamless
            title="The Return to Queendom by Andrée Belle"
        >
        <a href="https://andreebelle.bandcamp.com/album/the-return-to-queendom">
            The Return to Queendom by Andrée Belle
        </a>
        </iframe>
    )
    }
]