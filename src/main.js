import { Doctor } from './doctor.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#submitDoctorInfo').click(function(event) {
    event.preventDefault();
    $('.name1').text('');
    let name = $('#name').val();
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let query = $('#query').val();

    let newDoctor = new Doctor();
    let promise = newDoctor.searchAPIforDoctorInfo(name, firstName, lastName, query);

    promise.then(function (response) {
      let body = JSON.parse(response);
      if (body.data.length === 0){
        $('.name1').append("Sorry, but your search matched no results in the Portland, OR area.")
      } else {
        body.data.forEach(function(doctor){
        $('.name1').append('<ul><li>' + doctor.profile.slug + '<br>'+ 'Address in Portland, OR: ' + doctor.practices[0].visit_address.street + '<br>'+ 'Phone Number: ' + doctor.practices[0].phones[0].number + '<br>'+ doctor.profile.image_url + '<br>'+ 'Accepting new patients: ' + doctor.practices[0].accepts_new_patients + '</li><ul>');
        });
      }
    },  function(error) {
    $('.error').text(`There was an error processing your request: ${error.message}`);
  });
  });
});
