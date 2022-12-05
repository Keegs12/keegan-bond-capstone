import React from "react";
import GameCard from "../../components/GameCard/GameCard";
import { Link } from "react-router-dom";
function HomePage(props) {
    return (
        <div>
            <section className="card-holder">
                <Link className="card" to="/LoL">
                    <GameCard />
                </Link>
                <GameCard />
                <GameCard />
            </section>
        </div>
    );
}

export default HomePage;
