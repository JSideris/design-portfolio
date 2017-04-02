/*
USAGE:

Call the buildProject function once per project. This will create the list of projects. Usage of buildProject is as follows:

buildProject(title, fullDescription, tags, projectMarkup, backgroundColor, activateFunction, deactivateFunction)

title - A short title for the project (not implemented yet).
fullDescription - A full description for the project to appear in a popup pane (not implemented yet).
tags - A list of string tags to allow the project to be categorized and filtered (not implemented yet).
projectMarkup - The project body. HTML as a string is supported, but you are encouraged to use DOThtml.
    For more information on DOThtml, refer to the following link: https://jsideris.github.io/DOThtml/
backgroundColor - The background color for this project. BG will transition smoothly to this color.
activateFunction - Called when user scrolls to this frame.
deactivateFunction - Called when user navigates away from frame.

There's also a special type of project: an image slide. Image slides are simply full-page images.
There is a special/easy way to implement image slides using DOThtml:

dot.imgslide(filename)

where filename is the name of the image file inside of the userimages directory (you don't need to include the userimages/ part).
*/



buildProject("", "", null, dot.imgslide("earth.jpg"));
buildProject("", "", null, dot.imgslide("mars.jpg"));
buildProject("", "", null, dot.imgslide("venus.jpg"));
buildProject("", "", null, dot.imgslide("mercury.jpg"));