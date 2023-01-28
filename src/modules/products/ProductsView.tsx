import React from "react";

import {
  FormControl,
  MenuItem,
  Pagination,
  Select,
  Skeleton,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

import ProductCard from "./components/ProductCard";
import { ProductService } from "./lib/ProductsService";
import { Product } from "./utils/types";

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
  const productService = new ProductService();
  const [products, setProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [columns, setColumns] = React.useState("4");
  const [page, setPage] = React.useState(1);
  const limit = 20;
  const skip = (page - 1) * limit;

  const gridClass = `grid grid-cols-${columns} gap-x-10 gap-y-10 py-5`;

  React.useEffect(() => {
    try {
      setLoading(true);
      setProducts([]);

      productService.products(limit, skip).then((products) => {
        setProducts(products);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [page]);

  const handleChange = (event: SelectChangeEvent) => {
    setColumns(event.target.value as string);
  };

  const loadingState = (
    <>
      {Array.from(Array(20).keys()).map((product) => {
        return (
          <Skeleton
            key={product}
            variant="rectangular"
            width={310}
            height={320}
          />
        );
      })}
    </>
  );

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
        {loading
          ? loadingState
          : products.map((product) => {
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
        <Pagination
          count={5}
          size="large"
          onChange={(event, page) => {
            setPage(page);
          }}
        />
      </div>
    </div>
  );
}
