import { useEffect, useRef } from 'react';
import { transform } from 'ol/proj';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import './App.css';

function App() {
	const container = useRef();
	const map = useRef();
	console.log(x)
	// centers to london by default
	const center = transform([0.123, 53], 'EPSG:4326', 'EPSG:3857');

	/*
	*
	Render the map
	*
	*/
	useEffect(() => {
		if (!container.current || map.current) return;
		map.current = new Map({
			layers: [new TileLayer({ source: new OSM() })],
			view: new View({
				zoom: 12,
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
	);
}

export default App;
