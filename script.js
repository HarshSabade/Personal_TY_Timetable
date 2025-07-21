// Monday schedule
const lectures = [
  {
    start: {h:9, m:0}, end: {h:10, m:0},
    subject: 'Communication Systems', faculty: 'Ayane Sir', location: 'Room 6304'
  },
  {
    start: {h:10, m:0}, end: {h:11, m:0},
    subject: 'Digital Signal Processing', faculty: 'Chopade Sir', location: 'Room 6304'
  },
  {
    start: {h:11, m:0}, end: {h:12, m:0},
    subject: 'MDM', faculty: 'TBD', location: 'Room 6204'
  },
  {
    start: {h:12, m:0}, end: {h:12, m:10},
    subject: 'Short Break', faculty: '', location: ''
  },
  {
    start: {h:12, m:10}, end: {h:13, m:10},
    subject: 'Remote Sensing and GIS', faculty: 'Rangari Sir', location: 'Room 9204'
  },
  {
    start: {h:13, m:10}, end: {h:14, m:10},
    subject: 'Lunch Break', faculty: '', location: ''
  },
  {
    start: {h:14, m:10}, end: {h:16, m:10},
    subject: 'DSP Lab', faculty: 'TBD', location: 'Room 6013'
  }
];

function nowBetween(start, end) {
  const now = new Date();
  const startD = new Date(now);
  startD.setHours(start.h, start.m, 0, 0);
  const endD = new Date(now);
  endD.setHours(end.h, end.m, 0, 0);
  return now >= startD && now < endD;
}

function displaySchedule() {
  const current = lectures.find(l => nowBetween(l.start, l.end));
  const upcoming = lectures.find(l => {
    const now = new Date();
    const startD = new Date(now);
    startD.setHours(l.start.h, l.start.m, 0, 0);
    return startD > now;
  });

  document.getElementById('current-lecture-info').textContent =
    current ? `${current.subject} with ${current.faculty} in ${current.location}` : 'No current lecture.';
  document.getElementById('upcoming-lecture-info').textContent =
    upcoming ? `${upcoming.subject} with ${upcoming.faculty} in ${upcoming.location}` : 'No upcoming lectures.';
}

function showTodaysSchedule() {
  const list = document.getElementById('todays-lectures-list');
  list.innerHTML = '';
  lectures.forEach(l => {
    list.innerHTML += `<li>${String(l.start.h).padStart(2,'0')}:${String(l.start.m).padStart(2,'0')} - ` +
                      `${String(l.end.h).padStart(2,'0')}:${String(l.end.m).padStart(2,'0')} — ` +
                      `${l.subject} with ${l.faculty} in ${l.location}</li>`;
  });
  document.getElementById('todays-schedule').style.display = 'block';
}

window.onload = displaySchedule;
