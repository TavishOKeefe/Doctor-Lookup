import { Doctor } from './doctor.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#submitDoctorInfo').click(function(event) {
    event.preventDefault();
    let name = $('#name').val();
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let query = $('#query').val();

    let newDoctor = new Doctor();
    let promise = newDoctor.searchAPIforDoctorInfo(name, firstName, lastName, query);

    promise.then(function (response) {
      let body = JSON.parse(response);
      console.log(body);
      $('#output').text('');
      $('#output').append(body);

    });
  });
});
