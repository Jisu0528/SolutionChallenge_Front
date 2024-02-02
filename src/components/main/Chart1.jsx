import { ResponsiveLine } from '@nivo/line'
import styled from 'styled-components';

// 차트 예시
const MyResponsiveLine = () => {
  return (
    <Wrapper>
      <Title>Chart Title1</Title>
      <div style={{width: '1100px', height: '320px', margin: '0 auto'}}>
        <ResponsiveLine
          data={[
            {
              "id": "japan",
              "color": "hsl(264, 70%, 50%)",
              "data": [{"x": "plane","y": 56},
                {"x": "helicopter","y": 174},
                {"x": "boat","y": 210},
                {"x": "train","y": 192},
                {"x": "subway","y": 244},
                {"x": "bus","y": 188},
                {"x": "car","y": 212},
                {"x": "moto","y": 111},
                {"x": "bicycle","y": 191},
                {"x": "horse","y": 178},
                {"x": "skateboard","y": 75},
                {"x": "others","y": 293}
              ]
            },
            {
              "id": "france",
              "color": "hsl(98, 70%, 50%)",
              "data": [
                {"x": "plane","y": 138},
                {"x": "helicopter","y": 284},
                {"x": "boat","y": 68},
                {"x": "train","y": 55},
                {"x": "subway","y": 264},
                {"x": "bus","y": 239},
                {"x": "car","y": 241},
                {"x": "moto","y": 140},
                {"x": "bicycle","y": 273},
                {"x": "horse","y": 10},
                {"x": "skateboard","y": 238},
                {"x": "others","y": 230}
              ]
            }
          ]}
          margin={{ top: 10, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
              stacked: true,
              reverse: false
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'transportation',
              legendOffset: 36,
              legendPosition: 'middle'
          }}
          axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'count',
              legendOffset: -40,
              legendPosition: 'middle'
          }}
          colors={{ scheme: 'nivo' }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
              {
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: 'left-to-right',
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: 'circle',
                  symbolBorderColor: 'rgba(0, 0, 0, 1)',
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemBackground: 'rgba(0, 0, 0, 1)',
                              itemOpacity: 1
                          }
                      }
                  ]
              }
          ]}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1100px;
  height: 400px;
  margin: 0;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  background-color: #FFFFFF;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding: 20px;
  color: #3D3D3D;
`

export default MyResponsiveLine;