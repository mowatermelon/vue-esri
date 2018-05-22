# FillSymbol3DLayer

FillSymbol3DLayer is used to render the surfaces of flat 2D Polygon geometries and 3D volumetric meshes in a SceneView.

### Properties

| Property | Details
| --- | ---
| edges | Specifies an edge visualization style.<br>Must be one of the following values:<ul><li>[edges_shaded](edges_shaded.md)<br>The shaded edge rendering configuration of a symbol layer.</li><li>[edges_solid](edges_solid.md)<br>The solid edge rendering configuration of a symbol layer.</li></ul>
| enable | Type:`Boolean`
| [material](material.md) | The material used to shade the geometry.
| [outline](outline.md) | The outline of the symbol layer.
| type | Specifies the type of symbol used.<br>Value of this property must be `Fill`


### Example

```json
{
  "symbolLayers": [
    {
      "type": "Fill",
      "material": {
        "color": [
          255,
          0,
          0
        ]
      }
    }
  ]
}
```

