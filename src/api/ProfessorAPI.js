import axios from "axios";

const BASE_URL = "https://kwangpyung.kro.kr/kwopgg/api/total/professor";

const ProfessorAPI = {
    search: async ({ professor = "", college = "", department = "" }) => {
        try {
            const response = await axios.get(`${BASE_URL}/search`, {
                params: { professor, college, department },
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching professor data:", error);
            throw error;
        }
    },

    detail: async (Professor_id) => {
        try {
            const response = await axios.get(`${BASE_URL}/detail`, {
                params: { Professor_id },
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching professor detail:", error);
            throw error;
        }
    },

    evaluate: async (evaluationData) => {
        try {
            const response = await axios.post(`${BASE_URL}/evaluate`, evaluationData);
            return response.data;
        } catch (error) {
            console.error("Error submitting evaluation:", error);
            throw error;
        }
    },

    add: async (professorData) => {
        try {
            const response = await axios.post(`${BASE_URL}/add`, professorData);
            return response.data;
        } catch (error) {
            console.error("Error adding professor:", error);
            throw error;
        }
    },

    modify: async (professorData) => {
        try {
            const response = await axios.put(`${BASE_URL}/modify`, professorData);
            return response.data;
        } catch (error) {
            console.error("Error modifying professor:", error);
            throw error;
        }
    },
};

export default ProfessorAPI;
