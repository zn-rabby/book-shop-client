/* eslint-disable @typescript-eslint/no-explicit-any */

import { TQueryParam } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/user/users",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: any) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
    }),
    updateUserRole: builder.mutation({
      query: (args) => ({
        url: `/user/users/${args.id}/role`,
        method: "PATCH",
        body: args.data,
      }),
    }),
    updateUserStatus: builder.mutation({
      query: (args) => ({
        url: `/user/users/${args.id}/status`,
        method: "PATCH",
        body: args.data,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/user/users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
  useUpdateUserStatusMutation,
  useDeleteUserMutation,
} = userApi;
