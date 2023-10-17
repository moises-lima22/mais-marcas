import { jwtVerify } from "jose";

const encoder = new TextEncoder();

const SECRET_KEY = encoder.encode(
  "T1VuaXZlcnNvRUluY3JpdmVsbWVudGVWYXN0b0VNaXN0ZXJpb3NvQXNzaW1Db21vT1NlZ3JlZG9RdWVFc3RhU2VuZG9Vc2Fkb1BhcmFQcm90ZWdlck5vc3Nhc1Nlbmhhcw=="
);

export default function authGuard(router) {
  if (!router) return;

  router.beforeEach(async (to, from, next) => {
    const token = localStorage.getItem("accessToken");

    if (to.name === "login" && token) {
      next();
      return;
    }

    if (to.meta.requiresAuth && !token) {
      next({ name: "login" });
      return;
    }

    if (to.meta.requiresAuth) {
      try {
        await validateAccessToken(token);
        next();
      } catch (error) {
        console.error("Token inválido.");
        localStorage.removeItem("accessToken");
        next({ name: "login" });
      }
      return;
    }

    next();
  });

  async function validateAccessToken(token) {
    try {
      await jwtVerify(token, SECRET_KEY);
      return true;
    } catch (error) {
      console.error("Token inválido.");
      throw error;
    }
  }
}
