

export const fetchApi =async (method:string, url:string)=>{
    const requestOptions = {
        method,
        headers: { "Content-Type": "application/json"},
      };
    return fetch(
        url,
        requestOptions
    ).then((response) => response.json())
}



export const getUniversitesFromApi = async () => {
    const results = await fetchApi(
      "GET",
      `http://universities.hipolabs.com/search?country=United+States`,
    );
    return results;
  };