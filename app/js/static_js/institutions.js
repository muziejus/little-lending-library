    // static_js_start
      var AmsPressColor = getRandomColor();
      var style = '.' + 'AmsPress';
      var AmsPress = L.featureGroup([
          L.circleMarker([40.7340112, -73.9916569], {
            color: AmsPressColor
          }).bindPopup('<a href="/entities/AmsPress_587"><h3>AMS Press</h3></a><p>56 E 13th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(AmsPress);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="AmsPress.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="AmsPress.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var AbingtonBookshopColor = getRandomColor();
      var style = '.' + 'AbingtonBookshop';
      var AbingtonBookshop = L.featureGroup([
          L.circleMarker([38.9650253, -95.2359211], {
            color: AbingtonBookshopColor
          }).bindPopup('<a href="/entities/AbingtonBookshop_13"><h3>Abington Bookshop</h3></a><p>1015 Massachusetts St<br />Lawrence, KS<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(AbingtonBookshop);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="AbingtonBookshop.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="AbingtonBookshop.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var AcademyOfAmericanPoetsColor = getRandomColor();
      var style = '.' + 'AcademyOfAmericanPoets';
      var AcademyOfAmericanPoets = L.featureGroup([
          L.circleMarker([40.7779897, -73.9611711], {
            color: AcademyOfAmericanPoetsColor
          }).bindPopup('<a href="/entities/AcademyOfAmericanPoets_18"><h3>Academy of American Poets</h3></a><p>1078 Madison Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(AcademyOfAmericanPoets);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="AcademyOfAmericanPoets.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="AcademyOfAmericanPoets.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var AlternativePressColor = getRandomColor();
      var style = '.' + 'AlternativePress';
      var AlternativePress = L.featureGroup([
          L.circleMarker([42.346981, -83.079019], {
            color: AlternativePressColor
          }).bindPopup('<a href="/entities/AlternativePress_23"><h3>Alternative Press</h3></a><p>4339 Avery St<br />Detroit, MI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(AlternativePress);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="AlternativePress.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="AlternativePress.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var AngelHairBooksColor = getRandomColor();
      var style = '.' + 'AngelHairBooks';
      var AngelHairBooks = L.featureGroup([
          L.circleMarker([40.731867, -73.983213], {
            color: AngelHairBooksColor
          }).bindPopup('<a href="/entities/AngelHairBooks_15"><h3>Angel Hair Books</h3></a><p>PO Box 257 Peter Stuyvesant Station<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(AngelHairBooks);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="AngelHairBooks.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="AngelHairBooks.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var BetterBooksColor = getRandomColor();
      var style = '.' + 'BetterBooks';
      var BetterBooks = L.featureGroup([
          L.circleMarker([51.5137903, -0.1292597], {
            color: BetterBooksColor
          }).bindPopup('<a href="/entities/BetterBooks_48"><h3>Better Books</h3></a><p>92-94 Charing Cross Rd<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(BetterBooks);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="BetterBooks.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="BetterBooks.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var BlackSparrowPressColor = getRandomColor();
      var style = '.' + 'BlackSparrowPress';
      var BlackSparrowPress = L.featureGroup([
          L.circleMarker([34.0522342, -118.2436849], {
            color: BlackSparrowPressColor
          }).bindPopup('<a href="/entities/BlackSparrowPress_67"><h3>Black Sparrow Press</h3></a><p>PO Box 25603<br />Los Angeles, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(BlackSparrowPress);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="BlackSparrowPress.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="BlackSparrowPress.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var BlueThumbRecordsColor = getRandomColor();
      var style = '.' + 'BlueThumbRecords';
      var BlueThumbRecords = L.featureGroup([
          L.circleMarker([34.07962, -118.4116476], {
            color: BlueThumbRecordsColor
          }).bindPopup('<a href="/entities/BlueThumbRecords_513"><h3>Blue Thumb Records</h3></a><p>1427 N Cañon Dr<br />Beverly Hills, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(BlueThumbRecords);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="BlueThumbRecords.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="BlueThumbRecords.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var BonesColor = getRandomColor();
      var style = '.' + 'Bones';
      var Bones = L.featureGroup([
          L.circleMarker([40.788173, -73.969577], {
            color: BonesColor
          }).bindPopup('<a href="/entities/Bones_50"><h3>Bones</h3></a><p>53 W 89th St #2a<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Bones);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Bones.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Bones.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var CapeGoliardColor = getRandomColor();
      var style = '.' + 'CapeGoliard';
      var CapeGoliard = L.featureGroup([
          L.circleMarker([51.5461794, -0.1852274], {
            color: CapeGoliardColor
          }).bindPopup('<a href="/entities/CapeGoliard_262"><h3>Cape Goliard</h3></a><p>102 Fairhazel Gardens<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(CapeGoliard);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="CapeGoliard.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="CapeGoliard.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var CenticoreBooksColor = getRandomColor();
      var style = '.' + 'CenticoreBooks';
      var CenticoreBooks = L.featureGroup([
          L.circleMarker([42.2751568, -83.7335828], {
            color: CenticoreBooksColor
          }).bindPopup('<a href="/entities/CenticoreBooks_561"><h3>Centicore Books</h3></a><p>1229 S. University Ave<br />Ann Arbor, MI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(CenticoreBooks);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="CenticoreBooks.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="CenticoreBooks.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var CityLightsColor = getRandomColor();
      var style = '.' + 'CityLights';
      var CityLights = L.featureGroup([
          L.circleMarker([37.797601, -122.406579], {
            color: CityLightsColor
          }).bindPopup('<a href="/entities/CityLights_94"><h3>City Lights</h3></a><p>261 Columbus Ave<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(CityLights);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="CityLights.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="CityLights.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ColumbiaPicturesColor = getRandomColor();
      var style = '.' + 'ColumbiaPictures';
      var ColumbiaPictures = L.featureGroup([
          L.circleMarker([51.5147368, -0.1345577], {
            color: ColumbiaPicturesColor
          }).bindPopup('<a href="/entities/ColumbiaPictures_3"><h3>Columbia Pictures</h3></a><p>142 Wardour St Soho<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ColumbiaPictures);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ColumbiaPictures.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ColumbiaPictures.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var CowColor = getRandomColor();
      var style = '.' + 'Cow';
      var Cow = L.featureGroup([
          L.circleMarker([37.7862821, -122.3946421], {
            color: CowColor
          }).bindPopup('<a href="/entities/Cow_97"><h3>Cow</h3></a><p>31 Guy Pl<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Cow);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Cow.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Cow.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var CreemColor = getRandomColor();
      var style = '.' + 'Creem';
      var Creem = L.featureGroup([
          L.circleMarker([42.347176, -83.061984], {
            color: CreemColor
          }).bindPopup('<a href="/entities/Creem_365"><h3>Creem</h3></a><p>3729 Cass Ave<br />Detroit, MI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Creem);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Creem.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Creem.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var DaytonSRecordsColor = getRandomColor();
      var style = '.' + 'DaytonSRecords';
      var DaytonSRecords = L.featureGroup([
          L.circleMarker([40.7330079, -73.9909326], {
            color: DaytonSRecordsColor
          }).bindPopup('<a href="/entities/DaytonSRecords_155"><h3>Dayton’s Records</h3></a><p>824 Broadway<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(DaytonSRecords);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="DaytonSRecords.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="DaytonSRecords.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var DeltaColor = getRandomColor();
      var style = '.' + 'Delta';
      var Delta = L.featureGroup([
          L.circleMarker([45.4766305, -73.6087706], {
            color: DeltaColor
          }).bindPopup('<a href="/entities/Delta_134"><h3>Delta</h3></a><p>3476 Vendome Ave<br />Montreal, QC<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Delta);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Delta.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Delta.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var DoubledayCoColor = getRandomColor();
      var style = '.' + 'DoubledayCo';
      var DoubledayCo = L.featureGroup([
          L.circleMarker([40.7555122, -73.9748], {
            color: DoubledayCoColor
          }).bindPopup('<a href="/entities/DoubledayCo_158"><h3>Doubleday &amp; Co.</h3></a><p>277 Park Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(DoubledayCo);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="DoubledayCo.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="DoubledayCo.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var DuendeColor = getRandomColor();
      var style = '.' + 'Duende';
      var Duende = L.featureGroup([
          L.circleMarker([35.3069845, -106.4247468], {
            color: DuendeColor
          }).bindPopup('<a href="/entities/Duende_198"><h3>Duende</h3></a><p>PO Box 571<br />Placitas, NM<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Duende);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Duende.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Duende.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var EleventhFingerColor = getRandomColor();
      var style = '.' + 'EleventhFinger';
      var EleventhFinger = L.featureGroup([
          L.circleMarker([50.819165, -0.1278287], {
            color: EleventhFingerColor
          }).bindPopup('<a href="/entities/EleventhFinger_170"><h3>Eleventh Finger</h3></a><p>1 Charlotte St., Brighton<br />The City of Brighton and Hove, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(EleventhFinger);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="EleventhFinger.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="EleventhFinger.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var EvergreenReviewColor = getRandomColor();
      var style = '.' + 'EvergreenReview';
      var EvergreenReview = L.featureGroup([
          L.circleMarker([40.7335348, -73.9935615], {
            color: EvergreenReviewColor
          }).bindPopup('<a href="/entities/EvergreenReview_165"><h3>Evergreen Review</h3></a><p>80 University Pl<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(EvergreenReview);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="EvergreenReview.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="EvergreenReview.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var FollettPublishingCoColor = getRandomColor();
      var style = '.' + 'FollettPublishingCo';
      var FollettPublishingCo = L.featureGroup([
          L.circleMarker([41.8830664, -87.6524906], {
            color: FollettPublishingCoColor
          }).bindPopup('<a href="/entities/FollettPublishingCo_86"><h3>Follett Publishing Co.</h3></a><p>1010 W Washington Blvd<br />Chicago, IL<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(FollettPublishingCo);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="FollettPublishingCo.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="FollettPublishingCo.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var FubbaloColor = getRandomColor();
      var style = '.' + 'Fubbalo';
      var Fubbalo = L.featureGroup([
          L.circleMarker([42.955364, -78.8214035], {
            color: FubbaloColor
          }).bindPopup('<a href="/entities/Fubbalo_180"><h3>Fubbalo</h3></a><p>3400 Main St<br />Buffalo, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Fubbalo);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Fubbalo.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Fubbalo.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var GnomonPressColor = getRandomColor();
      var style = '.' + 'GnomonPress';
      var GnomonPress = L.featureGroup([
          L.circleMarker([37.753181, -122.410732], {
            color: GnomonPressColor
          }).bindPopup('<a href="/entities/GnomonPress_203"><h3>Gnomon Press</h3></a><p>1171 Alabama St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(GnomonPress);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="GnomonPress.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="GnomonPress.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var HeadColor = getRandomColor();
      var style = '.' + 'Head';
      var Head = L.featureGroup([
          L.circleMarker([41.8498151, -73.9301365], {
            color: HeadColor
          }).bindPopup('<a href="/entities/Head_257"><h3>Head</h3></a><p>Post Office<br />Staatsburg, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Head);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Head.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Head.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var HenryMSnyderCoColor = getRandomColor();
      var style = '.' + 'HenryMSnyderCo';
      var HenryMSnyderCo = L.featureGroup([
          L.circleMarker([40.7444077, -73.983565], {
            color: HenryMSnyderCoColor
          }).bindPopup('<a href="/entities/HenryMSnyderCo_500"><h3>Henry M. Snyder &amp; Co.</h3></a><p>440 Park Ave S<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(HenryMSnyderCo);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="HenryMSnyderCo.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="HenryMSnyderCo.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var HoltRinehartWinstonColor = getRandomColor();
      var style = '.' + 'HoltRinehartWinston';
      var HoltRinehartWinston = L.featureGroup([
          L.circleMarker([40.7556787, -73.9771774], {
            color: HoltRinehartWinstonColor
          }).bindPopup('<a href="/entities/HoltRinehartWinston_253"><h3>Holt Rinehart &amp; Winston</h3></a><p>383 Madison Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(HoltRinehartWinston);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="HoltRinehartWinston.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="HoltRinehartWinston.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var HouseOfBooksLtdColor = getRandomColor();
      var style = '.' + 'HouseOfBooksLtd';
      var HouseOfBooksLtd = L.featureGroup([
          L.circleMarker([40.7641974, -73.9709453], {
            color: HouseOfBooksLtdColor
          }).bindPopup('<a href="/entities/HouseOfBooksLtd_112"><h3>House of Books Ltd</h3></a><p>18 E 60th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(HouseOfBooksLtd);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="HouseOfBooksLtd.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="HouseOfBooksLtd.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var JoglarsColor = getRandomColor();
      var style = '.' + 'Joglars';
      var Joglars = L.featureGroup([
          L.circleMarker([41.8410129, -71.397374], {
            color: JoglarsColor
          }).bindPopup('<a href="/entities/Joglars_95"><h3>Joglars</h3></a><p>292 Morris Ave<br />Providence, RI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Joglars);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Joglars.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Joglars.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var KulchurColor = getRandomColor();
      var style = '.' + 'Kulchur';
      var Kulchur = L.featureGroup([
          L.circleMarker([40.775302, -73.9612114], {
            color: KulchurColor
          }).bindPopup('<a href="/entities/Kulchur_229"><h3>Kulchur</h3></a><p>888 Park Ave<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Kulchur);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Kulchur.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Kulchur.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var LaceReviewColor = getRandomColor();
      var style = '.' + 'LaceReview';
      var LaceReview = L.featureGroup([
          L.circleMarker([40.7661173, -74.1895842], {
            color: LaceReviewColor
          }).bindPopup('<a href="/entities/LaceReview_593"><h3>Lace Review</h3></a><p>280 N 12th St<br />Newark, NJ<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(LaceReview);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="LaceReview.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="LaceReview.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var LanghamClinicColor = getRandomColor();
      var style = '.' + 'LanghamClinic';
      var LanghamClinic = L.featureGroup([
          L.circleMarker([51.5177712, -0.1478526], {
            color: LanghamClinicColor
          }).bindPopup('<a href="/entities/LanghamClinic_59"><h3>Langham Clinic</h3></a><p>37 Queen Anne St Marylebone<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(LanghamClinic);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="LanghamClinic.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="LanghamClinic.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var LinesColor = getRandomColor();
      var style = '.' + 'Lines';
      var Lines = L.featureGroup([
          L.circleMarker([40.751458, -73.969513], {
            color: LinesColor
          }).bindPopup('<a href="/entities/Lines_286"><h3>Lines</h3></a><p>321 E 45th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Lines);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Lines.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Lines.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var LuganoReviewColor = getRandomColor();
      var style = '.' + 'LuganoReview';
      var LuganoReview = L.featureGroup([
          L.circleMarker([45.9989046, 8.9453621], {
            color: LuganoReviewColor
          }).bindPopup('<a href="/entities/LuganoReview_291"><h3>Lugano Review</h3></a><p>Via Clemente Maraini 17A<br />Lugano, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(LuganoReview);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="LuganoReview.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="LuganoReview.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var MarylandInstituteCollegeOfArtColor = getRandomColor();
      var style = '.' + 'MarylandInstituteCollegeOfArt';
      var MarylandInstituteCollegeOfArt = L.featureGroup([
          L.circleMarker([39.307555, -76.621634], {
            color: MarylandInstituteCollegeOfArtColor
          }).bindPopup('<a href="/entities/MarylandInstituteCollegeOfArt_188"><h3>Maryland Institute College of Art</h3></a><p>1300 W Mt Royal Ave<br />Baltimore, MD<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(MarylandInstituteCollegeOfArt);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="MarylandInstituteCollegeOfArt.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="MarylandInstituteCollegeOfArt.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var MatterColor = getRandomColor();
      var style = '.' + 'Matter';
      var Matter = L.featureGroup([
          L.circleMarker([42.0224313, -73.9065313], {
            color: MatterColor
          }).bindPopup('<a href="/entities/Matter_312"><h3>Matter</h3></a><p>Bard College, 30 Campus Rd<br />Annandale-on-Hudson, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Matter);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Matter.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Matter.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var PacificHighRecordingColor = getRandomColor();
      var style = '.' + 'PacificHighRecording';
      var PacificHighRecording = L.featureGroup([
          L.circleMarker([37.77262, -122.420437], {
            color: PacificHighRecordingColor
          }).bindPopup('<a href="/entities/PacificHighRecording_446"><h3>Pacific High Recording</h3></a><p>60 Brady St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(PacificHighRecording);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="PacificHighRecording.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="PacificHighRecording.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var ParisReviewColor = getRandomColor();
      var style = '.' + 'ParisReview';
      var ParisReview = L.featureGroup([
          L.circleMarker([48.8504581, 2.3373432], {
            color: ParisReviewColor
          }).bindPopup('<a href="/entities/ParisReview_424"><h3>Paris Review</h3></a><p>17 Rue de Tournon<br />Paris, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(ParisReview);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="ParisReview.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="ParisReview.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var PhoenixBookShopColor = getRandomColor();
      var style = '.' + 'PhoenixBookShop';
      var PhoenixBookShop = L.featureGroup([
          L.circleMarker([40.7313345, -74.001914], {
            color: PhoenixBookShopColor
          }).bindPopup('<a href="/entities/PhoenixBookShop_431"><h3>Phoenix Book Shop</h3></a><p>18 Cornelia St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(PhoenixBookShop);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="PhoenixBookShop.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="PhoenixBookShop.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var QuarterlyReviewOfLiteratureColor = getRandomColor();
      var style = '.' + 'QuarterlyReviewOfLiterature';
      var QuarterlyReviewOfLiterature = L.featureGroup([
          L.circleMarker([42.0128, -73.9082], {
            color: QuarterlyReviewOfLiteratureColor
          }).bindPopup('<a href="/entities/QuarterlyReviewOfLiterature_450"><h3>Quarterly Review of Literature</h3></a><p>PO Box 287<br />Annandale-on-Hudson, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(QuarterlyReviewOfLiterature);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="QuarterlyReviewOfLiterature.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="QuarterlyReviewOfLiterature.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var SimonAndSchusterColor = getRandomColor();
      var style = '.' + 'SimonAndSchuster';
      var SimonAndSchuster = L.featureGroup([
          L.circleMarker([40.7590054, -73.9773439], {
            color: SimonAndSchusterColor
          }).bindPopup('<a href="/entities/SimonAndSchuster_483"><h3>Simon and Schuster</h3></a><p>630 5th Ave Rockefeller Center<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(SimonAndSchuster);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="SimonAndSchuster.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="SimonAndSchuster.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var SperoColor = getRandomColor();
      var style = '.' + 'Spero';
      var Spero = L.featureGroup([
          L.circleMarker([42.4045838, -83.1351679], {
            color: SperoColor
          }).bindPopup('<a href="/entities/Spero_488"><h3>Spero</h3></a><p>4821 John C Lodge Service Dr<br />Detroit, MI<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Spero);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Spero.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Spero.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var SynapseColor = getRandomColor();
      var style = '.' + 'Synapse';
      var Synapse = L.featureGroup([
          L.circleMarker([37.876438, -122.273891], {
            color: SynapseColor
          }).bindPopup('<a href="/entities/Synapse_234"><h3>Synapse</h3></a><p>1636 Martin Luther King Jr Way<br />Berkeley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Synapse);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Synapse.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Synapse.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var ThingsColor = getRandomColor();
      var style = '.' + 'Things';
      var Things = L.featureGroup([
          L.circleMarker([40.802399, -73.968866], {
            color: ThingsColor
          }).bindPopup('<a href="/entities/Things_347"><h3>Things</h3></a><p>308 W 107th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Things);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Things.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Things.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var TiborDeNagyColor = getRandomColor();
      var style = '.' + 'TiborDeNagy';
      var TiborDeNagy = L.featureGroup([
          L.circleMarker([40.7640557, -73.9756129], {
            color: TiborDeNagyColor
          }).bindPopup('<a href="/entities/TiborDeNagy_528"><h3>Tibor de Nagy</h3></a><p>29 W 57th St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(TiborDeNagy);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="TiborDeNagy.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="TiborDeNagy.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var TishColor = getRandomColor();
      var style = '.' + 'Tish';
      var Tish = L.featureGroup([
          L.circleMarker([49.2384223, -123.1629901], {
            color: TishColor
          }).bindPopup('<a href="/entities/Tish_525"><h3>Tish</h3></a><p>2527 W 37th Ave<br />Vancouver, BC<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Tish);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Tish.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Tish.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var TurretBookshopColor = getRandomColor();
      var style = '.' + 'TurretBookshop';
      var TurretBookshop = L.featureGroup([
          L.circleMarker([51.5025436, -0.1927229], {
            color: TurretBookshopColor
          }).bindPopup('<a href="/entities/TurretBookshop_495"><h3>Turret Bookshop</h3></a><p>19 Kensington Church Walk Kensington<br />London, <br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(TurretBookshop);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="TurretBookshop.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="TurretBookshop.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var WarResistersLeagueColor = getRandomColor();
      var style = '.' + 'WarResistersLeague';
      var WarResistersLeague = L.featureGroup([
          L.circleMarker([40.7114436, -74.0067453], {
            color: WarResistersLeagueColor
          }).bindPopup('<a href="/entities/WarResistersLeague_367"><h3>War Resisters League</h3></a><p>5 Beekman St<br />New York, NY<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(WarResistersLeague);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="WarResistersLeague.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="WarResistersLeague.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var WarnerBrosColor = getRandomColor();
      var style = '.' + 'WarnerBros';
      var WarnerBros = L.featureGroup([
          L.circleMarker([34.1498977, -118.3410174], {
            color: WarnerBrosColor
          }).bindPopup('<a href="/entities/WarnerBros_127"><h3>Warner Bros.</h3></a><p>4000 Warner Blvd<br />Burbank, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(WarnerBros);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="WarnerBros.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="WarnerBros.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var WellsFargoColor = getRandomColor();
      var style = '.' + 'WellsFargo';
      var WellsFargo = L.featureGroup([
          L.circleMarker([37.8684224, -122.2600599], {
            color: WellsFargoColor
          }).bindPopup('<a href="/entities/WellsFargo_585"><h3>Wells Fargo</h3></a><p>2460 Bancroft Way<br />Berkeley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(WellsFargo);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="WellsFargo.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="WellsFargo.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
    var allFeatures = L.featureGroup([
        AmsPress,
        AbingtonBookshop,
        AcademyOfAmericanPoets,
        AlternativePress,
        AngelHairBooks,
        ArtNews,
        ArtAndLiterature,
        AsphodelBookshop,
        AtlanticMonthly,
        AuerhahnPress,
        AvantGarde,
        BetterBooks,
        BlackSparrowPress,
        BlueThumbRecords,
        Bones,
        CapeGoliard,
        CenticoreBooks,
        CityLights,
        ColumbiaPictures,
        Cow,
        CoyoteSJournal,
        Creem,
        DaytonSRecords,
        Delta,
        DesertReview,
        DesertReviewPress,
        DoubledayCo,
        Duende,
        EighthStreetBookshop,
        ElectricCircus,
        Elephant,
        EleventhFinger,
        EvergreenReview,
        FilmexInc,
        FolkloreCenter,
        FollettPublishingCo,
        FreeUniversityOfNewYork,
        FrettedInstrumentSchool,
        Fubbalo,
        GnomonPress,
        GothamBookMart,
        Grassroots,
        HardwarePoetsOccasional,
        HarperSMagazine,
        Head,
        HenryMSnyderCo,
        HoltRinehartWinston,
        HouseOfBooksLtd,
        IndicaBooksAndGallery,
        InternationalChristianUniversityJapan,
        IntransitToadPress,
        Intrepid,
        Joglars,
        Kulchur,
        LaceReview,
        LanghamClinic,
        Lines,
        Listener,
        LocationPress,
        LongHair,
        LonghairPhotography,
        LuganoReview,
        MarylandInstituteCollegeOfArt,
        Matter,
        Mother,
        MotherPress,
        Nadada,
        NationalCouncilOfArts,
        NemperorArtists,
        NewMeasure,
        NewYorkTimes,
        NewYorker,
        PacificHighRecording,
        ParisReview,
        PeaceEyeBookshop,
        PeaceNews,
        PhoenixBookShop,
        Poetmeat,
        Poetry,
        PoetryCenterSanFranciscoStateCollege,
        PoetryCenterYmhaYwha,
        PoetryReview,
        PoetsPress,
        Pogamoggan,
        QuarterlyReviewOfLiterature,
        RandomHouse,
        Residu,
        Resuscitator,
        RobertsRecords,
        RockefellerFoundation,
        RollingStone,
        SerendipityBookshop,
        Set,
        SimonAndSchuster,
        Spero,
        Synapse,
        Thaloc,
        TheSixties,
        TheTenthMuse,
        TheWorld,
        Things,
        TiborDeNagy,
        Tish,
        TriQuarterly,
        TrigramPress,
        TurretBookshop,
        UnicornBookShop,
        UniversityOfMichiganPress,
        VanguardRecords,
        WarResistersLeague,
        WarnerBros,
        WellsFargo,
        WildDog,
        WildHawthornPress,
    ]);
