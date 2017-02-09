/**
 * Created by sreey on 2/8/2017.
 */



    'use strict';

// Declare app level module which depends on views, and components
    angular.module('myApp', [])


        .controller('mycontroller', function ($scope, $http) {
            $scope.facepredlist = new Array();
            $scope.getpredictions = function () {
                var imageEntered = document.getElementById("txt_placeName").value;
                if (imageEntered != null && imageEntered != "") {
                    var collect = $http.get("https://api.clarifai.com/v1/tag?" +
                        "url=" + imageEntered +
                        "&access_token=qXyRMj3fNscH2XoFQbJ7XxmtS3CK6M");

                    collect.success(function (data) {
                        console.log(data);
                        for (var i = 0; i < 6; i++) {
                            $scope.facepredlist[i] = {
                                "name": data.results[0].result.tag.classes[i]

                            };

                        }


                    })
                    collect.error(function (data) {
                        alert("There was some error processing your request. Please try after some time.");
                    });
                }
            }
        });
