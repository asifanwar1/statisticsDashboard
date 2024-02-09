import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart, pieArcLabelClasses  } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import Box from '@mui/material/Box';

const LineChartData = () => {



  return (
    <>
        <Box sx={{ width: '100%',}}>
      
    

    <LineChart
          height= {250}
          // width= {250}
        sx={{
        '& .MuiLineElement-root': {
            stroke: '#7F7FD5',
        },
        '& .MuiMarkElement-root': {
            fill: '#E786D7',
            stroke: 'none',
        },
      }}
      xAxis={[{ data: ['31/01', '01/02', '02/02', '03/02', '04/02', '05/02', '06/02', '07/02'], scaleType: 'point' }]}
      series={[
          {
              data: [1, 2, 0.5, 3, 0.5, 1.8, 2.8, 1,],
              showMark: ({ index }) => index % 1 === 0,
            },
        ]}
        
        />
   
        </Box>

      
    </>
  )
}




const data = [
  { value: 86, label: 'Mobile' },
  { value: 14, label: 'Desktop' },
];

const size = {
  height: 210,
};



const PieChartData = () => {



  return (
    <>
        <Box sx={{ width: '100%',}}>
        <PieChart
        colors={['#7F7FD5', '#E786D7',]}
      series={[
        {
          arcLabel: (item) => `${item.value}%`,
          arcLabelMinAngle: 45,
          data,
          paddingAngle: 10,
          innerRadius: 5,
          startAngle: 80,
          endAngle: 600,
        },
      ]}
      slotProps={{
        legend: {
          labelStyle: {
            fontSize: 14,
            fill: '#CACACA',
          },
        },
      }}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}
      {...size}
    />
   
        </Box>

      
    </>
  )
}







const BarChartData = () => {



  return (
    <>
      <Box sx={{ width: '100%',}}>
      
      <BarChart
      colors={['#7F7FD5', '#E786D7',]}
      series={[
        { data: [3, 4, 1, 6, 5], stack: 'A',  },
        { data: [4, 3, 1, 5, 8], stack: 'A',  },
        { data: [4, 2, 5, 4, 1], stack: 'B',  },
        { data: [2, 8, 1, 3, 1], stack: 'B',  },
        { data: [10, 6, 5, 8, 9],  },
      ]}
      height={200}
    />

      </Box>
      
    </>
  )
}

export {LineChartData, PieChartData, BarChartData}