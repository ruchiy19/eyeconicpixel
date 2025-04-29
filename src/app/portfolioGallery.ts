export class portfolioGallery{
    url:string="";
    websiteName:string="";
   IMG:string= ""

    constructor(url:string, websiteName:string, IMG:string){
        this.url = url;
        this.IMG = IMG;
        this.websiteName = websiteName;
    }
}