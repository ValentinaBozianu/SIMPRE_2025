export const getFlowers = async () => {
  try {
    const response = await fetch("/api/records", {
      method: "GET",
    });
    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("Error fetching flowers:", error);
    return [];
  }
};

export const getFlowerById = async (id) => {
  try {
    const response = await fetch(`/api/records?id=${id}`, {
      method: "GET",
    });
    const data = await response.json();
    return data || null;
  } catch (error) {
    console.error("Error fetching flower:", error);
    return null;
  }
};

export const createFlower = async (flower) => {
  try {
    delete flower._id;
    const response = await fetch("/api/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(flower),
    });
    const data = await response.json();
    return data || null;
  } catch (error) {
    console.error("Error creating flower:", error);
    return null;
  }
};

export const updateFlower = async (flower) => {
  try {
    const response = await fetch("/api/records", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(flower),
    });
    const data = await response.json();
    return data || null;
  } catch (error) {
    console.error("Error updating flower:", error);
    return null;
  }
};

export const deleteFlower = async (id) => {
  try {
    const response = await fetch(`/api/records?id=${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data || null;
  } catch (error) {
    console.error("Error deleting flower:", error);
    return null;
  }
};