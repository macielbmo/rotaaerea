export const getTheme = (): string | null => {
  return localStorage.getItem('userTheme');
};

export const setTheme = (theme: string): void => {
  localStorage.setItem('userTheme', theme);
};
