import React from "react";
import man from '../img/man.png'

export default function About() {
    return (
        <section className="about">
            <div className="container">
                <img src={man} alt="" className="about__img" />
                <div className="about__inner">
                    <h1 className="about__title">Don’t squeeze in a sedan when you could relax in a van.</h1>
                    <p className="about__smile">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                        (Hitch costs extra 😉)</p>
                    <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                    <div className="about__box">
                        <h2>Your destination is waiting.<br />
                            Your van is ready.</h2>
                        <button className="about__btn">Explore our vans</button>
                    </div>
                </div>
            </div>
        </section>
    )
}