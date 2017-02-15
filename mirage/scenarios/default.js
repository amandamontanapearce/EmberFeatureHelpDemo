export default function(server) {
  let numberOfCourses = 5;
  let numberOfStudents = 7;
  server.createList('student', numberOfStudents);
  server.createList('course', numberOfCourses);

  server.create('student', {name: "me", email: "me@me.com", password: "a"})

  //create registrations
  server.create('registration', {courseId: 1, studentId: 1});
  server.create('registration', {courseId: 1, studentId: 2});
  server.create('registration', {courseId: 1, studentId: 6});
  server.create('registration', {courseId: 2, studentId: 1});
  server.create('registration', {courseId: 5, studentId: 1});

  //randomly populate courses with students
  for (let c = 1; c <= numberOfCourses; c++) {
    let numberOfStudentsForCourses = random(2, numberOfStudents);
    for (let s = 2; s <= numberOfStudentsForCourses; s++) {
      server.create('course-student', { courseId: c, studentId: s });
    }
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

