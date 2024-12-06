import { PieChart } from '@mui/x-charts/PieChart';
import React from 'react'

function Chart() {

    const data1 = [
        { label: 'Arithmetic Aptitude', value: 400, color:'#FF9BAA' },
        { label: 'Verbal Ability', value: 300, color:'#D12938' },
        { label: 'Logical Reasoning', value: 300, color:'#AA0211' },
        { label: 'Verbal Reasoning', value: 200, color:'#6F0000' },
        { label: 'Non - verbal Reasoning', value: 500, color:'#3F0000' }
      ];

  return (
    <div className='pie-chart d-flex p-3'>

        <div className="col-md-6">

            {/* Legends */}
            <div className="legends d-flex flex-column gap-3">

                <div className="legend d-flex gap-3">
                    <div className="squarebox sq1"></div>

                    <div className="leg-name d-flex align-items-center">
                        <span>Arithmetic Aptitude</span>
                    </div>
                </div>

                <div className="legend d-flex gap-3">
                    <div className="squarebox sq2"></div>

                    <div className="leg-name d-flex align-items-center">
                        <span>Verbal Ability</span>
                    </div>
                </div>

                <div className="legend d-flex gap-3">
                    <div className="squarebox sq3"></div>

                    <div className="leg-name d-flex align-items-center">
                        <span>Logical Reasoning</span>
                    </div>
                </div>

                <div className="legend d-flex gap-3">
                    <div className="squarebox sq4"></div>

                    <div className="leg-name d-flex align-items-center">
                        <span>Verbal Reasoning</span>
                    </div>
                </div>

                <div className="legend d-flex gap-3">
                    <div className="squarebox sq5"></div>

                    <div className="leg-name d-flex align-items-center">
                        <span>Non - verbal Reasoning</span>
                    </div>
                </div>

            </div>

        </div>

        <div className="col-md-6">

            {/* Pie Chart */}
            <div className="chart">

                <PieChart
                    className='pie'
                    series={[
                        {
                            innerRadius: 30,
                            outerRadius: 90,
                            paddingAngle: 4,
                            cornerRadius: 5,
                            startAngle: -45,
                            endAngle: 225,
                            cx: 150,
                            // cy: 150,
                            data: data1,
                            
                        },
                    ]}
                    height={200}
                    slotProps={{
                        legend: { hidden: true },
                    }}  
                />

            </div>

        </div>

    </div>
  )
}

export default Chart