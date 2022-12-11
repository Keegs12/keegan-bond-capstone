import React from "react";
import GameCard from "../../components/GameCard/GameCard";

function HomePage(props) {
    return (
        <section className="card-holder">
            <GameCard title="League of Legends" game="LoL" wallpaper={"LoL"} />
            <GameCard title="Valorant" game="Val" wallpaper={"Val"} />
        </section>
    );
}

export default HomePage;
