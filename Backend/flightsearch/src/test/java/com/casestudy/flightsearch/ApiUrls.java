package com.casestudy.flightsearch;

public enum ApiUrls {
	
	BookingURL("/flights/"),
	BookingsURL("/flights?uid=");

	private String url;

	ApiUrls(String url) {
		this.url = url;
	}

	public String getUrl() {
		return url;
	}
	
	@Override
	public String toString() {
		return this.url;
	}
}


