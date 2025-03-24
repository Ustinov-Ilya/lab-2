import _ from 'lodash';

// BEGIN
export const getNormalization = (lesson) => {
  let lessonName = lesson.name;
  lesson.name = _.capitalize(lessonName);
  let lessonDescription = lesson.description;
  lesson.description = lessonDescription.toLowerCase();
  return lesson;
}

export default getNormalization;
  // END