// Name: Mukwaya Lwere
// Class: CS 81 JavaScript
// Module 4 Assignment 4B: My Personal Data
// Date: 07/03/2025

// My Weekly Journal Data
// This array holds daily entries for one week, each with personal data points
const My_Weekly_Journal = [
  { day: "Monday", sleepHours: 6, screenTimeHours: 5, mood: "Focused", caffeineCups: 2, focusScore: 8 },
  { day: "Tuesday", sleepHours: 7, screenTimeHours: 6, mood: "Tired", caffeineCups: 3, focusScore: 6 },
  { day: "Wednesday", sleepHours: 5, screenTimeHours: 8, mood: "Stressed", caffeineCups: 4, focusScore: 5 },
  { day: "Thursday", sleepHours: 8, screenTimeHours: 4, mood: "Productive", caffeineCups: 1, focusScore: 9 },
  { day: "Friday", sleepHours: 6, screenTimeHours: 7, mood: "Distracted", caffeineCups: 3, focusScore: 6 },
  { day: "Saturday", sleepHours: 9, screenTimeHours: 3, mood: "Relaxed", caffeineCups: 0, focusScore: 7 },
  { day: "Sunday", sleepHours: 8, screenTimeHours: 2, mood: "Calm", caffeineCups: 1, focusScore: 8 }
];

// - The weekly predictions are as follows:
// - Based on the aforementioned data, Wednesday has the highest amount of screen time (8 hours); Thursday has the highest focus score (9).
// - Does drinking more coffee help? Not really; based on the data above, Wednesday had the least amount of focus but the highest caffeine intake.

// Function 1: Determine the day with the highest amount of screen time.
function findDayWithMostScreenTime() {
  // Review each day and save the one with the largest screen.Hours of Time
  return My_Weekly_Journal.reduce((maxDay, currentDay) =>
    currentDay.screenTimeHours > maxDay.screenTimeHours ? currentDay : maxDay
  );
}

// Function 2: Determine the weekly average for the number of hours spent sleeping.
function calculateAverageSleep() {
  // Total the number of hours spent sleeping.
  const totalSleep = My_Weekly_Journal.reduce((sum, entry) => sum + entry.sleepHours, 0);
  // To find the average, divide by the number of days.
  return (totalSleep / My_Weekly_Journal.length).toFixed(2);
}

// Function 3: Identify the week's most prevalent mood
function findMostFrequentMood() {
  const moodTracker = {};
  // Determine how frequently each mood occurs.
  My_Weekly_Journal.forEach(entry => {
    moodTracker[entry.mood] = (moodTracker[entry.mood] || 0) + 1;
  });
  // Locate the mood with the highest number.
  return Object.entries(moodTracker).reduce((mostCommon, current) =>
    current[1] > mostCommon[1] ? current : mostCommon
  )[0];
}

// Comparing average focus scores with and without caffeine is function four.
function compareCaffeineToFocus() {
  // Keep days with and without caffeine separate.
  const daysWithCaffeine = My_Weekly_Journal.filter(entry => entry.caffeineCups > 0);
  const daysWithoutCaffeine = My_Weekly_Journal.filter(entry => entry.caffeineCups === 0);

  // An aid for figuring out the average focus score
  const averageFocus = entries =>
    entries.reduce((sum, entry) => sum + entry.focusScore, 0) / entries.length;

  // Round both averages to two decimal places.
  return {
    averageFocusWithCaffeine: averageFocus(daysWithCaffeine).toFixed(2),
    averageFocusWithoutCaffeine: averageFocus(daysWithoutCaffeine).toFixed(2)
  };
}

// Example Output: Record findings in the console
console.log(" The Day with Most Screen Time is:", findDayWithMostScreenTime());
console.log(" The Average Sleep Hours is:", calculateAverageSleep());
console.log(" The Most Frequent Mood is:", findMostFrequentMood());
console.log(" This is the Caffeine vs Focus Comparison:", compareCaffeineToFocus());