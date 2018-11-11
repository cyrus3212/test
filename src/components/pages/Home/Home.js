import React from 'react';
import { MDBDataTable } from 'mdbreact';

// Reusable components
import BlockText from '../../reusable/BlockText';

// Mock Data
import { getMockData } from '../../../data/mockData';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="container user-list-table">
                <BlockText
                    title="Users"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing"
                />
                <MDBDataTable striped bordered small data={getMockData()} />
            </div>
        );
    }
}

export default Home;
