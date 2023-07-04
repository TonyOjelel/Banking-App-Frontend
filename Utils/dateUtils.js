// dateUtils.js
export function formatDate(date) {
  // Format the date using a library like Moment.js or vanilla JavaScript Date methods
  // Example:
  // return moment(date).format('YYYY-MM-DD');
  return new Date(date).toLocaleDateString();
}

// Additional utility functions for date operations, parsing, etc.
