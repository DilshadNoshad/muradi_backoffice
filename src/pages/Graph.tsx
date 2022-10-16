
import React from 'react'
import BarChart from '../components/graphs/BarChart';
import LineChart from '../components/graphs/LineChart';
import PieChart from '../components/graphs/PieChart';
const Graph: React.FC = () => {
    return (
        <>
            <div style={{ height: 400, backgroundColor: "white", borderRadius: "4px", margin: "10px" }}>
                <BarChart />
            </div>
            <div style={{ height: 400, backgroundColor: "white", borderRadius: "4px", margin: "10px" }}>
                <PieChart />
            </div>
            <div style={{ height: 400, backgroundColor: "white", borderRadius: "4px", margin: "10px" }}>
                <LineChart />
            </div>


        </>
    )
}

export default Graph;