import api from "./axios";


// PARCOURS
export const getParcours = async () => {
  const response = await api.get("/parcours");
  return response.data;
};

export const getParcoursById = async (id) => {
  const response = await api.get(`/parcours/${id}`);
  return response.data;
};


// PROJECTS
export const getProjects = async () => {
  const response = await api.get("/projects");
  return response.data;
};

export const getProjectById = async (id) => {
  const response = await api.get(`/projects/${id}`);
  return response.data;
};


// SERVICES
export const getServices = async () => {
  const response = await api.get("/services");
  return response.data;
};

export const getServiceById = async (id) => {
  const response = await api.get(`/services/${id}`);
  return response.data;
};


// BLOG
export const getBlogs = async () => {
  const response = await api.get("/blogs");
  return response.data;
};

export const getBlogById = async (id) => {
  const response = await api.get(`/blogs/${id}`);
  return response.data;
};



// CONTACT
export const sendContact = async (payload) => {
  const response = await api.post("/contacts", payload);
  return response.data;
};

export const getContacts = async () => {
  const response = await api.get("/contacts");
  return response.data;
};

export const getContactById = async (id) => {
  const response = await api.get('/contacts/${id}')
  return response.data
}