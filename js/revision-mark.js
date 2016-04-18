$(document).ready(function ($) {

    var revisedDate = document.lastModified;
    var revise = $("<p>").text("This page revised: " + revisedDate);


    var createdBy = $("<p>").text("Site created and maintained by Tristan Graves");

    $("#footer-section").append(revise).append(createdBy);

});
