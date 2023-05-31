

export class SideProject{
    title: string;
    description: string;
    img_src: string;
    github_link: string;
    page_link?: string;

    constructor(title: string, description: string, img_src: string, github_link: string, page_link?: string) {
        this.title = title;
        this.description = description;
        this.img_src = img_src;
        this.github_link = github_link;
        this.page_link = page_link;

    }
}



