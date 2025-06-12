import { useNavigate } from 'react-router-dom';

interface HomeSectionOptionProps {
    id: number;
    title: string;
    topics: string [];
    route: string;
}


function HomeSectionOption({ title, topics, route }: HomeSectionOptionProps) {
    const navigate = useNavigate();


    return (
        <>
            <div>
                <button onClick={() => navigate(route)} className="home-option-button">
                    <h1>{title}</h1>
                    <p>{topics}</p>
                    <p>{route}</p>
                </button>
            </div>
        </>
    )

}

export default HomeSectionOption