import React from 'react';
import Iphone11pro from './IpadMacbookandiphoneprops.js/Iphone11pro';
import Macbookair from './IpadMacbookandiphoneprops.js/Macbookair';
import Ipadpro from './IpadMacbookandiphoneprops.js/Ipadpro';

import Section1 from './lower sections/Section1';
import Section2 from './lower sections/Section2';
import Section3 from './lower sections/Section3';
import Alert from './Alert'
import YoutubeVideos from '../YoutubeVideos';

const Main = () => {
    return (
        <div>
            <Alert/>
            <Ipadpro />
            <Macbookair />
            <Iphone11pro />
            <Section1 />
            <Section2 />
            <Section3 />
            <section>
                <YoutubeVideos />
            </section>
        </div>
    );
}

export default Main;
