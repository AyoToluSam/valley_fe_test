import { mockProspects } from "@/store/data/prospect";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const mockBaseQuery: BaseQueryFn = async ({ url, method }) => {
  try {
    await delay(600);

    const prospectMatch = url.match(/^\/prospects\/(\d+)$/);
    if (prospectMatch && method === "GET") {
      const id = prospectMatch[1];
      const prospect = mockProspects.find((p) => p.id === id);

      if (prospect) {
        return {
          data: {
            status: 200,
            message: "Prospect fetched successfully",
            errors: null,
            data: prospect,
          },
        };
      } else {
        return {
          error: {
            status: 401,
            message: "Prospect not found",
            errors: ["Prospect not found"],
            data: null,
          },
        };
      }
    }

    return {
      error: {
        status: 404,
        message: "API Route Not found",
        errors: ["API Route Not found"],
        data: null,
      },
    };
  } catch (error) {
    console.error("Mock Base Query Error:", error);
    return {
      error: {
        status: 500,
        message: "Internal Server Error",
        errors: ["An unexpected error occurred"],
        data: null,
      },
    };
  }
};
