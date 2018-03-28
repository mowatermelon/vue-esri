# FillSymbol3DLayer

FillSymbol3DLayer is used to render the surfaces of flat 2D Polygon geometries and 3D volumetric meshes in a SceneView.

### Properties

| Property | Details
| --- | ---
| enable | Type:`Boolean`
| [material](material.md) | The material used to shade the geometry.
| [outline](outline.md) | The outline of the point, line or polygon.
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

