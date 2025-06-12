import './Header.css'
function HomeHeader() {
    return (
        <>
            <div className='home-top'>
                <button className='home-button'>
                    <span className="material-symbols-rounded">
                        home
                    </span>
                </button>
            </div>


            <div className='home-title'>
                <img src="./public/gym_cat.png" alt="Cat Icon Working Out" className="home-cat"/>
                <h1 className="heading">Nihongo Neko</h1>
                <h3 className="subheading">JPLT Study Guide</h3>
            </div>
        </>
    )
}

export default HomeHeader