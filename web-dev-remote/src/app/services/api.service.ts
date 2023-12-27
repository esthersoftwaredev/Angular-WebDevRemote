import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Job } from "../models/job";

@Injectable({
	providedIn: "root",
})
export class ApiService {
	private apiUrl = "https://monacodelisa-node-express.onrender.com/api";

	constructor(private http: HttpClient) {}

	getJobs() {
		return this.http.get<Job[]>(`${this.apiUrl}/jobs`);
	}
}
