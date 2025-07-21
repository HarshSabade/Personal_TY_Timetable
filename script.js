// Weekly schedule
const lecturesByDay = {
  Monday: [
    { start: { h: 9, m: 0 }, end: { h: 10, m: 0 }, subject: 'Communication Systems', faculty: 'Ayane Sir', location: 'Room 6304' },
    { start: { h: 10, m: 0 }, end: { h: 11, m: 0 }, subject: 'Digital Signal Processing', faculty: 'Chopade Sir', location: 'Room 6304' },
    { start: { h: 11, m: 0 }, end: { h: 12, m: 0 }, subject: 'MDM', faculty: 'TBD', location: 'Room 6204' },
    { start: { h: 12, m: 0 }, end: { h: 12, m: 10 }, subject: 'Short Break', faculty: '', location: '' },
    { start: { h: 12, m: 10 }, end: { h: 13, m: 10 }, subject: 'Remote Sensing and GIS', faculty: 'Rangari Sir', location: 'Room 9204' },
    { start: { h: 13, m: 10 }, end: { h: 14, m: 10 }, subject: 'Lunch Break', faculty: '', location: '' },
    { start: { h: 14, m: 10 }, end: { h: 16, m: 10 }, subject: 'DSP Lab', faculty: 'TBD', location: 'Room 6013' }
  ],
  Tuesday: [
    { start: { h: 9, m: 0 }, end: { h: 11, m: 0 }, subject: 'ERTOS Project', faculty: 'Patil Mam', location: 'Room 6310' },
    { start: { h: 11, m: 0 }, end: { h: 11, m: 10 }, subject: 'Short Break', faculty: '', location: '' },
    { start: { h: 11, m: 10 }, end: { h: 12, m: 10 }, subject: 'ERTOS', faculty: 'Patil Mam', location: 'Room 6310' },
    { start: { h: 12, m: 10 }, end: { h: 13, m: 10 }, subject: 'MDM', faculty: 'TBD', location: 'Room 6204' },
    { start: { h: 13, m: 10 }, end: { h: 14, m: 10 }, subject: 'Lunch Break', faculty: '', location: '' },
    { start: { h: 14, m: 10 }, end: { h: 16, m: 10 }, subject: 'AMC Lab', faculty: 'Gaadhe Sir', location: 'Room 6109' }
  ],
  Wednesday: [
    { start: { h: 11, m: 10 }, end: { h: 12, m: 10 }, subject: 'Communication Systems', faculty: 'Ayane Sir', location: 'Room 6310' },
    { start: { h: 12, m: 10 }, end: { h: 13, m: 10 }, subject: 'MDM', faculty: 'TBD', location: 'Room 6204' },
    { start: { h: 13, m: 10 }, end: { h: 14, m: 10 }, subject: 'Lunch Break', faculty: '', location: '' },
    { start: { h: 14, m: 10 }, end: { h: 16, m: 10 }, subject: 'CS Lab', faculty: 'Shirke Mam', location: 'Room 6306' },
    { start: { h: 16, m: 10 }, end: { h: 18, m: 10 }, subject: 'ERTOS', faculty: 'Patil Mam', location: 'Room 6315' }
  ],
  Thursday: [
    { start: { h: 9, m: 0 }, end: { h: 11, m: 0 }, subject: 'MDB Lab', faculty: 'Bhandarkar Mam', location: 'Room 6415' },
    { start: { h: 11, m: 0 }, end: { h: 11, m: 10 }, subject: 'Break', faculty: '', location: '' },
    { start: { h: 11, m: 10 }, end: { h: 13, m: 10 }, subject: 'MDM Lab', faculty: 'TBD', location: 'Room 6209' },
    { start: { h: 13, m: 10 }, end: { h: 14, m: 10 }, subject: 'Lunch Break', faculty: '', location: '' },
    { start: { h: 14, m: 10 }, end: { h: 16, m: 10 }, subject: 'AMC Lab', faculty: 'Gaadhe Sir', location: 'Room 6315' }
  ],
  Friday: [ // <-- Added this section
    { start: { h: 10, m: 0 }, end: { h: 11, m: 0 }, subject: 'Digital Signal Processing', faculty: 'Chopade Sir', location: 'Room 6304' },
    { start: { h: 11, m: 0 }, end: { h: 11, m: 10 }, subject: 'Break', faculty: '', location: '' },
    { start: { h: 11, m: 10 }, end: { h: 12, m: 10 }, subject: 'ERTOS', faculty: 'Patil Mam', location: 'Room 6310' },
    { start: { h: 12, m: 10 }, end: { h: 13, m: 10 }, subject: 'Remote Sensing and GIS', faculty: 'Rangari Sir', location: 'Room 9204' },
    { start: { h: 13, m: 10 }, end: { h: 14, m: 10 }, subject: 'Lunch Break', faculty: '', location: '' },
    { start: { h: 14, m: 10 }, end: { h: 16, m: 10 }, subject: 'CS Lab', faculty: 'Shirke Mam', location: 'Room 6508' }
  ]
};

// Check if current time is between start and end
function nowBetween(start, end) {
  const now = new Date();
  const s = new Date(now), e = new Date(now);
  s.setHours(start.h, start.m, 0, 0);
  e.setHours(end.h, end.m, 0, 0);
  return now >= s && now < e;
}

// Format a lecture line
function formatLecture(l) {
  return `${l.subject}${l.faculty ? ` – ${l.faculty}` : ''}${l.location ? ` – ${l.location}` : ''}`;
}

// Main function to show current, upcoming, and today's schedule
function displaySchedule() {
  const now = new Date();
  const todayName = now.toLocaleDateString('en-US', { weekday: 'long' });
  const lectures = lecturesByDay[todayName] || [];

  const current = lectures.find(l => nowBetween(l.start, l.end));
  const upcoming = lectures.find(l => {
    const s = new Date(now);
    s.setHours(l.start.h, l.start.m, 0, 0);
    return s > now;
  });

  document.getElementById('current-lecture-info').textContent =
    current ? formatLecture(current) : 'No current lecture.';

  document.getElementById('upcoming-lecture-info').textContent =
    upcoming ? formatLecture(upcoming) : 'No upcoming lectures today.';

  showTodaysSchedule(); // Auto-show schedule for today
}

// Show full list of today's lectures
function showTodaysSchedule() {
  const now = new Date();
  const todayName = now.toLocaleDateString('en-US', { weekday: 'long' });
  const lectures = lecturesByDay[todayName] || [];

  const scheduleSection = document.getElementById('todays-schedule');
  const lectureList = document.getElementById('todays-lectures-list');

  // Make the section visible
  scheduleSection.style.display = 'block';

  // Clear previous items
  lectureList.innerHTML = '';

  if (lectures.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'No lectures scheduled today.';
    lectureList.appendChild(li);
  } else {
    lectures.forEach(l => {
      const li = document.createElement('li');
      const startTime = `${String(l.start.h).padStart(2, '0')}:${String(l.start.m).padStart(2, '0')}`;
      const endTime = `${String(l.end.h).padStart(2, '0')}:${String(l.end.m).padStart(2, '0')}`;
      li.textContent = `${formatLecture(l)} (${startTime} - ${endTime})`;
      lectureList.appendChild(li);
    });
  }
}

// Refresh every minute
setInterval(displaySchedule, 60 * 1000);

// Initial display
window.onload = displaySchedule;
