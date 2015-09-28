    // static_js_start
      var angelicaColor = getRandomColor();
      var style = '.' + 'angelica';
      var angelica = L.featureGroup([
          L.circleMarker([40.7742008, -73.9649045], {
            color: angelicaColor
          }).bindPopup('<a href="/entities/angelica_20"><h3>Angelica </h3></a><p>3 E. 75 St. apt 6B<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(angelica);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="angelica.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="angelica.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var brotherRobertColor = getRandomColor();
      var style = '.' + 'brotherRobert';
      var brotherRobert = L.featureGroup([
          L.circleMarker([43.3375733, -72.7925983], {
            color: brotherRobertColor
          }).bindPopup('<a href="/entities/brotherRobert_543"><h3>Brother Robert </h3></a><p>Weston Priory, 58 Priory Hill Rd<br />Weston, VT<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(brotherRobert);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="brotherRobert.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="brotherRobert.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var hildyColor = getRandomColor();
      var style = '.' + 'hildy';
      var hildy = L.featureGroup([
          L.circleMarker([35.3069845, -106.4247468], {
            color: hildyColor
          }).bindPopup('<a href="/entities/hildy_260"><h3>Hildy </h3></a><p>PO Box 475<br />Placitas, NM<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(hildy);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="hildy.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="hildy.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var wardAbbottColor = getRandomColor();
      var style = '.' + 'wardAbbott';
      var wardAbbott = L.featureGroup([
          L.circleMarker([51.5206388, -0.1257111], {
            color: wardAbbottColor
          }).bindPopup('<a href="/entities/wardAbbott_153"><h3>Ward Abbott</h3></a><p>7 Russell Rd Kensington<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(wardAbbott);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="wardAbbott.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="wardAbbott.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var AbingtonBookshopColor = getRandomColor();
      var style = '.' + 'AbingtonBookshop';
      var AbingtonBookshop = L.featureGroup([
          L.circleMarker([38.9650253, -95.2359211], {
            color: AbingtonBookshopColor
          }).bindPopup('<a href="/entities/AbingtonBookshop_13"><h3>Abington Bookshop</h3></a><p>1015 Massachusetts St<br />Lawrence, KS<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(AbingtonBookshop);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="AbingtonBookshop.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="AbingtonBookshop.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var davidAdnopozColor = getRandomColor();
      var style = '.' + 'davidAdnopoz';
      var davidAdnopoz = L.featureGroup([
          L.circleMarker([51.5126093, -0.1319714], {
            color: davidAdnopozColor
          }).bindPopup('<a href="/entities/davidAdnopoz_4"><h3>David Adnopoz</h3></a><p>58 Dean St #12 Soho<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidAdnopoz);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidAdnopoz.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidAdnopoz.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.5147368, -0.1345577], {
            color: davidAdnopozColor
          }).bindPopup('<a href="/entities/davidAdnopoz_4"><h3>David Adnopoz</h3></a><p>142 Wardour St Soho<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidAdnopoz);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidAdnopoz.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidAdnopoz.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var clarissaAinleyColor = getRandomColor();
      var style = '.' + 'clarissaAinley';
      var clarissaAinley = L.featureGroup([
          L.circleMarker([51.5387024, -0.1504926], {
            color: clarissaAinleyColor
          }).bindPopup('<a href="/entities/clarissaAinley_596"><h3>Clarissa Ainley</h3></a><p>23 St Mark’s Crescent<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(clarissaAinley);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="clarissaAinley.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="clarissaAinley.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var davidAinleyColor = getRandomColor();
      var style = '.' + 'davidAinley';
      var davidAinley = L.featureGroup([
          L.circleMarker([51.5387024, -0.1504926], {
            color: davidAinleyColor
          }).bindPopup('<a href="/entities/davidAinley_6"><h3>David Ainley</h3></a><p>23 St Mark’s Crescent<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidAinley);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidAinley.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidAinley.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var donaldAllenColor = getRandomColor();
      var style = '.' + 'donaldAllen';
      var donaldAllen = L.featureGroup([
          L.circleMarker([37.797992, -122.415747], {
            color: donaldAllenColor
          }).bindPopup('<a href="/entities/donaldAllen_2"><h3>Donald Allen</h3></a><p>1815 Jones St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(donaldAllen);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="donaldAllen.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="donaldAllen.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var revMichaelAllenColor = getRandomColor();
      var style = '.' + 'revMichaelAllen';
      var revMichaelAllen = L.featureGroup([
          L.circleMarker([40.7303012, -73.987144], {
            color: revMichaelAllenColor
          }).bindPopup('<a href="/entities/revMichaelAllen_597"><h3>Rev. Michael Allen</h3></a><p>131 E 10th St<br />New York, NJ<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(revMichaelAllen);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="revMichaelAllen.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="revMichaelAllen.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var AlternativePressColor = getRandomColor();
      var style = '.' + 'AlternativePress';
      var AlternativePress = L.featureGroup([
          L.circleMarker([42.346981, -83.079019], {
            color: AlternativePressColor
          }).bindPopup('<a href="/entities/AlternativePress_23"><h3>Alternative Press</h3></a><p>4339 Avery St<br />Detroit, MI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(AlternativePress);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="AlternativePress.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="AlternativePress.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var bruceAndrewsColor = getRandomColor();
      var style = '.' + 'bruceAndrews';
      var bruceAndrews = L.featureGroup([
          L.circleMarker([42.3707959, -71.1124775], {
            color: bruceAndrewsColor
          }).bindPopup('<a href="/entities/bruceAndrews_22"><h3>Bruce Andrews</h3></a><p>15 Trowbridge St #3<br />Cambridge, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bruceAndrews);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bruceAndrews.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bruceAndrews.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([38.9102409, -77.0557333], {
            color: bruceAndrewsColor
          }).bindPopup('<a href="/entities/bruceAndrews_22"><h3>Bruce Andrews</h3></a><p>2700 Q St NW<br />Washington, DC<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bruceAndrews);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bruceAndrews.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bruceAndrews.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var AngelHairBooksColor = getRandomColor();
      var style = '.' + 'AngelHairBooks';
      var AngelHairBooks = L.featureGroup([
          L.circleMarker([40.731867, -73.983213], {
            color: AngelHairBooksColor
          }).bindPopup('<a href="/entities/AngelHairBooks_15"><h3>Angel Hair Books</h3></a><p>PO Box 257 Peter Stuyvesant Station<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(AngelHairBooks);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="AngelHairBooks.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="AngelHairBooks.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var alanAnsenColor = getRandomColor();
      var style = '.' + 'alanAnsen';
      var alanAnsen = L.featureGroup([
          L.circleMarker([37.983917, 23.7293599], {
            color: alanAnsenColor
          }).bindPopup('<a href="/entities/alanAnsen_10"><h3>Alan Ansen</h3></a><p>American Express<br />Athens, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(alanAnsen);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="alanAnsen.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="alanAnsen.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var davidAntinColor = getRandomColor();
      var style = '.' + 'davidAntin';
      var davidAntin = L.featureGroup([
          L.circleMarker([32.9926548, -117.2747585], {
            color: davidAntinColor
          }).bindPopup('<a href="/entities/davidAntin_21"><h3>David Antin</h3></a><p>201 Pacific Ave<br />Solana Beach, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidAntin);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidAntin.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidAntin.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var peterArderyColor = getRandomColor();
      var style = '.' + 'peterArdery';
      var peterArdery = L.featureGroup([
          L.circleMarker([40.7660231, -73.9515768], {
            color: peterArderyColor
          }).bindPopup('<a href="/entities/peterArdery_17"><h3>Peter Ardery</h3></a><p>541 E 72nd St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(peterArdery);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="peterArdery.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="peterArdery.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var peterArmstrongColor = getRandomColor();
      var style = '.' + 'peterArmstrong';
      var peterArmstrong = L.featureGroup([
          L.circleMarker([51.4549833, -2.622643], {
            color: peterArmstrongColor
          }).bindPopup('<a href="/entities/peterArmstrong_11"><h3>Peter Armstrong</h3></a><p>16 W Mall<br />Bristol, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(peterArmstrong);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="peterArmstrong.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="peterArmstrong.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.4578856, -2.6142163], {
            color: peterArmstrongColor
          }).bindPopup('<a href="/entities/peterArmstrong_11"><h3>Peter Armstrong</h3></a><p>1 Richmond Park Rd<br />Bristol, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(peterArmstrong);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="peterArmstrong.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="peterArmstrong.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ArtNewsColor = getRandomColor();
      var style = '.' + 'ArtNews';
      var ArtNews = L.featureGroup([
          L.circleMarker([40.7576844, -73.9760548], {
            color: ArtNewsColor
          }).bindPopup('<a href="/entities/ArtNews_9"><h3>Art News</h3></a><p>Newsweek Building, 444 Madison Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ArtNews);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ArtNews.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ArtNews.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ArtAndLiteratureColor = getRandomColor();
      var style = '.' + 'ArtAndLiterature';
      var ArtAndLiterature = L.featureGroup([
          L.circleMarker([48.8584177, 2.3623509], {
            color: ArtAndLiteratureColor
          }).bindPopup('<a href="/entities/ArtAndLiterature_7"><h3>Art and Literature</h3></a><p>13 Rue Payenne<br />Paris, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ArtAndLiterature);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ArtAndLiterature.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ArtAndLiterature.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var AsphodelBookshopColor = getRandomColor();
      var style = '.' + 'AsphodelBookshop';
      var AsphodelBookshop = L.featureGroup([
          L.circleMarker([41.4999493, -81.6903492], {
            color: AsphodelBookshopColor
          }).bindPopup('<a href="/entities/AsphodelBookshop_295"><h3>Asphodel Bookshop</h3></a><p>401 Euclid Ave (465 The Arcade)<br />Cleveland, OH<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(AsphodelBookshop);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="AsphodelBookshop.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="AsphodelBookshop.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var AtlanticMonthlyColor = getRandomColor();
      var style = '.' + 'AtlanticMonthly';
      var AtlanticMonthly = L.featureGroup([
          L.circleMarker([42.3516728, -71.1520743], {
            color: AtlanticMonthlyColor
          }).bindPopup('<a href="/entities/AtlanticMonthly_25"><h3>Atlantic Monthly</h3></a><p>8 Arlington St<br />Boston, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(AtlanticMonthly);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="AtlanticMonthly.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="AtlanticMonthly.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var AuerhahnPressColor = getRandomColor();
      var style = '.' + 'AuerhahnPress';
      var AuerhahnPress = L.featureGroup([
          L.circleMarker([37.7869181, -122.423313], {
            color: AuerhahnPressColor
          }).bindPopup('<a href="/entities/AuerhahnPress_5"><h3>Auerhahn Press</h3></a><p>1334 Franklin St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(AuerhahnPress);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="AuerhahnPress.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="AuerhahnPress.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var AvantGardeColor = getRandomColor();
      var style = '.' + 'AvantGarde';
      var AvantGarde = L.featureGroup([
          L.circleMarker([40.7536194, -73.9859737], {
            color: AvantGardeColor
          }).bindPopup('<a href="/entities/AvantGarde_371"><h3>Avant Garde</h3></a><p>110 W 40th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(AvantGarde);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="AvantGarde.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="AvantGarde.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var margaretAvisonColor = getRandomColor();
      var style = '.' + 'margaretAvison';
      var margaretAvison = L.featureGroup([
          L.circleMarker([43.6874993, -79.3972327], {
            color: margaretAvisonColor
          }).bindPopup('<a href="/entities/margaretAvison_1"><h3>Margaret Avison</h3></a><p>150 St Clair Ave W #104<br />Toronto, ON<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(margaretAvison);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="margaretAvison.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="margaretAvison.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var gordonBaldwinColor = getRandomColor();
      var style = '.' + 'gordonBaldwin';
      var gordonBaldwin = L.featureGroup([
          L.circleMarker([37.9093702, -122.6863733], {
            color: gordonBaldwinColor
          }).bindPopup('<a href="/entities/gordonBaldwin_77"><h3>Gordon Baldwin</h3></a><p>PO Box 454<br />Bolinas, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(gordonBaldwin);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="gordonBaldwin.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="gordonBaldwin.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var rogerBarnardColor = getRandomColor();
      var style = '.' + 'rogerBarnard';
      var rogerBarnard = L.featureGroup([
          L.circleMarker([51.5312338, -0.1211143], {
            color: rogerBarnardColor
          }).bindPopup('<a href="/entities/rogerBarnard_70"><h3>Roger Barnard</h3></a><p>5 Caledonian Rd<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(rogerBarnard);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="rogerBarnard.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="rogerBarnard.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var elliotBarowitzColor = getRandomColor();
      var style = '.' + 'elliotBarowitz';
      var elliotBarowitz = L.featureGroup([
          L.circleMarker([40.729661, -73.994499], {
            color: elliotBarowitzColor
          }).bindPopup('<a href="/entities/elliotBarowitz_61"><h3>Elliot Barowitz</h3></a><p>New York University, 7 Washington Pl<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(elliotBarowitz);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="elliotBarowitz.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="elliotBarowitz.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnBarrellColor = getRandomColor();
      var style = '.' + 'johnBarrell';
      var johnBarrell = L.featureGroup([
          L.circleMarker([51.535456, -0.1003155], {
            color: johnBarrellColor
          }).bindPopup('<a href="/entities/johnBarrell_40"><h3>John Barrell</h3></a><p>16 St Peter’s St, Islington<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnBarrell);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnBarrell.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnBarrell.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var asaBenvenisteColor = getRandomColor();
      var style = '.' + 'asaBenveniste';
      var asaBenveniste = L.featureGroup([
          L.circleMarker([51.5453142, -0.1305815], {
            color: asaBenvenisteColor
          }).bindPopup('<a href="/entities/asaBenveniste_74"><h3>Asa Benveniste</h3></a><p>28 Camden Square<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(asaBenveniste);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="asaBenveniste.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="asaBenveniste.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var drJosephBerkeColor = getRandomColor();
      var style = '.' + 'drJosephBerke';
      var drJosephBerke = L.featureGroup([
          L.circleMarker([51.5405521, -0.1583202], {
            color: drJosephBerkeColor
          }).bindPopup('<a href="/entities/drJosephBerke_60"><h3>Dr. Joseph Berke</h3></a><p>4 St Georges Terrace<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(drJosephBerke);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="drJosephBerke.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="drJosephBerke.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.5177712, -0.1478526], {
            color: drJosephBerkeColor
          }).bindPopup('<a href="/entities/drJosephBerke_60"><h3>Dr. Joseph Berke</h3></a><p>37 Queen Anne St Marylebone<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(drJosephBerke);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="drJosephBerke.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="drJosephBerke.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var BetterBooksColor = getRandomColor();
      var style = '.' + 'BetterBooks';
      var BetterBooks = L.featureGroup([
          L.circleMarker([51.5137903, -0.1292597], {
            color: BetterBooksColor
          }).bindPopup('<a href="/entities/BetterBooks_48"><h3>Better Books</h3></a><p>92-94 Charing Cross Rd<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(BetterBooks);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="BetterBooks.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="BetterBooks.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var billBissettColor = getRandomColor();
      var style = '.' + 'billBissett';
      var billBissett = L.featureGroup([
          L.circleMarker([49.1966913, -123.1815123], {
            color: billBissettColor
          }).bindPopup('<a href="/entities/billBissett_35"><h3>Bill Bissett</h3></a><p>PO Box 8590 Station H<br />Vancouver, BC<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(billBissett);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="billBissett.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="billBissett.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var BlackSparrowPressColor = getRandomColor();
      var style = '.' + 'BlackSparrowPress';
      var BlackSparrowPress = L.featureGroup([
          L.circleMarker([34.0522342, -118.2436849], {
            color: BlackSparrowPressColor
          }).bindPopup('<a href="/entities/BlackSparrowPress_67"><h3>Black Sparrow Press</h3></a><p>PO Box 25603<br />Los Angeles, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(BlackSparrowPress);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="BlackSparrowPress.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="BlackSparrowPress.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var paulBlackburnColor = getRandomColor();
      var style = '.' + 'paulBlackburn';
      var paulBlackburn = L.featureGroup([
          L.circleMarker([40.7288863, -73.9899181], {
            color: paulBlackburnColor
          }).bindPopup('<a href="/entities/paulBlackburn_28"><h3>Paul Blackburn</h3></a><p>9 E 7th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(paulBlackburn);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="paulBlackburn.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="paulBlackburn.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var robinBlaserColor = getRandomColor();
      var style = '.' + 'robinBlaser';
      var robinBlaser = L.featureGroup([
          L.circleMarker([37.7994419, -122.4196275], {
            color: robinBlaserColor
          }).bindPopup('<a href="/entities/robinBlaser_44"><h3>Robin Blaser</h3></a><p>24 Allen St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(robinBlaser);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="robinBlaser.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="robinBlaser.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var BlueThumbRecordsColor = getRandomColor();
      var style = '.' + 'BlueThumbRecords';
      var BlueThumbRecords = L.featureGroup([
          L.circleMarker([34.07962, -118.4116476], {
            color: BlueThumbRecordsColor
          }).bindPopup('<a href="/entities/BlueThumbRecords_513"><h3>Blue Thumb Records</h3></a><p>1427 N Cañon Dr<br />Beverly Hills, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(BlueThumbRecords);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="BlueThumbRecords.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="BlueThumbRecords.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ettaBlumColor = getRandomColor();
      var style = '.' + 'ettaBlum';
      var ettaBlum = L.featureGroup([
          L.circleMarker([40.671959, -73.971696], {
            color: ettaBlumColor
          }).bindPopup('<a href="/entities/ettaBlum_34"><h3>Etta Blum</h3></a><p>942 President St<br />Brooklyn, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ettaBlum);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ettaBlum.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ettaBlum.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var drNealBlumenfeldColor = getRandomColor();
      var style = '.' + 'drNealBlumenfeld';
      var drNealBlumenfeld = L.featureGroup([
          L.circleMarker([37.8664441, -122.2633974], {
            color: drNealBlumenfeldColor
          }).bindPopup('<a href="/entities/drNealBlumenfeld_45"><h3>Dr. Neal Blumenfeld</h3></a><p>2380 Ellsworth St<br />Berkeley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(drNealBlumenfeld);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="drNealBlumenfeld.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="drNealBlumenfeld.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var robertBlyColor = getRandomColor();
      var style = '.' + 'robertBly';
      var robertBly = L.featureGroup([
          L.circleMarker([45.0113787, -96.1932176], {
            color: robertBlyColor
          }).bindPopup('<a href="/entities/robertBly_43"><h3>Robert Bly</h3></a><p>Odin House<br />Madison, MN<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(robertBly);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="robertBly.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="robertBly.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([48.8561669, 2.3327628], {
            color: robertBlyColor
          }).bindPopup('<a href="/entities/robertBly_43"><h3>Robert Bly</h3></a><p>50 Rue Jacob<br />Paris, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(robertBly);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="robertBly.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="robertBly.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.9524997, 0.3457911], {
            color: robertBlyColor
          }).bindPopup('<a href="/entities/robertBly_43"><h3>Robert Bly</h3></a><p>21 Mill End<br />Thaxted, Dunmow, Essex, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(robertBly);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="robertBly.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="robertBly.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var BonesColor = getRandomColor();
      var style = '.' + 'Bones';
      var Bones = L.featureGroup([
          L.circleMarker([40.788173, -73.969577], {
            color: BonesColor
          }).bindPopup('<a href="/entities/Bones_50"><h3>Bones</h3></a><p>53 W 89th St #2a<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Bones);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Bones.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Bones.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ebbeBorregaardColor = getRandomColor();
      var style = '.' + 'ebbeBorregaard';
      var ebbeBorregaard = L.featureGroup([
          L.circleMarker([37.8695633, -122.2935229], {
            color: ebbeBorregaardColor
          }).bindPopup('<a href="/entities/ebbeBorregaard_63"><h3>Ebbe Borregaard</h3></a><p>402 10th St.<br />Berkeley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ebbeBorregaard);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ebbeBorregaard.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ebbeBorregaard.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var josephBottoneColor = getRandomColor();
      var style = '.' + 'josephBottone';
      var josephBottone = L.featureGroup([
          L.circleMarker([44.0619561, -123.1017641], {
            color: josephBottoneColor
          }).bindPopup('<a href="/entities/josephBottone_39"><h3>Joseph Bottone</h3></a><p>200 N Jefferson St<br />Eugene, OR<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(josephBottone);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="josephBottone.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="josephBottone.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.766471, -122.432503], {
            color: josephBottoneColor
          }).bindPopup('<a href="/entities/josephBottone_39"><h3>Joseph Bottone</h3></a><p>69 Henry St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(josephBottone);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="josephBottone.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="josephBottone.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var georgeBoweringColor = getRandomColor();
      var style = '.' + 'georgeBowering';
      var georgeBowering = L.featureGroup([
      ]);
      var jackBoyceColor = getRandomColor();
      var style = '.' + 'jackBoyce';
      var jackBoyce = L.featureGroup([
          L.circleMarker([38.33325, -123.0480571], {
            color: jackBoyceColor
          }).bindPopup('<a href="/entities/jackBoyce_38"><h3>Jack Boyce</h3></a><p>PO Box 185<br />Bodega Bay, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jackBoyce);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jackBoyce.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jackBoyce.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.9093702, -122.6863733], {
            color: jackBoyceColor
          }).bindPopup('<a href="/entities/jackBoyce_38"><h3>Jack Boyce</h3></a><p>PO Box 48<br />Bolinas, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jackBoyce);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jackBoyce.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jackBoyce.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.787811, -122.430486], {
            color: jackBoyceColor
          }).bindPopup('<a href="/entities/jackBoyce_38"><h3>Jack Boyce</h3></a><p>1907 Buchanan St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jackBoyce);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jackBoyce.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jackBoyce.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var richardBrautiganColor = getRandomColor();
      var style = '.' + 'richardBrautigan';
      var richardBrautigan = L.featureGroup([
          L.circleMarker([37.7827263, -122.4450533], {
            color: richardBrautiganColor
          }).bindPopup('<a href="/entities/richardBrautigan_65"><h3>Richard Brautigan</h3></a><p>2546 Geary Blvd<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(richardBrautigan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="richardBrautigan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="richardBrautigan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var edwinBrockColor = getRandomColor();
      var style = '.' + 'edwinBrock';
      var edwinBrock = L.featureGroup([
          L.circleMarker([41.9939828, -73.2020577], {
            color: edwinBrockColor
          }).bindPopup('<a href="/entities/edwinBrock_78"><h3>Edwin Brock</h3></a><p>PO Box 606<br />Norfolk, CT<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edwinBrock);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edwinBrock.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edwinBrock.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var davidBromigeColor = getRandomColor();
      var style = '.' + 'davidBromige';
      var davidBromige = L.featureGroup([
          L.circleMarker([37.879284, -122.264983], {
            color: davidBromigeColor
          }).bindPopup('<a href="/entities/davidBromige_72"><h3>David Bromige</h3></a><p>1538 Arch St<br />Berkeley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidBromige);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidBromige.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidBromige.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var williamBronkColor = getRandomColor();
      var style = '.' + 'williamBronk';
      var williamBronk = L.featureGroup([
          L.circleMarker([43.3005405, -73.5776041], {
            color: williamBronkColor
          }).bindPopup('<a href="/entities/williamBronk_31"><h3>William Bronk</h3></a><p>57 Pearl St<br />Hudson Falls, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(williamBronk);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="williamBronk.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="williamBronk.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var steveBrooksColor = getRandomColor();
      var style = '.' + 'steveBrooks';
      var steveBrooks = L.featureGroup([
          L.circleMarker([37.7257067, -122.415187], {
            color: steveBrooksColor
          }).bindPopup('<a href="/entities/steveBrooks_76"><h3>Steve Brooks</h3></a><p>35 Campus Circle<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(steveBrooks);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="steveBrooks.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="steveBrooks.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.7635968, -122.4630396], {
            color: steveBrooksColor
          }).bindPopup('<a href="/entities/steveBrooks_76"><h3>Steve Brooks</h3></a><p>1328 6th Ave<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(steveBrooks);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="steveBrooks.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="steveBrooks.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var billBrownColor = getRandomColor();
      var style = '.' + 'billBrown';
      var billBrown = L.featureGroup([
          L.circleMarker([37.9093702, -122.6863733], {
            color: billBrownColor
          }).bindPopup('<a href="/entities/billBrown_36"><h3>Bill Brown</h3></a><p>PO Box 85<br />Bolinas, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(billBrown);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="billBrown.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="billBrown.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var harveyBrownColor = getRandomColor();
      var style = '.' + 'harveyBrown';
      var harveyBrown = L.featureGroup([
          L.circleMarker([42.961675, -78.829305], {
            color: harveyBrownColor
          }).bindPopup('<a href="/entities/harveyBrown_49"><h3>Harvey Brown</h3></a><p>302 Montrose Ave<br />Buffalo, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(harveyBrown);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="harveyBrown.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="harveyBrown.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var lewisDeforestLewBrownColor = getRandomColor();
      var style = '.' + 'lewisDeforestLewBrown';
      var lewisDeforestLewBrown = L.featureGroup([
          L.circleMarker([37.761738, -122.451713], {
            color: lewisDeforestLewBrownColor
          }).bindPopup('<a href="/entities/lewisDeforestLewBrown_51"><h3>Lewis DeForest (Lew) Brown</h3></a><p>1214A Stanyan St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lewisDeforestLewBrown);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lewisDeforestLewBrown.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lewisDeforestLewBrown.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var peteBrownColor = getRandomColor();
      var style = '.' + 'peteBrown';
      var peteBrown = L.featureGroup([
          L.circleMarker([51.5416485, -0.1588899], {
            color: peteBrownColor
          }).bindPopup('<a href="/entities/peteBrown_30"><h3>Pete Brown</h3></a><p>21 Oppidans Rd<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(peteBrown);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="peteBrown.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="peteBrown.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var edwardBudowskiColor = getRandomColor();
      var style = '.' + 'edwardBudowski';
      var edwardBudowski = L.featureGroup([
          L.circleMarker([42.955364, -78.8214035], {
            color: edwardBudowskiColor
          }).bindPopup('<a href="/entities/edwardBudowski_181"><h3>Edward Budowski</h3></a><p>3400 Main St<br />Buffalo, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edwardBudowski);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edwardBudowski.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edwardBudowski.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var basilBuntingColor = getRandomColor();
      var style = '.' + 'basilBunting';
      var basilBunting = L.featureGroup([
          L.circleMarker([54.9734995, -1.8165205], {
            color: basilBuntingColor
          }).bindPopup('<a href="/entities/basilBunting_32"><h3>Basil Bunting</h3></a><p>Shadingfield, Elm Bank Rd.<br />Wylam-on-Tyne Northumberland, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(basilBunting);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="basilBunting.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="basilBunting.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var rudyBurckhardtColor = getRandomColor();
      var style = '.' + 'rudyBurckhardt';
      var rudyBurckhardt = L.featureGroup([
          L.circleMarker([40.742526, -73.995312], {
            color: rudyBurckhardtColor
          }).bindPopup('<a href="/entities/rudyBurckhardt_145"><h3>Rudy Burckhardt</h3></a><p>145 W 21st St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(rudyBurckhardt);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="rudyBurckhardt.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="rudyBurckhardt.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var sarahBurgessColor = getRandomColor();
      var style = '.' + 'sarahBurgess';
      var sarahBurgess = L.featureGroup([
          L.circleMarker([51.4836505, -0.1867831], {
            color: sarahBurgessColor
          }).bindPopup('<a href="/entities/sarahBurgess_62"><h3>Sarah Burgess</h3></a><p>30 Ifield Rd Kensington<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(sarahBurgess);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="sarahBurgess.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="sarahBurgess.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jimBurnsColor = getRandomColor();
      var style = '.' + 'jimBurns';
      var jimBurns = L.featureGroup([
          L.circleMarker([53.7621571, -2.7557599], {
            color: jimBurnsColor
          }).bindPopup('<a href="/entities/jimBurns_46"><h3>Jim Burns</h3></a><p>7 Ryelands Crescent<br />Preston, Lancashire, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jimBurns);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jimBurns.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jimBurns.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var williamBurroughsColor = getRandomColor();
      var style = '.' + 'williamBurroughs';
      var williamBurroughs = L.featureGroup([
          L.circleMarker([51.4923146, -0.1942316], {
            color: williamBurroughsColor
          }).bindPopup('<a href="/entities/williamBurroughs_56"><h3>William Burroughs</h3></a><p>Rushmore Hotel, 11 Trebovir Rd<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(williamBurroughs);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="williamBurroughs.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="williamBurroughs.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var helenBurstonColor = getRandomColor();
      var style = '.' + 'helenBurston';
      var helenBurston = L.featureGroup([
          L.circleMarker([52.2747879, 1.0245468], {
            color: helenBurstonColor
          }).bindPopup('<a href="/entities/helenBurston_41"><h3>Helen Burston</h3></a><p>Broadway, Station Road<br />Cotton, Stowmarket, Suffolk, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(helenBurston);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="helenBurston.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="helenBurston.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var michaelButlerColor = getRandomColor();
      var style = '.' + 'michaelButler';
      var michaelButler = L.featureGroup([
          L.circleMarker([52.1115047, 1.113338], {
            color: michaelButlerColor
          }).bindPopup('<a href="/entities/michaelButler_52"><h3>Michael Butler</h3></a><p>15 Phillipps Rd<br />Barham, Ipswich, Suffolk, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(michaelButler);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="michaelButler.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="michaelButler.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var herbieButterfieldColor = getRandomColor();
      var style = '.' + 'herbieButterfield';
      var herbieButterfield = L.featureGroup([
          L.circleMarker([51.8913918, 0.907305], {
            color: herbieButterfieldColor
          }).bindPopup('<a href="/entities/herbieButterfield_66"><h3>Herbie Butterfield</h3></a><p>45 Roman Rd<br />Colchester, Essex, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(herbieButterfield);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="herbieButterfield.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="herbieButterfield.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var bobCaligyColor = getRandomColor();
      var style = '.' + 'bobCaligy';
      var bobCaligy = L.featureGroup([
          L.circleMarker([40.718035, -73.990609], {
            color: bobCaligyColor
          }).bindPopup('<a href="/entities/bobCaligy_123"><h3>Bob Caligy</h3></a><p>263 Broome St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bobCaligy);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bobCaligy.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bobCaligy.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var bobCallahanColor = getRandomColor();
      var style = '.' + 'bobCallahan';
      var bobCallahan = L.featureGroup([
          L.circleMarker([37.785219, -122.445358], {
            color: bobCallahanColor
          }).bindPopup('<a href="/entities/bobCallahan_418"><h3>Bob Callahan</h3></a><p>2907 Bush St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bobCallahan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bobCallahan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bobCallahan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var stephenACanadaColor = getRandomColor();
      var style = '.' + 'stephenACanada';
      var stephenACanada = L.featureGroup([
          L.circleMarker([34.0931179, -118.163856], {
            color: stephenACanadaColor
          }).bindPopup('<a href="/entities/stephenACanada_104"><h3>Stephen A. Canada</h3></a><p>4201 Stillwell Ave #3<br />Los Angeles, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(stephenACanada);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="stephenACanada.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="stephenACanada.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([34.1302075, -118.1547695], {
            color: stephenACanadaColor
          }).bindPopup('<a href="/entities/stephenACanada_104"><h3>Stephen A. Canada</h3></a><p>894 S Pasadena Ave<br />Pasadena, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(stephenACanada);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="stephenACanada.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="stephenACanada.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var CapeGoliardColor = getRandomColor();
      var style = '.' + 'CapeGoliard';
      var CapeGoliard = L.featureGroup([
          L.circleMarker([51.5461794, -0.1852274], {
            color: CapeGoliardColor
          }).bindPopup('<a href="/entities/CapeGoliard_262"><h3>Cape Goliard</h3></a><p>102 Fairhazel Gardens<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(CapeGoliard);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="CapeGoliard.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="CapeGoliard.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var steveCareyColor = getRandomColor();
      var style = '.' + 'steveCarey';
      var steveCarey = L.featureGroup([
          L.circleMarker([37.7865839, -122.4442658], {
            color: steveCareyColor
          }).bindPopup('<a href="/entities/steveCarey_107"><h3>Steve Carey</h3></a><p>2941 Pine St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(steveCarey);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="steveCarey.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="steveCarey.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([34.0542985, -118.2823206], {
            color: steveCareyColor
          }).bindPopup('<a href="/entities/steveCarey_107"><h3>Steve Carey</h3></a><p>919 S Park View St<br />Los Angeles, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(steveCarey);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="steveCarey.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="steveCarey.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.8590937, -122.4852507], {
            color: steveCareyColor
          }).bindPopup('<a href="/entities/steveCarey_107"><h3>Steve Carey</h3></a><p>PO Box 563<br />Sausalito, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(steveCarey);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="steveCarey.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="steveCarey.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.766823, -122.447543], {
            color: steveCareyColor
          }).bindPopup('<a href="/entities/steveCarey_107"><h3>Steve Carey</h3></a><p>273 Frederick St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(steveCarey);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="steveCarey.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="steveCarey.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.7670344, -122.4530622], {
            color: steveCareyColor
          }).bindPopup('<a href="/entities/steveCarey_107"><h3>Steve Carey</h3></a><p>822 Stanyan St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(steveCarey);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="steveCarey.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="steveCarey.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var paulCarrollColor = getRandomColor();
      var style = '.' + 'paulCarroll';
      var paulCarroll = L.featureGroup([
          L.circleMarker([41.8830664, -87.6524906], {
            color: paulCarrollColor
          }).bindPopup('<a href="/entities/paulCarroll_87"><h3>Paul Carroll</h3></a><p>1010 W Washington Blvd<br />Chicago, IL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(paulCarroll);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="paulCarroll.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="paulCarroll.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([41.934671, -87.641522], {
            color: paulCarrollColor
          }).bindPopup('<a href="/entities/paulCarroll_87"><h3>Paul Carroll</h3></a><p>450 W Surf St<br />Chicago, IL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(paulCarroll);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="paulCarroll.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="paulCarroll.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([41.910666, -87.629243], {
            color: paulCarrollColor
          }).bindPopup('<a href="/entities/paulCarroll_87"><h3>Paul Carroll</h3></a><p>1540 N State Pkwy<br />Chicago, IL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(paulCarroll);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="paulCarroll.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="paulCarroll.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([41.8994102, -87.6195937], {
            color: paulCarrollColor
          }).bindPopup('<a href="/entities/paulCarroll_87"><h3>Paul Carroll</h3></a><p>900 N Lake Shore Dr<br />Chicago, IL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(paulCarroll);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="paulCarroll.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="paulCarroll.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([41.8860306, -87.6337095], {
            color: paulCarrollColor
          }).bindPopup('<a href="/entities/paulCarroll_87"><h3>Paul Carroll</h3></a><p>201 N Wells St<br />Chicago, IL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(paulCarroll);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="paulCarroll.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="paulCarroll.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var elizabethCaseColor = getRandomColor();
      var style = '.' + 'elizabethCase';
      var elizabethCase = L.featureGroup([
          L.circleMarker([42.274467, -83.7353679], {
            color: elizabethCaseColor
          }).bindPopup('<a href="/entities/elizabethCase_119"><h3>Elizabeth Case</h3></a><p>615 E University Ave<br />Ann Arbor, MI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(elizabethCase);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="elizabethCase.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="elizabethCase.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var cyrilCasterColor = getRandomColor();
      var style = '.' + 'cyrilCaster';
      var cyrilCaster = L.featureGroup([
          L.circleMarker([40.73482, -73.995554], {
            color: cyrilCasterColor
          }).bindPopup('<a href="/entities/cyrilCaster_100"><h3>Cyril Caster</h3></a><p>18 W 12th St 1A<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(cyrilCaster);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="cyrilCaster.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="cyrilCaster.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var mmeBlaiseCendrarsColor = getRandomColor();
      var style = '.' + 'mmeBlaiseCendrars';
      var mmeBlaiseCendrars = L.featureGroup([
          L.circleMarker([48.8336648, 2.3384932], {
            color: mmeBlaiseCendrarsColor
          }).bindPopup('<a href="/entities/mmeBlaiseCendrars_108"><h3>Mme. Blaise Cendrars</h3></a><p>23 Rue Jean Dolent<br />Paris, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(mmeBlaiseCendrars);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="mmeBlaiseCendrars.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="mmeBlaiseCendrars.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var CenticoreBooksColor = getRandomColor();
      var style = '.' + 'CenticoreBooks';
      var CenticoreBooks = L.featureGroup([
          L.circleMarker([42.2751568, -83.7335828], {
            color: CenticoreBooksColor
          }).bindPopup('<a href="/entities/CenticoreBooks_561"><h3>Centicore Books</h3></a><p>1229 S. University Ave<br />Ann Arbor, MI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(CenticoreBooks);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="CenticoreBooks.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="CenticoreBooks.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var hankChapinColor = getRandomColor();
      var style = '.' + 'hankChapin';
      var hankChapin = L.featureGroup([
          L.circleMarker([38.2155384, -84.5579706], {
            color: hankChapinColor
          }).bindPopup('<a href="/entities/hankChapin_84"><h3>Hank Chapin</h3></a><p>404 Oak St<br />Georgetown, KY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(hankChapin);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="hankChapin.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="hankChapin.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var frankCharltonColor = getRandomColor();
      var style = '.' + 'frankCharlton';
      var frankCharlton = L.featureGroup([
          L.circleMarker([35.7799973, -5.8288733], {
            color: frankCharltonColor
          }).bindPopup('<a href="/entities/frankCharlton_93"><h3>Frank Charlton</h3></a><p>Maison Daghmaum Ave Sidi Amar Mulay Arafa<br />Tangier, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(frankCharlton);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="frankCharlton.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="frankCharlton.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var CityLightsColor = getRandomColor();
      var style = '.' + 'CityLights';
      var CityLights = L.featureGroup([
          L.circleMarker([37.797601, -122.406579], {
            color: CityLightsColor
          }).bindPopup('<a href="/entities/CityLights_94"><h3>City Lights</h3></a><p>261 Columbus Ave<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(CityLights);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="CityLights.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="CityLights.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnClarkColor = getRandomColor();
      var style = '.' + 'johnClark';
      var johnClark = L.featureGroup([
          L.circleMarker([41.9200794, -87.6557203], {
            color: johnClarkColor
          }).bindPopup('<a href="/entities/johnClark_129"><h3>John Clark</h3></a><p>2103 N Seminary Ave<br />Chicago, IL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnClark);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnClark.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnClark.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var davidCoatesColor = getRandomColor();
      var style = '.' + 'davidCoates';
      var davidCoates = L.featureGroup([
          L.circleMarker([51.7531851, -1.2629014], {
            color: davidCoatesColor
          }).bindPopup('<a href="/entities/davidCoates_99"><h3>David Coates</h3></a><p>The Cottage, George Street Mews<br />Oxford, Oxfordshire, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidCoates);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidCoates.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidCoates.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var victorColemanColor = getRandomColor();
      var style = '.' + 'victorColeman';
      var victorColeman = L.featureGroup([
          L.circleMarker([43.6369475, -79.431442], {
            color: victorColemanColor
          }).bindPopup('<a href="/entities/victorColeman_82"><h3>Victor Coleman</h3></a><p>109 Cowan Ave<br />Toronto, ON<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(victorColeman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="victorColeman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="victorColeman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([43.6605241, -79.4671305], {
            color: victorColemanColor
          }).bindPopup('<a href="/entities/victorColeman_82"><h3>Victor Coleman</h3></a><p>257 Humberside<br />Toronto, ON<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(victorColeman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="victorColeman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="victorColeman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jackCollomColor = getRandomColor();
      var style = '.' + 'jackCollom';
      var jackCollom = L.featureGroup([
          L.circleMarker([40.038514, -105.280289], {
            color: jackCollomColor
          }).bindPopup('<a href="/entities/jackCollom_85"><h3>Jack Collom</h3></a><p>1400 Kalmia Ave<br />Boulder, CO<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jackCollom);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jackCollom.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jackCollom.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.02481, -105.286999], {
            color: jackCollomColor
          }).bindPopup('<a href="/entities/jackCollom_85"><h3>Jack Collom</h3></a><p>667 North St<br />Boulder, CO<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jackCollom);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jackCollom.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jackCollom.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ColumbiaPicturesColor = getRandomColor();
      var style = '.' + 'ColumbiaPictures';
      var ColumbiaPictures = L.featureGroup([
          L.circleMarker([51.5147368, -0.1345577], {
            color: ColumbiaPicturesColor
          }).bindPopup('<a href="/entities/ColumbiaPictures_3"><h3>Columbia Pictures</h3></a><p>142 Wardour St Soho<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ColumbiaPictures);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ColumbiaPictures.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ColumbiaPictures.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var gwenConnetColor = getRandomColor();
      var style = '.' + 'gwenConnet';
      var gwenConnet = L.featureGroup([
          L.circleMarker([40.7272, -73.987533], {
            color: gwenConnetColor
          }).bindPopup('<a href="/entities/gwenConnet_116"><h3>Gwen Connet</h3></a><p>315 E 6th St Apt 7<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(gwenConnet);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="gwenConnet.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="gwenConnet.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var bobCookColor = getRandomColor();
      var style = '.' + 'bobCook';
      var bobCook = L.featureGroup([
          L.circleMarker([38.9120859, -77.0655193], {
            color: bobCookColor
          }).bindPopup('<a href="/entities/bobCook_114"><h3>Bob Cook</h3></a><p>1663 Wisconsin Ave NW<br />Washington, DC<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bobCook);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bobCook.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bobCook.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var shelleyCooperColor = getRandomColor();
      var style = '.' + 'shelleyCooper';
      var shelleyCooper = L.featureGroup([
          L.circleMarker([34.1498977, -118.3410174], {
            color: shelleyCooperColor
          }).bindPopup('<a href="/entities/shelleyCooper_128"><h3>Shelley Cooper</h3></a><p>4000 Warner Blvd<br />Burbank, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(shelleyCooper);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="shelleyCooper.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="shelleyCooper.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var andreiCordescuColor = getRandomColor();
      var style = '.' + 'andreiCordescu';
      var andreiCordescu = L.featureGroup([
          L.circleMarker([37.750027, -122.424471], {
            color: andreiCordescuColor
          }).bindPopup('<a href="/entities/andreiCordescu_92"><h3>Andrei Cordescu</h3></a><p>3779 25th St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(andreiCordescu);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="andreiCordescu.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="andreiCordescu.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var cidCormanColor = getRandomColor();
      var style = '.' + 'cidCorman';
      var cidCorman = L.featureGroup([
          L.circleMarker([35.039531, 135.7687899], {
            color: cidCormanColor
          }).bindPopup('<a href="/entities/cidCorman_83"><h3>Cid Corman</h3></a><p>41 Shimogamo Shimokawarachō Sakyō-ku, Kyōto-shi<br />Kyoto, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(cidCorman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="cidCorman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="cidCorman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([34.9360295, 135.7614097], {
            color: cidCormanColor
          }).bindPopup('<a href="/entities/cidCorman_83"><h3>Cid Corman</h3></a><p>28 Tsutsuiga Higashi-cho Momoyama Fushimi-ku<br />Kyoto, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(cidCorman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="cidCorman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="cidCorman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var gregoryCorsoColor = getRandomColor();
      var style = '.' + 'gregoryCorso';
      var gregoryCorso = L.featureGroup([
          L.circleMarker([37.9775103, 23.743949], {
            color: gregoryCorsoColor
          }).bindPopup('<a href="/entities/gregoryCorso_103"><h3>Gregory Corso</h3></a><p>Alopekis 19<br />Athina, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(gregoryCorso);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="gregoryCorso.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="gregoryCorso.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([48.8497931, 2.3401905], {
            color: gregoryCorsoColor
          }).bindPopup('<a href="/entities/gregoryCorso_103"><h3>Gregory Corso</h3></a><p>Hôtel Stella, 41 Rue Monsieur le Prince<br />Paris, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(gregoryCorso);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="gregoryCorso.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="gregoryCorso.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jonathanCottColor = getRandomColor();
      var style = '.' + 'jonathanCott';
      var jonathanCott = L.featureGroup([
          L.circleMarker([40.7662399, -73.9636429], {
            color: jonathanCottColor
          }).bindPopup('<a href="/entities/jonathanCott_109"><h3>Jonathan Cott</h3></a><p>165 E 66th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jonathanCott);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jonathanCott.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jonathanCott.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var CowColor = getRandomColor();
      var style = '.' + 'Cow';
      var Cow = L.featureGroup([
          L.circleMarker([37.7862821, -122.3946421], {
            color: CowColor
          }).bindPopup('<a href="/entities/Cow_97"><h3>Cow</h3></a><p>31 Guy Pl<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Cow);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Cow.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Cow.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var davidSusanCoxheadColor = getRandomColor();
      var style = '.' + 'davidSusanCoxhead';
      var davidSusanCoxhead = L.featureGroup([
          L.circleMarker([51.5159585, -0.2100742], {
            color: davidSusanCoxheadColor
          }).bindPopup('<a href="/entities/davidSusanCoxhead_110"><h3>David &amp; Susan Coxhead</h3></a><p>22 Ladbroke Crescent<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidSusanCoxhead);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidSusanCoxhead.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidSusanCoxhead.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.2383002, -0.560098], {
            color: davidSusanCoxheadColor
          }).bindPopup('<a href="/entities/davidSusanCoxhead_110"><h3>David &amp; Susan Coxhead</h3></a><p>Garden Croft Beechlawn<br />Guildford, Surrey, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidSusanCoxhead);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidSusanCoxhead.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidSusanCoxhead.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var CoyoteSJournalColor = getRandomColor();
      var style = '.' + 'CoyoteSJournal';
      var CoyoteSJournal = L.featureGroup([
          L.circleMarker([44.032539, -123.075159], {
            color: CoyoteSJournalColor
          }).bindPopup('<a href="/entities/CoyoteSJournal_552"><h3>Coyote’s Journal</h3></a><p>1175 E 25th Ave<br />Eugene, OR<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(CoyoteSJournal);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="CoyoteSJournal.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="CoyoteSJournal.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.822862, -122.253328], {
            color: CoyoteSJournalColor
          }).bindPopup('<a href="/entities/CoyoteSJournal_552"><h3>Coyote’s Journal</h3></a><p>91 Rio Vista Ave<br />Oakland, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(CoyoteSJournal);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="CoyoteSJournal.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="CoyoteSJournal.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var didiCraneColor = getRandomColor();
      var style = '.' + 'didiCrane';
      var didiCrane = L.featureGroup([
          L.circleMarker([37.7905817, -122.4351978], {
            color: didiCraneColor
          }).bindPopup('<a href="/entities/didiCrane_102"><h3>Didi Crane</h3></a><p>2563 Clay St #4<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(didiCrane);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="didiCrane.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="didiCrane.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var robertCreeleyColor = getRandomColor();
      var style = '.' + 'robertCreeley';
      var robertCreeley = L.featureGroup([
          L.circleMarker([42.62213, -78.824211], {
            color: robertCreeleyColor
          }).bindPopup('<a href="/entities/robertCreeley_80"><h3>Robert Creeley</h3></a><p>9596 Knoll Rd<br />Eden, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(robertCreeley);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="robertCreeley.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="robertCreeley.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.6417617, -70.6717116], {
            color: robertCreeleyColor
          }).bindPopup('<a href="/entities/robertCreeley_80"><h3>Robert Creeley</h3></a><p>Riverdale Station<br />Gloucester, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(robertCreeley);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="robertCreeley.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="robertCreeley.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.9093702, -122.6863733], {
            color: robertCreeleyColor
          }).bindPopup('<a href="/entities/robertCreeley_80"><h3>Robert Creeley</h3></a><p>PO Box 334<br />Bolinas, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(robertCreeley);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="robertCreeley.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="robertCreeley.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([35.3069845, -106.4247468], {
            color: robertCreeleyColor
          }).bindPopup('<a href="/entities/robertCreeley_80"><h3>Robert Creeley</h3></a><p><br />Placitas, NM<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(robertCreeley);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="robertCreeley.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="robertCreeley.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.944704, -78.842978], {
            color: robertCreeleyColor
          }).bindPopup('<a href="/entities/robertCreeley_80"><h3>Robert Creeley</h3></a><p>256 Woodbridge Ave<br />Buffalo, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(robertCreeley);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="robertCreeley.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="robertCreeley.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var CreemColor = getRandomColor();
      var style = '.' + 'Creem';
      var Creem = L.featureGroup([
          L.circleMarker([42.347176, -83.061984], {
            color: CreemColor
          }).bindPopup('<a href="/entities/Creem_365"><h3>Creem</h3></a><p>3729 Cass Ave<br />Detroit, MI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Creem);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Creem.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Creem.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var judsonCrewsColor = getRandomColor();
      var style = '.' + 'judsonCrews';
      var judsonCrews = L.featureGroup([
          L.circleMarker([36.4072485, -105.5730665], {
            color: judsonCrewsColor
          }).bindPopup('<a href="/entities/judsonCrews_88"><h3>Judson Crews</h3></a><p>PO Box 1492<br />Taos, NM<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(judsonCrews);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="judsonCrews.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="judsonCrews.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var andrewCrozierColor = getRandomColor();
      var style = '.' + 'andrewCrozier';
      var andrewCrozier = L.featureGroup([
      ]);
      var daveCunliffeColor = getRandomColor();
      var style = '.' + 'daveCunliffe';
      var daveCunliffe = L.featureGroup([
          L.circleMarker([53.7520075, -2.504108], {
            color: daveCunliffeColor
          }).bindPopup('<a href="/entities/daveCunliffe_427"><h3>Dave Cunliffe</h3></a><p>11 Clematis St<br />Blackburn, Blackburn with Darwen, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(daveCunliffe);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="daveCunliffe.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="daveCunliffe.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var peterDavidsonColor = getRandomColor();
      var style = '.' + 'peterDavidson';
      var peterDavidson = L.featureGroup([
          L.circleMarker([42.3516728, -71.1520743], {
            color: peterDavidsonColor
          }).bindPopup('<a href="/entities/peterDavidson_26"><h3>Peter Davidson</h3></a><p>8 Arlington St<br />Boston, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(peterDavidson);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="peterDavidson.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="peterDavidson.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var donaldDavieColor = getRandomColor();
      var style = '.' + 'donaldDavie';
      var donaldDavie = L.featureGroup([
          L.circleMarker([51.8414739, 1.2354458], {
            color: donaldDavieColor
          }).bindPopup('<a href="/entities/donaldDavie_133"><h3>Donald Davie</h3></a><p>Fleet’s Field 171 Frinton Rd<br />Kirby Cross, Frinton-on-Sea, Essex, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(donaldDavie);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="donaldDavie.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="donaldDavie.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var allenDeLoachColor = getRandomColor();
      var style = '.' + 'allenDeLoach';
      var allenDeLoach = L.featureGroup([
          L.circleMarker([42.098603, -79.2373], {
            color: allenDeLoachColor
          }).bindPopup('<a href="/entities/allenDeLoach_271"><h3>Allen De Loach</h3></a><p>333 E 5th St<br />New York, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(allenDeLoach);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="allenDeLoach.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="allenDeLoach.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var billDebesColor = getRandomColor();
      var style = '.' + 'billDebes';
      var billDebes = L.featureGroup([
          L.circleMarker([42.043006, -87.693944], {
            color: billDebesColor
          }).bindPopup('<a href="/entities/billDebes_136"><h3>Bill Debes</h3></a><p>1404 Ashland Ave<br />Evanston, IL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(billDebes);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="billDebes.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="billDebes.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.031778, -87.676846], {
            color: billDebesColor
          }).bindPopup('<a href="/entities/billDebes_136"><h3>Bill Debes</h3></a><p>733 Hinman Ave<br />Evanston, IL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(billDebes);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="billDebes.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="billDebes.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var billDeemerColor = getRandomColor();
      var style = '.' + 'billDeemer';
      var billDeemer = L.featureGroup([
          L.circleMarker([37.782812, -122.449552], {
            color: billDeemerColor
          }).bindPopup('<a href="/entities/billDeemer_140"><h3>Bill Deemer</h3></a><p>65 Wood St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(billDeemer);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="billDeemer.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="billDeemer.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var leeDejasuColor = getRandomColor();
      var style = '.' + 'leeDejasu';
      var leeDejasu = L.featureGroup([
          L.circleMarker([41.8457217, -71.4023628], {
            color: leeDejasuColor
          }).bindPopup('<a href="/entities/leeDejasu_160"><h3>Lee Dejasu</h3></a><p>64 Woodbine St<br />Providence, RI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(leeDejasu);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="leeDejasu.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="leeDejasu.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var DeltaColor = getRandomColor();
      var style = '.' + 'Delta';
      var Delta = L.featureGroup([
          L.circleMarker([45.4766305, -73.6087706], {
            color: DeltaColor
          }).bindPopup('<a href="/entities/Delta_134"><h3>Delta</h3></a><p>3476 Vendome Ave<br />Montreal, QC<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Delta);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Delta.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Delta.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var edwinDenbyColor = getRandomColor();
      var style = '.' + 'edwinDenby';
      var edwinDenby = L.featureGroup([
          L.circleMarker([40.742526, -73.995312], {
            color: edwinDenbyColor
          }).bindPopup('<a href="/entities/edwinDenby_144"><h3>Edwin Denby</h3></a><p>145 W 21st St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edwinDenby);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edwinDenby.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edwinDenby.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var DesertReviewColor = getRandomColor();
      var style = '.' + 'DesertReview';
      var DesertReview = L.featureGroup([
          L.circleMarker([51.5206388, -0.1257111], {
            color: DesertReviewColor
          }).bindPopup('<a href="/entities/DesertReview_152"><h3>Desert Review</h3></a><p>7 Russell Rd Kensington<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(DesertReview);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="DesertReview.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="DesertReview.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var DesertReviewPressColor = getRandomColor();
      var style = '.' + 'DesertReviewPress';
      var DesertReviewPress = L.featureGroup([
          L.circleMarker([35.067801, -106.598362], {
            color: DesertReviewPressColor
          }).bindPopup('<a href="/entities/DesertReviewPress_143"><h3>Desert Review Press</h3></a><p>917 Idlewilde Ln SE<br />Albuquerque, NM<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(DesertReviewPress);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="DesertReviewPress.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="DesertReviewPress.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var jimDineColor = getRandomColor();
      var style = '.' + 'jimDine';
      var jimDine = L.featureGroup([
          L.circleMarker([51.4945339, -0.1500912], {
            color: jimDineColor
          }).bindPopup('<a href="/entities/jimDine_157"><h3>Jim Dine</h3></a><p>60 Chester Square Belgravia<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jimDine);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jimDine.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jimDine.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.4860068, -0.1705867], {
            color: jimDineColor
          }).bindPopup('<a href="/entities/jimDine_157"><h3>Jim Dine</h3></a><p>13 Glebe Pl Chelsea<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jimDine);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jimDine.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jimDine.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.975268, -72.5217237], {
            color: jimDineColor
          }).bindPopup('<a href="/entities/jimDine_157"><h3>Jim Dine</h3></a><p>RFD 3<br />Putney, VT<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jimDine);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jimDine.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jimDine.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var franceDiotColor = getRandomColor();
      var style = '.' + 'franceDiot';
      var franceDiot = L.featureGroup([
          L.circleMarker([48.8482509, 2.2752244], {
            color: franceDiotColor
          }).bindPopup('<a href="/entities/franceDiot_137"><h3>France Diot</h3></a><p>46 Quai Louis Bleriot<br />Paris, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(franceDiot);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="franceDiot.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="franceDiot.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var tomDischColor = getRandomColor();
      var style = '.' + 'tomDisch';
      var tomDisch = L.featureGroup([
          L.circleMarker([40.732742, -74.0018355], {
            color: tomDischColor
          }).bindPopup('<a href="/entities/tomDisch_159"><h3>Tom Disch</h3></a><p>1 Sheridan Square<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tomDisch);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tomDisch.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tomDisch.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var williamDoddsColor = getRandomColor();
      var style = '.' + 'williamDodds';
      var williamDodds = L.featureGroup([
          L.circleMarker([35.0832025, -106.6321791], {
            color: williamDoddsColor
          }).bindPopup('<a href="/entities/williamDodds_142"><h3>William Dodds</h3></a><p>212 Spruce St NE<br />Albuquerque, NM<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(williamDodds);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="williamDodds.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="williamDodds.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var louisDudekColor = getRandomColor();
      var style = '.' + 'louisDudek';
      var louisDudek = L.featureGroup([
          L.circleMarker([45.4766305, -73.6087706], {
            color: louisDudekColor
          }).bindPopup('<a href="/entities/louisDudek_135"><h3>Louis Dudek</h3></a><p>3476 Vendome Ave<br />Montreal, QC<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(louisDudek);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="louisDudek.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="louisDudek.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var DuendeColor = getRandomColor();
      var style = '.' + 'Duende';
      var Duende = L.featureGroup([
          L.circleMarker([35.3069845, -106.4247468], {
            color: DuendeColor
          }).bindPopup('<a href="/entities/Duende_198"><h3>Duende</h3></a><p>PO Box 571<br />Placitas, NM<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Duende);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Duende.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Duende.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var richardDuerdenColor = getRandomColor();
      var style = '.' + 'richardDuerden';
      var richardDuerden = L.featureGroup([
          L.circleMarker([37.766399, -122.4442764], {
            color: richardDuerdenColor
          }).bindPopup('<a href="/entities/richardDuerden_138"><h3>Richard Duerden</h3></a><p>1506 Masonic Ave<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(richardDuerden);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="richardDuerden.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="richardDuerden.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.762649, -122.449931], {
            color: richardDuerdenColor
          }).bindPopup('<a href="/entities/richardDuerden_138"><h3>Richard Duerden</h3></a><p>130 Rivoli St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(richardDuerden);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="richardDuerden.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="richardDuerden.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var haroldDullColor = getRandomColor();
      var style = '.' + 'haroldDull';
      var haroldDull = L.featureGroup([
          L.circleMarker([37.9004816, -122.6444263], {
            color: haroldDullColor
          }).bindPopup('<a href="/entities/haroldDull_139"><h3>Harold Dull</h3></a><p>PO Box 311<br />Stinson Beach, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(haroldDull);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="haroldDull.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="haroldDull.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnDunbarColor = getRandomColor();
      var style = '.' + 'johnDunbar';
      var johnDunbar = L.featureGroup([
          L.circleMarker([51.5171748, -0.150483], {
            color: johnDunbarColor
          }).bindPopup('<a href="/entities/johnDunbar_131"><h3>John Dunbar</h3></a><p>11 Bentinck St Marylebone<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnDunbar);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnDunbar.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnDunbar.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var robertDuncanColor = getRandomColor();
      var style = '.' + 'robertDuncan';
      var robertDuncan = L.featureGroup([
          L.circleMarker([37.7582541, -122.4251015], {
            color: robertDuncanColor
          }).bindPopup('<a href="/entities/robertDuncan_130"><h3>Robert Duncan</h3></a><p>3775 20th St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(robertDuncan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="robertDuncan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="robertDuncan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var bobDylanColor = getRandomColor();
      var style = '.' + 'bobDylan';
      var bobDylan = L.featureGroup([
          L.circleMarker([40.7246041, -73.9986294], {
            color: bobDylanColor
          }).bindPopup('<a href="/entities/bobDylan_161"><h3>Bob Dylan</h3></a><p>PO Box 36, Prince St Station, 103 Prince St.<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bobDylan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bobDylan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bobDylan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jMEdelsteinColor = getRandomColor();
      var style = '.' + 'jMEdelstein';
      var jMEdelstein = L.featureGroup([
          L.circleMarker([38.935675, -77.067229], {
            color: jMEdelsteinColor
          }).bindPopup('<a href="/entities/jMEdelstein_167"><h3>J.M. Edelstein</h3></a><p>3421 34th Pl NW<br />Washington, DC<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jMEdelstein);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jMEdelstein.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jMEdelstein.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([34.0749447, -118.4415081], {
            color: jMEdelsteinColor
          }).bindPopup('<a href="/entities/jMEdelstein_167"><h3>J.M. Edelstein</h3></a><p>Charles E. Young Research Library<br />Los Angeles, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jMEdelstein);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jMEdelstein.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jMEdelstein.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var karenEdwardsColor = getRandomColor();
      var style = '.' + 'karenEdwards';
      var karenEdwards = L.featureGroup([
          L.circleMarker([40.7291586, -73.9884404], {
            color: karenEdwardsColor
          }).bindPopup('<a href="/entities/karenEdwards_169"><h3>Karen Edwards</h3></a><p>19-25 St Marks Pl<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(karenEdwards);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="karenEdwards.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="karenEdwards.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var robinEicheleColor = getRandomColor();
      var style = '.' + 'robinEichele';
      var robinEichele = L.featureGroup([
          L.circleMarker([51.5038892, -0.214697], {
            color: robinEicheleColor
          }).bindPopup('<a href="/entities/robinEichele_164"><h3>Robin Eichele</h3></a><p>23 Upper Addison Gardens Kensington<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(robinEichele);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="robinEichele.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="robinEichele.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.4045838, -83.1351664], {
            color: robinEicheleColor
          }).bindPopup('<a href="/entities/robinEichele_164"><h3>Robin Eichele</h3></a><p>4867 John C Lodge Service Dr<br />Detroit, MI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(robinEichele);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="robinEichele.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="robinEichele.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.3506939, -83.0750722], {
            color: robinEicheleColor
          }).bindPopup('<a href="/entities/robinEichele_164"><h3>Robin Eichele</h3></a><p>1252 W Forest Ave<br />Detroit, MI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(robinEichele);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="robinEichele.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="robinEichele.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var EighthStreetBookshopColor = getRandomColor();
      var style = '.' + 'EighthStreetBookshop';
      var EighthStreetBookshop = L.featureGroup([
          L.circleMarker([40.732888, -73.99731], {
            color: EighthStreetBookshopColor
          }).bindPopup('<a href="/entities/EighthStreetBookshop_196"><h3>Eighth Street Bookshop</h3></a><p>17 W 8th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(EighthStreetBookshop);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="EighthStreetBookshop.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="EighthStreetBookshop.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var larryEignerColor = getRandomColor();
      var style = '.' + 'larryEigner';
      var larryEigner = L.featureGroup([
          L.circleMarker([42.4677048, -70.8985537], {
            color: larryEignerColor
          }).bindPopup('<a href="/entities/larryEigner_162"><h3>Larry Eigner</h3></a><p>23 Bates Rd<br />Swampscott, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(larryEigner);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="larryEigner.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="larryEigner.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var EleventhFingerColor = getRandomColor();
      var style = '.' + 'EleventhFinger';
      var EleventhFinger = L.featureGroup([
          L.circleMarker([50.819165, -0.1278287], {
            color: EleventhFingerColor
          }).bindPopup('<a href="/entities/EleventhFinger_170"><h3>Eleventh Finger</h3></a><p>1 Charlotte St., Brighton<br />The City of Brighton and Hove, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(EleventhFinger);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="EleventhFinger.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="EleventhFinger.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var claytonEshlemanColor = getRandomColor();
      var style = '.' + 'claytonEshleman';
      var claytonEshleman = L.featureGroup([
          L.circleMarker([39.152228, -86.525707], {
            color: claytonEshlemanColor
          }).bindPopup('<a href="/entities/claytonEshleman_163"><h3>Clayton Eshleman</h3></a><p>1227 S Fess Ave<br />Bloomington, IN<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(claytonEshleman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="claytonEshleman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="claytonEshleman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var paulEvansColor = getRandomColor();
      var style = '.' + 'paulEvans';
      var paulEvans = L.featureGroup([
          L.circleMarker([50.819165, -0.1278287], {
            color: paulEvansColor
          }).bindPopup('<a href="/entities/paulEvans_171"><h3>Paul Evans</h3></a><p>1 Charlotte St., Brighton<br />The City of Brighton and Hove, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(paulEvans);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="paulEvans.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="paulEvans.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var harryFainlightColor = getRandomColor();
      var style = '.' + 'harryFainlight';
      var harryFainlight = L.featureGroup([
          L.circleMarker([51.5137311, -0.2067171], {
            color: harryFainlightColor
          }).bindPopup('<a href="/entities/harryFainlight_179"><h3>Harry Fainlight</h3></a><p>24 Arundel Gardens<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(harryFainlight);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="harryFainlight.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="harryFainlight.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.5428041, -0.1130989], {
            color: harryFainlightColor
          }).bindPopup('<a href="/entities/harryFainlight_179"><h3>Harry Fainlight</h3></a><p>1 Belitha Villas<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(harryFainlight);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="harryFainlight.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="harryFainlight.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ruthFainlightColor = getRandomColor();
      var style = '.' + 'ruthFainlight';
      var ruthFainlight = L.featureGroup([
          L.circleMarker([51.46797, -0.1386687], {
            color: ruthFainlightColor
          }).bindPopup('<a href="/entities/ruthFainlight_186"><h3>Ruth Fainlight</h3></a><p>97 Larkhall Rise<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ruthFainlight);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ruthFainlight.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ruthFainlight.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jimAndJenneferFarisColor = getRandomColor();
      var style = '.' + 'jimAndJenneferFaris';
      var jimAndJenneferFaris = L.featureGroup([
          L.circleMarker([52.2129561, 0.1113798], {
            color: jimAndJenneferFarisColor
          }).bindPopup('<a href="/entities/jimAndJenneferFaris_176"><h3>Jim and Jennefer Faris</h3></a><p>15 Shelly Row<br />Cambridge, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jimAndJenneferFaris);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jimAndJenneferFaris.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jimAndJenneferFaris.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var curtisFavilleColor = getRandomColor();
      var style = '.' + 'curtisFaville';
      var curtisFaville = L.featureGroup([
          L.circleMarker([37.855386, -122.248593], {
            color: curtisFavilleColor
          }).bindPopup('<a href="/entities/curtisFaville_194"><h3>Curtis Faville</h3></a><p>2835 Prince St<br />Berkeley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(curtisFaville);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="curtisFaville.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="curtisFaville.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var elaineFeinsteinColor = getRandomColor();
      var style = '.' + 'elaineFeinstein';
      var elaineFeinstein = L.featureGroup([
          L.circleMarker([52.205337, 0.121817], {
            color: elaineFeinsteinColor
          }).bindPopup('<a href="/entities/elaineFeinstein_175"><h3>Elaine Feinstein</h3></a><p>13th Close Babraham<br />Cambridge, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(elaineFeinstein);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="elaineFeinstein.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="elaineFeinstein.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([52.1872479, 0.173645], {
            color: elaineFeinsteinColor
          }).bindPopup('<a href="/entities/elaineFeinstein_175"><h3>Elaine Feinstein</h3></a><p>47 High St<br />Cambridge, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(elaineFeinstein);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="elaineFeinstein.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="elaineFeinstein.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var ianHamiltonFinlayColor = getRandomColor();
      var style = '.' + 'ianHamiltonFinlay';
      var ianHamiltonFinlay = L.featureGroup([
          L.circleMarker([57.9166667, -4.4166667], {
            color: ianHamiltonFinlayColor
          }).bindPopup('<a href="/entities/ianHamiltonFinlay_173"><h3>Ian Hamilton Finlay</h3></a><p>Gledfield Farmhouse<br />Ardgay Ross-Shire, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ianHamiltonFinlay);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ianHamiltonFinlay.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ianHamiltonFinlay.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([55.9590414, -3.2018073], {
            color: ianHamiltonFinlayColor
          }).bindPopup('<a href="/entities/ianHamiltonFinlay_173"><h3>Ian Hamilton Finlay</h3></a><p>24 Fettes Row<br />Edinburgh, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ianHamiltonFinlay);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ianHamiltonFinlay.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ianHamiltonFinlay.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var maxFinsteinColor = getRandomColor();
      var style = '.' + 'maxFinstein';
      var maxFinstein = L.featureGroup([
          L.circleMarker([37.7858492, -122.4298332], {
            color: maxFinsteinColor
          }).bindPopup('<a href="/entities/maxFinstein_174"><h3>Max Finstein</h3></a><p>1711 Buchanan St Japan Center<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(maxFinstein);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="maxFinstein.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="maxFinstein.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([35.5830906, -105.7700174], {
            color: maxFinsteinColor
          }).bindPopup('<a href="/entities/maxFinstein_174"><h3>Max Finstein</h3></a><p><br />Glorieta, NM<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(maxFinstein);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="maxFinstein.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="maxFinstein.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.7716569, -122.4414472], {
            color: maxFinsteinColor
          }).bindPopup('<a href="/entities/maxFinstein_174"><h3>Max Finstein</h3></a><p>1274A Page St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(maxFinstein);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="maxFinstein.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="maxFinstein.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.771104, -122.451067], {
            color: maxFinsteinColor
          }).bindPopup('<a href="/entities/maxFinstein_174"><h3>Max Finstein</h3></a><p>1921 Oak St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(maxFinstein);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="maxFinstein.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="maxFinstein.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var tamFioforiColor = getRandomColor();
      var style = '.' + 'tamFiofori';
      var tamFiofori = L.featureGroup([
          L.circleMarker([51.5019262, -0.1566237], {
            color: tamFioforiColor
          }).bindPopup('<a href="/entities/tamFiofori_183"><h3>Tam Fiofori</h3></a><p>3 Wilton Pl Belgravia<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tamFiofori);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tamFiofori.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tamFiofori.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var royFisherColor = getRandomColor();
      var style = '.' + 'royFisher';
      var royFisher = L.featureGroup([
          L.circleMarker([52.5139959, -1.9234739], {
            color: royFisherColor
          }).bindPopup('<a href="/entities/royFisher_178"><h3>Roy Fisher</h3></a><p>7 Endwood Court Rd<br />Birmingham, West Midlands, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(royFisher);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="royFisher.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="royFisher.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jamesFitzsimmonsColor = getRandomColor();
      var style = '.' + 'jamesFitzsimmons';
      var jamesFitzsimmons = L.featureGroup([
          L.circleMarker([45.9989046, 8.9453621], {
            color: jamesFitzsimmonsColor
          }).bindPopup('<a href="/entities/jamesFitzsimmons_292"><h3>James Fitzsimmons</h3></a><p>Via Clemente Maraini 17A<br />Lugano, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jamesFitzsimmons);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jamesFitzsimmons.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jamesFitzsimmons.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var FolkloreCenterColor = getRandomColor();
      var style = '.' + 'FolkloreCenter';
      var FolkloreCenter = L.featureGroup([
          L.circleMarker([40.73113, -74.0017065], {
            color: FolkloreCenterColor
          }).bindPopup('<a href="/entities/FolkloreCenter_588"><h3>Folklore Center</h3></a><p>321 Avenue of the Americas<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(FolkloreCenter);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="FolkloreCenter.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="FolkloreCenter.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var FollettPublishingCoColor = getRandomColor();
      var style = '.' + 'FollettPublishingCo';
      var FollettPublishingCo = L.featureGroup([
          L.circleMarker([41.8830664, -87.6524906], {
            color: FollettPublishingCoColor
          }).bindPopup('<a href="/entities/FollettPublishingCo_86"><h3>Follett Publishing Co.</h3></a><p>1010 W Washington Blvd<br />Chicago, IL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(FollettPublishingCo);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="FollettPublishingCo.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="FollettPublishingCo.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var robertFrancisColor = getRandomColor();
      var style = '.' + 'robertFrancis';
      var robertFrancis = L.featureGroup([
          L.circleMarker([42.4205449, -72.5050288], {
            color: robertFrancisColor
          }).bindPopup('<a href="/entities/robertFrancis_177"><h3>Robert Francis</h3></a><p>170 Market Hill Rd<br />Amherst, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(robertFrancis);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="robertFrancis.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="robertFrancis.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var richFriedmanColor = getRandomColor();
      var style = '.' + 'richFriedman';
      var richFriedman = L.featureGroup([
          L.circleMarker([42.0220059, -87.6718736], {
            color: richFriedmanColor
          }).bindPopup('<a href="/entities/richFriedman_195"><h3>Rich Friedman</h3></a><p>7724 N Marshfield Ave<br />Chicago, IL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(richFriedman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="richFriedman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="richFriedman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var FubbaloColor = getRandomColor();
      var style = '.' + 'Fubbalo';
      var Fubbalo = L.featureGroup([
          L.circleMarker([42.955364, -78.8214035], {
            color: FubbaloColor
          }).bindPopup('<a href="/entities/Fubbalo_180"><h3>Fubbalo</h3></a><p>3400 Main St<br />Buffalo, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Fubbalo);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Fubbalo.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Fubbalo.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var maxineGaddColor = getRandomColor();
      var style = '.' + 'maxineGadd';
      var maxineGadd = L.featureGroup([
          L.circleMarker([51.4468756, -0.1451103], {
            color: maxineGaddColor
          }).bindPopup('<a href="/entities/maxineGadd_214"><h3>Maxine Gadd</h3></a><p>223 Cavendish Rd<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(maxineGadd);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="maxineGadd.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="maxineGadd.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var gerryGilbertColor = getRandomColor();
      var style = '.' + 'gerryGilbert';
      var gerryGilbert = L.featureGroup([
          L.circleMarker([49.26129, -123.1128891], {
            color: gerryGilbertColor
          }).bindPopup('<a href="/entities/gerryGilbert_200"><h3>Gerry Gilbert</h3></a><p>664 W 11th Ave<br />Vancouver, BC<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(gerryGilbert);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="gerryGilbert.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="gerryGilbert.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.491461, -0.1600362], {
            color: gerryGilbertColor
          }).bindPopup('<a href="/entities/gerryGilbert_200"><h3>Gerry Gilbert</h3></a><p>16 King’s Rd Fulham<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(gerryGilbert);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="gerryGilbert.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="gerryGilbert.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var barbaraGladstoneColor = getRandomColor();
      var style = '.' + 'barbaraGladstone';
      var barbaraGladstone = L.featureGroup([
          L.circleMarker([51.5103928, -0.1948582], {
            color: barbaraGladstoneColor
          }).bindPopup('<a href="/entities/barbaraGladstone_210"><h3>Barbara Gladstone</h3></a><p>79 Linden Gardens<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(barbaraGladstone);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="barbaraGladstone.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="barbaraGladstone.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var GnomonPressColor = getRandomColor();
      var style = '.' + 'GnomonPress';
      var GnomonPress = L.featureGroup([
          L.circleMarker([37.753181, -122.410732], {
            color: GnomonPressColor
          }).bindPopup('<a href="/entities/GnomonPress_203"><h3>Gnomon Press</h3></a><p>1171 Alabama St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(GnomonPress);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="GnomonPress.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="GnomonPress.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnGodfreyColor = getRandomColor();
      var style = '.' + 'johnGodfrey';
      var johnGodfrey = L.featureGroup([
          L.circleMarker([42.906944, -78.895334], {
            color: johnGodfreyColor
          }).bindPopup('<a href="/entities/johnGodfrey_223"><h3>John Godfrey</h3></a><p>753 Prospect Ave<br />Buffalo, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnGodfrey);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnGodfrey.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnGodfrey.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([30.5335302, -92.081509], {
            color: johnGodfreyColor
          }).bindPopup('<a href="/entities/johnGodfrey_223"><h3>John Godfrey</h3></a><p>PO Box 1154<br />Opelousas, LA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnGodfrey);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnGodfrey.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnGodfrey.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var geraldAndNancyGoldbergColor = getRandomColor();
      var style = '.' + 'geraldAndNancyGoldberg';
      var geraldAndNancyGoldberg = L.featureGroup([
          L.circleMarker([34.034523, -118.418764], {
            color: geraldAndNancyGoldbergColor
          }).bindPopup('<a href="/entities/geraldAndNancyGoldberg_213"><h3>Gerald and Nancy Goldberg</h3></a><p>2848 Overland Ave<br />Los Angeles, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(geraldAndNancyGoldberg);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="geraldAndNancyGoldberg.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="geraldAndNancyGoldberg.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var larryGoodellColor = getRandomColor();
      var style = '.' + 'larryGoodell';
      var larryGoodell = L.featureGroup([
          L.circleMarker([35.3069845, -106.4247468], {
            color: larryGoodellColor
          }).bindPopup('<a href="/entities/larryGoodell_199"><h3>Larry Goodell</h3></a><p>PO Box 571<br />Placitas, NM<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(larryGoodell);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="larryGoodell.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="larryGoodell.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var chrisGoodeyColor = getRandomColor();
      var style = '.' + 'chrisGoodey';
      var chrisGoodey = L.featureGroup([
          L.circleMarker([51.5667896, 0.0857476], {
            color: chrisGoodeyColor
          }).bindPopup('<a href="/entities/chrisGoodey_201"><h3>Chris Goodey</h3></a><p>24 Benton Gardens<br />Ilford, Essex, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(chrisGoodey);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="chrisGoodey.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="chrisGoodey.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var pannaGradyColor = getRandomColor();
      var style = '.' + 'pannaGrady';
      var pannaGrady = L.featureGroup([
          L.circleMarker([51.5277478, -0.1629744], {
            color: pannaGradyColor
          }).bindPopup('<a href="/entities/pannaGrady_217"><h3>Panna Grady</h3></a><p>17 Hanover Terrace Marylebone<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(pannaGrady);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="pannaGrady.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="pannaGrady.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var GrassrootsColor = getRandomColor();
      var style = '.' + 'Grassroots';
      var Grassroots = L.featureGroup([
          L.circleMarker([40.7497676, -111.881531], {
            color: GrassrootsColor
          }).bindPopup('<a href="/entities/Grassroots_220"><h3>Grassroots</h3></a><p>332 E. 9th<br />, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Grassroots);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Grassroots.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Grassroots.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var paulGreenColor = getRandomColor();
      var style = '.' + 'paulGreen';
      var paulGreen = L.featureGroup([
          L.circleMarker([52.6101974, -0.2567468], {
            color: paulGreenColor
          }).bindPopup('<a href="/entities/paulGreen_205"><h3>Paul Green</h3></a><p>34 Mendip Grove<br />Peterborough, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(paulGreen);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="paulGreen.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="paulGreen.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var drReubenGreenbergColor = getRandomColor();
      var style = '.' + 'drReubenGreenberg';
      var drReubenGreenberg = L.featureGroup([
          L.circleMarker([40.7617685, -73.9871143], {
            color: drReubenGreenbergColor
          }).bindPopup('<a href="/entities/drReubenGreenberg_224"><h3>Dr. Reuben Greenberg</h3></a><p>300 W 49th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(drReubenGreenberg);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="drReubenGreenberg.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="drReubenGreenberg.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jonathanGreeneColor = getRandomColor();
      var style = '.' + 'jonathanGreene';
      var jonathanGreene = L.featureGroup([
          L.circleMarker([37.753181, -122.410732], {
            color: jonathanGreeneColor
          }).bindPopup('<a href="/entities/jonathanGreene_204"><h3>Jonathan Greene</h3></a><p>1171 Alabama St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jonathanGreene);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jonathanGreene.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jonathanGreene.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var tedGreenwaldColor = getRandomColor();
      var style = '.' + 'tedGreenwald';
      var tedGreenwald = L.featureGroup([
          L.circleMarker([40.766411, -73.98557], {
            color: tedGreenwaldColor
          }).bindPopup('<a href="/entities/tedGreenwald_218"><h3>Ted Greenwald</h3></a><p>347 W 55th St #8G<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tedGreenwald);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tedGreenwald.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tedGreenwald.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var maxineGroffskyColor = getRandomColor();
      var style = '.' + 'maxineGroffsky';
      var maxineGroffsky = L.featureGroup([
          L.circleMarker([48.8537651, 2.3311188], {
            color: maxineGroffskyColor
          }).bindPopup('<a href="/entities/maxineGroffsky_226"><h3>Maxine Groffsky</h3></a><p>10 Rue du Dragon<br />Paris, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(maxineGroffsky);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="maxineGroffsky.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="maxineGroffsky.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var redGroomsColor = getRandomColor();
      var style = '.' + 'redGrooms';
      var redGrooms = L.featureGroup([
          L.circleMarker([40.742526, -73.995312], {
            color: redGroomsColor
          }).bindPopup('<a href="/entities/redGrooms_146"><h3>Red Grooms</h3></a><p>145 W 21st St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(redGrooms);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="redGrooms.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="redGrooms.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var lorenzGudeColor = getRandomColor();
      var style = '.' + 'lorenzGude';
      var lorenzGude = L.featureGroup([
          L.circleMarker([37.7305345, -89.223567], {
            color: lorenzGudeColor
          }).bindPopup('<a href="/entities/lorenzGude_216"><h3>Lorenz Gude</h3></a><p>508 W Sycamore St<br />Carbondale, IL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lorenzGude);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lorenzGude.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lorenzGude.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var barbaraGuestColor = getRandomColor();
      var style = '.' + 'barbaraGuest';
      var barbaraGuest = L.featureGroup([
          L.circleMarker([40.787493, -73.955551], {
            color: barbaraGuestColor
          }).bindPopup('<a href="/entities/barbaraGuest_209"><h3>Barbara Guest</h3></a><p>1148 5th Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(barbaraGuest);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="barbaraGuest.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="barbaraGuest.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var harryGuestColor = getRandomColor();
      var style = '.' + 'harryGuest';
      var harryGuest = L.featureGroup([
          L.circleMarker([50.8321509, -0.2778399], {
            color: harryGuestColor
          }).bindPopup('<a href="/entities/harryGuest_208"><h3>Harry Guest</h3></a><p>Britannia House High St<br />Shoreham-by-Sea, West Sussex, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(harryGuest);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="harryGuest.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="harryGuest.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var drummondHadleyColor = getRandomColor();
      var style = '.' + 'drummondHadley';
      var drummondHadley = L.featureGroup([
          L.circleMarker([35.679508, -105.9323579], {
            color: drummondHadleyColor
          }).bindPopup('<a href="/entities/drummondHadley_252"><h3>Drummond Hadley</h3></a><p>424 Delgado Ln<br />Santa Fe, NM<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(drummondHadley);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="drummondHadley.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="drummondHadley.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnHainesColor = getRandomColor();
      var style = '.' + 'johnHaines';
      var johnHaines = L.featureGroup([
          L.circleMarker([64.35639, -146.8660731], {
            color: johnHainesColor
          }).bindPopup('<a href="/entities/johnHaines_242"><h3>John Haines</h3></a><p>Mile 68, Richardson Highway<br />Fairbanks, AK<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnHaines);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnHaines.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnHaines.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var barryHallColor = getRandomColor();
      var style = '.' + 'barryHall';
      var barryHall = L.featureGroup([
          L.circleMarker([35.6787814, -105.9223601], {
            color: barryHallColor
          }).bindPopup('<a href="/entities/barryHall_263"><h3>Barry Hall</h3></a><p>970 Acequia Madre<br />Santa Fe, NM<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(barryHall);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="barryHall.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="barryHall.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.5462115, -0.1852429], {
            color: barryHallColor
          }).bindPopup('<a href="/entities/barryHall_263"><h3>Barry Hall</h3></a><p>102 Fairhazel Gardens<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(barryHall);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="barryHall.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="barryHall.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.5461794, -0.1852274], {
            color: barryHallColor
          }).bindPopup('<a href="/entities/barryHall_263"><h3>Barry Hall</h3></a><p>102 Fairhazel Gardens<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(barryHall);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="barryHall.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="barryHall.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var donaldHallColor = getRandomColor();
      var style = '.' + 'donaldHall';
      var donaldHall = L.featureGroup([
          L.circleMarker([42.275125, -83.7261276], {
            color: donaldHallColor
          }).bindPopup('<a href="/entities/donaldHall_233"><h3>Donald Hall</h3></a><p>1915 S University Ave<br />Ann Arbor, MI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(donaldHall);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="donaldHall.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="donaldHall.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.277106, -83.72579], {
            color: donaldHallColor
          }).bindPopup('<a href="/entities/donaldHall_233"><h3>Donald Hall</h3></a><p>12 Geddes Heights Dr<br />Ann Arbor, MI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(donaldHall);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="donaldHall.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="donaldHall.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.275379, -83.726837], {
            color: donaldHallColor
          }).bindPopup('<a href="/entities/donaldHall_233"><h3>Donald Hall</h3></a><p>1715 S University Ave<br />Ann Arbor, MI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(donaldHall);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="donaldHall.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="donaldHall.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.2767064, -83.7450407], {
            color: donaldHallColor
          }).bindPopup('<a href="/entities/donaldHall_233"><h3>Donald Hall</h3></a><p>433 Hamilton Pl #3<br />Ann Arbor, MI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(donaldHall);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="donaldHall.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="donaldHall.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ianHamiltonColor = getRandomColor();
      var style = '.' + 'ianHamilton';
      var ianHamilton = L.featureGroup([
          L.circleMarker([51.7741184, -1.2672919], {
            color: ianHamiltonColor
          }).bindPopup('<a href="/entities/ianHamilton_232"><h3>Ian Hamilton</h3></a><p>104 Beech Croft Rd<br />Oxford, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ianHamilton);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ianHamilton.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ianHamilton.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var billHarrisColor = getRandomColor();
      var style = '.' + 'billHarris';
      var billHarris = L.featureGroup([
          L.circleMarker([35.1069469, -106.6709328], {
            color: billHarrisColor
          }).bindPopup('<a href="/entities/billHarris_240"><h3>Bill Harris</h3></a><p>1204 Rio Grande Blvd NW<br />Albuquerque, NM<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(billHarris);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="billHarris.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="billHarris.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var phyllisMasekHarrisColor = getRandomColor();
      var style = '.' + 'phyllisMasekHarris';
      var phyllisMasekHarris = L.featureGroup([
          L.circleMarker([42.5139839, -71.0531975], {
            color: phyllisMasekHarrisColor
          }).bindPopup('<a href="/entities/phyllisMasekHarris_237"><h3>Phyllis Masek Harris</h3></a><p>281 Salem St<br />Wakefield, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(phyllisMasekHarris);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="phyllisMasekHarris.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="phyllisMasekHarris.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var robertHarrisColor = getRandomColor();
      var style = '.' + 'robertHarris';
      var robertHarris = L.featureGroup([
          L.circleMarker([37.761483, -122.428567], {
            color: robertHarrisColor
          }).bindPopup('<a href="/entities/robertHarris_256"><h3>Robert Harris</h3></a><p>582 Church St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(robertHarris);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="robertHarris.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="robertHarris.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jimHarrisonColor = getRandomColor();
      var style = '.' + 'jimHarrison';
      var jimHarrison = L.featureGroup([
          L.circleMarker([42.346454, -71.1385294], {
            color: jimHarrisonColor
          }).bindPopup('<a href="/entities/jimHarrison_249"><h3>Jim Harrison</h3></a><p>5 Bellvista Rd<br />Boston, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jimHarrison);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jimHarrison.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jimHarrison.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([44.5847251, -85.5358994], {
            color: jimHarrisonColor
          }).bindPopup('<a href="/entities/jimHarrison_249"><h3>Jim Harrison</h3></a><p>PO Box 262<br />Kingsley, MI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jimHarrison);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jimHarrison.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jimHarrison.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var davidHassColor = getRandomColor();
      var style = '.' + 'davidHass';
      var davidHass = L.featureGroup([
          L.circleMarker([51.5548488, -0.1560969], {
            color: davidHassColor
          }).bindPopup('<a href="/entities/davidHass_239"><h3>David Hass</h3></a><p>28 Courthope Rd<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidHass);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidHass.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidHass.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var raoulHausmannColor = getRandomColor();
      var style = '.' + 'raoulHausmann';
      var raoulHausmann = L.featureGroup([
          L.circleMarker([51.4846621, -0.1725849], {
            color: raoulHausmannColor
          }).bindPopup('<a href="/entities/raoulHausmann_598"><h3>Raoul Hausmann</h3></a><p>Hereford Buildings #23, Old Church St Chelsea<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(raoulHausmann);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="raoulHausmann.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="raoulHausmann.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var rondaHaynesColor = getRandomColor();
      var style = '.' + 'rondaHaynes';
      var rondaHaynes = L.featureGroup([
          L.circleMarker([40.727445, -73.986284], {
            color: rondaHaynesColor
          }).bindPopup('<a href="/entities/rondaHaynes_266"><h3>Ronda Haynes</h3></a><p>77 E 7th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(rondaHaynes);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="rondaHaynes.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="rondaHaynes.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var dRHazeltonColor = getRandomColor();
      var style = '.' + 'dRHazelton';
      var dRHazelton = L.featureGroup([
          L.circleMarker([37.876438, -122.273891], {
            color: dRHazeltonColor
          }).bindPopup('<a href="/entities/dRHazelton_235"><h3>D.R. Hazelton</h3></a><p>1636 Martin Luther King Jr Way<br />Berkeley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(dRHazelton);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="dRHazelton.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="dRHazelton.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.870889, -122.291659], {
            color: dRHazeltonColor
          }).bindPopup('<a href="/entities/dRHazelton_235"><h3>D.R. Hazelton</h3></a><p>1125 Hearst Ave<br />Berkeley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(dRHazelton);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="dRHazelton.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="dRHazelton.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var HeadColor = getRandomColor();
      var style = '.' + 'Head';
      var Head = L.featureGroup([
          L.circleMarker([41.8498151, -73.9301365], {
            color: HeadColor
          }).bindPopup('<a href="/entities/Head_257"><h3>Head</h3></a><p>Post Office<br />Staatsburg, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Head);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Head.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Head.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var kateHeliczerColor = getRandomColor();
      var style = '.' + 'kateHeliczer';
      var kateHeliczer = L.featureGroup([
          L.circleMarker([51.4846621, -0.1725849], {
            color: kateHeliczerColor
          }).bindPopup('<a href="/entities/kateHeliczer_241"><h3>Kate Heliczer</h3></a><p>Hereford Buildings #23, Old Church St Chelsea<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(kateHeliczer);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="kateHeliczer.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="kateHeliczer.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var jeremyHiltonColor = getRandomColor();
      var style = '.' + 'jeremyHilton';
      var jeremyHilton = L.featureGroup([
          L.circleMarker([54.5398659, -3.5750645], {
            color: jeremyHiltonColor
          }).bindPopup('<a href="/entities/jeremyHilton_246"><h3>Jeremy Hilton</h3></a><p>20 Inkerman Terrace<br />Whitehaven, Cumbria, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jeremyHilton);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jeremyHilton.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jeremyHilton.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([52.1963749, 0.1335726], {
            color: jeremyHiltonColor
          }).bindPopup('<a href="/entities/jeremyHilton_246"><h3>Jeremy Hilton</h3></a><p>17 Tenison Ave<br />Cambridge, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jeremyHilton);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jeremyHilton.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jeremyHilton.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var georgeHitchcockColor = getRandomColor();
      var style = '.' + 'georgeHitchcock';
      var georgeHitchcock = L.featureGroup([
          L.circleMarker([37.797213, -122.430162], {
            color: georgeHitchcockColor
          }).bindPopup('<a href="/entities/georgeHitchcock_247"><h3>George Hitchcock</h3></a><p>2808 Laguna St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(georgeHitchcock);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="georgeHitchcock.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="georgeHitchcock.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var robertHoggColor = getRandomColor();
      var style = '.' + 'robertHogg';
      var robertHogg = L.featureGroup([
          L.circleMarker([42.915126, -78.865734], {
            color: robertHoggColor
          }).bindPopup('<a href="/entities/robertHogg_264"><h3>Robert Hogg</h3></a><p>939 W Ferry St #11<br />Buffalo, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(robertHogg);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="robertHogg.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="robertHogg.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var anselmHolloColor = getRandomColor();
      var style = '.' + 'anselmHollo';
      var anselmHollo = L.featureGroup([
          L.circleMarker([51.4965089, -0.1844731], {
            color: anselmHolloColor
          }).bindPopup('<a href="/entities/anselmHollo_243"><h3>Anselm Hollo</h3></a><p>87 Cornwall Gardens Kensington<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(anselmHollo);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="anselmHollo.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="anselmHollo.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([50.7264023, -1.1723206], {
            color: anselmHolloColor
          }).bindPopup('<a href="/entities/anselmHollo_243"><h3>Anselm Hollo</h3></a><p>5 Pellhurst Rd<br />Ryde, Isle of Wight, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(anselmHollo);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="anselmHollo.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="anselmHollo.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([41.655325, -91.526884], {
            color: anselmHolloColor
          }).bindPopup('<a href="/entities/anselmHollo_243"><h3>Anselm Hollo</h3></a><p>444 S Johnson St<br />Iowa City, IA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(anselmHollo);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="anselmHollo.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="anselmHollo.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var HoltRinehartWinstonColor = getRandomColor();
      var style = '.' + 'HoltRinehartWinston';
      var HoltRinehartWinston = L.featureGroup([
          L.circleMarker([40.7556787, -73.9771774], {
            color: HoltRinehartWinstonColor
          }).bindPopup('<a href="/entities/HoltRinehartWinston_253"><h3>Holt Rinehart &amp; Winston</h3></a><p>383 Madison Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(HoltRinehartWinston);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="HoltRinehartWinston.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="HoltRinehartWinston.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var lindaHoodColor = getRandomColor();
      var style = '.' + 'lindaHood';
      var lindaHood = L.featureGroup([
          L.circleMarker([42.0565923, -70.1831069], {
            color: lindaHoodColor
          }).bindPopup('<a href="/entities/lindaHood_248"><h3>Linda Hood</h3></a><p>Priscilla Alden Rd<br />Provincetown, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lindaHood);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lindaHood.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lindaHood.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnHopkinsColor = getRandomColor();
      var style = '.' + 'johnHopkins';
      var johnHopkins = L.featureGroup([
          L.circleMarker([51.5131546, -0.1879322], {
            color: johnHopkinsColor
          }).bindPopup('<a href="/entities/johnHopkins_574"><h3>John Hopkins</h3></a><p>115 Queensway<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnHopkins);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnHopkins.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnHopkins.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var tomHopkinsonColor = getRandomColor();
      var style = '.' + 'tomHopkinson';
      var tomHopkinson = L.featureGroup([
          L.circleMarker([51.4760702, -2.6082479], {
            color: tomHopkinsonColor
          }).bindPopup('<a href="/entities/tomHopkinson_231"><h3>Tom Hopkinson</h3></a><p>21 Dundonald Rd<br />Bristol, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tomHopkinson);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tomHopkinson.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tomHopkinson.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var litaHornickColor = getRandomColor();
      var style = '.' + 'litaHornick';
      var litaHornick = L.featureGroup([
          L.circleMarker([40.775302, -73.9612114], {
            color: litaHornickColor
          }).bindPopup('<a href="/entities/litaHornick_230"><h3>Lita Hornick</h3></a><p>888 Park Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(litaHornick);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="litaHornick.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="litaHornick.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var michaelHorovitzColor = getRandomColor();
      var style = '.' + 'michaelHorovitz';
      var michaelHorovitz = L.featureGroup([
          L.circleMarker([51.515654, -0.2013433], {
            color: michaelHorovitzColor
          }).bindPopup('<a href="/entities/michaelHorovitz_245"><h3>Michael Horovitz</h3></a><p>29 Colville Terrace<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(michaelHorovitz);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="michaelHorovitz.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="michaelHorovitz.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var HouseOfBooksLtdColor = getRandomColor();
      var style = '.' + 'HouseOfBooksLtd';
      var HouseOfBooksLtd = L.featureGroup([
          L.circleMarker([40.7641974, -73.9709453], {
            color: HouseOfBooksLtdColor
          }).bindPopup('<a href="/entities/HouseOfBooksLtd_112"><h3>House of Books Ltd</h3></a><p>18 E 60th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(HouseOfBooksLtd);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="HouseOfBooksLtd.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="HouseOfBooksLtd.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var peterHowardColor = getRandomColor();
      var style = '.' + 'peterHoward';
      var peterHoward = L.featureGroup([
          L.circleMarker([37.8749702, -122.2689654], {
            color: peterHowardColor
          }).bindPopup('<a href="/entities/peterHoward_268"><h3>Peter Howard</h3></a><p>1790 Shattuck Ave<br />Berkeley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(peterHoward);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="peterHoward.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="peterHoward.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var bobHowellColor = getRandomColor();
      var style = '.' + 'bobHowell';
      var bobHowell = L.featureGroup([
          L.circleMarker([37.867702, -122.263925], {
            color: bobHowellColor
          }).bindPopup('<a href="/entities/bobHowell_250"><h3>Bob Howell</h3></a><p>2306 Ellsworth St #3<br />Berkeley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bobHowell);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bobHowell.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bobHowell.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.3842118, -71.1225382], {
            color: bobHowellColor
          }).bindPopup('<a href="/entities/bobHowell_250"><h3>Bob Howell</h3></a><p>5 Washington Ave #5<br />Cambridge, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bobHowell);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bobHowell.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bobHowell.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([39.869592, -86.09254], {
            color: bobHowellColor
          }).bindPopup('<a href="/entities/bobHowell_250"><h3>Bob Howell</h3></a><p>6230 Brookline Dr<br />Indianapolis, IN<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bobHowell);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bobHowell.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bobHowell.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.109505, -88.216258], {
            color: bobHowellColor
          }).bindPopup('<a href="/entities/bobHowell_250"><h3>Bob Howell</h3></a><p>403 S Coler Ave<br />Urbana, IL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bobHowell);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bobHowell.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bobHowell.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.5298362, -0.1677228], {
            color: bobHowellColor
          }).bindPopup('<a href="/entities/bobHowell_250"><h3>Bob Howell</h3></a><p>150 Park Rd<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bobHowell);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bobHowell.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bobHowell.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.7571191, -1.2645895], {
            color: bobHowellColor
          }).bindPopup('<a href="/entities/bobHowell_250"><h3>Bob Howell</h3></a><p>7 Richmond Rd<br />Oxford, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bobHowell);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bobHowell.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bobHowell.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var tedHughesColor = getRandomColor();
      var style = '.' + 'tedHughes';
      var tedHughes = L.featureGroup([
          L.circleMarker([50.8568927, -3.9435394], {
            color: tedHughesColor
          }).bindPopup('<a href="/entities/tedHughes_261"><h3>Ted Hughes</h3></a><p>Court Green<br />North Tawton Devon, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tedHughes);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tedHughes.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tedHughes.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var charlesRHulbeckColor = getRandomColor();
      var style = '.' + 'charlesRHulbeck';
      var charlesRHulbeck = L.featureGroup([
          L.circleMarker([40.7741602, -73.9778955], {
            color: charlesRHulbeckColor
          }).bindPopup('<a href="/entities/charlesRHulbeck_254"><h3>Charles R. Hulbeck</h3></a><p>88 Central Park West<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(charlesRHulbeck);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="charlesRHulbeck.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="charlesRHulbeck.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var haroldHumesColor = getRandomColor();
      var style = '.' + 'haroldHumes';
      var haroldHumes = L.featureGroup([
          L.circleMarker([51.4942144, -0.1624316], {
            color: haroldHumesColor
          }).bindPopup('<a href="/entities/haroldHumes_236"><h3>Harold Humes</h3></a><p>17 Moore St Chelsea<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(haroldHumes);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="haroldHumes.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="haroldHumes.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var IndicaBooksAndGalleryColor = getRandomColor();
      var style = '.' + 'IndicaBooksAndGallery';
      var IndicaBooksAndGallery = L.featureGroup([
          L.circleMarker([51.5076125, -0.1372408], {
            color: IndicaBooksAndGalleryColor
          }).bindPopup('<a href="/entities/IndicaBooksAndGallery_272"><h3>Indica Books and Gallery</h3></a><p>6 Masons Yard St. James’s<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(IndicaBooksAndGallery);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="IndicaBooksAndGallery.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="IndicaBooksAndGallery.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.5203119, -0.1223896], {
            color: IndicaBooksAndGalleryColor
          }).bindPopup('<a href="/entities/IndicaBooksAndGallery_272"><h3>Indica Books and Gallery</h3></a><p>102 Southampton Row<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(IndicaBooksAndGallery);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="IndicaBooksAndGallery.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="IndicaBooksAndGallery.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var joanInglisColor = getRandomColor();
      var style = '.' + 'joanInglis';
      var joanInglis = L.featureGroup([
          L.circleMarker([40.7877641, -73.9751626], {
            color: joanInglisColor
          }).bindPopup('<a href="/entities/joanInglis_278"><h3>Joan Inglis</h3></a><p>205 W 86th St #712<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(joanInglis);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="joanInglis.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="joanInglis.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var InternationalChristianUniversityJapanColor = getRandomColor();
      var style = '.' + 'InternationalChristianUniversityJapan';
      var InternationalChristianUniversityJapan = L.featureGroup([
          L.circleMarker([35.6766078, 139.5408166], {
            color: InternationalChristianUniversityJapanColor
          }).bindPopup('<a href="/entities/InternationalChristianUniversityJapan_147"><h3>International Christian University Japan</h3></a><p>〒181-0015<br />Tokyo, Mitaka, Osawa, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(InternationalChristianUniversityJapan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="InternationalChristianUniversityJapan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="InternationalChristianUniversityJapan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var IntransitToadPressColor = getRandomColor();
      var style = '.' + 'IntransitToadPress';
      var IntransitToadPress = L.featureGroup([
          L.circleMarker([44.035263, -123.097613], {
            color: IntransitToadPressColor
          }).bindPopup('<a href="/entities/IntransitToadPress_275"><h3>Intransit / Toad Press</h3></a><p>338 W 22nd Ave<br />Eugene, OR<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(IntransitToadPress);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="IntransitToadPress.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="IntransitToadPress.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var IntrepidColor = getRandomColor();
      var style = '.' + 'Intrepid';
      var Intrepid = L.featureGroup([
          L.circleMarker([42.098603, -79.2373], {
            color: IntrepidColor
          }).bindPopup('<a href="/entities/Intrepid_270"><h3>Intrepid</h3></a><p>333 E 5th St<br />New York, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Intrepid);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Intrepid.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Intrepid.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var kennethIrbyColor = getRandomColor();
      var style = '.' + 'kennethIrby';
      var kennethIrby = L.featureGroup([
          L.circleMarker([37.7568858, -122.5078512], {
            color: kennethIrbyColor
          }).bindPopup('<a href="/entities/kennethIrby_269"><h3>Kenneth Irby</h3></a><p>1579 48th Ave<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(kennethIrby);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="kennethIrby.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="kennethIrby.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.7749295, -122.4194155], {
            color: kennethIrbyColor
          }).bindPopup('<a href="/entities/kennethIrby_269"><h3>Kenneth Irby</h3></a><p>PO Box 5880<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(kennethIrby);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="kennethIrby.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="kennethIrby.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var gregIronsColor = getRandomColor();
      var style = '.' + 'gregIrons';
      var gregIrons = L.featureGroup([
          L.circleMarker([37.9004816, -122.6444263], {
            color: gregIronsColor
          }).bindPopup('<a href="/entities/gregIrons_279"><h3>Greg Irons</h3></a><p>PO Box 482<br />Stinson Beach, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(gregIrons);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="gregIrons.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="gregIrons.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnJamesColor = getRandomColor();
      var style = '.' + 'johnJames';
      var johnJames = L.featureGroup([
          L.circleMarker([51.3097366, -2.4952756], {
            color: johnJamesColor
          }).bindPopup('<a href="/entities/johnJames_345"><h3>John James</h3></a><p>35 Gregorys Tyning Paulton<br />Bristol, Bath and North East Somerset, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnJames);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnJames.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnJames.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var emmettJarrettColor = getRandomColor();
      var style = '.' + 'emmettJarrett';
      var emmettJarrett = L.featureGroup([
          L.circleMarker([40.802399, -73.968866], {
            color: emmettJarrettColor
          }).bindPopup('<a href="/entities/emmettJarrett_348"><h3>Emmett Jarrett</h3></a><p>308 W 107th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(emmettJarrett);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="emmettJarrett.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="emmettJarrett.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var peterJayColor = getRandomColor();
      var style = '.' + 'peterJay';
      var peterJay = L.featureGroup([
          L.circleMarker([51.7498095, -1.2593295], {
            color: peterJayColor
          }).bindPopup('<a href="/entities/peterJay_353"><h3>Peter Jay</h3></a><p>1 Littlegate St University of Oxford<br />Oxford, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(peterJay);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="peterJay.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="peterJay.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var JoglarsColor = getRandomColor();
      var style = '.' + 'Joglars';
      var Joglars = L.featureGroup([
          L.circleMarker([41.8410129, -71.397374], {
            color: JoglarsColor
          }).bindPopup('<a href="/entities/Joglars_95"><h3>Joglars</h3></a><p>292 Morris Ave<br />Providence, RI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Joglars);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Joglars.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Joglars.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jasperJohnsColor = getRandomColor();
      var style = '.' + 'jasperJohns';
      var jasperJohns = L.featureGroup([
          L.circleMarker([40.802402, -73.96962], {
            color: jasperJohnsColor
          }).bindPopup('<a href="/entities/jasperJohns_277"><h3>Jasper Johns</h3></a><p>340 Riverside Dr<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jasperJohns);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jasperJohns.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jasperJohns.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ronaldJohnsonColor = getRandomColor();
      var style = '.' + 'ronaldJohnson';
      var ronaldJohnson = L.featureGroup([
          L.circleMarker([51.558726, -0.1756046], {
            color: ronaldJohnsonColor
          }).bindPopup('<a href="/entities/ronaldJohnson_351"><h3>Ronald Johnson</h3></a><p>2 Well Rd<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ronaldJohnson);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ronaldJohnson.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ronaldJohnson.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.5582317, -0.1742072], {
            color: ronaldJohnsonColor
          }).bindPopup('<a href="/entities/ronaldJohnson_351"><h3>Ronald Johnson</h3></a><p>22 Well Walk<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ronaldJohnson);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ronaldJohnson.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ronaldJohnson.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var steveJonasColor = getRandomColor();
      var style = '.' + 'steveJonas';
      var steveJonas = L.featureGroup([
          L.circleMarker([42.3471435, -71.0717718], {
            color: steveJonasColor
          }).bindPopup('<a href="/entities/steveJonas_349"><h3>Steve Jonas</h3></a><p>3 St Charles St<br />Boston, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(steveJonas);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="steveJonas.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="steveJonas.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var stevenKatzColor = getRandomColor();
      var style = '.' + 'stevenKatz';
      var stevenKatz = L.featureGroup([
          L.circleMarker([42.4370835, -76.506039], {
            color: stevenKatzColor
          }).bindPopup('<a href="/entities/stevenKatz_327"><h3>Steven Katz</h3></a><p>308 S Corn St<br />Ithaca, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(stevenKatz);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="stevenKatz.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="stevenKatz.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var bruceKawinColor = getRandomColor();
      var style = '.' + 'bruceKawin';
      var bruceKawin = L.featureGroup([
          L.circleMarker([42.3416691, -76.6151689], {
            color: bruceKawinColor
          }).bindPopup('<a href="/entities/bruceKawin_320"><h3>Bruce Kawin</h3></a><p>RD #2 Box 52c Starks Road<br />Newfield, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bruceKawin);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bruceKawin.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bruceKawin.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var drWilliamKayeColor = getRandomColor();
      var style = '.' + 'drWilliamKaye';
      var drWilliamKaye = L.featureGroup([
          L.circleMarker([38.0711986, -122.8053541], {
            color: drWilliamKayeColor
          }).bindPopup('<a href="/entities/drWilliamKaye_333"><h3>Dr. William Kaye</h3></a><p>40 Manana Way<br />Point Reyes Station, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(drWilliamKaye);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="drWilliamKaye.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="drWilliamKaye.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var tinaKeanColor = getRandomColor();
      var style = '.' + 'tinaKean';
      var tinaKean = L.featureGroup([
          L.circleMarker([51.5019, -0.2133915], {
            color: tinaKeanColor
          }).bindPopup('<a href="/entities/tinaKean_329"><h3>Tina Kean</h3></a><p>26 Elsham Rd Kensington<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tinaKean);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tinaKean.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tinaKean.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var KearinColor = getRandomColor();
      var style = '.' + 'Kearin';
      var Kearin = L.featureGroup([
          L.circleMarker([41.907746, -87.777822], {
            color: KearinColor
          }).bindPopup('<a href="/entities/Kearin_328"><h3>Kearin</h3></a><p>48 Le Moyne Pkwy<br />Oak Park, IL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Kearin);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Kearin.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Kearin.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var lionelKearnsColor = getRandomColor();
      var style = '.' + 'lionelKearns';
      var lionelKearns = L.featureGroup([
          L.circleMarker([10.6359597, -61.4080676], {
            color: lionelKearnsColor
          }).bindPopup('<a href="/entities/lionelKearns_324"><h3>Lionel Kearns</h3></a><p>21 Papsey St<br />Curepe, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lionelKearns);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lionelKearns.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lionelKearns.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.4965449, -0.18448861], {
            color: lionelKearnsColor
          }).bindPopup('<a href="/entities/lionelKearns_324"><h3>Lionel Kearns</h3></a><p>87 Cornwall Gardens Kensington<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lionelKearns);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lionelKearns.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lionelKearns.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var kerryKellyColor = getRandomColor();
      var style = '.' + 'kerryKelly';
      var kerryKelly = L.featureGroup([
          L.circleMarker([51.5461891, -0.1611068], {
            color: kerryKellyColor
          }).bindPopup('<a href="/entities/kerryKelly_336"><h3>Kerry Kelly</h3></a><p>15 Chalcot Gardens<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(kerryKelly);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="kerryKelly.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="kerryKelly.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var robertKellyColor = getRandomColor();
      var style = '.' + 'robertKelly';
      var robertKelly = L.featureGroup([
          L.circleMarker([42.0224313, -73.9065313], {
            color: robertKellyColor
          }).bindPopup('<a href="/entities/robertKelly_313"><h3>Robert Kelly</h3></a><p>Bard College, 30 Campus Rd<br />Annandale-on-Hudson, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(robertKelly);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="robertKelly.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="robertKelly.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var edwardKissamColor = getRandomColor();
      var style = '.' + 'edwardKissam';
      var edwardKissam = L.featureGroup([
          L.circleMarker([33.8886289, 35.4954794], {
            color: edwardKissamColor
          }).bindPopup('<a href="/entities/edwardKissam_318"><h3>Edward Kissam</h3></a><p>American Express, Phoenicia Hotel<br />Beirut, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edwardKissam);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edwardKissam.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edwardKissam.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.3439888, -74.6514481], {
            color: edwardKissamColor
          }).bindPopup('<a href="/entities/edwardKissam_318"><h3>Edward Kissam</h3></a><p>Dodge &amp; Osborn Hall, Princeton University<br />Princeton, NJ<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edwardKissam);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edwardKissam.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edwardKissam.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([40.344943, -74.637984], {
            color: edwardKissamColor
          }).bindPopup('<a href="/entities/edwardKissam_318"><h3>Edward Kissam</h3></a><p>53 McCosh Circle<br />Princeton, NJ<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edwardKissam);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edwardKissam.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edwardKissam.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.7616556, -122.4431182], {
            color: edwardKissamColor
          }).bindPopup('<a href="/entities/edwardKissam_318"><h3>Edward Kissam</h3></a><p>208 Corbett Ave<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edwardKissam);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edwardKissam.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edwardKissam.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var erikKiviatColor = getRandomColor();
      var style = '.' + 'erikKiviat';
      var erikKiviat = L.featureGroup([
          L.circleMarker([41.8498151, -73.9301365], {
            color: erikKiviatColor
          }).bindPopup('<a href="/entities/erikKiviat_258"><h3>Erik Kiviat</h3></a><p>Post Office<br />Staatsburg, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(erikKiviat);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="erikKiviat.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="erikKiviat.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var carolynKizerColor = getRandomColor();
      var style = '.' + 'carolynKizer';
      var carolynKizer = L.featureGroup([
          L.circleMarker([38.898056, -77.043693], {
            color: carolynKizerColor
          }).bindPopup('<a href="/entities/carolynKizer_332"><h3>Carolyn Kizer</h3></a><p>1900 G St NW<br />Washington, DC, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(carolynKizer);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="carolynKizer.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="carolynKizer.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var johnKoetheColor = getRandomColor();
      var style = '.' + 'johnKoethe';
      var johnKoethe = L.featureGroup([
          L.circleMarker([42.3880785, -71.1202752], {
            color: johnKoetheColor
          }).bindPopup('<a href="/entities/johnKoethe_330"><h3>John Koethe</h3></a><p>18 Upland Rd<br />Cambridge, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnKoethe);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnKoethe.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnKoethe.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.3959662, -71.128734], {
            color: johnKoetheColor
          }).bindPopup('<a href="/entities/johnKoethe_330"><h3>John Koethe</h3></a><p>2336 Massachusetts Ave<br />Cambridge, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnKoethe);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnKoethe.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnKoethe.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var philipLamantiaColor = getRandomColor();
      var style = '.' + 'philipLamantia';
      var philipLamantia = L.featureGroup([
          L.circleMarker([37.983917, 23.7293599], {
            color: philipLamantiaColor
          }).bindPopup('<a href="/entities/philipLamantia_297"><h3>Philip Lamantia</h3></a><p>American Express<br />Athens, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(philipLamantia);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="philipLamantia.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="philipLamantia.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.8011782, -122.4064034], {
            color: philipLamantiaColor
          }).bindPopup('<a href="/entities/philipLamantia_297"><h3>Philip Lamantia</h3></a><p>30 Genoa Pl<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(philipLamantia);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="philipLamantia.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="philipLamantia.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jonLandauColor = getRandomColor();
      var style = '.' + 'jonLandau';
      var jonLandau = L.featureGroup([
          L.circleMarker([42.3948237, -71.1244202], {
            color: jonLandauColor
          }).bindPopup('<a href="/entities/jonLandau_309"><h3>Jon Landau</h3></a><p>131 Orchard St. #44<br />Somerville, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jonLandau);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jonLandau.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jonLandau.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var angelaLangfieldColor = getRandomColor();
      var style = '.' + 'angelaLangfield';
      var angelaLangfield = L.featureGroup([
          L.circleMarker([51.491316, -0.1416504], {
            color: angelaLangfieldColor
          }).bindPopup('<a href="/entities/angelaLangfield_285"><h3>Angela Langfield</h3></a><p>5A Warwick Square Pimlico<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(angelaLangfield);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="angelaLangfield.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="angelaLangfield.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var LanghamClinicColor = getRandomColor();
      var style = '.' + 'LanghamClinic';
      var LanghamClinic = L.featureGroup([
          L.circleMarker([51.5177712, -0.1478526], {
            color: LanghamClinicColor
          }).bindPopup('<a href="/entities/LanghamClinic_59"><h3>Langham Clinic</h3></a><p>37 Queen Anne St Marylebone<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(LanghamClinic);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="LanghamClinic.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="LanghamClinic.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var gerritLansingColor = getRandomColor();
      var style = '.' + 'gerritLansing';
      var gerritLansing = L.featureGroup([
          L.circleMarker([42.612666, -70.664379], {
            color: gerritLansingColor
          }).bindPopup('<a href="/entities/gerritLansing_487"><h3>Gerrit Lansing</h3></a><p>92 Main St<br />Gloucester, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(gerritLansing);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="gerritLansing.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="gerritLansing.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var kenLashColor = getRandomColor();
      var style = '.' + 'kenLash';
      var kenLash = L.featureGroup([
          L.circleMarker([37.947298, -122.312716], {
            color: kenLashColor
          }).bindPopup('<a href="/entities/kenLash_308"><h3>Ken Lash</h3></a><p>6171 McBryde Ave<br />Richmond, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(kenLash);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="kenLash.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="kenLash.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var frankLauriaColor = getRandomColor();
      var style = '.' + 'frankLauria';
      var frankLauria = L.featureGroup([
          L.circleMarker([40.734947, -73.982122], {
            color: frankLauriaColor
          }).bindPopup('<a href="/entities/frankLauria_301"><h3>Frank Lauria</h3></a><p>316 E 19th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(frankLauria);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="frankLauria.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="frankLauria.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var seymourAndMerloydLawrenceColor = getRandomColor();
      var style = '.' + 'seymourAndMerloydLawrence';
      var seymourAndMerloydLawrence = L.featureGroup([
          L.circleMarker([42.3563473, -71.0728791], {
            color: seymourAndMerloydLawrenceColor
          }).bindPopup('<a href="/entities/seymourAndMerloydLawrence_290"><h3>Seymour and Merloyd Lawrence</h3></a><p>162 Chestnut St<br />Boston, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(seymourAndMerloydLawrence);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="seymourAndMerloydLawrence.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="seymourAndMerloydLawrence.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var robertLaxColor = getRandomColor();
      var style = '.' + 'robertLax';
      var robertLax = L.featureGroup([
          L.circleMarker([36.9522824, 26.9807653], {
            color: robertLaxColor
          }).bindPopup('<a href="/entities/robertLax_298"><h3>Robert Lax</h3></a><p><br />Kalymnos, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(robertLax);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="robertLax.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="robertLax.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var michaelSeanLazarchukColor = getRandomColor();
      var style = '.' + 'michaelSeanLazarchuk';
      var michaelSeanLazarchuk = L.featureGroup([
          L.circleMarker([34.27201, -119.270549], {
            color: michaelSeanLazarchukColor
          }).bindPopup('<a href="/entities/michaelSeanLazarchuk_310"><h3>Michael-Sean Lazarchuk</h3></a><p>470 S Catalina St<br />Ventura, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(michaelSeanLazarchuk);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="michaelSeanLazarchuk.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="michaelSeanLazarchuk.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var joeLeSueurColor = getRandomColor();
      var style = '.' + 'joeLeSueur';
      var joeLeSueur = L.featureGroup([
          L.circleMarker([40.7244505, -73.9903594], {
            color: joeLeSueurColor
          }).bindPopup('<a href="/entities/joeLeSueur_303"><h3>Joe Le Sueur</h3></a><p>26 2nd Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(joeLeSueur);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="joeLeSueur.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="joeLeSueur.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var pLeeColor = getRandomColor();
      var style = '.' + 'pLee';
      var pLee = L.featureGroup([
          L.circleMarker([51.4836041, -0.1768485], {
            color: pLeeColor
          }).bindPopup('<a href="/entities/pLee_288"><h3>P. Lee</h3></a><p>371 King’s Rd Chelsea<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(pLee);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="pLee.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="pLee.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.5408717, -0.1540531], {
            color: pLeeColor
          }).bindPopup('<a href="/entities/pLee_288"><h3>P. Lee</h3></a><p>20 Fitzroy Rd<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(pLee);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="pLee.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="pLee.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var billLevyColor = getRandomColor();
      var style = '.' + 'billLevy';
      var billLevy = L.featureGroup([
          L.circleMarker([51.5381786, -0.1503552], {
            color: billLevyColor
          }).bindPopup('<a href="/entities/billLevy_302"><h3>Bill Levy</h3></a><p>22 Regent’s Park Rd<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(billLevy);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="billLevy.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="billLevy.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.5104183, -0.193589], {
            color: billLevyColor
          }).bindPopup('<a href="/entities/billLevy_302"><h3>Bill Levy</h3></a><p>40 Clanricarde Gardens<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(billLevy);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="billLevy.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="billLevy.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.5492068, -0.1723796], {
            color: billLevyColor
          }).bindPopup('<a href="/entities/billLevy_302"><h3>Bill Levy</h3></a><p>7 Belsize Crescent<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(billLevy);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="billLevy.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="billLevy.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.5563524, -0.172421], {
            color: billLevyColor
          }).bindPopup('<a href="/entities/billLevy_302"><h3>Bill Levy</h3></a><p>19 Carlingford Rd<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(billLevy);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="billLevy.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="billLevy.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var lawrenceLiebermanColor = getRandomColor();
      var style = '.' + 'lawrenceLieberman';
      var lawrenceLieberman = L.featureGroup([
          L.circleMarker([41.5039235, -87.7131018], {
            color: lawrenceLiebermanColor
          }).bindPopup('<a href="/entities/lawrenceLieberman_280"><h3>Lawrence Lieberman</h3></a><p>RFD #1<br />Matteson, IL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lawrenceLieberman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lawrenceLieberman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lawrenceLieberman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var martinLinkColor = getRandomColor();
      var style = '.' + 'martinLink';
      var martinLink = L.featureGroup([
          L.circleMarker([37.7862821, -122.3946421], {
            color: martinLinkColor
          }).bindPopup('<a href="/entities/martinLink_98"><h3>Martin Link</h3></a><p>31 Guy Pl<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(martinLink);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="martinLink.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="martinLink.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var louLipsitzColor = getRandomColor();
      var style = '.' + 'louLipsitz';
      var louLipsitz = L.featureGroup([
          L.circleMarker([35.920039, -79.053685], {
            color: louLipsitzColor
          }).bindPopup('<a href="/entities/louLipsitz_442"><h3>Lou Lipsitz</h3></a><p>Town House Apartments #3A 425 Hillsborough St<br />Chapel Hill, NC<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(louLipsitz);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="louLipsitz.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="louLipsitz.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([41.900625, -87.628333], {
            color: louLipsitzColor
          }).bindPopup('<a href="/entities/louLipsitz_442"><h3>Lou Lipsitz</h3></a><p>1019 N State St<br />Chicago, IL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(louLipsitz);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="louLipsitz.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="louLipsitz.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ListenerColor = getRandomColor();
      var style = '.' + 'Listener';
      var Listener = L.featureGroup([
          L.circleMarker([51.5204293, -0.1517219], {
            color: ListenerColor
          }).bindPopup('<a href="/entities/Listener_283"><h3>Listener</h3></a><p>35 Marylebone High St Marylebone<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Listener);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Listener.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Listener.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var LocationPressColor = getRandomColor();
      var style = '.' + 'LocationPress';
      var LocationPress = L.featureGroup([
          L.circleMarker([53.7442268, -2.5000809], {
            color: LocationPressColor
          }).bindPopup('<a href="/entities/LocationPress_362"><h3>Location Press</h3></a><p>4 Hornby Ct<br />Blackburn, Blackburn with Darwen, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(LocationPress);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="LocationPress.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="LocationPress.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([53.8186616, -1.5626482], {
            color: LocationPressColor
          }).bindPopup('<a href="/entities/LocationPress_362"><h3>Location Press</h3></a><p>Flat A, Grosvenor Court, 3 Grosvenor Rd<br />Leeds, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(LocationPress);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="LocationPress.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="LocationPress.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ronLoewinsohnColor = getRandomColor();
      var style = '.' + 'ronLoewinsohn';
      var ronLoewinsohn = L.featureGroup([
          L.circleMarker([37.7673532, -122.4370631], {
            color: ronLoewinsohnColor
          }).bindPopup('<a href="/entities/ronLoewinsohn_282"><h3>Ron Loewinsohn</h3></a><p>1056 14th St #4<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ronLoewinsohn);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ronLoewinsohn.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ronLoewinsohn.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnLoganColor = getRandomColor();
      var style = '.' + 'johnLogan';
      var johnLogan = L.featureGroup([
          L.circleMarker([37.841347, -122.1101353], {
            color: johnLoganColor
          }).bindPopup('<a href="/entities/johnLogan_293"><h3>John Logan</h3></a><p>1928 St Marys Rd<br />Moraga, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnLogan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnLogan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnLogan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([47.6569562, -122.3040837], {
            color: johnLoganColor
          }).bindPopup('<a href="/entities/johnLogan_293"><h3>John Logan</h3></a><p>Department of English, University of Washington<br />Seattle, WA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnLogan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnLogan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnLogan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var antonLongColor = getRandomColor();
      var style = '.' + 'antonLong';
      var antonLong = L.featureGroup([
          L.circleMarker([42.6153453, -77.4024853], {
            color: antonLongColor
          }).bindPopup('<a href="/entities/antonLong_299"><h3>Anton Long</h3></a><p>Route 1<br />Naples, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(antonLong);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="antonLong.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="antonLong.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var LongHairColor = getRandomColor();
      var style = '.' + 'LongHair';
      var LongHair = L.featureGroup([
          L.circleMarker([51.5198084, -0.1404187], {
            color: LongHairColor
          }).bindPopup('<a href="/entities/LongHair_273"><h3>Long Hair</h3></a><p>Flat 8, 15 Hanson St Fitzrovia<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(LongHair);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="LongHair.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="LongHair.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var LonghairPhotographyColor = getRandomColor();
      var style = '.' + 'LonghairPhotography';
      var LonghairPhotography = L.featureGroup([
          L.circleMarker([37.9060368, -122.5449763], {
            color: LonghairPhotographyColor
          }).bindPopup('<a href="/entities/LonghairPhotography_406"><h3>Longhair Photography</h3></a><p><br />Mill Valley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(LonghairPhotography);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="LonghairPhotography.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="LonghairPhotography.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var timLongvilleColor = getRandomColor();
      var style = '.' + 'timLongville';
      var timLongville = L.featureGroup([
          L.circleMarker([52.2012059, 0.1174721], {
            color: timLongvilleColor
          }).bindPopup('<a href="/entities/timLongville_294"><h3>Tim Longville</h3></a><p>10 Little St Mary’s Ln University of Cambridge<br />Cambridge, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(timLongville);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="timLongville.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="timLongville.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var steveLoviColor = getRandomColor();
      var style = '.' + 'steveLovi';
      var steveLovi = L.featureGroup([
          L.circleMarker([51.512563, -0.1985627], {
            color: steveLoviColor
          }).bindPopup('<a href="/entities/steveLovi_300"><h3>Steve Lovi</h3></a><p>7 Pembridge Mews<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(steveLovi);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="steveLovi.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="steveLovi.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.512435, -0.2072291], {
            color: steveLoviColor
          }).bindPopup('<a href="/entities/steveLovi_300"><h3>Steve Lovi</h3></a><p>23 Lansdowne Crescent<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(steveLovi);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="steveLovi.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="steveLovi.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jimLowellColor = getRandomColor();
      var style = '.' + 'jimLowell';
      var jimLowell = L.featureGroup([
          L.circleMarker([41.4999493, -81.6903492], {
            color: jimLowellColor
          }).bindPopup('<a href="/entities/jimLowell_296"><h3>Jim Lowell</h3></a><p>401 Euclid Ave (465 The Arcade)<br />Cleveland, OH<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jimLowell);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jimLowell.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jimLowell.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var tomLowensteinColor = getRandomColor();
      var style = '.' + 'tomLowenstein';
      var tomLowenstein = L.featureGroup([
          L.circleMarker([51.5695475, -0.1880283], {
            color: tomLowensteinColor
          }).bindPopup('<a href="/entities/tomLowenstein_289"><h3>Tom Lowenstein</h3></a><p>1 Park Ave<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tomLowenstein);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tomLowenstein.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tomLowenstein.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var LuganoReviewColor = getRandomColor();
      var style = '.' + 'LuganoReview';
      var LuganoReview = L.featureGroup([
          L.circleMarker([45.9989046, 8.9453621], {
            color: LuganoReviewColor
          }).bindPopup('<a href="/entities/LuganoReview_291"><h3>Lugano Review</h3></a><p>Via Clemente Maraini 17A<br />Lugano, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(LuganoReview);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="LuganoReview.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="LuganoReview.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var ManRayColor = getRandomColor();
      var style = '.' + 'ManRay';
      var ManRay = L.featureGroup([
          L.circleMarker([48.8496855, 2.3338015], {
            color: ManRayColor
          }).bindPopup('<a href="/entities/ManRay_465"><h3>Man Ray</h3></a><p>4 Rue Férou<br />Paris, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ManRay);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ManRay.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ManRay.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var daveMarshColor = getRandomColor();
      var style = '.' + 'daveMarsh';
      var daveMarsh = L.featureGroup([
          L.circleMarker([42.347176, -83.061984], {
            color: daveMarshColor
          }).bindPopup('<a href="/entities/daveMarsh_366"><h3>Dave Marsh</h3></a><p>3729 Cass Ave<br />Detroit, MI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(daveMarsh);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="daveMarsh.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="daveMarsh.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnMartinColor = getRandomColor();
      var style = '.' + 'johnMartin';
      var johnMartin = L.featureGroup([
      ]);
      var pierreMartoryColor = getRandomColor();
      var style = '.' + 'pierreMartory';
      var pierreMartory = L.featureGroup([
          L.circleMarker([48.8533138, 2.3618052], {
            color: pierreMartoryColor
          }).bindPopup('<a href="/entities/pierreMartory_395"><h3>Pierre Martory</h3></a><p>25 Rue Charles V<br />Paris, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(pierreMartory);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="pierreMartory.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="pierreMartory.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var MarylandInstituteCollegeOfArtColor = getRandomColor();
      var style = '.' + 'MarylandInstituteCollegeOfArt';
      var MarylandInstituteCollegeOfArt = L.featureGroup([
          L.circleMarker([39.307555, -76.621634], {
            color: MarylandInstituteCollegeOfArtColor
          }).bindPopup('<a href="/entities/MarylandInstituteCollegeOfArt_188"><h3>Maryland Institute College of Art</h3></a><p>1300 W Mt Royal Ave<br />Baltimore, MD<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(MarylandInstituteCollegeOfArt);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="MarylandInstituteCollegeOfArt.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="MarylandInstituteCollegeOfArt.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var tomMaschlerColor = getRandomColor();
      var style = '.' + 'tomMaschler';
      var tomMaschler = L.featureGroup([
          L.circleMarker([51.5401703, -0.1563455], {
            color: tomMaschlerColor
          }).bindPopup('<a href="/entities/tomMaschler_377"><h3>Tom Maschler</h3></a><p>9 Chalcot Crescent<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tomMaschler);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tomMaschler.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tomMaschler.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var harryMathewsColor = getRandomColor();
      var style = '.' + 'harryMathews';
      var harryMathews = L.featureGroup([
          L.circleMarker([48.8540319, 2.3233058], {
            color: harryMathewsColor
          }).bindPopup('<a href="/entities/harryMathews_211"><h3>Harry Mathews</h3></a><p>35 Rue de Varenne<br />Paris, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(harryMathews);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="harryMathews.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="harryMathews.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var MatterColor = getRandomColor();
      var style = '.' + 'Matter';
      var Matter = L.featureGroup([
          L.circleMarker([42.0224313, -73.9065313], {
            color: MatterColor
          }).bindPopup('<a href="/entities/Matter_312"><h3>Matter</h3></a><p>Bard College, 30 Campus Rd<br />Annandale-on-Hudson, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Matter);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Matter.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Matter.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var missyMaytagColor = getRandomColor();
      var style = '.' + 'missyMaytag';
      var missyMaytag = L.featureGroup([
          L.circleMarker([34.4128934, -119.8555916], {
            color: missyMaytagColor
          }).bindPopup('<a href="/entities/missyMaytag_387"><h3>Missy Maytag</h3></a><p>905 Embarcadero del Norte Isla Vista<br />Santa Barbara, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(missyMaytag);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="missyMaytag.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="missyMaytag.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var cavanMccarthyColor = getRandomColor();
      var style = '.' + 'cavanMccarthy';
      var cavanMccarthy = L.featureGroup([
          L.circleMarker([53.8129459, -1.5653199], {
            color: cavanMccarthyColor
          }).bindPopup('<a href="/entities/cavanMccarthy_363"><h3>Cavan McCarthy</h3></a><p>22 Brudenell Rd<br />Leeds, West Yorkshire, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(cavanMccarthy);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="cavanMccarthy.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="cavanMccarthy.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([53.7442268, -2.5000809], {
            color: cavanMccarthyColor
          }).bindPopup('<a href="/entities/cavanMccarthy_363"><h3>Cavan McCarthy</h3></a><p>4 Hornby Ct<br />Blackburn, Blackburn with Darwen, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(cavanMccarthy);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="cavanMccarthy.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="cavanMccarthy.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([53.8186616, -1.5626482], {
            color: cavanMccarthyColor
          }).bindPopup('<a href="/entities/cavanMccarthy_363"><h3>Cavan McCarthy</h3></a><p>Flat A, Grosvenor Court, 3 Grosvenor Rd<br />Leeds, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(cavanMccarthy);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="cavanMccarthy.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="cavanMccarthy.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var michaelMcclureColor = getRandomColor();
      var style = '.' + 'michaelMcclure';
      var michaelMcclure = L.featureGroup([
          L.circleMarker([37.7643334, -122.4466184], {
            color: michaelMcclureColor
          }).bindPopup('<a href="/entities/michaelMcclure_380"><h3>Michael McClure</h3></a><p>264 Downey St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(michaelMcclure);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="michaelMcclure.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="michaelMcclure.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var frankMcculloughColor = getRandomColor();
      var style = '.' + 'frankMccullough';
      var frankMccullough = L.featureGroup([
          L.circleMarker([40.690844, -73.993137], {
            color: frankMcculloughColor
          }).bindPopup('<a href="/entities/frankMccullough_389"><h3>Frank McCullough</h3></a><p>151 State St<br />Brooklyn, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(frankMccullough);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="frankMccullough.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="frankMccullough.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jimAnnMcgarrellColor = getRandomColor();
      var style = '.' + 'jimAnnMcgarrell';
      var jimAnnMcgarrell = L.featureGroup([
          L.circleMarker([48.8539755, 2.2689862], {
            color: jimAnnMcgarrellColor
          }).bindPopup('<a href="/entities/jimAnnMcgarrell_369"><h3>Jim &amp; Ann McGarrell</h3></a><p>10 Avenue Adrien Hebrard<br />Paris, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jimAnnMcgarrell);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jimAnnMcgarrell.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jimAnnMcgarrell.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var tomMcgrathColor = getRandomColor();
      var style = '.' + 'tomMcgrath';
      var tomMcgrath = L.featureGroup([
          L.circleMarker([51.5312338, -0.1211143], {
            color: tomMcgrathColor
          }).bindPopup('<a href="/entities/tomMcgrath_71"><h3>Tom McGrath</h3></a><p>5 Caledonian Rd<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tomMcgrath);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tomMcgrath.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tomMcgrath.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var donMclaughlinColor = getRandomColor();
      var style = '.' + 'donMclaughlin';
      var donMclaughlin = L.featureGroup([
          L.circleMarker([34.165687, -118.61006], {
            color: donMclaughlinColor
          }).bindPopup('<a href="/entities/donMclaughlin_392"><h3>Don McLaughlin</h3></a><p>22154 Avenue San Luis<br />Los Angeles, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(donMclaughlin);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="donMclaughlin.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="donMclaughlin.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.789105, -122.4359821], {
            color: donMclaughlinColor
          }).bindPopup('<a href="/entities/donMclaughlin_392"><h3>Don McLaughlin</h3></a><p>17 Perine Pl<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(donMclaughlin);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="donMclaughlin.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="donMclaughlin.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var duncanMcnaughtonColor = getRandomColor();
      var style = '.' + 'duncanMcnaughton';
      var duncanMcnaughton = L.featureGroup([
          L.circleMarker([42.933313, -78.840014], {
            color: duncanMcnaughtonColor
          }).bindPopup('<a href="/entities/duncanMcnaughton_394"><h3>Duncan McNaughton</h3></a><p>47 Brewster St<br />Buffalo, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(duncanMcnaughton);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="duncanMcnaughton.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="duncanMcnaughton.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var davidMcreynoldsColor = getRandomColor();
      var style = '.' + 'davidMcreynolds';
      var davidMcreynolds = L.featureGroup([
          L.circleMarker([40.7114436, -74.0067453], {
            color: davidMcreynoldsColor
          }).bindPopup('<a href="/entities/davidMcreynolds_368"><h3>David McReynolds</h3></a><p>5 Beekman St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidMcreynolds);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidMcreynolds.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidMcreynolds.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var mathewMeadColor = getRandomColor();
      var style = '.' + 'mathewMead';
      var mathewMead = L.featureGroup([
          L.circleMarker([50.6767361, 7.1612693], {
            color: mathewMeadColor
          }).bindPopup('<a href="/entities/mathewMead_376"><h3>Mathew Mead</h3></a><p>Röntgenstraße 19<br />Bonn, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(mathewMead);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="mathewMead.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="mathewMead.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var davidMeltzerColor = getRandomColor();
      var style = '.' + 'davidMeltzer';
      var davidMeltzer = L.featureGroup([
          L.circleMarker([37.9110406, -122.5572612], {
            color: davidMeltzerColor
          }).bindPopup('<a href="/entities/davidMeltzer_354"><h3>David Meltzer</h3></a><p>234 Tamalpais Ave<br />Mill Valley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidMeltzer);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidMeltzer.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidMeltzer.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var milanMelvinColor = getRandomColor();
      var style = '.' + 'milanMelvin';
      var milanMelvin = L.featureGroup([
          L.circleMarker([37.8014454, -122.4040313], {
            color: milanMelvinColor
          }).bindPopup('<a href="/entities/milanMelvin_378"><h3>Milan Melvin</h3></a><p>31 Alta St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(milanMelvin);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="milanMelvin.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="milanMelvin.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var wSMerwinColor = getRandomColor();
      var style = '.' + 'wSMerwin';
      var wSMerwin = L.featureGroup([
          L.circleMarker([44.91565, 1.83836], {
            color: wSMerwinColor
          }).bindPopup('<a href="/entities/wSMerwin_358"><h3>W.S. Merwin</h3></a><p>Lacan de Loubressac par Bretenoux<br />Lot, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(wSMerwin);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="wSMerwin.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="wSMerwin.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var christopherMiddletonColor = getRandomColor();
      var style = '.' + 'christopherMiddleton';
      var christopherMiddleton = L.featureGroup([
          L.circleMarker([51.4318458, -0.0697298], {
            color: christopherMiddletonColor
          }).bindPopup('<a href="/entities/christopherMiddleton_357"><h3>Christopher Middleton</h3></a><p>Hesper House, Wells Park Rd<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(christopherMiddleton);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="christopherMiddleton.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="christopherMiddleton.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var kenAnnMikolowskiColor = getRandomColor();
      var style = '.' + 'kenAnnMikolowski';
      var kenAnnMikolowski = L.featureGroup([
          L.circleMarker([42.346981, -83.079019], {
            color: kenAnnMikolowskiColor
          }).bindPopup('<a href="/entities/kenAnnMikolowski_24"><h3>Ken &amp; Ann Mikolowski</h3></a><p>4339 Avery St<br />Detroit, MI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(kenAnnMikolowski);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="kenAnnMikolowski.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="kenAnnMikolowski.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var barryMilesColor = getRandomColor();
      var style = '.' + 'barryMiles';
      var barryMiles = L.featureGroup([
          L.circleMarker([51.5202713, -0.1218488], {
            color: barryMilesColor
          }).bindPopup('<a href="/entities/barryMiles_274"><h3>Barry Miles</h3></a><p>100A Southampton Row<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(barryMiles);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="barryMiles.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="barryMiles.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.5198084, -0.1404187], {
            color: barryMilesColor
          }).bindPopup('<a href="/entities/barryMiles_274"><h3>Barry Miles</h3></a><p>Flat 8, 15 Hanson St Fitzrovia<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(barryMiles);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="barryMiles.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="barryMiles.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.5076125, -0.1372408], {
            color: barryMilesColor
          }).bindPopup('<a href="/entities/barryMiles_274"><h3>Barry Miles</h3></a><p>6 Masons Yard St. James’s<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(barryMiles);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="barryMiles.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="barryMiles.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.5203119, -0.1223896], {
            color: barryMilesColor
          }).bindPopup('<a href="/entities/barryMiles_274"><h3>Barry Miles</h3></a><p>102 Southampton Row<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(barryMiles);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="barryMiles.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="barryMiles.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var billAnnMillsColor = getRandomColor();
      var style = '.' + 'billAnnMills';
      var billAnnMills = L.featureGroup([
          L.circleMarker([51.5371754, -0.1493981], {
            color: billAnnMillsColor
          }).bindPopup('<a href="/entities/billAnnMills_382"><h3>Bill &amp; Ann Mills</h3></a><p>6 Prince Albert Rd<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(billAnnMills);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="billAnnMills.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="billAnnMills.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var stuartMillsColor = getRandomColor();
      var style = '.' + 'stuartMills';
      var stuartMills = L.featureGroup([
          L.circleMarker([52.908539, -1.0454178], {
            color: stuartMillsColor
          }).bindPopup('<a href="/entities/stuartMills_384"><h3>Stuart Mills</h3></a><p>32 Mensing Ave Cotgrave<br />Nottingham, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(stuartMills);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="stuartMills.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="stuartMills.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var pamelaMillwardColor = getRandomColor();
      var style = '.' + 'pamelaMillward';
      var pamelaMillward = L.featureGroup([
          L.circleMarker([37.773402, -122.445054], {
            color: pamelaMillwardColor
          }).bindPopup('<a href="/entities/pamelaMillward_381"><h3>Pamela Millward</h3></a><p>1646 Fell St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(pamelaMillward);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="pamelaMillward.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="pamelaMillward.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var teresaMitchellColor = getRandomColor();
      var style = '.' + 'teresaMitchell';
      var teresaMitchell = L.featureGroup([
          L.circleMarker([48.8532976, 2.3228671], {
            color: teresaMitchellColor
          }).bindPopup('<a href="/entities/teresaMitchell_537"><h3>Teresa Mitchell</h3></a><p>108 Rue du Bac<br />Paris, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(teresaMitchell);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="teresaMitchell.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="teresaMitchell.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var margaretSergioMondragonColor = getRandomColor();
      var style = '.' + 'margaretSergioMondragon';
      var margaretSergioMondragon = L.featureGroup([
          L.circleMarker([19.389746, -99.1858716], {
            color: margaretSergioMondragonColor
          }).bindPopup('<a href="/entities/margaretSergioMondragon_360"><h3>Margaret &amp; Sergio Mondragon</h3></a><p>Calle 15 346, San Pedro de Los Pinos<br />Ciudad de México, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(margaretSergioMondragon);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="margaretSergioMondragon.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="margaretSergioMondragon.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jackieMonnierColor = getRandomColor();
      var style = '.' + 'jackieMonnier';
      var jackieMonnier = L.featureGroup([
          L.circleMarker([48.8532976, 2.3228671], {
            color: jackieMonnierColor
          }).bindPopup('<a href="/entities/jackieMonnier_536"><h3>Jackie Monnier</h3></a><p>108 Rue du Bac<br />Paris, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jackieMonnier);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jackieMonnier.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jackieMonnier.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var stuartMontegomeryColor = getRandomColor();
      var style = '.' + 'stuartMontegomery';
      var stuartMontegomery = L.featureGroup([
          L.circleMarker([51.551554, -0.161453], {
            color: stuartMontegomeryColor
          }).bindPopup('<a href="/entities/stuartMontegomery_379"><h3>Stuart Montegomery</h3></a><p>16 Lawn Rd<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(stuartMontegomery);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="stuartMontegomery.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="stuartMontegomery.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var edwinMorganColor = getRandomColor();
      var style = '.' + 'edwinMorgan';
      var edwinMorgan = L.featureGroup([
          L.circleMarker([55.8868961, -4.3142781], {
            color: edwinMorganColor
          }).bindPopup('<a href="/entities/edwinMorgan_385"><h3>Edwin Morgan</h3></a><p>19 Whittingehame Court, 1350 Great Western Rd<br />Glasgow, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edwinMorgan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edwinMorgan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edwinMorgan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var hedleyMorganColor = getRandomColor();
      var style = '.' + 'hedleyMorgan';
      var hedleyMorgan = L.featureGroup([
          L.circleMarker([51.7193468, -0.1998501], {
            color: hedleyMorganColor
          }).bindPopup('<a href="/entities/hedleyMorgan_396"><h3>Hedley Morgan</h3></a><p>30 Bluebridge Rd, Brookmans Park<br />Hatfield, Hertfordshire, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(hedleyMorgan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="hedleyMorgan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="hedleyMorgan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var MotherPressColor = getRandomColor();
      var style = '.' + 'MotherPress';
      var MotherPress = L.featureGroup([
      ]);
      var ericMottramColor = getRandomColor();
      var style = '.' + 'ericMottram';
      var ericMottram = L.featureGroup([
          L.circleMarker([51.5048932, -0.1928461], {
            color: ericMottramColor
          }).bindPopup('<a href="/entities/ericMottram_364"><h3>Eric Mottram</h3></a><p>15 Vicarage Gate Kensington<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ericMottram);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ericMottram.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ericMottram.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var wendyMulfordColor = getRandomColor();
      var style = '.' + 'wendyMulford';
      var wendyMulford = L.featureGroup([
          L.circleMarker([52.1972299, 0.1244848], {
            color: wendyMulfordColor
          }).bindPopup('<a href="/entities/wendyMulford_383"><h3>Wendy Mulford</h3></a><p>13 Panton St<br />Cambridge, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(wendyMulford);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="wendyMulford.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="wendyMulford.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnBernardMyersColor = getRandomColor();
      var style = '.' + 'johnBernardMyers';
      var johnBernardMyers = L.featureGroup([
      ]);
      var NadadaColor = getRandomColor();
      var style = '.' + 'Nadada';
      var Nadada = L.featureGroup([
          L.circleMarker([40.655888, -73.923576], {
            color: NadadaColor
          }).bindPopup('<a href="/entities/Nadada_398"><h3>Nadada</h3></a><p>PO Box 384, Lenox Hill Station<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Nadada);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Nadada.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Nadada.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var NationalCouncilOfArtsColor = getRandomColor();
      var style = '.' + 'NationalCouncilOfArts';
      var NationalCouncilOfArts = L.featureGroup([
          L.circleMarker([38.898056, -77.043693], {
            color: NationalCouncilOfArtsColor
          }).bindPopup('<a href="/entities/NationalCouncilOfArts_331"><h3>National Council of Arts</h3></a><p>1900 G St NW<br />Washington, DC, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(NationalCouncilOfArts);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="NationalCouncilOfArts.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="NationalCouncilOfArts.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var NewMeasureColor = getRandomColor();
      var style = '.' + 'NewMeasure';
      var NewMeasure = L.featureGroup([
          L.circleMarker([51.7498095, -1.2593295], {
            color: NewMeasureColor
          }).bindPopup('<a href="/entities/NewMeasure_352"><h3>New Measure</h3></a><p>1 Littlegate St University of Oxford<br />Oxford, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(NewMeasure);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="NewMeasure.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="NewMeasure.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var juliaNewmanColor = getRandomColor();
      var style = '.' + 'juliaNewman';
      var juliaNewman = L.featureGroup([
          L.circleMarker([37.755138, -122.398419], {
            color: juliaNewmanColor
          }).bindPopup('<a href="/entities/juliaNewman_404"><h3>Julia Newman</h3></a><p>983 Wisconsin St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(juliaNewman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="juliaNewman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="juliaNewman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var lorineNiedeckerColor = getRandomColor();
      var style = '.' + 'lorineNiedecker';
      var lorineNiedecker = L.featureGroup([
          L.circleMarker([43.007345, -87.918383], {
            color: lorineNiedeckerColor
          }).bindPopup('<a href="/entities/lorineNiedecker_397"><h3>Lorine Niedecker</h3></a><p>2042 S 6th St<br />Milwaukee, WI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lorineNiedecker);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lorineNiedecker.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lorineNiedecker.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var patrickNolanColor = getRandomColor();
      var style = '.' + 'patrickNolan';
      var patrickNolan = L.featureGroup([
          L.circleMarker([36.6230331, -121.9173775], {
            color: patrickNolanColor
          }).bindPopup('<a href="/entities/patrickNolan_405"><h3>Patrick Nolan</h3></a><p>135 16th St<br />Pacific Grove, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(patrickNolan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="patrickNolan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="patrickNolan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.7916642, -122.2465867], {
            color: patrickNolanColor
          }).bindPopup('<a href="/entities/patrickNolan_405"><h3>Patrick Nolan</h3></a><p>1531 12th Ave<br />Oakland, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(patrickNolan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="patrickNolan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="patrickNolan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var aliceNotleyColor = getRandomColor();
      var style = '.' + 'aliceNotley';
      var aliceNotley = L.featureGroup([
          L.circleMarker([41.8907342, -71.36473], {
            color: aliceNotleyColor
          }).bindPopup('<a href="/entities/aliceNotley_462"><h3>Alice Notley</h3></a><p>180 Webster St<br />Pawtucket, RI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(aliceNotley);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="aliceNotley.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="aliceNotley.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var charlesOlsonColor = getRandomColor();
      var style = '.' + 'charlesOlson';
      var charlesOlson = L.featureGroup([
          L.circleMarker([42.8264498, -78.0897329], {
            color: charlesOlsonColor
          }).bindPopup('<a href="/entities/charlesOlson_409"><h3>Charles Olson</h3></a><p><br />Wyoming, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(charlesOlson);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="charlesOlson.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="charlesOlson.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.6085939, -70.664284], {
            color: charlesOlsonColor
          }).bindPopup('<a href="/entities/charlesOlson_409"><h3>Charles Olson</h3></a><p>28 Fort Square<br />Gloucester, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(charlesOlson);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="charlesOlson.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="charlesOlson.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.0510329, -71.383368], {
            color: charlesOlsonColor
          }).bindPopup('<a href="/entities/charlesOlson_409"><h3>Charles Olson</h3></a><p>22 Mount St.<br />, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(charlesOlson);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="charlesOlson.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="charlesOlson.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var joelOppenheimerColor = getRandomColor();
      var style = '.' + 'joelOppenheimer';
      var joelOppenheimer = L.featureGroup([
          L.circleMarker([40.7219327, -73.9794054], {
            color: joelOppenheimerColor
          }).bindPopup('<a href="/entities/joelOppenheimer_408"><h3>Joel Oppenheimer</h3></a><p>317 E 4th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(joelOppenheimer);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="joelOppenheimer.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="joelOppenheimer.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var edgarOwenColor = getRandomColor();
      var style = '.' + 'edgarOwen';
      var edgarOwen = L.featureGroup([
          L.circleMarker([35.6380107, 139.7021459], {
            color: edgarOwenColor
          }).bindPopup('<a href="/entities/edgarOwen_414"><h3>Edgar Owen</h3></a><p>Meguroku, Naka Meguro 4-chome 1424<br />Tokyo, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edgarOwen);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edgarOwen.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edgarOwen.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var laurenOwenColor = getRandomColor();
      var style = '.' + 'laurenOwen';
      var laurenOwen = L.featureGroup([
          L.circleMarker([34.037, 133.914], {
            color: laurenOwenColor
          }).bindPopup('<a href="/entities/laurenOwen_412"><h3>Lauren Owen</h3></a><p>Okawamuchi Yamashira-chio<br />Miyoshi-gun Tokushima-ken, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(laurenOwen);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="laurenOwen.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="laurenOwen.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var maureenOwenColor = getRandomColor();
      var style = '.' + 'maureenOwen';
      var maureenOwen = L.featureGroup([
          L.circleMarker([40.801867, -73.961971], {
            color: maureenOwenColor
          }).bindPopup('<a href="/entities/maureenOwen_417"><h3>Maureen Owen</h3></a><p>412 W 110th St #42<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(maureenOwen);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="maureenOwen.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="maureenOwen.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var robertOwenColor = getRandomColor();
      var style = '.' + 'robertOwen';
      var robertOwen = L.featureGroup([
          L.circleMarker([36.1123959, -95.932205], {
            color: robertOwenColor
          }).bindPopup('<a href="/entities/robertOwen_413"><h3>Robert Owen</h3></a><p>3527 S Oswego Ave<br />Tulsa, OK<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(robertOwen);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="robertOwen.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="robertOwen.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var rochelleOwensColor = getRandomColor();
      var style = '.' + 'rochelleOwens';
      var rochelleOwens = L.featureGroup([
          L.circleMarker([40.808164, -73.9646964], {
            color: rochelleOwensColor
          }).bindPopup('<a href="/entities/rochelleOwens_415"><h3>Rochelle Owens</h3></a><p>606 W 116th St #34 Columbia University<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(rochelleOwens);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="rochelleOwens.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="rochelleOwens.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var marianODwyerColor = getRandomColor();
      var style = '.' + 'marianODwyer';
      var marianODwyer = L.featureGroup([
          L.circleMarker([51.4956443, -0.0638669], {
            color: marianODwyerColor
          }).bindPopup('<a href="/entities/marianODwyer_411"><h3>Marian O’Dwyer</h3></a><p>18 Webster Rd<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(marianODwyer);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="marianODwyer.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="marianODwyer.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var PacificHighRecordingColor = getRandomColor();
      var style = '.' + 'PacificHighRecording';
      var PacificHighRecording = L.featureGroup([
          L.circleMarker([37.77262, -122.420437], {
            color: PacificHighRecordingColor
          }).bindPopup('<a href="/entities/PacificHighRecording_446"><h3>Pacific High Recording</h3></a><p>60 Brady St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(PacificHighRecording);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="PacificHighRecording.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="PacificHighRecording.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var michaelPalmerColor = getRandomColor();
      var style = '.' + 'michaelPalmer';
      var michaelPalmer = L.featureGroup([
      ]);
      var michaelPalmerColor = getRandomColor();
      var style = '.' + 'michaelPalmer';
      var michaelPalmer = L.featureGroup([
          L.circleMarker([37.770608, -122.429066], {
            color: michaelPalmerColor
          }).bindPopup('<a href="/entities/michaelPalmer_448"><h3>Michael Palmer</h3></a><p>234 Hermann St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(michaelPalmer);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="michaelPalmer.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="michaelPalmer.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.7650017, -122.4339767], {
            color: michaelPalmerColor
          }).bindPopup('<a href="/entities/michaelPalmer_448"><h3>Michael Palmer</h3></a><p>17 Beaver St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(michaelPalmer);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="michaelPalmer.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="michaelPalmer.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var ParisReviewColor = getRandomColor();
      var style = '.' + 'ParisReview';
      var ParisReview = L.featureGroup([
          L.circleMarker([48.8504581, 2.3373432], {
            color: ParisReviewColor
          }).bindPopup('<a href="/entities/ParisReview_424"><h3>Paris Review</h3></a><p>17 Rue de Tournon<br />Paris, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ParisReview);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ParisReview.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ParisReview.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var thomasParkinsonColor = getRandomColor();
      var style = '.' + 'thomasParkinson';
      var thomasParkinson = L.featureGroup([
      ]);
      var oliviaPaschkoffColor = getRandomColor();
      var style = '.' + 'oliviaPaschkoff';
      var oliviaPaschkoff = L.featureGroup([
          L.circleMarker([46.5124156, 6.6290276], {
            color: oliviaPaschkoffColor
          }).bindPopup('<a href="/entities/oliviaPaschkoff_433"><h3>Olivia Paschkoff</h3></a><p>Chemin de la Joliette 1<br />Lausanne, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(oliviaPaschkoff);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="oliviaPaschkoff.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="oliviaPaschkoff.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var PeaceEyeBookshopColor = getRandomColor();
      var style = '.' + 'PeaceEyeBookshop';
      var PeaceEyeBookshop = L.featureGroup([
          L.circleMarker([40.7261696, -73.978295], {
            color: PeaceEyeBookshopColor
          }).bindPopup('<a href="/entities/PeaceEyeBookshop_460"><h3>Peace Eye Bookshop</h3></a><p>383 E 10th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(PeaceEyeBookshop);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="PeaceEyeBookshop.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="PeaceEyeBookshop.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var PeaceNewsColor = getRandomColor();
      var style = '.' + 'PeaceNews';
      var PeaceNews = L.featureGroup([
          L.circleMarker([51.5312338, -0.1211143], {
            color: PeaceNewsColor
          }).bindPopup('<a href="/entities/PeaceNews_69"><h3>Peace News</h3></a><p>5 Caledonian Rd<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(PeaceNews);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="PeaceNews.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="PeaceNews.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var jonathanPerryColor = getRandomColor();
      var style = '.' + 'jonathanPerry';
      var jonathanPerry = L.featureGroup([
          L.circleMarker([37.9060368, -122.5449763], {
            color: jonathanPerryColor
          }).bindPopup('<a href="/entities/jonathanPerry_407"><h3>Jonathan Perry</h3></a><p><br />Mill Valley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jonathanPerry);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jonathanPerry.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jonathanPerry.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var stanPerskyColor = getRandomColor();
      var style = '.' + 'stanPersky';
      var stanPersky = L.featureGroup([
          L.circleMarker([37.7994419, -122.4196275], {
            color: stanPerskyColor
          }).bindPopup('<a href="/entities/stanPersky_428"><h3>Stan Persky</h3></a><p>24 Allen St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(stanPersky);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="stanPersky.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="stanPersky.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var jimPhilipColor = getRandomColor();
      var style = '.' + 'jimPhilip';
      var jimPhilip = L.featureGroup([
          L.circleMarker([50.7374865, -3.5220642], {
            color: jimPhilipColor
          }).bindPopup('<a href="/entities/jimPhilip_421"><h3>Jim Philip</h3></a><p>Springbank, Beech Ave<br />Exeter, Devon, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jimPhilip);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jimPhilip.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jimPhilip.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var PhoenixBookShopColor = getRandomColor();
      var style = '.' + 'PhoenixBookShop';
      var PhoenixBookShop = L.featureGroup([
          L.circleMarker([40.7313345, -74.001914], {
            color: PhoenixBookShopColor
          }).bindPopup('<a href="/entities/PhoenixBookShop_431"><h3>Phoenix Book Shop</h3></a><p>18 Cornelia St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(PhoenixBookShop);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="PhoenixBookShop.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="PhoenixBookShop.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var pascalPiaColor = getRandomColor();
      var style = '.' + 'pascalPia';
      var pascalPia = L.featureGroup([
          L.circleMarker([48.8814952, 2.3507962], {
            color: pascalPiaColor
          }).bindPopup('<a href="/entities/pascalPia_440"><h3>Pascal Pia</h3></a><p>137 Boulevard de Magenta<br />Paris, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(pascalPia);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="pascalPia.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="pascalPia.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var tomPickardColor = getRandomColor();
      var style = '.' + 'tomPickard';
      var tomPickard = L.featureGroup([
          L.circleMarker([54.9850624, -1.6059659], {
            color: tomPickardColor
          }).bindPopup('<a href="/entities/tomPickard_423"><h3>Tom Pickard</h3></a><p>19 Eslington Terrace<br />Newcastle upon Tyne, Tyne and Wear, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tomPickard);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tomPickard.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tomPickard.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var charlesPlymellColor = getRandomColor();
      var style = '.' + 'charlesPlymell';
      var charlesPlymell = L.featureGroup([
          L.circleMarker([42.7956294, -74.7532018], {
            color: charlesPlymellColor
          }).bindPopup('<a href="/entities/charlesPlymell_438"><h3>Charles Plymell</h3></a><p>PO Box 64<br />Cherry Valley, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(charlesPlymell);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="charlesPlymell.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="charlesPlymell.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.797601, -122.406579], {
            color: charlesPlymellColor
          }).bindPopup('<a href="/entities/charlesPlymell_438"><h3>Charles Plymell</h3></a><p>261 Columbus Ave<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(charlesPlymell);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="charlesPlymell.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="charlesPlymell.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var PoetmeatColor = getRandomColor();
      var style = '.' + 'Poetmeat';
      var Poetmeat = L.featureGroup([
          L.circleMarker([53.7520075, -2.504108], {
            color: PoetmeatColor
          }).bindPopup('<a href="/entities/Poetmeat_426"><h3>Poetmeat</h3></a><p>11 Clematis St<br />Blackburn, Blackburn with Darwen, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Poetmeat);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Poetmeat.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Poetmeat.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var PoetryColor = getRandomColor();
      var style = '.' + 'Poetry';
      var Poetry = L.featureGroup([
          L.circleMarker([41.900625, -87.628333], {
            color: PoetryColor
          }).bindPopup('<a href="/entities/Poetry_441"><h3>Poetry</h3></a><p>1019 N State St<br />Chicago, IL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Poetry);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Poetry.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Poetry.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var PoetryCenterSanFranciscoStateCollegeColor = getRandomColor();
      var style = '.' + 'PoetryCenterSanFranciscoStateCollege';
      var PoetryCenterSanFranciscoStateCollege = L.featureGroup([
          L.circleMarker([37.7219699, -122.4794032], {
            color: PoetryCenterSanFranciscoStateCollegeColor
          }).bindPopup('<a href="/entities/PoetryCenterSanFranciscoStateCollege_447"><h3>Poetry Center, San Francisco State College</h3></a><p>1600 Holloway Ave<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(PoetryCenterSanFranciscoStateCollege);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="PoetryCenterSanFranciscoStateCollege.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="PoetryCenterSanFranciscoStateCollege.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var PoetryCenterYmhaYwhaColor = getRandomColor();
      var style = '.' + 'PoetryCenterYmhaYwha';
      var PoetryCenterYmhaYwha = L.featureGroup([
          L.circleMarker([40.7830623, -73.9526804], {
            color: PoetryCenterYmhaYwhaColor
          }).bindPopup('<a href="/entities/PoetryCenterYmhaYwha_579"><h3>Poetry Center, YMHA, YWHA</h3></a><p>1395 Lexington Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(PoetryCenterYmhaYwha);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="PoetryCenterYmhaYwha.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="PoetryCenterYmhaYwha.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var PoetryReviewColor = getRandomColor();
      var style = '.' + 'PoetryReview';
      var PoetryReview = L.featureGroup([
          L.circleMarker([27.9474881, -82.4671717], {
            color: PoetryReviewColor
          }).bindPopup('<a href="/entities/PoetryReview_526"><h3>Poetry Review</h3></a><p>University of Tampa<br />Tampa, FL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(PoetryReview);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="PoetryReview.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="PoetryReview.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var PoetsPressColor = getRandomColor();
      var style = '.' + 'PoetsPress';
      var PoetsPress = L.featureGroup([
          L.circleMarker([41.7748155, -74.2982059], {
            color: PoetsPressColor
          }).bindPopup('<a href="/entities/PoetsPress_149"><h3>Poets Press</h3></a><p>RR1 Box 427<br />Kerhonkson, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(PoetsPress);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="PoetsPress.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="PoetsPress.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var PogamogganColor = getRandomColor();
      var style = '.' + 'Pogamoggan';
      var Pogamoggan = L.featureGroup([
          L.circleMarker([40.637544, -73.956918], {
            color: PogamogganColor
          }).bindPopup('<a href="/entities/Pogamoggan_429"><h3>Pogamoggan</h3></a><p>600 E 22nd St<br />Brooklyn, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Pogamoggan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Pogamoggan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Pogamoggan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var billPressonColor = getRandomColor();
      var style = '.' + 'billPresson';
      var billPresson = L.featureGroup([
          L.circleMarker([37.755275, -122.398432], {
            color: billPressonColor
          }).bindPopup('<a href="/entities/billPresson_444"><h3>Bill Presson</h3></a><p>969 Wisconsin St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(billPresson);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="billPresson.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="billPresson.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([45.777831, -88.007348], {
            color: billPressonColor
          }).bindPopup('<a href="/entities/billPresson_444"><h3>Bill Presson</h3></a><p>610 Buchanan<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(billPresson);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="billPresson.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="billPresson.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([44.6397405, -73.1103908], {
            color: billPressonColor
          }).bindPopup('<a href="/entities/billPresson_444"><h3>Bill Presson</h3></a><p>Brookside Dr, RFD 3<br />Milton, VT<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(billPresson);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="billPresson.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="billPresson.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var PuccettiColor = getRandomColor();
      var style = '.' + 'Puccetti';
      var Puccetti = L.featureGroup([
          L.circleMarker([41.9418698, -87.6399996], {
            color: PuccettiColor
          }).bindPopup('<a href="/entities/Puccetti_422"><h3>Puccetti</h3></a><p>3260 N Lake Shore Dr<br />Chicago, IL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Puccetti);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Puccetti.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Puccetti.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var QuarterlyReviewOfLiteratureColor = getRandomColor();
      var style = '.' + 'QuarterlyReviewOfLiterature';
      var QuarterlyReviewOfLiterature = L.featureGroup([
          L.circleMarker([42.0128, -73.9082], {
            color: QuarterlyReviewOfLiteratureColor
          }).bindPopup('<a href="/entities/QuarterlyReviewOfLiterature_450"><h3>Quarterly Review of Literature</h3></a><p>PO Box 287<br />Annandale-on-Hudson, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(QuarterlyReviewOfLiterature);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="QuarterlyReviewOfLiterature.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="QuarterlyReviewOfLiterature.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var nicoleRabetaudColor = getRandomColor();
      var style = '.' + 'nicoleRabetaud';
      var nicoleRabetaud = L.featureGroup([
          L.circleMarker([45.8279915, 1.2420444], {
            color: nicoleRabetaudColor
          }).bindPopup('<a href="/entities/nicoleRabetaud_453"><h3>Nicole Rabetaud</h3></a><p>101 Rue François Perrin<br />Limoges, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(nicoleRabetaud);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="nicoleRabetaud.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="nicoleRabetaud.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var carlRakosiColor = getRandomColor();
      var style = '.' + 'carlRakosi';
      var carlRakosi = L.featureGroup([
          L.circleMarker([44.921636, -93.291744], {
            color: carlRakosiColor
          }).bindPopup('<a href="/entities/carlRakosi_458"><h3>Carl Rakosi</h3></a><p>4451 Colfax Ave S<br />Minneapolis, MN<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(carlRakosi);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="carlRakosi.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="carlRakosi.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var tomRaworthColor = getRandomColor();
      var style = '.' + 'tomRaworth';
      var tomRaworth = L.featureGroup([
          L.circleMarker([51.6077926, -0.1177433], {
            color: tomRaworthColor
          }).bindPopup('<a href="/entities/tomRaworth_456"><h3>Tom Raworth</h3></a><p>44 Manor Rd #1<br />Barnet, Greater London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tomRaworth);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tomRaworth.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tomRaworth.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([51.885149, 0.8825745], {
            color: tomRaworthColor
          }).bindPopup('<a href="/entities/tomRaworth_456"><h3>Tom Raworth</h3></a><p>6A Victoria Rd<br />Colchester, Essex, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tomRaworth);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tomRaworth.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tomRaworth.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var davidRayColor = getRandomColor();
      var style = '.' + 'davidRay';
      var davidRay = L.featureGroup([
          L.circleMarker([45.488734, -122.635902], {
            color: davidRayColor
          }).bindPopup('<a href="/entities/davidRay_452"><h3>David Ray</h3></a><p>2866 SE Long St<br />Portland, OR<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidRay);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidRay.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidRay.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([45.472104, -122.616981], {
            color: davidRayColor
          }).bindPopup('<a href="/entities/davidRay_452"><h3>David Ray</h3></a><p>4417 SE Rural St<br />Portland, OR<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidRay);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidRay.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidRay.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([45.4809642, -122.6301455], {
            color: davidRayColor
          }).bindPopup('<a href="/entities/davidRay_452"><h3>David Ray</h3></a><p>3203 SE Woodstock Blvd<br />Portland, OR<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidRay);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidRay.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidRay.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ellenRayColor = getRandomColor();
      var style = '.' + 'ellenRay';
      var ellenRay = L.featureGroup([
          L.circleMarker([40.7761468, -73.9602996], {
            color: ellenRayColor
          }).bindPopup('<a href="/entities/ellenRay_480"><h3>Ellen Ray</h3></a><p>904 Park Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ellenRay);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ellenRay.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ellenRay.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var davidRRebmannColor = getRandomColor();
      var style = '.' + 'davidRRebmann';
      var davidRRebmann = L.featureGroup([
          L.circleMarker([29.671909, -82.303758], {
            color: davidRRebmannColor
          }).bindPopup('<a href="/entities/davidRRebmann_482"><h3>David R. Rebmann</h3></a><p>2041 NE 16th Terrace<br />Gainesville, FL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidRRebmann);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidRRebmann.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidRRebmann.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var janetRedemannColor = getRandomColor();
      var style = '.' + 'janetRedemann';
      var janetRedemann = L.featureGroup([
          L.circleMarker([51.7728016, -1.2645299], {
            color: janetRedemannColor
          }).bindPopup('<a href="/entities/janetRedemann_459"><h3>Janet Redemann</h3></a><p>10 Lathbury Rd<br />Oxford, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(janetRedemann);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="janetRedemann.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="janetRedemann.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var karelReiszColor = getRandomColor();
      var style = '.' + 'karelReisz';
      var karelReisz = L.featureGroup([
          L.circleMarker([51.5461891, -0.1611068], {
            color: karelReiszColor
          }).bindPopup('<a href="/entities/karelReisz_335"><h3>Karel Reisz</h3></a><p>15 Chalcot Gardens<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(karelReisz);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="karelReisz.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="karelReisz.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ResiduColor = getRandomColor();
      var style = '.' + 'Residu';
      var Residu = L.featureGroup([
          L.circleMarker([51.4584946, -0.2058168], {
            color: ResiduColor
          }).bindPopup('<a href="/entities/Residu_454"><h3>Residu</h3></a><p>6 St Stephen’s Gardens<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Residu);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Residu.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Residu.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ResuscitatorColor = getRandomColor();
      var style = '.' + 'Resuscitator';
      var Resuscitator = L.featureGroup([
          L.circleMarker([51.3097366, -2.4952756], {
            color: ResuscitatorColor
          }).bindPopup('<a href="/entities/Resuscitator_344"><h3>Resuscitator</h3></a><p>35 Gregorys Tyning Paulton<br />Bristol, Bath and North East Somerset, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Resuscitator);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Resuscitator.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Resuscitator.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var albertReneRicardColor = getRandomColor();
      var style = '.' + 'albertReneRicard';
      var albertReneRicard = L.featureGroup([
          L.circleMarker([40.737029, -73.998813], {
            color: albertReneRicardColor
          }).bindPopup('<a href="/entities/albertReneRicard_463"><h3>Albert René Ricard</h3></a><p>128 W 13th St #13<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(albertReneRicard);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="albertReneRicard.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="albertReneRicard.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var danRichterColor = getRandomColor();
      var style = '.' + 'danRichter';
      var danRichter = L.featureGroup([
          L.circleMarker([51.4584946, -0.2058168], {
            color: danRichterColor
          }).bindPopup('<a href="/entities/danRichter_455"><h3>Dan Richter</h3></a><p>6 St Stephen’s Gardens<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(danRichter);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="danRichter.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="danRichter.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var drFrancisRigneyColor = getRandomColor();
      var style = '.' + 'drFrancisRigney';
      var drFrancisRigney = L.featureGroup([
          L.circleMarker([37.7914121, -122.4328182], {
            color: drFrancisRigneyColor
          }).bindPopup('<a href="/entities/drFrancisRigney_477"><h3>Dr. Francis Rigney</h3></a><p>2235 Webster St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(drFrancisRigney);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="drFrancisRigney.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="drFrancisRigney.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var williamRiveraColor = getRandomColor();
      var style = '.' + 'williamRivera';
      var williamRivera = L.featureGroup([
          L.circleMarker([48.8509051, 2.3188101], {
            color: williamRiveraColor
          }).bindPopup('<a href="/entities/williamRivera_464"><h3>William Rivera</h3></a><p>52 Rue Vaneau<br />Paris, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(williamRivera);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="williamRivera.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="williamRivera.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var RobertsRecordsColor = getRandomColor();
      var style = '.' + 'RobertsRecords';
      var RobertsRecords = L.featureGroup([
          L.circleMarker([40.7269536, -73.9828337], {
            color: RobertsRecordsColor
          }).bindPopup('<a href="/entities/RobertsRecords_474"><h3>Roberts Records</h3></a><p>133 Avenue A<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(RobertsRecords);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="RobertsRecords.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="RobertsRecords.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var andrewCRobinsonColor = getRandomColor();
      var style = '.' + 'andrewCRobinson';
      var andrewCRobinson = L.featureGroup([
          L.circleMarker([51.4215688, -2.5587321], {
            color: andrewCRobinsonColor
          }).bindPopup('<a href="/entities/andrewCRobinson_467"><h3>Andrew C. Robinson</h3></a><p>38 Kinsale Rd<br />Bristol, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(andrewCRobinson);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="andrewCRobinson.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="andrewCRobinson.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var RockefellerFoundationColor = getRandomColor();
      var style = '.' + 'RockefellerFoundation';
      var RockefellerFoundation = L.featureGroup([
          L.circleMarker([40.759532, -73.9795414], {
            color: RockefellerFoundationColor
          }).bindPopup('<a href="/entities/RockefellerFoundation_191"><h3>Rockefeller Foundation</h3></a><p>111 W 50th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(RockefellerFoundation);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="RockefellerFoundation.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="RockefellerFoundation.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var RollingStoneColor = getRandomColor();
      var style = '.' + 'RollingStone';
      var RollingStone = L.featureGroup([
          L.circleMarker([37.7739641, -122.4021172], {
            color: RollingStoneColor
          }).bindPopup('<a href="/entities/RollingStone_478"><h3>Rolling Stone</h3></a><p>746 Brannan St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(RollingStone);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="RollingStone.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="RollingStone.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.779723, -122.393414], {
            color: RollingStoneColor
          }).bindPopup('<a href="/entities/RollingStone_478"><h3>Rolling Stone</h3></a><p>625 3rd St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(RollingStone);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="RollingStone.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="RollingStone.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var luciaRoseColor = getRandomColor();
      var style = '.' + 'luciaRose';
      var luciaRose = L.featureGroup([
          L.circleMarker([37.9093702, -122.6863733], {
            color: luciaRoseColor
          }).bindPopup('<a href="/entities/luciaRose_307"><h3>Lucia Rose</h3></a><p>PO Box 508<br />Bolinas, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(luciaRose);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="luciaRose.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="luciaRose.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var davidRosenbergColor = getRandomColor();
      var style = '.' + 'davidRosenberg';
      var davidRosenberg = L.featureGroup([
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
      var timRossColor = getRandomColor();
      var style = '.' + 'timRoss';
      var timRoss = L.featureGroup([
          L.circleMarker([51.4378149, -0.2150986], {
            color: timRossColor
          }).bindPopup('<a href="/entities/timRoss_466"><h3>Tim Ross</h3></a><p>65 Bathgate Rd<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(timRoss);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="timRoss.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="timRoss.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jeromeRothenbergColor = getRandomColor();
      var style = '.' + 'jeromeRothenberg';
      var jeromeRothenberg = L.featureGroup([
          L.circleMarker([40.8379065, -73.9425767], {
            color: jeromeRothenbergColor
          }).bindPopup('<a href="/entities/jeromeRothenberg_472"><h3>Jerome Rothenberg</h3></a><p>600 W 163rd St<br />New York, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jeromeRothenberg);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jeromeRothenberg.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jeromeRothenberg.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var claudeRoyetJournoudColor = getRandomColor();
      var style = '.' + 'claudeRoyetJournoud';
      var claudeRoyetJournoud = L.featureGroup([
          L.circleMarker([51.570995, -0.1369021], {
            color: claudeRoyetJournoudColor
          }).bindPopup('<a href="/entities/claudeRoyetJournoud_468"><h3>Claude Royet-Journoud</h3></a><p>72 Hornsey Ln<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(claudeRoyetJournoud);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="claudeRoyetJournoud.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="claudeRoyetJournoud.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var katieRuseColor = getRandomColor();
      var style = '.' + 'katieRuse';
      var katieRuse = L.featureGroup([
          L.circleMarker([51.5408717, -0.1540531], {
            color: katieRuseColor
          }).bindPopup('<a href="/entities/katieRuse_457"><h3>Katie Ruse</h3></a><p>20 Fitzroy Rd<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(katieRuse);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="katieRuse.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="katieRuse.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var dDMrsRyanIiiColor = getRandomColor();
      var style = '.' + 'dDMrsRyanIii';
      var dDMrsRyanIii = L.featureGroup([
          L.circleMarker([40.754052, -73.963281], {
            color: dDMrsRyanIiiColor
          }).bindPopup('<a href="/entities/dDMrsRyanIii_470"><h3>D.D. (Mrs.) Ryan III</h3></a><p>450 E 52nd St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(dDMrsRyanIii);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="dDMrsRyanIii.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="dDMrsRyanIii.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var leonardSahnColor = getRandomColor();
      var style = '.' + 'leonardSahn';
      var leonardSahn = L.featureGroup([
          L.circleMarker([42.2808256, -83.7430378], {
            color: leonardSahnColor
          }).bindPopup('<a href="/entities/leonardSahn_503"><h3>Leonard Sahn</h3></a><p><br />Ann Arbor, MI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(leonardSahn);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="leonardSahn.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="leonardSahn.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var nikiDeSaintPhalleColor = getRandomColor();
      var style = '.' + 'nikiDeSaintPhalle';
      var nikiDeSaintPhalle = L.featureGroup([
          L.circleMarker([48.4749679, 2.497111], {
            color: nikiDeSaintPhalleColor
          }).bindPopup('<a href="/entities/nikiDeSaintPhalle_539"><h3>Niki de Saint Phalle</h3></a><p>Auberge du Cheval Blanc<br />Soisy-sur-École, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(nikiDeSaintPhalle);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="nikiDeSaintPhalle.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="nikiDeSaintPhalle.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var davidSandbergColor = getRandomColor();
      var style = '.' + 'davidSandberg';
      var davidSandberg = L.featureGroup([
          L.circleMarker([37.1260578, -122.1221869], {
            color: davidSandbergColor
          }).bindPopup('<a href="/entities/davidSandberg_499"><h3>David Sandberg</h3></a><p>PO Box 192<br />Boulder Creek, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidSandberg);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidSandberg.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidSandberg.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var davidSchaffColor = getRandomColor();
      var style = '.' + 'davidSchaff';
      var davidSchaff = L.featureGroup([
          L.circleMarker([37.854981, -122.258374], {
            color: davidSchaffColor
          }).bindPopup('<a href="/entities/davidSchaff_520"><h3>David Schaff</h3></a><p>3009 Dana St #2<br />Berkeley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidSchaff);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidSchaff.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidSchaff.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var nickSedgwickColor = getRandomColor();
      var style = '.' + 'nickSedgwick';
      var nickSedgwick = L.featureGroup([
          L.circleMarker([51.8861173, 0.8948162], {
            color: nickSedgwickColor
          }).bindPopup('<a href="/entities/nickSedgwick_504"><h3>Nick Sedgwick</h3></a><p>53 Butt Rd<br />Colchester, Essex, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(nickSedgwick);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="nickSedgwick.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="nickSedgwick.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([52.2296448, 0.087347], {
            color: nickSedgwickColor
          }).bindPopup('<a href="/entities/nickSedgwick_504"><h3>Nick Sedgwick</h3></a><p>12 Thornton Rd Girton<br />Cambridge, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(nickSedgwick);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="nickSedgwick.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="nickSedgwick.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var alanSenaukeColor = getRandomColor();
      var style = '.' + 'alanSenauke';
      var alanSenauke = L.featureGroup([
          L.circleMarker([40.7942039, -73.751522], {
            color: alanSenaukeColor
          }).bindPopup('<a href="/entities/alanSenauke_509"><h3>Alan Senauke</h3></a><p>135 Longfellow Rd<br />Great Neck, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(alanSenauke);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="alanSenauke.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="alanSenauke.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var SerendipityBookshopColor = getRandomColor();
      var style = '.' + 'SerendipityBookshop';
      var SerendipityBookshop = L.featureGroup([
          L.circleMarker([37.8749702, -122.2689654], {
            color: SerendipityBookshopColor
          }).bindPopup('<a href="/entities/SerendipityBookshop_267"><h3>Serendipity Bookshop</h3></a><p>1790 Shattuck Ave<br />Berkeley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(SerendipityBookshop);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="SerendipityBookshop.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="SerendipityBookshop.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var SetColor = getRandomColor();
      var style = '.' + 'Set';
      var Set = L.featureGroup([
          L.circleMarker([42.612666, -70.664379], {
            color: SetColor
          }).bindPopup('<a href="/entities/Set_486"><h3>Set</h3></a><p>92 Main St<br />Gloucester, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Set);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Set.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Set.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var SharkeyColor = getRandomColor();
      var style = '.' + 'Sharkey';
      var Sharkey = L.featureGroup([
          L.circleMarker([51.4916242, -0.2070805], {
            color: SharkeyColor
          }).bindPopup('<a href="/entities/Sharkey_497"><h3>Sharkey</h3></a><p>Wellesley Mansions #18, Edith Villas<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Sharkey);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Sharkey.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Sharkey.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var michaelShayerColor = getRandomColor();
      var style = '.' + 'michaelShayer';
      var michaelShayer = L.featureGroup([
          L.circleMarker([52.1852882, -2.2093691], {
            color: michaelShayerColor
          }).bindPopup('<a href="/entities/michaelShayer_484"><h3>Michael Shayer</h3></a><p>2 Camp Hill Rd<br />Worcester, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(michaelShayer);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="michaelShayer.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="michaelShayer.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var williamDavidShermanColor = getRandomColor();
      var style = '.' + 'williamDavidSherman';
      var williamDavidSherman = L.featureGroup([
          L.circleMarker([42.920359, -78.861151], {
            color: williamDavidShermanColor
          }).bindPopup('<a href="/entities/williamDavidSherman_493"><h3>William David Sherman</h3></a><p>1001 Lafayette Ave<br />Buffalo, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(williamDavidSherman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="williamDavidSherman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="williamDavidSherman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var johnSinclairColor = getRandomColor();
      var style = '.' + 'johnSinclair';
      var johnSinclair = L.featureGroup([
          L.circleMarker([42.4045838, -83.1351677], {
            color: johnSinclairColor
          }).bindPopup('<a href="/entities/johnSinclair_489"><h3>John Sinclair</h3></a><p>4825-4827 John C Lodge Service Dr<br />Detroit, MI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnSinclair);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnSinclair.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnSinclair.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var joelSlomanColor = getRandomColor();
      var style = '.' + 'joelSloman';
      var joelSloman = L.featureGroup([
      ]);
      var garySnyderColor = getRandomColor();
      var style = '.' + 'garySnyder';
      var garySnyder = L.featureGroup([
          L.circleMarker([37.7997468, -122.4070413], {
            color: garySnyderColor
          }).bindPopup('<a href="/entities/garySnyder_485"><h3>Gary Snyder</h3></a><p>479 Green St #4<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(garySnyder);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="garySnyder.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="garySnyder.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var normanSolomonColor = getRandomColor();
      var style = '.' + 'normanSolomon';
      var normanSolomon = L.featureGroup([
          L.circleMarker([51.4901484, -0.1792069], {
            color: normanSolomonColor
          }).bindPopup('<a href="/entities/normanSolomon_506"><h3>Norman Solomon</h3></a><p>25 Cranley Gardens Kensington<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(normanSolomon);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="normanSolomon.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="normanSolomon.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var alanSondheimColor = getRandomColor();
      var style = '.' + 'alanSondheim';
      var alanSondheim = L.featureGroup([
          L.circleMarker([41.830477, -71.389221], {
            color: alanSondheimColor
          }).bindPopup('<a href="/entities/alanSondheim_521"><h3>Alan Sondheim</h3></a><p>21B Elmgrove Ave<br />Providence, RI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(alanSondheim);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="alanSondheim.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="alanSondheim.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var gilbertSorrentinoColor = getRandomColor();
      var style = '.' + 'gilbertSorrentino';
      var gilbertSorrentino = L.featureGroup([
          L.circleMarker([40.7269451, -73.9831168], {
            color: gilbertSorrentinoColor
          }).bindPopup('<a href="/entities/gilbertSorrentino_490"><h3>Gilbert Sorrentino</h3></a><p>131 Avenue A<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(gilbertSorrentino);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="gilbertSorrentino.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="gilbertSorrentino.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var SperoColor = getRandomColor();
      var style = '.' + 'Spero';
      var Spero = L.featureGroup([
          L.circleMarker([42.4045838, -83.1351679], {
            color: SperoColor
          }).bindPopup('<a href="/entities/Spero_488"><h3>Spero</h3></a><p>4821 John C Lodge Service Dr<br />Detroit, MI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Spero);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Spero.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Spero.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var hardieStMartinColor = getRandomColor();
      var style = '.' + 'hardieStMartin';
      var hardieStMartin = L.featureGroup([
          L.circleMarker([41.4066912, 2.1822852], {
            color: hardieStMartinColor
          }).bindPopup('<a href="/entities/hardieStMartin_491"><h3>Hardie St. Martin</h3></a><p>Carrer de València, 548<br />Barcelona, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(hardieStMartin);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="hardieStMartin.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="hardieStMartin.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnStaleyColor = getRandomColor();
      var style = '.' + 'johnStaley';
      var johnStaley = L.featureGroup([
          L.circleMarker([42.9329213, -78.8261183], {
            color: johnStaleyColor
          }).bindPopup('<a href="/entities/johnStaley_519"><h3>John Staley</h3></a><p>726 Kensington Ave<br />Buffalo, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnStaley);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnStaley.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnStaley.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var georgeStanleyColor = getRandomColor();
      var style = '.' + 'georgeStanley';
      var georgeStanley = L.featureGroup([
          L.circleMarker([37.8046285, -122.4130697], {
            color: georgeStanleyColor
          }).bindPopup('<a href="/entities/georgeStanley_494"><h3>George Stanley</h3></a><p>495 Francisco St Apt C<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(georgeStanley);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="georgeStanley.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="georgeStanley.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnStantonColor = getRandomColor();
      var style = '.' + 'johnStanton';
      var johnStanton = L.featureGroup([
          L.circleMarker([40.779378, -73.948728], {
            color: johnStantonColor
          }).bindPopup('<a href="/entities/johnStanton_505"><h3>John Stanton</h3></a><p>325 E 89th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnStanton);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnStanton.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnStanton.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var georgeStarbuckColor = getRandomColor();
      var style = '.' + 'georgeStarbuck';
      var georgeStarbuck = L.featureGroup([
          L.circleMarker([41.6626963, -91.5548998], {
            color: georgeStarbuckColor
          }).bindPopup('<a href="/entities/georgeStarbuck_515"><h3>George Starbuck</h3></a><p>University of Iowa<br />Iowa City, IA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(georgeStarbuck);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="georgeStarbuck.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="georgeStarbuck.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var bernardStoneColor = getRandomColor();
      var style = '.' + 'bernardStone';
      var bernardStone = L.featureGroup([
          L.circleMarker([51.5025436, -0.1927229], {
            color: bernardStoneColor
          }).bindPopup('<a href="/entities/bernardStone_496"><h3>Bernard Stone</h3></a><p>19 Kensington Church Walk Kensington<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bernardStone);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bernardStone.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bernardStone.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var markStrandColor = getRandomColor();
      var style = '.' + 'markStrand';
      var markStrand = L.featureGroup([
          L.circleMarker([42.2540057, -72.5762415], {
            color: markStrandColor
          }).bindPopup('<a href="/entities/markStrand_511"><h3>Mark Strand</h3></a><p>50 College St<br />South Hadley, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(markStrand);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="markStrand.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="markStrand.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var peteStuartColor = getRandomColor();
      var style = '.' + 'peteStuart';
      var peteStuart = L.featureGroup([
          L.circleMarker([34.07962, -118.4116476], {
            color: peteStuartColor
          }).bindPopup('<a href="/entities/peteStuart_514"><h3>Pete Stuart</h3></a><p>1427 N Cañon Dr<br />Beverly Hills, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(peteStuart);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="peteStuart.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="peteStuart.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var SunRaColor = getRandomColor();
      var style = '.' + 'SunRa';
      var SunRa = L.featureGroup([
          L.circleMarker([40.7252301, -73.9895177], {
            color: SunRaColor
          }).bindPopup('<a href="/entities/SunRa_184"><h3>Sun Ra</h3></a><p>48 E 3rd St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(SunRa);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="SunRa.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="SunRa.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var SynapseColor = getRandomColor();
      var style = '.' + 'Synapse';
      var Synapse = L.featureGroup([
          L.circleMarker([37.876438, -122.273891], {
            color: SynapseColor
          }).bindPopup('<a href="/entities/Synapse_234"><h3>Synapse</h3></a><p>1636 Martin Luther King Jr Way<br />Berkeley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Synapse);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Synapse.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Synapse.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnTempleColor = getRandomColor();
      var style = '.' + 'johnTemple';
      var johnTemple = L.featureGroup([
          L.circleMarker([42.9526336, -78.824285], {
            color: johnTempleColor
          }).bindPopup('<a href="/entities/johnTemple_524"><h3>John Temple</h3></a><p>3262 Main St<br />Buffalo, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnTemple);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnTemple.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnTemple.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([35.080289, -106.643117], {
            color: johnTempleColor
          }).bindPopup('<a href="/entities/johnTemple_524"><h3>John Temple</h3></a><p>401 Edith Blvd SE<br />Albuquerque, NM<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnTemple);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnTemple.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnTemple.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ThalocColor = getRandomColor();
      var style = '.' + 'Thaloc';
      var Thaloc = L.featureGroup([
          L.circleMarker([53.8129459, -1.5653199], {
            color: ThalocColor
          }).bindPopup('<a href="/entities/Thaloc_361"><h3>Thaloc</h3></a><p>22 Brudenell Rd<br />Leeds, West Yorkshire, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Thaloc);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Thaloc.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Thaloc.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var TheSixtiesColor = getRandomColor();
      var style = '.' + 'TheSixties';
      var TheSixties = L.featureGroup([
          L.circleMarker([45.0113787, -96.1932176], {
            color: TheSixtiesColor
          }).bindPopup('<a href="/entities/TheSixties_42"><h3>The Sixties</h3></a><p>Odin House<br />Madison, MN<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(TheSixties);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="TheSixties.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="TheSixties.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var TheTenthMuseColor = getRandomColor();
      var style = '.' + 'TheTenthMuse';
      var TheTenthMuse = L.featureGroup([
          L.circleMarker([37.755138, -122.398419], {
            color: TheTenthMuseColor
          }).bindPopup('<a href="/entities/TheTenthMuse_403"><h3>The Tenth Muse</h3></a><p>983 Wisconsin St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(TheTenthMuse);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="TheTenthMuse.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="TheTenthMuse.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var TheWorldColor = getRandomColor();
      var style = '.' + 'TheWorld';
      var TheWorld = L.featureGroup([
      ]);
      var jackThibeauColor = getRandomColor();
      var style = '.' + 'jackThibeau';
      var jackThibeau = L.featureGroup([
          L.circleMarker([37.79291, -122.4184279], {
            color: jackThibeauColor
          }).bindPopup('<a href="/entities/jackThibeau_533"><h3>Jack Thibeau</h3></a><p>1534 Clay #8<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jackThibeau);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jackThibeau.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jackThibeau.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ThingsColor = getRandomColor();
      var style = '.' + 'Things';
      var Things = L.featureGroup([
          L.circleMarker([40.802399, -73.968866], {
            color: ThingsColor
          }).bindPopup('<a href="/entities/Things_347"><h3>Things</h3></a><p>308 W 107th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Things);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Things.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Things.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var billThomasColor = getRandomColor();
      var style = '.' + 'billThomas';
      var billThomas = L.featureGroup([
          L.circleMarker([44.035263, -123.097613], {
            color: billThomasColor
          }).bindPopup('<a href="/entities/billThomas_276"><h3>Bill Thomas</h3></a><p>338 W 22nd Ave<br />Eugene, OR<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(billThomas);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="billThomas.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="billThomas.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var lorenzoThomasColor = getRandomColor();
      var style = '.' + 'lorenzoThomas';
      var lorenzoThomas = L.featureGroup([
          L.circleMarker([40.680374, -73.78411], {
            color: lorenzoThomasColor
          }).bindPopup('<a href="/entities/lorenzoThomas_527"><h3>Lorenzo Thomas</h3></a><p>160-21 119th Dr<br />Queens, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lorenzoThomas);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lorenzoThomas.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lorenzoThomas.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnThorpeColor = getRandomColor();
      var style = '.' + 'johnThorpe';
      var johnThorpe = L.featureGroup([
          L.circleMarker([37.9093702, -122.6863733], {
            color: johnThorpeColor
          }).bindPopup('<a href="/entities/johnThorpe_540"><h3>John Thorpe</h3></a><p>PO Box 271<br />Bolinas, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnThorpe);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnThorpe.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnThorpe.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var TiborDeNagyColor = getRandomColor();
      var style = '.' + 'TiborDeNagy';
      var TiborDeNagy = L.featureGroup([
          L.circleMarker([40.7640557, -73.9756129], {
            color: TiborDeNagyColor
          }).bindPopup('<a href="/entities/TiborDeNagy_528"><h3>Tibor de Nagy</h3></a><p>29 W 57th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(TiborDeNagy);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="TiborDeNagy.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="TiborDeNagy.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jeanTinguelyColor = getRandomColor();
      var style = '.' + 'jeanTinguely';
      var jeanTinguely = L.featureGroup([
          L.circleMarker([48.4749679, 2.497111], {
            color: jeanTinguelyColor
          }).bindPopup('<a href="/entities/jeanTinguely_538"><h3>Jean Tinguely</h3></a><p>Auberge du Cheval Blanc<br />Soisy-sur-École, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jeanTinguely);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jeanTinguely.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jeanTinguely.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var TishColor = getRandomColor();
      var style = '.' + 'Tish';
      var Tish = L.featureGroup([
          L.circleMarker([49.2384223, -123.1629901], {
            color: TishColor
          }).bindPopup('<a href="/entities/Tish_525"><h3>Tish</h3></a><p>2527 W 37th Ave<br />Vancouver, BC<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Tish);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Tish.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Tish.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var charlesTomlinsonColor = getRandomColor();
      var style = '.' + 'charlesTomlinson';
      var charlesTomlinson = L.featureGroup([
          L.circleMarker([51.6330952, -2.2998408], {
            color: charlesTomlinsonColor
          }).bindPopup('<a href="/entities/charlesTomlinson_522"><h3>Charles Tomlinson</h3></a><p>Brook Cottage<br />Ozleworth, Wotton-under-Edge, Gloucestershire, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(charlesTomlinson);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="charlesTomlinson.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="charlesTomlinson.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var terryTowleColor = getRandomColor();
      var style = '.' + 'terryTowle';
      var terryTowle = L.featureGroup([
          L.circleMarker([44.2789722, -72.4380985], {
            color: terryTowleColor
          }).bindPopup('<a href="/entities/terryTowle_530"><h3>Terry Towle</h3></a><p>Goddard College, 123 Pitkin Rd<br />Plainfield, VT<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(terryTowle);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="terryTowle.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="terryTowle.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var tonyTowleColor = getRandomColor();
      var style = '.' + 'tonyTowle';
      var tonyTowle = L.featureGroup([
          L.circleMarker([40.725691, -74.003343], {
            color: tonyTowleColor
          }).bindPopup('<a href="/entities/tonyTowle_534"><h3>Tony Towle</h3></a><p>100 Sullivan St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tonyTowle);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tonyTowle.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tonyTowle.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var TriQuarterlyColor = getRandomColor();
      var style = '.' + 'TriQuarterly';
      var TriQuarterly = L.featureGroup([
          L.circleMarker([42.057663, -87.6757803], {
            color: TriQuarterlyColor
          }).bindPopup('<a href="/entities/TriQuarterly_535"><h3>Tri-quarterly</h3></a><p>University Hall 101, Northwestern University<br />Evanston, IL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(TriQuarterly);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="TriQuarterly.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="TriQuarterly.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var TrigramPressColor = getRandomColor();
      var style = '.' + 'TrigramPress';
      var TrigramPress = L.featureGroup([
          L.circleMarker([51.5453142, -0.1305815], {
            color: TrigramPressColor
          }).bindPopup('<a href="/entities/TrigramPress_73"><h3>Trigram Press</h3></a><p>28 Camden Square<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(TrigramPress);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="TrigramPress.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="TrigramPress.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var gaelTurnbullColor = getRandomColor();
      var style = '.' + 'gaelTurnbull';
      var gaelTurnbull = L.featureGroup([
          L.circleMarker([52.108, -2.325], {
            color: gaelTurnbullColor
          }).bindPopup('<a href="/entities/gaelTurnbull_523"><h3>Gael Turnbull</h3></a><p>Bridge House, Stiffords Bridge<br />Cradley, Malvern, Worcestershire, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(gaelTurnbull);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="gaelTurnbull.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="gaelTurnbull.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var TurretBookshopColor = getRandomColor();
      var style = '.' + 'TurretBookshop';
      var TurretBookshop = L.featureGroup([
          L.circleMarker([51.5025436, -0.1927229], {
            color: TurretBookshopColor
          }).bindPopup('<a href="/entities/TurretBookshop_495"><h3>Turret Bookshop</h3></a><p>19 Kensington Church Walk Kensington<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(TurretBookshop);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="TurretBookshop.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="TurretBookshop.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var georgeTyshColor = getRandomColor();
      var style = '.' + 'georgeTysh';
      var georgeTysh = L.featureGroup([
          L.circleMarker([48.8711846, 2.3690354], {
            color: georgeTyshColor
          }).bindPopup('<a href="/entities/georgeTysh_531"><h3>George Tysh</h3></a><p>7 Rue Jacques Louvel-Tessier<br />Paris, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(georgeTysh);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="georgeTysh.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="georgeTysh.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var tamasUngvariColor = getRandomColor();
      var style = '.' + 'tamasUngvari';
      var tamasUngvari = L.featureGroup([
          L.circleMarker([47.5058551, 18.9952697], {
            color: tamasUngvariColor
          }).bindPopup('<a href="/entities/tamasUngvari_541"><h3>Tamas Ungvari</h3></a><p>Istenhegyi út 95<br />Budapest, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tamasUngvari);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tamasUngvari.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tamasUngvari.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var UnicornBookShopColor = getRandomColor();
      var style = '.' + 'UnicornBookShop';
      var UnicornBookShop = L.featureGroup([
          L.circleMarker([34.4128934, -119.8555916], {
            color: UnicornBookShopColor
          }).bindPopup('<a href="/entities/UnicornBookShop_386"><h3>Unicorn Book Shop</h3></a><p>905 Embarcadero del Norte Isla Vista<br />Santa Barbara, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(UnicornBookShop);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="UnicornBookShop.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="UnicornBookShop.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var UniversityOfMichiganPressColor = getRandomColor();
      var style = '.' + 'UniversityOfMichiganPress';
      var UniversityOfMichiganPress = L.featureGroup([
          L.circleMarker([42.274467, -83.7353679], {
            color: UniversityOfMichiganPressColor
          }).bindPopup('<a href="/entities/UniversityOfMichiganPress_118"><h3>University of Michigan Press</h3></a><p>615 E University Ave<br />Ann Arbor, MI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(UniversityOfMichiganPress);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="UniversityOfMichiganPress.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="UniversityOfMichiganPress.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var charlieVermontColor = getRandomColor();
      var style = '.' + 'charlieVermont';
      var charlieVermont = L.featureGroup([
          L.circleMarker([37.766471, -122.432503], {
            color: charlieVermontColor
          }).bindPopup('<a href="/entities/charlieVermont_546"><h3>Charlie Vermont</h3></a><p>69 Henry St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(charlieVermont);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="charlieVermont.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="charlieVermont.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([44.055137, -123.107412], {
            color: charlieVermontColor
          }).bindPopup('<a href="/entities/charlieVermont_546"><h3>Charlie Vermont</h3></a><p>956 W 4th Ave<br />Eugene, OR<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(charlieVermont);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="charlieVermont.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="charlieVermont.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([44.4112314, -123.9003916], {
            color: charlieVermontColor
          }).bindPopup('<a href="/entities/charlieVermont_546"><h3>Charlie Vermont</h3></a><p>Star Route 2, PO Box 5A<br />Tidewater, OR<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(charlieVermont);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="charlieVermont.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="charlieVermont.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([35.180885, -106.624782], {
            color: charlieVermontColor
          }).bindPopup('<a href="/entities/charlieVermont_546"><h3>Charlie Vermont</h3></a><p>8812 4th St NW<br />Los Ranchos de Albuquerque, NM<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(charlieVermont);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="charlieVermont.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="charlieVermont.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.765983, -122.450775], {
            color: charlieVermontColor
          }).bindPopup('<a href="/entities/charlieVermont_546"><h3>Charlie Vermont</h3></a><p>122 Carl St #4<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(charlieVermont);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="charlieVermont.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="charlieVermont.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnVernonColor = getRandomColor();
      var style = '.' + 'johnVernon';
      var johnVernon = L.featureGroup([
          L.circleMarker([40.7635925, -111.843474], {
            color: johnVernonColor
          }).bindPopup('<a href="/entities/johnVernon_547"><h3>John Vernon</h3></a><p>Department of English, University of Utah<br />Salt Lake City, UT<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnVernon);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnVernon.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnVernon.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var drewWagnonColor = getRandomColor();
      var style = '.' + 'drewWagnon';
      var drewWagnon = L.featureGroup([
          L.circleMarker([37.773579, -122.443659], {
            color: drewWagnonColor
          }).bindPopup('<a href="/entities/drewWagnon_550"><h3>Drew Wagnon</h3></a><p>1568 Fell St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(drewWagnon);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="drewWagnon.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="drewWagnon.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.7682169, -122.4474228], {
            color: drewWagnonColor
          }).bindPopup('<a href="/entities/drewWagnon_550"><h3>Drew Wagnon</h3></a><p>39 Downey St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(drewWagnon);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="drewWagnon.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="drewWagnon.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var paulWallaceColor = getRandomColor();
      var style = '.' + 'paulWallace';
      var paulWallace = L.featureGroup([
          L.circleMarker([51.4044215, -0.3522671], {
            color: paulWallaceColor
          }).bindPopup('<a href="/entities/paulWallace_564"><h3>Paul Wallace</h3></a><p>62d Palace Rd<br />East Molesey, Surrey, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(paulWallace);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="paulWallace.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="paulWallace.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var tomWalshColor = getRandomColor();
      var style = '.' + 'tomWalsh';
      var tomWalsh = L.featureGroup([
          L.circleMarker([33.840683, -118.180279], {
            color: tomWalshColor
          }).bindPopup('<a href="/entities/tomWalsh_577"><h3>Tom Walsh</h3></a><p>1057 E Freeland St<br />Long Beach, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tomWalsh);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tomWalsh.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tomWalsh.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var tonyWaltersColor = getRandomColor();
      var style = '.' + 'tonyWalters';
      var tonyWalters = L.featureGroup([
          L.circleMarker([41.78528, -87.596758], {
            color: tonyWaltersColor
          }).bindPopup('<a href="/entities/tonyWalters_566"><h3>Tony Walters</h3></a><p>6020 S Woodlawn Ave<br />Chicago, IL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tonyWalters);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tonyWalters.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tonyWalters.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var WarnerBrosColor = getRandomColor();
      var style = '.' + 'WarnerBros';
      var WarnerBros = L.featureGroup([
          L.circleMarker([34.1498977, -118.3410174], {
            color: WarnerBrosColor
          }).bindPopup('<a href="/entities/WarnerBros_127"><h3>Warner Bros.</h3></a><p>4000 Warner Blvd<br />Burbank, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(WarnerBros);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="WarnerBros.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="WarnerBros.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var nickWayteColor = getRandomColor();
      var style = '.' + 'nickWayte';
      var nickWayte = L.featureGroup([
          L.circleMarker([50.9910093, -3.1805421], {
            color: nickWayteColor
          }).bindPopup('<a href="/entities/nickWayte_557"><h3>Nick Wayte</h3></a><p>4 Heatherton Park House<br />Bradford-on-Tone, Taunton, Somerset, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(nickWayte);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="nickWayte.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="nickWayte.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnWeberColor = getRandomColor();
      var style = '.' + 'johnWeber';
      var johnWeber = L.featureGroup([
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
      var tedWeissColor = getRandomColor();
      var style = '.' + 'tedWeiss';
      var tedWeiss = L.featureGroup([
          L.circleMarker([42.0128, -73.9082], {
            color: tedWeissColor
          }).bindPopup('<a href="/entities/tedWeiss_451"><h3>Ted Weiss</h3></a><p>PO Box 287<br />Annandale-on-Hudson, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(tedWeiss);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="tedWeiss.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="tedWeiss.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var lewWelchColor = getRandomColor();
      var style = '.' + 'lewWelch';
      var lewWelch = L.featureGroup([
          L.circleMarker([37.874167, -122.51581], {
            color: lewWelchColor
          }).bindPopup('<a href="/entities/lewWelch_569"><h3>Lew Welch</h3></a><p>52 Buckelew St<br />Sausalito, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lewWelch);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lewWelch.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lewWelch.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var WellsFargoColor = getRandomColor();
      var style = '.' + 'WellsFargo';
      var WellsFargo = L.featureGroup([
          L.circleMarker([37.8684224, -122.2600599], {
            color: WellsFargoColor
          }).bindPopup('<a href="/entities/WellsFargo_585"><h3>Wells Fargo</h3></a><p>2460 Bancroft Way<br />Berkeley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(WellsFargo);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="WellsFargo.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="WellsFargo.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jannWennerColor = getRandomColor();
      var style = '.' + 'jannWenner';
      var jannWenner = L.featureGroup([
          L.circleMarker([37.7739641, -122.4021172], {
            color: jannWennerColor
          }).bindPopup('<a href="/entities/jannWenner_479"><h3>Jann Wenner</h3></a><p>746 Brannan St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jannWenner);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jannWenner.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jannWenner.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.779723, -122.393414], {
            color: jannWennerColor
          }).bindPopup('<a href="/entities/jannWenner_479"><h3>Jann Wenner</h3></a><p>625 3rd St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jannWenner);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jannWenner.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jannWenner.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var dickWertheimerColor = getRandomColor();
      var style = '.' + 'dickWertheimer';
      var dickWertheimer = L.featureGroup([
          L.circleMarker([37.7775232, -122.4214472], {
            color: dickWertheimerColor
          }).bindPopup('<a href="/entities/dickWertheimer_586"><h3>Dick Wertheimer</h3></a><p>341 Franklin St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(dickWertheimer);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="dickWertheimer.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="dickWertheimer.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var philipWhalenColor = getRandomColor();
      var style = '.' + 'philipWhalen';
      var philipWhalen = L.featureGroup([
          L.circleMarker([37.764744, -122.436015], {
            color: philipWhalenColor
          }).bindPopup('<a href="/entities/philipWhalen_551"><h3>Philip Whalen</h3></a><p>123 Beaver St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(philipWhalen);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="philipWhalen.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="philipWhalen.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var philipWhalenColor = getRandomColor();
      var style = '.' + 'philipWhalen';
      var philipWhalen = L.featureGroup([
          L.circleMarker([35.0485688, 135.7785475], {
            color: philipWhalenColor
          }).bindPopup('<a href="/entities/philipWhalen_570"><h3>Philip Whalen</h3></a><p>73 Higashikubota-Cho, Kita-Shirakitna, Sakyo-Ku<br />Kyoto, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(philipWhalen);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="philipWhalen.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="philipWhalen.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.7851789, -122.440323], {
            color: philipWhalenColor
          }).bindPopup('<a href="/entities/philipWhalen_570"><h3>Philip Whalen</h3></a><p>2427 Sutter St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(philipWhalen);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="philipWhalen.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="philipWhalen.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([35.0101327, 135.7160784], {
            color: philipWhalenColor
          }).bindPopup('<a href="/entities/philipWhalen_570"><h3>Philip Whalen</h3></a><p>Fukuoji-Cho 82, Ano, Ukyo-Ku<br />Kyoto, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(philipWhalen);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="philipWhalen.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="philipWhalen.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var mikeWiaterColor = getRandomColor();
      var style = '.' + 'mikeWiater';
      var mikeWiater = L.featureGroup([
          L.circleMarker([47.6043763, -122.3200291], {
            color: mikeWiaterColor
          }).bindPopup('<a href="/entities/mikeWiater_582"><h3>Mike Wiater</h3></a><p>922 E Alder St<br />Seattle, WA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(mikeWiater);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="mikeWiater.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="mikeWiater.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var johnWienersColor = getRandomColor();
      var style = '.' + 'johnWieners';
      var johnWieners = L.featureGroup([
          L.circleMarker([42.9526336, -78.824285], {
            color: johnWienersColor
          }).bindPopup('<a href="/entities/johnWieners_555"><h3>John Wieners</h3></a><p>3262 Main St<br />Buffalo, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnWieners);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnWieners.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnWieners.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.26932, -71.076395], {
            color: johnWienersColor
          }).bindPopup('<a href="/entities/johnWieners_555"><h3>John Wieners</h3></a><p>185 Eliot St<br />Milton, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnWieners);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnWieners.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnWieners.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.9796961, -78.8286325], {
            color: johnWienersColor
          }).bindPopup('<a href="/entities/johnWieners_555"><h3>John Wieners</h3></a><p>1302 Montrose Ave<br />Buffalo, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnWieners);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnWieners.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnWieners.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([42.616069, -70.668767], {
            color: johnWienersColor
          }).bindPopup('<a href="/entities/johnWieners_555"><h3>John Wieners</h3></a><p>General Delivery, Riverdale Station<br />Gloucester, MA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnWieners);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnWieners.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnWieners.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var WildHawthornPressColor = getRandomColor();
      var style = '.' + 'WildHawthornPress';
      var WildHawthornPress = L.featureGroup([
          L.circleMarker([57.9166667, -4.4166667], {
            color: WildHawthornPressColor
          }).bindPopup('<a href="/entities/WildHawthornPress_172"><h3>Wild Hawthorn Press</h3></a><p>Gledfield Farmhouse<br />Ardgay Ross-Shire, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(WildHawthornPress);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="WildHawthornPress.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="WildHawthornPress.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var jonathanWilliamsColor = getRandomColor();
      var style = '.' + 'jonathanWilliams';
      var jonathanWilliams = L.featureGroup([
          L.circleMarker([51.5581246, -0.174366], {
            color: jonathanWilliamsColor
          }).bindPopup('<a href="/entities/jonathanWilliams_565"><h3>Jonathan Williams</h3></a><p>2 Well Walk<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jonathanWilliams);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jonathanWilliams.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jonathanWilliams.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var francescaWilsonColor = getRandomColor();
      var style = '.' + 'francescaWilson';
      var francescaWilson = L.featureGroup([
          L.circleMarker([51.5448046, -0.161078], {
            color: francescaWilsonColor
          }).bindPopup('<a href="/entities/francescaWilson_563"><h3>Francesca Wilson</h3></a><p>5 Fellows Rd<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(francescaWilson);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="francescaWilson.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="francescaWilson.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var paulWinstanleyColor = getRandomColor();
      var style = '.' + 'paulWinstanley';
      var paulWinstanley = L.featureGroup([
          L.circleMarker([54.9898726, -1.6031816], {
            color: paulWinstanleyColor
          }).bindPopup('<a href="/entities/paulWinstanley_560"><h3>Paul Winstanley</h3></a><p>35 Grosvenor Pl<br />Newcastle-upon-Tyne, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(paulWinstanley);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="paulWinstanley.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="paulWinstanley.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var douglasWoolfColor = getRandomColor();
      var style = '.' + 'douglasWoolf';
      var douglasWoolf = L.featureGroup([
          L.circleMarker([47.2876334, -122.4076038], {
            color: douglasWoolfColor
          }).bindPopup('<a href="/entities/douglasWoolf_554"><h3>Douglas Woolf</h3></a><p>4420 Marine View Dr<br />Tacoma, WA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(douglasWoolf);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="douglasWoolf.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="douglasWoolf.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([19.4140114, -99.1601252], {
            color: douglasWoolfColor
          }).bindPopup('<a href="/entities/douglasWoolf_554"><h3>Douglas Woolf</h3></a><p>Apartado Postal 622<br />San Luis Potosí, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(douglasWoolf);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="douglasWoolf.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="douglasWoolf.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var benWrightColor = getRandomColor();
      var style = '.' + 'benWright';
      var benWright = L.featureGroup([
          L.circleMarker([32.848557, -117.270351], {
            color: benWrightColor
          }).bindPopup('<a href="/entities/benWright_548"><h3>Ben Wright</h3></a><p>1297 Coast Blvd<br />San Diego, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(benWright);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="benWright.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="benWright.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jamesWrightColor = getRandomColor();
      var style = '.' + 'jamesWright';
      var jamesWright = L.featureGroup([
          L.circleMarker([44.942639, -93.166487], {
            color: jamesWrightColor
          }).bindPopup('<a href="/entities/jamesWright_556"><h3>James Wright</h3></a><p>1572 Portland Ave<br />St Paul, MN<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jamesWright);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jamesWright.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jamesWright.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var martinWrightColor = getRandomColor();
      var style = '.' + 'martinWright';
      var martinWright = L.featureGroup([
          L.circleMarker([52.1484101, -0.4528783], {
            color: martinWrightColor
          }).bindPopup('<a href="/entities/martinWright_558"><h3>Martin Wright</h3></a><p>13 Ellis Rd<br />Bedford, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(martinWright);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="martinWright.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="martinWright.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([53.9468056, -1.0482982], {
            color: martinWrightColor
          }).bindPopup('<a href="/entities/martinWright_558"><h3>Martin Wright</h3></a><p>Derwent College, University of York, University Rd<br />Heslington, York, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(martinWright);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="martinWright.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="martinWright.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var willWrothColor = getRandomColor();
      var style = '.' + 'willWroth';
      var willWroth = L.featureGroup([
          L.circleMarker([44.032539, -123.075159], {
            color: willWrothColor
          }).bindPopup('<a href="/entities/willWroth_553"><h3>Will Wroth</h3></a><p>1175 E 25th Ave<br />Eugene, OR<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(willWroth);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="willWroth.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="willWroth.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.8653369, -122.274288], {
            color: willWrothColor
          }).bindPopup('<a href="/entities/willWroth_553"><h3>Will Wroth</h3></a><p>2337 Grant St B<br />Berkeley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(willWroth);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="willWroth.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="willWroth.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([37.822862, -122.253328], {
            color: willWrothColor
          }).bindPopup('<a href="/entities/willWroth_553"><h3>Will Wroth</h3></a><p>91 Rio Vista Ave<br />Oakland, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(willWroth);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="willWroth.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="willWroth.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var peterWymanColor = getRandomColor();
      var style = '.' + 'peterWyman';
      var peterWyman = L.featureGroup([
      ]);
      var israelYoungColor = getRandomColor();
      var style = '.' + 'israelYoung';
      var israelYoung = L.featureGroup([
          L.circleMarker([40.73113, -74.0017065], {
            color: israelYoungColor
          }).bindPopup('<a href="/entities/israelYoung_589"><h3>Israel Young</h3></a><p>321 Avenue of the Americas<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(israelYoung);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="israelYoung.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="israelYoung.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var neilYoungColor = getRandomColor();
      var style = '.' + 'neilYoung';
      var neilYoung = L.featureGroup([
          L.circleMarker([34.088262, -118.376774], {
            color: neilYoungColor
          }).bindPopup('<a href="/entities/neilYoung_590"><h3>Neil Young</h3></a><p>947 N La Cienega Blvd<br />Los Angeles, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(neilYoung);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="neilYoung.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="neilYoung.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jimZimmermanColor = getRandomColor();
      var style = '.' + 'jimZimmerman';
      var jimZimmerman = L.featureGroup([
          L.circleMarker([40.757338, -74.190211], {
            color: jimZimmermanColor
          }).bindPopup('<a href="/entities/jimZimmerman_594"><h3>Jim Zimmerman</h3></a><p>PO Box 7181, Roseville Station<br />Newark, NJ<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jimZimmerman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jimZimmerman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jimZimmerman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var patsyZolineColor = getRandomColor();
      var style = '.' + 'patsyZoline';
      var patsyZoline = L.featureGroup([
          L.circleMarker([37.956289, -122.5122781], {
            color: patsyZolineColor
          }).bindPopup('<a href="/entities/patsyZoline_595"><h3>Patsy Zoline</h3></a><p>15 Orange St<br />Larkspur, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(patsyZoline);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="patsyZoline.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="patsyZoline.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
          L.circleMarker([34.077978, -118.407105], {
            color: patsyZolineColor
          }).bindPopup('<a href="/entities/patsyZoline_595"><h3>Patsy Zoline</h3></a><p>624 N Cañon Dr<br />Beverly Hills, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(patsyZoline);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="patsyZoline.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="patsyZoline.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var brettDeBaryColor = getRandomColor();
      var style = '.' + 'brettDeBary';
      var brettDeBary = L.featureGroup([
          L.circleMarker([35.6766078, 139.5408166], {
            color: brettDeBaryColor
          }).bindPopup('<a href="/entities/brettDeBary_148"><h3>Brett de Bary</h3></a><p>〒181-0015<br />Tokyo, Mitaka, Osawa, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(brettDeBary);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="brettDeBary.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="brettDeBary.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var edVanAelstynColor = getRandomColor();
      var style = '.' + 'edVanAelstyn';
      var edVanAelstyn = L.featureGroup([
          L.circleMarker([44.0426093, -123.0970367], {
            color: edVanAelstynColor
          }).bindPopup('<a href="/entities/edVanAelstyn_544"><h3>Ed van Aelstyn</h3></a><p>1558 Lincoln St<br />Eugene, OR<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(edVanAelstyn);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="edVanAelstyn.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="edVanAelstyn.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var sarahVanGerbicColor = getRandomColor();
      var style = '.' + 'sarahVanGerbic';
      var sarahVanGerbic = L.featureGroup([
          L.circleMarker([51.5084846, -0.2137679], {
            color: sarahVanGerbicColor
          }).bindPopup('<a href="/entities/sarahVanGerbic_545"><h3>Sarah van Gerbic</h3></a><p>23 St James’s Gardens<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(sarahVanGerbic);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="sarahVanGerbic.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="sarahVanGerbic.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
    var allFeatures = L.featureGroup([
        angelica,
        brotherRobert,
        hildy,
        royEllen,
        AmsPress,
        wardAbbott,
        AbingtonBookshop,
        samAbrams,
        AcademyOfAmericanPoets,
        vitoHannibalAcconci,
        davidAdnopoz,
        clarissaAinley,
        davidAinley,
        donaldAllen,
        revMichaelAllen,
        AlternativePress,
        bruceAndrews,
        AngelHairBooks,
        alanAnsen,
        davidAntin,
        peterArdery,
        peterArmstrong,
        ArtNews,
        ArtAndLiterature,
        johnAshbery,
        AsphodelBookshop,
        AtlanticMonthly,
        AuerhahnPress,
        AvantGarde,
        margaretAvison,
        gordonBaldwin,
        rogerBarnard,
        elliotBarowitz,
        johnBarrell,
        donaldBarthelme,
        timothyBaum,
        billBeckman,
        michaelBenedikt,
        josephBennett,
        larryBensky,
        asaBenveniste,
        drJosephBerke,
        billBerkson,
        maryBernstein,
        tedBerrigan,
        BetterBooks,
        billBissett,
        BlackSparrowPress,
        paulBlackburn,
        robinBlaser,
        BlueThumbRecords,
        ettaBlum,
        drNealBlumenfeld,
        robertBly,
        Bones,
        ebbeBorregaard,
        josephBottone,
        georgeBowering,
        jackBoyce,
        joeBrainard,
        richardBrautigan,
        edwinBrock,
        jamesBrodey,
        davidBromige,
        williamBronk,
        steveBrooks,
        billBrown,
        harveyBrown,
        lewisDeforestLewBrown,
        peteBrown,
        rebeccaBrown,
        michaelBrownstein,
        edwardBudowski,
        basilBunting,
        rudyBurckhardt,
        sarahBurgess,
        jimBurns,
        williamBurroughs,
        helenBurston,
        michaelButler,
        herbieButterfield,
        bobCaligy,
        bobCallahan,
        stephenACanada,
        CapeGoliard,
        ronaldCaplan,
        martinCarey,
        steveCarey,
        jimCarroll,
        paulCarroll,
        elizabethCase,
        cyrilCaster,
        mmeBlaiseCendrars,
        CenticoreBooks,
        joeCeravolo,
        hankChapin,
        frankCharlton,
        michaelChechik,
        stevieChusman,
        CityLights,
        johnClark,
        davidCoates,
        arthurCohen,
        robertDavidCohen,
        mrsMACohn,
        victorColeman,
        jackCollom,
        ColumbiaPictures,
        gwenConnet,
        bobCook,
        clarkCoolidge,
        shelleyCooper,
        andreiCordescu,
        cidCorman,
        gregoryCorso,
        jonathanCott,
        Cow,
        davidSusanCoxhead,
        CoyoteSJournal,
        leeCrabtree,
        timCraig,
        didiCrane,
        robertCreeley,
        Creem,
        judsonCrews,
        andrewCrozier,
        daveCunliffe,
        peterDavidson,
        donaldDavie,
        fieldingDawson,
        DaytonSRecords,
        allenDeLoach,
        billDebes,
        billDeemer,
        leeDejasu,
        Delta,
        edwinDenby,
        DesertReview,
        DesertReviewPress,
        Desmond,
        dianeDiprima,
        marthaDiamond,
        jimDine,
        franceDiot,
        tomDisch,
        williamDodds,
        edwardDorn,
        DoubledayCo,
        marcelDuchamp,
        louisDudek,
        Duende,
        richardDuerden,
        haroldDull,
        johnDunbar,
        robertDuncan,
        bobDylan,
        jMEdelstein,
        karenEdwards,
        robinEichele,
        EighthStreetBookshop,
        larryEigner,
        ElectricCircus,
        Elephant,
        EleventhFinger,
        kenwardElmslie,
        claytonEshleman,
        paulEvans,
        EvergreenReview,
        larryFagin,
        harryFainlight,
        ruthFainlight,
        jimAndJenneferFaris,
        curtisFaville,
        elaineFeinstein,
        dannyFields,
        FilmexInc,
        ianHamiltonFinlay,
        maxFinstein,
        tamFiofori,
        royFisher,
        jamesFitzsimmons,
        FolkloreCenter,
        FollettPublishingCo,
        robertFrancis,
        davidFranks,
        kathleenFraser,
        FreeUniversityOfNewYork,
        FrettedInstrumentSchool,
        geraldFreund,
        richFriedman,
        Fubbalo,
        maxineGadd,
        dickGallup,
        drDavidGerstein,
        gerryGilbert,
        jeffGiles,
        salvadorGiner,
        allenGinsberg,
        johnGiorno,
        danielaGioseffi,
        barbaraGladstone,
        GnomonPress,
        johnGodfrey,
        geraldAndNancyGoldberg,
        mikeGoldberg,
        charlesGoldman,
        Goldstein,
        richardGoldstein,
        larryGoodell,
        chrisGoodey,
        ronGorchov,
        GothamBookMart,
        pannaGrady,
        Grassroots,
        paulGreen,
        drReubenGreenberg,
        jonathanGreene,
        tedGreenwald,
        maxineGroffsky,
        redGrooms,
        lorenzGude,
        barbaraGuest,
        harryGuest,
        drummondHadley,
        johnHaines,
        barryHall,
        donaldHall,
        ianHamilton,
        HardwarePoetsOccasional,
        HarperSMagazine,
        billHarris,
        phyllisMasekHarris,
        robertHarris,
        jimHarrison,
        leeHarwood,
        davidHass,
        raoulHausmann,
        rondaHaynes,
        dRHazelton,
        Head,
        kateHeliczer,
        pieroHeliczer,
        HenryMSnyderCo,
        jeremyHilton,
        georgeHitchcock,
        abbieHoffman,
        hildegardeHoffmann,
        robertHogg,
        anselmHollo,
        HoltRinehartWinston,
        lindaHood,
        johnHopkins,
        tomHopkinson,
        litaHornick,
        michaelHorovitz,
        HouseOfBooksLtd,
        peterHoward,
        bobHowell,
        tedHughes,
        charlesRHulbeck,
        haroldHumes,
        IndicaBooksAndGallery,
        joanInglis,
        InternationalChristianUniversityJapan,
        IntransitToadPress,
        Intrepid,
        kennethIrby,
        gregIrons,
        johnJames,
        emmettJarrett,
        peterJay,
        Joglars,
        jasperJohns,
        ronaldJohnson,
        steveJonas,
        hettieJones,
        leroiJones,
        claudiaKane,
        allanKaplan,
        alexKatz,
        stevenKatz,
        bruceKawin,
        drWilliamKaye,
        tinaKean,
        Kearin,
        lionelKearns,
        kerryKelly,
        robertKelly,
        jackKerouac,
        johnKeys,
        georgeKimball,
        basilKing,
        galwayKinnell,
        billKinsinger,
        edwardKissam,
        erikKiviat,
        carolynKizer,
        kennethKoch,
        johnKoethe,
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
        philipLamantia,
        jonLandau,
        angelaLangfield,
        LanghamClinic,
        gerritLansing,
        kenLash,
        frankLauria,
        seymourAndMerloydLawrence,
        robertLax,
        michaelSeanLazarchuk,
        joeLeSueur,
        pLee,
        davidLehman,
        deniseLevertov,
        billLevy,
        lawrenceLieberman,
        frankLima,
        Lines,
        martinLink,
        louLipsitz,
        Listener,
        LocationPress,
        ronLoewinsohn,
        johnLogan,
        antonLong,
        LongHair,
        LonghairPhotography,
        timLongville,
        steveLovi,
        jimLowell,
        tomLowenstein,
        LuganoReview,
        shelleyLustig,
        steveLynton,
        lewisMacadams,
        bruceMaddox,
        geraldMalanga,
        ManRay,
        daveMarsh,
        johnMartin,
        pierreMartory,
        MarylandInstituteCollegeOfArt,
        tomMaschler,
        harryMathews,
        Matter,
        bernadetteMayer,
        johnMaynard,
        missyMaytag,
        cavanMccarthy,
        michaelMcclure,
        frankMccullough,
        jimAnnMcgarrell,
        tomMcgrath,
        donMclaughlin,
        duncanMcnaughton,
        davidMcreynolds,
        mathewMead,
        davidMeltzer,
        milanMelvin,
        wSMerwin,
        andyMeyer,
        larryMeyers,
        christopherMiddleton,
        kenAnnMikolowski,
        barryMiles,
        billAnnMills,
        stuartMills,
        pamelaMillward,
        teresaMitchell,
        davidMoberg,
        margaretSergioMondragon,
        jackieMonnier,
        stuartMontegomery,
        edwinMorgan,
        hedleyMorgan,
        carlMorse,
        Mother,
        MotherPress,
        ericMottram,
        wendyMulford,
        johnBernardMyers,
        Nadada,
        NationalCouncilOfArts,
        NemperorArtists,
        peterNevraumont,
        NewMeasure,
        NewYorkTimes,
        NewYorker,
        juliaNewman,
        lorineNiedecker,
        nilNil,
        patrickNolan,
        aliceNotley,
        jackieNoyes,
        hiltonObenzinger,
        charlesOlson,
        joelOppenheimer,
        edgarOwen,
        laurenOwen,
        maureenOwen,
        robertOwen,
        rochelleOwens,
        marianODwyer,
        frankOHara,
        PacificHighRecording,
        evePacker,
        ronPadgett,
        michaelPalmer,
        michaelPalmer,
        anitaPandolfi,
        ParisReview,
        thomasParkinson,
        oliviaPaschkoff,
        PeaceEyeBookshop,
        PeaceNews,
        simonPerchik,
        johnPerreault,
        jonathanPerry,
        stanPersky,
        chrisPeterson,
        donaldPhelps,
        jimPhilip,
        PhoenixBookShop,
        pascalPia,
        tomPickard,
        joePinelli,
        georgePitts,
        georgePlimpton,
        charlesPlymell,
        Poetmeat,
        Poetry,
        PoetryCenterSanFranciscoStateCollege,
        PoetryCenterYmhaYwha,
        PoetryReview,
        PoetsPress,
        Pogamoggan,
        billPresson,
        Puccetti,
        QuarterlyReviewOfLiterature,
        nicoleRabetaud,
        carlRakosi,
        RandomHouse,
        tomRaworth,
        davidRay,
        ellenRay,
        davidRRebmann,
        janetRedemann,
        louReed,
        karelReisz,
        Residu,
        Resuscitator,
        albertReneRicard,
        danRichter,
        drFrancisRigney,
        williamRivera,
        RobertsRecords,
        andrewCRobinson,
        RockefellerFoundation,
        RollingStone,
        luciaRose,
        davidRosenberg,
        sharonRosenberg,
        josieRosenfeld,
        timRoss,
        jeromeRothenberg,
        claudeRoyetJournoud,
        katieRuse,
        dDMrsRyanIii,
        leonardSahn,
        nikiDeSaintPhalle,
        davidSandberg,
        edSanders,
        aramSaroyan,
        lucySaroyan,
        davidSchaff,
        harrisSchiff,
        lindaSchjeldahl,
        peterSchjeldahl,
        georgeSchneeman,
        jamesSchuyler,
        nickSedgwick,
        alanSenauke,
        SerendipityBookshop,
        Set,
        paulShalny,
        davidShapiro,
        Sharkey,
        michaelShayer,
        williamDavidSherman,
        michaelSilverton,
        SimonAndSchuster,
        johnSinclair,
        joelSloman,
        garySnyder,
        normanSolomon,
        elaineSolow,
        alanSondheim,
        gilbertSorrentino,
        Spero,
        hardieStMartin,
        johnStaley,
        georgeStanley,
        johnStanton,
        georgeStarbuck,
        michaelSteiner,
        barbaraStone,
        bernardStone,
        markStrand,
        peteStuart,
        SunRa,
        Synapse,
        johnTemple,
        Thaloc,
        TheSixties,
        TheTenthMuse,
        TheWorld,
        jackThibeau,
        Things,
        billThomas,
        lorenzoThomas,
        johnThorpe,
        TiborDeNagy,
        jeanTinguely,
        Tish,
        charlesTomlinson,
        sotereTorregian,
        terryTowle,
        tonyTowle,
        TriQuarterly,
        TrigramPress,
        gaelTurnbull,
        TurretBookshop,
        georgeTysh,
        tamasUngvari,
        UnicornBookShop,
        UniversityOfMichiganPress,
        VanguardRecords,
        tomVeitch,
        charlieVermont,
        johnVernon,
        drewWagnon,
        dianeWakoski,
        anneWaldman,
        paulWallace,
        tomWalsh,
        tonyWalters,
        WarResistersLeague,
        andyWarhol,
        WarnerBros,
        lewisWarsh,
        nickWayte,
        johnWeber,
        hannahWeiner,
        donaldWeingarten,
        tedWeiss,
        lewWelch,
        WellsFargo,
        jannWenner,
        dickWertheimer,
        philipWhalen,
        philipWhalen,
        rogerWhelan,
        mikeWiater,
        lauranceWieder,
        johnWieners,
        WildDog,
        WildHawthornPress,
        eliWilentz,
        tedWilentz,
        jonathanWilliams,
        missGalenWilliams,
        bobWilson,
        francescaWilson,
        paulWinstanley,
        douglasWoolf,
        benWright,
        jamesWright,
        martinWright,
        willWroth,
        peterWyman,
        israelYoung,
        neilYoung,
        jimZimmerman,
        patsyZoline,
        louisZukofsky,
        reneeDeAntonio,
        brettDeBary,
        edVanAelstyn,
        sarahVanGerbic,
    ]);