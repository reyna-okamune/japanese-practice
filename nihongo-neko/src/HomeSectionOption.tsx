import { useNavigate } from 'react-router-dom';
import './HomeStyles.css'

interface HomeSectionOptionProps {
    id: number;
    title: string;
    topics: string [];
    image: string;
    route: string;
}


function HomeSectionOption({ title, topics, image, route }: HomeSectionOptionProps) {
    const navigate = useNavigate();

    const renderedTopics = topics.map((item, index) => (

        <span key={index}>{item} {index === topics.length - 1 ? "" : "&"}</span>
    ));
    return (
        <>
            <div>
                <button onClick={() => navigate(route)} className="home-option-button">
                    <div className='img-container'>
                        <img src={image} alt="Book Cover for Listed Topic"/>
                    </div>

                    <div className='title-container'>
                        <h1>{title}</h1>
                        <h2 className="topics">{renderedTopics}</h2>
                    </div>
                </button>
            </div>
        </>
    )

}

export default HomeSectionOption