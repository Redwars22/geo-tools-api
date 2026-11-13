# Geo Tools API

A small Express API for common geographic calculations: map scale and population density.

## Overview

This project exposes a few simple HTTP endpoints to calculate:

- map scale from a distance on the map and the corresponding real-world distance
- population density from population and area

## Requirements

- Node.js
- npm
- Express

## Installation

```bash
npm install
```

## Running the server

```bash
npm start
```

The app runs on:

```text
http://localhost:3000
```

## Endpoints

### GET /

Welcome route.

```bash
curl http://localhost:3000/
```

Example response:

```text
Hello World!
```

### POST /scale

Calculates scale using:

```text
scale = (real_distance_km * 100000) / map_distance
```

The code converts the real distance from kilometers to centimeters before dividing by the map distance.

Request body:

```json
{
  "map_distance": 2,
  "real_distance": 10
}
```

Example request:

```bash
curl -X POST http://localhost:3000/scale \
  -H "Content-Type: application/json" \
  -d '{"map_distance": 2, "real_distance": 10}'
```

Example response:

```json
{
  "distance_on_map": 2,
  "distance_real": 10,
  "scale": 500000,
  "unity": "cm"
}
```

If either field is missing, the API responds with:

```json
{ "error": "Faltando distâncias" }
```

with an HTTP status of 400.

### POST /density

Calculates population density using:

```text
density = population / area
```

Request body:

```json
{
  "population": 100000,
  "area": 50
}
```

Example request:

```bash
curl -X POST http://localhost:3000/density \
  -H "Content-Type: application/json" \
  -d '{"population": 100000, "area": 50}'
```

Example response:

```json
{
  "density": 2000,
  "population": 100000,
  "area": 50,
  "unity": "square-km"
}
```

If either value is missing, the API responds with:

```json
{ "error": "Faltando área ou população" }
```

with an HTTP status of 400.

## Notes

- `map_distance` and `real_distance` are expected as numbers in the request body.
- `area` is treated as the area in square kilometers.
- The app uses `express.json()` to parse JSON request bodies.

## Project structure

```text
.
├── index.js
├── package.json
├── README.md
└── node_modules/
```
