document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('studentName').value;
    var matric = parseFloat(document.getElementById('matricMarks').value);
    var fsc = parseFloat(document.getElementById('fscMarks').value);
    var entry = parseFloat(document.getElementById('entryTestMarks').value);

    var matricMax = parseFloat(document.getElementById('matricMax').value);
    var fscMax = parseFloat(document.getElementById('fscMax').value);
    var entryMax = parseFloat(document.getElementById('entryTestMax').value);

    // Calculate percentages
    var matricPercent = (matric / matricMax) * 100;
    var fscPercent = (fsc / fscMax) * 100;
    var entryPercent = (entry / entryMax) * 100;

    // Calculate weighted aggregate
    var aggregate = (matricPercent * 0.2) + (fscPercent * 0.3) + (entryPercent * 0.5);

    // Show result
    document.getElementById('result').innerHTML =
        '<strong>' + name + '</strong> Aggregate: ' + aggregate.toFixed(2) + '%';

    // Show eligibility alert
    if (aggregate > 60) {
        alert('You are eligible for admission');
    } else {
        alert('You are not eligible');
    }

    // Store student name and aggregate in localStorage
    var students = JSON.parse(localStorage.getItem('students')) || [];
    students.push({ name: name, aggregate: aggregate.toFixed(2) });
    localStorage.setItem('students', JSON.stringify(students));
}); 