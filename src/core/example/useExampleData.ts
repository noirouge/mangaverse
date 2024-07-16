export default function useExampleData(){
    const trendingCarrouselData = [
        {
        id: 1,
        views: 100000,
        stars: 4.5,
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


    return{
        trendingCarrouselData
    };
}