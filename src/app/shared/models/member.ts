export interface Member {
  id: string;
  image: string;
  name: string;
  position: string;
  socialMedias: SocialMedia;
}

export interface SocialMedia {
  whatsapp: string;
  instagram: string;
  linkedin: string;
}
