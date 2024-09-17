export class Art {
  constructor(data) {
    this.id = data.id;
    this.height = data.height;
    this.width = data.width;
    this.regularImg = data.imgUrls.regular;
    this.smallImg = data.imgUrls.small;
    this.description = data.description;
    this.color = data.color;
    this.admirers = data.admirers;
  }
}
