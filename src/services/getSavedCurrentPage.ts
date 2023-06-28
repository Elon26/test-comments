function getSavedCurrentPage(): number {
    const savedCurrentPage = localStorage.getItem("testCurrentPage") ? Number(localStorage.getItem("testCurrentPage")) : 0;
    return savedCurrentPage;
}

export default getSavedCurrentPage;