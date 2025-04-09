import { locales } from "@/config";

export type Locale = (typeof locales)[number];

export const getNavItems = (locale: string) => {
  if (!["en", "ru"].includes(locale as Locale)) locale = "en";

  const names: Record<Locale, string[]> = {
    en: ["Dashboard", "Documents", "Images", "Media", "Others"],
    ru: ["Главная", "Документы", "Изображения", "Медиа", "Другое"],
  };

  const safeLocale = locale as Locale;

  return [
    {
      name: names[safeLocale][0],
      icon: "/assets/icons/dashboard.svg",
      url: "/",
    },
    {
      name: names[safeLocale][1],
      icon: "/assets/icons/documents.svg",
      url: "/documents",
    },
    {
      name: names[safeLocale][2],
      icon: "/assets/icons/images.svg",
      url: "/images",
    },
    {
      name: names[safeLocale][3],
      icon: "/assets/icons/video.svg",
      url: "/media",
    },
    {
      name: names[safeLocale][4],
      icon: "/assets/icons/others.svg",
      url: "/others",
    },
  ];
};

export const getActionsDropdownItems = (locale: string) => {
  if (!["en", "ru"].includes(locale as Locale)) locale = "en";

  const labels: Record<Locale, string[]> = {
    en: ["Rename", "Details", "Share", "Download", "Delete"],
    ru: ["Переименовать", "Свойства", "Поделиться", "Скачать", "Удалить"],
  };

  const safeLocale = locale as Locale;

  return [
    {
      label: labels[safeLocale][0],
      icon: "/assets/icons/edit.svg",
      value: "rename",
    },
    {
      label: labels[safeLocale][1],
      icon: "/assets/icons/info.svg",
      value: "details",
    },
    {
      label: labels[safeLocale][2],
      icon: "/assets/icons/share.svg",
      value: "share",
    },
    {
      label: labels[safeLocale][3],
      icon: "/assets/icons/download.svg",
      value: "download",
    },
    {
      label: labels[safeLocale][4],
      icon: "/assets/icons/delete.svg",
      value: "delete",
    },
  ];
};

export const getSortTypes = (locale: string) => {
  if (!["en", "ru"].includes(locale as Locale)) locale = "en";

  const labels: Record<Locale, string[]> = {
    en: [
      "Date created (newest)",
      "Date created (oldest)",
      "Name (A-Z)",
      "Name (Z-A)",
      "Size (Highest)",
      "Size (Lowest)",
    ],
    ru: [
      "Дата создания (новые)",
      "Дата создания (старые)",
      "Имя (А-Я)",
      "Имя (Я-А)",
      "Размер (с больших)",
      "Размер (с меньших)",
    ],
  };

  const safeLocale = locale as Locale;

  return [
    { label: labels[safeLocale][0], value: "$createdAt-desc" },
    { label: labels[safeLocale][1], value: "$createdAt-asc" },
    { label: labels[safeLocale][2], value: "name-asc" },
    { label: labels[safeLocale][3], value: "name-desc" },
    { label: labels[safeLocale][4], value: "size-desc" },
    { label: labels[safeLocale][5], value: "size-asc" },
  ];
};

export const avatarPlaceholderUrl =
  "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg";

export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
