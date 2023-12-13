export const isDefaultAvatar = <T>(newAvatar: T, defaultAvatar: T) =>
  newAvatar === defaultAvatar ? "" : newAvatar;
