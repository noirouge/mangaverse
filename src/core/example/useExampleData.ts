export default function useExampleData(){
    const trendingCarrouselData = [
        {
        id: 1,
        views: 100000,
        stars: 3.5,
        title: "Kimetsu No Yaiba",
        chapters: 130,
        description: "Tanjiro el cabezon que mata demonios con su hermana la cuero, y dos panas, El Rubito, un pana ma' palomo que el diablo que nama mete mano cuando se emborracha, y el maldito loco del jabali, un pana que se come lo hierro con cara de maricon. Los 4 tendran que pelear contra Maicol Jazon para que su hermana deje de ser cuero, con el patron con la respiracion de la bomba. Pila de pelea con machetes en san juan contra pila de Baka a las tres de la noche, ya tu sabe klk, le llega maldita yegua?",
        tags: [{name: "Manga", color: '#1464FF'}, {name: "Seinen", color: "red"}, {name: "On Going", color: "green"}],
        portrait: "/src/assets/imgs/portadas/demon-slayer.jpg",
        cover: "/src/assets/imgs/trending-carrousel-photo.jpg",
    },
    {
        id: 2,
        views: 900000,
        stars: 4,
        title: "Naruto",
        chapters: 700,
        description: "Un chamaquito al que le mataron a los papas se volvio una zorra que quiere ser presidente",
        tags: [{name: "Manga", color: '#1464FF'}, {name: "Shonen", color: "orange"}, {name: "Finished", color: "red"}],
        portrait: "/src/assets/imgs/portadas/naruto.jpg",
        cover: "/src/assets/imgs/covers/naruto.jpg",
    },
    {
        id: 3,
        views: 500000,
        stars: 5,
        title: "Berserk",
        chapters: 165,
        description: "La creta que desarrollo tiene este pana",
        tags: [{name: "Manga", color: '#1464FF'}, {name: "Seinen", color: "red"}, {name: "On Going", color: "green"}],
        portrait: "/src/assets/imgs/portadas/berserk.jpg",
        cover: "/src/assets/imgs/covers/berserk.jpg",
    },
    {
        id: 4,
        views: 300000,
        stars: 4.5,
        title: "Hunter X Hunter",
        chapters: 120,
        description: "Un chamaquito sale a buscar a su papa que se fue a comprar cigarros y nunca volvio",
        tags: [{name: "Manga", color: '#1464FF'}, {name: "Shonen", color: "orange"}, {name: "On Going", color: "green"}],
        portrait: "/src/assets/imgs/portadas/hxh.webp",
        cover: "/src/assets/imgs/covers/hxh.jpg",
    },
    {
        id: 5,
        views: 10000,
        stars: 3,
        title: "Uzumaki",
        chapters: 10,
        description: "El mejor viaje de tu vida",
        tags: [{name: "Manga", color: '#1464FF'}, {name: "Seinen", color: "red"}, {name: "Finished", color: "red"}],
        portrait: "/src/assets/imgs/portadas/uzumaki.jpg",
        cover: "/src/assets/imgs/covers/uzumaki.jpg",
    },
];

const continueReadingData = [
    {
        id: 1,
        title: 'SOLO LEVELING',
        chapter: 3,
        pages: 26,
        page: 4,
        preview: '/src/assets/imgs/reading/sololeveling.jpg',
    },
    {
        id: 2,
        title: 'ONE PIECE',
        chapter: 1,
        pages: 20,
        page: 1,
        preview: '/src/assets/imgs/reading/onepiece.jpg',
    },
    {
        id: 3,
        title: 'COILING DRAGON',
        chapter: 12,
        pages: 34,
        page: 16,
        preview: '/src/assets/imgs/reading/coilingdragon.jpg',
    },
    {
        id: 4,
        title: 'DRAGON BALL SUPER',
        chapter: 145,
        pages: 34,
        page:30,
        preview: '/src/assets/imgs/reading/dragonball.jfif',
    },
];

const newChaptersData = [
    {
      id: 1,
      title: 'Dragon Ball',
      chapter: 24,
      date: '2024-07-18T14:46:01.773Z',
      portrait: '/src/assets/imgs/portadas/dragon-ball.png',
    },
    {
      id: 2,
      title: 'Dragon Ball Super',
      chapter: 10,
      date: '2024-07-18T14:47:12.573Z',
      portrait: '/src/assets/imgs/portadas/dragon-ball-super.webp',
    },
    {
      id: 3,
      title: 'Berserk',
      chapter: 23,
      date: '2024-07-18T14:48:24.921Z',
      portrait: '/src/assets/imgs/portadas/berserk.jpg',
    },
    {
      id: 4,
      title: 'Coiling Dragon',
      chapter: 5,
      date: '2024-07-18T14:49:36.144Z',
      portrait: '/src/assets/imgs/portadas/coiling-dragon.jpg',
    },
    {
      id: 5,
      title: 'DanMachi',
      chapter: 18,
      date: '2024-07-18T14:50:47.234Z',
      portrait: '/src/assets/imgs/portadas/danmachi.webp',
    },
    {
      id: 6,
      title: 'Demon Slayer',
      chapter: 15,
      date: '2024-07-18T14:51:58.382Z',
      portrait: '/src/assets/imgs/portadas/demon-slayer.jpg',
    },
    {
      id: 7,
      title: 'Tales of Demons and Gods',
      chapter: 32,
      date: '2024-07-18T14:53:09.497Z',
      portrait: '/src/assets/imgs/portadas/demons-and-gods.jpg',
    },
    {
      id: 8,
      title: 'Fullmetal Alchemist',
      chapter: 62,
      date: '2024-07-18T14:54:20.692Z',
      portrait: '/src/assets/imgs/portadas/fullmetal-alchemist.jpg',
    },
    {
      id: 9,
      title: 'Hunter x Hunter',
      chapter: 30,
      date: '2024-07-18T14:55:31.822Z',
      portrait: '/src/assets/imgs/portadas/hxh.webp',
    },
    {
      id: 10,
      title: 'Naruto',
      chapter: 72,
      date: '2024-07-18T14:56:42.923Z',
      portrait: '/src/assets/imgs/portadas/naruto.jpg',
    },
    {
      id: 11,
      title: 'One Piece',
      chapter: 100,
      date: '2024-07-18T14:57:54.067Z',
      portrait: '/src/assets/imgs/portadas/one-piece.webp',
    },
    {
      id: 12,
      title: 'One Punch Man',
      chapter: 28,
      date: '2024-07-18T14:59:05.221Z',
      portrait: '/src/assets/imgs/portadas/one-punch-man.webp',
    },
    {
      id: 13,
      title: 'Solo Leveling',
      chapter: 110,
      date: '2024-07-18T15:00:16.342Z',
      portrait: '/src/assets/imgs/portadas/solo-leveling.webp',
    },
    {
      id: 14,
      title: 'Uzumaki',
      chapter: 4,
      date: '2024-07-18T15:01:27.458Z',
      portrait: '/src/assets/imgs/portadas/uzumaki.jpg',
    },
    {
      id: 15,
      title: 'Vagabond',
      chapter: 82,
      date: '2024-07-18T15:02:38.612Z',
      portrait: '/src/assets/imgs/portadas/vagabond.webp',
    },
    {
      id: 16,
      title: 'Vinland Saga',
      chapter: 50,
      date: '2024-07-18T15:03:49.753Z',
      portrait: '/src/assets/imgs/portadas/vinland-saga.webp',
    },
  ];

    return{
        trendingCarrouselData,
        continueReadingData,
        newChaptersData,
    };
}