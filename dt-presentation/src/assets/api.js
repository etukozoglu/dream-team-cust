async function getJson(url) {
    try {
        const response = await fetch(url);
        console.log("Response: ", response);
        if (!response.ok) {
            throw new Error('The response was not ok');
        }
        const data = await response.json();
        console.log("Data received: ", data);
        return data;
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

async function postJson(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        console.log("Response: ", response);
        if (response.ok) {
            console.log("Data received from server: ", response);
            return response;
        } else {
            console.error("Server responded with an error: ", response.status);
            return response.status;
        }
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}






export { getJson, postJson };