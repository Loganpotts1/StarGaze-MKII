import React from "react";
import Axios from "axios";
import Navbar from "../components/Navbar";

export default function MarsPage() {
    const theme = window.sessionStorage.getItem("theme");
    const [isMounted, setIsMounted] = React.useState(false);
    const [photos,setPhotos] = React.useState([]);
    const [search, setSearch] = React.useState("");


    document.querySelector("body").setAttribute("data-theme", theme);


    function getImage(query) {
        Axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos", {params: {sol: query, api_key: "DEMO_KEY"}})

        .then(res => {
            console.log(res);

            res.data.photos.map((data,index) => {
                let imageInfo = {
                    key: index,
                    highres: data.img_src
                };

                if (index<50)   {
                    setPhotos(prevPhotos => [...prevPhotos, imageInfo]);
                }

            })

        });

    }


    function handleSearch(event) {
        console.log(search);
        setPhotos([]);
        getImage(`${search}`);
        setSearch("");
        event.preventDefault();
    }


    if (!isMounted) {
        getImage('2500');
    }


    React.useEffect(() => {
        setIsMounted(true);
    }, []);


    return (
        <div className="container container--mars-page">



        <Navbar />



        <main className="content">

            <h2 className="heading-2 content__heading">

            </h2>


            <form className="searchbar" onSubmit={handleSearch}>

                <div className="searchbar__box">
                    <input className="searchbar__input" name="searchbar-input" type="text" autoComplete="off" value={search} onChange={(event) => {setSearch(event.target.value)}}/>
                    <label className="searchbar__label" htmlFor="searchbar-input">
                        <span className="searchbar__content">
                            2500
                        </span>
                    </label>
                </div>

            </form>

            <div className="header">

            </div>


            {isMounted && photos.map(photo => (

                <div className="grid-item">
                    <img className="grid-image" alt="mars-rover" key={photo.key} src={photo.highres} onClick={()=> window.open(`${photo.highres}`, "_blank")}></img>
                </div>

            ))}


        </main>



        </div>
    );
}