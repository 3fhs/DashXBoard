import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { Box, useTheme } from '@mui/material'

const data = [
    {
      "id": "japan",
      "color": "hsl(300, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 116
        },
        {
          "x": "helicopter",
          "y": 48
        },
        {
          "x": "boat",
          "y": 18
        },
        {
          "x": "train",
          "y": 37
        },
        {
          "x": "subway",
          "y": 6
        },
        {
          "x": "bus",
          "y": 65
        },
        {
          "x": "car",
          "y": 178
        },
        {
          "x": "moto",
          "y": 150
        },
        {
          "x": "bicycle",
          "y": 254
        },
        {
          "x": "horse",
          "y": 81
        },
        {
          "x": "skateboard",
          "y": 170
        },
        {
          "x": "others",
          "y": 180
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(13, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 143
        },
        {
          "x": "helicopter",
          "y": 75
        },
        {
          "x": "boat",
          "y": 26
        },
        {
          "x": "train",
          "y": 257
        },
        {
          "x": "subway",
          "y": 88
        },
        {
          "x": "bus",
          "y": 82
        },
        {
          "x": "car",
          "y": 126
        },
        {
          "x": "moto",
          "y": 241
        },
        {
          "x": "bicycle",
          "y": 18
        },
        {
          "x": "horse",
          "y": 51
        },
        {
          "x": "skateboard",
          "y": 236
        },
        {
          "x": "others",
          "y": 253
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(20, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 215
        },
        {
          "x": "helicopter",
          "y": 259
        },
        {
          "x": "boat",
          "y": 13
        },
        {
          "x": "train",
          "y": 61
        },
        {
          "x": "subway",
          "y": 212
        },
        {
          "x": "bus",
          "y": 243
        },
        {
          "x": "car",
          "y": 52
        },
        {
          "x": "moto",
          "y": 162
        },
        {
          "x": "bicycle",
          "y": 133
        },
        {
          "x": "horse",
          "y": 159
        },
        {
          "x": "skateboard",
          "y": 118
        },
        {
          "x": "others",
          "y": 35
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(299, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 144
        },
        {
          "x": "helicopter",
          "y": 177
        },
        {
          "x": "boat",
          "y": 117
        },
        {
          "x": "train",
          "y": 262
        },
        {
          "x": "subway",
          "y": 162
        },
        {
          "x": "bus",
          "y": 207
        },
        {
          "x": "car",
          "y": 262
        },
        {
          "x": "moto",
          "y": 53
        },
        {
          "x": "bicycle",
          "y": 39
        },
        {
          "x": "horse",
          "y": 289
        },
        {
          "x": "skateboard",
          "y": 229
        },
        {
          "x": "others",
          "y": 29
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(120, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 241
        },
        {
          "x": "helicopter",
          "y": 173
        },
        {
          "x": "boat",
          "y": 244
        },
        {
          "x": "train",
          "y": 224
        },
        {
          "x": "subway",
          "y": 183
        },
        {
          "x": "bus",
          "y": 25
        },
        {
          "x": "car",
          "y": 119
        },
        {
          "x": "moto",
          "y": 124
        },
        {
          "x": "bicycle",
          "y": 61
        },
        {
          "x": "horse",
          "y": 132
        },
        {
          "x": "skateboard",
          "y": 239
        },
        {
          "x": "others",
          "y": 91
        }
      ]
    }
  ]

export default function Line({ isDashboard = false }) {

    const theme = useTheme();

  return (
    <Box sx={{height: isDashboard ? "300px" : "75vh"}}>
        <ResponsiveLine
        data={data}
        theme={{
            "text": {
                "fontSize": 15,
                "fill": "#171616",
                "outlineWidth": 0,
                "outlineColor": "transparent"
            },
            "axis": {
                "domain": {
                    "line": {
                        "stroke": "#777777",
                        "strokeWidth": 1
                    }
                },
                "legend": {
                    "text": {
                        "fontSize": 15,
                        "fill": theme.palette.text.primary ,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                },
                "ticks": {
                    "line": {
                        "stroke": "#777777",
                        "strokeWidth": 1
                    },
                    "text": {
                        "fontSize": 11,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                }
            },
            "grid": {
                "line": {
                    "stroke": theme.palette.divider,
                    "strokeWidth": 1
                }
            },
            "legends": {
                "title": {
                    "text": {
                        "fontSize": 15,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                },
                "text": {
                    "fontSize": 15,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                },
                "ticks": {
                    "line": {},
                    "text": {
                        "fontSize": 10,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                }
            },
            "annotations": {
                "text": {
                    "fontSize": 13,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "link": {
                    "stroke": "#000000",
                    "strokeWidth": 1,
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "outline": {
                    "stroke": "#000000",
                    "strokeWidth": 2,
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "symbol": {
                    "fill": "#000000",
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                }
            },
            "tooltip": {
                "wrapper": {},
                "container": {
                    "background": "#ffffff",
                    "color": "#333333",
                    "fontSize": 12
                },
                "basic": {},
                "chip": {},
                "table": {},
                "tableCell": {},
                "tableCellValue": {}
            }
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
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
            legend: isDashboard ? "" : 'transportation',
            legendOffset: 40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? "" : 'count',
            legendOffset: -50,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
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
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </Box>
  )
}
