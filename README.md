# Geo Tools

## Density

```bash
curl -X POST http://localhost:3000/density \
  -H "Content-Type: application/json" \
  -d '{"population": 100000, "area": 50}'
```

area in km²

## Scale

map distance = cm
real distance = km

```bash
curl -X POST http://localhost:3000/scale \
  -H "Content-Type: application/json" \
  -d '{"map_distance": 2, "real_distance": 10}'
```