# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Handle_SVG\Task_SVG\PrintStateName.spec.ts >> Print state name list and click on UP state
- Location: tests\Handle_SVG\Task_SVG\PrintStateName.spec.ts:2:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://simplemaps.com/svg/country/in", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - img [ref=e7]
      - generic: 
    - list [ref=e27]:
      - listitem [ref=e28]:
        - link "US Map" [ref=e29] [cursor=pointer]:
          - /url: /us
      - listitem [ref=e30]:
        - link "World Map" [ref=e31] [cursor=pointer]:
          - /url: /world
      - listitem [ref=e32]:
        - link "Features" [ref=e33] [cursor=pointer]:
          - /url: /features
      - listitem [ref=e34]:
        - link "Docs" [ref=e35] [cursor=pointer]:
          - /url: /docs
      - listitem [ref=e36]:
        - link "Pricing" [ref=e37] [cursor=pointer]:
          - /url: /pricing
      - listitem [ref=e38]:
        - link "Contact" [ref=e39] [cursor=pointer]:
          - /url: /contact
      - listitem [ref=e40]:
        - link "All" [ref=e41] [cursor=pointer]:
          - /url: "#"
          - text: All
  - generic [ref=e45]:
    - generic [ref=e46]:
      - heading "Free India SVG Maps | Resources" [level=2] [ref=e47]
      - generic [ref=e49]:
        - paragraph [ref=e50]: We've created multiple SVG maps for the country of India.
        - generic [ref=e51]:
          - list [ref=e52]:
            - listitem [ref=e53]:
              - link "Admin Areas (level 1)" [ref=e54] [cursor=pointer]:
                - /url: "#admin1"
            - listitem [ref=e55]:
              - link "All of India" [ref=e56] [cursor=pointer]:
                - /url: "#all"
          - generic [ref=e57]:
            - paragraph [ref=e58]: "Below is an SVG map of the country of India. It has been cleaned and optimized for web use. Features include:"
            - list [ref=e59]:
              - listitem [ref=e60]: Simplified to load quickly with minimal loss of detail (208.4 KB).
              - listitem [ref=e61]:
                - text: "License:"
                - link "Free for Commercial and Personal Use" [ref=e62] [cursor=pointer]:
                  - /url: /resources/svg-license
                - text: (attribution appreciated!).
              - listitem [ref=e63]:
                - text: First-level administrative regions identified by
                - code [ref=e64]: name
                - text: and
                - code [ref=e65]: id
                - text: in the source code.
              - listitem [ref=e66]:
                - text: Uses the beautiful
                - link "Mercator Projection" [ref=e67] [cursor=pointer]:
                  - /url: https://en.wikipedia.org/wiki/Mercator_projection
                - text: .
            - paragraph
            - paragraph [ref=e68]:
              - img "SVG India Map Using Mercator Projection" [ref=e69]
            - paragraph [ref=e70]:
              - link "Download SVG" [ref=e71] [cursor=pointer]:
                - /url: /static/svg/country/in/admin1/in.svg
              - link "View Source GIS" [ref=e72] [cursor=pointer]:
                - /url: /gis/country/in#admin1
              - link "Customize Online as Interactive Map" [ref=e73] [cursor=pointer]:
                - /url: /ajax/set-map-abs/?url_slug=country&mapinfo_src=https://simplemaps.com/static/svg/country/in/admin1/mapinfo.js&mapdata_src=https://simplemaps.com/static/svg/country/in/admin1/mapdata.js
            - heading "Make this India map interactive and customize it online!" [level=3] [ref=e74]
            - paragraph [ref=e75]:
              - text: Our software turns this static SVG map into a zoomable, clickable, mobile-friendly map like the one below. We make it easy to customize region colors, descriptions, urls etc. and add locations like the capital city, New Delhi, to your map. Get started now with our
              - link "online customization tool" [ref=e76] [cursor=pointer]:
                - /url: /ajax/set-map-abs/?url_slug=country&mapinfo_src=https://simplemaps.com/static/svg/country/in/admin1/mapinfo.js&mapdata_src=https://simplemaps.com/static/svg/country/in/admin1/mapdata.js
              - text: .
            - link " Customize this map " [ref=e78] [cursor=pointer]:
              - /url: /ajax/set-map-abs/?url_slug=country&mapinfo_src=https://simplemaps.com/static/svg/country/in/admin1/mapinfo.js&mapdata_src=https://simplemaps.com/static/svg/country/in/admin1/mapdata.js
              - generic [ref=e79]: 
              - text: Customize this map
              - generic [ref=e80]: 
            - heading "Included Administrative Regions" [level=3] [ref=e81]
            - code [ref=e83]: "{ \"INAN\": \"Andaman and Nicobar\", \"INAP\": \"Andhra Pradesh\", \"INAR\": \"Arunachal Pradesh\", \"INAS\": \"Assam\", \"INBR\": \"Bihar\", \"INCH\": \"Chandigarh\", \"INCT\": \"Chhattisgarh\", \"INDH\": \"Dādra and Nagar Haveli and Damān and Diu\", \"INDL\": \"Delhi\", \"INGA\": \"Goa\", \"INGJ\": \"Gujarat\", \"INHP\": \"Himachal Pradesh\", \"INHR\": \"Haryana\", \"INJH\": \"Jharkhand\", \"INJK\": \"Jammu and Kashmir\", \"INKA\": \"Karnataka\", \"INKL\": \"Kerala\", \"INLA\": \"Ladakh\", \"INLD\": \"Lakshadweep\", \"INMH\": \"Maharashtra\", \"INML\": \"Meghalaya\", \"INMN\": \"Manipur\", \"INMP\": \"Madhya Pradesh\", \"INMZ\": \"Mizoram\", \"INNL\": \"Nagaland\", \"INOR\": \"Orissa\", \"INPB\": \"Punjab\", \"INPY\": \"Puducherry\", \"INRJ\": \"Rajasthan\", \"INSK\": \"Sikkim\", \"INTG\": \"Telangana\", \"INTN\": \"Tamil Nadu\", \"INTR\": \"Tripura\", \"INUP\": \"Uttar Pradesh\", \"INUT\": \"Uttaranchal\", \"INWB\": \"West Bengal\" }"
          - generic [ref=e84]:
            - paragraph [ref=e85]: "Below is an SVG map of the country of India. It has been cleaned and optimized for web use. Features include:"
            - list [ref=e86]:
              - listitem [ref=e87]: Simplified to load quickly with minimal loss of detail (59.6 KB).
              - listitem [ref=e88]:
                - text: "License:"
                - link "Free for Commercial and Personal Use" [ref=e89] [cursor=pointer]:
                  - /url: /resources/svg-license
                - text: (attribution appreciated!).
              - listitem [ref=e90]:
                - text: Uses the beautiful
                - link "Mercator Projection" [ref=e91] [cursor=pointer]:
                  - /url: https://en.wikipedia.org/wiki/Mercator_projection
                - text: .
            - paragraph
            - paragraph [ref=e92]:
              - img "SVG India Map Using Mercator Projection" [ref=e93]
            - paragraph [ref=e94]:
              - link "Download SVG" [ref=e95] [cursor=pointer]:
                - /url: /static/svg/country/in/all/in.svg
              - link "View Source GIS" [ref=e96] [cursor=pointer]:
                - /url: /gis/country/in#all
              - link "Customize Online as Interactive Map" [ref=e97] [cursor=pointer]:
                - /url: /ajax/set-map-abs/?url_slug=country&mapinfo_src=https://simplemaps.com/static/svg/country/in/all/mapinfo.js&mapdata_src=https://simplemaps.com/static/svg/country/in/all/mapdata.js
            - heading "Make this India map interactive and customize it online!" [level=3] [ref=e98]
            - paragraph [ref=e99]:
              - text: Our software turns this static SVG map into a zoomable, clickable, mobile-friendly map like the one below. We make it easy to customize region colors, descriptions, urls etc. and add locations like the capital city, New Delhi, to your map. Get started now with our
              - link "online customization tool" [ref=e100] [cursor=pointer]:
                - /url: /ajax/set-map-abs/?url_slug=country&mapinfo_src=https://simplemaps.com/static/svg/country/in/all/mapinfo.js&mapdata_src=https://simplemaps.com/static/svg/country/in/all/mapdata.js
              - text: .
            - link " Customize this map " [ref=e102] [cursor=pointer]:
              - /url: /ajax/set-map-abs/?url_slug=country&mapinfo_src=https://simplemaps.com/static/svg/country/in/all/mapinfo.js&mapdata_src=https://simplemaps.com/static/svg/country/in/all/mapdata.js
              - generic [ref=e103]: 
              - text: Customize this map
              - generic [ref=e104]: 
    - generic [ref=e105]:
      - heading "Resources" [level=3] [ref=e106]
      - paragraph [ref=e107]: Tools, freebies, and articles about mapping and web development. Things we've learned and want to share!
      - list [ref=e108]:
        - listitem [ref=e109]:
          - link "Introduction" [ref=e110] [cursor=pointer]:
            - /url: /resources
      - heading "Free SVG Maps" [level=3] [ref=e111]
      - list [ref=e112]:
        - listitem [ref=e113]:
          - link "All Free SVG Maps" [ref=e114] [cursor=pointer]:
            - /url: /resources/svg-maps
        - listitem [ref=e115]:
          - link "World SVG Map" [ref=e116] [cursor=pointer]:
            - /url: /resources/svg-world
        - listitem [ref=e117]:
          - link "USA SVG Map" [ref=e118] [cursor=pointer]:
            - /url: /resources/svg-us
      - heading "Free Interactive Maps" [level=3] [ref=e119]
      - list [ref=e120]:
        - listitem [ref=e121]:
          - link "Free World Map" [ref=e122] [cursor=pointer]:
            - /url: /resources/free-world-map
        - listitem [ref=e123]:
          - link "Free US Map" [ref=e124] [cursor=pointer]:
            - /url: "/resources/free-us-map "
        - listitem [ref=e125]:
          - link "Free Continent" [ref=e126] [cursor=pointer]:
            - /url: /resources/free-continent-map
      - heading "Data Articles" [level=3] [ref=e127]
      - list [ref=e128]:
        - listitem [ref=e129]:
          - link "CSV to Athena" [ref=e130] [cursor=pointer]:
            - /url: /resources/csv-to-athena
        - listitem [ref=e131]:
          - link "Athena over URL" [ref=e132] [cursor=pointer]:
            - /url: /resources/athena-over-url
        - listitem [ref=e133]:
          - link "Import CSV into MySQL" [ref=e134] [cursor=pointer]:
            - /url: /resources/import-csv-mysql
        - listitem [ref=e135]:
          - link "Import data subset with Power Query" [ref=e136] [cursor=pointer]:
            - /url: /resources/power-query
        - listitem [ref=e137]:
          - link "Retreive demographic data with VLOOKUP" [ref=e138] [cursor=pointer]:
            - /url: /resources/vlookup
        - listitem [ref=e139]:
          - link "Import CSV into Tableau" [ref=e140] [cursor=pointer]:
            - /url: /resources/import-tableau
        - listitem [ref=e141]:
          - link "Visualize places in QGIS" [ref=e142] [cursor=pointer]:
            - /url: /resources/cities-qgis
        - listitem [ref=e143]:
          - link "Filter places in Excel" [ref=e144] [cursor=pointer]:
            - /url: /resources/filter-excel
        - listitem [ref=e145]:
          - link "Location distance code (.js and .py)" [ref=e146] [cursor=pointer]:
            - /url: /resources/location-distance
      - heading "Map Articles" [level=3] [ref=e147]
      - list [ref=e148]:
        - listitem [ref=e149]:
          - link "Guide to MapShaper" [ref=e150] [cursor=pointer]:
            - /url: /resources/guide-to-mapshaper
        - listitem [ref=e151]:
          - link "Overlay polygons on Google Maps" [ref=e152] [cursor=pointer]:
            - /url: /resources/shapes-google-maps
        - listitem [ref=e153]:
          - link "Using Google Cloud" [ref=e154] [cursor=pointer]:
            - /url: /resources/google-cloud-project
        - listitem [ref=e155]:
          - link "Introduction to customizing SVG" [ref=e156] [cursor=pointer]:
            - /url: /resources/customize-us-svg
        - listitem [ref=e157]:
          - link "Software we use at SimpleMaps" [ref=e158] [cursor=pointer]:
            - /url: /resources/software-at-simplemaps
        - listitem [ref=e159]:
          - link "Alternative to Google Maps" [ref=e160] [cursor=pointer]:
            - /url: /resources/alternative-to-google-maps
        - listitem [ref=e161]:
          - link "Flash vs. HTML5 maps" [ref=e162] [cursor=pointer]:
            - /url: /resources/flash-vs-html5
      - heading "Data and Tools" [level=3] [ref=e163]
      - list [ref=e164]:
        - listitem [ref=e165]:
          - link "US Address/Cities Geocoder" [ref=e166] [cursor=pointer]:
            - /url: us-geocoder
        - listitem [ref=e167]:
          - link "World cities data (by country)" [ref=e168] [cursor=pointer]:
            - /url: /resources/free-country-cities
      - heading "Visualizations" [level=3] [ref=e169]
      - list [ref=e170]:
        - listitem [ref=e171]:
          - link "US Gold Medalists Rio 2016" [ref=e172] [cursor=pointer]:
            - /url: /viz/rio16
        - listitem [ref=e173]:
          - link "US Unemployment (auto-updated)" [ref=e174] [cursor=pointer]:
            - /url: /viz/unemployment
        - listitem [ref=e175]:
          - link "Snakes and Bears" [ref=e176] [cursor=pointer]:
            - /url: /viz/wild
        - listitem [ref=e177]:
          - link "Zip Code Visualizations" [ref=e178] [cursor=pointer]:
            - /url: /resources/zip-code-visualizations
      - heading "Links" [level=3] [ref=e179]
      - list [ref=e180]:
        - listitem [ref=e181]:
          - link "Raphael.js" [ref=e182] [cursor=pointer]:
            - /url: http://dmitrybaranovskiy.github.io/raphael/
        - listitem [ref=e183]:
          - link "MapShaper" [ref=e184] [cursor=pointer]:
            - /url: http://www.mapshaper.org/
        - listitem [ref=e185]:
          - link "Old articles about Flash maps" [ref=e186] [cursor=pointer]:
            - /url: /flash
  - paragraph [ref=e188]:
    - link "Home" [ref=e189] [cursor=pointer]:
      - /url: /
    - text: "|"
    - link "License" [ref=e190] [cursor=pointer]:
      - /url: /license
    - text: "|"
    - link "Privacy" [ref=e191] [cursor=pointer]:
      - /url: /privacy
    - text: "|"
    - link "Releases" [ref=e192] [cursor=pointer]:
      - /url: /releases
    - text: "|"
    - link "Testimonials" [ref=e193] [cursor=pointer]:
      - /url: /testimonials
    - text: "|"
    - link "Resources" [ref=e194] [cursor=pointer]:
      - /url: /resources
    - text: "|"
    - link "Documentation |" [ref=e195] [cursor=pointer]:
      - /url: /docs/
    - link "Order Lookup" [ref=e196] [cursor=pointer]:
      - /url: /updates
    - text: "|"
    - link "All Maps" [ref=e197] [cursor=pointer]:
      - /url: /all-maps
    - text: "|"
    - link "FAQs" [ref=e198] [cursor=pointer]:
      - /url: https://faqs.simplemaps.com
    - text: Formerly FlashUSAmap.com and FlashWorldMap.com
    - text: SimpleMaps.com is a product of Pareto Software, LLC. © 2010-2026.
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | test('Print state name list and click on UP state',async({page})=>{
> 3  |     await page.goto('https://simplemaps.com/svg/country/in');
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  4  |     
  5  |     // Get all SVG path elements (states)
  6  |     const statePaths = await page.locator('svg path').all();
  7  |     console.log(`\nTotal states found: ${statePaths.length}\n`);
  8  |     
  9  |     // Print all class names of states
  10 |     console.log('========== STATE CLASS NAMES ==========');
  11 |     for (let i = 0; i < statePaths.length; i++) {
  12 |         const classAttr = await statePaths[i].getAttribute('class');
  13 |         console.log(`${i + 1}. ${classAttr}`);
  14 |     }
  15 |     console.log('======================================\n');
  16 |     
  17 |     // Click on UP state
  18 |     const upState = page.locator('path[class*="in-up"]');
  19 |     if (await upState.isVisible({ timeout: 5000 })) {
  20 |         await upState.click();
  21 |         console.log('✓ Clicked on UP state');
  22 |     } else {
  23 |         console.log('✗ UP state not found');
  24 |     }
  25 | });
```