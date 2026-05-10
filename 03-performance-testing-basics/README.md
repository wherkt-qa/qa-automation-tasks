# Performance Testing - Artillery & Chuck Norris API

This module demonstrates the practical application of load testing using the **Artillery** framework. The goal was to design a performance test suite for a public API, implementing realistic traffic phases and validating critical performance metrics.

## Project Objectives

Based on the coursework requirements, this project covers:
* **Load Phase Configuration**: Implementing specific testing types (e.g., arrival rates over a fixed duration).
* **Scenario Flow**: Designing complex flows involving both `GET` and `POST` requests.
* **Data-Driven Testing (Payload)**: Utilizing external `.csv` files to inject dynamic data into request bodies.
* **Metric Validation**: Setting up performance thresholds (SLOs) to monitor:
    * `http.response_time.p95` (verifying that 95% of requests are below a specific limit).
    * `http.response_time.max` (monitoring peak response times).
    * `vusers.failed` (ensuring 100% success rate under load).

## Testing Environment:

The performance tests are targeted at the [Chuck Norris Jokes API](https://api.chucknorris.io), selected from the public API directory.

*   **Target URL**: `https://api.chucknorris.io`
*   **Endpoints Tested**: 
    * `GET /jokes/random`
    * `POST /custom/jokes`

## 📁 Folder Structure:

*  📁 [**`artillery-scripts/`**](./artillery-scripts/): Contains the main configuration files (`API.yml`, `test.yml`) defining the load phases and scenarios.
*  📁 [**`test-data/`**](./test-data/): Stores external data sources (`keywords.csv`) used for payload injection.

---

## How to Run the Tests:

To execute the performance tests on your local machine, follow these steps:

1.  **Open the Project**: Navigate to the `03-performance-testing-basics` folder in your terminal.
2.  **Install Artillery**: If you haven't already, install the Artillery CLI globally:
```bash
npm install -g artillery
```
3. **Run the Test Script**: Execute the performance scenario using the following command:
```bash
artillery run artillery-scripts/API.yml
```
4. **View Results**: Artillery will provide real-time updates in the terminal. Once finished, it will display a summary report including latency, throughput, and any failed assertions defined in the 'ensure' section.
