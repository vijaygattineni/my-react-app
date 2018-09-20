import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div>
            <h5>About Web Series</h5>
                <p>web series is a series of scripted or non-scripted videos, generally in episodic form, released on the Internet and part of the web television medium, which first emerged in the late 1990s and become more prominent in the early 2000s (decade). A single instance of a web series program can be called an episode or "webisode", however the latter term is not often used. In general, web series can be watched on a range of platforms, including desktop, laptop, tablets and smartphones. They can also be watched on television.
                In 2013, streaming video website Netflix earned the first Primetime Emmy Award nominations for original online-only web television at the 65th Primetime Emmy Awards. Three of its web series, House of Cards, Arrested Development, and Hemlock Grove, earned nominations that year.[1]
                As of 2016, there are a number of awards that have been established to award excellence in web series production, including the Streamys, Webbys, IAWTV, and Indie Series Awards; there are also several web series festivals, most notably in Los Angeles and Vancouver. Most major award ceremonies have also created web series and digital media award categories, including the Emmy Awards and the Canadian Screen Awards.
                </p>
                <NavLink to="/series">Search Series</NavLink>
            </div>
        )
    }
}

export default About;