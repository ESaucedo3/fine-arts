import { reactive } from "vue";
// eslint-disable-next-line no-unused-vars
import { Art } from "./models/Art.js";

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  /**@type {Art[]} */
  arts: [],
  currentPage: 0,
  totalPages: 0,
  /**@type {Art} */
  activeArt: null,
});
