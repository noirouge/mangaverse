export default function useExampleData(){
    const trendingCarrouselData = [
        {
        id: 1,
        views: 100000,
        stars: 4.5,
        title: "Kimetsu No Yaiba",
        chapters: 130,
        description: "Tanjiro el cabezon que mata demonios con su hermana la cuero",
        tags: [{name: "Manga", color: 'blue'}, {name: "Seinen", color: "red"}, {name: "On Going", color: "green"}],
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
        tags: [{name: "Manga", color: 'blue'}, {name: "Shonen", color: "orange"}, {name: "Finished", color: "red"}],
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
        tags: [{name: "Manga", color: 'blue'}, {name: "Seinen", color: "red"}, {name: "On Going", color: "green"}],
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
        tags: [{name: "Manga", color: 'blue'}, {name: "Shonen", color: "orange"}, {name: "On Going", color: "green"}],
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
        tags: [{name: "Manga", color: 'blue'}, {name: "Seinen", color: "red"}, {name: "Finished", color: "red"}],
        portrait: "/src/assets/imgs/portadas/uzumaki.jpg",
        cover: "/src/assets/imgs/covers/uzumaki.jpg",
    },
];


    return{
        trendingCarrouselData
    };
}