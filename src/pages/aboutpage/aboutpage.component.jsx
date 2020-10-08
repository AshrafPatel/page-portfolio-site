import React from "react";
import "./aboutpage.style.scss";

const AboutPage = () => (
    <div>
        <h1>About Me</h1>
        <div class="AboutContainer">
            <p>Hello I am <span class="name">Ashraf Patel</span>, I am an individual who has <span class="identify">graduated</span> in:
            </p>
            <ol>
                <li>Business Studies</li>
                <li>Computer Programming</li>
            </ol>
            <p>Currently I am <span class="identify">pursuing:</span></p>
            <ol>
                <li>Computer Software Engineering at Free Code Camp</li>
                <li>CS certificate from Harvard University for Web and Mobile</li>
            </ol>
            <p>My future plans are to <span class="identify">learn:</span></p>
            <ol>
                <li>DevOps</li>
                <li>Data Science and Machine Learning</li>
                <li>Python Automation</li>
                <li>Data Visualisation & Data Scraping</li>
                <li>Java EE</li>
            </ol>
            <p>
            <span class="disappear">In my free time I like to build upon my knowledge of computer programming, perfect my skills and look into abstract ideas. 
            I have taught students to program in Java, Python, JavaScript, C (Arduino) and Scratch.</span>
            </p>
        </div>
    </div>
)

export default AboutPage;