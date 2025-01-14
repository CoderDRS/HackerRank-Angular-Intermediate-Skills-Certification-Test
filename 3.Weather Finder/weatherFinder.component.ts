import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface CityWeather {
  name: string;
  weather: string;  // e.g. "12 degree"
  status: string[]; // e.g. ["Wind: 2Kmph", "Humidity: 5%"]
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: CityWeather[];
}

@Component({
  selector: 'weather-finder',
  templateUrl: './weatherFinder.component.html',
  styleUrls: ['./weatherFinder.component.scss']
})
export class WeatherFinder implements OnInit {

  // Holds the fetched weather record
  weatherDetails: CityWeather | null = null;

  // Controls visibility of the weather details div
  showWeatherDetails = false;

  // Controls visibility of the "No Results Found" div
  showNoResults = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Component initialization logic can go here if needed
  }

  /**
   * Invoked when user clicks on "Search" button.
   * Makes an HTTP GET request to fetch the weather details for the given city.
   */
  onSearch(cityName: string): void {
    // Reset previous state whenever searching anew
    this.weatherDetails = null;
    this.showWeatherDetails = false;
    this.showNoResults = false;

    // Edge case: if cityName is empty, we can skip calling the API
    // (Though problem states input will always be valid, but let's be safe)
    if (!cityName) {
      return;
    }

    const url = `https://jsonmock.hackerrank.com/api/weather?name=${cityName.trim()}`;
    this.http.get<ApiResponse>(url).subscribe({
      next: (response: ApiResponse) => {
        if (response.data && response.data.length > 0) {
          // Only the first record is rendered
          this.weatherDetails = response.data[0];
          this.showWeatherDetails = true;
          this.showNoResults = false;
        } else {
          // If API returns an empty array
          this.showWeatherDetails = false;
          this.showNoResults = true;
        }
      },
      error: () => {
        // On any error, treat it similarly to empty results
        this.showWeatherDetails = false;
        this.showNoResults = true;
      }
    });
  }

  /**
   * A small helper to retrieve numeric temperature from the "weather" field.
   * e.g. "12 degree" => number 12
   */
  get temperatureValue(): number {
    if (!this.weatherDetails?.weather) {
      return 0;
    }
    // weather string is in the format "<value> degree"
    // so split by space and parse the first chunk
    const [tempString] = this.weatherDetails.weather.split(' ');
    return parseInt(tempString, 10) || 0;
  }
}
