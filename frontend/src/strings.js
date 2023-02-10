// This file contains the relevant links used for asynchronous API calls in the frontend

const local_API_path = "http://localhost:5001/h4g2023/us-central1/api"
// const local_API_path = "http://localhost:5002"
const login_API_path = local_API_path + "/users/login" // POST
const register_API_path = local_API_path + "/users" // POST
const get_user_details_API_path = local_API_path + "/users" // GET
const update_user_details_API_path = local_API_path + "/users" // PATCH

export { login_API_path, register_API_path, get_user_details_API_path, update_user_details_API_path }