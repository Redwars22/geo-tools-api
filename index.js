const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

function calculateScale(distance_map, distance_real) {
  let real_in_cm = Number(distance_real) * 100000;
  
  return real_in_cm / Number(distance_map);
}

function calculateDensity(population, area){
	return Number(population) / Number(area);
}

app.post('/scale', (req, res) => {
	let distance_map = req.body.map_distance;
	let distance_real = req.body.real_distance;
	
	if(distance_map == undefined || distance_real == undefined){
		return res.status(400).send({ error: "Faltando distâncias" });
	}
	
	let scale = calculateScale(distance_map, distance_real);
	
	res.send({
		distance_on_map: distance_map,
		distance_real: distance_real,
		scale: scale,
		unity: "cm"
	})
});

app.post('/density', (req, res) => {
	let area = req.body.area;
	let population = req.body.population;
	
	if(population == undefined || area == undefined){
		return res.status(400).send({ error: "Faltando área ou população" });
	}
	
	let density = calculateDensity(population, area);
	
	res.send({
		density: density,
		population: population,
		area: area,
		unity: "square-km"
	})
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Geo Tools API running on port: ${port}`)
})
