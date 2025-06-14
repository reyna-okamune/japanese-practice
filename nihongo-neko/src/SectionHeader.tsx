import './Header.css'
import { useNavigate } from 'react-router-dom'

function SectionHeader() {

    const navigate = useNavigate()

    const handleHomeClick = () => {
        navigate('/') // navigate to HomePageComponent
    }
    return (
        <>
            <div className='section-top'>
                <div className='section-header'>
                    <div>
                        <img src="/gym_cat.png" alt="Cat Icon Working Out" className="section-cat"/>
                    </div>

                    <div >
                        <h1 className="section-heading">Nihongo Neko</h1>
                        <h3 className="section-subheading">JPLT Study Guide</h3>
                    </div>
                </div>

                <button className='home-button' onClick={handleHomeClick}>
                    <span className="material-symbols-rounded">
                        home
                    </span>
                </button>
            </div>
        </>
    )
}

export default SectionHeader