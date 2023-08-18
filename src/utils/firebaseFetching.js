import { collection, doc, getDoc, getDocs, where, query, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const productsCollection = collection(db, "products");
const categoriesCollection = collection(db, "categories");
const ordersCollection = collection(db, "orders");

toast.configure();

export const getAllProducts = async () => {
  try {
    const request = getDocs(productsCollection);
    const response = await request;
    const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return data;
  } catch (error) {
    toast.error("Error while fetching products.");
  }
};

export const getProductById = async (id) => {
  try {
    const docReference = doc(productsCollection, id);
    const request = getDoc(docReference);
    const response = await request;
    const data = response.data();
    return data;
  } catch (error) {
    toast.error("Error while fetching product details.");
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const categoryFilter = query(
      productsCollection,
      where("category", "==", category)
    );
    const request = getDocs(categoryFilter);
    const response = await request;
    const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return data;
  } catch (error) {
    toast.error("Error while fetching products by category.");
  }
};

export const getCategories = async () => {
  try {
    const request = getDocs(categoriesCollection);
    const response = await request;
    const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return data;
  } catch (error) {
    toast.error("Error while fetching categories.");
  }
};

export const addNewOrder = async (order) => {
  try {
    const request = addDoc(ordersCollection, order);
    const response = await request;
    const orderID = response.id;
    toast.success("Order added successfully.");
    return orderID;
  } catch (error) {
    toast.error("Error while adding order.");
  }
};
