function setSearchTitleToLS(data: string): void {
    localStorage.setItem("testCurrentSearchTitle", data);
}

export default setSearchTitleToLS;