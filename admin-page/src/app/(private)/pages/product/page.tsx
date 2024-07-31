"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { productSchema } from "./types/productSchemta";

type formInput = {
  name: string;
  description: string;
  richDescription: string;
  brand: string;
  price: number;
  category: string;
  countInStock: string;
  rating: string;
  numReview: string;
  isFeatured: string;
};

const ProductPage = () => {
  const { register, handleSubmit, watch } = useForm({
    resolver: yupResolver(productSchema),
  });
  const image = watch("image");
  console.log(image);

  const handleCreateProduct = async (data: formInput) => {
    console.log(data);
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmEyODY2Y2I1MjJiZTZkNWMxMGY1MGQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MjIzMDc5ODcsImV4cCI6MTcyMjM5NDM4N30.rSfIe-LPdN5uy-Y17CpynDu33_16Bp7hluRTEY8W3Yo";
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("richDescription", data.richDescription);
      formData.append("brand", data.brand);
      formData.append("price", data.price.toString());
      formData.append("category", data.category);
      formData.append("countInStock", data.countInStock.toString());
      formData.append("rating", data.rating.toString());
      formData.append("numReview", data.numReview.toString());
      formData.append("isFeatured", data.isFeatured);
      formData.append("image", watch("image")[0]);

      // const formData = {
      //   name: data.name,
      //   description: data.description,
      //   richDescription: data.richDescription,
      //   brand: data.brand,
      //   price: data.price,
      //   category: data.category,
      //   countInStock: data.countInStock,
      //   rating: data.rating,
      //   numReview: data.numReview,
      //   isFeatured: data.isFeatured,
      //   image: watch("image")[0],
      // };

      const response = await axios.post(
        "http://localhost:3001/api/v1/products",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response) {
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(handleCreateProduct)}>
        <div>
          <Label>name</Label>
          <Input {...register("name")} />
        </div>
        <div>
          <Label>description</Label>
          <Input {...register("description")} />
        </div>
        <div>
          <Label>richDescription</Label>
          <Input {...register("richDescription")} />
        </div>
        <div>
          <Label>image</Label>
          <Input type="file" {...register("image")} />
        </div>
        <div>
          <Label>brand</Label>
          <Input {...register("brand")} />
        </div>
        <div>
          <Label>price</Label>
          <Input {...register("price")} />
        </div>
        <div>
          <Label>category</Label>
          <Input {...register("category")} />
        </div>
        <div>
          <Label>countInStock</Label>
          <Input {...register("countInStock")} />
        </div>
        <div>
          <Label>rating</Label>
          <Input {...register("rating")} />
        </div>
        <div>
          <Label>numReview</Label>
          <Input {...register("numReview")} />
        </div>
        <div>
          <Label>isFeatured</Label>
          <Input {...register("isFeatured")} />
        </div>
        <Button type="submit">Create Product</Button>
      </form>
    </div>
  );
};

export default ProductPage;
