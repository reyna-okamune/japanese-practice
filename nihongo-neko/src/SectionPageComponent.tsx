import { useNavigate, useParams } from 'react-router-dom';
import { materials } from './data/studyMaterialData';
import './SectionStyles.css'
import SectionHeader from './SectionHeader';

function SectionPageComponent() {
    const { materialRoute } = useParams();
    const navigate = useNavigate();

  const matchedMaterial = materials.find(mat => mat.route === `/${materialRoute}`);
    if (!matchedMaterial) {
        return <h2>Material Not Found</h2>;
    }

    console.log(matchedMaterial)
    return (
        <>
        < SectionHeader />
        <div className='section-title'>
            <h1>{matchedMaterial.title}</h1>
            <h2 className='topics'>
                {matchedMaterial.topics.map((item, index) => (
                    <span key={index}>{item} {index === matchedMaterial.topics.length - 1 ? "" : "&"}</span>
                ))}
            </h2>
        </div>
        </>
    )
}

export default SectionPageComponent