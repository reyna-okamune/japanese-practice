export interface studyMaterial {
    id: number;
    title: string;
    topics: string [];
    image: string;
    route: string;
}

export const materials: studyMaterial[] = [ 
    {
        id: 1,
        title: "N5 Tutor Lessons",
        topics: ["Vocabulary", "Grammar"],
        image: '/cat_bubbles.png',
        route: "/tutoringN5"
    },
    {
        id: 2,
        title: "Try! Japanese Language Proficiency Test N5",
        topics: ["Vocabulary", "Grammar"],
        image: '/TryN5BookImg.png',
        route: "/tryN5"
    },
    {
        id: 3,
        title: "Nihongo Challenge N4 and N5 Kanji",
        topics: ["Alphabet"],
        image: '/N4N5KanjiImg.png',
        route: "/kanjiN4N5"
    },
    
]