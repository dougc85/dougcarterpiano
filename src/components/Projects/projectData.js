// Remember to use ChatGPT to change Bandcamp's html embed code into a React component (JSX)!

export const projects = [
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
        description: "Compositions & drums by Jacob; Jimmy Emerzian - Tenor Sax, Harry Ostrander - Trumpet, David Reynoso - Bass, Me - Piano",
        link: 'https://jacobwendt.bandcamp.com/album/silver-street',
        releaseDate: 'October 18, 2024',
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
            src="https://bandcamp.com/EmbeddedPlayer/album=2604498395/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
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
    description: "Compositions & vocals by Andrée; featuring a diverse array of musicians",
    link: 'https://andreebelle.bandcamp.com/album/the-return-to-queendom',
    releaseDate: 'March 8, 2019',
    albumTag: (
        <iframe
            style={{ border: 0, width: 200, height: 200 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=1234567890/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
            seamless
            title="The Return to Queendom by Andrée Belle"
        >
            <a href="https://andreebelle.bandcamp.com/album/the-return-to-queendom">The Return to Queendom by Andrée Belle</a>
</iframe>
    )
  }
]