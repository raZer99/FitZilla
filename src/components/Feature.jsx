import React from "react";
import Featurebox from "./Featurebox";
import fimage1 from './images/1.svg';
import fimage2 from './images/2.svg';
import fimage3 from './images/3.svg';
import fimage4 from './images/4.svg';

function Feature(){
    return (
        <div id='features'>
            <h1>FEATURES</h1>
            <div className='a-container'>
                <Featurebox image={fimage1} title="Personalized Guidance"
                desc="Exercise recommendations tailored to individual needs and goals. Real-time feedback on form and technique." />
                <Featurebox image={fimage2} title="AI Coaching Platform"
                desc="Personalized workout plans and schedules. Motivation, Support,  Progress tracking and performance insights." />
                <Featurebox image={fimage3} title="Workout Monitoring" 
                desc="Tracking workout metrics (duration, intensity, calories) Identifying patterns and trends in workout data." />
                <Featurebox image={fimage4} title="Nutrition Planner"
                desc="Personalized  meal  plans  based  on  individual needs  and  preferences. Guidance on healthy  eating  habits." />
            </div>
        </div>
    )
}

export default Feature;