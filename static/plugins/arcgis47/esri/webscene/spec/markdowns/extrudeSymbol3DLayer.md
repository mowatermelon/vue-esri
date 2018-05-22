# ExtrudeSymbol3DLayer

ExtrudeSymbol3DLayer is used to render Polygon geometries by extruding them upward from the ground, creating a 3D volumetric object.

### Properties

| Property | Details
| --- | ---
| edges | Specifies an edge visualization style.<br>Must be one of the following values:<ul><li>[edges_shaded](edges_shaded.md)<br>The shaded edge rendering configuration of a symbol layer.</li><li>[edges_solid](edges_solid.md)<br>The solid edge rendering configuration of a symbol layer.</li></ul>
| enable | Type:`Boolean`
| [material](material.md) | The material used to shade the geometry.
| size | Extrusion height in meters.
| type | Specifies the type of symbol used.<br>Value of this property must be `Extrude`


### Example

```json
{
  "symbolLayer": {
    "type": "Extrude",
    "material": {
      "color": [
        255,
        0,
        0
      ]
    },
    "size": 250
  }
}
```

