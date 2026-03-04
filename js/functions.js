const isUnderMaxLength = (str, maxLength) => str.length <= maxLength;

const isPalindrome = (str) => {
  const modifiedStr = str.replaceAll(/\s/g, '').toLowerCase();
  const reversedStr = modifiedStr.split('').reverse().join('');
  return modifiedStr === reversedStr;
};

const parsePositiveInteger = (str) => {
  const parsed = str.toString().replaceAll(/\D/g, '');
  return parsed.length === 0 ? NaN : Number(parsed);
};

const toMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

const checkMeeting = (startTime, endTime, meetingTime, meetingDuration) => {
  const workStart = toMinutes(startTime);
  const workEnd = toMinutes(endTime);
  const meetingStart = toMinutes(meetingTime);
  const meetingEnd = meetingStart + meetingDuration;

  return meetingStart >= workStart && meetingEnd <= workEnd;
};


isUnderMaxLength('hello', 5);
isPalindrome('race car');
parsePositiveInteger('123');
checkMeeting('09:00', '18:00', '11:00', 60);
