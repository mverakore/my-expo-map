import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import { MapContainer, TileLayer, Popup, Marker, Polyline, useMap, CircleMarker } from 'react-leaflet'
import style from '../../styles/Home.module.css'
import styled from 'styled-components'

// const StyledPopup = styled(Popup)`
//   .leaflet-popup-content-wrapper, .leaflet-popup-tip {
//     background: #3cd4b5;
//     box-shadow: 0;
//     border-radius: 10px;
//   }
// `

const StyledImg = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
`

const styledMarker = styled(Marker)`
`
export default function Map() {
    const position = [49.28594, -123.11129];

    const green = { color: '#176c40' };
    const red = { color: 'red' };
    const blue = { color: '#2853d7' };

    const stations = [
        {
            name: 'WaterFront',
            position: [49.28524524981317, -123.11434751643503],
            startpoint: "You are here",
            destination: null
        },
        {
            name: 'Burrard',
            position: [49.285581150633966, -123.12012245876285],
            destination: null,

        },
        {
            name: 'Granville',
            position: [49.28276795358473, -123.1164699145821],
            destination: null,

        },
        {
            name: 'Stadium-Chinatown',
            position: [49.28010484687972, -123.11012142014103],
            destination: null,

        },
        {
            name: 'Main Street-Sciene World',
            position: [49.273374980784865, -123.10037145876296],
            destination: null,

        }, {
            name: 'Commercial-Broadway',
            position: [49.262721001091556, -123.06927941643552],
            destination: null,

        },
        {
            name: 'Nanaimo',
            position: [49.24844626535717, -123.05598167410812],
            destination: null,

        }, {
            name: '29th Avenue',
            position: [49.24436337925635, -123.04537402992739],
            destination: null,

        }, {
            name: 'Joyce-Collingwood ',
            position: [49.23855530902799, -123.0317256145831],
            destination: null,

        },
        {
            name: 'Patterson',
            position: [49.22991271599505, -123.01265107225555],
            destination: null,

        },
        {
            name: 'Metrotown',
            position: [49.22593989446889, -123.00385127225569],
            destination: null,

        },
        {
            name: 'Royal Oak',
            position: [49.220193228996386, -122.98845204229738],
            destination: null,

        },
        {
            name: 'Edmonds',
            position: [49.21254265709066, -122.95914504342],
            destination: null,

        }, {
            name: '22nd Street',
            position: [49.200068725477024, -122.94922489130668],
            destination: null,

        }, {
            name: 'New Westminster',
            position: [49.20159918383558, -122.91263972992837],
            destination: null,

        },
        {
            name: 'Columbia',
            position: [49.204943945073374, -122.90607708574763],
            destination: null,

        },
        {
            name: 'Scott Road',
            position: [49.204575904842045, -122.87402738018886],
            destination: null,

        }, {
            name: 'Gateway',
            position: [49.1991136014707, -122.85066387225632],
            destination: null,

        },
        {
            name: 'Surrey Central',
            position: [49.18971392944762, -122.84792071458409],
            destination: null,

        }, {
            name: 'King George',
            position: [49.1829310367517, -122.84473292807587],
            destination: null,

        }, {
            name: 'Columbia',
            position: [49.204943945073374, -122.90607708574763],
            destination: null,

        }, {
            name: 'Sapperton',
            position: [49.224860238697396, -122.88949270294468],
            destination: null,

        },
        {
            name: 'Braid',
            position: [49.23268213068468, -122.88456287225554],
            destination: null,

        },
        {
            name: 'Lougheed Town Centre',
            position: [49.24875892482227, -122.89717730665],
            destination: null
        },
        {
            name: 'Production Way - University',
            position: [49.25367827613695, -122.91868207173422],
            destination: "You have arrived at Production Way - University",

        },



    ];

    const polyline = [
        [49.28524524981317, -123.11434751643503], //Waterfront 
        [49.285581150633966, -123.12012245876285], //Burrard 
        [49.28276795358473, -123.1164699145821], // Granville 
        [49.28010484687972, -123.11012142014103], //  Stadium-Chinatown
        [49.273374980784865, -123.10037145876296], // Main Street–Science World
        [49.262721001091556, -123.06927941643552], //Commercial-Broadway
        [49.24844626535717, -123.05598167410812], //Nanaimo
        [49.24436337925635, -123.04537402992739], //29th Avenue 
        [49.23855530902799, -123.0317256145831], //Joyce-Collingwood 
        [49.22991271599505, -123.01265107225555], //Patterson
        [49.22593989446889, -123.00385127225569], //Metrotown
        [49.220193228996386, -122.98845204229738], //Royal Oak
        [49.21254265709066, -122.95914504342], // Edmonds 
        [49.200068725477024, -122.94922489130668], //22nd Street 
        [49.20159918383558, -122.91263972992837], //New Westminster
        [49.204943945073374, -122.90607708574763], //Columbia
        [49.204575904842045, -122.87402738018886],  //Scott Road
        [49.1991136014707, -122.85066387225632], //Gateway
        [49.18971392944762, -122.84792071458409], // Surrey Central
        [49.1829310367517, -122.84473292807587], //King George 
    ]


    const secondpolyline = [
        [49.204943945073374, -122.90607708574763], //Columbia
        [49.224860238697396, -122.88949270294468], //Sapperton
        [49.23268213068468, -122.88456287225554], //Braid
        [49.24875892482227, -122.89717730665], //Lougheed Town Centre
        [49.25367827613695, -122.91868207173422] //Production Way - University 
    ]


    return (
        <MapContainer className={style.map} center={position} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {stations.map((o, i) =>
                <Marker position={o.position} key={i}>
                    <Popup>
                        <StyledImg>
                            <img style={{ width: 30, height: 30 }} src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/51/light-rail_1f688.png'/>
                        </StyledImg>
                        {o.name}
                    </Popup>
                </Marker>
            )};

            <CircleMarker pathOptions={red} center={secondpolyline[4]} radius={20}>
                {stations.map((o, i) => <Popup key={i}>
                    <StyledImg>
                        <img style={{ width: 50, height: 50 }} src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/118/clapping-hands-sign_1f44f.png' />
                    </StyledImg>{o.destination}</Popup>)}
            </CircleMarker>

            <CircleMarker pathOptions={green} center={polyline[0]} radius={20}>
                <Popup>
                    <StyledImg>
                        <img style={{ width: 50, height: 50 }}src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/114/man-running_1f3c3-200d-2642-fe0f.png' />
                        You are here.
                    </StyledImg>
                </Popup>
            </CircleMarker>

            <Polyline pathOptions={green} positions={polyline} />
            {/* {data.map((o,i) => <Polyline pathOptions={green} positions={[o.position]} key={i}/>)} */}
            <Polyline pathOptions={blue} positions={secondpolyline} />
        </MapContainer>
    )
}
