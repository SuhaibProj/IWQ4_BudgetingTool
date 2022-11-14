import React from 'react'
import { useEffect, useRef } from 'react';
import { transform } from 'ol/proj';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import { fromLonLat, transform } from 'ol/proj';
import { Point } from 'ol/geom';
import { Feature } from 'ol';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import Text from 'ol/style/Text';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';

import pin from '../../assets/pointer.png';
import flag from '../../assets/flag.png';

export const FuelHelperPage = () => {
	const mockMarkers = [
		{ price: 12, location: [0.123, 53.005] },
		{ price: 13, location: [0.129, 53.004] },
		{ price: 14, location: [0.11, 53.003] },
	];

	const container = useRef();
		const map = useRef();
		const center = transform([0.123, 53], 'EPSG:4326', 'EPSG:3857');

		useEffect(() => {
			if (!container.current || map.current) return;
			const currentLocation = new Feature(new Point(fromLonLat([0.123, 53])));
			currentLocation.setStyle(
				new Style({
					image: new Icon({
						src: pin,
						scale: 0.1,
					}),
				})
			);
	
			const labelStyle = new Style({
				image: new Icon({
					src: flag,
					scale: 0.08,
				}),
				text: new Text({
					font: '16px Calibri,sans-serif',
					overflow: true,
					fill: new Fill({
						color: '#fff',
					}),
					stroke: new Stroke({
						color: '#000',
						width: 15,
					}),
					text: '$ 26.23',
					offsetY: 40,
				}),
			});
	
			var markers = new VectorLayer({
				source: new VectorSource(),
				style: function (feature) {
					labelStyle.getText().setText(feature.get('name'));
					return [labelStyle];
				},
			});
			// markers.getSource().addFeature(currentLocation);
			mockMarkers.map((m) => {
				const a = new Feature({
					geometry: new Point(fromLonLat(m.location)),
					name: `$ ${m.price}`,
				});
				markers.getSource().addFeature(a);
			});
	
			map.current = new Map({
				layers: [new TileLayer({ source: new OSM() }), markers],
				view: new View({
					zoom: 15,
					center,
				}),
				controls: [],
				target: container.current,
			});
		}, [container.current]);
		
		return (
			<>
				<div ref={container} className='map'></div>
				<div className='map-controls p-4'>
					<div className='me-3'>
						<div class='input-group input-group-lg'>
							<input
								class='form-control shadow border-dark'
								placeholder='Enter postal code'
							/>
							<div class='search'>< SearchRoundedIcon class='searchIcon'/></div>
						</div>
					</div>

					<div>
						<div class='input-group'>
							<div class='btn-group btn-group-lg bg-white shadow' role='group'>
								<input type='radio' class='btn-check' checked />
								<label class='btn btn-outline-dark'>Diesel</label>
								<input type='radio' class='btn-check' />
								<label class='btn btn-outline-dark'>Petrol</label>
								<input type='radio' class='btn-check' />
								<label class='btn btn-outline-dark'>Electric</label>
								
							</div>
						</div>
					</div>
				</div>
				<div className='navigation p-4'>
					<button type='button' class='btn  btn-light mb-3 shadow-sm border-dark'>
						<i class='bi bi-info-lg fs-5'></i>
					</button>
					<button type='button' class='btn  btn-light mb-3 shadow-sm border-dark'>
						<i class='bi bi-people-fill fs-5'></i>
					</button>
				</div>
			</>
	)
}
