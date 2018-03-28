
# ArcGIS web scene specification

### Definition

Specification for the ArcGIS web scene document format.  
Documentation generated from schema is available publicly at [developers.arcgis.com/web-scene-specification/](https://developers.arcgis.com/web-scene-specification/)


### Folders

* [src](./src/) folder contains all the web scene schemas.
* [markdowns](./markdowns) folder contains the generated documentation. (Each subschema generates a doc markdown).



### Contributing

Details in
[Web Map Specification Workflow](https://devtopia.esri.com/WebGIS/webmap-spec/wiki/Specification-Workflow).

1. Create an issue that explains your proposal, with some initial mock of spec if possible
2. Once the proposal is commonly agreed, and a [version milestone](https://devtopia.esri.com/Zurich-R-D-Center/webscene-spec/milestones) is agreed and set
   * Create a branch named `proposals/<proposal-title>` off `master`, with the suggested changes in schema, including changed schema files and updated markdowns. (requires [schema-tooling](https://devtopia.esri.com/dyla8445/schema-tooling/) for markdown generation and validation). (If you're not familiar with json-schema, look for a schema person to create the schema representation)
   * Create a PR (usually against `master` branch), assign to same milestone as issue
   * Continue discussion on PR, review and refine 
3. Once agreement is reached, send PR to spec owners for merge
4. Communicate change to stakeholders, close issue


#### Tooling
[Schema-tooling repo](https://devtopia.esri.com/dyla8445/schema-tooling/) contains various tools for schema and document validation, and markdown generation, and infos on [deploying doc](https://devtopia.esri.com/dyla8445/schema-tooling/wiki/Deploying-to-Developers-Site)



#### Version / Releases
* webscene-spec is versioned as `major.minor`, e.g. `1.5`
* major number denotes a breaking change: `2.x` web scenes cannot be read by a `1.x` client, and must be rejected
* to indicate patch releases between versions, webscene-spec releases are numbered with an additional patch number `z`, (`x.y.z`)
* [latest](https://devtopia.esri.com/Zurich-R-D-Center/webscene-spec/releases/latest) release
* [all releases](https://devtopia.esri.com/Zurich-R-D-Center/webscene-spec/releases)
* versions < 1.5 are not schema-based



#### Branching
* Milestones for [past](https://devtopia.esri.com/Zurich-R-D-Center/webscene-spec/milestones?state=closed) and 
  [upcoming](https://devtopia.esri.com/Zurich-R-D-Center/webscene-spec/milestones?state=open) Web Scene spec releases
  include information about release date and target products/versions
* Release branch for each "shipped" Web Scene spec version, e.g. `v1.5`
  * The spec release typically happens around the time that the involved products freeze for release 
  * Release branches branch off `master`
  * Release branch gets a release tag when the doc is deployed to [developers.arcgis.com](https://developers.arcgis.com/web-scene-specification/)
* `master` branch contains the latest developments, which are typically released with upcoming version
  * Proposals are thus typically created by branching from (and merging into) `master`

