export interface projectData {
  _id: string;
  title: string;
  tags: string[];
  order: number;
  technologies: string[];
  published: Boolean;
  category: string;
  short_desc: string;
  desc: string;
  link: string;
  repo_link: string;
  pic: string;
  picType: string;
}

export interface projectDataElements {
  _id?: string;
  title?: string;
  tags?: string[];
  order?: number;
  technologies?: string[];
  published?: Boolean;
  category?: string;
  short_desc?: string;
  desc?: string;
  link?: string;
  repo_link?: string;
  pic?: string;
  picType?: string;
}
