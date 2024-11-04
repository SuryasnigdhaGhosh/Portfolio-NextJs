// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const artworkCard = [
    {
      id: 0,
      image: "artworks/artwork1.jpg",
    },
    {
      id: 1,
      image: "artworks/artwork2.jpg",
    },
    {
      id: 2,
      image: "artworks/artwork4.jpg",
    },
    {
      id: 3,
      image: "artworks/artwork3.jpg",
    },
  ]
  export default function handler(req, res) {
    res.status(200).json(artworkCard)
  }
  