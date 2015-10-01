# Little Lending Library

In graduate school, it would have been very useful to know what books my
classmates had in their libraries, so if I ever needed a text, I knew whom to
ask to maybe borrow it (assuming the university library’s copy was checked
out). And so, finally, this software, even though I’m not in grad school
anymore.

The basics are simple. There are three models, `Book`, `Loan`, and `User`.
`User`s have many `Book`s and `Loan`s, and `Book`s have many `Loan`s. Someone
signs up up for the library and imports their personal library (sadly, so far,
limited to books, and only uploadable one at a time via ISBN number). Then
another user can see the new user’s added books and request a loan. This is
done via the magic of email, and the two parties agree amongst themselves the
terms of the loan, etc. The basics (that it happened and that the book is not
yet returned) are tracked by the software. And that’s it.

## Tech

This is a nominal fork of my project
[muziejus/tom-clark-address-book-sinatra](https://github.com/muziejus/tom-clark-address-book-sinatra),
which I did just to keep the styles, etc. intact. The logic, of course, is all
different.

## License

The code is under the MIT License. See the LICENSE file for details.


