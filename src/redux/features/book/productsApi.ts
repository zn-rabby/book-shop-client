import { ApiResponse, TProduct } from "../../../types/bookManagement.type";
import { TQueryParam } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (productData) => ({
        url: "/product",
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["products"],
    }),
    getAllProducts: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/product",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["products"],
      transformResponse: (response: ApiResponse<TProduct[]>) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      transformResponse: (response: ApiResponse<TProduct>) => {
        return {
          data: response?.data,
        };
      },
    }),
    updateProduct: builder.mutation({
      query: (args) => ({
        url: `/product/${args.id}`,

        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi;
