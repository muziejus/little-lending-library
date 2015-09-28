# tom-clark-address-book-sinatra

Joshua Kotin and [Moacir P. de Sá Pereira](http://moacir.com) are putting [Tom Clark](https://en.wikipedia.org/wiki/Tom_Clark_%28poet%29)’s address book online.

## Tech

The original version of this project was written in Rails, but it was
frustrating to work with, especially for something that was dealing with a
static dataset. It’s now running on [Sinatra](http://www.sinatrarb.com) and is,
after a fashion, a fork of
[muziejus/observation-counter](http://github.com/muziejus/observation-counter),
which itself is largely based on
[kripy/franks-famous](http://github.com/kripy/franks-famous) with important
updates and changes.

The data in the database (and/or sourced by flat files) is ignored by git because privacy, so it does not get uploaded. But the logic is available here.

The maps are made with [Leaflet.js](http://leafletjs.com).

## License
This project is CC BY-NC-SA, with the code being under the MIT License. See the LICENSE file for details.


