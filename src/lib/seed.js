export function seedDatabase(firebase) {
  const products = [
    {
      genre: "House",
      price: "1",
      id: "1",
      title: "Deep-House Vibes",
      img: "https://previews.123rf.com/images/fredep/fredep1702/fredep170200013/71867562-set-of-8-bit-game-style-pixel-art-icon-.jpg",
      audioUrl:
        "https://www.fesliyanstudios.com/musicfiles/2019-12-11_-_Retro_Platforming_-_David_Fesliyan/2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3",
      moreInfo: "Deep-House Vibes is a ...",
    },
    {
      genre: "Future-Bass",
      price: "1",
      id: "2",
      title: "Trippy Future Bass",
      img: "https://i.pinimg.com/564x/2e/2b/24/2e2b242b623144dbb9d8dc4b061bb38f.jpg",
      audioUrl:
        "https://www.fesliyanstudios.com/musicfiles/2015-09-25_-_Old_Video_Game_Music_1_-_David_Fesliyan.mp3",
      moreInfo: "Trippy Future Bass is a...",
    },
    {
      genre: "House",
      price: "1",
      id: "3",
      title: "Groove House",
      img: "https://image.shutterstock.com/image-vector/set-coin-monster-head-sword-260nw-1781244794.jpg",
      audioUrl:
        "https://www.fesliyanstudios.com/musicfiles/2020-10-27_-_Ethereal_-_www.FesliyanStudios.com_Steve_Oxen/2020-10-27_-_Ethereal_-_www.FesliyanStudios.com_Steve_Oxen.mp3",
      moreInfo: "Groove House is a...",
    },
    {
      genre: "Minimal",
      price: "1",
      id: "4",
      title: "Space Groove",
      img: "https://cdna.artstation.com/p/assets/images/images/000/613/868/large/hendry-roesly-chr8bit.jpg?1428583453",
      audioUrl:
        "https://www.fesliyanstudios.com/musicfiles/2019-09-29_-_Silly_Feet_-_FesliyanStudios.com_-_David_Renda.mp3",
      moreInfo: "Space Groove is a...",
    },
    {
      genre: "Minimal",
      price: "1",
      id: "5",
      title: "8bit Minimal",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQro2PZt3E9Ayfdn_Itm1PPvCeRpPUMTgbg&usqp=CAU",
      audioUrl:
        "https://www.fesliyanstudios.com/musicfiles/2021-03-17_-_JPOP_-_www.FesliyanStudios.com_Steve_Oxen/2021-03-17_-_JPOP_-_www.FesliyanStudios.com_Steve_Oxen.mp3",
      moreInfo: "8bit Minimal is a...",
    },

    {
      genre: "Techno",
      price: "1",
      id: "6",
      title: "8bit Techno",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5H_4rRdbTpZt4HoxOI1FHdt7NqtF-0S_zpw&usqp=CAU",
      audioUrl:
        "https://www.fesliyanstudios.com/musicfiles/2020-04-24_-_Arcade_Kid_-_FesliyanStudios.com_-_David_Renda/2020-04-24_-_Arcade_Kid_-_FesliyanStudios.com_-_David_Renda.mp3",
      moreInfo: "8bit Techno is a..",
    },
  ];
  for (let k = 0; k < products.length; k++) {
    firebase.firestore().collection("products").add(products[k]);
  }
}
