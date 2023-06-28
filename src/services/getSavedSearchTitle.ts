function getSavedSearchTitle(): string {
    const savedSearchTitle = localStorage.getItem("testCurrentSearchTitle") ? String(localStorage.getItem("testCurrentSearchTitle")) : "";
    return savedSearchTitle;
}

export default getSavedSearchTitle;