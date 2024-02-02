import { ResponsiveBar } from '@nivo/bar'

const MyResponsiveBar = () => {
  return (
    <div style={{width: '350px', height: '320px', margin: '0', background: '#FFFFFF'}}>
      <ResponsiveBar
        data={
          [
            {
              "country": "AD",
              "hot dog": 89,
              "hot dogColor": "hsl(238, 70%, 50%)",
              "burger": 62,
              "burgerColor": "hsl(67, 70%, 50%)",
              "sandwich": 124,
              "sandwichColor": "hsl(172, 70%, 50%)"
            },
            {
              "country": "AE",
              "hot dog": 128,
              "hot dogColor": "hsl(151, 70%, 50%)",
              "burger": 13,
              "burgerColor": "hsl(112, 70%, 50%)",
              "sandwich": 43,
              "sandwichColor": "hsl(117, 70%, 50%)"
            }
          ]
        }
        keys={[
            'hot dog',
            'burger',
            'sandwich'
        ]}
        indexBy="country"
        margin={{ top: 30, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: '#FFFFFF',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: '#FFFFFF',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
      />
    </div>
  )
}

export default MyResponsiveBar;