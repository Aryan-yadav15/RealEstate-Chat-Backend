import SearchBar from "../../components/searchbar/Searchbar"
import "./Homepage.scss"

function Homepage() {
    return (
        <div className="homepage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">
                        Real Estate & Get Your Dream Plac
                    </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, illum repellat ea rerum magni minus libero enim repudiandae nobis suscipit deserunt similique quae alias a minima atque tempore commodi nulla!</p>
                    <div className="searchHolder">
                        <SearchBar />
                        <div className="boxes">
                            <div className="box">
                                <h1>16+</h1>
                                <h2>Years of experiance</h2>
                            </div>
                            <div className="box">
                                <h1>100+</h1>
                                <h2>Happy clients</h2>
                            </div>
                            <div className="box">
                                <h1>1000+</h1>
                                <h2>Properties</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png " alt="" />
            </div>
        </div>
    )
}

export default Homepage