# Angular: Paginated Football Competitions

Create a **Football Competitions** component to display a paginated list of football competitions and their details. The component must meet the following requirements:

## Functionalities
1. **Fetch Competitions Data**  
   Make an API `GET` request to the following URL to retrieve competition data:  
   ```
   https://jsonmock.hackerrank.com/api/football_competitions?page=<pageNumber>
   ```
   Replace `<pageNumber>` with the page number to fetch data for.

   The API response contains:
   - `total_pages`: Number of available pages.
   - `data`: An array of competition records for the requested page.  
   
   Example response:
   ```json
   {
       "page": "1",
       "per_page": 2,
       "total": 2,
       "total_pages": 1,
       "data": [
           {
               "name": "English Premier League",
               "country": "England",
               "year": 2016,
               "winner": "Chelsea",
               "runnerup": "Tottenham Hotspur"
           },
           {
               "name": "La Liga",
               "country": "Spain",
               "year": 2011,
               "winner": "Real Madrid",
               "runnerup": "FC Barcelona"
           }
       ]
   }
   ```

2. **Render Competitions List**  
   - On component initialization, fetch and display the data for page `1`.
   - Render the list of competitions in a `<ul>` element with `data-test-id="football-competitions"`.  
     Each competition should be displayed as:  
     ```
     <li>Competition {name} won by {winner} in year {year}</li>
     ```

3. **Pagination Buttons**  
   - Use the `total_pages` field from the API response to render pagination buttons in a `<section>` with `data-test-id="page-number-buttons"`.
   - Each button should correspond to a page number, e.g., `<button>1</button>`, `<button>2</button>`, etc.
   - Clicking a button should fetch and display data for the corresponding page.

## Expected HTML Structure
- **Pagination Buttons**  
  Rendered in:
  ```html
  <section data-test-id="page-number-buttons">
      <button>1</button>
      <button>2</button>
      ...
  </section>
  ```

- **Competitions List**  
  Rendered in:
  ```html
  <ul data-test-id="football-competitions">
      <li>Competition English Premier League won by Chelsea in year 2016</li>
      <li>Competition La Liga won by Real Madrid in year 2011</li>
      ...
  </ul>
  ```

## Testing Requirements
The following `data-test-id` attributes are mandatory for tests:
- `page-number-buttons` for the pagination section.
- `football-competitions` for the competitions list.

This component utilizes Angular's `HttpClient` module for API requests and dynamically renders competition data based on user interactions with the pagination buttons.
