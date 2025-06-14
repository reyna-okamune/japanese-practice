import HomeHeader from './HomeHeader'
import './HomeStyles.css'
import { materials } from './data/studyMaterialData'
import HomeSectionOption from './HomeSectionOption';


function HomePageComponent() {

    console.log(materials)
    return (
        <>
            < HomeHeader />

            <div className='home-options'>
                {
                    materials.map((material) => {
                        return (
                            <HomeSectionOption
                            key={material.id}
                            id={material.id}
                            title={material.title}
                            topics={material.topics}
                            image={material.image}
                            route={material.route}
                            />
                        );
                    })
                }
            </div>

            
        </>
    )
}

export default HomePageComponent