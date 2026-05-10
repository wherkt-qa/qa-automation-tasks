# JavaScript Programming Basics

This module serves as a solid foundation for test automation. Understanding DOM manipulation, asynchronous operations, and API interactions is essential for creating stable and efficient automated test suites.

## 🎯 Project Objectives

This section demonstrates my proficiency in:
*   **DOM Manipulation**: Dynamic element selection, traversal, and content updates.
*   **Event-Driven Logic**: Implementing listeners for clicks, inputs, and form submissions.
*   **Asynchronous JavaScript**: Managing timeouts, intervals, and handling the JS event loop.
*   **API Interactions**: Fetching data from RESTful services using Promises and handling HTTP errors.

## 📁 Folder Structure

### 📁 [dom-and-events](./dom-and-events)
Focuses on the basics of interacting with a web page.
*   **Key Tasks**: Gallery filtering, interactive lists, and event listeners for user actions.
*   **Skills**: `querySelector`, `addEventListener`, and dynamic CSS class toggling.

### 📁 [async-and-promises](./async-and-promises)
Showcases advanced JS concepts crucial for modern web applications.
*   **Color Switcher**: Demonstrates interval management with `setInterval` and `clearInterval`, including UI state handling (button disabling).
*   **Country Search**: A complex integration using the `fetch` API, handling Promises, and implementing **Debounce** to optimize network requests.
*   **Error Handling**: Implementing user notifications (Notiflix) for 404 responses from the API.


## ⚡ Key Skills for Automation

### Reliability & UX
The implementation of `disabled` states for buttons during active processes (like in the Color Switcher) prevents race conditions—a vital concept in preventing flaky automated tests.

### Network Optimization
The use of the `debounce` technique in the Search task shows an understanding of how to reduce server load and handle rapid user input, which is a common scenario in performance testing.

### API Testing Foundation
The `fetchCountries` logic demonstrates the ability to parse JSON responses and map backend data to frontend components, forming the basis for API automation.

---

## 🚀 How to Review
Since these tasks were built using professional bundling tools (Parcel):
1.  **Code Inspection**: Navigate to the `js/` folders within each sub-module to review the logic and clean code practices.
2.  **Logic Execution**: Open the `.html` files in a browser. While some styles/imports might require a local server to run perfectly, the underlying logic is clearly visible in the source files.
3.  **Console Logs**: Check the browser console for output demonstrations and error handling logic.
