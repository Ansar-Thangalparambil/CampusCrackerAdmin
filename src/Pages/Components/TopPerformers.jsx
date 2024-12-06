import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

function TopPerformers(pfp) {

// Data for each category
const dataSeries = [
      { data: [9], color: '#FF9BAA', id: 'aa',label:'Arithmetic Aptitude' },
      { data: [7],  color: '#D12938', id: 'va',label:'Verbal Ability' },
      { data: [8], color: '#AA0211', id: 'lr',label:'Logical Reasoning' },
      { data: [6],  color: '#6F0000', id: 'vr',label:'Verbal Reasoning' },
      { data: [10],  color: '#3F0000', id: 'nvr',label:'Non - verbal Reasoning' },
    ];
    
    // X-axis categories (since each series only has one data point, these will align visually)
    // const categories = ['Exam Categories'];

  return (
    <>

        <div className="col-md-6">

            <div className="performer-graph d-flex justify-content-between">
            
                <div className="performer d-flex align-items-start mt-4">

                    <div className='pfp-rank'>
                        <div className="performer-pfp">
                            <img src={pfp.pfp} alt="Profile_Picture" />
                        </div>
                        
                        <div className="performer-rank d-flex align-items-center justify-content-center">
                            <span>1</span>
                        </div>
                    </div>

                    <div className="performer-info d-flex flex-column ms-2">
                        <span className='perf-name'>deee.ke</span>
                        <span className='infos'>BCA</span>
                        <span className='infos'>Third year</span>
                    </div>

                </div>
            
                {/* Graph */}
                <div className="graph">
                    <BarChart
                        className='p-0 m-0 barchart'
                        width={260}
                        height={250}
                        series={dataSeries} // Provide all series here
                        xAxis={[
                                {
                                data: ['Categories'], // Categories for the x-axis
                                scaleType: 'band',
                                // label: 'Exam Categories',
                                },
                            ]}
                        // yAxis={[{ label: 'Marks' }]} // Y-axis with label
                        slotProps={{
                            legend: { hidden: true },
                        }}
                    />
                </div>

            </div>

        </div>

        <div className="col-md-6">

            <div className="performer-graph d-flex justify-content-between">
        
                <div className="performer d-flex align-items-start mt-4">
        
                    <div className='pfp-rank'>
                        <div className="performer-pfp">
                            <img src={pfp.pfp} alt="Profile_Picture" />
                        </div>
                        <div className="performer-rank d-flex align-items-center justify-content-center">
                            <span>2</span>
                        </div>
                    </div>
        
                    <div className="performer-info d-flex flex-column ms-2">
                        <span className='perf-name'>deee.ke</span>
                        <span className='infos'>BCA</span>
                        <span className='infos'>Third year</span>
                    </div>
        
                </div>
                
                {/* Graph */}
                <div className="graph">
                    <BarChart
                        className='p-0 m-0 barchart'
                        width={260}
                        height={250}
                        series={dataSeries} // Provide all series here
                        xAxis={[
                                {
                                data: ['Categories'], // Categories for the x-axis
                                scaleType: 'band',
                                // label: 'Exam Categories',
                                },
                            ]}
                        // yAxis={[{ label: 'Marks' }]} // Y-axis with label
                        slotProps={{
                            legend: { hidden: true },
                        }}
                    />
                </div>
        
            </div>
            

        </div>

    </>
  )
}

export default TopPerformers




// export default function StudentMarksBarChart() {
//   return (
//     
//   );
// }
