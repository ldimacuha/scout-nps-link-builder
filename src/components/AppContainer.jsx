import React from 'react';

import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';

class AppContainer extends React.Component {
    render() {
        const staffList = [
            'Keeano Canzon',
            'Venessa Kohl',
            'Alex Hood',
            'Zacc Thomas',
            'Peter Bainard',
            'Mark Davey'
        ];

        const serviceTypeList = [
            'Support',
            'Implementation',
            'Training'
        ];

        return (
            <React.Fragment>
                <Header />
                <div className="container">
                    <Body staffList={staffList}  serviceTypeList={serviceTypeList}/>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default AppContainer;