function setPageToLS(data: number): void {
    localStorage.setItem("testCurrentPage", data.toString());
}

export default setPageToLS;