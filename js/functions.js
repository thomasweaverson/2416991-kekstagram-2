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

const checkMeeting = (startTime, endTime, meetingTime, meetingDuration) => {
  const workDayStart = {
    hours: Number(startTime.split(':')[0]),
    minutes: Number(startTime.split(':')[1]),
  };

  const workDayEnd = {
    hours: Number(endTime.split(':')[0]),
    minutes: Number(endTime.split(':')[1]),
  };

  const meetingStart = {
    hours: Number(meetingTime.split(':')[0]),
    minutes: Number(meetingTime.split(':')[1]),
  };

  const meetingEndMinutes = (meetingStart.minutes + meetingDuration) % 60;

  const meetingEndHours = meetingStart.hours + Math.floor((meetingDuration + meetingStart.minutes) / 60);

  const meetingEnd = {
    hours: meetingEndHours,
    minutes: meetingEndMinutes,
  };

  const isMeetingStartBeforeWorkDayStart = meetingStart.hours < workDayStart.hours || (meetingStart.hours === workDayStart.hours && meetingStart.minutes < workDayStart.minutes);
  const isMeetingEndAfterWorkDayEnd = meetingEnd.hours > workDayEnd.hours || (meetingEnd.hours === workDayEnd.hours && meetingEnd.minutes > workDayEnd.minutes);

  return !isMeetingStartBeforeWorkDayStart && !isMeetingEndAfterWorkDayEnd;
};


isUnderMaxLength('hello', 5);
isPalindrome('race car');
parsePositiveInteger('123');
checkMeeting('09:00', '18:00', '11:00', 60);
