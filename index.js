
export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/") {
      return Response.json({
        name: "Gmail AI Assistant",
        status: "online",
        message: "Backend is deployed. Gmail is not connected yet."
      });
    }

    return Response.json(
      { error: "Endpoint not found" },
      { status: 404 }
    );
  }
};
