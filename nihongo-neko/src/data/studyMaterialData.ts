export interface studyMaterial {
    id: number;
    title: string;
    topics: string [];
    route: string;
}

export const materials: studyMaterial[] = [ 
    {
        id: 1,
        title: "N5 Tutor Lessons",
        topics: ["Vocabulary", "Grammar"],
        route: "/tutoringN5"
    },
    {
        id: 2,
        title: "Try! Japanese Language Proficiency Test N5",
        topics: ["Vocabulary", "Grammar"],
        route: "/tryN5"
    },
    {
        id: 3,
        title: "Nihongo Challenge N4 and N5 Kanji",
        topics: ["Alphabet"],
        route: "/kanjiN4N5"
    },
    
]