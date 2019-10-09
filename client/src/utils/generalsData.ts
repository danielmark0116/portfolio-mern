import { generalsData } from '../types/generalsData';

export const formatResponse = (response: any): generalsData => {
  const {
    nameId,
    githubLink,
    instagramLink,
    linkedInLink,
    subtitle,
    about,
    email,
    phone
  } = response;

  return {
    nameId,
    githubLink,
    instagramLink,
    linkedInLink,
    subtitle,
    about,
    email,
    phone
  };
};
