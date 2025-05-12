import api from  "../utils/api"

export const getStudents = async () => {
    const response = await api.get("/api/students/");
    return response.data;
};