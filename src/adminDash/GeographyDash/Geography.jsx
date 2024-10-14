import React from 'react'
import { ResponsiveChoropleth } from '@nivo/geo'
import { Box } from '@mui/material'
import { geo } from './world_countries'
import { useTheme } from '@emotion/react'

const data = [
    {
      "id": "AFG",
      "value": 458502
    },
    {
      "id": "AGO",
      "value": 644311
    },
    {
      "id": "ALB",
      "value": 536860
    },
    {
      "id": "ARE",
      "value": 19477
    },
    {
      "id": "ARG",
      "value": 414075
    },
    {
      "id": "ARM",
      "value": 760780
    },
    {
      "id": "ATA",
      "value": 560627
    },
    {
      "id": "ATF",
      "value": 259320
    },
    {
      "id": "AUT",
      "value": 528196
    },
    {
      "id": "AZE",
      "value": 282840
    },
    {
      "id": "BDI",
      "value": 845513
    },
    {
      "id": "BEL",
      "value": 61491
    },
    {
      "id": "BEN",
      "value": 831193
    },
    {
      "id": "BFA",
      "value": 147330
    },
    {
      "id": "BGD",
      "value": 161687
    },
    {
      "id": "BGR",
      "value": 330921
    },
    {
      "id": "BHS",
      "value": 836542
    },
    {
      "id": "BIH",
      "value": 356234
    },
    {
      "id": "BLR",
      "value": 347602
    },
    {
      "id": "BLZ",
      "value": 5694
    },
    {
      "id": "BOL",
      "value": 478529
    },
    {
      "id": "BRN",
      "value": 46363
    },
    {
      "id": "BTN",
      "value": 571342
    },
    {
      "id": "BWA",
      "value": 303117
    },
    {
      "id": "CAF",
      "value": 820374
    },
    {
      "id": "CAN",
      "value": 269361
    },
    {
      "id": "CHE",
      "value": 352781
    },
    {
      "id": "CHL",
      "value": 99787
    },
    {
      "id": "CHN",
      "value": 387982
    },
    {
      "id": "CIV",
      "value": 723438
    },
    {
      "id": "CMR",
      "value": 683727
    },
    {
      "id": "COG",
      "value": 823788
    },
    {
      "id": "COL",
      "value": 168449
    },
    {
      "id": "CRI",
      "value": 539904
    },
    {
      "id": "CUB",
      "value": 452512
    },
    {
      "id": "-99",
      "value": 472788
    },
    {
      "id": "CYP",
      "value": 563686
    },
    {
      "id": "CZE",
      "value": 57577
    },
    {
      "id": "DEU",
      "value": 786083
    },
    {
      "id": "DJI",
      "value": 836030
    },
    {
      "id": "DNK",
      "value": 810628
    },
    {
      "id": "DOM",
      "value": 778840
    },
    {
      "id": "DZA",
      "value": 752453
    },
    {
      "id": "ECU",
      "value": 503867
    },
    {
      "id": "EGY",
      "value": 281006
    },
    {
      "id": "ERI",
      "value": 432169
    },
    {
      "id": "ESP",
      "value": 28664
    },
    {
      "id": "EST",
      "value": 113245
    },
    {
      "id": "ETH",
      "value": 29217
    },
    {
      "id": "FIN",
      "value": 303122
    },
    {
      "id": "FJI",
      "value": 418770
    },
    {
      "id": "FLK",
      "value": 139656
    },
    {
      "id": "FRA",
      "value": 160591
    },
    {
      "id": "GAB",
      "value": 494991
    },
    {
      "id": "GBR",
      "value": 484828
    },
    {
      "id": "GEO",
      "value": 450174
    },
    {
      "id": "GHA",
      "value": 558044
    },
    {
      "id": "GIN",
      "value": 248683
    },
    {
      "id": "GMB",
      "value": 151929
    },
    {
      "id": "GNB",
      "value": 416756
    },
    {
      "id": "GNQ",
      "value": 782840
    },
    {
      "id": "GRC",
      "value": 869987
    },
    {
      "id": "GTM",
      "value": 390718
    },
    {
      "id": "GUY",
      "value": 148700
    },
    {
      "id": "HND",
      "value": 207501
    },
    {
      "id": "HRV",
      "value": 271753
    },
    {
      "id": "HTI",
      "value": 674770
    },
    {
      "id": "HUN",
      "value": 753785
    },
    {
      "id": "IDN",
      "value": 850773
    },
    {
      "id": "IND",
      "value": 165124
    },
    {
      "id": "IRL",
      "value": 835145
    },
    {
      "id": "IRN",
      "value": 334689
    },
    {
      "id": "IRQ",
      "value": 599067
    },
    {
      "id": "ISL",
      "value": 115443
    },
    {
      "id": "FAL", // فلسطين 
      "value": 309702
    },
    {
      "id": "ITA",
      "value": 889276
    },
    {
      "id": "JAM",
      "value": 464997
    },
    {
      "id": "JOR",
      "value": 940852
    },
    {
      "id": "JPN",
      "value": 812173
    },
    {
      "id": "KAZ",
      "value": 30424
    },
    {
      "id": "KEN",
      "value": 967863
    },
    {
      "id": "KGZ",
      "value": 838143
    },
    {
      "id": "KHM",
      "value": 958039
    },
    {
      "id": "OSA",
      "value": 367213
    },
    {
      "id": "KWT",
      "value": 186099
    },
    {
      "id": "LAO",
      "value": 428091
    },
    {
      "id": "LBN",
      "value": 667760
    },
    {
      "id": "LBR",
      "value": 530912
    },
    {
      "id": "LBY",
      "value": 279937
    },
    {
      "id": "LKA",
      "value": 837336
    },
    {
      "id": "LSO",
      "value": 165877
    },
    {
      "id": "LTU",
      "value": 997043
    },
    {
      "id": "LUX",
      "value": 761016
    },
    {
      "id": "LVA",
      "value": 677263
    },
    {
      "id": "MAR",
      "value": 991582
    },
    {
      "id": "MDA",
      "value": 981605
    },
    {
      "id": "MDG",
      "value": 481460
    },
    {
      "id": "MEX",
      "value": 53646
    },
    {
      "id": "MKD",
      "value": 637142
    },
    {
      "id": "MLI",
      "value": 573077
    },
    {
      "id": "MMR",
      "value": 387236
    },
    {
      "id": "MNE",
      "value": 321794
    },
    {
      "id": "MNG",
      "value": 793288
    },
    {
      "id": "MOZ",
      "value": 647015
    },
    {
      "id": "MRT",
      "value": 39937
    },
    {
      "id": "MWI",
      "value": 485127
    },
    {
      "id": "MYS",
      "value": 291268
    },
    {
      "id": "NAM",
      "value": 440785
    },
    {
      "id": "NCL",
      "value": 849882
    },
    {
      "id": "NER",
      "value": 747026
    },
    {
      "id": "NGA",
      "value": 547105
    },
    {
      "id": "NIC",
      "value": 135828
    },
    {
      "id": "NLD",
      "value": 611078
    },
    {
      "id": "NOR",
      "value": 373511
    },
    {
      "id": "NPL",
      "value": 620498
    },
    {
      "id": "NZL",
      "value": 409748
    },
    {
      "id": "OMN",
      "value": 11411
    },
    {
      "id": "PAK",
      "value": 243925
    },
    {
      "id": "PAN",
      "value": 148866
    },
    {
      "id": "PER",
      "value": 538953
    },
    {
      "id": "PHL",
      "value": 404964
    },
    {
      "id": "PNG",
      "value": 652854
    },
    {
      "id": "POL",
      "value": 881452
    },
    {
      "id": "PRI",
      "value": 669008
    },
    {
      "id": "PRT",
      "value": 830658
    },
    {
      "id": "PRY",
      "value": 501497
    },
    {
      "id": "QAT",
      "value": 80062
    },
    {
      "id": "ROU",
      "value": 433821
    },
    {
      "id": "RUS",
      "value": 624927
    },
    {
      "id": "RWA",
      "value": 442468
    },
    {
      "id": "ESH",
      "value": 922454
    },
    {
      "id": "SAU",
      "value": 142189
    },
    {
      "id": "SDN",
      "value": 323923
    },
    {
      "id": "SDS",
      "value": 704223
    },
    {
      "id": "SEN",
      "value": 677747
    },
    {
      "id": "SLB",
      "value": 111151
    },
    {
      "id": "SLE",
      "value": 925834
    },
    {
      "id": "SLV",
      "value": 656980
    },
    {
      "id": "ABV",
      "value": 856167
    },
    {
      "id": "SOM",
      "value": 451807
    },
    {
      "id": "SRB",
      "value": 200632
    },
    {
      "id": "SUR",
      "value": 818351
    },
    {
      "id": "SVK",
      "value": 336162
    },
    {
      "id": "SVN",
      "value": 495291
    },
    {
      "id": "SWZ",
      "value": 928229
    },
    {
      "id": "SYR",
      "value": 759609
    },
    {
      "id": "TCD",
      "value": 691808
    },
    {
      "id": "TGO",
      "value": 555045
    },
    {
      "id": "THA",
      "value": 905967
    },
    {
      "id": "TJK",
      "value": 973424
    },
    {
      "id": "TKM",
      "value": 13149
    },
    {
      "id": "TLS",
      "value": 81778
    },
    {
      "id": "TTO",
      "value": 732598
    },
    {
      "id": "TUN",
      "value": 236369
    },
    {
      "id": "TUR",
      "value": 429372
    },
    {
      "id": "TWN",
      "value": 179907
    },
    {
      "id": "TZA",
      "value": 893446
    },
    {
      "id": "UGA",
      "value": 797092
    },
    {
      "id": "UKR",
      "value": 745763
    },
    {
      "id": "URY",
      "value": 974612
    },
    {
      "id": "USA",
      "value": 117575
    },
    {
      "id": "UZB",
      "value": 656568
    },
    {
      "id": "VEN",
      "value": 153357
    },
    {
      "id": "VNM",
      "value": 996033
    },
    {
      "id": "VUT",
      "value": 526550
    },
    {
      "id": "PSE",
      "value": 799902
    },
    {
      "id": "YEM",
      "value": 475640
    },
    {
      "id": "ZAF",
      "value": 767791
    },
    {
      "id": "ZMB",
      "value": 589061
    },
    {
      "id": "ZWE",
      "value": 465031
    },
    {
      "id": "KOR",
      "value": 910588
    }
  ]

export default function Geography({isDashboard = false}) {
    
    const theme = useTheme();

  return (
    <Box sx={{height: isDashboard ? "480px" : "75vh", border: isDashboard ? "" : `2px solid ${theme.palette.text.primary}`}}>
    <ResponsiveChoropleth
        data={data}
        features= {geo.features}
        theme={{
            "text": {
                "fontSize": 15,
                "fill": theme.palette.text.primary ,
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
                    "stroke": theme.palette.text.primary,
                    "strokeWidth": 1,
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "outline": {
                    "stroke": theme.palette.text.primary,
                    "strokeWidth": 2,
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "symbol": {
                    "fill": theme.palette.text.primary,
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
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionType="equirectangular"
        projectionScale={170}
        projectionTranslation={[ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        graticuleLineColor={theme.palette.text.primary}
        borderWidth={1.5}
        borderColor="#152538"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: theme.palette.text.primary,
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: theme.palette.text.primary,
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            },
            {
                id: 'gradient',
                type: 'linearGradient',
                colors: [
                    {
                        offset: 0,
                        color: theme.palette.text.primary
                    },
                    {
                        offset: 100,
                        color: theme.palette.text.primary
                    }
                ]
            }
        ]}
        fill={[
            {
                match: {
                    id: 'CAN'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'CHN'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'ATA'
                },
                id: 'gradient'
            }
        ]}
        legends={isDashboard ? [] : [
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -70,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 25,
                itemDirection: 'left-to-right',
                itemTextColor: theme.palette.text.primary,
                itemOpacity: 0.85,
                symbolSize: 16,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: theme.palette.text.primary,
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
