import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

//books routes

export const fetchBooks = () => API.get("/books");

export const createBook = (newBook) => API.post("/books", newBook);

export const updateBook = (id, updatedBook) =>
  API.patch(`/books/${id}`, updatedBook);

export const deleteBook = (id) => axios.delete(`/books/${id}`);

// auth routes

export const signIn = (formData) => API.post("/user/signin", formData);

export const signUp = (formData) => API.post("/user/signup", formData);

// challenges routes

export const fetchChallenges = (email) => API.get(`/challenges/${email}`);

export const createChallenge = (newChallenge) =>
  API.post("/challenges", newChallenge);

// shelfs routes

export const fetchShelfs = (email) => API.get(`/shelfs/${email}`);

export const createShelf = (shelfInfo) => API.post("/shelfs", shelfInfo);

export const updateShelf = (email, book) => API.patch(`/shelfs/${email}`, book);

export const deleteFromShelf = (email, book) =>
  API.delete(`/shelfs/${email}/${book}`);
