import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

interface Competition {
  name: string;
  country: string;
  year: number;
  winner: string;
  runnerup: string;
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Competition[];
}

@Component({
  selector: 'football-competitions',
  templateUrl: './footballCompetitions.component.html',
  styleUrls: ['./footballCompetitions.component.scss']
})
export class FootballCompetitions implements OnInit {
  competitions: Competition[] = [];
  totalPages: number = 0;
  currentPage: number = 1;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCompetitions(this.currentPage);
  }

  fetchCompetitions(page: number): void {
    const url = `https://jsonmock.hackerrank.com/api/football_competitions?page=${page}`;
    this.http.get<ApiResponse>(url).subscribe((response) => {
      this.competitions = response.data;
      this.totalPages = response.total_pages;
      this.currentPage = page;
    });
  }

  onPageClick(page: number): void {
    this.fetchCompetitions(page);
  }
}
