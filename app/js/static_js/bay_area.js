    // static_js_start
      var donaldAllenColor = getRandomColor();
      var style = '.' + 'donaldAllen';
      var donaldAllen = L.featureGroup([
          L.circleMarker([37.797992, -122.415747], {
            color: donaldAllenColor
          }).bindPopup('<a href="/entities/donaldAllen_2"><h3>Donald Allen</h3></a><p>1815 Jones St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(donaldAllen);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="donaldAllen.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="donaldAllen.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var AuerhahnPressColor = getRandomColor();
      var style = '.' + 'AuerhahnPress';
      var AuerhahnPress = L.featureGroup([
          L.circleMarker([37.7869181, -122.423313], {
            color: AuerhahnPressColor
          }).bindPopup('<a href="/entities/AuerhahnPress_5"><h3>Auerhahn Press</h3></a><p>1334 Franklin St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(AuerhahnPress);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="AuerhahnPress.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="AuerhahnPress.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var gordonBaldwinColor = getRandomColor();
      var style = '.' + 'gordonBaldwin';
      var gordonBaldwin = L.featureGroup([
          L.circleMarker([37.9093702, -122.6863733], {
            color: gordonBaldwinColor
          }).bindPopup('<a href="/entities/gordonBaldwin_77"><h3>Gordon Baldwin</h3></a><p>PO Box 454<br />Bolinas, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(gordonBaldwin);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="gordonBaldwin.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="gordonBaldwin.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var robinBlaserColor = getRandomColor();
      var style = '.' + 'robinBlaser';
      var robinBlaser = L.featureGroup([
          L.circleMarker([37.7994419, -122.4196275], {
            color: robinBlaserColor
          }).bindPopup('<a href="/entities/robinBlaser_44"><h3>Robin Blaser</h3></a><p>24 Allen St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(robinBlaser);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="robinBlaser.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="robinBlaser.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var drNealBlumenfeldColor = getRandomColor();
      var style = '.' + 'drNealBlumenfeld';
      var drNealBlumenfeld = L.featureGroup([
          L.circleMarker([37.8664441, -122.2633974], {
            color: drNealBlumenfeldColor
          }).bindPopup('<a href="/entities/drNealBlumenfeld_45"><h3>Dr. Neal Blumenfeld</h3></a><p>2380 Ellsworth St<br />Berkeley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(drNealBlumenfeld);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="drNealBlumenfeld.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="drNealBlumenfeld.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var richardBrautiganColor = getRandomColor();
      var style = '.' + 'richardBrautigan';
      var richardBrautigan = L.featureGroup([
          L.circleMarker([37.7827263, -122.4450533], {
            color: richardBrautiganColor
          }).bindPopup('<a href="/entities/richardBrautigan_65"><h3>Richard Brautigan</h3></a><p>2546 Geary Blvd<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(richardBrautigan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="richardBrautigan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="richardBrautigan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var lewisDeforestLewBrownColor = getRandomColor();
      var style = '.' + 'lewisDeforestLewBrown';
      var lewisDeforestLewBrown = L.featureGroup([
          L.circleMarker([37.761738, -122.451713], {
            color: lewisDeforestLewBrownColor
          }).bindPopup('<a href="/entities/lewisDeforestLewBrown_51"><h3>Lewis DeForest (Lew) Brown</h3></a><p>1214A Stanyan St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(lewisDeforestLewBrown);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="lewisDeforestLewBrown.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="lewisDeforestLewBrown.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var bobCallahanColor = getRandomColor();
      var style = '.' + 'bobCallahan';
      var bobCallahan = L.featureGroup([
          L.circleMarker([37.785219, -122.445358], {
            color: bobCallahanColor
          }).bindPopup('<a href="/entities/bobCallahan_418"><h3>Bob Callahan</h3></a><p>2907 Bush St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(bobCallahan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="bobCallahan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="bobCallahan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var CityLightsColor = getRandomColor();
      var style = '.' + 'CityLights';
      var CityLights = L.featureGroup([
          L.circleMarker([37.797601, -122.406579], {
            color: CityLightsColor
          }).bindPopup('<a href="/entities/CityLights_94"><h3>City Lights</h3></a><p>261 Columbus Ave<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(CityLights);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="CityLights.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="CityLights.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var andreiCordescuColor = getRandomColor();
      var style = '.' + 'andreiCordescu';
      var andreiCordescu = L.featureGroup([
          L.circleMarker([37.750027, -122.424471], {
            color: andreiCordescuColor
          }).bindPopup('<a href="/entities/andreiCordescu_92"><h3>Andrei Cordescu</h3></a><p>3779 25th St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(andreiCordescu);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="andreiCordescu.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="andreiCordescu.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var billDeemerColor = getRandomColor();
      var style = '.' + 'billDeemer';
      var billDeemer = L.featureGroup([
          L.circleMarker([37.782812, -122.449552], {
            color: billDeemerColor
          }).bindPopup('<a href="/entities/billDeemer_140"><h3>Bill Deemer</h3></a><p>65 Wood St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(billDeemer);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="billDeemer.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="billDeemer.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var robertDuncanColor = getRandomColor();
      var style = '.' + 'robertDuncan';
      var robertDuncan = L.featureGroup([
          L.circleMarker([37.7582541, -122.4251015], {
            color: robertDuncanColor
          }).bindPopup('<a href="/entities/robertDuncan_130"><h3>Robert Duncan</h3></a><p>3775 20th St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(robertDuncan);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="robertDuncan.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="robertDuncan.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var curtisFavilleColor = getRandomColor();
      var style = '.' + 'curtisFaville';
      var curtisFaville = L.featureGroup([
          L.circleMarker([37.855386, -122.248593], {
            color: curtisFavilleColor
          }).bindPopup('<a href="/entities/curtisFaville_194"><h3>Curtis Faville</h3></a><p>2835 Prince St<br />Berkeley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(curtisFaville);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="curtisFaville.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="curtisFaville.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var GnomonPressColor = getRandomColor();
      var style = '.' + 'GnomonPress';
      var GnomonPress = L.featureGroup([
          L.circleMarker([37.753181, -122.410732], {
            color: GnomonPressColor
          }).bindPopup('<a href="/entities/GnomonPress_203"><h3>Gnomon Press</h3></a><p>1171 Alabama St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(GnomonPress);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="GnomonPress.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="GnomonPress.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jonathanGreeneColor = getRandomColor();
      var style = '.' + 'jonathanGreene';
      var jonathanGreene = L.featureGroup([
          L.circleMarker([37.753181, -122.410732], {
            color: jonathanGreeneColor
          }).bindPopup('<a href="/entities/jonathanGreene_204"><h3>Jonathan Greene</h3></a><p>1171 Alabama St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jonathanGreene);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jonathanGreene.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jonathanGreene.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var robertHarrisColor = getRandomColor();
      var style = '.' + 'robertHarris';
      var robertHarris = L.featureGroup([
          L.circleMarker([37.761483, -122.428567], {
            color: robertHarrisColor
          }).bindPopup('<a href="/entities/robertHarris_256"><h3>Robert Harris</h3></a><p>582 Church St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(robertHarris);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="robertHarris.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="robertHarris.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var georgeHitchcockColor = getRandomColor();
      var style = '.' + 'georgeHitchcock';
      var georgeHitchcock = L.featureGroup([
          L.circleMarker([37.797213, -122.430162], {
            color: georgeHitchcockColor
          }).bindPopup('<a href="/entities/georgeHitchcock_247"><h3>George Hitchcock</h3></a><p>2808 Laguna St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(georgeHitchcock);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="georgeHitchcock.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="georgeHitchcock.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var kenLashColor = getRandomColor();
      var style = '.' + 'kenLash';
      var kenLash = L.featureGroup([
          L.circleMarker([37.947298, -122.312716], {
            color: kenLashColor
          }).bindPopup('<a href="/entities/kenLash_308"><h3>Ken Lash</h3></a><p>6171 McBryde Ave<br />Richmond, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(kenLash);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="kenLash.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="kenLash.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var martinLinkColor = getRandomColor();
      var style = '.' + 'martinLink';
      var martinLink = L.featureGroup([
          L.circleMarker([37.7862821, -122.3946421], {
            color: martinLinkColor
          }).bindPopup('<a href="/entities/martinLink_98"><h3>Martin Link</h3></a><p>31 Guy Pl<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(martinLink);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="martinLink.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="martinLink.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var LonghairPhotographyColor = getRandomColor();
      var style = '.' + 'LonghairPhotography';
      var LonghairPhotography = L.featureGroup([
          L.circleMarker([37.9060368, -122.5449763], {
            color: LonghairPhotographyColor
          }).bindPopup('<a href="/entities/LonghairPhotography_406"><h3>Longhair Photography</h3></a><p><br />Mill Valley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(LonghairPhotography);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="LonghairPhotography.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="LonghairPhotography.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var michaelMcclureColor = getRandomColor();
      var style = '.' + 'michaelMcclure';
      var michaelMcclure = L.featureGroup([
          L.circleMarker([37.7643334, -122.4466184], {
            color: michaelMcclureColor
          }).bindPopup('<a href="/entities/michaelMcclure_380"><h3>Michael McClure</h3></a><p>264 Downey St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(michaelMcclure);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="michaelMcclure.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="michaelMcclure.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var pamelaMillwardColor = getRandomColor();
      var style = '.' + 'pamelaMillward';
      var pamelaMillward = L.featureGroup([
          L.circleMarker([37.773402, -122.445054], {
            color: pamelaMillwardColor
          }).bindPopup('<a href="/entities/pamelaMillward_381"><h3>Pamela Millward</h3></a><p>1646 Fell St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(pamelaMillward);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="pamelaMillward.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="pamelaMillward.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var juliaNewmanColor = getRandomColor();
      var style = '.' + 'juliaNewman';
      var juliaNewman = L.featureGroup([
          L.circleMarker([37.755138, -122.398419], {
            color: juliaNewmanColor
          }).bindPopup('<a href="/entities/juliaNewman_404"><h3>Julia Newman</h3></a><p>983 Wisconsin St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(juliaNewman);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="juliaNewman.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="juliaNewman.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var PacificHighRecordingColor = getRandomColor();
      var style = '.' + 'PacificHighRecording';
      var PacificHighRecording = L.featureGroup([
          L.circleMarker([37.77262, -122.420437], {
            color: PacificHighRecordingColor
          }).bindPopup('<a href="/entities/PacificHighRecording_446"><h3>Pacific High Recording</h3></a><p>60 Brady St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(PacificHighRecording);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="PacificHighRecording.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="PacificHighRecording.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var PoetryCenterSanFranciscoStateCollegeColor = getRandomColor();
      var style = '.' + 'PoetryCenterSanFranciscoStateCollege';
      var PoetryCenterSanFranciscoStateCollege = L.featureGroup([
          L.circleMarker([37.7219699, -122.4794032], {
            color: PoetryCenterSanFranciscoStateCollegeColor
          }).bindPopup('<a href="/entities/PoetryCenterSanFranciscoStateCollege_447"><h3>Poetry Center, San Francisco State College</h3></a><p>1600 Holloway Ave<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(PoetryCenterSanFranciscoStateCollege);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="PoetryCenterSanFranciscoStateCollege.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="PoetryCenterSanFranciscoStateCollege.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var drFrancisRigneyColor = getRandomColor();
      var style = '.' + 'drFrancisRigney';
      var drFrancisRigney = L.featureGroup([
          L.circleMarker([37.7914121, -122.4328182], {
            color: drFrancisRigneyColor
          }).bindPopup('<a href="/entities/drFrancisRigney_477"><h3>Dr. Francis Rigney</h3></a><p>2235 Webster St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(drFrancisRigney);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="drFrancisRigney.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="drFrancisRigney.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
      var davidSchaffColor = getRandomColor();
      var style = '.' + 'davidSchaff';
      var davidSchaff = L.featureGroup([
          L.circleMarker([37.854981, -122.258374], {
            color: davidSchaffColor
          }).bindPopup('<a href="/entities/davidSchaff_520"><h3>David Schaff</h3></a><p>3009 Dana St #2<br />Berkeley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(davidSchaff);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="davidSchaff.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="davidSchaff.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var SerendipityBookshopColor = getRandomColor();
      var style = '.' + 'SerendipityBookshop';
      var SerendipityBookshop = L.featureGroup([
          L.circleMarker([37.8749702, -122.2689654], {
            color: SerendipityBookshopColor
          }).bindPopup('<a href="/entities/SerendipityBookshop_267"><h3>Serendipity Bookshop</h3></a><p>1790 Shattuck Ave<br />Berkeley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(SerendipityBookshop);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="SerendipityBookshop.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="SerendipityBookshop.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var garySnyderColor = getRandomColor();
      var style = '.' + 'garySnyder';
      var garySnyder = L.featureGroup([
          L.circleMarker([37.7997468, -122.4070413], {
            color: garySnyderColor
          }).bindPopup('<a href="/entities/garySnyder_485"><h3>Gary Snyder</h3></a><p>479 Green St #4<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(garySnyder);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="garySnyder.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="garySnyder.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var georgeStanleyColor = getRandomColor();
      var style = '.' + 'georgeStanley';
      var georgeStanley = L.featureGroup([
          L.circleMarker([37.8046285, -122.4130697], {
            color: georgeStanleyColor
          }).bindPopup('<a href="/entities/georgeStanley_494"><h3>George Stanley</h3></a><p>495 Francisco St Apt C<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(georgeStanley);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="georgeStanley.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="georgeStanley.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var SynapseColor = getRandomColor();
      var style = '.' + 'Synapse';
      var Synapse = L.featureGroup([
          L.circleMarker([37.876438, -122.273891], {
            color: SynapseColor
          }).bindPopup('<a href="/entities/Synapse_234"><h3>Synapse</h3></a><p>1636 Martin Luther King Jr Way<br />Berkeley, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(Synapse);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="Synapse.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="Synapse.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var TheTenthMuseColor = getRandomColor();
      var style = '.' + 'TheTenthMuse';
      var TheTenthMuse = L.featureGroup([
          L.circleMarker([37.755138, -122.398419], {
            color: TheTenthMuseColor
          }).bindPopup('<a href="/entities/TheTenthMuse_403"><h3>The Tenth Muse</h3></a><p>983 Wisconsin St<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(TheTenthMuse);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="TheTenthMuse.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="TheTenthMuse.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var jackThibeauColor = getRandomColor();
      var style = '.' + 'jackThibeau';
      var jackThibeau = L.featureGroup([
          L.circleMarker([37.79291, -122.4184279], {
            color: jackThibeauColor
          }).bindPopup('<a href="/entities/jackThibeau_533"><h3>Jack Thibeau</h3></a><p>1534 Clay #8<br />San Francisco, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(jackThibeau);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="jackThibeau.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="jackThibeau.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
      ]);
      var johnThorpeColor = getRandomColor();
      var style = '.' + 'johnThorpe';
      var johnThorpe = L.featureGroup([
          L.circleMarker([37.9093702, -122.6863733], {
            color: johnThorpeColor
          }).bindPopup('<a href="/entities/johnThorpe_540"><h3>John Thorpe</h3></a><p>PO Box 271<br />Bolinas, CA<br /></p><div class="btn-group btn-group-sm" role="group" aria-label="..."><button type="button" class="btn btn-default" onClick="map.removeLayer(johnThorpe);resetColor(style);"><span class="glyphicon glyphicon-remove"></span></button><button type="button" class="btn btn-default" onClick="johnThorpe.bringToFront()"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="btn btn-default" onClick="johnThorpe.bringToBack()"><span class="glyphicon glyphicon-arrow-down"></span></button></div>'),
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
    var allFeatures = L.featureGroup([
        donaldAllen,
        AuerhahnPress,
        gordonBaldwin,
        billBeckman,
        larryBensky,
        robinBlaser,
        drNealBlumenfeld,
        ebbeBorregaard,
        josephBottone,
        jackBoyce,
        richardBrautigan,
        jamesBrodey,
        davidBromige,
        steveBrooks,
        billBrown,
        lewisDeforestLewBrown,
        bobCallahan,
        steveCarey,
        CityLights,
        clarkCoolidge,
        andreiCordescu,
        Cow,
        CoyoteSJournal,
        didiCrane,
        robertCreeley,
        billDeemer,
        dianeDiprima,
        edwardDorn,
        richardDuerden,
        haroldDull,
        robertDuncan,
        larryFagin,
        curtisFaville,
        maxFinstein,
        allenGinsberg,
        GnomonPress,
        jonathanGreene,
        robertHarris,
        dRHazelton,
        georgeHitchcock,
        peterHoward,
        bobHowell,
        kennethIrby,
        gregIrons,
        edwardKissam,
        jamesKoller,
        richardKolmar,
        joanneKyger,
        philipLamantia,
        kenLash,
        martinLink,
        ronLoewinsohn,
        johnLogan,
        LonghairPhotography,
        lewisMacadams,
        michaelMcclure,
        donMclaughlin,
        davidMeltzer,
        milanMelvin,
        pamelaMillward,
        juliaNewman,
        nilNil,
        patrickNolan,
        PacificHighRecording,
        michaelPalmer,
        jonathanPerry,
        stanPersky,
        charlesPlymell,
        PoetryCenterSanFranciscoStateCollege,
        billPresson,
        drFrancisRigney,
        RollingStone,
        luciaRose,
        aramSaroyan,
        davidSchaff,
        SerendipityBookshop,
        garySnyder,
        georgeStanley,
        Synapse,
        TheTenthMuse,
        jackThibeau,
        johnThorpe,
        charlieVermont,
        drewWagnon,
        lewisWarsh,
        lewWelch,
        WellsFargo,
        jannWenner,
        dickWertheimer,
        philipWhalen,
        philipWhalen,
        WildDog,
        willWroth,
        patsyZoline,
    ]);
