import React, { Component } from 'react'

export default class SearchBar extends Component {
	render() {
		return (
			<section class="max-w-5xl p-6 mx-auto bg-white shadow-xl rounded-xl">
				<form class="flex mb-0 space-x-4">
					<div class="flex-1">
						<label class="sr-only" for="search"> Address </label>

						<input
							class="w-full h-12 text-sm border-gray-100 rounded-lg"
							id="search"
							placeholder="Search for a particular restaurant"
							type="text"
						/>
					</div>

					<div class="flex-1 hidden sm:block">
						<label class="sr-only" for="location"> Location </label>

						<select class="w-full h-12 text-sm border-gray-100 rounded-lg" id="location">
							<option>All regions</option>
							<option>East Midlands</option>
							<option>East of England</option>
							<option>London (Greater)</option>
						</select>
					</div>

					<div class="flex-1 hidden sm:block">
						<label class="sr-only" for="type"> Property Type </label>

						<select class="w-full h-12 text-sm border-gray-100 rounded-lg" id="type">
							<option>Any property</option>
							<option>Detached House</option>
							<option>Semi Detached House</option>
							<option>Bungalow</option>
							<option>Flat</option>
						</select>
					</div>

					<div>
						<button
							class="inline-flex items-center justify-center w-12 h-12 text-gray-600 bg-gray-100 rounded-lg"
							type="submit"
						>
							<span class="sr-only">Submit</span>

							<svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
								></path>
							</svg>
						</button>
					</div>
				</form>
			</section>
		)
	}
}


