# Angular: Weather Finder

Create a **Weather Finder** component, as shown below:

![Weather Finder GIF](https://hrcdn.net/s3_pub/istreet-assets/I8LW4foLtjrt6jvB0RIv4w/weather-finder.gif)

---

## Component Functionalities

1. **Input Field**:
   - Initially empty.
   - Users can type a city name into this input box to search for weather details for this city.

2. **Search Button**:
   - Clicking the **Search** button should make an API GET call to the URL:
     ```
     https://jsonmock.hackerrank.com/api/weather?name=<name>
     ```
     - `<name>` is the city name entered into the text box.
     - For example, entering `Dallas` generates:
       ```
       https://jsonmock.hackerrank.com/api/weather?name=Dallas
       ```

3. **API Response**:
   - The API response contains a `data` field, which is an array of objects. Each object represents a weather record.
   - For example, the response for `Dallas`:
     ```json
     "data": [
       {
         "name": "Dallas",
         "weather": "12 degree",
         "status": [
           "Wind: 2Kmph",
           "Humidity: 5%"
         ]
       }
     ]
     ```
   - Only the **first record** in the array should be rendered in the component.

4. **Weather Details Rendering**:
   - Render the weather details inside:
     ```html
     <div data-test-id="weather-details"></div>
     ```
   - This `<div>` should **not** be rendered initially (before any API call is made).

   - **Temperature**:
     - Display the temperature value inside:
       ```html
       <span data-test-id="result-temperature"></span>
       ```
     - Display icons based on the temperature:
       - **Cold Icon**: `<i data-test-id="icon-cold"></i>` (if temperature < 20).
       - **Sunny Icon**: `<i data-test-id="icon-sunny"></i>` (if temperature >= 20).

   - **Wind and Humidity**:
     - Render wind information inside:
       ```html
       <div data-test-id="result-wind"></div>
       ```
     - Render humidity information inside:
       ```html
       <div data-test-id="result-humidity"></div>
       ```

5. **No Results Found**:
   - If the `data` array is empty, render:
     ```html
     <div data-test-id="no-result">No Results Found</div>
     ```
   - This `<div>` must **only** be visible when no records are returned for a city.
   - Initially, this `<div>` should not be rendered.

6. **Input Validity**:
   - Input field accepts **only text**.
   - Test cases will only provide valid input, so no validation is required.

---

## Test Data

- **Cities with Predefined Weather Conditions**:
  - `Dallas`: Cold
  - `Oakland`: Sunny

---

## Required Data-Test-Id Attributes

To pass the tests, ensure the following `data-test-id` attributes are included in the component:

1. Input Field: `app-input`
2. Search Button: `submit-button`
3. Weather Details: `weather-details`
4. Sunny Icon: `icon-sunny`
5. Cold Icon: `icon-cold`
6. Temperature Display: `result-temperature`
7. Wind Information: `result-wind`
8. Humidity Information: `result-humidity`
9. No Results Found Message: `no-result`

---

## Notes

- Do **not** change the `data-test-id` attributes, as they are used for test cases.
- Use the Angular **HttpClient** module for making API calls.
- Ensure the UI matches the provided GIF animation for functionality and design.
