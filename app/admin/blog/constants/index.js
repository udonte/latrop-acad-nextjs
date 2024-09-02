// Mock blogs
export const mockBlogs = Array.from({ length: 16 }, (_, index) => ({
  id: index + 1,
  title: `AI: The New Tech Oil ${index + 1}`,
  description:
    "Lorem ipsum dolor sit amet consectetur. Malesuada ut id faucibus urna a.",
  date: new Date(2024, 7 - index, 1).toLocaleDateString(),
  featured: false,
}));
