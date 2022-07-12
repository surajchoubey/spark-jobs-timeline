var container = document.getElementById('visualization');

const myjob = async () => {

  fetch('http://localhost:5000/')
  .then(response => response.json())
  .then(jobs => {

    console.log(jobs);

    let i = 0;
    let results = [];

    jobs.reverse();
  
    for (var job of jobs) {

      var date1 = job.submissionTime.slice(0,23) + 'Z';
      var date2 = job.completionTime.slice(0,23) + 'Z';

      results.push({
        id: i++,
        content: job.name,
        start: date1, 
        end: date2
      });
    };

    console.log(results);
  
    var items = new vis.DataSet(results);

    var options = {};

    var timeline = new vis.Timeline(container, items, options);

  }).catch(e => {
    throw(e);
  })
  
}

myjob();

