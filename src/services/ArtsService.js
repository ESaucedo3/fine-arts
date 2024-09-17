import { Art } from "@/models/Art.js";
import { api } from "./AxiosService.js";
import { AppState } from "@/AppState.js";

class ArtsService {
  async admire(artId) {
    const response = await api.post(`api/artworks/${artId}/admire`);
    const arts = AppState.arts;
    const artIndex = arts.findIndex((art) => art.id === artId);
    const actualArt = new Art(response.data);
    arts.splice(artIndex, 1, actualArt);
  }
  async changePage(pageNumber) {
    const response = await api.get(`api/artworks?page=${pageNumber}`);
    this.responseDataHandler(response.data);
  }
  async getArts() {
    const response = await api.get("api/artworks");
    this.responseDataHandler(response.data);
  }

  responseDataHandler(responseData) {
    const actualArts = responseData.artworks.map((art) => new Art(art));
    AppState.arts = actualArts;
    AppState.currentPage = responseData.page;
    AppState.totalPages = responseData.pages;
  }
}

export const artsService = new ArtsService();
