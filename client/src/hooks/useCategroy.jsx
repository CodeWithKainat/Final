import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  // function to get categories
  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        "https://ecommerce-website-t7lu43q0c-codewithkainat.vercel.app/api/v1/category/get-category"
      );
      setCategories(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}
