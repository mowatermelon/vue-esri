# Solid Edges

The solid edge rendering configuration of a symbol layer.

### Properties

| Property | Details
| --- | ---
| [color](color.md) | Color is represented as a three or four-element array.
| extensionLength | Additional length (in points) to which to extend the edge beyond its end-point. Positive only.
| size | Edge size in points, positive only
| transparency | The value has to lie between `100` (full transparency) and `0` (full opacity).
| type | The type of edge visualization. Edges of type 'solid' are rendered in a single color, unaffected by scene lighting.<br>Value of this property must be `solid`


### Example

```json
{
  "edges": {
    "type": "solid",
    "color": [
      255,
      0,
      0
    ],
    "extensionSize": 3,
    "size": 0.75,
    "transparency": 10
  }
}
```

