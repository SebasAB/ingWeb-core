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

export const fetchBooks = () => API.get("/books");

export const createBook = (newBook) => API.post("/books", newBook);

export const updateBook = (id, updatedBook) =>
  API.patch(`/books/${id}`, updatedBook);

export const deleteBook = (id) => axios.delete(`/books/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);

export const signUp = (formData) => API.post("/user/signup", formData);
