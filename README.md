# Student-registration-course

This README outlines the details of collaborating on this Ember application.
This is a demo of a feature I am struggling to make happen as I learn Ember. It is a dashboard for a student to view and register for courses. It displays courses, course information, whether the student can register, a link to where they can register or update and lastly, I would like it display the status of their registration. This is where I need some help.<br>
######Some background: <br>
The unique identifier of the student who would be logged in to view this dashboard would not be stored in the url but in a different fashion (not important right now). But I am querying for just the registration information for fake student 1 to isolate data for the student.<br>
I am using mirage to fake out some data, so check that out if you like : ) <br>
There are three models course, student, and registration. Courses can have many students and registrations, students can have many courses and registrations, and a registration can only have 1 event and 1 student. <br>
######Goal: <br>
In the last column of the the table I want to display the registration status for the registration associated with the event that is populating that row for the given student, if it exists. <br>
####Big Thanks to anyone that takes a look, it is much appreciated!! 


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd student-registration-course`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

