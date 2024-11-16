import axios from "axios";

const API_BASE_URL = "https://kwangpyung.kro.kr/kwopgg/api/classroom/room";

/**
 * Fetch a paginated list of classrooms.
 * @param {number} page
 * @returns {Promise<Object>}
 */
export const fetchRoomList = async (page) => {
    try {
        console.log("Requesting room list with page:", page);
        const response = await axios.post(`${API_BASE_URL}/list`, { page });
        console.log("Room list response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch room list:", error.message);
        throw error;
    }
};

/**
 * Fetch filtered classrooms based on criteria.
 * @param {Object} filters
 * @returns {Promise<Object>}
 */
export const fetchFilteredRooms = async (filters) => {
    try {
        console.log("Requesting filtered rooms with filters:", filters);
        const response = await axios.post(`${API_BASE_URL}/filter`, filters);
        console.log("Filtered rooms response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch filtered rooms:", error.message);
        throw error;
    }
};

/**
 * Fetch room reviews.
 * @param {string} building_name
 * @param {string} place_name
 * @returns {Promise<Object>}
 */
export const fetchRoomReview = async (building_name, place_name) => {
    try {
        console.log("Requesting room review for building:", building_name, "place:", place_name);
        const response = await axios.post(`${API_BASE_URL}/review`, {
            building_name,
            place_name,
        });
        console.log("Room review response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch room review:", error.message);
        throw error;
    }
};

/**
 * Fetch detailed information about a specific room.
 * @param {string} building_name
 * @param {string} place_name
 * @returns {Promise<Object>}
 */
export const fetchRoomDetails = async (building_name, place_name) => {
    try {
        console.log("Requesting room details for building:", building_name, "place:", place_name);
        const response = await axios.post(`${API_BASE_URL}/detail-page`, {
            building_name,
            place_name,
        });
        console.log("Room details response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch room details:", error.message);
        throw error;
    }
};

/**
 * Create a new review for a room.
 * @param {Object} reviewData
 * @returns {Promise<Object>}
 */
export const createReview = async (reviewData) => {
    try {
        console.log("Creating review with data:", reviewData);
        const response = await axios.post(`${API_BASE_URL}/review/create`, reviewData);
        console.log("Create review response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Failed to create review:", error.message);
        throw error;
    }
};

/**
 * Update an existing room review.
 * @param {Object} reviewData
 * @returns {Promise<Object>}
 */
export const updateReview = async (reviewData) => {
    try {
        console.log("Updating review with data:", reviewData);
        const response = await axios.post(`${API_BASE_URL}/review/update`, reviewData);
        console.log("Update review response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Failed to update review:", error.message);
        throw error;
    }
};

/**
 * Create a new room.
 * @param {Object} roomData
 * @returns {Promise<Object>}
 */
export const createRoom = async (roomData) => {
    try {
        console.log("Creating room with data:", roomData);
        const response = await axios.post(`${API_BASE_URL}/create`, roomData);
        console.log("Create room response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Failed to create room:", error.message);
        throw error;
    }
};

/**
 * Search for rooms based on building and capacity.
 * @param {string} building_title
 * @param {number} capacity_max
 * @returns {Promise<Object>}
 */
export const searchRooms = async (building_title, capacity_max) => {
    try {
        console.log("Searching rooms with building:", building_title, "and capacity max:", capacity_max);
        const response = await axios.post(`${API_BASE_URL}/search`, {
            building_title,
            capacity_max,
        });
        console.log("Search rooms response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Failed to search rooms:", error.message);
        throw error;
    }
};
