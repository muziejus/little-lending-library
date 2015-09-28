    // static_js_start
      var angelicaColor = getRandomColor();
      var style = '.' + 'angelica';
      var angelica = L.featureGroup([
          L.circleMarker([40.7742008, -73.9649045], {
            color: angelicaColor
          }).bindPopup('<a href="/entities/angelica_20"><h3>Angelica </h3></a><p>3 E. 75 St. apt 6B<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(angelica);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="angelica.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="angelica.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var royEllenColor = getRandomColor();
      var style = '.' + 'royEllen';
      var royEllen = L.featureGroup([
          L.circleMarker([40.7256112, -73.9874177], {
            color: royEllenColor
          }).bindPopup('<a href="/entities/royEllen_469"><h3>Roy &amp; Ellen </h3></a><p>129 E 4th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(royEllen);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="royEllen.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="royEllen.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var AmsPressColor = getRandomColor();
      var style = '.' + 'AmsPress';
      var AmsPress = L.featureGroup([
          L.circleMarker([40.7340112, -73.9916569], {
            color: AmsPressColor
          }).bindPopup('<a href="/entities/AmsPress_587"><h3>AMS Press</h3></a><p>56 E 13th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(AmsPress);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="AmsPress.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="AmsPress.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var samAbramsColor = getRandomColor();
      var style = '.' + 'samAbrams';
      var samAbrams = L.featureGroup([
          L.circleMarker([40.7297785, -73.9871363], {
            color: samAbramsColor
          }).bindPopup('<a href="/entities/samAbrams_12"><h3>Sam Abrams</h3></a><p>159 2nd Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(samAbrams);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="samAbrams.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="samAbrams.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([41.9667703, -71.1869963], {
            color: samAbramsColor
          }).bindPopup('<a href="/entities/samAbrams_12"><h3>Sam Abrams</h3></a><p>PO Box 903<br />Norton, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(samAbrams);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="samAbrams.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="samAbrams.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var AcademyOfAmericanPoetsColor = getRandomColor();
      var style = '.' + 'AcademyOfAmericanPoets';
      var AcademyOfAmericanPoets = L.featureGroup([
          L.circleMarker([40.7779897, -73.9611711], {
            color: AcademyOfAmericanPoetsColor
          }).bindPopup('<a href="/entities/AcademyOfAmericanPoets_18"><h3>Academy of American Poets</h3></a><p>1078 Madison Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(AcademyOfAmericanPoets);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="AcademyOfAmericanPoets.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="AcademyOfAmericanPoets.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var vitoHannibalAcconciColor = getRandomColor();
      var style = '.' + 'vitoHannibalAcconci';
      var vitoHannibalAcconci = L.featureGroup([
          L.circleMarker([40.720206, -73.996718], {
            color: vitoHannibalAcconciColor
          }).bindPopup('<a href="/entities/vitoHannibalAcconci_14"><h3>Vito Hannibal Acconci</h3></a><p>383 Broome St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(vitoHannibalAcconci);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="vitoHannibalAcconci.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="vitoHannibalAcconci.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.72058, -73.9800521], {
            color: vitoHannibalAcconciColor
          }).bindPopup('<a href="/entities/vitoHannibalAcconci_14"><h3>Vito Hannibal Acconci</h3></a><p>278 E 2nd St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(vitoHannibalAcconci);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="vitoHannibalAcconci.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="vitoHannibalAcconci.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7217158, -73.9931882], {
            color: vitoHannibalAcconciColor
          }).bindPopup('<a href="/entities/vitoHannibalAcconci_14"><h3>Vito Hannibal Acconci</h3></a><p>217 Bowery<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(vitoHannibalAcconci);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="vitoHannibalAcconci.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="vitoHannibalAcconci.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var revMichaelAllenColor = getRandomColor();
      var style = '.' + 'revMichaelAllen';
      var revMichaelAllen = L.featureGroup([
          L.circleMarker([40.7303012, -73.987144], {
            color: revMichaelAllenColor
          }).bindPopup('<a href="/entities/revMichaelAllen_597"><h3>Rev. Michael Allen</h3></a><p>131 E 10th St<br />New York, NJ<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(revMichaelAllen);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="revMichaelAllen.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="revMichaelAllen.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var AngelHairBooksColor = getRandomColor();
      var style = '.' + 'AngelHairBooks';
      var AngelHairBooks = L.featureGroup([
          L.circleMarker([40.731867, -73.983213], {
            color: AngelHairBooksColor
          }).bindPopup('<a href="/entities/AngelHairBooks_15"><h3>Angel Hair Books</h3></a><p>PO Box 257 Peter Stuyvesant Station<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(AngelHairBooks);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="AngelHairBooks.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="AngelHairBooks.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var peterArderyColor = getRandomColor();
      var style = '.' + 'peterArdery';
      var peterArdery = L.featureGroup([
          L.circleMarker([40.7660231, -73.9515768], {
            color: peterArderyColor
          }).bindPopup('<a href="/entities/peterArdery_17"><h3>Peter Ardery</h3></a><p>541 E 72nd St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(peterArdery);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="peterArdery.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="peterArdery.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ArtNewsColor = getRandomColor();
      var style = '.' + 'ArtNews';
      var ArtNews = L.featureGroup([
          L.circleMarker([40.7576844, -73.9760548], {
            color: ArtNewsColor
          }).bindPopup('<a href="/entities/ArtNews_9"><h3>Art News</h3></a><p>Newsweek Building, 444 Madison Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ArtNews);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ArtNews.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ArtNews.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnAshberyColor = getRandomColor();
      var style = '.' + 'johnAshbery';
      var johnAshbery = L.featureGroup([
          L.circleMarker([48.8491204, 2.3282842], {
            color: johnAshberyColor
          }).bindPopup('<a href="/entities/johnAshbery_8"><h3>John Ashbery</h3></a><p>16 Rue d’Assas<br />Paris, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnAshbery);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnAshbery.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnAshbery.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.784554, -73.950526], {
            color: johnAshberyColor
          }).bindPopup('<a href="/entities/johnAshbery_8"><h3>John Ashbery</h3></a><p>178 E 95th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnAshbery);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnAshbery.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnAshbery.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.737555, -73.984941], {
            color: johnAshberyColor
          }).bindPopup('<a href="/entities/johnAshbery_8"><h3>John Ashbery</h3></a><p>36 Gramercy Park E #12w<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnAshbery);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnAshbery.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnAshbery.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var AvantGardeColor = getRandomColor();
      var style = '.' + 'AvantGarde';
      var AvantGarde = L.featureGroup([
          L.circleMarker([40.7536194, -73.9859737], {
            color: AvantGardeColor
          }).bindPopup('<a href="/entities/AvantGarde_371"><h3>Avant Garde</h3></a><p>110 W 40th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(AvantGarde);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="AvantGarde.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="AvantGarde.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var elliotBarowitzColor = getRandomColor();
      var style = '.' + 'elliotBarowitz';
      var elliotBarowitz = L.featureGroup([
          L.circleMarker([40.729661, -73.994499], {
            color: elliotBarowitzColor
          }).bindPopup('<a href="/entities/elliotBarowitz_61"><h3>Elliot Barowitz</h3></a><p>New York University, 7 Washington Pl<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(elliotBarowitz);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="elliotBarowitz.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="elliotBarowitz.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var donaldBarthelmeColor = getRandomColor();
      var style = '.' + 'donaldBarthelme';
      var donaldBarthelme = L.featureGroup([
          L.circleMarker([40.7358649, -73.998799], {
            color: donaldBarthelmeColor
          }).bindPopup('<a href="/entities/donaldBarthelme_57"><h3>Donald Barthelme</h3></a><p>113 W 11th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(donaldBarthelme);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="donaldBarthelme.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="donaldBarthelme.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([34.0398601, -118.2685776], {
            color: donaldBarthelmeColor
          }).bindPopup('<a href="/entities/donaldBarthelme_57"><h3>Donald Barthelme</h3></a><p>1359 S Figueroa St<br />Los Angeles, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(donaldBarthelme);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="donaldBarthelme.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="donaldBarthelme.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var timothyBaumColor = getRandomColor();
      var style = '.' + 'timothyBaum';
      var timothyBaum = L.featureGroup([
          L.circleMarker([40.655888, -73.923576], {
            color: timothyBaumColor
          }).bindPopup('<a href="/entities/timothyBaum_399"><h3>Timothy Baum</h3></a><p>PO Box 384, Lenox Hill Station<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(timothyBaum);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="timothyBaum.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="timothyBaum.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var billBeckmanColor = getRandomColor();
      var style = '.' + 'billBeckman';
      var billBeckman = L.featureGroup([
          L.circleMarker([37.764584, -122.398], {
            color: billBeckmanColor
          }).bindPopup('<a href="/entities/billBeckman_75"><h3>Bill Beckman</h3></a><p>118 Connecticut St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(billBeckman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="billBeckman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="billBeckman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.725746, -73.978515], {
            color: billBeckmanColor
          }).bindPopup('<a href="/entities/billBeckman_75"><h3>Bill Beckman</h3></a><p>641 E 9th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(billBeckman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="billBeckman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="billBeckman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var michaelBenediktColor = getRandomColor();
      var style = '.' + 'michaelBenedikt';
      var michaelBenedikt = L.featureGroup([
          L.circleMarker([40.7969659, -73.9731529], {
            color: michaelBenediktColor
          }).bindPopup('<a href="/entities/michaelBenedikt_55"><h3>Michael Benedikt</h3></a><p>315 W 98th St #7C<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(michaelBenedikt);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="michaelBenedikt.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="michaelBenedikt.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var josephBennettColor = getRandomColor();
      var style = '.' + 'josephBennett';
      var josephBennett = L.featureGroup([
          L.circleMarker([40.7869598, -73.9535465], {
            color: josephBennettColor
          }).bindPopup('<a href="/entities/josephBennett_33"><h3>Joseph Bennett</h3></a><p>60 E 96th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(josephBennett);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="josephBennett.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="josephBennett.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var larryBenskyColor = getRandomColor();
      var style = '.' + 'larryBensky';
      var larryBensky = L.featureGroup([
          L.circleMarker([37.753965, -122.429074], {
            color: larryBenskyColor
          }).bindPopup('<a href="/entities/larryBensky_27"><h3>Larry Bensky</h3></a><p>54 Vicksburg St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(larryBensky);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="larryBensky.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="larryBensky.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([48.8900374, 2.3487076], {
            color: larryBenskyColor
          }).bindPopup('<a href="/entities/larryBensky_27"><h3>Larry Bensky</h3></a><p>9 Rue Simart<br />Paris, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(larryBensky);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="larryBensky.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="larryBensky.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([48.8718194, 2.2986843], {
            color: larryBenskyColor
          }).bindPopup('<a href="/entities/larryBensky_27"><h3>Larry Bensky</h3></a><p>16 Rue Vernet<br />Paris, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(larryBensky);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="larryBensky.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="larryBensky.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.5126198, -0.1743199], {
            color: larryBenskyColor
          }).bindPopup('<a href="/entities/larryBensky_27"><h3>Larry Bensky</h3></a><p>8 Sussex Mews W<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(larryBensky);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="larryBensky.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="larryBensky.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([48.8538133, 2.336289], {
            color: larryBenskyColor
          }).bindPopup('<a href="/entities/larryBensky_27"><h3>Larry Bensky</h3></a><p>765 Place du Palais Bourbon<br />Paris, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(larryBensky);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="larryBensky.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="larryBensky.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([39.367146, 26.1751462], {
            color: larryBenskyColor
          }).bindPopup('<a href="/entities/larryBensky_27"><h3>Larry Bensky</h3></a><p><br />Molyvos Lesvos (Mytilini), <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(larryBensky);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="larryBensky.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="larryBensky.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.736857, -74.002332], {
            color: larryBenskyColor
          }).bindPopup('<a href="/entities/larryBensky_27"><h3>Larry Bensky</h3></a><p>20 Bank St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(larryBensky);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="larryBensky.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="larryBensky.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7339395, -73.9987797], {
            color: larryBenskyColor
          }).bindPopup('<a href="/entities/larryBensky_27"><h3>Larry Bensky</h3></a><p>64 W 9th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(larryBensky);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="larryBensky.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="larryBensky.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.7999688, -122.4052921], {
            color: larryBenskyColor
          }).bindPopup('<a href="/entities/larryBensky_27"><h3>Larry Bensky</h3></a><p>373 Green St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(larryBensky);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="larryBensky.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="larryBensky.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.742142, -122.429817], {
            color: larryBenskyColor
          }).bindPopup('<a href="/entities/larryBensky_27"><h3>Larry Bensky</h3></a><p>446 30th St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(larryBensky);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="larryBensky.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="larryBensky.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.765211, -122.432861], {
            color: larryBenskyColor
          }).bindPopup('<a href="/entities/larryBensky_27"><h3>Larry Bensky</h3></a><p>251 Noe St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(larryBensky);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="larryBensky.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="larryBensky.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var billBerksonColor = getRandomColor();
      var style = '.' + 'billBerkson';
      var billBerkson = L.featureGroup([
          L.circleMarker([40.7305442, -73.9883995], {
            color: billBerksonColor
          }).bindPopup('<a href="/entities/billBerkson_53"><h3>Bill Berkson</h3></a><p>107 E 10th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(billBerkson);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="billBerkson.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="billBerkson.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7608923, -73.9697754], {
            color: billBerksonColor
          }).bindPopup('<a href="/entities/billBerkson_53"><h3>Bill Berkson</h3></a><p>124 E 57th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(billBerkson);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="billBerkson.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="billBerkson.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var maryBernsteinColor = getRandomColor();
      var style = '.' + 'maryBernstein';
      var maryBernstein = L.featureGroup([
          L.circleMarker([40.7723562, -73.9466189], {
            color: maryBernsteinColor
          }).bindPopup('<a href="/entities/maryBernstein_37"><h3>Mary Bernstein</h3></a><p>1 Gracie Terrace #8c<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(maryBernstein);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="maryBernstein.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="maryBernstein.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var tedBerriganColor = getRandomColor();
      var style = '.' + 'tedBerrigan';
      var tedBerrigan = L.featureGroup([
          L.circleMarker([41.6565397, -91.5362219], {
            color: tedBerriganColor
          }).bindPopup('<a href="/entities/tedBerrigan_47"><h3>Ted Berrigan</h3></a><p>407 S Capitol St<br />Iowa City, IA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tedBerrigan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tedBerrigan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tedBerrigan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.720689, -73.979684], {
            color: tedBerriganColor
          }).bindPopup('<a href="/entities/tedBerrigan_47"><h3>Ted Berrigan</h3></a><p>286 E 2nd St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tedBerrigan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tedBerrigan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tedBerrigan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7262303, -73.985423], {
            color: tedBerriganColor
          }).bindPopup('<a href="/entities/tedBerrigan_47"><h3>Ted Berrigan</h3></a><p>411 E 6th St #8b<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tedBerrigan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tedBerrigan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tedBerrigan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([41.6672321, -91.5350322], {
            color: tedBerriganColor
          }).bindPopup('<a href="/entities/tedBerrigan_47"><h3>Ted Berrigan</h3></a><p>Iowa Writers’ Workshop, The University of Iowa<br />Iowa City, IA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tedBerrigan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tedBerrigan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tedBerrigan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([41.8907342, -71.36473], {
            color: tedBerriganColor
          }).bindPopup('<a href="/entities/tedBerrigan_47"><h3>Ted Berrigan</h3></a><p>180 Webster St<br />Pawtucket, RI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tedBerrigan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tedBerrigan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tedBerrigan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var paulBlackburnColor = getRandomColor();
      var style = '.' + 'paulBlackburn';
      var paulBlackburn = L.featureGroup([
          L.circleMarker([40.7288863, -73.9899181], {
            color: paulBlackburnColor
          }).bindPopup('<a href="/entities/paulBlackburn_28"><h3>Paul Blackburn</h3></a><p>9 E 7th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(paulBlackburn);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="paulBlackburn.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="paulBlackburn.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ettaBlumColor = getRandomColor();
      var style = '.' + 'ettaBlum';
      var ettaBlum = L.featureGroup([
          L.circleMarker([40.671959, -73.971696], {
            color: ettaBlumColor
          }).bindPopup('<a href="/entities/ettaBlum_34"><h3>Etta Blum</h3></a><p>942 President St<br />Brooklyn, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ettaBlum);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ettaBlum.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ettaBlum.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var BonesColor = getRandomColor();
      var style = '.' + 'Bones';
      var Bones = L.featureGroup([
          L.circleMarker([40.788173, -73.969577], {
            color: BonesColor
          }).bindPopup('<a href="/entities/Bones_50"><h3>Bones</h3></a><p>53 W 89th St #2a<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Bones);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Bones.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Bones.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var joeBrainardColor = getRandomColor();
      var style = '.' + 'joeBrainard';
      var joeBrainard = L.featureGroup([
          L.circleMarker([40.7412651, -73.9937786], {
            color: joeBrainardColor
          }).bindPopup('<a href="/entities/joeBrainard_54"><h3>Joe Brainard</h3></a><p>664 Avenue of the Americas<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(joeBrainard);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="joeBrainard.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="joeBrainard.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7518613, -73.9344487], {
            color: joeBrainardColor
          }).bindPopup('<a href="/entities/joeBrainard_54"><h3>Joe Brainard</h3></a><p>40 Avenue #3B<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(joeBrainard);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="joeBrainard.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="joeBrainard.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.737957, -74.006981], {
            color: joeBrainardColor
          }).bindPopup('<a href="/entities/joeBrainard_54"><h3>Joe Brainard</h3></a><p>74 Jane St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(joeBrainard);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="joeBrainard.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="joeBrainard.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7230728, -73.9826647], {
            color: joeBrainardColor
          }).bindPopup('<a href="/entities/joeBrainard_54"><h3>Joe Brainard</h3></a><p>48 Avenue B Apt 13<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(joeBrainard);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="joeBrainard.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="joeBrainard.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jamesBrodeyColor = getRandomColor();
      var style = '.' + 'jamesBrodey';
      var jamesBrodey = L.featureGroup([
          L.circleMarker([34.063308, -118.275689], {
            color: jamesBrodeyColor
          }).bindPopup('<a href="/entities/jamesBrodey_58"><h3>James Brodey</h3></a><p>2308 W 4th St<br />Los Angeles, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jamesBrodey);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jamesBrodey.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jamesBrodey.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7290188, -73.9807509], {
            color: jamesBrodeyColor
          }).bindPopup('<a href="/entities/jamesBrodey_58"><h3>James Brodey</h3></a><p>507 E 12th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jamesBrodey);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jamesBrodey.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jamesBrodey.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.7613232, -122.4505437], {
            color: jamesBrodeyColor
          }).bindPopup('<a href="/entities/jamesBrodey_58"><h3>James Brodey</h3></a><p>1507 Shrader St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jamesBrodey);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jamesBrodey.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jamesBrodey.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([34.0619824, -118.2504169], {
            color: jamesBrodeyColor
          }).bindPopup('<a href="/entities/jamesBrodey_58"><h3>James Brodey</h3></a><p>1010 W Temple St<br />Los Angeles, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jamesBrodey);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jamesBrodey.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jamesBrodey.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.725475, -73.99259], {
            color: jamesBrodeyColor
          }).bindPopup('<a href="/entities/jamesBrodey_58"><h3>James Brodey</h3></a><p>3 Bleecker St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jamesBrodey);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jamesBrodey.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jamesBrodey.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var rebeccaBrownColor = getRandomColor();
      var style = '.' + 'rebeccaBrown';
      var rebeccaBrown = L.featureGroup([
          L.circleMarker([40.725216, -73.9939652], {
            color: rebeccaBrownColor
          }).bindPopup('<a href="/entities/rebeccaBrown_79"><h3>Rebecca Brown</h3></a><p>309 Mott St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(rebeccaBrown);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="rebeccaBrown.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="rebeccaBrown.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var michaelBrownsteinColor = getRandomColor();
      var style = '.' + 'michaelBrownstein';
      var michaelBrownstein = L.featureGroup([
          L.circleMarker([40.7294389, -73.9817346], {
            color: michaelBrownsteinColor
          }).bindPopup('<a href="/entities/michaelBrownstein_64"><h3>Michael Brownstein</h3></a><p>437 E 12th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(michaelBrownstein);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="michaelBrownstein.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="michaelBrownstein.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.729226, -73.980296], {
            color: michaelBrownsteinColor
          }).bindPopup('<a href="/entities/michaelBrownstein_64"><h3>Michael Brownstein</h3></a><p>512 E 13th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(michaelBrownstein);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="michaelBrownstein.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="michaelBrownstein.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([48.8572246, 2.3563506], {
            color: michaelBrownsteinColor
          }).bindPopup('<a href="/entities/michaelBrownstein_64"><h3>Michael Brownstein</h3></a><p>16 Rue du Bourg Tibourg<br />Paris, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(michaelBrownstein);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="michaelBrownstein.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="michaelBrownstein.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var rudyBurckhardtColor = getRandomColor();
      var style = '.' + 'rudyBurckhardt';
      var rudyBurckhardt = L.featureGroup([
          L.circleMarker([40.742526, -73.995312], {
            color: rudyBurckhardtColor
          }).bindPopup('<a href="/entities/rudyBurckhardt_145"><h3>Rudy Burckhardt</h3></a><p>145 W 21st St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(rudyBurckhardt);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="rudyBurckhardt.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="rudyBurckhardt.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var bobCaligyColor = getRandomColor();
      var style = '.' + 'bobCaligy';
      var bobCaligy = L.featureGroup([
          L.circleMarker([40.718035, -73.990609], {
            color: bobCaligyColor
          }).bindPopup('<a href="/entities/bobCaligy_123"><h3>Bob Caligy</h3></a><p>263 Broome St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bobCaligy);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bobCaligy.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bobCaligy.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ronaldCaplanColor = getRandomColor();
      var style = '.' + 'ronaldCaplan';
      var ronaldCaplan = L.featureGroup([
          L.circleMarker([40.450982, -79.951046], {
            color: ronaldCaplanColor
          }).bindPopup('<a href="/entities/ronaldCaplan_90"><h3>Ronald Caplan</h3></a><p>230 N Craig St<br />Pittsburgh, PA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ronaldCaplan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ronaldCaplan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ronaldCaplan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.443032, -79.914316], {
            color: ronaldCaplanColor
          }).bindPopup('<a href="/entities/ronaldCaplan_90"><h3>Ronald Caplan</h3></a><p>6619 Northumberland St<br />Pittsburgh, PA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ronaldCaplan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ronaldCaplan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ronaldCaplan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var martinCareyColor = getRandomColor();
      var style = '.' + 'martinCarey';
      var martinCarey = L.featureGroup([
          L.circleMarker([40.7281, -73.981728], {
            color: martinCareyColor
          }).bindPopup('<a href="/entities/martinCarey_101"><h3>Martin Carey</h3></a><p>166 Avenue A<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(martinCarey);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="martinCarey.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="martinCarey.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jimCarrollColor = getRandomColor();
      var style = '.' + 'jimCarroll';
      var jimCarroll = L.featureGroup([
          L.circleMarker([40.5795317, -74.1502007], {
            color: jimCarrollColor
          }).bindPopup('<a href="/entities/jimCarroll_111"><h3>Jim Carroll</h3></a><p>PO Box 125, Wagner College, 631 Howard Ave<br />Staten Island, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jimCarroll);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jimCarroll.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jimCarroll.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.8678296, -73.9195532], {
            color: jimCarrollColor
          }).bindPopup('<a href="/entities/jimCarroll_111"><h3>Jim Carroll</h3></a><p>185 Isham St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jimCarroll);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jimCarroll.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jimCarroll.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var cyrilCasterColor = getRandomColor();
      var style = '.' + 'cyrilCaster';
      var cyrilCaster = L.featureGroup([
          L.circleMarker([40.73482, -73.995554], {
            color: cyrilCasterColor
          }).bindPopup('<a href="/entities/cyrilCaster_100"><h3>Cyril Caster</h3></a><p>18 W 12th St 1A<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(cyrilCaster);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="cyrilCaster.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="cyrilCaster.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var joeCeravoloColor = getRandomColor();
      var style = '.' + 'joeCeravolo';
      var joeCeravolo = L.featureGroup([
          L.circleMarker([40.7598, -74.17561], {
            color: joeCeravoloColor
          }).bindPopup('<a href="/entities/joeCeravolo_91"><h3>Joe Ceravolo</h3></a><p>276 Clifton Ave<br />Newark, NJ<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(joeCeravolo);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="joeCeravolo.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="joeCeravolo.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7947035, -74.1925678], {
            color: joeCeravoloColor
          }).bindPopup('<a href="/entities/joeCeravolo_91"><h3>Joe Ceravolo</h3></a><p>65 Spruce St<br />Bloomfield, NJ<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(joeCeravolo);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="joeCeravolo.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="joeCeravolo.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var michaelChechikColor = getRandomColor();
      var style = '.' + 'michaelChechik';
      var michaelChechik = L.featureGroup([
          L.circleMarker([40.7428332, -73.9922321], {
            color: michaelChechikColor
          }).bindPopup('<a href="/entities/michaelChechik_106"><h3>Michael Chechik</h3></a><p>71 W 23rd St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(michaelChechik);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="michaelChechik.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="michaelChechik.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var stevieChusmanColor = getRandomColor();
      var style = '.' + 'stevieChusman';
      var stevieChusman = L.featureGroup([
          L.circleMarker([40.7376873, -74.0039175], {
            color: stevieChusmanColor
          }).bindPopup('<a href="/entities/stevieChusman_126"><h3>Stevie Chusman</h3></a><p>324 W 4th St #4<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(stevieChusman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="stevieChusman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="stevieChusman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.737051, -73.985668], {
            color: stevieChusmanColor
          }).bindPopup('<a href="/entities/stevieChusman_126"><h3>Stevie Chusman</h3></a><p>Hotel Irving, 26 Gramercy Park S<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(stevieChusman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="stevieChusman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="stevieChusman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7327983, -73.9851936], {
            color: stevieChusmanColor
          }).bindPopup('<a href="/entities/stevieChusman_126"><h3>Stevie Chusman</h3></a><p>243 E 14th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(stevieChusman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="stevieChusman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="stevieChusman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var arthurCohenColor = getRandomColor();
      var style = '.' + 'arthurCohen';
      var arthurCohen = L.featureGroup([
          L.circleMarker([40.7686629, -73.96272], {
            color: arthurCohenColor
          }).bindPopup('<a href="/entities/arthurCohen_117"><h3>Arthur Cohen</h3></a><p>160 E 70th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(arthurCohen);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="arthurCohen.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="arthurCohen.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var robertDavidCohenColor = getRandomColor();
      var style = '.' + 'robertDavidCohen';
      var robertDavidCohen = L.featureGroup([
          L.circleMarker([40.6876368, -73.9994629], {
            color: robertDavidCohenColor
          }).bindPopup('<a href="/entities/robertDavidCohen_120"><h3>Robert David Cohen</h3></a><p>443 Hicks St<br />Brooklyn, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(robertDavidCohen);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="robertDavidCohen.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="robertDavidCohen.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var mrsMACohnColor = getRandomColor();
      var style = '.' + 'mrsMACohn';
      var mrsMACohn = L.featureGroup([
          L.circleMarker([40.7641974, -73.9709453], {
            color: mrsMACohnColor
          }).bindPopup('<a href="/entities/mrsMACohn_113"><h3>Mrs. M.A. Cohn</h3></a><p>18 E 60th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(mrsMACohn);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="mrsMACohn.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="mrsMACohn.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var gwenConnetColor = getRandomColor();
      var style = '.' + 'gwenConnet';
      var gwenConnet = L.featureGroup([
          L.circleMarker([40.7272, -73.987533], {
            color: gwenConnetColor
          }).bindPopup('<a href="/entities/gwenConnet_116"><h3>Gwen Connet</h3></a><p>315 E 6th St Apt 7<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(gwenConnet);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="gwenConnet.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="gwenConnet.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var clarkCoolidgeColor = getRandomColor();
      var style = '.' + 'clarkCoolidge';
      var clarkCoolidge = L.featureGroup([
          L.circleMarker([42.4639722, -73.3964977], {
            color: clarkCoolidgeColor
          }).bindPopup('<a href="/entities/clarkCoolidge_96"><h3>Clark Coolidge</h3></a><p>PO Box 224<br />New Lebanon, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(clarkCoolidge);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="clarkCoolidge.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="clarkCoolidge.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([41.840397, -71.397653], {
            color: clarkCoolidgeColor
          }).bindPopup('<a href="/entities/clarkCoolidge_96"><h3>Clark Coolidge</h3></a><p>272 Morris Ave<br />Providence, RI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(clarkCoolidge);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="clarkCoolidge.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="clarkCoolidge.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7870153, -73.9755443], {
            color: clarkCoolidgeColor
          }).bindPopup('<a href="/entities/clarkCoolidge_96"><h3>Clark Coolidge</h3></a><p>W 85th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(clarkCoolidge);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="clarkCoolidge.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="clarkCoolidge.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([41.837171, -71.3999879], {
            color: clarkCoolidgeColor
          }).bindPopup('<a href="/entities/clarkCoolidge_96"><h3>Clark Coolidge</h3></a><p>48 Brenton Ave<br />Providence, RI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(clarkCoolidge);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="clarkCoolidge.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="clarkCoolidge.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.3620461, -71.104207], {
            color: clarkCoolidgeColor
          }).bindPopup('<a href="/entities/clarkCoolidge_96"><h3>Clark Coolidge</h3></a><p>21 Watson St<br />Cambridge, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(clarkCoolidge);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="clarkCoolidge.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="clarkCoolidge.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.7990751, -122.4046482], {
            color: clarkCoolidgeColor
          }).bindPopup('<a href="/entities/clarkCoolidge_96"><h3>Clark Coolidge</h3></a><p>454 Vallejo St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(clarkCoolidge);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="clarkCoolidge.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="clarkCoolidge.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([41.8410129, -71.397374], {
            color: clarkCoolidgeColor
          }).bindPopup('<a href="/entities/clarkCoolidge_96"><h3>Clark Coolidge</h3></a><p>292 Morris Ave<br />Providence, RI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(clarkCoolidge);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="clarkCoolidge.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="clarkCoolidge.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jonathanCottColor = getRandomColor();
      var style = '.' + 'jonathanCott';
      var jonathanCott = L.featureGroup([
          L.circleMarker([40.7662399, -73.9636429], {
            color: jonathanCottColor
          }).bindPopup('<a href="/entities/jonathanCott_109"><h3>Jonathan Cott</h3></a><p>165 E 66th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jonathanCott);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jonathanCott.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jonathanCott.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var leeCrabtreeColor = getRandomColor();
      var style = '.' + 'leeCrabtree';
      var leeCrabtree = L.featureGroup([
          L.circleMarker([40.8497739, -74.198831], {
            color: leeCrabtreeColor
          }).bindPopup('<a href="/entities/leeCrabtree_121"><h3>Lee Crabtree</h3></a><p>135 Norwood Ave<br />Montclair, NJ<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(leeCrabtree);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="leeCrabtree.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="leeCrabtree.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.7956294, -74.7532018], {
            color: leeCrabtreeColor
          }).bindPopup('<a href="/entities/leeCrabtree_121"><h3>Lee Crabtree</h3></a><p>PO Box 338<br />Cherry Valley, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(leeCrabtree);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="leeCrabtree.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="leeCrabtree.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var timCraigColor = getRandomColor();
      var style = '.' + 'timCraig';
      var timCraig = L.featureGroup([
          L.circleMarker([40.7319387, -74.0015608], {
            color: timCraigColor
          }).bindPopup('<a href="/entities/timCraig_115"><h3>Tim Craig</h3></a><p>166 W 4th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(timCraig);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="timCraig.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="timCraig.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var fieldingDawsonColor = getRandomColor();
      var style = '.' + 'fieldingDawson';
      var fieldingDawson = L.featureGroup([
          L.circleMarker([40.7381288, -73.9884968], {
            color: fieldingDawsonColor
          }).bindPopup('<a href="/entities/fieldingDawson_141"><h3>Fielding Dawson</h3></a><p>49 E 19th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(fieldingDawson);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="fieldingDawson.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="fieldingDawson.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var DaytonSRecordsColor = getRandomColor();
      var style = '.' + 'DaytonSRecords';
      var DaytonSRecords = L.featureGroup([
          L.circleMarker([40.7330079, -73.9909326], {
            color: DaytonSRecordsColor
          }).bindPopup('<a href="/entities/DaytonSRecords_155"><h3>Dayton’s Records</h3></a><p>824 Broadway<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(DaytonSRecords);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="DaytonSRecords.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="DaytonSRecords.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var edwinDenbyColor = getRandomColor();
      var style = '.' + 'edwinDenby';
      var edwinDenby = L.featureGroup([
          L.circleMarker([40.742526, -73.995312], {
            color: edwinDenbyColor
          }).bindPopup('<a href="/entities/edwinDenby_144"><h3>Edwin Denby</h3></a><p>145 W 21st St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edwinDenby);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edwinDenby.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edwinDenby.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var DesmondColor = getRandomColor();
      var style = '.' + 'Desmond';
      var Desmond = L.featureGroup([
          L.circleMarker([40.72136, -73.994258], {
            color: DesmondColor
          }).bindPopup('<a href="/entities/Desmond_190"><h3>Desmond</h3></a><p>5 Spring St Apt 14<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Desmond);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Desmond.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Desmond.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var dianeDiprimaColor = getRandomColor();
      var style = '.' + 'dianeDiprima';
      var dianeDiprima = L.featureGroup([
          L.circleMarker([37.771178, -122.450907], {
            color: dianeDiprimaColor
          }).bindPopup('<a href="/entities/dianeDiprima_150"><h3>Diane DiPrima</h3></a><p>1915 Oak St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(dianeDiprima);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="dianeDiprima.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="dianeDiprima.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([41.7748155, -74.2982059], {
            color: dianeDiprimaColor
          }).bindPopup('<a href="/entities/dianeDiprima_150"><h3>Diane DiPrima</h3></a><p>RR1 Box 427<br />Kerhonkson, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(dianeDiprima);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="dianeDiprima.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="dianeDiprima.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7327796, -73.9934835], {
            color: dianeDiprimaColor
          }).bindPopup('<a href="/entities/dianeDiprima_150"><h3>Diane DiPrima</h3></a><p>Hotel Albert 23 E 10th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(dianeDiprima);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="dianeDiprima.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="dianeDiprima.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var marthaDiamondColor = getRandomColor();
      var style = '.' + 'marthaDiamond';
      var marthaDiamond = L.featureGroup([
          L.circleMarker([40.728744, -73.988744], {
            color: marthaDiamondColor
          }).bindPopup('<a href="/entities/marthaDiamond_154"><h3>Martha Diamond</h3></a><p>26 St Marks Pl<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(marthaDiamond);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="marthaDiamond.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="marthaDiamond.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var tomDischColor = getRandomColor();
      var style = '.' + 'tomDisch';
      var tomDisch = L.featureGroup([
          L.circleMarker([40.732742, -74.0018355], {
            color: tomDischColor
          }).bindPopup('<a href="/entities/tomDisch_159"><h3>Tom Disch</h3></a><p>1 Sheridan Square<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tomDisch);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tomDisch.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tomDisch.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var edwardDornColor = getRandomColor();
      var style = '.' + 'edwardDorn';
      var edwardDorn = L.featureGroup([
          L.circleMarker([41.932406, -87.651955], {
            color: edwardDornColor
          }).bindPopup('<a href="/entities/edwardDorn_132"><h3>Edward Dorn</h3></a><p>911 W Diversey Pkwy<br />Chicago, IL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edwardDorn);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edwardDorn.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edwardDorn.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.7868237, -122.4369219], {
            color: edwardDornColor
          }).bindPopup('<a href="/entities/edwardDorn_132"><h3>Edward Dorn</h3></a><p>1811 Pierce St #3<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edwardDorn);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edwardDorn.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edwardDorn.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.755102, -122.4731063], {
            color: edwardDornColor
          }).bindPopup('<a href="/entities/edwardDorn_132"><h3>Edward Dorn</h3></a><p>885 Noriega St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edwardDorn);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edwardDorn.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edwardDorn.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([41.156836, -81.35023], {
            color: edwardDornColor
          }).bindPopup('<a href="/entities/edwardDorn_132"><h3>Edward Dorn</h3></a><p>521 Crain Ave<br />Kent, OH<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edwardDorn);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edwardDorn.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edwardDorn.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.8734875, 0.7122493], {
            color: edwardDornColor
          }).bindPopup('<a href="/entities/edwardDorn_132"><h3>Edward Dorn</h3></a><p>“Linden” Colchester Rd<br />Colchester, Essex, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edwardDorn);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edwardDorn.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edwardDorn.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.885149, 0.8825745], {
            color: edwardDornColor
          }).bindPopup('<a href="/entities/edwardDorn_132"><h3>Edward Dorn</h3></a><p>6 Victoria Rd<br />Colchester, Essex, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edwardDorn);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edwardDorn.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edwardDorn.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.8688818, -112.441835], {
            color: edwardDornColor
          }).bindPopup('<a href="/entities/edwardDorn_132"><h3>Edward Dorn</h3></a><p>843 E Clark St<br />Pocatello, ID, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edwardDorn);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edwardDorn.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edwardDorn.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.8904347, 0.8646388], {
            color: edwardDornColor
          }).bindPopup('<a href="/entities/edwardDorn_132"><h3>Edward Dorn</h3></a><p>187 Lexden Rd<br />Colchester, Essex, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edwardDorn);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edwardDorn.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edwardDorn.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.7962906, -70.9775075], {
            color: edwardDornColor
          }).bindPopup('<a href="/entities/edwardDorn_132"><h3>Edward Dorn</h3></a><p>Stewart St<br />West Newbury, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edwardDorn);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edwardDorn.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edwardDorn.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var DoubledayCoColor = getRandomColor();
      var style = '.' + 'DoubledayCo';
      var DoubledayCo = L.featureGroup([
          L.circleMarker([40.7555122, -73.9748], {
            color: DoubledayCoColor
          }).bindPopup('<a href="/entities/DoubledayCo_158"><h3>Doubleday &amp; Co.</h3></a><p>277 Park Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(DoubledayCo);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="DoubledayCo.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="DoubledayCo.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var marcelDuchampColor = getRandomColor();
      var style = '.' + 'marcelDuchamp';
      var marcelDuchamp = L.featureGroup([
          L.circleMarker([40.733847, -73.997054], {
            color: marcelDuchampColor
          }).bindPopup('<a href="/entities/marcelDuchamp_151"><h3>Marcel Duchamp</h3></a><p>28 W 10th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(marcelDuchamp);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="marcelDuchamp.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="marcelDuchamp.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var bobDylanColor = getRandomColor();
      var style = '.' + 'bobDylan';
      var bobDylan = L.featureGroup([
          L.circleMarker([40.7246041, -73.9986294], {
            color: bobDylanColor
          }).bindPopup('<a href="/entities/bobDylan_161"><h3>Bob Dylan</h3></a><p>PO Box 36, Prince St Station, 103 Prince St.<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bobDylan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bobDylan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bobDylan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var karenEdwardsColor = getRandomColor();
      var style = '.' + 'karenEdwards';
      var karenEdwards = L.featureGroup([
          L.circleMarker([40.7291586, -73.9884404], {
            color: karenEdwardsColor
          }).bindPopup('<a href="/entities/karenEdwards_169"><h3>Karen Edwards</h3></a><p>19-25 St Marks Pl<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(karenEdwards);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="karenEdwards.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="karenEdwards.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var EighthStreetBookshopColor = getRandomColor();
      var style = '.' + 'EighthStreetBookshop';
      var EighthStreetBookshop = L.featureGroup([
          L.circleMarker([40.732888, -73.99731], {
            color: EighthStreetBookshopColor
          }).bindPopup('<a href="/entities/EighthStreetBookshop_196"><h3>Eighth Street Bookshop</h3></a><p>17 W 8th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(EighthStreetBookshop);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="EighthStreetBookshop.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="EighthStreetBookshop.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ElectricCircusColor = getRandomColor();
      var style = '.' + 'ElectricCircus';
      var ElectricCircus = L.featureGroup([
          L.circleMarker([40.7291586, -73.9884404], {
            color: ElectricCircusColor
          }).bindPopup('<a href="/entities/ElectricCircus_168"><h3>Electric Circus</h3></a><p>19-25 St Marks Pl<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ElectricCircus);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ElectricCircus.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ElectricCircus.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ElephantColor = getRandomColor();
      var style = '.' + 'Elephant';
      var Elephant = L.featureGroup([
          L.circleMarker([40.7238734, -73.9761971], {
            color: ElephantColor
          }).bindPopup('<a href="/entities/Elephant_434"><h3>Elephant</h3></a><p>403 E 8th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Elephant);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Elephant.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Elephant.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var kenwardElmslieColor = getRandomColor();
      var style = '.' + 'kenwardElmslie';
      var kenwardElmslie = L.featureGroup([
          L.circleMarker([44.379852, -72.474525], {
            color: kenwardElmslieColor
          }).bindPopup('<a href="/entities/kenwardElmslie_166"><h3>Kenward Elmslie</h3></a><p>737 Elmslie Road<br />Calais, VT<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(kenwardElmslie);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="kenwardElmslie.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="kenwardElmslie.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.738191, -74.001807], {
            color: kenwardElmslieColor
          }).bindPopup('<a href="/entities/kenwardElmslie_166"><h3>Kenward Elmslie</h3></a><p>104 Greenwich Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(kenwardElmslie);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="kenwardElmslie.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="kenwardElmslie.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var EvergreenReviewColor = getRandomColor();
      var style = '.' + 'EvergreenReview';
      var EvergreenReview = L.featureGroup([
          L.circleMarker([40.7335348, -73.9935615], {
            color: EvergreenReviewColor
          }).bindPopup('<a href="/entities/EvergreenReview_165"><h3>Evergreen Review</h3></a><p>80 University Pl<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(EvergreenReview);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="EvergreenReview.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="EvergreenReview.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var larryFaginColor = getRandomColor();
      var style = '.' + 'larryFagin';
      var larryFagin = L.featureGroup([
          L.circleMarker([40.7294389, -73.9817346], {
            color: larryFaginColor
          }).bindPopup('<a href="/entities/larryFagin_182"><h3>Larry Fagin</h3></a><p>437 E 12th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(larryFagin);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="larryFagin.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="larryFagin.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([50.0836109, 8.2408029], {
            color: larryFaginColor
          }).bindPopup('<a href="/entities/larryFagin_182"><h3>Larry Fagin</h3></a><p>Grabenstraße 34<br />Wiesbaden, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(larryFagin);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="larryFagin.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="larryFagin.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7874037, -73.974386], {
            color: larryFaginColor
          }).bindPopup('<a href="/entities/larryFagin_182"><h3>Larry Fagin</h3></a><p>162 W 86th St #1r<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(larryFagin);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="larryFagin.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="larryFagin.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.734369, -122.37944], {
            color: larryFaginColor
          }).bindPopup('<a href="/entities/larryFagin_182"><h3>Larry Fagin</h3></a><p>27 Middle Point Rd<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(larryFagin);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="larryFagin.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="larryFagin.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.5835507, -0.5001665], {
            color: larryFaginColor
          }).bindPopup('<a href="/entities/larryFagin_182"><h3>Larry Fagin</h3></a><p>Peckham House, 10 Denham Green Ln<br />Denham, Uxbridge, Buckinghamshire, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(larryFagin);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="larryFagin.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="larryFagin.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var dannyFieldsColor = getRandomColor();
      var style = '.' + 'dannyFields';
      var dannyFields = L.featureGroup([
          L.circleMarker([40.7401974, -73.9917281], {
            color: dannyFieldsColor
          }).bindPopup('<a href="/entities/dannyFields_193"><h3>Danny Fields</h3></a><p>7 W 20th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(dannyFields);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="dannyFields.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="dannyFields.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var FilmexIncColor = getRandomColor();
      var style = '.' + 'FilmexInc';
      var FilmexInc = L.featureGroup([
          L.circleMarker([40.7521188, -73.9701789], {
            color: FilmexIncColor
          }).bindPopup('<a href="/entities/FilmexInc_125"><h3>Filmex, Inc</h3></a><p>Communications Dept. 300 E 46th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(FilmexInc);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="FilmexInc.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="FilmexInc.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var FolkloreCenterColor = getRandomColor();
      var style = '.' + 'FolkloreCenter';
      var FolkloreCenter = L.featureGroup([
          L.circleMarker([40.73113, -74.0017065], {
            color: FolkloreCenterColor
          }).bindPopup('<a href="/entities/FolkloreCenter_588"><h3>Folklore Center</h3></a><p>321 Avenue of the Americas<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(FolkloreCenter);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="FolkloreCenter.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="FolkloreCenter.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var davidFranksColor = getRandomColor();
      var style = '.' + 'davidFranks';
      var davidFranks = L.featureGroup([
          L.circleMarker([40.72915, -73.9789009], {
            color: davidFranksColor
          }).bindPopup('<a href="/entities/davidFranks_187"><h3>David Franks</h3></a><p>541 E 13th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidFranks);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidFranks.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidFranks.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var kathleenFraserColor = getRandomColor();
      var style = '.' + 'kathleenFraser';
      var kathleenFraser = L.featureGroup([
          L.circleMarker([40.7209975, -73.9869464], {
            color: kathleenFraserColor
          }).bindPopup('<a href="/entities/kathleenFraser_185"><h3>Kathleen Fraser</h3></a><p>159 Essex St #1C<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(kathleenFraser);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="kathleenFraser.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="kathleenFraser.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var FreeUniversityOfNewYorkColor = getRandomColor();
      var style = '.' + 'FreeUniversityOfNewYork';
      var FreeUniversityOfNewYork = L.featureGroup([
          L.circleMarker([40.7353447, -73.9926955], {
            color: FreeUniversityOfNewYorkColor
          }).bindPopup('<a href="/entities/FreeUniversityOfNewYork_338"><h3>Free University of New York</h3></a><p>20 E 14th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(FreeUniversityOfNewYork);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="FreeUniversityOfNewYork.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="FreeUniversityOfNewYork.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var FrettedInstrumentSchoolColor = getRandomColor();
      var style = '.' + 'FrettedInstrumentSchool';
      var FrettedInstrumentSchool = L.featureGroup([
          L.circleMarker([40.7310353, -74.0014554], {
            color: FrettedInstrumentSchoolColor
          }).bindPopup('<a href="/entities/FrettedInstrumentSchool_189"><h3>Fretted Instrument School</h3></a><p>319 Avenue of the Americas<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(FrettedInstrumentSchool);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="FrettedInstrumentSchool.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="FrettedInstrumentSchool.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var geraldFreundColor = getRandomColor();
      var style = '.' + 'geraldFreund';
      var geraldFreund = L.featureGroup([
          L.circleMarker([40.759532, -73.9795414], {
            color: geraldFreundColor
          }).bindPopup('<a href="/entities/geraldFreund_192"><h3>Gerald Freund</h3></a><p>111 W 50th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(geraldFreund);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="geraldFreund.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="geraldFreund.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.769317, -73.98264], {
            color: geraldFreundColor
          }).bindPopup('<a href="/entities/geraldFreund_192"><h3>Gerald Freund</h3></a><p>1841 Broadway<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(geraldFreund);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="geraldFreund.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="geraldFreund.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var dickGallupColor = getRandomColor();
      var style = '.' + 'dickGallup';
      var dickGallup = L.featureGroup([
          L.circleMarker([40.7342019, -74.0027957], {
            color: dickGallupColor
          }).bindPopup('<a href="/entities/dickGallup_207"><h3>Dick Gallup</h3></a><p>229 W 4th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(dickGallup);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="dickGallup.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="dickGallup.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.723947, -73.9891449], {
            color: dickGallupColor
          }).bindPopup('<a href="/entities/dickGallup_207"><h3>Dick Gallup</h3></a><p>58 E 1st St #5D<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(dickGallup);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="dickGallup.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="dickGallup.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([36.1552967, -95.9823574], {
            color: dickGallupColor
          }).bindPopup('<a href="/entities/dickGallup_207"><h3>Dick Gallup</h3></a><p>734 E 4th St<br />Tulsa, OK<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(dickGallup);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="dickGallup.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="dickGallup.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var drDavidGersteinColor = getRandomColor();
      var style = '.' + 'drDavidGerstein';
      var drDavidGerstein = L.featureGroup([
          L.circleMarker([40.7232946, -73.9845469], {
            color: drDavidGersteinColor
          }).bindPopup('<a href="/entities/drDavidGerstein_225"><h3>Dr. David Gerstein</h3></a><p>160 E 3rd St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(drDavidGerstein);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="drDavidGerstein.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="drDavidGerstein.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jeffGilesColor = getRandomColor();
      var style = '.' + 'jeffGiles';
      var jeffGiles = L.featureGroup([
          L.circleMarker([40.731867, -73.983213], {
            color: jeffGilesColor
          }).bindPopup('<a href="/entities/jeffGiles_375"><h3>Jeff Giles</h3></a><p>PO Box 94, Stuyvesant Station<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jeffGiles);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jeffGiles.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jeffGiles.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var salvadorGinerColor = getRandomColor();
      var style = '.' + 'salvadorGiner';
      var salvadorGiner = L.featureGroup([
          L.circleMarker([41.3850639, 2.1734035], {
            color: salvadorGinerColor
          }).bindPopup('<a href="/entities/salvadorGiner_202"><h3>Salvador Giner</h3></a><p>Milanesado 29<br />Barcelona, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(salvadorGiner);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="salvadorGiner.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="salvadorGiner.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var allenGinsbergColor = getRandomColor();
      var style = '.' + 'allenGinsberg';
      var allenGinsberg = L.featureGroup([
          L.circleMarker([40.7254798, -73.9770263], {
            color: allenGinsbergColor
          }).bindPopup('<a href="/entities/allenGinsberg_197"><h3>Allen Ginsberg</h3></a><p>408 E 10th St #4C<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(allenGinsberg);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="allenGinsberg.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="allenGinsberg.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7226831, -73.9793719], {
            color: allenGinsbergColor
          }).bindPopup('<a href="/entities/allenGinsberg_197"><h3>Allen Ginsberg</h3></a><p>704 E 5th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(allenGinsberg);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="allenGinsberg.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="allenGinsberg.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.7088575, -97.4281484], {
            color: allenGinsbergColor
          }).bindPopup('<a href="/entities/allenGinsberg_197"><h3>Allen Ginsberg</h3></a><p>1060 N Northwest Pkwy<br />Wichita, KS<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(allenGinsberg);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="allenGinsberg.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="allenGinsberg.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.7956294, -74.7532018], {
            color: allenGinsbergColor
          }).bindPopup('<a href="/entities/allenGinsberg_197"><h3>Allen Ginsberg</h3></a><p>East Hill Farm, RD2<br />Cherry Valley, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(allenGinsberg);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="allenGinsberg.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="allenGinsberg.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.731867, -73.983213], {
            color: allenGinsbergColor
          }).bindPopup('<a href="/entities/allenGinsberg_197"><h3>Allen Ginsberg</h3></a><p>PO Box 582 Peter Stuyvesant Station<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(allenGinsberg);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="allenGinsberg.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="allenGinsberg.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.732888, -73.99731], {
            color: allenGinsbergColor
          }).bindPopup('<a href="/entities/allenGinsberg_197"><h3>Allen Ginsberg</h3></a><p>17 W 8th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(allenGinsberg);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="allenGinsberg.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="allenGinsberg.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.797601, -122.406579], {
            color: allenGinsbergColor
          }).bindPopup('<a href="/entities/allenGinsberg_197"><h3>Allen Ginsberg</h3></a><p>261 Columbus Ave<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(allenGinsberg);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="allenGinsberg.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="allenGinsberg.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnGiornoColor = getRandomColor();
      var style = '.' + 'johnGiorno';
      var johnGiorno = L.featureGroup([
          L.circleMarker([40.7221412, -73.9937417], {
            color: johnGiornoColor
          }).bindPopup('<a href="/entities/johnGiorno_215"><h3>John Giorno</h3></a><p>222 Bowery<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnGiorno);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnGiorno.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnGiorno.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var danielaGioseffiColor = getRandomColor();
      var style = '.' + 'danielaGioseffi';
      var danielaGioseffi = L.featureGroup([
          L.circleMarker([40.632207, -73.943029], {
            color: danielaGioseffiColor
          }).bindPopup('<a href="/entities/danielaGioseffi_228"><h3>Daniela Gioseffi</h3></a><p>3413 Avenue H<br />Brooklyn, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(danielaGioseffi);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="danielaGioseffi.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="danielaGioseffi.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var mikeGoldbergColor = getRandomColor();
      var style = '.' + 'mikeGoldberg';
      var mikeGoldberg = L.featureGroup([
          L.circleMarker([40.7221412, -73.9937417], {
            color: mikeGoldbergColor
          }).bindPopup('<a href="/entities/mikeGoldberg_219"><h3>Mike Goldberg</h3></a><p>222 Bowery<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(mikeGoldberg);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="mikeGoldberg.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="mikeGoldberg.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var charlesGoldmanColor = getRandomColor();
      var style = '.' + 'charlesGoldman';
      var charlesGoldman = L.featureGroup([
          L.circleMarker([40.815096, -73.864482], {
            color: charlesGoldmanColor
          }).bindPopup('<a href="/entities/charlesGoldman_212"><h3>Charles Goldman</h3></a><p>513 Commonwealth Ave<br />Bronx, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(charlesGoldman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="charlesGoldman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="charlesGoldman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var GoldsteinColor = getRandomColor();
      var style = '.' + 'Goldstein';
      var Goldstein = L.featureGroup([
          L.circleMarker([41.329627, -71.905531], {
            color: GoldsteinColor
          }).bindPopup('<a href="/entities/Goldstein_221"><h3>Goldstein</h3></a><p>16 School St<br />Stonington, CT<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Goldstein);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Goldstein.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Goldstein.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var richardGoldsteinColor = getRandomColor();
      var style = '.' + 'richardGoldstein';
      var richardGoldstein = L.featureGroup([
          L.circleMarker([40.8075829, -73.9663347], {
            color: richardGoldsteinColor
          }).bindPopup('<a href="/entities/richardGoldstein_227"><h3>Richard Goldstein</h3></a><p>420 Riverside Dr<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(richardGoldstein);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="richardGoldstein.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="richardGoldstein.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ronGorchovColor = getRandomColor();
      var style = '.' + 'ronGorchov';
      var ronGorchov = L.featureGroup([
          L.circleMarker([40.722072, -74.0026309], {
            color: ronGorchovColor
          }).bindPopup('<a href="/entities/ronGorchov_222"><h3>Ron Gorchov</h3></a><p>74 Grand St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ronGorchov);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ronGorchov.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ronGorchov.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var GothamBookMartColor = getRandomColor();
      var style = '.' + 'GothamBookMart';
      var GothamBookMart = L.featureGroup([
          L.circleMarker([40.7578129, -73.9805234], {
            color: GothamBookMartColor
          }).bindPopup('<a href="/entities/GothamBookMart_206"><h3>Gotham Book Mart</h3></a><p>41 W 47th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(GothamBookMart);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="GothamBookMart.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="GothamBookMart.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var GrassrootsColor = getRandomColor();
      var style = '.' + 'Grassroots';
      var Grassroots = L.featureGroup([
          L.circleMarker([40.7497676, -111.881531], {
            color: GrassrootsColor
          }).bindPopup('<a href="/entities/Grassroots_220"><h3>Grassroots</h3></a><p>332 E. 9th<br />, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Grassroots);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Grassroots.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Grassroots.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var drReubenGreenbergColor = getRandomColor();
      var style = '.' + 'drReubenGreenberg';
      var drReubenGreenberg = L.featureGroup([
          L.circleMarker([40.7617685, -73.9871143], {
            color: drReubenGreenbergColor
          }).bindPopup('<a href="/entities/drReubenGreenberg_224"><h3>Dr. Reuben Greenberg</h3></a><p>300 W 49th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(drReubenGreenberg);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="drReubenGreenberg.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="drReubenGreenberg.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var tedGreenwaldColor = getRandomColor();
      var style = '.' + 'tedGreenwald';
      var tedGreenwald = L.featureGroup([
          L.circleMarker([40.766411, -73.98557], {
            color: tedGreenwaldColor
          }).bindPopup('<a href="/entities/tedGreenwald_218"><h3>Ted Greenwald</h3></a><p>347 W 55th St #8G<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tedGreenwald);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tedGreenwald.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tedGreenwald.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var redGroomsColor = getRandomColor();
      var style = '.' + 'redGrooms';
      var redGrooms = L.featureGroup([
          L.circleMarker([40.742526, -73.995312], {
            color: redGroomsColor
          }).bindPopup('<a href="/entities/redGrooms_146"><h3>Red Grooms</h3></a><p>145 W 21st St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(redGrooms);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="redGrooms.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="redGrooms.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var barbaraGuestColor = getRandomColor();
      var style = '.' + 'barbaraGuest';
      var barbaraGuest = L.featureGroup([
          L.circleMarker([40.787493, -73.955551], {
            color: barbaraGuestColor
          }).bindPopup('<a href="/entities/barbaraGuest_209"><h3>Barbara Guest</h3></a><p>1148 5th Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(barbaraGuest);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="barbaraGuest.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="barbaraGuest.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var HardwarePoetsOccasionalColor = getRandomColor();
      var style = '.' + 'HardwarePoetsOccasional';
      var HardwarePoetsOccasional = L.featureGroup([
          L.circleMarker([40.756497, -73.965951], {
            color: HardwarePoetsOccasionalColor
          }).bindPopup('<a href="/entities/HardwarePoetsOccasional_238"><h3>Hardware Poets Occasional</h3></a><p>323 E 53rd St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(HardwarePoetsOccasional);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="HardwarePoetsOccasional.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="HardwarePoetsOccasional.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var HarperSMagazineColor = getRandomColor();
      var style = '.' + 'HarperSMagazine';
      var HarperSMagazine = L.featureGroup([
          L.circleMarker([40.7463337, -73.9824637], {
            color: HarperSMagazineColor
          }).bindPopup('<a href="/entities/HarperSMagazine_251"><h3>Harper’s Magazine</h3></a><p>2 Park Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(HarperSMagazine);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="HarperSMagazine.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="HarperSMagazine.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var leeHarwoodColor = getRandomColor();
      var style = '.' + 'leeHarwood';
      var leeHarwood = L.featureGroup([
          L.circleMarker([51.4279099, -0.1191364], {
            color: leeHarwoodColor
          }).bindPopup('<a href="/entities/leeHarwood_244"><h3>Lee Harwood</h3></a><p>37 Wellclose Square<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(leeHarwood);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="leeHarwood.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="leeHarwood.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.8222499, -74.161454], {
            color: leeHarwoodColor
          }).bindPopup('<a href="/entities/leeHarwood_244"><h3>Lee Harwood</h3></a><p>435 Prospect St<br />Nutley, NJ<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(leeHarwood);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="leeHarwood.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="leeHarwood.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.510176, -0.0612615], {
            color: leeHarwoodColor
          }).bindPopup('<a href="/entities/leeHarwood_244"><h3>Lee Harwood</h3></a><p>Brockmer House 69, Crowder St<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(leeHarwood);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="leeHarwood.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="leeHarwood.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var rondaHaynesColor = getRandomColor();
      var style = '.' + 'rondaHaynes';
      var rondaHaynes = L.featureGroup([
          L.circleMarker([40.727445, -73.986284], {
            color: rondaHaynesColor
          }).bindPopup('<a href="/entities/rondaHaynes_266"><h3>Ronda Haynes</h3></a><p>77 E 7th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(rondaHaynes);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="rondaHaynes.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="rondaHaynes.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var pieroHeliczerColor = getRandomColor();
      var style = '.' + 'pieroHeliczer';
      var pieroHeliczer = L.featureGroup([
          L.circleMarker([40.7437619, -73.984106], {
            color: pieroHeliczerColor
          }).bindPopup('<a href="/entities/pieroHeliczer_255"><h3>Piero Heliczer</h3></a><p>414 Park Ave S<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(pieroHeliczer);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="pieroHeliczer.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="pieroHeliczer.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7155213, -73.9845544], {
            color: pieroHeliczerColor
          }).bindPopup('<a href="/entities/pieroHeliczer_255"><h3>Piero Heliczer</h3></a><p>450 Grand St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(pieroHeliczer);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="pieroHeliczer.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="pieroHeliczer.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var HenryMSnyderCoColor = getRandomColor();
      var style = '.' + 'HenryMSnyderCo';
      var HenryMSnyderCo = L.featureGroup([
          L.circleMarker([40.7444077, -73.983565], {
            color: HenryMSnyderCoColor
          }).bindPopup('<a href="/entities/HenryMSnyderCo_500"><h3>Henry M. Snyder &amp; Co.</h3></a><p>440 Park Ave S<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(HenryMSnyderCo);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="HenryMSnyderCo.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="HenryMSnyderCo.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var abbieHoffmanColor = getRandomColor();
      var style = '.' + 'abbieHoffman';
      var abbieHoffman = L.featureGroup([
          L.circleMarker([40.7286769, -73.9885815], {
            color: abbieHoffmanColor
          }).bindPopup('<a href="/entities/abbieHoffman_265"><h3>Abbie Hoffman</h3></a><p>30 St Marks Pl<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(abbieHoffman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="abbieHoffman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="abbieHoffman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var hildegardeHoffmannColor = getRandomColor();
      var style = '.' + 'hildegardeHoffmann';
      var hildegardeHoffmann = L.featureGroup([
          L.circleMarker([51.4798546, -0.1812476], {
            color: hildegardeHoffmannColor
          }).bindPopup('<a href="/entities/hildegardeHoffmann_259"><h3>Hildegarde Hoffmann</h3></a><p>5 Ashburnham Rd Chelsea<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(hildegardeHoffmann);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="hildegardeHoffmann.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="hildegardeHoffmann.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7425, -73.995251], {
            color: hildegardeHoffmannColor
          }).bindPopup('<a href="/entities/hildegardeHoffmann_259"><h3>Hildegarde Hoffmann</h3></a><p>143 W 21st St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(hildegardeHoffmann);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="hildegardeHoffmann.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="hildegardeHoffmann.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.4940608, -0.2064663], {
            color: hildegardeHoffmannColor
          }).bindPopup('<a href="/entities/hildegardeHoffmann_259"><h3>Hildegarde Hoffmann</h3></a><p>6 Lisgar Terrace<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(hildegardeHoffmann);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="hildegardeHoffmann.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="hildegardeHoffmann.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.726207, -73.990799], {
            color: hildegardeHoffmannColor
          }).bindPopup('<a href="/entities/hildegardeHoffmann_259"><h3>Hildegarde Hoffmann</h3></a><p>13 E 3rd St #2a<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(hildegardeHoffmann);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="hildegardeHoffmann.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="hildegardeHoffmann.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.725797, -73.979804], {
            color: hildegardeHoffmannColor
          }).bindPopup('<a href="/entities/hildegardeHoffmann_259"><h3>Hildegarde Hoffmann</h3></a><p>610 E 9th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(hildegardeHoffmann);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="hildegardeHoffmann.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="hildegardeHoffmann.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var HoltRinehartWinstonColor = getRandomColor();
      var style = '.' + 'HoltRinehartWinston';
      var HoltRinehartWinston = L.featureGroup([
          L.circleMarker([40.7556787, -73.9771774], {
            color: HoltRinehartWinstonColor
          }).bindPopup('<a href="/entities/HoltRinehartWinston_253"><h3>Holt Rinehart &amp; Winston</h3></a><p>383 Madison Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(HoltRinehartWinston);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="HoltRinehartWinston.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="HoltRinehartWinston.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var litaHornickColor = getRandomColor();
      var style = '.' + 'litaHornick';
      var litaHornick = L.featureGroup([
          L.circleMarker([40.775302, -73.9612114], {
            color: litaHornickColor
          }).bindPopup('<a href="/entities/litaHornick_230"><h3>Lita Hornick</h3></a><p>888 Park Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(litaHornick);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="litaHornick.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="litaHornick.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var HouseOfBooksLtdColor = getRandomColor();
      var style = '.' + 'HouseOfBooksLtd';
      var HouseOfBooksLtd = L.featureGroup([
          L.circleMarker([40.7641974, -73.9709453], {
            color: HouseOfBooksLtdColor
          }).bindPopup('<a href="/entities/HouseOfBooksLtd_112"><h3>House of Books Ltd</h3></a><p>18 E 60th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(HouseOfBooksLtd);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="HouseOfBooksLtd.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="HouseOfBooksLtd.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var charlesRHulbeckColor = getRandomColor();
      var style = '.' + 'charlesRHulbeck';
      var charlesRHulbeck = L.featureGroup([
          L.circleMarker([40.7741602, -73.9778955], {
            color: charlesRHulbeckColor
          }).bindPopup('<a href="/entities/charlesRHulbeck_254"><h3>Charles R. Hulbeck</h3></a><p>88 Central Park West<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(charlesRHulbeck);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="charlesRHulbeck.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="charlesRHulbeck.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var joanInglisColor = getRandomColor();
      var style = '.' + 'joanInglis';
      var joanInglis = L.featureGroup([
          L.circleMarker([40.7877641, -73.9751626], {
            color: joanInglisColor
          }).bindPopup('<a href="/entities/joanInglis_278"><h3>Joan Inglis</h3></a><p>205 W 86th St #712<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(joanInglis);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="joanInglis.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="joanInglis.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var emmettJarrettColor = getRandomColor();
      var style = '.' + 'emmettJarrett';
      var emmettJarrett = L.featureGroup([
          L.circleMarker([40.802399, -73.968866], {
            color: emmettJarrettColor
          }).bindPopup('<a href="/entities/emmettJarrett_348"><h3>Emmett Jarrett</h3></a><p>308 W 107th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(emmettJarrett);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="emmettJarrett.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="emmettJarrett.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jasperJohnsColor = getRandomColor();
      var style = '.' + 'jasperJohns';
      var jasperJohns = L.featureGroup([
          L.circleMarker([40.802402, -73.96962], {
            color: jasperJohnsColor
          }).bindPopup('<a href="/entities/jasperJohns_277"><h3>Jasper Johns</h3></a><p>340 Riverside Dr<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jasperJohns);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jasperJohns.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jasperJohns.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var hettieJonesColor = getRandomColor();
      var style = '.' + 'hettieJones';
      var hettieJones = L.featureGroup([
          L.circleMarker([40.7278082, -73.9909057], {
            color: hettieJonesColor
          }).bindPopup('<a href="/entities/hettieJones_319"><h3>Hettie Jones</h3></a><p>27 Cooper Square<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(hettieJones);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="hettieJones.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="hettieJones.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var leroiJonesColor = getRandomColor();
      var style = '.' + 'leroiJones';
      var leroiJones = L.featureGroup([
          L.circleMarker([40.7278082, -73.9909057], {
            color: leroiJonesColor
          }).bindPopup('<a href="/entities/leroiJones_346"><h3>LeRoi Jones</h3></a><p>27 Cooper Square<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(leroiJones);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="leroiJones.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="leroiJones.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7609207, -73.9721964], {
            color: leroiJonesColor
          }).bindPopup('<a href="/entities/leroiJones_346"><h3>LeRoi Jones</h3></a><p>75 E 55th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(leroiJones);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="leroiJones.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="leroiJones.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var claudiaKaneColor = getRandomColor();
      var style = '.' + 'claudiaKane';
      var claudiaKane = L.featureGroup([
          L.circleMarker([40.7217083, -73.9827531], {
            color: claudiaKaneColor
          }).bindPopup('<a href="/entities/claudiaKane_343"><h3>Claudia Kane</h3></a><p>220 E 2nd<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(claudiaKane);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="claudiaKane.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="claudiaKane.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var allanKaplanColor = getRandomColor();
      var style = '.' + 'allanKaplan';
      var allanKaplan = L.featureGroup([
          L.circleMarker([40.715763, -74.009398], {
            color: allanKaplanColor
          }).bindPopup('<a href="/entities/allanKaplan_322"><h3>Allan Kaplan</h3></a><p>548 1/2 Hudson St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(allanKaplan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="allanKaplan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="allanKaplan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var alexKatzColor = getRandomColor();
      var style = '.' + 'alexKatz';
      var alexKatz = L.featureGroup([
          L.circleMarker([40.741365, -73.990129], {
            color: alexKatzColor
          }).bindPopup('<a href="/entities/alexKatz_334"><h3>Alex Katz</h3></a><p>182 5th Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(alexKatz);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="alexKatz.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="alexKatz.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jackKerouacColor = getRandomColor();
      var style = '.' + 'jackKerouac';
      var jackKerouac = L.featureGroup([
          L.circleMarker([40.9044568, -73.3366719], {
            color: jackKerouacColor
          }).bindPopup('<a href="/entities/jackKerouac_326"><h3>Jack Kerouac</h3></a><p>9 Judy Ann Ct<br />Northport, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jackKerouac);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jackKerouac.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jackKerouac.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnKeysColor = getRandomColor();
      var style = '.' + 'johnKeys';
      var johnKeys = L.featureGroup([
          L.circleMarker([40.7234062, -73.9805632], {
            color: johnKeysColor
          }).bindPopup('<a href="/entities/johnKeys_317"><h3>John Keys</h3></a><p>637 E 5th St #8<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnKeys);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnKeys.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnKeys.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var georgeKimballColor = getRandomColor();
      var style = '.' + 'georgeKimball';
      var georgeKimball = L.featureGroup([
          L.circleMarker([40.7231831, -73.9794647], {
            color: georgeKimballColor
          }).bindPopup('<a href="/entities/georgeKimball_340"><h3>George Kimball</h3></a><p>82 Avenue C Apt. 2D<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(georgeKimball);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="georgeKimball.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="georgeKimball.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var basilKingColor = getRandomColor();
      var style = '.' + 'basilKing';
      var basilKing = L.featureGroup([
          L.circleMarker([40.7255101, -73.98991], {
            color: basilKingColor
          }).bindPopup('<a href="/entities/basilKing_321"><h3>Basil King</h3></a><p>52 2nd Ave #81<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(basilKing);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="basilKing.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="basilKing.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var galwayKinnellColor = getRandomColor();
      var style = '.' + 'galwayKinnell';
      var galwayKinnell = L.featureGroup([
          L.circleMarker([40.7748968, -73.9546067], {
            color: galwayKinnellColor
          }).bindPopup('<a href="/entities/galwayKinnell_315"><h3>Galway Kinnell</h3></a><p>241 E 81st St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(galwayKinnell);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="galwayKinnell.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="galwayKinnell.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.737141, -74.007272], {
            color: galwayKinnellColor
          }).bindPopup('<a href="/entities/galwayKinnell_315"><h3>Galway Kinnell</h3></a><p>28 Bethune St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(galwayKinnell);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="galwayKinnell.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="galwayKinnell.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var billKinsingerColor = getRandomColor();
      var style = '.' + 'billKinsinger';
      var billKinsinger = L.featureGroup([
          L.circleMarker([40.7156958, -74.0077872], {
            color: billKinsingerColor
          }).bindPopup('<a href="/entities/billKinsinger_342"><h3>Bill Kinsinger</h3></a><p>92 Reade St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(billKinsinger);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="billKinsinger.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="billKinsinger.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var kennethKochColor = getRandomColor();
      var style = '.' + 'kennethKoch';
      var kennethKoch = L.featureGroup([
          L.circleMarker([40.7354374, -74.0041098], {
            color: kennethKochColor
          }).bindPopup('<a href="/entities/kennethKoch_325"><h3>Kenneth Koch</h3></a><p>69 Perry St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(kennethKoch);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="kennethKoch.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="kennethKoch.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.735887, -74.003623], {
            color: kennethKochColor
          }).bindPopup('<a href="/entities/kennethKoch_325"><h3>Kenneth Koch</h3></a><p>278 W 4th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(kennethKoch);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="kennethKoch.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="kennethKoch.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jamesKollerColor = getRandomColor();
      var style = '.' + 'jamesKoller';
      var jamesKoller = L.featureGroup([
          L.circleMarker([35.678462, -105.924686], {
            color: jamesKollerColor
          }).bindPopup('<a href="/entities/jamesKoller_323"><h3>James Koller</h3></a><p>409 Camino Del Monte Sol<br />Santa Fe, NM<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jamesKoller);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jamesKoller.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jamesKoller.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([44.3486793, -70.0661649], {
            color: jamesKollerColor
          }).bindPopup('<a href="/entities/jamesKoller_323"><h3>James Koller</h3></a><p>PO Box 223<br />Wayne, ME<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jamesKoller);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jamesKoller.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jamesKoller.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.964926, -122.5333747], {
            color: jamesKollerColor
          }).bindPopup('<a href="/entities/jamesKoller_323"><h3>James Koller</h3></a><p>233 D St San Rafael<br />San Rafael, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jamesKoller);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jamesKoller.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jamesKoller.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([41.3680919, -89.4648145], {
            color: jamesKollerColor
          }).bindPopup('<a href="/entities/jamesKoller_323"><h3>James Koller</h3></a><p>RR #2<br />Princeton, IL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jamesKoller);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jamesKoller.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jamesKoller.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([38.375819, -122.811343], {
            color: jamesKollerColor
          }).bindPopup('<a href="/entities/jamesKoller_323"><h3>James Koller</h3></a><p>538 Sparkes Rd<br />Sebastopol, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jamesKoller);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jamesKoller.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jamesKoller.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var richardKolmarColor = getRandomColor();
      var style = '.' + 'richardKolmar';
      var richardKolmar = L.featureGroup([
          L.circleMarker([40.769039, -73.966287], {
            color: richardKolmarColor
          }).bindPopup('<a href="/entities/richardKolmar_316"><h3>Richard Kolmar</h3></a><p>45 E 68th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(richardKolmar);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="richardKolmar.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="richardKolmar.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7737324, -73.9553281], {
            color: richardKolmarColor
          }).bindPopup('<a href="/entities/richardKolmar_316"><h3>Richard Kolmar</h3></a><p>239 E 79th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(richardKolmar);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="richardKolmar.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="richardKolmar.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.848466, -122.4805816], {
            color: richardKolmarColor
          }).bindPopup('<a href="/entities/richardKolmar_316"><h3>Richard Kolmar</h3></a><p>110 2nd St<br />Sausalito, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(richardKolmar);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="richardKolmar.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="richardKolmar.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.7784659, -122.4349088], {
            color: richardKolmarColor
          }).bindPopup('<a href="/entities/richardKolmar_316"><h3>Richard Kolmar</h3></a><p>1394 McAllister St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(richardKolmar);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="richardKolmar.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="richardKolmar.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var lucyKostelanetzColor = getRandomColor();
      var style = '.' + 'lucyKostelanetz';
      var lucyKostelanetz = L.featureGroup([
          L.circleMarker([40.736902, -73.9821123], {
            color: lucyKostelanetzColor
          }).bindPopup('<a href="/entities/lucyKostelanetz_341"><h3>Lucy Kostelanetz</h3></a><p>245 E 21st St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lucyKostelanetz);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lucyKostelanetz.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lucyKostelanetz.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var bettyKrayColor = getRandomColor();
      var style = '.' + 'bettyKray';
      var bettyKray = L.featureGroup([
          L.circleMarker([40.7779897, -73.9611711], {
            color: bettyKrayColor
          }).bindPopup('<a href="/entities/bettyKray_19"><h3>Betty Kray</h3></a><p>1078 Madison Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bettyKray);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bettyKray.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bettyKray.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var allenKrebsColor = getRandomColor();
      var style = '.' + 'allenKrebs';
      var allenKrebs = L.featureGroup([
          L.circleMarker([40.7353447, -73.9926955], {
            color: allenKrebsColor
          }).bindPopup('<a href="/entities/allenKrebs_339"><h3>Allen Krebs</h3></a><p>20 E 14th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(allenKrebs);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="allenKrebs.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="allenKrebs.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var KulchurColor = getRandomColor();
      var style = '.' + 'Kulchur';
      var Kulchur = L.featureGroup([
          L.circleMarker([40.775302, -73.9612114], {
            color: KulchurColor
          }).bindPopup('<a href="/entities/Kulchur_229"><h3>Kulchur</h3></a><p>888 Park Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Kulchur);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Kulchur.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Kulchur.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var stanleyKunitzColor = getRandomColor();
      var style = '.' + 'stanleyKunitz';
      var stanleyKunitz = L.featureGroup([
          L.circleMarker([40.73699, -73.999483], {
            color: stanleyKunitzColor
          }).bindPopup('<a href="/entities/stanleyKunitz_337"><h3>Stanley Kunitz</h3></a><p>157 W 12th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(stanleyKunitz);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="stanleyKunitz.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="stanleyKunitz.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var gregKuzmaColor = getRandomColor();
      var style = '.' + 'gregKuzma';
      var gregKuzma = L.featureGroup([
          L.circleMarker([41.066164, -80.0521942], {
            color: gregKuzmaColor
          }).bindPopup('<a href="/entities/gregKuzma_311"><h3>Greg Kuzma</h3></a><p>134 Normal Ave<br />Slippery Rock, PA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(gregKuzma);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="gregKuzma.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="gregKuzma.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var joanneKygerColor = getRandomColor();
      var style = '.' + 'joanneKyger';
      var joanneKyger = L.featureGroup([
          L.circleMarker([37.787811, -122.430486], {
            color: joanneKygerColor
          }).bindPopup('<a href="/entities/joanneKyger_314"><h3>Joanne Kyger</h3></a><p>1907 Buchanan St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(joanneKyger);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="joanneKyger.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="joanneKyger.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.7864719, -122.4439142], {
            color: joanneKygerColor
          }).bindPopup('<a href="/entities/joanneKyger_314"><h3>Joanne Kyger</h3></a><p>2921 Pine St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(joanneKyger);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="joanneKyger.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="joanneKyger.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.6988043, -121.9463275], {
            color: joanneKygerColor
          }).bindPopup('<a href="/entities/joanneKyger_314"><h3>Joanne Kyger</h3></a><p>11021 Dublin Blvd<br />Dublin, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(joanneKyger);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="joanneKyger.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="joanneKyger.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7214775, -74.0023163], {
            color: joanneKygerColor
          }).bindPopup('<a href="/entities/joanneKyger_314"><h3>Joanne Kyger</h3></a><p>36 Greene St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(joanneKyger);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="joanneKyger.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="joanneKyger.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var LaceReviewColor = getRandomColor();
      var style = '.' + 'LaceReview';
      var LaceReview = L.featureGroup([
          L.circleMarker([40.7661173, -74.1895842], {
            color: LaceReviewColor
          }).bindPopup('<a href="/entities/LaceReview_593"><h3>Lace Review</h3></a><p>280 N 12th St<br />Newark, NJ<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(LaceReview);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="LaceReview.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="LaceReview.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var frankLauriaColor = getRandomColor();
      var style = '.' + 'frankLauria';
      var frankLauria = L.featureGroup([
          L.circleMarker([40.734947, -73.982122], {
            color: frankLauriaColor
          }).bindPopup('<a href="/entities/frankLauria_301"><h3>Frank Lauria</h3></a><p>316 E 19th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(frankLauria);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="frankLauria.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="frankLauria.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var joeLeSueurColor = getRandomColor();
      var style = '.' + 'joeLeSueur';
      var joeLeSueur = L.featureGroup([
          L.circleMarker([40.7244505, -73.9903594], {
            color: joeLeSueurColor
          }).bindPopup('<a href="/entities/joeLeSueur_303"><h3>Joe Le Sueur</h3></a><p>26 2nd Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(joeLeSueur);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="joeLeSueur.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="joeLeSueur.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var davidLehmanColor = getRandomColor();
      var style = '.' + 'davidLehman';
      var davidLehman = L.featureGroup([
          L.circleMarker([40.8625816, -73.92754], {
            color: davidLehmanColor
          }).bindPopup('<a href="/entities/davidLehman_306"><h3>David Lehman</h3></a><p>52 Arden St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidLehman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidLehman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidLehman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var deniseLevertovColor = getRandomColor();
      var style = '.' + 'deniseLevertov';
      var deniseLevertov = L.featureGroup([
          L.circleMarker([40.715314, -74.0112149], {
            color: deniseLevertovColor
          }).bindPopup('<a href="/entities/deniseLevertov_281"><h3>Denise Levertov</h3></a><p>277 Greenwich St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(deniseLevertov);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="deniseLevertov.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="deniseLevertov.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var frankLimaColor = getRandomColor();
      var style = '.' + 'frankLima';
      var frankLima = L.featureGroup([
          L.circleMarker([40.7259582, -73.990104], {
            color: frankLimaColor
          }).bindPopup('<a href="/entities/frankLima_304"><h3>Frank Lima</h3></a><p>57 2nd Ave #71<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(frankLima);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="frankLima.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="frankLima.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var LinesColor = getRandomColor();
      var style = '.' + 'Lines';
      var Lines = L.featureGroup([
          L.circleMarker([40.751458, -73.969513], {
            color: LinesColor
          }).bindPopup('<a href="/entities/Lines_286"><h3>Lines</h3></a><p>321 E 45th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Lines);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Lines.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Lines.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var shelleyLustigColor = getRandomColor();
      var style = '.' + 'shelleyLustig';
      var shelleyLustig = L.featureGroup([
          L.circleMarker([40.7824163, -73.9580737], {
            color: shelleyLustigColor
          }).bindPopup('<a href="/entities/shelleyLustig_305"><h3>Shelley Lustig</h3></a><p>19 E 88th St #3d<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(shelleyLustig);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="shelleyLustig.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="shelleyLustig.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var steveLyntonColor = getRandomColor();
      var style = '.' + 'steveLynton';
      var steveLynton = L.featureGroup([
          L.circleMarker([40.797357, -73.9609289], {
            color: steveLyntonColor
          }).bindPopup('<a href="/entities/steveLynton_284"><h3>Steve Lynton</h3></a><p>448 Central Park West #3d<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(steveLynton);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="steveLynton.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="steveLynton.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var lewisMacadamsColor = getRandomColor();
      var style = '.' + 'lewisMacadams';
      var lewisMacadams = L.featureGroup([
          L.circleMarker([40.3463337, -74.6609653], {
            color: lewisMacadamsColor
          }).bindPopup('<a href="/entities/lewisMacadams_373"><h3>Lewis MacAdams</h3></a><p>Foulke Hall, Princeton University<br />Princeton, NJ<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lewisMacadams);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lewisMacadams.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lewisMacadams.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([32.87247, -96.8875769], {
            color: lewisMacadamsColor
          }).bindPopup('<a href="/entities/lewisMacadams_373"><h3>Lewis MacAdams</h3></a><p>2635 Brenner Dr<br />Dallas, TX<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lewisMacadams);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lewisMacadams.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lewisMacadams.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([32.8931929, -96.816856], {
            color: lewisMacadamsColor
          }).bindPopup('<a href="/entities/lewisMacadams_373"><h3>Lewis MacAdams</h3></a><p>5233 Lobello Dr<br />Dallas, TX<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lewisMacadams);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lewisMacadams.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lewisMacadams.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.950489, -78.903465], {
            color: lewisMacadamsColor
          }).bindPopup('<a href="/entities/lewisMacadams_373"><h3>Lewis MacAdams</h3></a><p>204 Ontario St<br />Buffalo, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lewisMacadams);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lewisMacadams.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lewisMacadams.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.915119, -78.8827079], {
            color: lewisMacadamsColor
          }).bindPopup('<a href="/entities/lewisMacadams_373"><h3>Lewis MacAdams</h3></a><p>468 W Ferry St<br />Buffalo, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lewisMacadams);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lewisMacadams.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lewisMacadams.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.77262, -122.420437], {
            color: lewisMacadamsColor
          }).bindPopup('<a href="/entities/lewisMacadams_373"><h3>Lewis MacAdams</h3></a><p>60 Brady St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lewisMacadams);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lewisMacadams.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lewisMacadams.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.755275, -122.398432], {
            color: lewisMacadamsColor
          }).bindPopup('<a href="/entities/lewisMacadams_373"><h3>Lewis MacAdams</h3></a><p>969 Wisconsin St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lewisMacadams);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lewisMacadams.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lewisMacadams.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.731867, -73.983213], {
            color: lewisMacadamsColor
          }).bindPopup('<a href="/entities/lewisMacadams_373"><h3>Lewis MacAdams</h3></a><p>PO Box 94, Stuyvesant Station<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lewisMacadams);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lewisMacadams.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lewisMacadams.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var bruceMaddoxColor = getRandomColor();
      var style = '.' + 'bruceMaddox';
      var bruceMaddox = L.featureGroup([
          L.circleMarker([40.7359, -74.004046], {
            color: bruceMaddoxColor
          }).bindPopup('<a href="/entities/bruceMaddox_390"><h3>Bruce Maddox</h3></a><p>266 W 11th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bruceMaddox);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bruceMaddox.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bruceMaddox.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.656561, -74.004053], {
            color: bruceMaddoxColor
          }).bindPopup('<a href="/entities/bruceMaddox_390"><h3>Bruce Maddox</h3></a><p>130 33rd St<br />Brooklyn, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bruceMaddox);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bruceMaddox.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bruceMaddox.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var geraldMalangaColor = getRandomColor();
      var style = '.' + 'geraldMalanga';
      var geraldMalanga = L.featureGroup([
          L.circleMarker([40.7534145, -73.9707325], {
            color: geraldMalangaColor
          }).bindPopup('<a href="/entities/geraldMalanga_359"><h3>Gerald Malanga</h3></a><p>231 E 47th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(geraldMalanga);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="geraldMalanga.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="geraldMalanga.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.736861, -73.990964], {
            color: geraldMalangaColor
          }).bindPopup('<a href="/entities/geraldMalanga_359"><h3>Gerald Malanga</h3></a><p>33 Union Square W<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(geraldMalanga);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="geraldMalanga.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="geraldMalanga.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.8648859, -73.8923672], {
            color: geraldMalangaColor
          }).bindPopup('<a href="/entities/geraldMalanga_359"><h3>Gerald Malanga</h3></a><p>269 E 194th St<br />Bronx, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(geraldMalanga);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="geraldMalanga.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="geraldMalanga.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var bernadetteMayerColor = getRandomColor();
      var style = '.' + 'bernadetteMayer';
      var bernadetteMayer = L.featureGroup([
          L.circleMarker([40.730778, -73.9879009], {
            color: bernadetteMayerColor
          }).bindPopup('<a href="/entities/bernadetteMayer_393"><h3>Bernadette Mayer</h3></a><p>214 E 11th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bernadetteMayer);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bernadetteMayer.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bernadetteMayer.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.728053, -73.983983], {
            color: bernadetteMayerColor
          }).bindPopup('<a href="/entities/bernadetteMayer_393"><h3>Bernadette Mayer</h3></a><p>413 E 9th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bernadetteMayer);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bernadetteMayer.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bernadetteMayer.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.768832, -73.95189], {
            color: bernadetteMayerColor
          }).bindPopup('<a href="/entities/bernadetteMayer_393"><h3>Bernadette Mayer</h3></a><p>1416 York Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bernadetteMayer);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bernadetteMayer.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bernadetteMayer.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnMaynardColor = getRandomColor();
      var style = '.' + 'johnMaynard';
      var johnMaynard = L.featureGroup([
          L.circleMarker([40.805796, -73.7020469], {
            color: johnMaynardColor
          }).bindPopup('<a href="/entities/johnMaynard_355"><h3>John Maynard</h3></a><p>46 Westgate Blvd<br />Manhasset, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnMaynard);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnMaynard.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnMaynard.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var frankMcculloughColor = getRandomColor();
      var style = '.' + 'frankMccullough';
      var frankMccullough = L.featureGroup([
          L.circleMarker([40.690844, -73.993137], {
            color: frankMcculloughColor
          }).bindPopup('<a href="/entities/frankMccullough_389"><h3>Frank McCullough</h3></a><p>151 State St<br />Brooklyn, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(frankMccullough);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="frankMccullough.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="frankMccullough.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var davidMcreynoldsColor = getRandomColor();
      var style = '.' + 'davidMcreynolds';
      var davidMcreynolds = L.featureGroup([
          L.circleMarker([40.7114436, -74.0067453], {
            color: davidMcreynoldsColor
          }).bindPopup('<a href="/entities/davidMcreynolds_368"><h3>David McReynolds</h3></a><p>5 Beekman St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidMcreynolds);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidMcreynolds.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidMcreynolds.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var andyMeyerColor = getRandomColor();
      var style = '.' + 'andyMeyer';
      var andyMeyer = L.featureGroup([
          L.circleMarker([40.7398577, -73.9814], {
            color: andyMeyerColor
          }).bindPopup('<a href="/entities/andyMeyer_388"><h3>Andy Meyer</h3></a><p>215 E 25th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(andyMeyer);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="andyMeyer.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="andyMeyer.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var larryMeyersColor = getRandomColor();
      var style = '.' + 'larryMeyers';
      var larryMeyers = L.featureGroup([
          L.circleMarker([40.7244465, -73.0729828], {
            color: larryMeyersColor
          }).bindPopup('<a href="/entities/larryMeyers_356"><h3>Larry Meyers</h3></a><p>42 Browns River Rd<br />Sayville, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(larryMeyers);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="larryMeyers.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="larryMeyers.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7299503, -73.9991708], {
            color: larryMeyersColor
          }).bindPopup('<a href="/entities/larryMeyers_356"><h3>Larry Meyers</h3></a><p>91 W 3rd St #34, New York University<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(larryMeyers);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="larryMeyers.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="larryMeyers.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7289079, -73.980317], {
            color: larryMeyersColor
          }).bindPopup('<a href="/entities/larryMeyers_356"><h3>Larry Meyers</h3></a><p>517 E 12th St #12<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(larryMeyers);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="larryMeyers.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="larryMeyers.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7269487, -73.993372], {
            color: larryMeyersColor
          }).bindPopup('<a href="/entities/larryMeyers_356"><h3>Larry Meyers</h3></a><p>27 Great Jones St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(larryMeyers);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="larryMeyers.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="larryMeyers.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([39.014944, -77.047847], {
            color: larryMeyersColor
          }).bindPopup('<a href="/entities/larryMeyers_356"><h3>Larry Meyers</h3></a><p>9708 Belvedere Pl<br />Silver Spring, MD<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(larryMeyers);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="larryMeyers.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="larryMeyers.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var davidMobergColor = getRandomColor();
      var style = '.' + 'davidMoberg';
      var davidMoberg = L.featureGroup([
          L.circleMarker([44.4545784, -93.165487], {
            color: davidMobergColor
          }).bindPopup('<a href="/entities/davidMoberg_374"><h3>David Moberg</h3></a><p>PO Box 286<br />Northfield, MN<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidMoberg);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidMoberg.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidMoberg.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.731867, -73.983213], {
            color: davidMobergColor
          }).bindPopup('<a href="/entities/davidMoberg_374"><h3>David Moberg</h3></a><p>PO Box 94, Stuyvesant Station<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidMoberg);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidMoberg.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidMoberg.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var carlMorseColor = getRandomColor();
      var style = '.' + 'carlMorse';
      var carlMorse = L.featureGroup([
          L.circleMarker([40.7748968, -73.9546067], {
            color: carlMorseColor
          }).bindPopup('<a href="/entities/carlMorse_391"><h3>Carl Morse</h3></a><p>241 E 81st St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(carlMorse);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="carlMorse.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="carlMorse.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var MotherColor = getRandomColor();
      var style = '.' + 'Mother';
      var Mother = L.featureGroup([
          L.circleMarker([44.4545784, -93.165487], {
            color: MotherColor
          }).bindPopup('<a href="/entities/Mother_370"><h3>Mother</h3></a><p>PO Box 286<br />Northfield, MN<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Mother);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Mother.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Mother.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.731867, -73.983213], {
            color: MotherColor
          }).bindPopup('<a href="/entities/Mother_370"><h3>Mother</h3></a><p>PO Box 94, Stuyvesant Station<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Mother);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Mother.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Mother.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var NadadaColor = getRandomColor();
      var style = '.' + 'Nadada';
      var Nadada = L.featureGroup([
          L.circleMarker([40.655888, -73.923576], {
            color: NadadaColor
          }).bindPopup('<a href="/entities/Nadada_398"><h3>Nadada</h3></a><p>PO Box 384, Lenox Hill Station<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Nadada);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Nadada.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Nadada.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var NemperorArtistsColor = getRandomColor();
      var style = '.' + 'NemperorArtists';
      var NemperorArtists = L.featureGroup([
          L.circleMarker([40.7571205, -73.9864116], {
            color: NemperorArtistsColor
          }).bindPopup('<a href="/entities/NemperorArtists_122"><h3>Nemperor Artists</h3></a><p>1501 Broadway<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(NemperorArtists);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="NemperorArtists.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="NemperorArtists.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var peterNevraumontColor = getRandomColor();
      var style = '.' + 'peterNevraumont';
      var peterNevraumont = L.featureGroup([
          L.circleMarker([40.728808, -73.97828], {
            color: peterNevraumontColor
          }).bindPopup('<a href="/entities/peterNevraumont_400"><h3>Peter Nevraumont</h3></a><p>605 E 13th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(peterNevraumont);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="peterNevraumont.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="peterNevraumont.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var NewYorkTimesColor = getRandomColor();
      var style = '.' + 'NewYorkTimes';
      var NewYorkTimes = L.featureGroup([
          L.circleMarker([40.7574713, -73.9877319], {
            color: NewYorkTimesColor
          }).bindPopup('<a href="/entities/NewYorkTimes_591"><h3>New York Times</h3></a><p>229 W 43rd St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(NewYorkTimes);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="NewYorkTimes.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="NewYorkTimes.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var NewYorkerColor = getRandomColor();
      var style = '.' + 'NewYorker';
      var NewYorker = L.featureGroup([
          L.circleMarker([40.7549127, -73.9816884], {
            color: NewYorkerColor
          }).bindPopup('<a href="/entities/NewYorker_402"><h3>New Yorker</h3></a><p>25 W 43rd St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(NewYorker);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="NewYorker.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="NewYorker.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var nilNilColor = getRandomColor();
      var style = '.' + 'nilNil';
      var nilNil = L.featureGroup([
          L.circleMarker([40.9179505, -74.139444], {
            color: nilNilColor
          }).bindPopup('<a href="/entities/nilNil_124"><h3>Nil Nil</h3></a><p>139 Derrom Ave<br />, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(nilNil);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="nilNil.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="nilNil.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.856018, -122.265311], {
            color: nilNilColor
          }).bindPopup('<a href="/entities/nilNil_124"><h3>Nil Nil</h3></a><p>2927 Lorina St<br />Berkeley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(nilNil);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="nilNil.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="nilNil.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.862245, -122.254595], {
            color: nilNilColor
          }).bindPopup('<a href="/entities/nilNil_124"><h3>Nil Nil</h3></a><p>2633 Benvenue<br />Berkeley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(nilNil);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="nilNil.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="nilNil.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.9093702, -122.6863733], {
            color: nilNilColor
          }).bindPopup('<a href="/entities/nilNil_124"><h3>Nil Nil</h3></a><p>PO Box 188<br />Bolinas, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(nilNil);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="nilNil.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="nilNil.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.733803, -74.0023857], {
            color: nilNilColor
          }).bindPopup('<a href="/entities/nilNil_124"><h3>Nil Nil</h3></a><p>Lion’s Head, 59 Christopher St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(nilNil);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="nilNil.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="nilNil.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7325, -73.998692], {
            color: nilNilColor
          }).bindPopup('<a href="/entities/nilNil_124"><h3>Nil Nil</h3></a><p>Hotel Earle, 103 Waverly Place<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(nilNil);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="nilNil.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="nilNil.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.9093702, -122.6863733], {
            color: nilNilColor
          }).bindPopup('<a href="/entities/nilNil_124"><h3>Nil Nil</h3></a><p><br />Bolinas, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(nilNil);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="nilNil.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="nilNil.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jackieNoyesColor = getRandomColor();
      var style = '.' + 'jackieNoyes';
      var jackieNoyes = L.featureGroup([
          L.circleMarker([40.7742008, -73.9649045], {
            color: jackieNoyesColor
          }).bindPopup('<a href="/entities/jackieNoyes_401"><h3>Jackie Noyes</h3></a><p>3 E. 75 St. apt 6B<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jackieNoyes);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jackieNoyes.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jackieNoyes.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var hiltonObenzingerColor = getRandomColor();
      var style = '.' + 'hiltonObenzinger';
      var hiltonObenzinger = L.featureGroup([
          L.circleMarker([40.8043437, -73.9675349], {
            color: hiltonObenzingerColor
          }).bindPopup('<a href="/entities/hiltonObenzinger_416"><h3>Hilton Obenzinger</h3></a><p>610 W 110th St, #5A<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(hiltonObenzinger);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="hiltonObenzinger.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="hiltonObenzinger.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.4693064, -123.7997628], {
            color: hiltonObenzingerColor
          }).bindPopup('<a href="/entities/hiltonObenzinger_416"><h3>Hilton Obenzinger</h3></a><p>PO Box 147<br />Bridgeville, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(hiltonObenzinger);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="hiltonObenzinger.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="hiltonObenzinger.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var joelOppenheimerColor = getRandomColor();
      var style = '.' + 'joelOppenheimer';
      var joelOppenheimer = L.featureGroup([
          L.circleMarker([40.7219327, -73.9794054], {
            color: joelOppenheimerColor
          }).bindPopup('<a href="/entities/joelOppenheimer_408"><h3>Joel Oppenheimer</h3></a><p>317 E 4th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(joelOppenheimer);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="joelOppenheimer.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="joelOppenheimer.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var maureenOwenColor = getRandomColor();
      var style = '.' + 'maureenOwen';
      var maureenOwen = L.featureGroup([
          L.circleMarker([40.801867, -73.961971], {
            color: maureenOwenColor
          }).bindPopup('<a href="/entities/maureenOwen_417"><h3>Maureen Owen</h3></a><p>412 W 110th St #42<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(maureenOwen);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="maureenOwen.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="maureenOwen.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var rochelleOwensColor = getRandomColor();
      var style = '.' + 'rochelleOwens';
      var rochelleOwens = L.featureGroup([
          L.circleMarker([40.808164, -73.9646964], {
            color: rochelleOwensColor
          }).bindPopup('<a href="/entities/rochelleOwens_415"><h3>Rochelle Owens</h3></a><p>606 W 116th St #34 Columbia University<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(rochelleOwens);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="rochelleOwens.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="rochelleOwens.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var frankOHaraColor = getRandomColor();
      var style = '.' + 'frankOHara';
      var frankOHara = L.featureGroup([
          L.circleMarker([40.7320936, -73.9916566], {
            color: frankOHaraColor
          }).bindPopup('<a href="/entities/frankOHara_410"><h3>Frank O’Hara</h3></a><p>791 Broadway<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(frankOHara);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="frankOHara.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="frankOHara.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7614327, -73.9776216], {
            color: frankOHaraColor
          }).bindPopup('<a href="/entities/frankOHara_410"><h3>Frank O’Hara</h3></a><p>Museum of Modern Art, 11 W 53rd St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(frankOHara);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="frankOHara.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="frankOHara.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var evePackerColor = getRandomColor();
      var style = '.' + 'evePacker';
      var evePacker = L.featureGroup([
          L.circleMarker([51.5185012, -0.1167587], {
            color: evePackerColor
          }).bindPopup('<a href="/entities/evePacker_439"><h3>Eve Packer</h3></a><p>76 Red Lion St<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(evePacker);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="evePacker.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="evePacker.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.8329185, -73.9179103], {
            color: evePackerColor
          }).bindPopup('<a href="/entities/evePacker_439"><h3>Eve Packer</h3></a><p>185 Mcclellan St #2M<br />Bronx, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(evePacker);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="evePacker.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="evePacker.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7790479, -73.9809143], {
            color: evePackerColor
          }).bindPopup('<a href="/entities/evePacker_439"><h3>Eve Packer</h3></a><p>170 W 73rd St #6D<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(evePacker);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="evePacker.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="evePacker.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ronPadgettColor = getRandomColor();
      var style = '.' + 'ronPadgett';
      var ronPadgett = L.featureGroup([
          L.circleMarker([40.789141, -73.975025], {
            color: ronPadgettColor
          }).bindPopup('<a href="/entities/ronPadgett_425"><h3>Ron Padgett</h3></a><p>210 W 88th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ronPadgett);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ronPadgett.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ronPadgett.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([36.15581, -95.950029], {
            color: ronPadgettColor
          }).bindPopup('<a href="/entities/ronPadgett_425"><h3>Ron Padgett</h3></a><p>2733 E 4th St<br />Tulsa, OK<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ronPadgett);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ronPadgett.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ronPadgett.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.730763, -73.983955], {
            color: ronPadgettColor
          }).bindPopup('<a href="/entities/ronPadgett_425"><h3>Ron Padgett</h3></a><p>342 E 13th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ronPadgett);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ronPadgett.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ronPadgett.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([36.0607396, -95.9372366], {
            color: ronPadgettColor
          }).bindPopup('<a href="/entities/ronPadgett_425"><h3>Ron Padgett</h3></a><p>3819 S Jamestown<br />Tulsa, OK<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ronPadgett);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ronPadgett.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ronPadgett.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([48.8538435, 2.3784386], {
            color: ronPadgettColor
          }).bindPopup('<a href="/entities/ronPadgett_425"><h3>Ron Padgett</h3></a><p>1 Passage Rauch<br />Paris, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ronPadgett);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ronPadgett.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ronPadgett.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var anitaPandolfiColor = getRandomColor();
      var style = '.' + 'anitaPandolfi';
      var anitaPandolfi = L.featureGroup([
          L.circleMarker([40.7290188, -73.9807509], {
            color: anitaPandolfiColor
          }).bindPopup('<a href="/entities/anitaPandolfi_443"><h3>Anita Pandolfi</h3></a><p>507 E 12th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(anitaPandolfi);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="anitaPandolfi.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="anitaPandolfi.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([41.556994, -87.656182], {
            color: anitaPandolfiColor
          }).bindPopup('<a href="/entities/anitaPandolfi_443"><h3>Anita Pandolfi</h3></a><p>1611 183rd St<br />Homewood, IL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(anitaPandolfi);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="anitaPandolfi.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="anitaPandolfi.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var PeaceEyeBookshopColor = getRandomColor();
      var style = '.' + 'PeaceEyeBookshop';
      var PeaceEyeBookshop = L.featureGroup([
          L.circleMarker([40.7261696, -73.978295], {
            color: PeaceEyeBookshopColor
          }).bindPopup('<a href="/entities/PeaceEyeBookshop_460"><h3>Peace Eye Bookshop</h3></a><p>383 E 10th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(PeaceEyeBookshop);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="PeaceEyeBookshop.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="PeaceEyeBookshop.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var simonPerchikColor = getRandomColor();
      var style = '.' + 'simonPerchik';
      var simonPerchik = L.featureGroup([
          L.circleMarker([40.635092, -74.162079], {
            color: simonPerchikColor
          }).bindPopup('<a href="/entities/simonPerchik_420"><h3>Simon Perchik</h3></a><p>1 Davidson St<br />Staten Island, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(simonPerchik);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="simonPerchik.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="simonPerchik.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnPerreaultColor = getRandomColor();
      var style = '.' + 'johnPerreault';
      var johnPerreault = L.featureGroup([
          L.circleMarker([40.7336389, -74.005667], {
            color: johnPerreaultColor
          }).bindPopup('<a href="/entities/johnPerreault_435"><h3>John Perreault</h3></a><p>242 W 10th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnPerreault);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnPerreault.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnPerreault.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7257484, -74.0013554], {
            color: johnPerreaultColor
          }).bindPopup('<a href="/entities/johnPerreault_435"><h3>John Perreault</h3></a><p>156 Prince St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnPerreault);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnPerreault.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnPerreault.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7238734, -73.9761971], {
            color: johnPerreaultColor
          }).bindPopup('<a href="/entities/johnPerreault_435"><h3>John Perreault</h3></a><p>403 E 8th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnPerreault);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnPerreault.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnPerreault.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var chrisPetersonColor = getRandomColor();
      var style = '.' + 'chrisPeterson';
      var chrisPeterson = L.featureGroup([
          L.circleMarker([40.8383314, -73.9467869], {
            color: chrisPetersonColor
          }).bindPopup('<a href="/entities/chrisPeterson_445"><h3>Chris Peterson</h3></a><p>884 Riverside Dr #3D<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(chrisPeterson);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="chrisPeterson.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="chrisPeterson.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.8157256, -73.9601231], {
            color: chrisPetersonColor
          }).bindPopup('<a href="/entities/chrisPeterson_445"><h3>Chris Peterson</h3></a><p>69 Tiemann Pl #68<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(chrisPeterson);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="chrisPeterson.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="chrisPeterson.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var donaldPhelpsColor = getRandomColor();
      var style = '.' + 'donaldPhelps';
      var donaldPhelps = L.featureGroup([
          L.circleMarker([40.684334, -73.908013], {
            color: donaldPhelpsColor
          }).bindPopup('<a href="/entities/donaldPhelps_437"><h3>Donald Phelps</h3></a><p>694 Chauncey St<br />Brooklyn, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(donaldPhelps);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="donaldPhelps.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="donaldPhelps.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var PhoenixBookShopColor = getRandomColor();
      var style = '.' + 'PhoenixBookShop';
      var PhoenixBookShop = L.featureGroup([
          L.circleMarker([40.7313345, -74.001914], {
            color: PhoenixBookShopColor
          }).bindPopup('<a href="/entities/PhoenixBookShop_431"><h3>Phoenix Book Shop</h3></a><p>18 Cornelia St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(PhoenixBookShop);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="PhoenixBookShop.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="PhoenixBookShop.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var joePinelliColor = getRandomColor();
      var style = '.' + 'joePinelli';
      var joePinelli = L.featureGroup([
          L.circleMarker([40.7213002, -73.9843593], {
            color: joePinelliColor
          }).bindPopup('<a href="/entities/joePinelli_436"><h3>Joe Pinelli</h3></a><p>283 E Houston St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(joePinelli);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="joePinelli.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="joePinelli.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7249796, -73.9781509], {
            color: joePinelliColor
          }).bindPopup('<a href="/entities/joePinelli_436"><h3>Joe Pinelli</h3></a><p>134 Avenue C #7<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(joePinelli);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="joePinelli.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="joePinelli.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.721026, -73.983804], {
            color: joePinelliColor
          }).bindPopup('<a href="/entities/joePinelli_436"><h3>Joe Pinelli</h3></a><p>6 Clinton St #5<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(joePinelli);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="joePinelli.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="joePinelli.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([55.6905473, 12.5610302], {
            color: joePinelliColor
          }).bindPopup('<a href="/entities/joePinelli_436"><h3>Joe Pinelli</h3></a><p>DIS Student Hostel, Sankt Hans Torv 26<br />Copenhagen, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(joePinelli);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="joePinelli.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="joePinelli.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([55.6813913, 12.5912244], {
            color: joePinelliColor
          }).bindPopup('<a href="/entities/joePinelli_436"><h3>Joe Pinelli</h3></a><p>Hotel Sankt Annæ, Sankt Annæ Plads 12<br />Copenhagen, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(joePinelli);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="joePinelli.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="joePinelli.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([55.6833023, 12.5677456], {
            color: joePinelliColor
          }).bindPopup('<a href="/entities/joePinelli_436"><h3>Joe Pinelli</h3></a><p>Rømersgade 7<br />Copenhagen, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(joePinelli);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="joePinelli.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="joePinelli.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.723903, -73.980852], {
            color: joePinelliColor
          }).bindPopup('<a href="/entities/joePinelli_436"><h3>Joe Pinelli</h3></a><p>620 E 6th St #19<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(joePinelli);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="joePinelli.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="joePinelli.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var georgePittsColor = getRandomColor();
      var style = '.' + 'georgePitts';
      var georgePitts = L.featureGroup([
          L.circleMarker([40.7218206, -74.0001738], {
            color: georgePittsColor
          }).bindPopup('<a href="/entities/georgePitts_449"><h3>George Pitts</h3></a><p>487 Broadway #1202<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(georgePitts);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="georgePitts.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="georgePitts.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var georgePlimptonColor = getRandomColor();
      var style = '.' + 'georgePlimpton';
      var georgePlimpton = L.featureGroup([
          L.circleMarker([40.7660231, -73.9515768], {
            color: georgePlimptonColor
          }).bindPopup('<a href="/entities/georgePlimpton_419"><h3>George Plimpton</h3></a><p>541 E 72nd St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(georgePlimpton);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="georgePlimpton.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="georgePlimpton.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.788867, -73.954606], {
            color: georgePlimptonColor
          }).bindPopup('<a href="/entities/georgePlimpton_419"><h3>George Plimpton</h3></a><p>1165 5th Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(georgePlimpton);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="georgePlimpton.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="georgePlimpton.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var PoetryCenterYmhaYwhaColor = getRandomColor();
      var style = '.' + 'PoetryCenterYmhaYwha';
      var PoetryCenterYmhaYwha = L.featureGroup([
          L.circleMarker([40.7830623, -73.9526804], {
            color: PoetryCenterYmhaYwhaColor
          }).bindPopup('<a href="/entities/PoetryCenterYmhaYwha_579"><h3>Poetry Center, YMHA, YWHA</h3></a><p>1395 Lexington Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(PoetryCenterYmhaYwha);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="PoetryCenterYmhaYwha.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="PoetryCenterYmhaYwha.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var PogamogganColor = getRandomColor();
      var style = '.' + 'Pogamoggan';
      var Pogamoggan = L.featureGroup([
          L.circleMarker([40.637544, -73.956918], {
            color: PogamogganColor
          }).bindPopup('<a href="/entities/Pogamoggan_429"><h3>Pogamoggan</h3></a><p>600 E 22nd St<br />Brooklyn, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Pogamoggan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Pogamoggan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Pogamoggan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var RandomHouseColor = getRandomColor();
      var style = '.' + 'RandomHouse';
      var RandomHouse = L.featureGroup([
          L.circleMarker([40.758134, -73.9751767], {
            color: RandomHouseColor
          }).bindPopup('<a href="/entities/RandomHouse_475"><h3>Random House</h3></a><p>457 Madison Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(RandomHouse);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="RandomHouse.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="RandomHouse.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7558142, -73.9707189], {
            color: RandomHouseColor
          }).bindPopup('<a href="/entities/RandomHouse_475"><h3>Random House</h3></a><p>201 E 50th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(RandomHouse);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="RandomHouse.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="RandomHouse.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ellenRayColor = getRandomColor();
      var style = '.' + 'ellenRay';
      var ellenRay = L.featureGroup([
          L.circleMarker([40.7761468, -73.9602996], {
            color: ellenRayColor
          }).bindPopup('<a href="/entities/ellenRay_480"><h3>Ellen Ray</h3></a><p>904 Park Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ellenRay);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ellenRay.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ellenRay.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var louReedColor = getRandomColor();
      var style = '.' + 'louReed';
      var louReed = L.featureGroup([
          L.circleMarker([40.756422, -73.963084], {
            color: louReedColor
          }).bindPopup('<a href="/entities/louReed_481"><h3>Lou Reed</h3></a><p>412 E 55th St #10G<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(louReed);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="louReed.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="louReed.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7744828, -73.9651302], {
            color: louReedColor
          }).bindPopup('<a href="/entities/louReed_481"><h3>Lou Reed</h3></a><p>35 Oakfield Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(louReed);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="louReed.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="louReed.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var albertReneRicardColor = getRandomColor();
      var style = '.' + 'albertReneRicard';
      var albertReneRicard = L.featureGroup([
          L.circleMarker([40.737029, -73.998813], {
            color: albertReneRicardColor
          }).bindPopup('<a href="/entities/albertReneRicard_463"><h3>Albert René Ricard</h3></a><p>128 W 13th St #13<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(albertReneRicard);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="albertReneRicard.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="albertReneRicard.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var RobertsRecordsColor = getRandomColor();
      var style = '.' + 'RobertsRecords';
      var RobertsRecords = L.featureGroup([
          L.circleMarker([40.7269536, -73.9828337], {
            color: RobertsRecordsColor
          }).bindPopup('<a href="/entities/RobertsRecords_474"><h3>Roberts Records</h3></a><p>133 Avenue A<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(RobertsRecords);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="RobertsRecords.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="RobertsRecords.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var RockefellerFoundationColor = getRandomColor();
      var style = '.' + 'RockefellerFoundation';
      var RockefellerFoundation = L.featureGroup([
          L.circleMarker([40.759532, -73.9795414], {
            color: RockefellerFoundationColor
          }).bindPopup('<a href="/entities/RockefellerFoundation_191"><h3>Rockefeller Foundation</h3></a><p>111 W 50th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(RockefellerFoundation);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="RockefellerFoundation.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="RockefellerFoundation.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var sharonRosenbergColor = getRandomColor();
      var style = '.' + 'sharonRosenberg';
      var sharonRosenberg = L.featureGroup([
          L.circleMarker([40.724405, -73.9814591], {
            color: sharonRosenbergColor
          }).bindPopup('<a href="/entities/sharonRosenberg_471"><h3>Sharon Rosenberg</h3></a><p>603 E 6th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(sharonRosenberg);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="sharonRosenberg.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="sharonRosenberg.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var josieRosenfeldColor = getRandomColor();
      var style = '.' + 'josieRosenfeld';
      var josieRosenfeld = L.featureGroup([
          L.circleMarker([40.7794049, -73.985168], {
            color: josieRosenfeldColor
          }).bindPopup('<a href="/entities/josieRosenfeld_473"><h3>Josie Rosenfeld</h3></a><p>243 West End Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(josieRosenfeld);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="josieRosenfeld.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="josieRosenfeld.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jeromeRothenbergColor = getRandomColor();
      var style = '.' + 'jeromeRothenberg';
      var jeromeRothenberg = L.featureGroup([
          L.circleMarker([40.8379065, -73.9425767], {
            color: jeromeRothenbergColor
          }).bindPopup('<a href="/entities/jeromeRothenberg_472"><h3>Jerome Rothenberg</h3></a><p>600 W 163rd St<br />New York, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jeromeRothenberg);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jeromeRothenberg.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jeromeRothenberg.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var dDMrsRyanIiiColor = getRandomColor();
      var style = '.' + 'dDMrsRyanIii';
      var dDMrsRyanIii = L.featureGroup([
          L.circleMarker([40.754052, -73.963281], {
            color: dDMrsRyanIiiColor
          }).bindPopup('<a href="/entities/dDMrsRyanIii_470"><h3>D.D. (Mrs.) Ryan III</h3></a><p>450 E 52nd St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(dDMrsRyanIii);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="dDMrsRyanIii.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="dDMrsRyanIii.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var edSandersColor = getRandomColor();
      var style = '.' + 'edSanders';
      var edSanders = L.featureGroup([
          L.circleMarker([40.7261696, -73.978295], {
            color: edSandersColor
          }).bindPopup('<a href="/entities/edSanders_461"><h3>Ed Sanders</h3></a><p>383 E 10th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edSanders);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edSanders.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edSanders.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.731867, -73.983213], {
            color: edSandersColor
          }).bindPopup('<a href="/entities/edSanders_461"><h3>Ed Sanders</h3></a><p>PO Box 193 Stuyvesant Station<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edSanders);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edSanders.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edSanders.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7291552, -73.9810171], {
            color: edSandersColor
          }).bindPopup('<a href="/entities/edSanders_461"><h3>Ed Sanders</h3></a><p>196 Avenue A<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edSanders);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edSanders.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edSanders.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7368607, -74.0096127], {
            color: edSandersColor
          }).bindPopup('<a href="/entities/edSanders_461"><h3>Ed Sanders</h3></a><p>Westbeth Artists Community, 463 West St #311<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edSanders);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edSanders.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edSanders.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.0389819, -74.1158895], {
            color: edSandersColor
          }).bindPopup('<a href="/entities/edSanders_461"><h3>Ed Sanders</h3></a><p>5 Sled Hill Rd<br />Woodstock, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edSanders);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edSanders.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edSanders.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7380489, -74.001682], {
            color: edSandersColor
          }).bindPopup('<a href="/entities/edSanders_461"><h3>Ed Sanders</h3></a><p>98 Greenwich Ave #1C<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edSanders);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edSanders.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edSanders.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var aramSaroyanColor = getRandomColor();
      var style = '.' + 'aramSaroyan';
      var aramSaroyan = L.featureGroup([
          L.circleMarker([42.3620461, -71.104207], {
            color: aramSaroyanColor
          }).bindPopup('<a href="/entities/aramSaroyan_287"><h3>Aram Saroyan</h3></a><p>21 Watson St<br />Cambridge, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(aramSaroyan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7327796, -73.9934835], {
            color: aramSaroyanColor
          }).bindPopup('<a href="/entities/aramSaroyan_287"><h3>Aram Saroyan</h3></a><p>Hotel Albert 23 E 10th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(aramSaroyan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.507618, -70.847315], {
            color: aramSaroyanColor
          }).bindPopup('<a href="/entities/aramSaroyan_287"><h3>Aram Saroyan</h3></a><p>21 Washington St<br />Marblehead, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(aramSaroyan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.852358, -122.264611], {
            color: aramSaroyanColor
          }).bindPopup('<a href="/entities/aramSaroyan_287"><h3>Aram Saroyan</h3></a><p>2134 Woolsey St<br />Berkeley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(aramSaroyan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.362431, -71.112449], {
            color: aramSaroyanColor
          }).bindPopup('<a href="/entities/aramSaroyan_287"><h3>Aram Saroyan</h3></a><p>268 River St<br />Cambridge, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(aramSaroyan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.739067, -73.999716], {
            color: aramSaroyanColor
          }).bindPopup('<a href="/entities/aramSaroyan_287"><h3>Aram Saroyan</h3></a><p>68 7th Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(aramSaroyan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7729411, -73.9503644], {
            color: aramSaroyanColor
          }).bindPopup('<a href="/entities/aramSaroyan_287"><h3>Aram Saroyan</h3></a><p>440 E 81st St #2D<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(aramSaroyan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.3464463, -71.0871804], {
            color: aramSaroyanColor
          }).bindPopup('<a href="/entities/aramSaroyan_287"><h3>Aram Saroyan</h3></a><p>Belvedere Place, 1 Central Square<br />Cambridge, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(aramSaroyan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.774153, -73.950352], {
            color: aramSaroyanColor
          }).bindPopup('<a href="/entities/aramSaroyan_287"><h3>Aram Saroyan</h3></a><p>411 E 82nd St #2A<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(aramSaroyan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.788916, -73.97945], {
            color: aramSaroyanColor
          }).bindPopup('<a href="/entities/aramSaroyan_287"><h3>Aram Saroyan</h3></a><p>335 W. 85th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(aramSaroyan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.4903281, -0.1611227], {
            color: aramSaroyanColor
          }).bindPopup('<a href="/entities/aramSaroyan_287"><h3>Aram Saroyan</h3></a><p>Whitelands House #57, Cheltenham Terrace, Chelsea<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(aramSaroyan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.751458, -73.969513], {
            color: aramSaroyanColor
          }).bindPopup('<a href="/entities/aramSaroyan_287"><h3>Aram Saroyan</h3></a><p>321 E 45th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(aramSaroyan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="aramSaroyan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var lucySaroyanColor = getRandomColor();
      var style = '.' + 'lucySaroyan';
      var lucySaroyan = L.featureGroup([
          L.circleMarker([40.775424, -73.977552], {
            color: lucySaroyanColor
          }).bindPopup('<a href="/entities/lucySaroyan_508"><h3>Lucy Saroyan</h3></a><p>15 W 70th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lucySaroyan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lucySaroyan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lucySaroyan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.5419473, -0.1635708], {
            color: lucySaroyanColor
          }).bindPopup('<a href="/entities/lucySaroyan_508"><h3>Lucy Saroyan</h3></a><p>8 Elsworthy Rd<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lucySaroyan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lucySaroyan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lucySaroyan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var harrisSchiffColor = getRandomColor();
      var style = '.' + 'harrisSchiff';
      var harrisSchiff = L.featureGroup([
          L.circleMarker([40.724642, -73.98331], {
            color: harrisSchiffColor
          }).bindPopup('<a href="/entities/harrisSchiff_510"><h3>Harris Schiff</h3></a><p>519 E 5th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(harrisSchiff);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="harrisSchiff.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="harrisSchiff.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var lindaSchjeldahlColor = getRandomColor();
      var style = '.' + 'lindaSchjeldahl';
      var lindaSchjeldahl = L.featureGroup([
          L.circleMarker([40.7372115, -73.998149], {
            color: lindaSchjeldahlColor
          }).bindPopup('<a href="/entities/lindaSchjeldahl_502"><h3>Linda Schjeldahl</h3></a><p>117 W 13th St #37<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lindaSchjeldahl);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lindaSchjeldahl.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lindaSchjeldahl.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var peterSchjeldahlColor = getRandomColor();
      var style = '.' + 'peterSchjeldahl';
      var peterSchjeldahl = L.featureGroup([
          L.circleMarker([40.7536194, -73.9859737], {
            color: peterSchjeldahlColor
          }).bindPopup('<a href="/entities/peterSchjeldahl_372"><h3>Peter Schjeldahl</h3></a><p>110 W 40th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(peterSchjeldahl);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="peterSchjeldahl.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="peterSchjeldahl.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.725882, -74.002517], {
            color: peterSchjeldahlColor
          }).bindPopup('<a href="/entities/peterSchjeldahl_372"><h3>Peter Schjeldahl</h3></a><p>113 Sullivan St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(peterSchjeldahl);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="peterSchjeldahl.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="peterSchjeldahl.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.725103, -73.989364], {
            color: peterSchjeldahlColor
          }).bindPopup('<a href="/entities/peterSchjeldahl_372"><h3>Peter Schjeldahl</h3></a><p>54 E 3rd St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(peterSchjeldahl);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="peterSchjeldahl.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="peterSchjeldahl.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.731867, -73.983213], {
            color: peterSchjeldahlColor
          }).bindPopup('<a href="/entities/peterSchjeldahl_372"><h3>Peter Schjeldahl</h3></a><p>PO Box 94, Stuyvesant Station<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(peterSchjeldahl);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="peterSchjeldahl.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="peterSchjeldahl.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var georgeSchneemanColor = getRandomColor();
      var style = '.' + 'georgeSchneeman';
      var georgeSchneeman = L.featureGroup([
          L.circleMarker([40.7290695, -73.9883039], {
            color: georgeSchneemanColor
          }).bindPopup('<a href="/entities/georgeSchneeman_507"><h3>George Schneeman</h3></a><p>29 St Marks Pl<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(georgeSchneeman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="georgeSchneeman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="georgeSchneeman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7236942, -73.9780796], {
            color: georgeSchneemanColor
          }).bindPopup('<a href="/entities/georgeSchneeman_507"><h3>George Schneeman</h3></a><p>244 E 7th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(georgeSchneeman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="georgeSchneeman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="georgeSchneeman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jamesSchuylerColor = getRandomColor();
      var style = '.' + 'jamesSchuyler';
      var jamesSchuyler = L.featureGroup([
          L.circleMarker([40.882696, -72.3898169], {
            color: jamesSchuylerColor
          }).bindPopup('<a href="/entities/jamesSchuyler_498"><h3>James Schuyler</h3></a><p>49 S Main St<br />Southampton, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jamesSchuyler);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jamesSchuyler.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jamesSchuyler.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var alanSenaukeColor = getRandomColor();
      var style = '.' + 'alanSenauke';
      var alanSenauke = L.featureGroup([
          L.circleMarker([40.7942039, -73.751522], {
            color: alanSenaukeColor
          }).bindPopup('<a href="/entities/alanSenauke_509"><h3>Alan Senauke</h3></a><p>135 Longfellow Rd<br />Great Neck, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(alanSenauke);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="alanSenauke.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="alanSenauke.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var paulShalnyColor = getRandomColor();
      var style = '.' + 'paulShalny';
      var paulShalny = L.featureGroup([
          L.circleMarker([40.7271649, -73.999742], {
            color: paulShalnyColor
          }).bindPopup('<a href="/entities/paulShalny_518"><h3>Paul Shalny</h3></a><p>452 LaGuardia Pl<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(paulShalny);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="paulShalny.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="paulShalny.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var davidShapiroColor = getRandomColor();
      var style = '.' + 'davidShapiro';
      var davidShapiro = L.featureGroup([
          L.circleMarker([40.7075426, -74.2120141], {
            color: davidShapiroColor
          }).bindPopup('<a href="/entities/davidShapiro_501"><h3>David Shapiro</h3></a><p>66 Parkview Terrace<br />Newark, NJ<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidShapiro);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidShapiro.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidShapiro.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.8065688, -73.9608601], {
            color: davidShapiroColor
          }).bindPopup('<a href="/entities/davidShapiro_501"><h3>David Shapiro</h3></a><p>438 W 116th St #36<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidShapiro);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidShapiro.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidShapiro.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([52.2063747, 0.1170187], {
            color: davidShapiroColor
          }).bindPopup('<a href="/entities/davidShapiro_501"><h3>David Shapiro</h3></a><p>Trinity Lane<br />Cambridge, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidShapiro);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidShapiro.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidShapiro.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var michaelSilvertonColor = getRandomColor();
      var style = '.' + 'michaelSilverton';
      var michaelSilverton = L.featureGroup([
          L.circleMarker([40.6731517, -73.9736846], {
            color: michaelSilvertonColor
          }).bindPopup('<a href="/entities/michaelSilverton_512"><h3>Michael Silverton</h3></a><p>90 8th Ave<br />Brooklyn, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(michaelSilverton);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="michaelSilverton.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="michaelSilverton.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var SimonAndSchusterColor = getRandomColor();
      var style = '.' + 'SimonAndSchuster';
      var SimonAndSchuster = L.featureGroup([
          L.circleMarker([40.7590054, -73.9773439], {
            color: SimonAndSchusterColor
          }).bindPopup('<a href="/entities/SimonAndSchuster_483"><h3>Simon and Schuster</h3></a><p>630 5th Ave Rockefeller Center<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(SimonAndSchuster);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="SimonAndSchuster.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="SimonAndSchuster.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var elaineSolowColor = getRandomColor();
      var style = '.' + 'elaineSolow';
      var elaineSolow = L.featureGroup([
          L.circleMarker([40.734769, -73.998259], {
            color: elaineSolowColor
          }).bindPopup('<a href="/entities/elaineSolow_517"><h3>Elaine Solow</h3></a><p>69 W 10th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(elaineSolow);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="elaineSolow.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="elaineSolow.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7662723, -73.9823998], {
            color: elaineSolowColor
          }).bindPopup('<a href="/entities/elaineSolow_517"><h3>Elaine Solow</h3></a><p>250 W 57th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(elaineSolow);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="elaineSolow.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="elaineSolow.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var gilbertSorrentinoColor = getRandomColor();
      var style = '.' + 'gilbertSorrentino';
      var gilbertSorrentino = L.featureGroup([
          L.circleMarker([40.7269451, -73.9831168], {
            color: gilbertSorrentinoColor
          }).bindPopup('<a href="/entities/gilbertSorrentino_490"><h3>Gilbert Sorrentino</h3></a><p>131 Avenue A<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(gilbertSorrentino);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="gilbertSorrentino.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="gilbertSorrentino.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var hardieStMartinColor = getRandomColor();
      var style = '.' + 'hardieStMartin';
      var hardieStMartin = L.featureGroup([
          L.circleMarker([41.4066912, 2.1822852], {
            color: hardieStMartinColor
          }).bindPopup('<a href="/entities/hardieStMartin_491"><h3>Hardie St. Martin</h3></a><p>Carrer de València, 548<br />Barcelona, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(hardieStMartin);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="hardieStMartin.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="hardieStMartin.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnStantonColor = getRandomColor();
      var style = '.' + 'johnStanton';
      var johnStanton = L.featureGroup([
          L.circleMarker([40.779378, -73.948728], {
            color: johnStantonColor
          }).bindPopup('<a href="/entities/johnStanton_505"><h3>John Stanton</h3></a><p>325 E 89th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnStanton);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnStanton.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnStanton.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var michaelSteinerColor = getRandomColor();
      var style = '.' + 'michaelSteiner';
      var michaelSteiner = L.featureGroup([
          L.circleMarker([40.7327983, -73.9851936], {
            color: michaelSteinerColor
          }).bindPopup('<a href="/entities/michaelSteiner_516"><h3>Michael Steiner</h3></a><p>243 E 14th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(michaelSteiner);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="michaelSteiner.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="michaelSteiner.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var barbaraStoneColor = getRandomColor();
      var style = '.' + 'barbaraStone';
      var barbaraStone = L.featureGroup([
          L.circleMarker([40.354726, -74.664961], {
            color: barbaraStoneColor
          }).bindPopup('<a href="/entities/barbaraStone_492"><h3>Barbara Stone</h3></a><p>12 E Stanworth Dr<br />Princeton, NJ<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(barbaraStone);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="barbaraStone.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="barbaraStone.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.776727, -73.944008], {
            color: barbaraStoneColor
          }).bindPopup('<a href="/entities/barbaraStone_492"><h3>Barbara Stone</h3></a><p>180 East End Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(barbaraStone);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="barbaraStone.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="barbaraStone.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.6916803, -73.9223953], {
            color: barbaraStoneColor
          }).bindPopup('<a href="/entities/barbaraStone_492"><h3>Barbara Stone</h3></a><p>45 Grove St #9D<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(barbaraStone);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="barbaraStone.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="barbaraStone.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.734186, -74.004893], {
            color: barbaraStoneColor
          }).bindPopup('<a href="/entities/barbaraStone_492"><h3>Barbara Stone</h3></a><p>350 Bleecker St #3W<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(barbaraStone);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="barbaraStone.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="barbaraStone.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var SunRaColor = getRandomColor();
      var style = '.' + 'SunRa';
      var SunRa = L.featureGroup([
          L.circleMarker([40.7252301, -73.9895177], {
            color: SunRaColor
          }).bindPopup('<a href="/entities/SunRa_184"><h3>Sun Ra</h3></a><p>48 E 3rd St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(SunRa);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="SunRa.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="SunRa.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ThingsColor = getRandomColor();
      var style = '.' + 'Things';
      var Things = L.featureGroup([
          L.circleMarker([40.802399, -73.968866], {
            color: ThingsColor
          }).bindPopup('<a href="/entities/Things_347"><h3>Things</h3></a><p>308 W 107th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Things);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Things.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Things.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var lorenzoThomasColor = getRandomColor();
      var style = '.' + 'lorenzoThomas';
      var lorenzoThomas = L.featureGroup([
          L.circleMarker([40.680374, -73.78411], {
            color: lorenzoThomasColor
          }).bindPopup('<a href="/entities/lorenzoThomas_527"><h3>Lorenzo Thomas</h3></a><p>160-21 119th Dr<br />Queens, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lorenzoThomas);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lorenzoThomas.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lorenzoThomas.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var TiborDeNagyColor = getRandomColor();
      var style = '.' + 'TiborDeNagy';
      var TiborDeNagy = L.featureGroup([
          L.circleMarker([40.7640557, -73.9756129], {
            color: TiborDeNagyColor
          }).bindPopup('<a href="/entities/TiborDeNagy_528"><h3>Tibor de Nagy</h3></a><p>29 W 57th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(TiborDeNagy);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="TiborDeNagy.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="TiborDeNagy.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var sotereTorregianColor = getRandomColor();
      var style = '.' + 'sotereTorregian';
      var sotereTorregian = L.featureGroup([
          L.circleMarker([37.448437, -122.162046], {
            color: sotereTorregianColor
          }).bindPopup('<a href="/entities/sotereTorregian_532"><h3>Sotère Torregian</h3></a><p>333 Waverley St<br />Palo Alto, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(sotereTorregian);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="sotereTorregian.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="sotereTorregian.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.739661, -74.2087458], {
            color: sotereTorregianColor
          }).bindPopup('<a href="/entities/sotereTorregian_532"><h3>Sotère Torregian</h3></a><p>493 S 18th St<br />Newark, NJ<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(sotereTorregian);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="sotereTorregian.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="sotereTorregian.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.42382, -122.14847], {
            color: sotereTorregianColor
          }).bindPopup('<a href="/entities/sotereTorregian_532"><h3>Sotère Torregian</h3></a><p>2280 Williams St<br />Palo Alto, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(sotereTorregian);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="sotereTorregian.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="sotereTorregian.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.311818, -121.921646], {
            color: sotereTorregianColor
          }).bindPopup('<a href="/entities/sotereTorregian_532"><h3>Sotère Torregian</h3></a><p>831 Menker Ave<br />San Jose, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(sotereTorregian);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="sotereTorregian.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="sotereTorregian.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var tonyTowleColor = getRandomColor();
      var style = '.' + 'tonyTowle';
      var tonyTowle = L.featureGroup([
          L.circleMarker([40.725691, -74.003343], {
            color: tonyTowleColor
          }).bindPopup('<a href="/entities/tonyTowle_534"><h3>Tony Towle</h3></a><p>100 Sullivan St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tonyTowle);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tonyTowle.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tonyTowle.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var VanguardRecordsColor = getRandomColor();
      var style = '.' + 'VanguardRecords';
      var VanguardRecords = L.featureGroup([
          L.circleMarker([40.7428332, -73.9922321], {
            color: VanguardRecordsColor
          }).bindPopup('<a href="/entities/VanguardRecords_105"><h3>Vanguard Records</h3></a><p>71 W 23rd St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(VanguardRecords);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="VanguardRecords.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="VanguardRecords.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var tomVeitchColor = getRandomColor();
      var style = '.' + 'tomVeitch';
      var tomVeitch = L.featureGroup([
          L.circleMarker([40.679276, -73.975706], {
            color: tomVeitchColor
          }).bindPopup('<a href="/entities/tomVeitch_542"><h3>Tom Veitch</h3></a><p>100 6th Ave<br />Brooklyn, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tomVeitch);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tomVeitch.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tomVeitch.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnVernonColor = getRandomColor();
      var style = '.' + 'johnVernon';
      var johnVernon = L.featureGroup([
          L.circleMarker([40.7635925, -111.843474], {
            color: johnVernonColor
          }).bindPopup('<a href="/entities/johnVernon_547"><h3>John Vernon</h3></a><p>Department of English, University of Utah<br />Salt Lake City, UT<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnVernon);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnVernon.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnVernon.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var dianeWakoskiColor = getRandomColor();
      var style = '.' + 'dianeWakoski';
      var dianeWakoski = L.featureGroup([
          L.circleMarker([40.752998, -73.977056], {
            color: dianeWakoskiColor
          }).bindPopup('<a href="/entities/dianeWakoski_559"><h3>Diane Wakoski</h3></a><p>PO Box 4786, Grand Central Station<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(dianeWakoski);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="dianeWakoski.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="dianeWakoski.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var anneWaldmanColor = getRandomColor();
      var style = '.' + 'anneWaldman';
      var anneWaldman = L.featureGroup([
          L.circleMarker([40.729047, -73.98809], {
            color: anneWaldmanColor
          }).bindPopup('<a href="/entities/anneWaldman_572"><h3>Anne Waldman</h3></a><p>33 St Marks Pl #7<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(anneWaldman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="anneWaldman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="anneWaldman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.9178346, -72.3478839], {
            color: anneWaldmanColor
          }).bindPopup('<a href="/entities/anneWaldman_572"><h3>Anne Waldman</h3></a><p>PO Box 191<br />Watermill, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(anneWaldman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="anneWaldman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="anneWaldman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var WarResistersLeagueColor = getRandomColor();
      var style = '.' + 'WarResistersLeague';
      var WarResistersLeague = L.featureGroup([
          L.circleMarker([40.7114436, -74.0067453], {
            color: WarResistersLeagueColor
          }).bindPopup('<a href="/entities/WarResistersLeague_367"><h3>War Resisters League</h3></a><p>5 Beekman St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(WarResistersLeague);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="WarResistersLeague.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="WarResistersLeague.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var andyWarholColor = getRandomColor();
      var style = '.' + 'andyWarhol';
      var andyWarhol = L.featureGroup([
          L.circleMarker([40.736861, -73.990964], {
            color: andyWarholColor
          }).bindPopup('<a href="/entities/andyWarhol_583"><h3>Andy Warhol</h3></a><p>33 Union Square W<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(andyWarhol);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="andyWarhol.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="andyWarhol.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var lewisWarshColor = getRandomColor();
      var style = '.' + 'lewisWarsh';
      var lewisWarsh = L.featureGroup([
          L.circleMarker([43.8001482, -70.0709655], {
            color: lewisWarshColor
          }).bindPopup('<a href="/entities/lewisWarsh_16"><h3>Lewis Warsh</h3></a><p>Zanbock’s Cottage<br />Bustins Island, ME<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lewisWarsh);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lewisWarsh.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lewisWarsh.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.3705191, -71.1027358], {
            color: lewisWarshColor
          }).bindPopup('<a href="/entities/lewisWarsh_16"><h3>Lewis Warsh</h3></a><p>65 Inman St<br />Cambridge, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lewisWarsh);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lewisWarsh.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lewisWarsh.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.729047, -73.98809], {
            color: lewisWarshColor
          }).bindPopup('<a href="/entities/lewisWarsh_16"><h3>Lewis Warsh</h3></a><p>33 St Marks Pl #7<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lewisWarsh);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lewisWarsh.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lewisWarsh.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.7711382, -122.4528967], {
            color: lewisWarshColor
          }).bindPopup('<a href="/entities/lewisWarsh_16"><h3>Lewis Warsh</h3></a><p>2031B Oak St<br />San Francisco, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lewisWarsh);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lewisWarsh.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lewisWarsh.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.731867, -73.983213], {
            color: lewisWarshColor
          }).bindPopup('<a href="/entities/lewisWarsh_16"><h3>Lewis Warsh</h3></a><p>PO Box 257 Peter Stuyvesant Station<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lewisWarsh);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lewisWarsh.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lewisWarsh.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var hannahWeinerColor = getRandomColor();
      var style = '.' + 'hannahWeiner';
      var hannahWeiner = L.featureGroup([
          L.circleMarker([40.744179, -73.9906686], {
            color: hannahWeinerColor
          }).bindPopup('<a href="/entities/hannahWeiner_581"><h3>Hannah Weiner</h3></a><p>36 W 26th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(hannahWeiner);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="hannahWeiner.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="hannahWeiner.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var donaldWeingartenColor = getRandomColor();
      var style = '.' + 'donaldWeingarten';
      var donaldWeingarten = L.featureGroup([
          L.circleMarker([40.814706, -73.961055], {
            color: donaldWeingartenColor
          }).bindPopup('<a href="/entities/donaldWeingarten_571"><h3>Donald Weingarten</h3></a><p>530 Riverside Dr<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(donaldWeingarten);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="donaldWeingarten.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="donaldWeingarten.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var rogerWhelanColor = getRandomColor();
      var style = '.' + 'rogerWhelan';
      var rogerWhelan = L.featureGroup([
          L.circleMarker([51.5131546, -0.1879322], {
            color: rogerWhelanColor
          }).bindPopup('<a href="/entities/rogerWhelan_573"><h3>Roger Whelan</h3></a><p>115 Queensway<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(rogerWhelan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="rogerWhelan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="rogerWhelan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([41.0429527, -72.1473018], {
            color: rogerWhelanColor
          }).bindPopup('<a href="/entities/rogerWhelan_573"><h3>Roger Whelan</h3></a><p>811 Fireplace Rd<br />East Hampton, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(rogerWhelan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="rogerWhelan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="rogerWhelan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var lauranceWiederColor = getRandomColor();
      var style = '.' + 'lauranceWieder';
      var lauranceWieder = L.featureGroup([
          L.circleMarker([42.4380491, -76.4884864], {
            color: lauranceWiederColor
          }).bindPopup('<a href="/entities/lauranceWieder_584"><h3>Laurance Wieder</h3></a><p>106 Quarry St S<br />Ithaca, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lauranceWieder);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lauranceWieder.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lauranceWieder.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.440637, -76.480752], {
            color: lauranceWiederColor
          }).bindPopup('<a href="/entities/lauranceWieder_584"><h3>Laurance Wieder</h3></a><p>308 Fairmount Ave #2<br />Ithaca, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lauranceWieder);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lauranceWieder.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lauranceWieder.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.7981381, -73.9483611], {
            color: lauranceWiederColor
          }).bindPopup('<a href="/entities/lauranceWieder_584"><h3>Laurance Wieder</h3></a><p>??? W 112th St #2D<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lauranceWieder);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lauranceWieder.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lauranceWieder.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var WildDogColor = getRandomColor();
      var style = '.' + 'WildDog';
      var WildDog = L.featureGroup([
          L.circleMarker([40.7607793, -111.8910474], {
            color: WildDogColor
          }).bindPopup('<a href="/entities/WildDog_549"><h3>Wild Dog</h3></a><p>PO Box 11094<br />Salt Lake City, UT<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(WildDog);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="WildDog.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="WildDog.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.773579, -122.443659], {
            color: WildDogColor
          }).bindPopup('<a href="/entities/WildDog_549"><h3>Wild Dog</h3></a><p>1568 Fell St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(WildDog);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="WildDog.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="WildDog.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.7682169, -122.4474228], {
            color: WildDogColor
          }).bindPopup('<a href="/entities/WildDog_549"><h3>Wild Dog</h3></a><p>39 Downey St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(WildDog);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="WildDog.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="WildDog.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var eliWilentzColor = getRandomColor();
      var style = '.' + 'eliWilentz';
      var eliWilentz = L.featureGroup([
          L.circleMarker([40.732888, -73.99731], {
            color: eliWilentzColor
          }).bindPopup('<a href="/entities/eliWilentz_567"><h3>Eli Wilentz</h3></a><p>17 W 8th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(eliWilentz);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="eliWilentz.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="eliWilentz.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var tedWilentzColor = getRandomColor();
      var style = '.' + 'tedWilentz';
      var tedWilentz = L.featureGroup([
          L.circleMarker([40.732888, -73.99731], {
            color: tedWilentzColor
          }).bindPopup('<a href="/entities/tedWilentz_568"><h3>Ted Wilentz</h3></a><p>17 W 8th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tedWilentz);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tedWilentz.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tedWilentz.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var missGalenWilliamsColor = getRandomColor();
      var style = '.' + 'missGalenWilliams';
      var missGalenWilliams = L.featureGroup([
          L.circleMarker([40.7830623, -73.9526804], {
            color: missGalenWilliamsColor
          }).bindPopup('<a href="/entities/missGalenWilliams_580"><h3>Miss Galen Williams</h3></a><p>1395 Lexington Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(missGalenWilliams);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="missGalenWilliams.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="missGalenWilliams.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var bobWilsonColor = getRandomColor();
      var style = '.' + 'bobWilson';
      var bobWilson = L.featureGroup([
          L.circleMarker([40.7313345, -74.001914], {
            color: bobWilsonColor
          }).bindPopup('<a href="/entities/bobWilson_432"><h3>Bob Wilson</h3></a><p>18 Cornelia St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bobWilson);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bobWilson.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bobWilson.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var israelYoungColor = getRandomColor();
      var style = '.' + 'israelYoung';
      var israelYoung = L.featureGroup([
          L.circleMarker([40.73113, -74.0017065], {
            color: israelYoungColor
          }).bindPopup('<a href="/entities/israelYoung_589"><h3>Israel Young</h3></a><p>321 Avenue of the Americas<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(israelYoung);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="israelYoung.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="israelYoung.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jimZimmermanColor = getRandomColor();
      var style = '.' + 'jimZimmerman';
      var jimZimmerman = L.featureGroup([
          L.circleMarker([40.757338, -74.190211], {
            color: jimZimmermanColor
          }).bindPopup('<a href="/entities/jimZimmerman_594"><h3>Jim Zimmerman</h3></a><p>PO Box 7181, Roseville Station<br />Newark, NJ<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jimZimmerman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jimZimmerman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jimZimmerman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var louisZukofskyColor = getRandomColor();
      var style = '.' + 'louisZukofsky';
      var louisZukofsky = L.featureGroup([
          L.circleMarker([40.7389273, -73.9990556], {
            color: louisZukofskyColor
          }).bindPopup('<a href="/entities/louisZukofsky_592"><h3>Louis Zukofsky</h3></a><p>77 7th Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(louisZukofsky);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="louisZukofsky.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="louisZukofsky.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var reneeDeAntonioColor = getRandomColor();
      var style = '.' + 'reneeDeAntonio';
      var reneeDeAntonio = L.featureGroup([
          L.circleMarker([40.727224, -73.987599], {
            color: reneeDeAntonioColor
          }).bindPopup('<a href="/entities/reneeDeAntonio_156"><h3>Renee de Antonio</h3></a><p>313 E 6th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(reneeDeAntonio);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="reneeDeAntonio.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="reneeDeAntonio.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
    var allFeatures = L.featureGroup([
        angelica,
        royEllen,
        AmsPress,
        samAbrams,
        AcademyOfAmericanPoets,
        vitoHannibalAcconci,
        revMichaelAllen,
        AngelHairBooks,
        peterArdery,
        ArtNews,
        johnAshbery,
        AvantGarde,
        elliotBarowitz,
        donaldBarthelme,
        timothyBaum,
        billBeckman,
        michaelBenedikt,
        josephBennett,
        larryBensky,
        billBerkson,
        maryBernstein,
        tedBerrigan,
        paulBlackburn,
        ettaBlum,
        Bones,
        joeBrainard,
        jamesBrodey,
        rebeccaBrown,
        michaelBrownstein,
        rudyBurckhardt,
        bobCaligy,
        ronaldCaplan,
        martinCarey,
        jimCarroll,
        cyrilCaster,
        joeCeravolo,
        michaelChechik,
        stevieChusman,
        arthurCohen,
        robertDavidCohen,
        mrsMACohn,
        gwenConnet,
        clarkCoolidge,
        jonathanCott,
        leeCrabtree,
        timCraig,
        fieldingDawson,
        DaytonSRecords,
        edwinDenby,
        Desmond,
        dianeDiprima,
        marthaDiamond,
        tomDisch,
        edwardDorn,
        DoubledayCo,
        marcelDuchamp,
        bobDylan,
        karenEdwards,
        EighthStreetBookshop,
        ElectricCircus,
        Elephant,
        kenwardElmslie,
        EvergreenReview,
        larryFagin,
        dannyFields,
        FilmexInc,
        FolkloreCenter,
        davidFranks,
        kathleenFraser,
        FreeUniversityOfNewYork,
        FrettedInstrumentSchool,
        geraldFreund,
        dickGallup,
        drDavidGerstein,
        jeffGiles,
        salvadorGiner,
        allenGinsberg,
        johnGiorno,
        danielaGioseffi,
        mikeGoldberg,
        charlesGoldman,
        Goldstein,
        richardGoldstein,
        ronGorchov,
        GothamBookMart,
        Grassroots,
        drReubenGreenberg,
        tedGreenwald,
        redGrooms,
        barbaraGuest,
        HardwarePoetsOccasional,
        HarperSMagazine,
        leeHarwood,
        rondaHaynes,
        pieroHeliczer,
        HenryMSnyderCo,
        abbieHoffman,
        hildegardeHoffmann,
        HoltRinehartWinston,
        litaHornick,
        HouseOfBooksLtd,
        charlesRHulbeck,
        joanInglis,
        emmettJarrett,
        jasperJohns,
        hettieJones,
        leroiJones,
        claudiaKane,
        allanKaplan,
        alexKatz,
        jackKerouac,
        johnKeys,
        georgeKimball,
        basilKing,
        galwayKinnell,
        billKinsinger,
        kennethKoch,
        jamesKoller,
        richardKolmar,
        lucyKostelanetz,
        bettyKray,
        allenKrebs,
        Kulchur,
        stanleyKunitz,
        gregKuzma,
        joanneKyger,
        LaceReview,
        frankLauria,
        joeLeSueur,
        davidLehman,
        deniseLevertov,
        frankLima,
        Lines,
        shelleyLustig,
        steveLynton,
        lewisMacadams,
        bruceMaddox,
        geraldMalanga,
        bernadetteMayer,
        johnMaynard,
        frankMccullough,
        davidMcreynolds,
        andyMeyer,
        larryMeyers,
        davidMoberg,
        carlMorse,
        Mother,
        Nadada,
        NemperorArtists,
        peterNevraumont,
        NewYorkTimes,
        NewYorker,
        nilNil,
        jackieNoyes,
        hiltonObenzinger,
        joelOppenheimer,
        maureenOwen,
        rochelleOwens,
        frankOHara,
        evePacker,
        ronPadgett,
        anitaPandolfi,
        PeaceEyeBookshop,
        simonPerchik,
        johnPerreault,
        chrisPeterson,
        donaldPhelps,
        PhoenixBookShop,
        joePinelli,
        georgePitts,
        georgePlimpton,
        PoetryCenterYmhaYwha,
        Pogamoggan,
        RandomHouse,
        ellenRay,
        louReed,
        albertReneRicard,
        RobertsRecords,
        RockefellerFoundation,
        sharonRosenberg,
        josieRosenfeld,
        jeromeRothenberg,
        dDMrsRyanIii,
        edSanders,
        aramSaroyan,
        lucySaroyan,
        harrisSchiff,
        lindaSchjeldahl,
        peterSchjeldahl,
        georgeSchneeman,
        jamesSchuyler,
        alanSenauke,
        paulShalny,
        davidShapiro,
        michaelSilverton,
        SimonAndSchuster,
        elaineSolow,
        gilbertSorrentino,
        hardieStMartin,
        johnStanton,
        michaelSteiner,
        barbaraStone,
        SunRa,
        Things,
        lorenzoThomas,
        TiborDeNagy,
        sotereTorregian,
        tonyTowle,
        VanguardRecords,
        tomVeitch,
        johnVernon,
        dianeWakoski,
        anneWaldman,
        WarResistersLeague,
        andyWarhol,
        lewisWarsh,
        hannahWeiner,
        donaldWeingarten,
        rogerWhelan,
        lauranceWieder,
        WildDog,
        eliWilentz,
        tedWilentz,
        missGalenWilliams,
        bobWilson,
        israelYoung,
        jimZimmerman,
        louisZukofsky,
        reneeDeAntonio,
    ]);
