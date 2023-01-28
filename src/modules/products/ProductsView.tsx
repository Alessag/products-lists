import React from "react";

import { SelectChangeEvent } from "@mui/material/Select";
import { FormControl, MenuItem, Pagination, Select } from "@mui/material";
import ProductCard from "./components/ProductCard";
import { Product } from "./utils/types";
import { ProductService } from "./lib/ProductsService";

const options = [
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
];

export function ProductsView() {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [columns, setColumns] = React.useState("4");
  const gridClass = `grid grid-cols-${columns} gap-x-10 gap-y-10 py-5`;
  const productService = new ProductService();

  React.useEffect(() => {
    console.log("useEffect");
    productService.products(10).then((products) => {
      setProducts(products);
    });
    console.log("Products", products);
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    setColumns(event.target.value as string);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold underline underline-offset-2">
        Products List
      </h1>
      <div className="w-full h-20 flex justify-end items-center">
        <p className="mr-3">Number of cards per column</p>
        <FormControl className="w-20">
          <Select
            labelId="simple-select-label"
            id="simple-select"
            value={columns}
            onChange={handleChange}
          >
            {options.map((option) => {
              return (
                <MenuItem key={option.label} value={option.value}>
                  {option.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <div className={gridClass}>
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              brand={product.brand}
              images={product.images}
              thumbnail={product.thumbnail}
              title={product.title}
            />
          );
        })}
      </div>
      <div className="flex justify-center items-center h-32">
        <Pagination count={10} size="large" />
      </div>
    </div>
  );
}
