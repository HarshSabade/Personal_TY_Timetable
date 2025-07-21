// Monday lecture schedule for C2 batch
const lectures = [
  {
    time: '9:00 AM - 10:00 AM',
    subject: 'Communication Systems',
    faculty: 'Ayane Sir',
    location: 'Room 6304'
  },
  {
    time: '10:00 AM - 11:00 AM',
    subject: 'Digital Signal Processing',
    faculty: 'Chopade Sir',
    location: 'Room 6304'
  },
  {
    time: '11:00 AM - 12:00 PM',
    subject: 'MDM',
    faculty: 'TBD',
    location: 'Room 6204'
  },
  {
    time: '12:00 PM - 12:10 PM',
    subject: 'Short Break',
    faculty: '',
    location: ''
  },
  {
    time: '12:10 PM - 1:10 PM',
    subject: 'Remote Sensing and GIS',
    faculty: 'Rangari Sir',
    location: 'Room 9204'
  },
  {
    time: '1:10 PM - 2:10 PM',
    subject: 'Lunch Break',
    faculty: '',
    location: ''
  },
  {
    time: '2:10 PM - 4:10 PM',
    subject: 'DSP Lab',
    faculty: 'TBD',
    location: 'Room 6013'
  }
];

// Function to display the current and upcoming lecture
function displaySchedule() {
  const currentTime = new Date();
  const currentDay = new Date().toLocaleString('en-us', { weekday: 'long' });

  // Find the current and upcoming lecture
  const currentLecture = lectures.find(lecture => {
    const lectureStartTime = new Date(currentTime.toDateString() + ' ' + lecture.time.split(' - ')[0]);
    return lectureStartTime <= currentTime && lectureStartTime.getDay() === currentTime.getDay();
  });

  const upcomingLecture = lectures.find(lecture => {
    const lectureStartTime = new Date(currentTime.toDateString() + ' ' + lecture.time.split(' - ')[0]);
    return lectureStartTime > currentTime && lectureStartTime.getDay() === currentTime.getDay();
  });

  // Display current and upcoming lectures
  if (currentLecture) {
    document.getElementById('current-lecture-info').innerHTML = `${currentLecture.subject} with ${currentLecture.faculty} in ${currentLecture.location}`;
  } else {
    document.getElementById('current-lecture-info').innerHTML = 'No current lecture.';
  }

  if (upcomingLecture) {
    document.getElementById('upcoming-lecture-info').innerHTML = `${upcomingLecture.subject} with ${upcomingLecture.faculty} in ${upcomingLecture.location}`;
  } else {
    document.getElementById('upcoming-lecture-info').innerHTML = 'No upcoming lectures.';
  }
}

// Function to show today's full schedule when button is clicked
function showTodaysSchedule() {
  const listElement = document.getElementById('todays-lectures-list');
  listElement.innerHTML = '';

  lectures.forEach(lecture => {
    const listItem = document.createElement('li');
    listItem.textContent = `${lecture.time} - ${lecture.subject} with ${lecture.faculty} in ${lecture.location}`;
    listElement.appendChild(listItem);
  });

  document.getElementById('todays-schedule').style.display = 'block';
}

// Call displaySchedule function on page load
window.onload = displaySchedule;
