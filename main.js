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
      results.push({
        id: i++,
        content: job.name,
        start: Date(job.submissionTime), 
        end: Date(job.completionTime)
      });
    };
  
    var items = new vis.DataSet(results);

    var options = {};

    var timeline = new vis.Timeline(container, items, options);

  }).catch(e => {
    throw(e);
  })
  
}

myjob();

